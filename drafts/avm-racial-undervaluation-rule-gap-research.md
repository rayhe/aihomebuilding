# Research Notes: AVM Racial Undervaluation Rule Gap

## Topic
Federal AVM quality control rule took effect Oct 1, 2025, requiring nondiscrimination compliance. The first individual-level study of AVM racial bias (Urban Institute, Oct 2025) found Black homeowners face 3.4 percentage points greater AVM error and systematic 5% undervaluation — even within the same neighborhood. Meanwhile, GSE appraisal waivers are expanding again (28% of GSE loans in March 2026), meaning more homes are being valued by algorithm, not by human.

## Journalist
Catherine "Code" Chen — Policy & Regulation beat. Sharp, analytical, legal-minded. Finds the human impact in bureaucratic processes.

## Primary Sources

### 1. Urban Institute — "Do Automated Valuation Models Reinforce Disparities in Home Values?" (October 2025)
- Authors: Linna Zhu, Judah Axelrod, Amalie Zinn
- First empirical evidence of racial disparities in AVM valuation errors at the INDIVIDUAL level (previous studies were neighborhood-level only)
- Used fully Bayesian Improved Surname Geocoding (fBISG) to impute homeowner race from names and addresses
- Data: 43,024 property records in Atlanta and Memphis metro areas (2018)
- **KEY FINDING:** AVM percentage error is 3.4 percentage points greater for Black homeowners vs white homeowners (statistically significant, p < 0.01)
- At median sales price of $420,000, that's an additional $14,960 AVM error for Black homeowners
- **KEY FINDING:** Black-owned homes are systematically undervalued by 5% by AVMs relative to comparable white-owned homes (p < 0.01)
- Hispanic homeowners: 3.5 pp greater error, 3.7% undervaluation
- Asian homeowners: 1.9 pp greater error (but not statistically significant for undervaluation)
- Controls: lot size, building age, sales price, bedrooms, exterior condition rating, neighborhood gentrification, distressed sales, median income, turnover rate, county fixed effects
- Even used CAPE Analytics computer vision for exterior property condition — still found the gap
- "Race-neutral design is not enough to ensure fair outcomes"
- Two sources of bias: (1) biased training data reflecting historical discrimination, (2) algorithmic optimization that prioritizes accuracy for the majority population (white homeowners)
- Limitation: single year (2018), two cities, predominantly Black/white populations

### 2. Interagency Final AVM Rule (Effective October 1, 2025)
- Dodd-Frank mandated rule, adopted by 6 agencies: CFPB, FDIC, FHFA, FRB, NCUA, OCC
- Requires mortgage originators and secondary market issuers to adopt policies/procedures for AVMs designed to:
  (a) Ensure a high level of confidence in estimates
  (b) Protect against data manipulation
  (c) Avoid conflicts of interest
  (d) Require random sample testing and reviews
  (e) Comply with nondiscrimination laws
- Covers GSEs (Fannie Mae, Freddie Mac) per NAR recommendation
- Principles-based — no specific testing protocols or accuracy thresholds mandated
- "The substance is in the defined terms" — broad definitions but thin on implementation specifics

### 3. American Enterprise Institute (AEI) — Appraisal Waiver Data (March 2026)
- 28% of GSE loans used appraisal waivers in March 2026 (down from 49% peak in March 2021, but rising again)
- Fannie Mae: 25% waiver share; Freddie Mac: 32%
- Fannie expanded waiver eligibility to purchase loans with 80-90% CLTV in Q1 2025
- Waivers rising again driven by higher waiver rates within each loan purpose + shift toward refinance activity
- November 2025 counts: ~136,511 Freddie Mac total loans, ~113,242 Fannie Mae total loans

### 4. Freddie Mac / NAR Data on Racial Appraisal Gaps
- 12.5% of properties in Black neighborhoods received appraisals lower than contract price vs 7.4% in white neighborhoods (Freddie Mac)
- In high-minority areas, 23.3% of homes experienced undervaluation vs 13.4% in low-minority areas (FHFA data via NAR)
- Median appraisal value 11% lower in areas with more minorities vs fewer minorities
- 20% of Black mortgage applicants denied vs 11% of white applicants (HMDA data)
- 51% of Black applicants denied for home improvement loans

### 5. Consumer Trust Data
- Cotality survey: consumer trust in AI to help find a home fell to 16% from 30% year-over-year (PYMNTS, June 2026)
- California AB 723 (effective Jan 2026): requires disclosure of digitally altered listing photos
- New York Dept. of State: warned about AI-generated misleading listing photos
- University of Chicago: AI-generated listing content triggers measurable buyer distrust
- NAR: nearly 70% of Realtors have used AI tools, but industry lacks standardized disclosure guidelines

### 6. Broader Context
- $11.3 billion US residential real estate appraisal industry (IBISWorld 2025)
- Certified appraiser workforce shrinking (older workforce, barriers to entry)
- GSE Uniform Appraisal Dataset (UAD) 3.6 mandated for implementation by 2026 — shift from narrative to XML-structured data
- Trump revoked 2023 AI safety executive order on Inauguration Day
- Maryland established Task Force on Property Appraisal and Valuation Equity
- California Civil Rights Dept. secured settlements for appraisal bias against Black/Latino family (Clear Capital case)
- Brookings/Urban Institute earlier research: AVM errors disproportionately affect majority-Black neighborhoods even after controlling for property condition

## Original Contribution
Cross-reference the timeline: The AVM rule took effect Oct 1, 2025. The Urban Institute published the first individual-level bias study the same month. Nine months later, appraisal waivers are climbing again. Nobody in the press has connected these three threads: the rule mandates nondiscrimination, the study shows individual-level bias persists, and the pipeline is expanding. This article does that.

## Kill Test
Does this help someone building or buying a home? YES. If you're buying, selling, or refinancing, the AVM may be what determines your home's value — and if you're Black, it may systematically undervalue your home by 5%. The CFPB rule gives you new rights (nondiscrimination compliance) but no clear mechanism to challenge an AVM estimate. You can't appeal an algorithm the way you can challenge an appraiser. This matters for your equity, your refinancing options, and your ability to build wealth.

## Strongest Counterargument
Veros Real Estate Solutions (2021) studied 50 Chicago ZIP codes and found no evidence of racial bias in their proprietary AVM. The argument: AVMs may outperform human appraisers on bias, since human appraisers bring conscious/unconscious racial bias to in-person inspections. Freddie Mac and Urban Institute researchers have both argued for MORE AVM use, not less, as a potential bias reducer. The question isn't whether to use AVMs — it's whether the current implementation bakes in historical discrimination through training data while appearing race-neutral.
