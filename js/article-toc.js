/**
 * Article Table of Contents — Auto-generated from h2/h3 headings
 * Only shows when ≥2 headings exist in .article-body
 * Supports dark/light mode via CSS variables
 */
(function() {
  'use strict';

  function init() {
    var body = document.querySelector('.article-body');
    if (!body) return;

    // Collect h2 and h3 inside .article-body, skip "Keep Reading" related section
    var headings = [];
    var els = body.querySelectorAll('h2, h3');
    for (var i = 0; i < els.length; i++) {
      var text = els[i].textContent.trim();
      if (text === 'Keep Reading' || text === 'Related Articles') continue;
      headings.push(els[i]);
    }

    if (headings.length < 2) return;

    // Inject CSS
    injectStyles();

    // Generate IDs for headings that lack them
    var usedIds = {};
    for (var i = 0; i < headings.length; i++) {
      if (!headings[i].id) {
        var slug = headings[i].textContent.trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        if (usedIds[slug]) {
          slug += '-' + (++usedIds[slug]);
        } else {
          usedIds[slug] = 1;
        }
        headings[i].id = slug;
      }
    }

    // Build TOC element
    var toc = document.createElement('nav');
    toc.className = 'article-toc';
    toc.setAttribute('aria-label', 'Table of Contents');

    var toggle = document.createElement('button');
    toggle.className = 'toc-toggle';
    toggle.innerHTML = '<span class="toc-icon">☰</span> In This Article <span class="toc-arrow">▾</span>';
    toggle.setAttribute('aria-expanded', 'true');

    var list = document.createElement('ol');
    list.className = 'toc-list';

    for (var i = 0; i < headings.length; i++) {
      var li = document.createElement('li');
      li.className = headings[i].tagName === 'H3' ? 'toc-item toc-sub' : 'toc-item';
      var a = document.createElement('a');
      a.href = '#' + headings[i].id;
      a.textContent = headings[i].textContent.trim();
      a.setAttribute('data-toc-index', i);
      li.appendChild(a);
      list.appendChild(li);
    }

    toc.appendChild(toggle);
    toc.appendChild(list);

    // Insert before first paragraph or first child of article-body
    var firstP = body.querySelector('p');
    if (firstP) {
      body.insertBefore(toc, firstP);
    } else {
      body.insertBefore(toc, body.firstChild);
    }

    // Toggle behavior (collapsed by default on mobile)
    var isOpen = window.innerWidth > 768;
    if (!isOpen) {
      list.style.display = 'none';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.toc-arrow').textContent = '▸';
    }

    toggle.addEventListener('click', function() {
      isOpen = !isOpen;
      list.style.display = isOpen ? '' : 'none';
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.querySelector('.toc-arrow').textContent = isOpen ? '▾' : '▸';
    });

    // Smooth scroll on click
    var links = list.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.getElementById(this.getAttribute('href').slice(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', this.getAttribute('href'));
        }
        // On mobile, collapse after click
        if (window.innerWidth <= 768) {
          isOpen = false;
          list.style.display = 'none';
          toggle.setAttribute('aria-expanded', 'false');
          toggle.querySelector('.toc-arrow').textContent = '▸';
        }
      });
    }

    // Scroll spy — highlight active section
    var tocLinks = list.querySelectorAll('a');
    var headingOffsets = [];

    function updateOffsets() {
      headingOffsets = [];
      for (var i = 0; i < headings.length; i++) {
        headingOffsets.push({
          id: headings[i].id,
          top: headings[i].getBoundingClientRect().top + window.pageYOffset - 120
        });
      }
    }

    function highlightActive() {
      var scrollY = window.pageYOffset;
      var activeIdx = -1;
      for (var i = headingOffsets.length - 1; i >= 0; i--) {
        if (scrollY >= headingOffsets[i].top) {
          activeIdx = i;
          break;
        }
      }
      for (var i = 0; i < tocLinks.length; i++) {
        if (i === activeIdx) {
          tocLinks[i].classList.add('toc-active');
        } else {
          tocLinks[i].classList.remove('toc-active');
        }
      }
    }

    updateOffsets();
    highlightActive();

    var scrollTimer;
    window.addEventListener('scroll', function() {
      if (scrollTimer) return;
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        highlightActive();
      }, 80);
    });

    window.addEventListener('resize', function() {
      updateOffsets();
    });
  }

  function injectStyles() {
    if (document.getElementById('toc-styles')) return;
    var style = document.createElement('style');
    style.id = 'toc-styles';
    style.textContent = [
      '.article-toc {',
      '  background: var(--bg-card, #fff);',
      '  border: 1px solid var(--border, #e8e8e4);',
      '  border-radius: 8px;',
      '  padding: 0;',
      '  margin: 0 0 2rem;',
      '  overflow: hidden;',
      '}',
      '.toc-toggle {',
      '  display: flex;',
      '  align-items: center;',
      '  gap: 0.4rem;',
      '  width: 100%;',
      '  padding: 0.75rem 1rem;',
      '  background: none;',
      '  border: none;',
      '  cursor: pointer;',
      '  font-family: Inter, sans-serif;',
      '  font-size: 0.85rem;',
      '  font-weight: 600;',
      '  color: var(--text-secondary, #555);',
      '  text-transform: uppercase;',
      '  letter-spacing: 0.05em;',
      '}',
      '.toc-toggle:hover { color: var(--accent, #FF6B35); }',
      '.toc-icon { font-size: 1rem; }',
      '.toc-arrow { margin-left: auto; font-size: 0.75rem; }',
      '.toc-list {',
      '  list-style: none;',
      '  margin: 0;',
      '  padding: 0 1rem 0.75rem;',
      '  counter-reset: toc;',
      '}',
      '.toc-item {',
      '  counter-increment: toc;',
      '  margin: 0;',
      '  padding: 0;',
      '}',
      '.toc-item a {',
      '  display: block;',
      '  padding: 0.4rem 0 0.4rem 0;',
      '  color: var(--text-secondary, #555);',
      '  text-decoration: none;',
      '  font-size: 0.9rem;',
      '  line-height: 1.4;',
      '  border-left: 2px solid transparent;',
      '  padding-left: 0.75rem;',
      '  transition: color 0.2s, border-color 0.2s;',
      '}',
      '.toc-item a:hover {',
      '  color: var(--accent, #FF6B35);',
      '}',
      '.toc-item a.toc-active {',
      '  color: var(--accent, #FF6B35);',
      '  border-left-color: var(--accent, #FF6B35);',
      '  font-weight: 600;',
      '}',
      '.toc-sub a {',
      '  padding-left: 1.75rem;',
      '  font-size: 0.85rem;',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
