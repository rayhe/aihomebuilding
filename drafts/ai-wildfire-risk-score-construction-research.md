# Research: AI Wildfire Risk Scoring & What It Means for How You Build

## Angle
Your insurer already has a property-level AI wildfire risk score for your home. You probably haven't seen it. These scores — not zip codes — now determine insurance availability and pricing. Here's what the AI is measuring, what construction features lower your score, and what it actually costs to harden a home.

## Kill Test
Does this help someone building or buying a home? YES — directly actionable for:
- Builders deciding material specs in fire-prone areas
- Buyers evaluating properties and insurance availability
- Homeowners seeking insurance discounts through hardening

## Journalist
Jake Kowalski (construction tech) — due in rotation after Catherine Chen (#311)

## Primary Sources

### 1. ZestyAI / Z-FIRE Model (AI wildfire risk scoring)
- **Source:** ZestyAI press release via PR Newswire / Morningstar, Jan 8, 2026
- 11.8 million California residential properties analyzed
- 1.2 million homes rated HIGH risk by AI but LOW or NO risk by FEMA
- $940 billion in property value sits in these "blind spots" (at median $800K)
- 62.5% of California properties have NO federal wildfire assessment at all
- Only 37.5% carry any FEMA wildfire rating
- Z-FIRE uses ML + annual high-resolution satellite imagery: vegetation, terrain, building characteristics, climate factors, proximity to historical wildfires
- Produces 1-10 scores for wildfire hazard (L1) and potential home destruction (L2)
- Trusted by >1/3 of California insurance market
- 2,000+ historical wildfires analyzed
- California FAIR Plan partnership (insurer of last resort) — 4-year expansion announced
- Year-over-year tracking (2022-2025, 9.27M properties):
  - Among high-hazard (score ≥7): 41.3% reduced home-destruction risk through visible mitigation
  - Among extreme-hazard (score ≥9): 52.0% saw regional hazard worsen — average 1.3 point increase = 51% jump in annual wildfire probability
  - FEMA ratings showed "little change" over same period
- 300,859 blind-spot homes built before 1980 (pre-modern fire-resistant standards)
- In Palisades fire zone: 1,430 properties flagged elevated by AI but classified low by FEMA, $1.14B value
- In Eaton fire zone: 1,615 properties, $1.29B value — all in census tracts FEMA rates "Very Low" or "No Rating"

### 2. Stand Insurance (AI physics-based fire simulation)
- **Source:** Fast Company, Dec 2024; Bloomberg Tax; Morningstar
- Founded by Dan Preston (former Metromile CEO)
- $30M initial funding (Inspired Capital, Lowercarbon, Equal Ventures, Convective Capital)
- $35M Series B (Eclipse led)
- Physics-based AI modeling: simulates how fire burns on specific property
- Identifies individual tree species, calculates burn temperature per tree
- Recommends specific changes (replace one window near that tree, not all windows)
- More precise than generic "clear all vegetation" recommendations
- Aims to write $2B in home coverage within first year
- Partnered with Frontline Wildfire Defense: up to 25% discount for active defense systems
- Premium reductions of up to 60% in fire-prone regions through mitigation
- Target: homes too valuable for FAIR Plan but abandoned by private insurers

### 3. WyldSafe (AI computer vision property assessment app)
- **Source:** EINPresswire / Beacon Journal, Jan 6, 2026
- Founded by Nate Siggard (Woolsey Fire survivor)
- Patent-pending computer vision technology
- Homeowner records video walking around home exterior
- AI analyzes every frame: combustible vegetation, vulnerable roof materials, unscreened vents, wood fencing, ignition points
- Delivers: risk ratings, repair priorities, estimated costs, suggested timeline
- FREE to homeowners (costs covered by vendor network)
- Professional subscription for insurance brokers and realtors
- Timed for California's Safe Homes grant program (AB 888)
- California regulations: Reg 2644.9 (mandatory insurance discounts), AB 38 (seller disclosure), AB 888 (grants)

### 4. First Street Foundation / Fire Factor
- **Source:** Building Design+Construction, Realtor.com, Zillow
- Fire Factor: 1-10 wildfire risk score for every US home
- Uses property tax data, satellite imagery, construction type, roof type, weather, exposure to natural fuels
- Integrated into Realtor.com and Zillow listings
- 71% of recent homebuyers consider natural disasters when choosing location
- 100 million simulated fire events used in model
- 20%+ of US single-family homes face wildfire risk within 30 years
- $5 billion insured wildfire damage in recent year

### 5. Headwaters Economics + IBHS (construction cost analysis)
- **Source:** headwaterseconomics.org, peer-reviewed with IBHS
- California construction costs for three wildfire resistance levels:
  - **Baseline**: Chapter 7A compliant (minimum code)
  - **Enhanced**: +$2,800 over baseline — adds vertical under-deck enclosure, noncombustible 0-5ft zone. Consistent with IBHS "Wildfire Prepared Home" designation
  - **Optimum**: +$18,200 (northern CA) to +$27,100 (southern CA) — most stringent fire-resistant materials
- Enhanced = only 2-8% more of total construction cost
- Optimum = 4-13% more
- Key components: roof (Class A vs standing seam steel vs clay barrel tile), under-eave area (open vs enclosed/soffited), exterior walls (fiber-cement vs wood composite), deck (composite vs metal), near-home landscaping (bark mulch vs pea gravel)

### 6. California "Safer from Wildfires" Framework (regulatory context)
- **Source:** California Dept of Insurance (insurance.ca.gov)
- First state to mandate insurance discounts for wildfire hardening
- 10 steps, each qualifies for a discount:
  1. Class-A fire rated roof
  2. 5-foot ember-resistant zone (stone/decomposed granite)
  3. Ember/fire-resistant vents (1/16 to 1/8 inch metal mesh)
  4. Non-combustible 6 inches at bottom of exterior walls
  5. Enclosed eaves (soffits)
  6. Multi-paned windows
  7. Cleared vegetation/debris under decks
  8. Remove combustible outbuildings to 30ft distance
  9. Defensible space compliance
  10. Community programs (Firewise USA, Fire Risk Reduction Communities)
- Regulation 2644.9: insurers must provide wildfire risk scores to policyholders
- AB 1934: home hardening certification program by 2028
- AB 38: sellers must disclose fire vulnerabilities during home sales

## Novel Analysis
Cross-reference: The ZestyAI data shows 41.3% of high-hazard homes reduced destruction risk through mitigation. The Headwaters Economics data shows Enhanced construction adds only $2,800. The California framework provides 10 specific steps that each trigger insurance discounts. Combined insight: the AI is scoring specific construction features that cost relatively little to address, and the regulatory framework now rewards those changes with mandatory discounts. The $2,800 "Enhanced" upgrade pays for itself in 1-3 years of premium reductions — but only if the AI can detect the changes, which requires specific materials and configurations the AI is trained to identify from satellite/aerial imagery.

## Counterarguments
- AI models are only as good as their training data — 2,000 wildfires is limited compared to the variability of fire behavior
- Satellite imagery can't see inside walls or verify actual installation quality
- Premium reductions may not offset increased insurance base rates in high-risk areas
- Small/startup companies (Stand, WyldSafe) may not survive — reliance on venture funding
- Property-level scoring creates potential for algorithmic redlining
- Homeowners may invest in hardening but still get dropped by insurers

## Limitations
- No independent third-party validation of Stand's "up to 60%" premium reduction claim
- ZestyAI's analysis used its own model to critique federal maps — inherent conflict of interest
- Headwaters cost data uses RSMeans national estimates, which may not reflect current CA labor/material costs
- No longitudinal study yet on whether AI-recommended mitigations actually reduce fire loss rates
- WyldSafe is pre-revenue with no published accuracy metrics for its CV model
