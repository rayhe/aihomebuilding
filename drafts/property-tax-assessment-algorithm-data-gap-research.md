# Research: Property Tax Assessment Algorithm Data Gap

## Angle
Your county assessor uses less data to set your property tax bill than a free Zillow estimate uses to guess your home's value. A 2026 study of 26 million sales proves this costs homeowners — especially owners of lower-valued homes — real money. And the fix uses data the government already collects.

## Journalist
Catherine "Code" Chen — policy, legal, building codes

## Kill Test
Does this help someone building or buying a home? **YES.** Every homeowner pays property taxes. New construction homes get reassessed upon completion. The article explains why assessments are systematically wrong, who gets overcharged, and what data improvements would fix it — plus how to appeal.

## Primary Sources

### 1. FAccT 2026 Paper — "Tradeoffs are Domain Dependent: Improving Accuracy and Fairness in Property Tax Assessments"
- **Authors:** Evelyn Smith (American Bar Foundation), Emma Harvey (Cornell Tech), Christopher Berry (U Chicago), Jacob Goldin (U Chicago), Daniel E. Ho (Stanford)
- **Published:** ACM FAccT '26, June 25-28, 2026, Montreal, Canada
- **DOI:** 10.1145/3805689.3812318
- **Dataset:** 26 million property sales, 2,844 out of 3,007 U.S. counties (95%), 2018-2023
- **Key findings:**
  - **98% of counties** had regressive assessments (Log Coefficient < 0) — lower-valued properties systematically over-assessed, higher-valued under-assessed
  - Assessment accuracy and fairness are **strongly correlated** across counties
  - Adding property features: accuracy gains coincide with fairness gains **>99% of the time** (907 of 908 counties with significant changes)
  - Census data improvements possible in **14.4% of U.S. counties** without assessment caps; **96.2%** of those showed simultaneous fairness and accuracy gains
  - Counties with higher sale volume, population, median sale price have lower assessment error
  - Rural counties (Oklahoma, Arkansas, Missouri) tend to have highest assessment error
  - In Cook County IL, owners in the **highest quintile of sale price appealed at 4x the rate** of those in the lowest quintile (2021-2023)
  - Census features decrease assessed values for predominantly Black neighborhoods and increase accuracy overall
  - Data purchased from Cotality (formerly CoreLogic)

### 2. IAAO Survey Data (via FAccT paper, citing Bidanset and Rakow, 2022)
- Only **16% of assessor's offices** use Automated Valuation Models (AVMs, i.e., regression-based assessments)
- **84% rely on simplistic methods:** valuation tables, hand-picked comparable properties, or other methods
- Barriers to AVM adoption:
  - ~20% cite capacity concerns (budget, insufficient technical expertise)
  - ~25% cite difficulty explaining AVM predictions to taxpayers
  - **Most-cited barrier:** belief that current approaches work just as well as AVMs — "despite considerable empirical evidence to the contrary"
- Only **one-third to one-half** of local assessors have incorporated fine-grained location or neighborhood features (IAAO 2018 survey)

### 3. IAAO Assessment Standards
- **PRD (Price-Related Differential):** regressive if > 1.03 (IAAO Standard on Ratio Studies)
- **COD (Coefficient of Dispersion):** <15 for residential properties in standard
- 17 U.S. states place caps on assessment increases (some as low as 2-3%)
- States with caps: Alabama, Arizona, Arkansas, California, Florida, Georgia, Hawaii, Iowa, Louisiana, Maryland, Michigan, New Mexico, New York, Oklahoma, Oregon, South Carolina, Texas
- California Prop 13 (1978): caps annual increases at 2%, reassesses to market only on sale or new construction

### 4. New Construction Specific Issues
- New construction homes ARE reassessed upon completion (in every state except Connecticut, per the FAccT paper)
- This means new construction gets a "fresh" assessment — but using the same sparse data and simplistic methods as everything else
- New construction is especially vulnerable to regression-to-mean errors because the assessor may not have comparable sales for new builds in the area
- Builder upgrades and custom features are often poorly captured in assessment data
- The "sparse model" in the study used only 3 features; the "rich model" added 1-12 more depending on data availability

### 5. Practical Impact Numbers
- Average U.S. property tax: ~$3,500-4,000/year (varies dramatically by state)
- A 10% over-assessment = ~$350-400/year overpayment
- Bankrate/National Taxpayers Union: 10%+ discrepancy from comparables = "solid proof" for appeal
- Most appeals must be filed within 30-60 days of assessment notice
- Appeal rates are low — most homeowners don't know they can appeal or don't have the resources
- Wealthy homeowners appeal at 4x the rate of lower-income homeowners → the correction mechanism itself is regressive

### 6. The Zillow/AVM Comparison
- Zillow Zestimate uses 100+ data features (per Zillow's documentation)
- Includes recent sales, tax assessments, physical attributes, and neighborhood-level data (schools, walkability, transit, demographics)
- Median error: ~2% for on-market homes
- County assessors using sparse methods: median MAPE much higher (specific to county)
- The irony: a free consumer tool uses more data than the government algorithm that determines tax obligations

### 7. Cook County, IL — The Exception That Proves the Rule
- One of the few assessor's offices to publicly release its assessment model (open source on GitHub)
- Uses machine learning (random forest-based AVM)
- Incorporated Census data into assessments
- Previously had among the most regressive assessments in the country (Berry, 2021)
- Now serves as proof-of-concept that better models work

## Strongest Counterargument
Assessors operate under constraints: limited budgets, small staffs, state-mandated cycles. Many rural counties have assessor's offices with 1-3 employees and budgets under $200,000/year. Building and maintaining AVMs requires technical expertise these offices lack. And even the best model can't overcome structural issues like assessment caps or infrequent reassessment cycles. The 14.4% improvement rate from Census data, while real, means 85.6% of counties wouldn't see significant improvement from this specific intervention.

## Limitations
- The study uses arms-length sales to measure accuracy — this is a selected sample (excludes foreclosures, non-market transfers)
- "Market value" is itself an imperfect benchmark (depends on market conditions, timing)
- The study covers 2018-2023 — post-pandemic housing market volatility may amplify or dampen some findings
- Individual-level race/income data not available; block group-level analysis may mask within-neighborhood variation
- AVM adoption rate data from 2019 IAAO survey — may have increased since then
