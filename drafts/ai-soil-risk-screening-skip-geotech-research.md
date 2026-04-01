# Research: AI Soil Risk Screening — Why Half of U.S. Homes Are Built on Dangerous Ground Without Testing

## Angle
Half of American homes sit on expansive soils. A quarter have already suffered damage. The IBC technically requires geotechnical reports (Section 1803), but building officials routinely waive them. At $2,000–$3,500 per report, many residential builders skip them entirely. Meanwhile, the USDA's SSURGO database already has shrink-swell ratings for every parcel in the country — for free. Machine learning models can now predict soil bearing capacity with R² = 0.928 from limited data. The question: could AI pre-screen every residential lot using publicly available soil data, and flag the ones that actually need a full bore-and-lab investigation?

## Kill Test
Does this help someone building or buying a home? **YES.** A homebuyer could check their lot's AI-derived soil risk score before closing. A builder could avoid $50K+ foundation repair liability by spending $2,500 on a targeted geotech report flagged by AI. A building department could triage which permit applications truly need soil investigation vs. which can be waived.

## Key Data Points

### Expansive Soil Damage (Source: Virginia DMME / ASCE)
- Expansive soils, frost heave, and compressive soils cause more damage to structures in the U.S. than any other natural hazard
- Losses estimated at **$7 billion annually** (Virginia Energy / DMME, citing ASCE and USDA data)
- USDA: **half of U.S. homes** are built on expansive soils
- ASCE: **a quarter of all homes** have suffered damage from expansive soils
- Montmorillonite clay can swell to **15x its dry volume**, generating pressures exceeding **30,000 psf**
- Standard homeowner's insurance does NOT cover expansive/compressive soil damage

### Geotechnical Report Costs (Source: NewTech Geo, 2025)
- Standard residential: **$2,000–$3,500** (2-3 borings, lab tests, foundation recommendations)
- Complex sites (hillside, clay, high water table): **$3,500–$6,000**
- Commercial/industrial: **$10,000–$50,000+**
- Rush orders add 20-40% premium
- Includes: soil borings, lab testing (moisture, density, shear strength), engineering analysis, foundation type recommendation

### IBC Requirements (Source: IBC Chapter 18, Section 1803)
- IBC Section 1803 requires geotechnical investigation for every project
- **Exception:** building official can waive the requirement if soils data is available from an adjacent project
- Many projects are "designed and built without a subsurface investigation and geotechnical report ever having been done" (F&R Consultants / GSG Labs analysis)
- California is stricter: County Code + CA Building Code require soils reports for new habitable structures, major additions, retaining walls >4ft
- But many states follow IBC with the waiver exception, meaning residential projects often skip it

### ML Soil Prediction (Source: MDPI Geosciences, 2025-2026)
- GBRT (Gradient Boosting Regression Trees) model: **R² = 0.928** for predicting bearing capacity from limited borehole data
- Training set: 472 samples
- XGBoost and LightGBM also performed well (R² = 0.817–0.849)
- Key input parameters: SPT blow count, footing width, embedment ratio, applied pressure
- Soil liquefaction prediction model: **86.2% accuracy**, exceeding standard SOP methods (70-85%)
- Clay activity prediction with Gradient Boosting: **R² = 0.94** using liquid limit alone

### USDA NRCS Web Soil Survey / SSURGO
- Free, publicly available soil classification data for every surveyed tract in the U.S.
- Covers: texture, profile, nutrient content, pH, organic matter, salinity, drainage, erosion risk
- Includes shrink-swell potential ratings
- Spatial data tools available for programmatic access
- Resolution varies: detailed enough for parcel-level screening in most areas

## Novel Contribution / Original Calculation
**Cross-referencing SSURGO shrink-swell data with new construction permits to estimate how many homes are built on high-risk soil without investigation:**

- ~1.4M housing starts/year (US Census, 2024-2025 SAAR)
- USDA: 50% of homes on expansive soils → ~700K new homes/year on expansive soil
- Many jurisdictions waive geotech under IBC 1803 exception
- If even 30% of those 700K skip geotech reports → **210,000 homes/year built on risky soil with no investigation**
- At ASCE's 25% lifetime damage rate: **52,500 of those homes will eventually suffer foundation damage**
- At average foundation repair cost of $10K–$50K → **$525M to $2.6B in preventable damage per cohort of new homes**
- Cost of AI pre-screening all 1.4M lots using SSURGO data: essentially $0 (data is free, compute is minimal)
- A triage system could: flag high-risk lots for mandatory geotech → $2,500 × 700K = $1.75B, OR flag only the highest-risk 30% → $2,500 × 210K = $525M
- **ROI: spending $525M on targeted geotech reports to prevent $525M–$2.6B in damage — before the first shovel hits dirt**

## Strongest Counterargument
- Experienced builders and engineers already know their local soils. A veteran in the Dallas-Fort Worth area doesn't need an AI to tell them about expansive clay.
- SSURGO data resolution may be too coarse for parcel-level decisions — soil conditions can vary dramatically within 100 feet.
- Adding mandatory geotech reports raises the cost of already-expensive housing, which hits first-time buyers hardest.
- The 25% damage statistic includes minor cosmetic cracking that doesn't threaten structural integrity.

## Limitations
- The $7B/year figure is widely cited but its provenance is old (1970s-era estimates, inflation-adjusted). No recent comprehensive study exists.
- The "50% on expansive soils" and "25% damaged" ASCE figures are similarly dated.
- ML bearing capacity models (GBRT R² = 0.928) have only been tested in academic settings, not deployed at scale for residential screening.
- No commercial product currently offers automated SSURGO-to-risk-score screening for individual residential lots.
- The 30% "skip rate" for geotech reports is our estimate — no survey quantifies this nationally.

## Sources
1. Virginia Energy (DMME) — "Expansive Soils" page (citing USDA and ASCE data on $7B damage, 50% prevalence, 25% damage rate)
2. MDPI Geosciences — "Ensemble ML for Bearing Capacity Prediction" (GBRT R² = 0.928, 472 samples)
3. MDPI Geosciences — "Interpretable AI for Soil Liquefaction Assessment" (86.2% accuracy via Rough Set Theory)
4. NewTech Geo — "How Much Does a Geotechnical Report Cost in the Carolinas?" (2025, $2K-$3.5K residential average)
5. F&R Consultants — "Speaking in Code: Soils & Special Inspections" (IBC 1803 analysis, waiver exception)
6. USDA NRCS — Web Soil Survey / SSURGO database (free parcel-level soil data)
7. Foundation Systems Engineering — "Real Cost of Poor Soil Conditions" (foundation repair costs $10K-$100K+)
8. US Census Bureau — New Residential Construction (housing starts ~1.4M SAAR)

## Journalist
**Jake "Jackhammer" Kowalski** — This is a tools-and-technology story about using data that already exists to prevent the most common (and most ignored) construction risk in America.
