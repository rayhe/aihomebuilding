# Research: ML Wildfire Structure Survival & Community-Level Hardening

## Journalist: Catherine "Code" Chen (Policy & Regulation)

## Angle
Machine learning now predicts with 82% accuracy which homes survive WUI fires — and the #1 factor isn't what the homeowner did. It's what their neighbors did. Structure spacing between buildings is the most critical variable. California's building code requires individual home hardening, but the ML model proves community-level coordination is what actually saves houses. The code covers individual homes. Physics doesn't care about property lines.

## Kill Test
Does this help someone building or buying a home? YES — tells them exactly what hardening costs ($13K on a $500K home, ~$50/mo on a mortgage), what the insurance payoff is, and why they need to organize their neighbors too.

## Primary Sources

### 1. UC Berkeley / Nature Communications (2025)
- Paper: "Fire risk to structures in California's Wildland-Urban Interface"
- DOI: 10.1038/s41467-025-63386-2
- Authors: Zamanialaei, San Martin, Theodori, Purnomo, Tohidi, Lautenberger, Qin, Trouvé, Gollner (UC Berkeley, U Maryland, CloudFire Inc.)
- Funding: Gordon & Betty Moore Foundation, NSF
- Analyzed 5 major CA WUI fires: 2017 Tubbs, 2017 Thomas, 2018 Camp, 2019 Kincade, 2020 Glass
- XGBoost classifier: 82% accuracy predicting structure survivability
- Key finding: structure spacing between buildings is the most critical factor
- Fire exposure, ignition resistance (hardening), and defensible space work IN COMBINATION
- Hypothetical 52% reduction in losses with full hardening + defensible space
- Used on-the-ground post-fire data, remotely sensed data, fire reconstruction modeling
- AASHTO T412 standard incorporation

### 2. IBHS/Headwaters Economics Cost Study (Oct 2025)
- "Construction Costs for Wildfire-Resistant Homes, California Edition"
- For a 1,750 SF single-story home (est. $500K total construction):
  - Traditional construction: baseline
  - CWUIC Part 7 compliance: +$13,000 (2.6%)
  - IBHS WFPH Base: SAVES $4,000 vs CWUIC Part 7 (fewer requirements)
  - IBHS WFPH Plus: +$2,000 over CWUIC Part 7 (~$15K total over traditional)
- $50/month added to a 30-year mortgage for WFPH Plus
- Retrofit for existing homes: as low as $2,000 for basic measures

### 3. CAL FIRE / Eaton-Palisades Loss Data (May 2025)
- 11,519 single-family homes destroyed or major damage from Eaton + Palisades fires
- 6,637 (57.6%) were in neighborhoods where Chapter 7A applies
- 4,882 (42.4%) were NOT in Chapter 7A zones
- Even Chapter 7A homes burned — individual compliance isn't enough when neighbors don't comply

### 4. California "Safer from Wildfires" Insurance Program
- CDI regulation requiring insurers to offer discounts for hardening measures
- AAA Insurance itemized discounts: 0.5% per measure (10 measures), up to 5% for Firewise community
- IBHS Prepared Home Plus designation: 2.0% discount
- 13 insurance companies (40% of market) now offering wildfire mitigation discounts
- Major CA insurers committing to WRITE policies for WFPH-designated homes
- Commissioner Ricardo Lara: "Building back safer yields significant insurance benefits"

### 5. Newsom Executive Order (Jan 2025)
- Zone 0 implementation: ember-resistant zone within 5 feet of structures in highest FHSZ
- Updated Fire Hazard Severity Zone maps: 1.4 million new acres added to higher tiers
- Updates building AND local planning requirements statewide

### 6. KB Home / IBHS Wildfire Prepared Neighborhood Standard
- First wildfire-resilient neighborhoods being built in CA (near Sacramento, Escondido)
- Homes start ~$700K-$1M, 2,000 SF
- Requirements: noncombustible gutters, Class A roof, ember-resistant vents, 6" vertical clearance, noncombustible fence, 5-30' defensible zone, drought-resistant native plants
- IBHS neighborhood standard: minimum 10 feet between buildings, elimination of "connective fuel pathways"
- Fast Company: "Structure separation is the biggest indicator of wildfire progress" — matches ML findings

### 7. Zesty.AI / IBHS (2021 study)
- Zone 0 (0-5 ft ember-resistant zone) nearly doubles a property's survival rate

## Novel Contribution
Cross-referencing the UC Berkeley ML model's feature importance (structure spacing > individual hardening) against the CA building code structure (individual home requirements only) reveals a policy gap. The code addresses the second-most-important factor. The most important factor — structure spacing — isn't in the code for existing neighborhoods. Only new developments (like KB Home's) can achieve it. This is the first analysis connecting the ML evidence to the specific policy failure.

## Strongest Counterargument
You can't retrofit density. Existing neighborhoods have fixed lot sizes and structure-to-structure distances. The ML findings about spacing are useful for new developments but can't help the 11.5M existing CA homes in FHSZ areas. For those homes, individual hardening is the only actionable tool, and the code's focus on it is therefore appropriate even if suboptimal.

## Limitations
- UC Berkeley study examined 5 fires in one state (CA). Different WUI conditions (e.g., grassland WUI in CO, flatland WUI in TX) may yield different feature importance rankings
- The 82% accuracy still means 18% misclassification — life-and-death decisions shouldn't rest on a model alone
- Cost data is for new construction; retrofit costs vary enormously and are less studied
- Insurance discount data (AAA's 0.5% per measure) is disappointingly small relative to the hardening investment
