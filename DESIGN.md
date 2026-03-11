# DESIGN.md — AI Home Building Visual Identity & Roadmap

## Brand Identity

### Colors
- **Primary accent:** #FF6B35 (Construction Orange)
- **Accent dark:** #E55A2B (hover states)
- **Background light:** #FAFAF8
- **Background dark:** #111111
- **Card light:** #FFFFFF
- **Card dark:** #1A1A1A
- **Text primary:** #1A1A1A / #F0F0F0 (dark)
- **Text secondary:** #555555 / #BBBBBB (dark)
- **Border:** #E8E8E4 / #2A2A2A (dark)

### Typography
- **Headlines:** Playfair Display (700, 800) — editorial authority
- **Body:** Inter (400, 500, 600, 700) — clean readability
- **Pull stats:** Inter 800, 2rem, accent color
- **Category badges:** Inter 700, 0.7rem, uppercase, letter-spacing 0.08em

### Layout Principles
- Max content width: 1200px
- Article reading width: 680px
- Card border-radius: 12px (cards), 16px (featured)
- Consistent 24px horizontal padding
- Generous whitespace between sections

---

## Phased Improvement Roadmap

### Phase 1: Foundation ✅ (Complete)
- [x] Editorial homepage with article grid
- [x] Masthead with brand identity
- [x] Navigation with category links
- [x] Dark/light mode toggle
- [x] 3 seed articles with hero images
- [x] Journalist roster
- [x] Research threads document
- [x] Mobile responsive layout

### Phase 2: Content Expansion (Current)
- [ ] Publish 2 articles per day via hourly cron
- [ ] Cover all 6 journalist beats
- [ ] Build article backlog to 15+ stories
- [x] Add article reading time estimates ✅ (Cycle 6 — March 9, 2026)
- [x] Improve article page typography ✅ (Cycle 6 — drop caps, blockquote styling, link styling)
- [x] Add "Related Articles" section at bottom of articles ✅ (Cycle 8 — March 9, 2026)
- [x] Dynamic Related Articles Engine — `js/related-articles.js` replaces hardcoded "Keep Reading" with smart category-based recommendations, reading history tracking via localStorage, unread-first prioritization. All 35 articles wired up. ✅ (March 11, 2026)

### Phase 3: Site Features
- [x] Category filter bar with pill buttons on homepage ✅ (Cycle 12 — March 9, 2026)
- [x] Search functionality — client-side instant search with debounce, clear button, no-results state ✅ (Cycle 18 — March 10, 2026)
- [x] Newsletter signup form — orange gradient CTA banner above footer, email validation, localStorage persistence, already-subscribed detection ✅ (Cycle 22 — March 10, 2026)
- [x] Social sharing buttons on articles ✅ (Cycle 12 — March 9, 2026)
- [x] Article table of contents for longer pieces ✅ (June 8, 2026 — auto-generated TOC from h2/h3 headings, scroll spy, collapsible on mobile, dark/light mode)
- [x] Sticky reading progress bar on article pages ✅ (Cycle 6 — March 9, 2026)
- [x] Load More pagination — shows first 12 articles, loads 6 more per click, integrates with filter/search, auto-resets on filter change ✅ (June 8, 2026)
- [x] Back to Top floating button — appears after 600px scroll, smooth scroll, orange accent styling ✅ (June 8, 2026)
- [x] Mobile hamburger menu — slide-in drawer replaces horizontal scroll nav on ≤768px, backdrop overlay, Escape to close, body scroll lock, drawer icons, dark mode support ✅ (March 11, 2026)

### Phase 4: Data & Interactivity
- [ ] Industry data dashboard page (construction stats, labor data)
- [x] Interactive charts (Chart.js) — workforce trends, AI adoption rates ✅ (March 10, 2026 — 4 interactive charts: Productivity by Industry line chart, Worker Shortage bar chart, AI Adoption horizontal bar, ConTech VC Funding bar+line combo. Lazy-init on tab switch. Mobile responsive grid.)
- [x] AI tools directory page — curated list of 20 construction AI tools with category filtering ✅ (Cycle 14 — March 9, 2026)
- [x] Company profiles for key players — `companies.html` standalone directory with 32 companies, 8 category filters, search, funding data, key metrics, and article cross-links. Linked from main nav + mobile drawer. ✅ (March 11, 2026)
- [x] Reading Paths / Series Collections — `series.html` with 8 curated reading paths (The Robot Builder, Design Intelligence, The Green Build, Smart From Day One, The Business of Building, Code Permits & Policy, The Human Side, The Homeowner's AI Toolkit) organizing all 49 articles into thematic series with numbered reading order, estimated read times, and journalist attribution. Linked from main nav + mobile drawer. ✅ (March 11, 2026)
- [x] Enhanced "Our Journalists" section — full writer cards with avatar initials, beat badges, bios, article counts and links, mobile responsive ✅ (March 10, 2026)
- [x] "Writers" nav link — scrolls to team section in About tab ✅ (March 10, 2026)
- [x] RSS feed updated to all 32 articles ✅ (March 10, 2026 — was stale at 18)
- [x] Cost comparison calculators (traditional vs. AI-assisted builds) ✅ (March 10, 2026 — interactive calculator with sqft/quality/region inputs, 6 AI/robotics options with per-category savings, side-by-side cost breakdown, timeline comparison, savings bar, mobile responsive)

### Phase 5: Community & Comments
- [ ] Google Auth login via Firebase
- [ ] Comment system on articles (Firebase RTDB)
- [ ] Comment moderation
- [ ] Reader polls / surveys
- [ ] "Submit a tip" form for industry insiders

### Phase 6: Advanced
- [x] RSS feed generation — `feed.xml` with all 18 articles, auto-discovery `<link>` in `<head>`, 📡 icon in nav ✅ (Cycle 20 — March 10, 2026)
- [x] SEO optimization (Open Graph, Twitter Cards, JSON-LD Article schema, canonical URLs) ✅ (Cycle 16 — March 10, 2026)
- [x] Proper sitemap.xml — rebuilt with all 40 URLs (1 homepage + 39 articles), correct domain, lastmod dates. Was broken placeholder pointing to `cloudflare-pages-template.pages.dev` with 1 URL. ✅ (March 11, 2026)
- [x] robots.txt — fixed from `example.com` to correct domain, added `/functions/` disallow. ✅ (March 11, 2026)
- [x] RSS feed deduplication — rebuilt from scratch using article metadata extraction, removed 2 duplicate entries (3d-printed-homes, modular-prefab-ai appeared twice). Now 39 unique items. ✅ (March 11, 2026)
- [x] Article grid deduplication — **Complete rebuild June 8, 2026**: Python-generated grid from article HTML metadata. 42 unique grid cards + 1 featured = 43 total matching 43 article files. RSS feed rebuilt (43 items), sitemap rebuilt (44 URLs), stats ticker updated, Industry filter pill added. Previous manual dedup (March 11) was incomplete — articles had crept back to 57 cards for 43 files. ✅ (June 8, 2026)
- [x] Performance optimization (image lazy loading, decoding="async") ✅ (January 7, 2026)
- [x] Reading Bookmark System — `js/reading-bookmark.js` tracks scroll position on article pages (throttled, saves section heading + % progress), shows floating "📖 Continue Reading" toast on homepage with title, progress, and section context. Auto-clears on article completion (>95%), 1h dismiss cooldown, 7-day expiry. ✅ (June 8, 2026)
- [x] Print Stylesheet — `css/print.css` strips nav/share/TOC/footer, constrains hero images, prints link URLs, adds site attribution footer, proper @page margins. All 45 articles wired up. ✅ (June 8, 2026)
- [ ] AMP versions of articles
- [ ] Podcast/audio versions of articles (TTS)

---

## Design Principles
1. **Content first** — the writing is the product; design serves readability
2. **Data-driven** — every article needs real numbers, not just opinions
3. **Construction-credible** — looks like industry journalism, not a tech blog
4. **Fast** — static HTML, minimal JS, optimized images
5. **Accessible** — proper contrast ratios, semantic HTML, keyboard nav

## Image Guidelines
- Hero images: landscape orientation, 1200px+ wide
- Generate via: `$JARVIS_BIN_DIR/imagine "DESCRIPTION" --orientation landscape`
- Copy to `images/SLUG.jpg`
- Style: photorealistic construction/architecture scenes, warm lighting
- Avoid: stock photo clichés (handshakes, generic office shots)

## Self-Improvement Protocol
Each hourly improvement cycle should:
1. Read CLAUDE.md, DESIGN.md, RESEARCH.md, JOURNALISTS.md
2. Check which phase items are incomplete
3. Pick the highest-impact item for this cycle
4. Implement it (article, feature, or design improvement)
5. Update status in this file
6. If you discover a better approach, update the relevant docs
7. Commit and push to main
