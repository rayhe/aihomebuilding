/**
 * Reading Bookmark — "Continue Reading" feature
 * 
 * On article pages: saves scroll position, title, and URL to localStorage.
 * On the homepage: shows a floating toast with a link to resume reading.
 * Clears bookmark when article is completed (100% scroll).
 */
(function() {
  'use strict';

  var STORAGE_KEY = 'aihb_reading_bookmark';

  // Detect if we're on an article page
  var articleContent = document.querySelector('.article-body, .article-content, article .content');
  var isArticlePage = !!articleContent && window.location.pathname.indexOf('/articles/') !== -1;

  // Detect if we're on the homepage
  var isHomepage = window.location.pathname === '/' || 
                   window.location.pathname === '/index.html' || 
                   window.location.pathname.endsWith('/aihomebuilding/') ||
                   window.location.pathname.endsWith('/aihomebuilding/index.html');

  if (isArticlePage) {
    initArticleTracking();
  } else if (isHomepage) {
    initHomepageToast();
  }

  function initArticleTracking() {
    var title = document.querySelector('h1');
    var titleText = title ? title.textContent.trim() : document.title.replace(' — AI Home Building', '');
    var url = window.location.pathname;
    var scrollTimeout = null;
    var completed = false;

    // Save position on scroll (throttled)
    window.addEventListener('scroll', function() {
      if (completed) return;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        var scrollPct = getScrollPercentage();
        
        // If completed (>95%), clear the bookmark
        if (scrollPct > 95) {
          completed = true;
          try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
          return;
        }

        // Only save if user has scrolled past the hero (>5%)
        if (scrollPct > 5) {
          var bookmark = {
            title: titleText,
            url: url,
            scrollPct: Math.round(scrollPct),
            timestamp: Date.now(),
            // Find the nearest heading for context
            section: getNearestHeading()
          };
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmark));
          } catch(e) {}
        }
      }, 500);
    });

    // On page load, if we have a hash fragment from a bookmark click, scroll there
    if (window.location.hash === '#resume-reading') {
      var saved = getBookmark();
      if (saved && saved.url === url && saved.scrollPct) {
        var targetY = (saved.scrollPct / 100) * (document.documentElement.scrollHeight - window.innerHeight);
        setTimeout(function() {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }, 300);
      }
    }
  }

  function initHomepageToast() {
    var bookmark = getBookmark();
    if (!bookmark) return;

    // Don't show if bookmark is older than 7 days
    var age = Date.now() - bookmark.timestamp;
    if (age > 7 * 24 * 60 * 60 * 1000) {
      try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
      return;
    }

    // Don't show if user dismissed recently (within 1 hour)
    var dismissedAt = 0;
    try { dismissedAt = parseInt(localStorage.getItem(STORAGE_KEY + '_dismissed') || '0'); } catch(e) {}
    if (Date.now() - dismissedAt < 60 * 60 * 1000) return;

    // Create the toast
    var toast = document.createElement('div');
    toast.className = 'reading-bookmark-toast';
    toast.innerHTML = 
      '<div class="rb-inner">' +
        '<div class="rb-icon">📖</div>' +
        '<div class="rb-content">' +
          '<div class="rb-label">Continue Reading</div>' +
          '<a class="rb-title" href="' + bookmark.url + '#resume-reading">' + escapeHtml(bookmark.title) + '</a>' +
          '<div class="rb-meta">' + bookmark.scrollPct + '% read' + (bookmark.section ? ' · ' + escapeHtml(bookmark.section) : '') + '</div>' +
        '</div>' +
        '<button class="rb-dismiss" aria-label="Dismiss">&times;</button>' +
      '</div>';

    // Add styles
    var style = document.createElement('style');
    style.textContent = 
      '.reading-bookmark-toast {' +
        'position: fixed; bottom: 24px; right: 24px; z-index: 10000;' +
        'max-width: 360px; width: calc(100vw - 48px);' +
        'background: var(--bg-card, #fff); color: var(--text-primary, #1a1a1a);' +
        'border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1);' +
        'border-left: 4px solid #FF6B35;' +
        'transform: translateY(120%); opacity: 0;' +
        'transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;' +
        'font-family: Inter, -apple-system, sans-serif;' +
      '}' +
      '.reading-bookmark-toast.visible { transform: translateY(0); opacity: 1; }' +
      '.rb-inner { display: flex; align-items: flex-start; padding: 14px 16px; gap: 12px; }' +
      '.rb-icon { font-size: 1.5rem; line-height: 1; flex-shrink: 0; margin-top: 2px; }' +
      '.rb-content { flex: 1; min-width: 0; }' +
      '.rb-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #FF6B35; margin-bottom: 4px; }' +
      '.rb-title { display: block; font-size: 0.9rem; font-weight: 600; color: var(--text-primary, #1a1a1a); text-decoration: none; line-height: 1.3; ' +
        'overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }' +
      '.rb-title:hover { color: #FF6B35; }' +
      '.rb-meta { font-size: 0.75rem; color: var(--text-muted, #888); margin-top: 4px; }' +
      '.rb-dismiss { position: absolute; top: 8px; right: 10px; background: none; border: none; font-size: 1.2rem; color: var(--text-muted, #888); cursor: pointer; padding: 4px; line-height: 1; }' +
      '.rb-dismiss:hover { color: var(--text-primary, #1a1a1a); }' +
      '[data-theme="dark"] .reading-bookmark-toast { box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3); }' +
      '@media (max-width: 480px) { .reading-bookmark-toast { bottom: 16px; right: 16px; max-width: calc(100vw - 32px); } }';

    document.head.appendChild(style);
    document.body.appendChild(toast);

    // Animate in after a short delay
    setTimeout(function() { toast.classList.add('visible'); }, 800);

    // Dismiss button
    toast.querySelector('.rb-dismiss').addEventListener('click', function(e) {
      e.preventDefault();
      toast.classList.remove('visible');
      try { localStorage.setItem(STORAGE_KEY + '_dismissed', String(Date.now())); } catch(e) {}
      setTimeout(function() { toast.remove(); }, 400);
    });

    // Auto-hide after 15 seconds
    setTimeout(function() {
      if (toast.classList.contains('visible')) {
        toast.classList.remove('visible');
        setTimeout(function() { toast.remove(); }, 400);
      }
    }, 15000);

    // Clear on click (user is resuming)
    toast.querySelector('.rb-title').addEventListener('click', function() {
      // Don't clear — let the article page handle it
    });
  }

  // Helpers
  function getScrollPercentage() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }

  function getNearestHeading() {
    var headings = document.querySelectorAll('.article-body h2, .article-content h2, article .content h2');
    if (!headings.length) return '';
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var nearest = '';
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top + scrollTop <= scrollTop + 200) {
        nearest = headings[i].textContent.trim();
      }
    }
    return nearest;
  }

  function getBookmark() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e) { return null; }
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
})();
