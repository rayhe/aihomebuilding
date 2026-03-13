/* article-nav.js — Prev/Next navigation + Author Bio cards for AI Home Building articles */
/* Auto-generated from 78 articles in articles/ directory */
(function() {
  'use strict';

  var ARTICLES = [
    { s: '3d-printed-homes', t: 'A Robot Printed 100 Houses in Texas. Your Neighborhood Could Be Next.' },
    { s: 'ai-accessible-home-design', t: '97% of American Homes Fail a Wheelchair. AI Won\u2019t Fix That \u2014 But It Makes Excuses Harder.' },
    { s: 'ai-acoustics-design', t: 'Your Neighbor\u2019s TV Is 42 Decibels Too Loud. An AI Heard It Before the Walls Went Up.' },
    { s: 'ai-adu-planning', t: '18 States Legalized Your Backyard Cottage. AI Will Tell You If You Can Actually Build One.' },
    { s: 'ai-agents-construction', t: 'Your General Contractor Just Hired an AI Agent. Here\u2019s What It Does All Day.' },
    { s: 'ai-aging-in-place', t: '14 Million Seniors Fall Every Year. An AI Just Scanned Their Homes.' },
    { s: 'ai-architect-client', t: 'Your Architect Used to Guess What You Wanted. Now AI Shows You.' },
    { s: 'ai-architectural-design', t: 'The Architect\'s New Brain: How AI Is Redesigning Home Design From the Ground Up' },
    { s: 'ai-battery-storage-design', t: '28% of Solar Buyers Added a Battery Last Year. Most Bought the Wrong Size.' },
    { s: 'ai-builder-org-simulation', t: 'We Simulated What Happens When a 200-Person Builder Adopts AI. It\u2019s Not What the Vendors Promised.' },
    { s: 'ai-building-permits', t: 'Your Building Permit Took Six Months. Honolulu\u2019s Takes Three Days.' },
    { s: 'ai-code-compliance', t: 'Your Architect Missed a Code Violation. The AI Didn\u2019t.' },
    { s: 'ai-concrete-optimization', t: 'Cement Produces 8% of Global CO\u2082. An Algorithm Just Cut That by a Third.' },
    { s: 'ai-construction-draw', t: 'Your Draw Request Took 10 Days. Your Plumber Left on Day 3.' },
    { s: 'ai-construction-scheduling', t: '98% of Construction Projects Run Late. AI Recovers 42 Days on Average.' },
    { s: 'ai-construction-security', t: 'Your Job Site Lost $30,000 Last Weekend. The AI Camera Saw Everything.' },
    { s: 'ai-contractor-bidding', t: 'You Got Three Bids. AI Found 14 Red Flags You Missed.' },
    { s: 'ai-cost-estimation', t: 'Your Contractor\u2019s Estimate Is Wrong. It\u2019s Always Wrong. AI Might Be Wrong Differently.' },
    { s: 'ai-daylight-optimization', t: 'Your Architect Guessed Where to Put the Windows. The Algorithm Tested 10,000 Options.' },
    { s: 'ai-disaster-resilient-homes', t: 'The Palisades Fire Destroyed 16,000 Homes. Robots Are Building Them Back Fireproof.' },
    { s: 'ai-energy-modeling', t: 'Your Architect\u2019s Energy Model Took 2 Hours. The AI Did It in 2 Seconds.' },
    { s: 'ai-floor-plan-generators', t: 'The AI Drew Your Floor Plan in 30 Seconds. It Forgot the Stairs.' },
    { s: 'ai-foundation-design', t: 'Your Foundation Engineer Drilled Three Holes and Guessed. The AI Modeled 10,000 Scenarios.' },
    { s: 'ai-home-appraisal', t: 'Your Home Appraiser Drove 45 Minutes to Guess. The Algorithm Already Knew.' },
    { s: 'ai-home-inspection-buyers', t: 'Your Home Inspector Missed the Mold. The Algorithm Found It in a Photo.' },
    { s: 'ai-hvac-design', t: 'Half of America\u2019s HVAC Systems Are the Wrong Size. AI Is Fixing That Before the Drywall Goes Up.' },
    { s: 'ai-interior-design-tools', t: 'You Hired an AI Interior Designer for $29 a Month. It Picked the Same Sofa as Everyone Else.' },
    { s: 'ai-interior-design', t: 'Upload a Photo of Your Room. Get a New One in 10 Seconds.' },
    { s: 'ai-land-acquisition', t: 'Your Builder Used to Drive Every Lot. Now AI Scores 10,000 Parcels Before Breakfast.' },
    { s: 'ai-landscape-design', t: 'Your Landscaper Charged $6,000 to Guess. The AI Showed You 15 Options in 30 Seconds.' },
    { s: 'ai-mold-moisture-detection', t: '47% of American Buildings Have a Moisture Problem. The Walls Won\u2019t Tell You Until It\u2019s Too Late.' },
    { s: 'ai-mortgage-underwriting', t: 'You Built a 3D-Printed Home. The Bank Has No Idea How to Finance It.' },
    { s: 'ai-permit-automation', t: 'Your Permit Application Was Rejected. An AI Could Have Caught It Before You Submitted.' },
    { s: 'ai-plumbing-layout', t: 'You Waste 11,000 Gallons a Year Waiting for Hot Water. Your Plumbing Layout Is Why.' },
    { s: 'ai-predictive-maintenance', t: 'Your Furnace Knows It\u2019s Dying. It Just Can\u2019t Tell You Yet.' },
    { s: 'ai-project-management', t: 'From 14 Months to 10: How AI Project Management Is Compressing Home Build Timelines' },
    { s: 'ai-quality-inspection', t: 'Your Builder Missed 26 Defects. The AI Camera Found Every One.' },
    { s: 'ai-radon-testing', t: '21,000 Americans Die From Radon Every Year. Your Builder Doesn\u2019t Test for It.' },
    { s: 'ai-renovation', t: 'You Used to Gut-Renovate on Gut Feeling. Now AI Shows You the Finished Kitchen First.' },
    { s: 'ai-roof-inspection', t: 'Your Roofer Climbed a Ladder and Eyeballed It. The Drone Found 23 Problems He Missed.' },
    { s: 'ai-smart-ventilation', t: 'Your Builder Bragged About a Tight Envelope. Nobody Mentioned You\u2019d Be Breathing Your Own CO\u2082.' },
    { s: 'ai-solar-panel-design', t: 'Your Solar Quote Took Three Hours. The AI Did It in Five Minutes.' },
    { s: 'ai-stormwater-management', t: 'Your Lot Sends 27,000 Gallons of Runoff Into the Street Every Year. AI Knows Exactly Where It Goes.' },
    { s: 'ai-structural-engineering', t: 'Your Home Has 30% More Steel Than It Needs. AI Knows Exactly How Much to Remove.' },
    { s: 'ai-supply-chain-construction', t: '90% of Builders Had Materials Show Up Late Last Year. AI Knows Why.' },
    { s: 'ai-warranty-prediction', t: 'Your Builder\u2019s Warranty Is 365 Days. The Failures Start at 366.' },
    { s: 'ai-waste-sorting', t: 'Your Demolished House Is Worth $14,000. A Robot Just Found It in the Rubble.' },
    { s: 'ai-water-management', t: 'Your Pipes Are Dumb. They Leak 1 Trillion Gallons a Year. AI Is Finally Listening.' },
    { s: 'ai-zoning-analysis', t: 'Your Backyard Could Fit an ADU. The Algorithm Already Knows.' },
    { s: 'all-electric-panel-crisis', t: 'Your 200-Amp Panel Can\u2019t Handle Your All-Electric Future. Smart Panels Are Buying You Time.' },
    { s: 'autonomous-heavy-equipment', t: 'The Excavator Dug Your Foundation. Nobody Was Driving It.' },
    { s: 'building-performance-gap', t: 'Your Home Uses 25% More Energy Than Its Plans Promised. AI Is Finally Catching the Difference.' },
    { s: 'construction-data-ownership', t: 'You Paid for the Blueprints. You Don\u2019t Own the Data.' },
    { s: 'construction-knowledge-extinction', t: 'The Guy Who Knows Why That Pipe Is There Is Retiring. Nobody Recorded Him.' },
    { s: 'construction-productivity-ai', t: 'Construction Productivity Has Been Flat for 30 Years. AI Might Finally Break the Curse.' },
    { s: 'construction-safety-ai', t: '1,034 Construction Workers Died Last Year. An AI Saw It Coming.' },
    { s: 'construction-workforce', t: 'The 500,000 Missing Workers: Can AI and Robots Fill Construction\'s Labor Gap?' },
    { s: 'contech-reality-check', t: 'I Spent 20 Years on Job Sites. Half These AI Tools Would Get Laughed Off One.' },
    { s: 'contech-vc-investment', t: 'Investors Poured $2\u00a0Billion Into Katerra. It Vanished. Now They\u2019re Back.' },
    { s: 'digital-twins-home-design', t: 'Your House Exists Twice. The Digital One Catches the Mistakes.' },
    { s: 'digital-twins', t: 'Your Home\'s Digital Twin Knows It Better Than You Do' },
    { s: 'drone-site-monitoring', t: 'Drones Are Watching Your Home Get Built \u2014 And Catching Mistakes You\'d Never See' },
    { s: 'drone-surveying-residential', t: 'Your Surveyor Spent Three Days Staking a Lot. A Drone Did It During Lunch.' },
    { s: 'electrical-design-nec', t: 'The NEC Has 1,100 Pages. Your Electrician Reads Maybe 40. AI Could Read All of Them.' },
    { s: 'embodied-carbon-ai', t: 'Your Home\u2019s Carbon Footprint Was Decided Before You Moved In. AI Is Finally Counting It.' },
    { s: 'housing-shortage-ai-policy', t: 'America Is 4.7 Million Homes Short. AI Won\'t Fix That Alone.' },
    { s: 'humanoid-robots-construction', t: 'A Humanoid Robot Costs $13,500. A Construction Worker Costs $72,000. Do the Math.' },
    { s: 'insurance-ai-homes', t: 'Your Insurer Has No Idea How to Price a Robot-Built Home' },
    { s: 'mass-timber-ai', t: 'Your Next Home Could Be Built from Trees. AI Is Making Sure It Doesn\u2019t Burn Down.' },
    { s: 'modular-prefab-ai', t: 'Modular Housing Failed Twice. AI Factories Might Be the Third Attempt That Works.' },
    { s: 'parametric-design', t: 'Every Wall Is a Variable. Parametric Design Turns Custom Homes into Solvable Equations.' },
    { s: 'robot-operator-workforce', t: 'He Used to Drive the Excavator. Now He Supervises Three That Drive Themselves.' },
    { s: 'robotic-bricklaying', t: 'This Robot Lays 360 Blocks an Hour. Your Bricklayer Does 40.' },
    { s: 'smart-home-construction', t: 'Wire It Smart During Framing or Pay 5\u00d7 More Later. Here\u2019s What to Run.' },
    { s: 'smart-safety-wearables', t: 'Your Hard Hat Hasn\u2019t Changed Since 1953. The One With Sensors Might Save Your Life.' },
    { s: 'smart-wiring-ai', t: 'Your Breaker Box Is the Dumbest Thing in Your House. That\u2019s About to Change.' },
    { s: 'supply-chain-ai', t: 'Lumber Went from $350 to $1,700 in a Year. Nobody Saw It Coming. AI Might.' },
    { s: 'wildfire-resilient-homes', t: '$2.15 Trillion in Homes at Wildfire Risk. AI Can See Which Ones Will Survive.' }
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
