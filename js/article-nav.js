/* article-nav.js — Prev/Next navigation + Author Bio cards for AI Home Building articles */
(function() {
  'use strict';

  var ARTICLES = [
    { s: '3d-printed-homes', t: 'A Robot Printed 100 Houses in Texas' },
    { s: 'ai-acoustics-design', t: 'Your Neighbor\u2019s TV Is 42 Decibels Too Loud' },
    { s: 'ai-agents-construction', t: 'Your General Contractor Just Hired an AI Agent' },
    { s: 'ai-aging-in-place', t: '14 Million Seniors Fall Every Year' },
    { s: 'ai-architect-client', t: 'Your Architect Used to Guess What You Wanted' },
    { s: 'ai-architectural-design', t: 'The Architect\u2019s New Brain' },
    { s: 'ai-builder-org-simulation', t: 'We Simulated a 200-Person Builder Adopting AI' },
    { s: 'ai-code-compliance', t: 'Your Architect Missed a Code Violation' },
    { s: 'ai-concrete-optimization', t: 'Cement Produces 8% of Global CO\u2082' },
    { s: 'ai-contractor-bidding', t: 'You Got Three Bids. AI Found 14 Red Flags' },
    { s: 'ai-cost-estimation', t: 'Your Contractor\u2019s Bid Is a Guess' },
    { s: 'ai-daylight-optimization', t: 'The Algorithm Tested 10,000 Window Options' },
    { s: 'ai-disaster-resilient-homes', t: 'Robots Are Building Them Back Fireproof' },
    { s: 'ai-energy-modeling', t: 'The AI Did the Energy Model in 2 Seconds' },
    { s: 'ai-foundation-design', t: 'The AI Modeled 10,000 Foundation Scenarios' },
    { s: 'ai-home-appraisal', t: 'The Algorithm Already Knew Your Home\u2019s Value' },
    { s: 'ai-hvac-design', t: 'Half of America\u2019s HVAC Systems Are Wrong' },
    { s: 'ai-interior-design', t: 'Upload a Photo. Get a New Room in 10 Seconds' },
    { s: 'ai-land-acquisition', t: 'AI Scores 10,000 Parcels Before Breakfast' },
    { s: 'ai-landscape-design', t: 'The AI Showed 15 Landscape Options in 30 Seconds' },
    { s: 'ai-mortgage-underwriting', t: 'The Bank Has No Idea How to Finance It' },
    { s: 'ai-permit-automation', t: 'An AI Could Have Caught It Before You Submitted' },
    { s: 'ai-predictive-maintenance', t: 'Your Furnace Knows It\u2019s Dying' },
    { s: 'ai-project-management', t: 'From 14 Months to 10' },
    { s: 'ai-quality-inspection', t: 'The AI Camera Found Every Defect' },
    { s: 'ai-renovation', t: 'AI Shows You the Finished Kitchen First' },
    { s: 'ai-structural-engineering', t: 'Your Home Has 30% More Steel Than It Needs' },
    { s: 'ai-supply-chain-construction', t: '90% of Builders Had Materials Show Up Late' },
    { s: 'ai-waste-sorting', t: 'A Robot Found $14,000 in the Rubble' },
    { s: 'ai-water-management', t: 'Your Pipes Leak 1 Trillion Gallons a Year' },
    { s: 'ai-zoning-analysis', t: 'The Algorithm Already Knows Your ADU Fits' },
    { s: 'autonomous-heavy-equipment', t: 'Nobody Was Driving the Excavator' },
    { s: 'construction-productivity-ai', t: 'Construction Productivity Has Been Flat 30 Years' },
    { s: 'construction-safety-ai', t: '1,034 Workers Died. An AI Saw It Coming' },
    { s: 'construction-workforce', t: 'The 500,000 Missing Workers' },
    { s: 'contech-vc-investment', t: '$2 Billion Into Katerra. It Vanished.' },
    { s: 'digital-twins', t: 'Your Home\u2019s Digital Twin Knows It Better' },
    { s: 'drone-site-monitoring', t: 'Drones Are Watching Your Home Get Built' },
    { s: 'embodied-carbon-ai', t: 'Your Carbon Footprint Was Decided Before Move-In' },
    { s: 'housing-shortage-ai-policy', t: 'America Is 4.7 Million Homes Short' },
    { s: 'humanoid-robots-construction', t: 'A Humanoid Robot Costs $13,500' },
    { s: 'insurance-ai-homes', t: 'Your Insurer Can\u2019t Price a Robot-Built Home' },
    { s: 'mass-timber-ai', t: 'AI Is Making Sure Your Timber Home Doesn\u2019t Burn' },
    { s: 'modular-prefab-ai', t: 'Modular Housing Failed Twice. AI Factories Might Work' },
    { s: 'parametric-design', t: 'Every Wall Is a Variable' },
    { s: 'robot-operator-workforce', t: 'He Supervises Three Excavators That Drive Themselves' },
    { s: 'robotic-bricklaying', t: 'This Robot Lays 360 Blocks an Hour' },
    { s: 'smart-home-construction', t: 'Wire It Smart During Framing or Pay 5\u00d7 More' },
    { s: 'smart-wiring-ai', t: 'Your Breaker Box Is the Dumbest Thing in Your House' }
  ];

  var AUTHORS = {
    'Elena Vasquez': {
      emoji: '\ud83c\udfdb\ufe0f', beat: 'Architecture & Design',
      bio: 'Former architecture critic with a Master\u2019s in architectural history. Draws connections between classical architecture and computational design.'
    },
    'Jake Kowalski': {
      emoji: '\ud83d\udd28', beat: 'Construction Technology',
      bio: 'Former construction worker turned tech writer. Gets excited about robots and hardware. Still has calluses.'
    },
    'Jake "Jackhammer" Kowalski': {
      emoji: '\ud83d\udd28', beat: 'Construction Technology',
      bio: 'Former construction worker turned tech writer. Gets excited about robots and hardware. Still has calluses.'
    },
    'Frank DeLuca': {
      emoji: '\ud83d\udccb', beat: 'Project Management & Operations',
      bio: '20 years as a general contractor before becoming a writer. PMP certified. Thinks in critical paths.'
    },
    'Frank "The Foreman" DeLuca': {
      emoji: '\ud83d\udccb', beat: 'Project Management & Operations',
      bio: '20 years as a general contractor before becoming a writer. PMP certified. Thinks in critical paths.'
    },
    'Priya Greenwood': {
      emoji: '\ud83c\udf3f', beat: 'Sustainability & Green Building',
      bio: 'Environmental engineer turned journalist. Previously worked at a net-zero design firm.'
    },
    'Marcus Washington': {
      emoji: '\ud83d\udcaa', beat: 'Workforce & Labor',
      bio: 'Labor reporter who covered manufacturing automation before pivoting to construction. Union family.'
    },
    'Marcus "Steel" Washington': {
      emoji: '\ud83d\udcaa', beat: 'Workforce & Labor',
      bio: 'Labor reporter who covered manufacturing automation before pivoting to construction. Union family.'
    },
    'Catherine Chen': {
      emoji: '\u2696\ufe0f', beat: 'Policy & Regulation',
      bio: 'JD from Georgetown, practiced construction law for 5 years before becoming a policy journalist.'
    },
    'Catherine "Code" Chen': {
      emoji: '\u2696\ufe0f', beat: 'Policy & Regulation',
      bio: 'JD from Georgetown, practiced construction law for 5 years before becoming a policy journalist.'
    },
    'Sasha Blueprint': {
      emoji: '\ud83d\udcd0', beat: 'Architecture & Design',
      bio: 'Covers the digital transformation of architectural practice.'
    }
  };

  function getCurrentSlug() {
    var path = window.location.pathname;
    var m = path.match(/articles\/([^\/\.]+)/);
    return m ? m[1] : null;
  }

  function findIndex(slug) {
    for (var i = 0; i < ARTICLES.length; i++) {
      if (ARTICLES[i].s === slug) return i;
    }
    return -1;
  }

  function getAuthorName() {
    var el = document.querySelector('.journalist');
    if (!el) return null;
    var text = el.textContent.trim();
    // Normalize smart quotes
    text = text.replace(/[\u201c\u201d]/g, '"').replace(/[\u2018\u2019]/g, "'");
    return text;
  }

  function injectNav(slug) {
    var idx = findIndex(slug);
    if (idx === -1) return;

    var prev = idx > 0 ? ARTICLES[idx - 1] : null;
    var next = idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : null;

    if (!prev && !next) return;

    var shareBar = document.querySelector('.share-bar');
    var container = shareBar ? shareBar.parentNode : document.querySelector('.article-body, .content, main');
    if (!container) return;

    var nav = document.createElement('nav');
    nav.className = 'article-nav';
    nav.setAttribute('aria-label', 'Article navigation');

    var html = '';
    if (prev) {
      html += '<a class="nav-link nav-prev" href="' + prev.s + '.html">' +
        '<span class="nav-label">\u2190 Previous</span>' +
        '<span class="nav-title">' + prev.t + '</span></a>';
    } else {
      html += '<span class="nav-link nav-placeholder"></span>';
    }

    html += '<a class="nav-link nav-home" href="../index.html">\ud83c\udfe0 All Articles</a>';

    if (next) {
      html += '<a class="nav-link nav-next" href="' + next.s + '.html">' +
        '<span class="nav-label">Next \u2192</span>' +
        '<span class="nav-title">' + next.t + '</span></a>';
    } else {
      html += '<span class="nav-link nav-placeholder"></span>';
    }

    nav.innerHTML = html;

    if (shareBar && shareBar.nextSibling) {
      container.insertBefore(nav, shareBar.nextSibling);
    } else {
      container.appendChild(nav);
    }
  }

  function injectAuthorBio() {
    var authorName = getAuthorName();
    if (!authorName) return;

    var info = AUTHORS[authorName];
    if (!info) return;

    var shareBar = document.querySelector('.share-bar');
    var container = shareBar ? shareBar.parentNode : document.querySelector('.article-body, .content, main');
    if (!container) return;

    var card = document.createElement('div');
    card.className = 'author-bio-card';
    card.innerHTML =
      '<div class="author-bio-avatar">' + info.emoji + '</div>' +
      '<div class="author-bio-info">' +
        '<div class="author-bio-name">' + authorName + '</div>' +
        '<div class="author-bio-beat">' + info.beat + '</div>' +
        '<div class="author-bio-text">' + info.bio + '</div>' +
      '</div>';

    // Insert before share bar
    if (shareBar) {
      container.insertBefore(card, shareBar);
    } else {
      container.appendChild(card);
    }
  }

  function injectStyles() {
    var style = document.createElement('style');
    style.textContent = [
      '.article-nav{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;margin:40px 0 20px;padding:24px 0;border-top:1px solid var(--border,#E8E8E4)}',
      '.nav-link{text-decoration:none;padding:12px 16px;border-radius:10px;transition:background 0.2s}',
      '.nav-link:hover{background:rgba(255,107,53,0.08)}',
      '.nav-prev{text-align:left}',
      '.nav-next{text-align:right}',
      '.nav-home{display:flex;align-items:center;justify-content:center;font-size:0.85rem;color:var(--text-secondary,#555);white-space:nowrap}',
      '.nav-label{display:block;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--accent,#FF6B35);margin-bottom:4px}',
      '.nav-title{display:block;font-size:0.92rem;color:var(--text,#1A1A1A);line-height:1.35;font-weight:500}',
      '.nav-placeholder{visibility:hidden}',
      '.author-bio-card{display:flex;gap:16px;align-items:flex-start;padding:20px 24px;margin:32px 0 16px;background:var(--bg-card,#fff);border:1px solid var(--border,#E8E8E4);border-radius:12px}',
      '.author-bio-avatar{font-size:2.2rem;flex-shrink:0;width:52px;height:52px;display:flex;align-items:center;justify-content:center;background:rgba(255,107,53,0.1);border-radius:50%}',
      '.author-bio-name{font-family:"Playfair Display",serif;font-weight:700;font-size:1.05rem;margin-bottom:2px}',
      '.author-bio-beat{font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--accent,#FF6B35);margin-bottom:6px}',
      '.author-bio-text{font-size:0.88rem;color:var(--text-secondary,#555);line-height:1.5}',
      '@media(max-width:640px){.article-nav{grid-template-columns:1fr;gap:8px}.nav-home{order:-1;margin-bottom:8px}.author-bio-card{flex-direction:column;align-items:center;text-align:center}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var slug = getCurrentSlug();
    if (!slug) return;
    injectStyles();
    injectAuthorBio();
    injectNav(slug);
  });
})();
