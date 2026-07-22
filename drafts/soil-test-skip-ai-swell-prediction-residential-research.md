# Research Notes: The Geotechnical Report Gap & AI Soil Prediction

## Angle
Most residential builders skip the geotechnical report — the $2,700 soil test that tells you what your foundation is sitting on. Foundation repairs cost $20,000–$100,000. ML models can now predict soil swell potential from just two numbers (plasticity index + clay fraction) — a lightweight screen that could fill the gap between "no data at all" and "full geotechnical investigation." But nobody's built a consumer-facing product for residential.

## Kill Test
Does this help someone building or buying a home? YES.
- Tells them what a geotech report costs ($1,000–$5,000, avg $2,700) and why they need one
- Quantifies the cost of skipping it ($20K–$100K foundation repair)
- Explains what ML models can already do with limited soil data
- Identifies the product gap nobody has filled

## Primary Sources

### 1. Groundworks National Foundation Survey (June 2026)
- Source: BusinessWire, June 23, 2026
- 36% of homeowners lack knowledge/confidence to check for foundation/basement problems
- 86% of homeowners living in homes old enough to be failing "are sleeping fine" (confidence gap)
- 39% of Southern homeowners uncovered structural problem worse/costlier than expected (highest rate, despite newest housing stock)
- Foundation problems from soil movement, drought, settling often NOT covered by standard homeowners insurance
- Jeffrey Martin, COO of Groundworks: "It's not the age of the home that causes structural movement — it's the soil beneath it."

### 2. Foundation Repair Cost Data (Multiple Sources: Angi, This Old House, Bob Vila, Modernize — all 2026)
- Geotechnical report: $1,000–$5,000 (avg $2,700, HomeAdvisor/HomeGuide)
- Soil report: $500–$3,000 (Angi, Bob Vila)
- Foundation inspection: $300–$1,000 (avg $600, This Old House)
- Foundation repair ranges:
  - Hairline cracks: $250–$800
  - Settling/sinking: $3,000–$10,000
  - Soil movement/expansive clay: $1,000–$5,000+
  - Major structural failure: $10,000–$25,000+
  - Foundation replacement: $20,000–$100,000
  - House lifting: $20,000–$23,000
- Additional soil boring: $300–$900 per hole

### 3. ML Swell Risk Prediction Model (MDPI, 2025)
- Paper: "Efficient Swell Risk Prediction for Building Design Using a Domain-Guided Machine Learning Model"
- Random forest model predicts swell potential of expansive soils using routine geotechnical index data
- Simplified TWO-FEATURE version: only needs plasticity index + clay fraction
- Validated with 80:20 stratified hold-out, k-fold cross-validation, bootstrap uncertainty
- Uses SHAP and PDP for explainability — consistent with established geotechnical principles
- "lightweight, fast to implement, suitable for integration into BIM and GIS-based site screening"
- Original contribution: domain-informed pruning keeps model aligned with geotech knowledge

### 4. AI Foundation Deformation Prediction (MDPI Buildings, 2025)
- Paper: "Foundation-Specific Hybrid Models for Expansive Soil Deformation Prediction and Early Warning"
- Hybrid ML models combining XGBoost, RF, etc. for predicting vertical deformation in expansive soils
- Uses soil moisture data at 60cm depth
- Addresses moisture-induced volume changes — the #1 cause of residential foundation damage
- Suggests multi-depth moisture sensors (30cm, 60cm, 90cm) for better predictions

### 5. Satellite Remote Sensing for Expansive Clay (MDPI Atmosphere, 2021)
- Paper: "Monitoring of Expansive Clays over Drought-Rewetting Cycles Using Satellite Remote Sensing"
- MT-InSAR (Multi-Temporal Synthetic Aperture Radar Interferometry) captures vertical ground displacement from clay expansion
- Can detect sub-annual shrinking/swelling timeframes
- Scalable to map larger areas for shrink-swell risk assessment
- Study in Loire Valley, France — clayey soil instrumented with extensometers + soil moisture sensors

### 6. GeoAI + Satellite Imagery for Soil Properties (MDPI Sensors, cited)
- Hybrid CNN-RF model predicts sand (R²: 0.992), silt (R²: 0.987), clay (R²: 0.995) from satellite imagery
- Uses Landsat-8 images + SRTM DEM topography + meteorological parameters
- 317 soil samples from Iran — demonstrated transferability concept

### 7. AI-Driven Soil Heaving Analysis (Springer, 2025)
- AI agent for soil heaving assessment in rail infrastructure
- One-time system cost ~$4,400 vs $14,000–$20,000 per seasonal field campaign
- Real-time inference: ~3.4 seconds per instance
- Automated routine soil engineer and data engineer functions

### 8. San Antonio Soils Report Video (YouTube, June 2026)
- Collier Bashara, Southern Living Builder of the Year
- "Most builders skip the soils report. Here's why that's a mistake."
- Plasticity Index explained: 0 to 57, what those numbers mean for foundation design
- Foundation options driven by soil report: slab on grade, post-tensioned slab, drilled piers, pier and beam
- Bathtub effect: deep soil excavation can create the problem it was meant to solve

## Strongest Counterargument
Geotechnical reports are already required by code in many jurisdictions for any structure over a certain size. The real gap isn't that nobody orders them — it's that production builders in permissive jurisdictions treat them as optional, and ML models are still academic papers, not products. The two-feature random forest model was validated on controlled datasets, not on the messy, heterogeneous soils under real building sites. Soil conditions can change within 50 feet of a borehole. Satellite-based models work on regional scales but can't tell you what's happening 8 feet under your specific lot.

## Limitations
- No reliable national data on what percentage of residential builds skip geotech reports
- ML models for swell prediction are validated in research settings, not deployed commercially for residential
- Satellite remote sensing resolution may be too coarse for individual lot assessment
- The "two-feature model" assumes you already have plasticity index and clay fraction — which still requires a soil sample

## Journalist
Jake Kowalski — construction tech, tools, robotics. This is fundamentally a technology gap story: the tools exist in research but haven't been productized for residential.
