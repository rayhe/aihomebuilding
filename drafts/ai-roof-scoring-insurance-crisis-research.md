# Research: AI Roof Scoring and the Insurance Crisis

## Topic
AI aerial imagery is now scoring the roof condition of every insurable home in America from satellites and drones. That score — invisible to the homeowner — determines whether they can get insurance, how much they pay, and how much they get back if something goes wrong. This converges with a March 2026 federal policy shift that allows depreciated-value-only roof coverage, creating a triple financial penalty for homeowners with poor AI roof scores.

## Journalist
Catherine "Code" Chen — Policy & Regulation beat

## Primary Sources

### 1. Verisk 2026 US Roof Report (published May/June 2026)
- 38% of US residential homes show moderate to poor roof condition (aerial imagery analytics, Jan 2026 data)
- Moderate-to-poor roofs experience approximately 60% higher loss costs than good/excellent
- 29% of US homes with asphalt shingles have <4 years remaining useful roof life
- Roofs with <5 years remaining life experience 50% more damage during severe weather vs 8+ years remaining
- Premium differential between roofs <5 years old and 11-15 years: expanded from $49 (2022) to $155 (2025) — 216% increase in 3 years
- Average deductibles rose 22% in 2025, following 15% increase in 2024
- Regional roof age distribution:
  - South: 28% are 0-4 years, 4% are 31+ years (high turnover from storms)
  - Midwest: 21% are 0-4 years, 17% are 31+ years
  - Northeast: 14% are 0-4 years, 18% are 31+ years
  - West: 20% are 0-4 years, 11% are 31+ years
- Hail-prone states: average 15-year roof lifespan
- Roofing material costs increased 1.48% in 2025 vs 0.79% labor cost increase
- Nevada: roofing material costs climbed 10.37% in 2025; New Hampshire: declined 15.80%
- Source: Ryan D'Amario, SVP of property product management at Verisk

### 2. Cape Analytics / Moody's Acquisition
- Cape Analytics: founded 2014, uses AI computer vision + geospatial imagery for instant property intelligence
- Moody's announced acquisition to combine with catastrophe risk modeling
- Key findings (Cape-led analysis):
  - Severe/poor condition roofs: 2.5× wind/hail claims frequency vs excellent roofs
  - Homes with large tree overhang: 90% higher wind-related losses
- DOI-approved rate filings in 15+ states: AZ, CO, IA, KY, IL, IN, MI, MS, NC, OH, PA, SD, TN, VA, WI
- Attributes tracked: roof condition, tree overhang, roof geometry, roof covering material, structure area
- Partners/customers: The Hartford, Hippo, CSAA Insurance Group
- CEO: Ryan Kottenstette

### 3. FHFA Actual Cash Value (ACV) Policy Shift — March 2026
- Federal Housing Finance Agency announced Fannie Mae/Freddie Mac now allow ACV-only roof coverage
- ACV = insurer pays depreciated value, not replacement cost
- Example: $10,000 roof replacement, insurer determines roof worth $2,000 → homeowner pays $8,000 out of pocket
- ACV premiums 10-20% cheaper than RCV premiums
- Trump administration framed as "affordability win"
- Housing experts call it "a Band-Aid on a bullet wound" (Frangie)
- Amy Bach, United Policyholders: agents may not highlight the ACV coverage limitation
- Source: MarketWatch, June 2026

### 4. State Regulatory Response
- Connecticut Insurance Department: aerial images showing discoloration, streaking, or other cosmetic issues alone should NOT support adverse underwriting action. Must rely on clear indicators of roof condition.
- New York proposed legislation:
  - Notify policyholders if aerial images will be used
  - Provide date-stamped images for adverse decisions
  - Prohibit reliance on images >180 days old
  - 60-day remediation period before cancellation/non-renewal
  - Appeals process including option of in-person inspection
- Massachusetts: non-renewal allowed but requires 45-day advance written notice with specific reasons
- NAIC AI Model Bulletin: overarching governance framework. Key principles:
  - Don't run AI on bad data
  - Can't outsource accountability to vendors
  - Computer vision models that systematically downgrade older roofs or misread shadows as damage create systematic disparities
- Troutman Pepper analysis: aerial imagery bulletins are issue-specific applications of NAIC AI principles
- 10 states require insurers to provide discounts for roof upgrades to wind-resistant standards

### 5. Non-Renewal Rate Data (Insurify/Senate Budget Committee)
- South Carolina: 136% increase in non-renewals 2018-2023
- Wyoming: 66.67% increase
- West Virginia: 65.06% increase
- Washington: 64.56% increase
- Utah: 46.87% increase
- Virginia: 35.81% increase
- Source: December 2024 U.S. Senate Budget Committee report

### 6. GAO Report — GAO-26-107867 (2026)
- Homeowners insurance premiums generally tracked inflation but rose more in disaster-prone areas
- 50 million homeowner insurance policies tracked
- Wind and wildfire risks vary regionally
- State insurance plans of last resort growing in market share

### 7. Insurance Market Context
- Homeowners insurance premiums rose 8.7% faster than inflation, 2018-2022 (Treasury Federal Insurance Office)
- Home insurance rates projected to rise for 5th consecutive year in 2026 (Insurify)
- Average premiums: Texas $6,005, South Carolina $4,017, South Dakota $3,596 (2024)
- Builders' risk market: $8.75 billion (Munich Re)

### 8. Brickeye — Construction-Phase Monitoring
- Toronto-based, $10M Series B (January 2026)
- Sensor-based monitoring and automated shutoff for construction sites
- Insurers now require documentation of active risk controls during construction for builders' risk underwriting
- Tim Angus, CEO: "Insurers are no longer satisfied with general statements about risk management. They want to understand what controls are actually in place."

## Original Contribution
Calculate the "AI Roof Tax": the compounding cost to a homeowner whose roof receives a poor AI score.
- Layer 1: Premium penalty — $155/year more (Verisk, and likely growing)
- Layer 2: Higher deductibles — 22% increase in 2025 alone
- Layer 3: ACV coverage — if roof is depreciated, payout gap could be $5,000-$8,000 on a $10K replacement
- Layer 4: Non-renewal risk — up to 136% more likely in worst states
- Total exposure over a 10-year roof lifecycle: substantial five-figure penalty

Cross-reference: Which states have regulatory protection (CT, NY proposed, MA) vs which are unprotected. Map the gap.

## Kill Test
Does this help someone building or buying a home? YES.
- Builders: roofing material and installation quality now directly affects AI insurability scores. Impact-resistant shingles, hip roofs, and proper drip edge installation reduce AI risk scores.
- Buyers: need to know the home's AI roof score before closing. A poor roof score means higher insurance costs and potential non-renewal.
- Homeowners: understand that satellites are scoring your roof right now, and that score has financial consequences.

## Strongest Counterargument
AI scoring is measurably more accurate than the old system (no inspection, self-reported roof age, outdated property records). Verisk data confirms poor roofs DO cost more — 60% higher loss costs, 2.5× claims frequency. The problem isn't the scoring — it's the transparency gap: homeowners can't see their score, can't contest it in most states, and the ACV shift means even if they've been paying premiums for years, their payout got quietly gutted.

## Limitations
- No public data on how many non-renewals are specifically triggered by AI aerial imagery vs other factors
- Cape Analytics/Moody's scoring methodology is proprietary — no independent audit
- Regional premium differentials don't isolate the roof condition variable from other risk factors (CAT exposure, claims history)
- New York bill is proposed, not enacted
- ACV impact calculation uses simplified depreciation — real insurer calculations are opaque
