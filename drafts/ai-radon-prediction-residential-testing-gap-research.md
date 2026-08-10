# Research: AI Radon Prediction vs. Residential Testing Gap

## Core Thesis
AI/ML models can predict indoor radon concentrations from geological, meteorological, and building data with R² of 0.96 and classify high-risk zones with 82-95% accuracy. Yet the EPA's own radon zone map dates to 1993 (county-level, based on a 1992 survey), most homes have never been tested, and no consumer-facing AI radon prediction product exists.

## Key Statistics
- **21,000** lung cancer deaths/year in US from radon exposure (EPA, multiple studies)
- Radon = #1 cause of lung cancer in non-smokers, #2 overall after smoking
- **1 in 15 homes** (~6.7%) nationwide above EPA action level (4 pCi/L) — 1992 National Residential Radon Survey applied to Census data
- **40%** of Pennsylvania homes tested show high radon levels (American Lung Association, Jan 2026)
- **~50%** of Montana homes tested at or above 4 pCi/L (Montana DEQ)
- Only **46%** of NJ homes testing above 4 pCi/L have been mitigated (NJ DEP, 2024)
- Appalachian study: **97%** of participants had NEVER tested before (PMC8243395, 2019)
- Of those who did test: 29% were above EPA action level (range 4.7-19.5 pCi/L)

## AI/ML Research
1. **PINN/GIRA Model (Zeybek, 2026):** Physics-Informed Neural Network achieving MAE of 52 Bq/m³ and R² of 0.96 on 957 structures in Western Türkiye. Incorporates geological foundation radon (Qg), fault contributions (Qf), building material contributions (Qb), and building porosity. Identified 15.3% of structures as high-risk (>300 Bq/m³). Published in Applied Radiation and Isotopes, Jun 2026.

2. **Pennsylvania RF/QRF (2026):** Random Forest and Quantile Regression Forest models on 718,111 radon test data points at ZCTA level. Found regions with moderate average exposure can harbor extreme outliers missed by mean-based models. Published in Scientific Reports, 2026.

3. **South Korea ML (2021):** ELM model with AUC 0.824 mapping geogenic radon potential from 1,452 dwellings using 10 geological/topographic factors. Found ~40% of study area in high/very-high risk zones. Published in Frontiers in Environmental Science.

4. **Switzerland/Finland (Kropat, Nikkilä):** Random forests predicting radon from detailed geological data.

5. **Georgia (Dai):** Geological fault zones and housing characteristics as critical factors.

6. **Greater Boston (Li):** Ensemble ML predicting monthly radon at ZCTA level integrating multiple data types.

## Cost Data
- DIY short-term test kit: $15-30 at hardware store
- Professional radon test: $150-300
- Mitigation (sub-slab depressurization): $500-$2,500 (average ~$1,200, Utah DEQ says ~$2,000)
- EPA action level: 4 pCi/L
- EPA long-term goal: reduce to outdoor average of 0.4 pCi/L
- EPA short-term goal: below 2 pCi/L

## The Gap
- EPA Radon Zone Map: county-level, based on 1993 data, hasn't been updated with modern ML
- No consumer-facing AI product predicts radon risk at the address level
- Home inspections don't require radon testing in most states
- Real estate disclosure laws vary wildly by state
- New construction: radon-resistant features required in some codes but not all
- Montana: nearly half of newly constructed homes built with radon-resistant features (DEQ)
- Pre-purchase: only recommended, not required, to test during inspection period

## Sources
- EPA National Residential Radon Survey (1992): cfpub.epa.gov/roe/indicator.cfm?i=27
- Zeybek (2026) PINN/GIRA: PMID 41780326, DOI 10.1016/j.apradiso.2026.112533
- Pennsylvania RF/QRF (2026): DOI 10.1038/s41598-026-37891-3
- South Korea Frontiers (2021): DOI 10.3389/fenvs.2021.753028
- Systematic Review (2024): PMID 39324153, DOI 10.3389/fpubh.2024.1460295
- Montana DEQ radon testing data
- NJ DEP radon mitigation statistics (2024)
- Appalachian radon testing study: PMC8243395
- American Lung Association PA data (Jan 2026)
- Utah DEQ mitigation guidance
- NCHH radon information

## Kill Test
Does this help someone building or buying a home? YES — directly actionable. A buyer can demand a radon test ($15 DIY or $150 professional), negotiate price reductions, or walk away. A builder can install radon-resistant new construction for ~$350-$500 (passive system with sealed slab and pipe stub). The AI models show which addresses are high-risk before anyone measures.

## Journalist
Jake Kowalski — construction tech, practical tools, sensors. This is his beat: a $15 test kit and a $1,200 mitigation system solving a 21,000-deaths-per-year problem, with AI that could predict it before you even break ground.
