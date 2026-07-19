# Research Notes: ML Wildfire Structure Survivability — The Neighbor Gap

## Article #564
**Slug:** ml-wildfire-structure-survivability-neighbor-gap
**Journalist:** Priya Greenwood
**Angle:** Machine learning predicts with 82% accuracy whether a home survives a wildfire. The #1 factor isn't vegetation or construction — it's how close the nearest structure stands. WUI-compliant construction adds only 2-3% to building costs. But one homeowner's $13,000 hardening investment is undermined if the neighbor didn't make theirs. Wildfire resilience is a collective action problem, and we're still building house by house.

## Primary Sources

### 1. Zamanialaei et al. (2025), Nature Communications
- DOI: 10.1038/s41467-025-63386-2
- UC Berkeley + University of Maryland
- XGBoost classifier: 82% accuracy predicting structure survivability
- Analyzed 5 major CA WUI fires: Tubbs (2017), Thomas (2017), Camp (2018), Kincade (2019), Glass (2020)
- Structure separation distance is #1 factor driving structure loss
- Combined hardening + defensible space → 52% reduction in structure losses
- Zone 0 (5-foot noncombustible perimeter) alone → 17% reduction
- "We can't always change the spacing between structures or the exposure from flames and embers. But even within those limitations, we still have the power to cut the destruction in half." — Michael Gollner, UC Berkeley
- Funded by Gordon and Betty Moore Foundation + NSF

### 2. Kenny et al. (2025), Urban Forestry & Urban Greening (Cal Poly)
- Published April 2025, print July 2025
- Analyzed 15,082 structures and 52,893 tree canopies in Eaton + Palisades fire scars
- Building density was strongest predictor of home loss in both fires
- Tree canopy effects: minor, inconsistent, sometimes associated with LOWER losses
- Removing all tree canopy within 2m of homes → only small reductions in predicted losses
- "Our study shows that during extreme urban firestorms, houses become the primary fuel source. Once fire enters a neighborhood, structure-to-structure spread matters far more than the presence of trees." — Reed Kenny, Cal Poly
- Combined methods: CAL FIRE damage inspections, building footprint data, LiDAR, satellite imagery, wind modeling

### 3. IBHS / Headwaters Economics Construction Cost Report (Fall 2025)
- For 1,750 SF, $500K home (Altadena):
  - Traditional (non-WUI) exterior materials: $59,223
  - CWUIC Part 7 (CA WUI Code): $72,293 (+$13,070 / ~2.6%)
  - IBHS Wildfire Prepared Home Base: $68,099 (+$8,876 / ~1.8%)
  - IBHS Wildfire Prepared Home Plus: $74,465 (+$15,242 / ~3%)
- IBHS Base actually SAVES $4,194 vs CWUIC Part 7
- IBHS Plus adds only $2,172 over CWUIC Part 7
- Key cost components: flame/ember-resistant vents ($2,318), dual-pane tempered windows ($6,500 for 10 windows), fiber cement siding ($2,669), noncombustible Zone 0 ($3,742)
- Post-disaster Altadena reality: $450-$650/SF vs $285/SF baseline → $787K-$1.14M for same home
- Material costs NOT the driver — labor shortages and contractor overhead inflate costs
- "Material costs are not driving drastic increases in rebuilding costs in Altadena"

### 4. Headwaters Economics / CAL FIRE Retrofit Report
- For existing 2,000 SF home in California:
  - $2,000 to $100,000+ range depending on protection level
  - Effective strategies possible for $2,000-$10,000
  - Many critical tasks at little/no cost: clear gutters, remove roof debris, relocate flammable materials
  - Targeted approach: replace siding only on side close to neighbor, replace deck boards near house with noncombustible

### 5. January 2025 LA Fires (Palisades + Eaton)
- Jan 7, 2025
- 30 killed, 16,000+ structures destroyed
- $76-131 billion in losses
- Eaton Fire: 7,000+ structures, 14,000+ acres, 16 lives (per GraphFire-X study)

### 6. California WUI Code (2025/2026)
- Chapter 7A → Part 7 (Title 24) of CWUIC, effective January 1, 2026
- Applies to all new construction in State Responsibility Areas (SRA) and Very High FHSZ in Local Responsibility Areas
- Key requirements: fire-rated roofing, ember-resistant vents, enclosed eaves, noncombustible Zone 0, tempered glazing
- Zone Zero regulations under consideration: ember-resistant zone within first 5 feet
- Local jurisdictions can amend/strengthen

### 7. IBHS Wildfire Prepared Home Program
- Established 2022
- Two tiers: Base (ember defense) and Plus (flame + radiant heat)
- Third-party verified with 3-year designation + annual review
- Available in 14 states: AZ, CA, CO, FL, ID, MT, NV, NM, OK, OR, TX, UT, WA, WY
- "Wildfire Prepared Neighborhood" designation exists
- Major CA insurers committing to write policies for WFPH-designated homes
- Reduces risk of non-renewal and FAIR Plan reliance

### 8. GraphFire-X (arxiv preprint)
- Dual-specialist ensemble: Physics-informed GNN + XGBoost
- Applied to Eaton Fire specifically
- GNN captures neighborhood-level fire spread dynamics
- XGBoost handles granular building features
- Framework disentangles environmental risk from structural fragility

### 9. Triple-I Insurance Analysis
- "With the science-based information from this report, we can reduce risk and make our communities safer from wildfire" — Janet Ruiz, Triple-I
- Insurance industry using ML data to identify less risky properties within higher-risk geographies
- "Coordinated community-wide strategies like vegetation management, building code enforcement, and distance between structures are essential"

## Kill Test
Does this help someone building or buying a home? YES.
- Builder: WUI compliance costs only 2-3% more and unlocks insurance availability
- Homebuyer: ML data shows your home's survival depends on your neighbor as much as your own hardening
- Policy: Zone Zero vegetation removal may be less effective than home hardening — Cal Poly data challenges current regulatory assumptions
- Practical: Specific cost breakdowns for each component, priority order for retrofit

## Original Contribution
Cross-referencing the Berkeley ML feature importance data (structure spacing is #1) with the IBHS cost data (hardening adds only $13K) reveals the ROI paradox: the cheapest and most effective mitigation (hardening your own home) is simultaneously the most vulnerable to your neighbor's inaction. No existing article has quantified this gap.

## Strongest Counterargument
Individual home hardening still provides meaningful protection even without neighbor participation. The Berkeley study shows Zone 0 alone provides 17% loss reduction. And the IBHS certification creates insurance incentives that benefit the individual homeowner regardless of neighbors. The "collective action problem" framing may discourage individual action when individual action still has clear value.
