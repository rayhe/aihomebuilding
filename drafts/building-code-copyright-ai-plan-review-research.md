# Research: Building Code Copyright vs. AI Plan Review Tools

**Journalist:** Catherine "Code" Chen (Policy & Regulation)
**Date:** 2026-05-07
**Kill test:** Yes — directly affects anyone building a home in a jurisdiction using (or considering) AI plan review, and anyone developing software to read building codes.

## Core Thesis

Every AI plan review tool needs to ingest building code text to function. Until April 7, 2026, that text was copyrighted behind paywalls. The Third Circuit's ASTM v. UpCodes ruling just declared that building codes adopted into law are likely fair use. This ruling reshapes the cost structure, liability framework, and adoption trajectory of every AI-powered plan review startup in the country.

Nobody has connected these dots: the copyright ruling + the liability vacuum + the municipal adoption wave.

## Primary Sources

### 1. ASTM International v. UpCodes Inc., No. 24-2965 (3d Cir. April 7, 2026)
- Third Circuit affirmed denial of preliminary injunction
- UpCodes published full text of copyrighted ASTM standards that had been incorporated by reference into the International Building Code (IBC), which Philadelphia and other jurisdictions adopted as law
- Court found all four fair use factors favored UpCodes:
  - Factor 1 (purpose): "Transformative" — informing people about the law vs. industry best practices
  - Factor 2 (nature): Laws are facts, at "periphery of copyright's core protection"
  - Factor 3 (amount): Full copying justified — can't inform about law without the full text
  - Factor 4 (market harm): No significant evidence of revenue harm; "enhanced public access to the law is a clear and significant public benefit"
- Follows D.C. Circuit reasoning in Public.Resource.Org case
- Fifth Circuit has gone further: codes lose copyright entirely when adopted into law
- Source: EFF analysis, Justia case text, Reed Smith legal analysis

### 2. PermitPlace "State of Building Permits 2026" Report (March 2026)
- 741 cities analyzed across 44 states
- National average initial permit review: **22.9 days** (median: 14 days)
- Slowest: 18 cities at 180 days
- Fastest: 20 cities at 1 day (mostly Texas, Florida, Arizona)
- Chicago: 92 days, San Francisco: 60 days, Portland: 51 days
- Gap between published timeline and actual commercial: 2-5x
- Source: permitplace.com/state-of-building-permits-2026/

### 3. Municipal AI Plan Review Deployments (active as of May 2026)
- **Naples, FL:** Partnered with Blitz AI + CityView for automated compliance checks against Florida Building Code
- **San Jose, CA:** Piloting CivCheck for pre-submission plan review, targeting 62,200 units by 2031
- **Louisville, KY:** Partnered with Govstream.ai
- **Los Angeles, CA:** Mayor Bass Executive Directive No. 19 (April 27, 2026) — 60-day total permit timeline for affordable housing, procurement for AI pre-plan check tools within 30 days, concurrent department review via ePlan
- **Surrey, Canada:** Using Archistar AI PreCheck — handles 65% more building applications
- Sources: HousingWire, StateScoop, Realtor.com, various press releases

### 4. AI Plan Review Startup Landscape
- **AutoReview.AI** (Gainesville, FL) — weeks to 30 minutes, patented system, handles land development codes
- **Archistar AI PreCheck** (Australia/global) — 80% reduction in resubmissions, 50% review time cut
- **Blitz AI** — compliance automation + CityView permitting integration
- **Permitify** (YC 2025) — AI co-pilot for building plan review
- **CivCheck** — pre-submission compliance checks
- **Zermit AI** — permits through chat interface (March 2026 launch)
- **Spacial** — automated construction compliance
- Sources: UF Warrington, Archistar.ai, YCombinator, GlobeNewswire

### 5. Contract and Liability Gap
- AIA and ConsensusDocs standard form agreements have NO AI clauses (Area Development, Q4 2025)
- No contractual guidance for: who selects/configures AI tools, who owns AI-generated outputs, liability for autonomous system decisions, whether AI failures = force majeure
- $48B projected AI in construction market by 2030
- No major AI-in-construction litigation yet, but legal observers call it inevitable
- Judge recently ruled senior lawyers liable for AI-generated legal errors (May 5, 2026) — precedent for professional responsibility
- Courts likely to treat AI errors as contractor's responsibility (Lexology analysis)
- Source: Michelman & Robinson analysis (Area Development), JD Journal, Lexology

### 6. RICS AI in Construction Report (2025)
- Only 56% of investors plan increased AI investment
- 75% of firms lack AI capability
- Top barriers: skilled personnel (46%), integration challenges (37%)
- Most impactful expected use: design optioneering (40%)
- Source: rics.org

## Original Contribution

**Cross-referencing the UpCodes copyright ruling with the AI plan review vendor landscape.** Before April 7, 2026, any AI tool that ingested building code text needed to license it from ASTM, ICC, NFPA, or other standards development organizations (SDOs). That licensing cost was a real barrier for startups and municipalities. The Third Circuit ruling opens a path to fair use for any AI system that reads building codes adopted into law. This changes:

1. **Startup economics:** No licensing fees for code text = lower barrier to entry = more competition
2. **Municipal adoption:** Cities can deploy AI plan review without worrying about code copyright clearance
3. **Liability shift:** If the AI can read the code for free, who's responsible when it misreads it? The SDO can no longer argue "you didn't license the full context"
4. **Training data:** LLMs fine-tuned on building code text now have a fair use argument — this is functionally the same as UpCodes' transformative purpose (informing about the law)

## Strongest Counterargument

ASTM and ICC would argue that free access to building codes removes the revenue incentive to develop them. Building codes cost millions to develop — committee work, testing, expert review. If anyone can scrape and train on them for free, who funds the next code cycle? The Third Circuit acknowledged this but found no evidence of significant revenue harm. That could change if AI tools proliferate and SDO revenue drops measurably.

## Limitations

- The UpCodes ruling is a preliminary injunction denial, not a final merits ruling. The case continues.
- No data on how many AI plan review startups actually licensed building code text vs. used it without permission
- Municipal adoption data is mostly from press releases and pilot announcements — actual performance metrics scarce
- The $48B market projection is a common consulting estimate without clear methodology
- No cost data on what ASTM/ICC charge for code text licensing

## Headline Options (Catherine Chen style)
1. "Your AI Plan Review Tool Needs to Read the Building Code. Until Last Month, That Was Illegal."
2. "The Third Circuit Just Freed Your Building Code. The AI Startups Were Waiting."
3. "Building Codes Were Behind a Paywall. A Federal Court Just Opened It. Now AI Can Read Them."

## Key Data Points for Article
- 22.9 days average permit review (PermitPlace, 741 cities)
- 30 minutes with AI (AutoReview.AI claim)
- 80% reduction in resubmissions (Archistar)
- 65% more applications handled (Surrey, Canada)
- 60-day total timeline (LA ED 19)
- 0 AI clauses in standard AIA/ConsensusDocs contracts
- 4 of 4 fair use factors favored UpCodes
- 6 months = slowest published review time (18 U.S. cities)
