# Research: AI Wildfire Risk Scoring vs. the $9,000 Fix
## Article #372 — Priya Greenwood (Sustainability & Green Building)

### Angle
AI can now predict which homes will burn with 82% accuracy. The insurance industry already uses these models on a third of California's market. But the actual cost to build a fire-resistant home is shockingly low — as little as $9,000 more (1.8% of construction cost). The article bridges the gap between what AI knows and what homeowners/builders do about it.

### Kill Test
Does this help someone building or buying a home? **YES.** If you're building in any wildfire-prone area (11M+ California homes in WUI zones), this tells you: what AI already knows about your parcel's risk, what it costs to build fire-resistant, what specific measures matter most, and how it affects your insurance availability and premiums.

### Primary Sources

**1. UC Berkeley / Gollner & Zamanialaei (Nature Communications, August 2025)**
- ML model predicts structure survivability with 82% accuracy
- Trained on CAL FIRE DINS database (on-the-ground surveys of structures damaged/destroyed in major CA wildfires since 2013)
- Five fires analyzed: 2017 Tubbs/Thomas, 2018 Camp, 2019 Kincade, 2020 Glass
- Key finding: home hardening + defensible space together = 50% reduction in wildfire damage
- Just clearing vegetation within 5 feet of home (Zone 0) = 17% reduction in structure losses
- Structure separation distance = most influential factor driving loss in dense areas
- Nearly 1/3 of house ignitions caused by embers (actionable for homeowners)
- DOI: 10.1038/s41467-025-63386-2

**2. IBHS/Headwaters Economics Cost Study (Updated 2025)**
- 1,750 sq ft single-family home in SoCal (~$500K construction cost)
- Chapter 7A compliance: adds ~$13,000 (2.6%)
- IBHS Wildfire Prepared Home (WFPH): adds ~$9,000 (1.8%)
- IBHS WFPH Plus (enhanced): adds ~$15,000 (3%)
- Previous version: Enhanced = +$2,800, Optimum = +$18,200 (NorCal) / $27,100 (SoCal)
- Retrofit costs: $2,000 to $100,000 range. Effective strategies for $2,000-$10,000
- Key components: roof, under-eave area, exterior walls, attached deck, near-home landscaping (0-5 ft zone)
- Cost data from RSMeans national construction cost database

**3. ZestyAI Z-FIRE**
- AI wildfire risk model used by >1/3 of California insurance market
- Covers ~100% of US properties
- Analyzes 2,000+ historical wildfires
- Uses satellite/aerial imagery + topography + property-level characteristics
- California FAIR Plan (insurer of last resort) uses Z-FIRE
- Filing-ready in California without further PRID review (for rate segmentation/underwriting)
- CA officially selected Z-FIRE to help FAIR plan pool members struggling to get insurance

**4. Verisk Wildfire Model (July 2025)**
- First catastrophe model to complete California CDI PRID review
- Forward-looking view of wildfire risk with climate data
- Enables insurers to use robust, forward-looking wildfire model in rate filings for first time in state history
- Already approved by Nevada Division of Insurance (Feb 2025)

**5. Convr + Property Guardian Partnership (June 16, 2026)**
- Property-level wildfire intelligence in AI underwriting workbench
- Structure, parcel, community, and regional analytics
- Reduces reliance on costly in-person loss control inspections
- Announced just 2 days ago

**6. Delos Insurance + Spatial Informatics Group**
- ML on geospatial datasets for E&S insurance underwriting in CA
- Exclusive access to decades of wildfire modeling data used by Cal Fire and CPUC
- Successfully predicted scope of major wildfires over 7 years
- Includes climate projections and worst-case scenarios

**7. LA January 2025 Fires Context**
- 16,000+ structures destroyed
- 12,900 households displaced
- ~$30 billion in estimated losses
- 28+ fatalities

**8. California Building Code / Regulatory**
- Chapter 7A → Part 7 (CWUIC Title 24) effective January 1, 2026
- California "Safer from Wildfires" program: every hardening action qualifies for insurance discount
- 788,000 homeowner policies non-renewed in California in 2023
- Zone 0 regulation: 5-foot noncombustible perimeter around structure

**9. Builtech ICF ADU — Eagle Rock, LA**
- LA's first Type 1 ADU (highest fire-resistance classification under IBC/CBC)
- ICF (Insulated Concrete Form) construction
- 2 bedrooms, 1,150 sq ft
- $410,000 total construction cost
- Built in ~10 days
- Located minutes from Eaton Fire evacuation zone

### Original Contribution
The $9K-vs-$30B arithmetic: At $9,000 per home (IBHS WFPH standard), hardening all 788,000 non-renewed-policy homes in California would cost ~$7.1 billion. One fire season (January 2025 LA fires alone) caused $30 billion in losses. The per-home ROI calculation reveals the irrationality of the current system — insurers have the AI to score risk at the parcel level, the hardening cost is 2% of construction, but the policy apparatus hasn't connected the two.

### Strongest Counterargument
Home hardening addresses ember ignition (the #1 cause of WUI structure loss), but structure separation distance — the most influential factor in the Berkeley study — is largely outside individual homeowner control. Dense neighborhoods can't create separation after the fact. AI models can predict this, but the mitigation is a planning/zoning problem, not a homeowner spending problem. Also: the 82% accuracy means 1 in 5 predictions is wrong, and the model was trained on 5 historical fires — future fires under climate change may behave differently.

### Limitations
- Cost data is California-specific (RSMeans-derived) — transfers to other WUI regions need local adjustment
- Berkeley model trained on pre-2022 fires; LA January 2025 fires not in training data
- Insurance premium reduction from hardening is not standardized — "Safer from Wildfires" discount amounts vary by insurer
- Retrofit costs ($2K-$100K range) vary enormously — the $9K new-construction figure doesn't apply to existing homes
- AI models are proprietary (ZestyAI, Verisk) — homeowners can't independently verify their parcel-level scores
