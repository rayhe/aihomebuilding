# Research: AI Appraisals, AVM Bias, and the Federal Rule Gap

## Topic
Six federal agencies issued a final rule (June 2024, Dodd-Frank §1473(q)) requiring quality control for automated valuation models (AVMs) used in mortgage lending. The rule mandates nondiscrimination compliance — but doesn't specify how to test for it. Meanwhile, AVMs have a documented racial bias problem, and Fannie Mae is expanding algorithmic valuations to 46% of all GSE-backed loans.

## Kill Test
Does this help someone building or buying a home? **YES.** If you're buying, selling, or refinancing, an AVM may now determine your home's value instead of a human appraiser. If that algorithm undervalues your home by $47,000 because it trained on historically biased sales data, you need to know your rights and what the new rule actually protects (and doesn't).

## Key Sources

### 1. FHFA/CFPB Final AVM Rule (June 2024)
- Source: fhfa.gov, consumerfinance.gov (Joint release from CFPB, FHFA, FDIC, Fed, NCUA, OCC)
- Requires institutions using AVMs to adopt policies ensuring:
  - High confidence in estimates
  - Conflict-of-interest avoidance
  - Random sample testing and reviews
  - Compliance with nondiscrimination laws
- Takes effect ~1 year after all agencies finalize
- "Substantially similar" to June 2023 proposal
- Does NOT specify testing methodology for bias
- Does NOT require public disclosure of AVM error rates by demographic group

### 2. Brookings — "How Racial Bias in Appraisals Affects Devaluation" (Rothwell & Perry)
- Source: brookings.edu
- Homes in majority-Black neighborhoods undervalued 21-23% vs. non-Black neighborhoods
- 10% of appraisals in majority-Black neighborhoods valued on wrong side of contract price
- 1.9x more likely to be under-appraised vs. majority-white neighborhoods
- $162 billion cost of devaluation across 113 metro areas
- Appraisal bias explains only 9-19% of overall devaluation — rest is lending, underwriting, consumer bias
- After adjusting for home/neighborhood characteristics, 4.4% persistent bias

### 3. HUD Cityscape Study — "Racial Disparities in Automated Valuation Models"
- Source: huduser.gov (Cityscape Vol. 26, No. 1)
- Even with improved data and machine learning, AVMs produce larger errors in majority-Black neighborhoods
- Property condition data + ML doesn't eliminate disparity
- Key finding: the training data itself carries bias

### 4. AVM Accuracy Data
- Zillow Zestimate: 1.83% median error on-market, 7.01% off-market (zillow.com)
- Academic study (Journal of Real Estate Finance & Economics, Springer): XGBoost achieves 5.17% MdAPE
- Traditional human appraisal: varies but within 3-5% typically
- Key gap: off-market accuracy much worse, and off-market is where bias hides (less comparable sales data in minority neighborhoods)

### 5. Fannie Mae Value Acceptance (formerly "appraisal waivers")
- Source: fanniemae.com, workingre.com, appraisaltoday.com
- Appraisal waivers now ~46% of GSE mortgage valuations (up from 5% in 2017!)
- Q1 2025: LTV eligibility increased from 80% to 90%
- Term renamed: "appraisal waiver" → "value acceptance" (Sept 2025)
- Saved borrowers $2.5B+ since 2020
- 3-10% of loans initially targeted for VA+Property Data program

### 6. Appraiser Shortage
- Source: grfcpa.com, Minneapolis Fed, nerej.com
- Appraiser ranks declined 30% since 2007
- Average age rising, fewer new entrants
- Strict licensing requirements deter younger professionals
- This creates pressure to lean on AVMs whether or not bias is resolved

### 7. Appraisal Costs
- Traditional: $300-$500 per appraisal
- Value acceptance saves $100-$150/loan (Scotsman Guide)

## Original Contribution
Cross-reference: the federal rule mandates "comply with nondiscrimination laws" for AVMs, but HUD's own research shows AVMs produce larger errors in majority-Black neighborhoods even with improved ML. The rule doesn't require demographic error rate reporting. Fannie Mae is expanding AVM-based valuations to 90% LTV while this gap exists. Nobody is connecting these three facts in a single analysis with specific numbers.

## Strongest Counterargument
Human appraisers are worse — the Brookings data shows human appraisals already undervalue Black neighborhoods by 21-23%. AVMs at least apply consistent methodology. The argument for AVMs is that they remove the individual racist appraiser from the equation, even if the data they train on carries historical bias. "Imperfect algorithm beats biased human" is a real argument.

## Limitations
- We don't have AVM error rates broken out by race/neighborhood demographics from major vendors (Zillow, CoreLogic, Black Knight) — this data is proprietary
- The HUD study used specific ML methods; commercial AVMs may differ
- Fannie Mae's value acceptance success ($2.5B savings) is aggregate; we can't verify demographic distribution of savings
- The federal rule hasn't taken full effect yet; we're analyzing the text, not outcomes

## Journalist
**Catherine "Code" Chen** — Policy & Regulation beat. Sharp legal analysis, translates building codes into readable prose, dry humor. Perfect for dissecting a federal rule that says "don't discriminate" without saying how.

## Headline Direction
- "Six Federal Agencies Wrote a Rule for AI Home Appraisals. It Says 'Don't Discriminate' but Doesn't Say How to Check."
- Or: "The Algorithm That Decides Your Home's Value Trained on 40 Years of Biased Sales. The New Federal Rule Says That's Fine."
