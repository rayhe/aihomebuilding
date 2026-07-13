# Research: AI Wildfire Risk Scoring vs. Building Code Gap

## Angle
AI algorithms now score your home's wildfire risk down to the roof shingle, defensible space clearance, and vegetation type — and insurers use those scores to set premiums, drop coverage, or re-enter markets. But the building codes that could actually lower those scores barely apply outside California. The result: AI knows your home will burn before you do, and nobody's required to fix it.

## Journalist
Catherine "Code" Chen — policy & regulation beat

## Primary Sources

### 1. IBHS/Headwaters Economics Construction Cost Study (Fall 2025)
- Source: ibhs.org / headwaterseconomics.org (PDF report)
- Model home: 1-story, 1,750 SF, $500,000 construction cost in Altadena, CA
- **Key cost findings:**
  - California CWUIC Part 7 compliance: +$13,070 over traditional construction (2.6%)
  - IBHS Wildfire Prepared Home Base: +$8,876 over traditional (1.8%) — $4,194 LESS than CA code
  - IBHS Wildfire Prepared Home Plus: +$15,242 over traditional (3.0%) — $2,172 more than CA code
  - Total materials breakdown: Traditional $59,223 → CWUIC $72,293 → WFPH Base $68,099 → WFPH+ $74,465
- **Altadena rebuild reality:** actual rebuild costs $450-$650/SF (vs $285/SF assumed in report). Material costs not the driver — labor/overhead inflation in post-disaster context
- Home Depot price check: materials actually $2,418 LESS than RSMeans estimates
- Key components: clay roof, fiber cement siding, ember-resistant vents, tempered windows, metal gutters, gravel Zone 0, metal fencing

### 2. ZestyAI Z-FIRE Model
- Source: ZestyAI press releases, claims journal, finextra
- Trained on 1,400+ wildfire events, 20+ years of historical loss data
- Analyzes: topography, climate data, aerial/satellite imagery, building materials, vegetation in multiple defensible spaces
- **Market penetration:** Trusted by >1/3 of California's insurance market, including CA FAIR Plan (state insurer of last resort)
- Filing-ready in California; last included in approved CA rate filing in 2024
- **Amica case study:** Switched from CoreLogic to Z-FIRE after Tubbs Fire losses. Amica says if Z-FIRE had been used to re-underwrite entire CA portfolio, "would have prevented 95% of its wildfire losses"
- **Farmers Insurance:** CA regulators approved Z-FIRE-based underwriting → expected 30,000 new homeowner policies (first carrier in CA to use site-specific building material factors)
- **Kingstone Companies (Nasdaq: KINS):** Entering California Q2 2026 on E&S basis using Z-FIRE for property-level rating

### 3. Stand Insurance — Physics-Based Digital Twins
- Source: Freethink interview with CEO Dan Preston
- Creates "digital twins" of individual homes and land parcels
- Uses aerospace engineering-grade physics simulations to model wildfire behavior crossing each specific parcel
- Can modify digital twin (e.g., change roofing, clear brush) and re-simulate to show premium impact
- Considers homeowner preferences (favorite trees, gardens) when recommending changes
- Forward-looking: "historical data tells us very little about the next 10 years because it's changing very rapidly"

### 4. Nearmap / Cape Analytics / Property Guardian — Aerial AI Risk Scoring
- Nearmap: AI-driven risk scores from high-resolution aerial imagery + ML + historical loss data
- Analyzes: roof condition/material, defensible space, vegetation encroachment, hail damage, pools, solar panels, trampolines
- Property Guardian + EigenRisk partnership (Jun 2026): time-aware Wildfire Recurrence Risk Score
  - "Traditional scores tell underwriters where fire has burned — they don't account for how recently"
  - **LA fires validation:** identified highest destruction areas 2-3 days BEFORE fire arrival
- Cape Analytics (Mountain View, CA): competitor to ZestyAI
- Verisk (Jersey City): largest competitor

### 5. Insurance Market Dynamics
- CA Department of Insurance: insurers dropping thousands of homes in high-risk areas
- Nonrenewal spike: 235,250 policies refused renewal in 2019 (up 31% from 179,458 in 2018)
- FAIR Plan enrollment: 190,196 policies (up from 140,138)
- CA Commissioner Ricardo Lara: proposed regulations requiring insurers to factor property-level wildfire mitigation into rates (first state to do so)
- Commissioner Lara's "Safer from Wildfires" framework: creates insurance discount for IBHS Wildfire Prepared designation

### 6. Building Code Adoption Gap
- California: Chapter 7A (now CWUIC Part 7 as of Jan 1, 2026) — comprehensive but only applies in state-mapped "high" and "very high" hazard zones
  - Only 60% of homes destroyed in LA Jan 2025 fires were in zones requiring Chapter 7A
  - 40% of destroyed homes had NO wildfire building code requirement
  - CA's maps calculate hazard from wildland fire spread but DON'T account for house-to-house fire spread
- Colorado SB 23-166: all local governments must implement wildfire resiliency by April 2026
  - Lakewood WRC effective July 1, 2026
  - Loveland Fire Rescue Authority code effective April 21, 2026
- Oregon ORSC Section R327: wildfire hazard mitigation, but adoption is LOCAL — municipal opt-in
- 7+ states enacted wildfire building legislation in 2025: CO, MT, NH, TX + ME, HI, MD (study commissions)
- IBHS Wildfire Prepared program available in 14 states: AZ, CA, CO, FL, ID, MT, NV, NM, OK, OR, TX, UT, WA, WY

### 7. LA Fire Context
- January 2025: 16,000+ structures destroyed
- 11,500 single-family homes destroyed
- Rebuilding all to Chapter 7A: ~$30K/home × 11,500 = ~$345 million total
- Median home value in destroyed neighborhoods: >$1 million
- $30K additional cost = ~3% of home value

## Original Contribution
**The Asymmetry Calculation:** AI scoring has property-level precision (individual roof shingles, specific trees, defensible space to the foot) but building codes still use coarse geographic zones drawn from wildland fire models that miss house-to-house spread. In LA, this meant 40% of homes that burned had no code requirement to harden. Meanwhile, AI-scored insurance premiums in CA WUI zones run $10K-$20K+/year. If hardening costs $9K-$15K at construction and reduces your AI risk score enough to cut premiums $2K-$5K/year, it pays for itself in 3-5 years. But nobody's required to do it — and the AI knows you won't.

The gap is structural: AI scoring technology has outrun building code geography. Insurers have better maps of your risk than the government agencies that write the codes.

## Kill Test
Does this help someone building or buying a home? YES — anyone in a fire-prone area needs to know that:
1. Hardening costs 2-3% at construction (almost nothing)
2. AI scoring can dramatically affect their insurance access and premium
3. Even if code doesn't require it, IBHS designation can unlock insurance
4. 40% of LA fire victims' homes had no code protection — zone maps are outdated
