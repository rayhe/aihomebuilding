/**
 * Dynamic Related Articles Engine
 * Automatically suggests 2-3 related articles based on category matching.
 * Replaces hardcoded "Keep Reading" sections with smart recommendations.
 * Tracks reading history in localStorage for "don't repeat" logic.
 */
(function() {
  'use strict';

  // Full article catalog — category, slug, title, image alt text
  var ARTICLES = [
    { slug: 'ai-permit-automation', cat: 'policy', title: 'Your Permit Application Was Rejected. An AI Could Have Caught It Before You Submitted.', img: 'ai-permit-automation.jpg' },
    { slug: 'construction-safety-ai', cat: 'workforce', title: '1,034 Construction Workers Died Last Year. An AI Saw It Coming.', img: 'construction-safety-ai.jpg' },
    { slug: 'ai-energy-modeling', cat: 'sustainability', title: 'Your Architect\u2019s Energy Model Took 2 Hours. The AI Did It in 2 Seconds.', img: 'ai-energy-modeling.jpg' },
    { slug: 'ai-builder-org-simulation', cat: 'workforce', title: 'We Simulated What Happens When a 200-Person Builder Adopts AI. It\u2019s Not What the Vendors Promised.', img: 'ai-builder-org-simulation.jpg' },
    { slug: 'ai-aging-in-place', cat: 'policy', title: '14 Million Seniors Fall Every Year. An AI Just Scanned Their Homes.', img: 'ai-aging-in-place.jpg' },
    { slug: 'smart-wiring-ai', cat: 'construction-tech', title: 'Your Breaker Box Is the Dumbest Thing in Your House. That\u2019s About to Change.', img: 'smart-wiring-ai.jpg' },
    { slug: 'ai-structural-engineering', cat: 'construction-tech', title: 'Your Home Has 30% More Steel Than It Needs. AI Knows Exactly How Much to Remove.', img: 'ai-structural-engineering.jpg' },
    { slug: 'ai-home-appraisal', cat: 'policy', title: 'Your Home Appraiser Drove 45 Minutes to Guess. The Algorithm Already Knew.', img: 'ai-home-appraisal.jpg' },
    { slug: 'ai-concrete-optimization', cat: 'sustainability', title: 'Cement Produces 8% of Global CO\u2082. An Algorithm Just Cut That by a Third.', img: 'ai-concrete-optimization.jpg' },
    { slug: 'modular-prefab-ai', cat: 'construction-tech', title: 'Modular Housing Failed Twice. AI Factories Might Be the Third Attempt That Works.', img: 'modular-prefab-ai.jpg' },
    { slug: 'ai-waste-sorting', cat: 'sustainability', title: 'Your Demolished House Is Worth $14,000. A Robot Just Found It in the Rubble.', img: 'ai-waste-sorting.jpg' },
    { slug: 'mass-timber-ai', cat: 'sustainability', title: 'Your Next Home Could Be Built from Trees. AI Is Making Sure It Doesn\u2019t Burn Down.', img: 'mass-timber-ai.jpg' },
    { slug: '3d-printed-homes', cat: 'construction-tech', title: 'A Robot Printed 100 Houses in Texas. Your Neighborhood Could Be Next.', img: '3d-printed-homes.jpg' },
    { slug: 'ai-predictive-maintenance', cat: 'construction-tech', title: 'Your Furnace Knows It\u2019s Dying. It Just Can\u2019t Tell You Yet.', img: 'ai-predictive-maintenance.jpg' },
    { slug: 'parametric-design', cat: 'architecture', title: 'Every Wall Is a Variable. Parametric Design Turns Custom Homes into Solvable Equations.', img: 'parametric-design.jpg' },
    { slug: 'ai-agents-construction', cat: 'project-mgmt', title: 'Your General Contractor Just Hired an AI Agent. Here\u2019s What It Does All Day.', img: 'ai-agents-construction.jpg' },
    { slug: 'ai-architect-client', cat: 'architecture', title: 'Your Architect Used to Guess What You Wanted. Now AI Shows You.', img: 'ai-architect-client.jpg' },
    { slug: 'ai-quality-inspection', cat: 'construction-tech', title: 'Your Builder Missed 26 Defects. The AI Camera Found Every One.', img: 'ai-quality-inspection.jpg' },
    { slug: 'ai-renovation', cat: 'architecture', title: 'You Used to Gut-Renovate on Gut Feeling. Now AI Shows You the Finished Kitchen First.', img: 'ai-renovation.jpg' },
    { slug: 'insurance-ai-homes', cat: 'policy', title: 'Your Insurer Has No Idea How to Price a Robot-Built Home.', img: 'insurance-ai-homes.jpg' },
    { slug: 'ai-zoning-analysis', cat: 'policy', title: 'Your Backyard Could Fit an ADU. The Algorithm Already Knows.', img: 'ai-zoning-analysis.jpg' },
    { slug: 'ai-land-acquisition', cat: 'project-mgmt', title: 'Your Builder Used to Drive Every Lot. Now AI Scores 10,000 Parcels Before Breakfast.', img: 'ai-land-acquisition.jpg' },
    { slug: 'construction-productivity-ai', cat: 'cross-cutting', title: 'Construction Productivity Has Been Flat for 30 Years. AI Might Finally Break the Curse.', img: 'construction-productivity-ai.jpg' },
    { slug: 'contech-vc-investment', cat: 'cross-cutting', title: 'Investors Poured $2 Billion Into Katerra. It Vanished. Now They\u2019re Back.', img: 'contech-vc-investment.jpg' },
    { slug: 'ai-disaster-resilient-homes', cat: 'construction-tech', title: 'The Palisades Fire Destroyed 16,000 Homes. Robots Are Building Them Back Fireproof.', img: 'ai-disaster-resilient-homes.jpg' },
    { slug: 'embodied-carbon-ai', cat: 'sustainability', title: 'Your Home\u2019s Carbon Footprint Was Decided Before You Moved In. AI Is Finally Counting It.', img: 'embodied-carbon-ai.jpg' },
    { slug: 'ai-architectural-design', cat: 'architecture', title: 'The Architect\u2019s New Brain: How AI Is Redesigning Home Design.', img: 'ai-architectural-design.jpg' },
    { slug: 'robotic-bricklaying', cat: 'construction-tech', title: 'This Robot Lays 360 Blocks an Hour. Your Bricklayer Does 40.', img: 'robotic-bricklaying.jpg' },
    { slug: 'autonomous-heavy-equipment', cat: 'construction-tech', title: 'The Excavator Dug Your Foundation. Nobody Was Driving It.', img: 'autonomous-heavy-equipment.jpg' },
    { slug: 'construction-workforce', cat: 'workforce', title: 'The 500,000 Missing Workers.', img: 'construction-workforce.jpg' },
    { slug: 'robot-operator-workforce', cat: 'workforce', title: 'He Used to Drive the Excavator. Now He Supervises Three That Drive Themselves.', img: 'robot-operator-workforce.jpg' },
    { slug: 'ai-project-management', cat: 'project-mgmt', title: 'From 14 Months to 10: AI Project Management.', img: 'ai-project-management.jpg' },
    { slug: 'ai-code-compliance', cat: 'policy', title: 'Your Architect Missed a Code Violation. The AI Didn\u2019t.', img: 'ai-code-compliance.jpg' },
    { slug: 'ai-cost-estimation', cat: 'project-mgmt', title: 'Your Contractor\u2019s Bid Is a Guess. AI Is Making It a Science.', img: 'ai-cost-estimation.jpg' },
    { slug: 'ai-energy-modeling', cat: 'sustainability', title: 'AI Can Now Model Your Home\u2019s Energy Use Before You Break Ground.', img: 'ai-energy-modeling.jpg' },
    { slug: 'ai-interior-design', cat: 'architecture', title: 'Upload a Photo of Your Room. Get a New One in 10 Seconds.', img: 'ai-interior-design.jpg' },
    { slug: 'ai-permit-automation', cat: 'policy', title: 'Your Building Permit Takes 4 Months. AI Can Review It in 4 Minutes.', img: 'ai-permit-automation.jpg' },
    { slug: 'ai-supply-chain-construction', cat: 'project-mgmt', title: '90% of Builders Had Materials Show Up Late Last Year. AI Knows Why.', img: 'ai-supply-chain-construction.jpg' },
    { slug: 'construction-safety-ai', cat: 'workforce', title: '1,032 Construction Workers Died Last Year. AI Cameras Could Have Saved Hundreds.', img: 'construction-safety-ai.jpg' },
    { slug: 'digital-twins', cat: 'construction-tech', title: 'Your Home\u2019s Digital Twin Knows It Better Than You Do.', img: 'digital-twins.jpg' },
    { slug: 'drone-site-monitoring', cat: 'construction-tech', title: 'Drones Are Watching Your Home Get Built \u2014 And Catching Mistakes You\u2019d Never See.', img: 'drone-site-monitoring.jpg' },
    { slug: 'housing-shortage-ai-policy', cat: 'policy', title: 'America Is 4.7 Million Homes Short. AI Won\u2019t Fix That Alone.', img: 'housing-shortage-ai-policy.jpg' },
    { slug: 'smart-home-construction', cat: 'construction-tech', title: 'Wire It Smart During Framing or Pay 5\u00d7 More Later. Here\u2019s What to Run.', img: 'smart-home-construction.jpg' }
  ];

  // Category adjacency — related categories to check if same-cat results are sparse
  var ADJACENT = {
    'sustainability': ['construction-tech', 'policy'],
    'construction-tech': ['sustainability', 'project-mgmt'],
    'architecture': ['construction-tech', 'sustainability'],
    'project-mgmt': ['construction-tech', 'cross-cutting'],
    'policy': ['sustainability', 'cross-cutting'],
    'workforce': ['project-mgmt', 'cross-cutting'],
    'cross-cutting': ['project-mgmt', 'workforce']
  };

  function getCurrentSlug() {
    var path = window.location.pathname;
    var match = path.match(/\/articles\/([^\/]+?)(?:\.html)?$/);
    if (match) return match[1];
    // Fallback: check filename
    var parts = path.split('/');
    var last = parts[parts.length - 1] || parts[parts.length - 2];
    return last.replace('.html', '');
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function getReadArticles() {
    try {
      return JSON.parse(localStorage.getItem('aihb_read') || '[]');
    } catch(e) { return []; }
  }

  function markAsRead(slug) {
    var read = getReadArticles();
    if (read.indexOf(slug) === -1) {
      read.push(slug);
      if (read.length > 50) read = read.slice(-50);
      try { localStorage.setItem('aihb_read', JSON.stringify(read)); } catch(e) {}
    }
  }

  function findRelated(currentSlug, count) {
    count = count || 3;
    var current = null;
    for (var i = 0; i < ARTICLES.length; i++) {
      if (ARTICLES[i].slug === currentSlug) { current = ARTICLES[i]; break; }
    }
    if (!current) return ARTICLES.slice(0, count); // fallback

    var read = getReadArticles();
    var sameCat = [];
    var adjCat = [];
    var other = [];
    var adjCats = ADJACENT[current.cat] || [];

    for (var i = 0; i < ARTICLES.length; i++) {
      var a = ARTICLES[i];
      if (a.slug === currentSlug) continue;
      if (a.cat === current.cat) {
        sameCat.push(a);
      } else if (adjCats.indexOf(a.cat) !== -1) {
        adjCat.push(a);
      } else {
        other.push(a);
      }
    }

    // Prefer unread, then same category, then adjacent, then other
    shuffle(sameCat); shuffle(adjCat); shuffle(other);

    // Sort each group: unread first
    function sortUnread(arr) {
      return arr.sort(function(a, b) {
        var aRead = read.indexOf(a.slug) !== -1 ? 1 : 0;
        var bRead = read.indexOf(b.slug) !== -1 ? 1 : 0;
        return aRead - bRead;
      });
    }

    sortUnread(sameCat);
    sortUnread(adjCat);
    sortUnread(other);

    var result = [];
    var pools = [sameCat, adjCat, other];
    for (var p = 0; p < pools.length && result.length < count; p++) {
      for (var i = 0; i < pools[p].length && result.length < count; i++) {
        result.push(pools[p][i]);
      }
    }

    return result;
  }

  function injectStyles() {
    if (document.getElementById('related-styles')) return;
    var s = document.createElement('style');
    s.id = 'related-styles';
    s.textContent = [
      '.related-section { max-width: 720px; margin: 3rem auto 2rem; padding: 0 24px; }',
      '.related-section h3 { font-family: "Playfair Display", Georgia, serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 1.2rem; color: var(--text-primary, #1a1a1a); }',
      '.related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }',
      '.related-card { display: flex; flex-direction: column; border-radius: 10px; overflow: hidden; text-decoration: none; background: var(--bg-card, #fff); border: 1px solid var(--border, #e8e8e4); transition: transform 0.2s, box-shadow 0.2s; }',
      '.related-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }',
      '.related-card img { width: 100%; height: 120px; object-fit: cover; }',
      '.related-card-body { padding: 0.75rem; flex: 1; display: flex; flex-direction: column; }',
      '.related-card-body h4 { font-family: "Playfair Display", Georgia, serif; font-size: 0.95rem; font-weight: 700; line-height: 1.35; color: var(--text-primary, #1a1a1a); margin: 0 0 auto; }',
      '.related-card-body span { font-size: 0.8rem; color: var(--accent, #FF6B35); font-weight: 600; margin-top: 0.5rem; }',
      '@media (max-width: 600px) { .related-grid { grid-template-columns: 1fr; } .related-card { flex-direction: row; } .related-card img { width: 100px; height: auto; min-height: 80px; } }'
    ].join('\n');
    document.head.appendChild(s);
  }

  function render() {
    var slug = getCurrentSlug();
    markAsRead(slug);

    // Remove any existing hardcoded related section
    var existing = document.querySelector('.related-section');
    if (existing) existing.remove();

    var related = findRelated(slug, 3);
    if (!related.length) return;

    injectStyles();

    var section = document.createElement('div');
    section.className = 'related-section';
    var h3 = document.createElement('h3');
    h3.textContent = 'Keep Reading';
    section.appendChild(h3);

    var grid = document.createElement('div');
    grid.className = 'related-grid';

    for (var i = 0; i < related.length; i++) {
      var a = related[i];
      var card = document.createElement('a');
      card.href = a.slug + '.html';
      card.className = 'related-card';

      var img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = '../images/' + a.img;
      img.alt = a.title;
      card.appendChild(img);

      var body = document.createElement('div');
      body.className = 'related-card-body';
      var title = document.createElement('h4');
      title.textContent = a.title;
      body.appendChild(title);
      var readMore = document.createElement('span');
      readMore.textContent = 'Read More \u2192';
      body.appendChild(readMore);
      card.appendChild(body);

      grid.appendChild(card);
    }

    section.appendChild(grid);

    // Insert after share-bar or at end of article-body
    var shareBar = document.querySelector('.share-bar');
    var articleBody = document.querySelector('.article-body');
    if (shareBar && shareBar.parentNode) {
      shareBar.parentNode.insertBefore(section, shareBar.nextSibling);
    } else if (articleBody) {
      articleBody.appendChild(section);
    } else {
      // Last resort — before closing body
      document.body.appendChild(section);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
