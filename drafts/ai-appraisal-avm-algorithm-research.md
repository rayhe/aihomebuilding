# Research: AI Home Appraisals & Automated Valuation Models

## Angle
The appraisal profession is dying. AVMs are replacing humans. The new AI models claim astonishing accuracy. But the training data carries decades of human bias. The regulatory framework is half-built. For homebuyers, the question isn't whether algorithms will value their home — that's already happening — but whether anyone is checking the math.

## Journalist: Catherine "Code" Chen (Policy & Regulation)
Best fit: regulatory tension between CFPB rulemaking, GSE appraisal waivers, and appraiser workforce collapse. Sharp legal/policy analysis with human impact.

## Primary Sources

### 1. ATTOM AI-Powered AVM Launch (May 5, 2026)
- Source: ATTOM press release (attomdata.com), PR Newswire
- "Ground-up, AI-first rebuild" replacing traditional comp-based models
- 30+ years of time-adjusted transaction history
- 2.9% median absolute percentage error across 98 million US properties
- 80% of valuations within 10% of actual sale price
- CEO Rob Barber: "This is not an incremental improvement — it's a complete re-architecture"
- Key claim: works in "low-liquidity or data-sparse environments" where traditional AVMs struggle

### 2. CFPB Proposed AVM Nondiscrimination Rule
- Source: consumerfinance.gov (Consumer Financial Protection Bureau)
- Interagency rule with Fed, FDIC, FHFA, NCUA, OCC
- Proposes safeguards to ensure AVMs are "fair and nondiscriminatory"
- Part of PAVE (Property Appraisal and Valuation Equity) task force
- Concern: "flawed versions of these models could digitally redline certain neighborhoods"
- Dodd-Frank Act (2010) already required 4 quality control factors for AVMs in MBS
- Only 2 companies assess AVMs: Mercury Network (CoreLogic) and AVMetrics — independence not assured

### 3. Brookings Study: Racial Bias in Home Appraisals
- Source: Brookings Institution research paper
- Homes in majority-Black neighborhoods undervalued 21-23%
- Cost of devaluation: ~$162 billion across 113 metro areas
- Appraisal bias explains 9-19% of overall devaluation
- Even absent appraisal bias, homes in Black neighborhoods undervalued by ~20%
- FHFA found discriminatory statements in free-form appraisal text fields

### 4. Freddie Mac Appraisal Study (12M appraisals, 2015-2020)
- Source: Freddie Mac research note
- 12.5% of homes in Black neighborhoods appraised below contract price
- 15.4% in Latino areas below contract price
- 7.4% in white areas below contract price
- But: property-fixed-effects studies (Ambrose et al. 2025) find gap drops to <0.4%, not statistically significant

### 5. Fannie Mae Value Acceptance / Appraisal Waivers
- Source: Fannie Mae Selling Guide, FHFA
- Rebranded from "appraisal waiver" to "Value Acceptance" (Sept 2025)
- "Moving away from implying an appraisal is a default requirement"
- Desktop Underwriter uses 26M+ appraisal reports + proprietary analytics
- Saved borrowers $4B+ in appraisal costs
- Freddie Mac expanding ACE to 90% LTV (up from 80%), some Home Possible loans at 3% down
- Property data reports (VA+PD): third party collects interior/exterior data, no appraiser required

### 6. Appraiser Workforce Crisis
- Source: NAR, Appraisal Institute, Bisnow, CSBS
- Median appraiser age: 60 years old
- 80% over age 50 (NAR)
- 25% decline in licensed appraisers in past 10 years
- 62% age 51+, 24% ages 36-50, only 13% under 35 (Appraisal Institute)
- Apprenticeship bottleneck: 2,500 hours required, few supervisors willing to train
- Appraisers 99% white (Brookings)
- Property tax assessors 81.3% white (Brookings)
- Miller Samuel CEO: "Unless things change... it's over. That's coming within the next decade."

### 7. Federal Reserve / OCC 2026 Threshold
- Source: federalreserve.gov (Dec 15, 2025)
- 2026 threshold for higher-priced mortgage loans requiring appraisals: $34,200 (up from $33,500)
- Based on 2.1% CPI-W increase

## Original Contribution
**Cost-of-error calculation for individual homebuyers:**
- Median US home price: ~$420,000 (NAR Q1 2026)
- ATTOM AVM 2.9% median error = $12,180 swing per transaction
- 20% of valuations fall outside ±10% = $42,000+ error for 1 in 5 homes
- On a 30-year mortgage at 7%: a $12,180 overvaluation costs the buyer ~$29,100 in total interest
- On a refinance: a $12,180 undervaluation reduces available equity by the same amount, potentially blocking a cash-out refi or HELOC

**Regulatory paradox:**
- CFPB proposed nondiscrimination rules for AVMs
- But CFPB was effectively defunded/neutered under current administration
- Fannie/Freddie expanding appraisal waivers simultaneously
- Nobody auditing whether AVMs discriminate at scale

## Kill Test
Does this help someone building or buying a home? **YES.** 
- If you're buying: your home may be valued by algorithm, not human. Know what that means for your loan amount, closing timeline, and appeal rights.
- If you're selling: understand that the "comp" your buyer's lender uses may be algorithmically selected, not chosen by a local appraiser who knows the market.
- If you're building: new construction in areas with sparse comparable sales is exactly where AVMs claim to perform better — and where errors are hardest to catch.
- Actionable: how to challenge an AVM valuation, when to insist on a human appraisal, what questions to ask your lender about which valuation method was used.

## Strongest Counterargument
AVMs may actually be LESS biased than human appraisers. The Veros study (50 Chicago ZIP codes) found no racial bias in their AVM. Ambrose et al. 2025 found racial gap drops to <0.4% with property fixed effects. If algorithmic bias in AVMs is primarily a function of training data, and training data is comps-based (actual sales prices rather than appraiser opinions), then the algorithm might bypass human judgment entirely and produce more equitable outcomes. The 21-23% devaluation in Black neighborhoods may reflect real market dynamics (school quality, infrastructure, amenities, historical disinvestment) rather than appraiser malice — and those dynamics would show up in any model, human or AI, that uses local market data.
