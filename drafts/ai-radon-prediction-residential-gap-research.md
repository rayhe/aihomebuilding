# Research Notes: AI Radon Prediction vs. Residential Construction Reality

## Slug: ai-radon-prediction-residential-gap
## Journalist: Jake Kowalski (construction technology)
## Article #667

## Core Angle
The EPA's radon zone map was made in 1993 using county-level data. AI models published in 2026 can now predict indoor radon concentrations at R² = 0.96 using geology, soil permeability, building features, and fault data. But no building code, permit office, or builder uses them. Your builder checks a 33-year-old county map (if they check at all), builds your house, and you test with a $15 kit after you've moved in. The technology to predict radon risk BEFORE breaking ground exists in academic papers. It hasn't reached a single building department.

## Kill Test
Does this help someone building or buying a home? YES — directly informs decisions about radon-resistant construction, pre-construction risk assessment, and the cost difference between building in protection vs. retrofitting.

## Primary Sources (3+)

### 1. GIRA Model — Physics-Informed Neural Network (2026)
- Paper: Zeybek, M. "A novel physics-informed AI framework for the assessment and prediction of indoor radon concentration and risk classification"
- Published: Applied Radiation and Isotopes, June 2026, Vol 232:112533
- DOI: 10.1016/j.apradiso.2026.112533 | PMID: 41780326
- Method: Physics-Informed Neural Network (PINN) integrating radon transport physics with ML
- Model name: Geologically-Informed Radon Assessment (GIRA)
- Inputs: geological foundations (Qg), faults (Qf), building materials (Qb), building porosity
- Validated on: 957 structures in Western Türkiye
- Results: MAE = 52 Bq/m³, R² = 0.96
- Found 15.3% of structures high-risk (>300 Bq/m³)
- "Significantly outperformed conventional machine learning approaches"

### 2. Pennsylvania Indoor Radon ML Study (2026)
- Paper: "Quantifying mean, variability, and uncertainty in indoor radon exposure in Pennsylvania using random forest and quantile regression forest models"
- Published: Scientific Reports (Nature), 2026
- DOI: 10.1038/s41598-026-37891-3 | PMID: 41786814
- Dataset: 718,111 radon test results
- Methods: Random Forest (RF) + Quantile Regression Forest (QRF) at ZCTA (zip code) level
- Key finding: Average radon most strongly associated with subsurface permeability and heating fuel type
- Crucial insight: "regions with moderate average exposure levels could still harbor extreme outliers"
- Used 60+ features: geological, meteorological, building-specific data
- Used H3 spatial indexing (Uber's hexagonal grid system)

### 3. EPA Radon Zones Map (1993, still current)
- Source: US EPA, epa.gov/radon/epa-map-radon-zones
- Developed in 1993
- Based on: indoor radon measurements, geology, aerial radioactivity, soil parameters, foundation types
- 3 zones across 3,141 US counties
- Action level: 4 pCi/L (150 Bq/m³)
- EPA's own caveat: "should not be used to determine if individual homes need to be tested"
- Updated text version released Sept 2025, but methodology unchanged since 1993

### 4. USGS Geologic Radon Potential Map (2025 data release)
- DOI: 10.5066/P1KHDPHX
- Radon Index (RI) composite score from 5 factors: geology, soil permeability, aerial gamma radioactivity, home architecture, screening indoor radon data
- Originally released as USGS Open-File Report 93-292

### 5. EPA Health Risk Data
- ~21,000 lung cancer deaths per year attributable to radon (EPA Assessment of Risks from Radon in Homes, EPA 402-R-03-003)
- Radon: #1 cause of lung cancer in non-smokers, #2 overall
- 13.4% of US lung cancer deaths believed radon-related
- ~6 million US homes above 4 pCi/L action level (CDC)
- Average indoor radon: 1.3 pCi/L
- At 4 pCi/L lifetime exposure: 7 in 1,000 never-smokers get lung cancer (comparable to car crash death risk)

### 6. Public Awareness Survey (Healio/OSU, 2024)
- n = 1,006 respondents
- 75% have NOT tested their home for radon
- 48% unaware of radon risks in their home
- 55% not concerned about radon exposure
- Source: Healio, April 2024; Dr. David Carbone, OSU Thoracic Oncology

### 7. IRC Building Code — Radon Provisions
- IRC Appendix F (now Appendix BE in 2024 IRC): optional radon control standard
- "Not mandatory unless specifically referenced in the adopting ordinance"
- Jurisdictions must EXPLICITLY adopt it — it's opt-in
- 2021 IRC added post-construction testing requirement
- Only applies in Zone 1 counties where adopted
- States with some RRNC requirements: varies widely — Virginia allows counties to adopt; Oregon requires in 7 counties; Washington requires in 7 counties; Massachusetts requires in 3 counties (Essex, Middlesex, Worcester)
- Most states: NO radon construction requirement at all

### 8. RRNC Cost Data
- Passive RRNC system during construction: ~$350-$500 (gravel bed, soil-gas-retarder membrane, 3-4" PVC vent pipe through roof)
- Retrofit active mitigation system: $800-$2,500+ (exterior pipe + fan, sealing, testing)
- Virginia DOH: "Installing a full mitigation system after construction is finished usually costs more and most of the piping and the fan will usually be attached to an exterior wall"

### 9. South Korea ML Radon Mapping (Frontiers, 2021)
- 1,452 dwellings, 10 geogenic factors
- ELM model AUROC = 0.824
- ~40% of study area in high/very high risk zones
- "map can be used to establish more appropriate construction regulations in radon-priority areas"

### 10. German Indoor Radon Map (2024)
- PMID: 39292674 | DOI: 10.1289/EHP14171
- Quantile Regression Forest using environmental + building data as predictors
- Estimated probability distribution for each floor of each residential building in Germany
- Monte Carlo sampling for population-weighted predictions

## Original Contribution
1. Cost gap calculation: RRNC during construction ($350-$500) vs retrofit ($800-$2,500) = 2-7× more expensive after the fact. But the decision about whether to install RRNC is based on a 1993 county-level map, not building-specific prediction.
2. The technology-policy disconnect: At least 4 published ML/AI models (GIRA, Pennsylvania RF/QRF, South Korea ELM, Germany QRF) can predict radon risk at the individual building or zip-code level. Zero building codes reference or require AI-based risk assessment. The IRC still points to the 1993 EPA map.
3. The "test after you move in" absurdity: 75% of people don't test. Of those who do, they test AFTER construction — when the cheapest intervention window ($350 passive system) has closed. AI could flag risk BEFORE the foundation is poured.

## Strongest Counterargument
The EPA's own position: "The Map of Radon Zones should not be used to determine if individual homes need to be tested." They already know the map is inadequate at the individual home level. Their answer is: test every home. But 75% of people don't. The counterargument to AI prediction is that testing is cheap ($15-$30) and definitive — you get actual measured radon, not a prediction. But this misses the construction timeline: by the time you test, the foundation is poured and the $350 passive system costs $2,500 as a retrofit.

## Limitations
- GIRA model validated only in Western Türkiye (957 structures) — not US geology
- Pennsylvania study is zip-code level, not individual-building level
- No commercial product exists that integrates these models into building permit workflows
- RRNC cost data is approximate — varies significantly by region and builder
- The 75% non-testing statistic is from a 2024 survey (n=1,006), not a census
