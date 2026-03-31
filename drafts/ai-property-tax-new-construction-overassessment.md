# Research: AI Property Tax Assessment Arms Race — New Construction Homes Get Overassessed

## Journalist: Catherine "Code" Chen (Policy & Regulation)

## Angle
New construction homes are systematically overassessed for property taxes because assessors default to the "cost approach" (what it cost to build) rather than comparable sales. The Philadelphia Fed found owners of inexpensive homes pay ~50% higher effective tax rates. AI is now on both sides of this fight: counties use C3 AI to mass-appraise, while startups like Ownwell use AI to auto-generate appeal packets. For someone who just built a $500K home, a 10-15% overassessment = $750-2,250/year in excess taxes. This is a policy/money story with real numbers.

## Kill Test
Does this help someone building or buying a home? YES — anyone who just built or is about to build a home will face their first property tax assessment. Understanding how AI tools can both help and hurt them is immediately actionable.

## Primary Sources

### 1. Philadelphia Fed Working Paper (WP 22-02, January 2022)
- Author: Natee Amornsiripanitch
- Finding: "Among single-family homes that enjoy the same set of property tax-funded amenities and pay the same statutory property tax rate, owners of inexpensive houses pay almost 50% higher effective tax rates than owners of expensive houses."
- 60% of remaining regressivity = flawed valuation methods ignoring variation in house/neighborhood characteristics
- 40% = infrequent reappraisal
- A simple valuation method could increase poor homeowners' net worth by >10%
- URL: https://www.philadelphiafed.org/consumer-finance/mortgage-markets/why-are-residential-property-tax-rates-regressive

### 2. Riverside County / C3 AI Contract (2023)
- 5-year contract for C3 AI Residential Property Appraisal + C3 AI Platform
- First production-ready, out-of-the-box, AI-powered mass appraisal system in California
- Before AI: 30 separate appraisal models, manual data analysis
- After AI: 4 unified models, 40% faster process
- Runs on Google Cloud
- Source: C3 AI press release, AEI analysis

### 3. Ownwell ($50M Series B, Feb 2026)
- AI-powered property tax appeal service
- 86% success rate on appeals
- Average annual savings: $774 per customer
- National Appeals Packet: AI generates personalized, ready-to-file appeal with instructions, deadlines, required docs, valuation data
- Operates in TX, IL, FL, GA, CA, WA, NY
- Fee: 25% of savings (vs. traditional firms 40%)
- Source: Inman, HousingWire, VentureBurn

### 4. National Taxpayers Union Foundation
- Estimates 30-60% of properties nationwide are overassessed
- Appeal success rates: 40-60% for those who present evidence
- Professional services report 85%+ success rates

### 5. Atlanta / University of Chicago Center for Municipal Finance
- 69% of lowest-value properties in Atlanta are over-assessed
- 32% of highest-value properties are over-assessed
- Source: AEI analysis citing Center for Municipal Finance research

### 6. Cook County (Chicago) PTAXSIM Tool (2022)
- Open-source Property Tax Simulator
- Approximates effects of assessments, levies, TIFs on property tax bills
- Available for researchers and policymakers
- Source: Cook County Assessor's Office, GitHub

### 7. Construction Cost Data (2026)
- National average: $150-$300/sq ft for standard residential construction
- Coastal/high-cost: frequently exceeds $400/sq ft
- Midwest/South: $100-$150/sq ft
- Source: Angi 2026

## Original Contribution / Novel Calculation
Calculate the "new construction overassessment penalty":
- A 2,400 sq ft home built at $200/sq ft = $480K construction cost
- Assessor uses cost approach: assessed at $480K + land ($150K) = $630K
- Market value (comparable sales): $550K (builder premium ≠ market premium)
- Overassessment: $80K (14.5%)
- At a typical 1.5% effective tax rate: $80K × 0.015 = $1,200/year excess tax
- Over a 30-year mortgage: $36,000 in unnecessary property tax payments (not inflation-adjusted)
- With Ownwell's 86% success rate: expected savings = 0.86 × $774 = $666/year
- Ownwell fee (25% of savings): $166/year
- Net benefit: ~$500/year from a 5-minute AI appeal filing

## Strongest Counterargument
AI assessment tools could actually INCREASE assessed values for new construction if they detect features (smart home systems, solar panels, high-end finishes) that traditional assessors missed. Aerial imagery + ML could catch unpermitted additions. The AI arms race could make it HARDER for homeowners to find assessment errors, not easier.

## Limitations
- Philadelphia Fed data is from 2022; newer assessments may have improved
- Ownwell's 86% success rate may reflect selection bias (easy cases self-select in)
- Cost approach vs. market approach gap varies enormously by jurisdiction
- No controlled study comparing AI-assessed new construction vs. traditionally-assessed
- Riverside County results may not generalize to smaller jurisdictions with less data
