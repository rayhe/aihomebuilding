# Research: AI Geotechnical Analysis — The $2,900 Report That Could Save You $35,000

## Slug: ai-geotechnical-soil-analysis-foundation-risk

## Journalist: Catherine Chen (Policy & Regulation)

## Kill Test
Does this help someone building or buying a home? **YES.** Half of US homes sit on expansive soils, a quarter have suffered soil-related damage (ASCE). Geotechnical reports cost $1,000-$5,000 and are sometimes waived or skipped by builders. Foundation repair costs $3,000-$35,000+. AI/ML tools are now predicting soil behavior from existing data (USDA SSURGO, boring logs, satellite imagery) before a single hole is drilled. Homeowners and builders need to know: when is a geotech report mandatory, when do builders skip them, what ML tools exist, and what's the cost/benefit math?

## Angle
Most residential builders get a geotechnical report because the county requires it. Many don't when the jurisdiction allows waivers. AI and machine learning models trained on USDA SSURGO data, historical boring logs, and geological survey records can now predict soil behavior across a site before drilling — telling you where to drill, how many borings you actually need, and flagging risk zones the standard 2-bore report would miss entirely. The question: does the math work for residential?

## Primary Sources

### 1. Virginia Department of Energy — Expansive Soils (Government Source)
- URL: https://energy.virginia.gov/geology/ExpansiveSoils.shtml
- Key data: Expansive soils, frost heave, and compressive soils cause more damage to US structures than any other natural hazard
- Losses estimated at **$7 billion annually** (adjusted for inflation likely higher now)
- USDA: **50% of US homes built on expansive soils**
- ASCE: **25% of all homes have suffered damage from expansive/compressive soils**
- Montmorillonite clay can swell up to 15x its dry volume, generating pressures exceeding 30,000 PSF
- **Standard homeowner's insurance does NOT cover expansive/compressive soil damage or frost heave**
- Foundation crack image shows differential settlement pattern

### 2. Physics-Constrained ML for Geotechnical Data Prediction (MDPI, 2025)
- URL: https://www.mdpi.com/2673-7094/6/1/20
- Title: "Physics-Constrained Machine Learning Modeling for Geotechnical Data Prediction: Case Study on Site Soil Type and Bedrock Depth Datasets"
- Uses USDA SSURGO data + boring logs + soil color attributes at 8 depth intervals
- ML models trained on MUKEY (Map Unit Key) identifiers linked to soil texture/composition
- Integrates parent material info + soil color ID codes at 25cm, 50cm, 75cm, 100cm, 125cm depths
- Physics-constrained approach ensures predictions respect physical laws (not just statistical patterns)
- Key finding: integrating color ID data with parent material improves predictive capability for soil type and bedrock depth

### 3. Interpretable AI for Site-Adaptive Soil Liquefaction Assessment (MDPI Geosciences, 2025)
- URL: https://www.mdpi.com/2076-3263/16/1/25
- Sensitivity analysis with performance metrics for soil liquefaction prediction
- Interpretable models (not black boxes) — critical for engineering liability

### 4. Seequent — Geospatial AI for Subsurface Understanding (Industry Platform)
- URL: https://www.seequent.com/artificial-intelligence-to-understand-the-underground/
- Building unified open data platform for geotechnical data
- Dr. Alexandre Boucher: Biggest hurdle is vast quantities of unorganized, siloed data
- Data in project files, individual hard drives, different formats, different standards
- OpenGround: cloud-connected geotechnical data management, lab testing integration (Feb 2026)
- Seequent is subsidiary of Bentley Systems

### 5. HomeGuide — Geotechnical Report Costs (Cost Data)
- URL: https://homeguide.com/costs/geotechnical-report-cost
- Average cost: $1,000-$5,000, national average $2,900
- Geotechnical engineers: $30-$100/hour
- Soil boring: $700-$1,500 for 2 holes, $300-$900 each additional
- Lab analysis: $80-$200/hour
- Compaction test: $10-$100/sample
- Percolation test: $250-$700

### 6. Foundation Repair Costs (Modernize, 2026)
- URL: https://modernize.com/foundations/repair-cost
- Small cracks/minor settling: $300-$3,000
- Moderate issues (uneven floors, moisture): $3,000-$8,000
- Major structural repairs (piering, wall stabilization): $8,000-$25,000+
- Structural shifts, major bowing: $15,000+
- Basement foundation repair: $5,000-$15,000
- Slab repair: $3,000-$7,500

### 7. Haynes v. Intermountain GeoEnvironmental Services (Legal Case, Utah 2019)
- URL: https://www.constructionrisk.com/2020/09/economic-loss-doctrine-applied-to-dismiss-homeowner-suit-against-geotechnical-firm/
- About a year after building new home, owners noticed cracks in foundation and walls
- Soil under house was unstable
- Sued geotechnical firm that authored report for developer 10 years prior
- District court dismissed — barred by economic loss rule
- Affirmed on appeal: homeowners could not recover in tort against geotech firm they didn't hire directly
- Key lesson: the geotech report was for the developer, not the homeowner. Builder's liability gaps.

### 8. County Geotechnical Requirements
- Sonoma County (permitsonoma.org): Specific bulletin B-28 defines when geotech investigation is required
- Santa Cruz County: Required for new habitable structures, major additions/remodels, retaining walls >4ft. Can be waived in some cases.
- Seattle: Requires licensed PE with geotech expertise. Reports include soil bearing capacity, settlement estimates, foundation recommendations.

## Data Points for the Article
- $7B annual damage from expansive soils (more than earthquakes, tornadoes, hurricanes)
- 50% of US homes on expansive soils (USDA)
- 25% of homes have suffered soil damage (ASCE)
- $2,900 average geotech report cost vs $8,000-$25,000+ foundation repair
- Insurance doesn't cover it
- ML models now predict soil type from SSURGO + satellite + boring logs with physics constraints
- Most residential geotech reports rely on just 2 bore holes for entire lot
- Each additional bore costs $300-$900 — AI could tell you which bores to skip and which to add
- Legal precedent shows homeowners can't always sue geotech firm they didn't hire directly

## Story Structure (Catherine Chen voice)
1. Open with the math: $2,900 report vs $7B annual damage problem. The report most builders skip when they can.
2. What geotech reports actually tell you (and what they miss with 2 borings on a 10,000 sq ft lot)
3. The ML models: USDA SSURGO + physics-constrained predictions. What exists now vs what's coming.
4. Regulatory patchwork: which jurisdictions require it, which allow waivers, liability when things go wrong
5. The Haynes v. Intermountain case: when the geotech report exists but protects the developer, not you
6. Insurance gap: homeowner's insurance doesn't cover this
7. Actionable: when to demand a geotech report, what to look for, how many borings are enough, emerging AI tools
