# Research: AI Predicts Which Homes Survive Wildfire

## Angle
Machine learning can now predict with 82% accuracy whether a specific home will survive a wildfire. The biggest factor isn't the roof material or the windows. It's how close the neighbors are. A Berkeley-led study across five major California fires found that structure separation distance dominates the survivability equation, and that combining hardening with defensible space could cut losses by 52%. Post-Palisades, this data is driving rebuilding standards that could reset insurance markets.

## Kill test
**Does this help someone building or buying a home?** YES. If you're building in WUI zones: what construction standards to exceed, what the actual cost is (~3% premium for Wildfire Prepared Home Plus), and why your neighbor's choices matter as much as yours. If you're buying: how to evaluate whether a home's fire resilience is real or theater.

## Journalist
Priya Greenwood (sustainability, green building). Connects data to real costs and consequences. Evidence-based urgency.

## Primary Sources

### 1. UC Berkeley / Gollner et al. (Nature Communications, Aug 2025)
- "Fire risk to structures in California's Wildland-Urban Interface"
- Authors: Zamanialaei, San Martin, Theodori, Purnomo, Tohidi, Lautenberger, Qin, Trouvé, Gollner
- UC Berkeley + U of Maryland + CloudFire Inc.
- DOI: 10.1038/s41467-025-63386-2
- Five major CA WUI fires: 2017 Tubbs, 2017 Thomas, 2018 Camp, 2019 Kincade, 2020 Glass
- Data: CAL FIRE DINS (damage inspection database) + geospatial sources (building spacing, materials, vegetation density)
- XGBoost classifier: 82% accuracy predicting structure survivability
- **Key finding:** Structure separation distance is the MOST influential factor
- Hardening + defensible space combined = hypothetical 52% reduction in losses
- Just removing vegetation within 5-foot perimeter = 17% reduction in losses
- Homes with hardening + defensible space survived at ~50% rate vs 20% with no mitigation

### 2. CA Department of Insurance + NAIC Study (April 2026)
- First study to model community-wide adoption of IBHS Wildfire Prepared Home standard on Average Annual Loss (AAL)
- Modeled the Palisades and Eaton fire zones (~30,000 homes)
- Used Moody's wildfire catastrophe model
- WPH Base standard (ember defense): 31% AAL reduction
- WPH Plus standard (adds radiant heat + direct flame protection): 35% AAL reduction
- Marginal cost of WPH Plus vs minimum code: ~3% per home
- Paradise, CA: first municipality to adopt WPH as rebuilding benchmark; insurers returning to market

### 3. McKinsey (Oct 2025) - "Resetting California's homeowners insurance market"
- Chapter 7A homes have up to 40% lower wildfire loss rates
- 95% of homes damaged in 2025 Palisades fire were built BEFORE Chapter 7A (2008)
- Basic mitigation (ember-resistant vents, defensible space): $10,000-$15,000 for 2,000 sqft home
- Comprehensive retrofit: up to $100,000 depending on upgrades
- Retrofit financing: Mello-Roos districts, property-based loans, targeted subsidies

### 4. Headwaters Economics (2024)
- Detailed cost analysis for retrofitting 2,000 sqft two-story California home
- Basic hardening (ember-resistant vents, clean gutters, non-combustible mulch): $10,000-$15,000
- Full "adequate wildfire resistance" (enclose eaves, replace windows/roofs/decks): $23,000-$40,000
- UC ANR: effective retrofitting can start at $2,000-$10,000
- High-priority action: remove combustibles within 5 feet of structure (near-zero cost)

### 5. GraphFire-X (arxiv, Dec 2025)
- Physics-Informed Graph Attention Networks + XGBoost
- Applied to 2025 Eaton Fire specifically
- Novel dual-specialist ensemble: environmental contagion + structural fragility
- GNN found: neighborhood-scale environmental pressure overwhelmingly dominates
- XGBoost found: eaves are primary micro-scale ember ingress vector
- Used Google AlphaEarth Foundation embeddings for satellite data

### 6. Equity Data (Nature Communications, Jan 2025)
- Reining et al., Stanford + Univ of Freiburg
- 2.9 million buildings across 16 CA counties (2013-2021)
- Homes in disadvantaged communities (DACs) are 29% more likely to be destroyed within 30 years
- DAC homes have 28% fewer roof renewals
- Post-wildfire: non-DAC homes see 17% increase in renewals vs only 7% in DACs

### 7. Camp Fire Data
- 40% of post-1997 homes survived vs 11% pre-1997 (UC researchers)
- Paradise: 18,000+ structures lost in 2018
- Now rebuilding to IBHS WPH standard; insurers returning

### 8. California Programs
- $100M FEMA pilot program for home retrofits in high-fire areas
- San Diego County: 500 backcountry homes, up to $40,000 each
- Safer from Wildfires insurance discount program (CDI)
- Insurance savings example: $1,441/yr cut on $13,788 premium
- Disaster Resiliency and Coverage Act of 2025: $10,000 tax-free grants (proposed)

## Original Contribution
Cost-per-percent-risk-reduction calculation: the 5-foot vegetation clearance is essentially free and delivers 17% loss reduction. At the other extreme, full WPH Plus costs ~3% per home but delivers 35% AAL reduction. This establishes a "marginal cost of fire resilience" curve that nobody has explicitly calculated for builders.

## Strongest Counterargument
Individual home hardening has diminishing returns in dense developments where structure-to-structure ignition dominates. The Berkeley study found separation distance matters more than any single hardening measure. A perfectly hardened home 10 feet from an unhardened neighbor is still at risk. This is fundamentally a collective action problem that building codes can't fully solve at the individual home level.
