# Research Notes: Property Tax Assessment AI Regressivity Gap

## Core Thesis
Property tax assessments across the U.S. are systematically regressive — homeowners with lower-valued properties pay a disproportionately higher effective tax rate than wealthy homeowners. Machine learning models could fix this. Only 16% of assessor offices use them. The homeowner eating the difference is the one who can least afford to appeal.

## Primary Sources

### 1. Smith et al. (2026) — FAccT '26 Paper
**Title:** "Tradeoffs are Domain Dependent: Improving Accuracy and Fairness in Property Tax Assessments"
**Authors:** Evelyn Smith (American Bar Foundation), Emma Harvey (Cornell Tech), Christopher Berry (UChicago), Jacob Goldin (UChicago), Daniel E. Ho (Stanford)
**Published:** 2026 ACM Conference on Fairness, Accountability, and Transparency (FAccT '26), June 25–28, 2026, Montreal, QC, Canada
**URL:** https://arxiv.org/abs/2605.15020v1
**DOI:** 10.1145/3805689.3812318

Key findings:
- Dataset: 26 million property sales spanning 95% of U.S. counties, 2018–2023
- 98% of counties had regressive assessments (LC < 0) — lower-valued homes overtaxed
- Only 16% of assessor offices use Automated Valuation Models (IAAO 2019 survey)
- In hypothetical models, adding features improved BOTH accuracy and fairness 99.9% of the time (907 of 908 counties)
- Adding Census block-group data: 229 of 238 counties (96.2%) showed simultaneous fairness + accuracy gains
- Census features lowered assessed values for predominantly Black neighborhoods and low-income areas
- Most-cited barrier to AVM adoption: belief current approaches work just as well (despite evidence to the contrary)
- 1 in 5 assessors cite capacity/budget constraints; 1 in 4 cite difficulty explaining AVM to taxpayers
- Cook County, IL: highest-quintile homeowners appealed at 4x the rate of lowest-quintile; FBI investigation/jail for assessors who accepted bribes
- 17 states cap annual assessment increases; 27 states require in-person inspections; 39 impose limits on reassessment timing
- Only one assessor office (Cook County) is known to use Census data in models — code is public on GitHub

### 2. GAO-25-107201 (September 2025)
**Title:** "Property Technology for Homebuying: Products Present Benefits and Risks Amid Evolving Federal Oversight"
**URL:** https://www.gao.gov/assets/gao-25-107201.pdf
Key findings:
- One AVM company estimates values for ~85% of U.S. properties, lacks data for 15%
- Properties in urban and rural areas harder to appraise (older, less homogenous, limited comparables)
- AVMs may perpetuate valuation disparities by relying on historical data with embedded discrimination
- "Black box" nature limits consumer transparency
- FHFA has conducted examinations of AVMs; other agencies have not

### 3. Berry (2021)
- Most significant source of regressivity: shortcomings in data and models used by assessors
- Most assessors do "simplistic assessments based on data that can be collected at scale"
- Real market value is set by arms-length buyers who do in-person tours, inspections, appraisals

### 4. Amornsiripanitch (2022)
- Census block-group characteristics improve assessment accuracy across all U.S. counties
- Substantial within-county heterogeneity in assessment quality correlated with tract-level income, education, home values

### 5. Property Tax Context
- Property taxes fund local schools, roads, fire departments
- Intended to be proportional but regressive in practice
- Regressivity disproportionately penalizes non-white Americans (wealth inequality, historical segregation)
- 17 states place caps on assessment increases — meant to protect homeowners from hikes but shift burden to slower-appreciation areas
- Edwards, Mississippi (1966): assessor increased Black-owned home assessments 10x vs. white-owned as retaliation for boycotts (Kahrl, 2024)
- Standard fairness metrics: PRD > 1.03 = regressive (IAAO standard), Log Coefficient, Suits Index

## The Gap
- Technology exists to make assessments fairer AND more accurate simultaneously
- 84% of assessors don't use it
- The barrier is institutional inertia, not technical limitation
- Homeowners who are overtaxed are least likely to appeal (appeals disproportionately filed by high-value property owners)
- The result: a wealth transfer from low-value to high-value homeowners, enforced by outdated math

## Journalist: Catherine Chen (Policy & Regulation)
- Sharp, analytical, legal-minded
- Finds the human impact in bureaucratic processes
- Translates policy into readable prose

## Category: Policy (⚖️)
