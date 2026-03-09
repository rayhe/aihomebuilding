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

### Phase 3: Site Features
- [ ] Category filter pages (click "Workforce" → see all workforce articles)
- [ ] Search functionality (client-side, lunr.js or similar)
- [ ] Newsletter signup form (design only, or integrate with a service)
- [ ] Social sharing buttons on articles
- [ ] Article table of contents for longer pieces
- [ ] Sticky reading progress bar on article pages ✅ (Cycle 6 — March 9, 2026)

### Phase 4: Data & Interactivity
- [ ] Industry data dashboard page (construction stats, labor data)
- [ ] Interactive charts (Chart.js) — workforce trends, AI adoption rates
- [ ] AI tools directory page — curated list of construction AI tools
- [ ] Company profiles for key players (ICON, Built Robotics, etc.)
- [ ] Cost comparison calculators (traditional vs. AI-assisted builds)

### Phase 5: Community & Comments
- [ ] Google Auth login via Firebase
- [ ] Comment system on articles (Firebase RTDB)
- [ ] Comment moderation
- [ ] Reader polls / surveys
- [ ] "Submit a tip" form for industry insiders

### Phase 6: Advanced
- [ ] RSS feed generation
- [ ] SEO optimization (structured data, Open Graph, Twitter cards)
- [ ] Performance optimization (image lazy loading, critical CSS)
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
