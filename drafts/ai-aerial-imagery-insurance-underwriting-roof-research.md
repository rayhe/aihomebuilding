# Research: AI Aerial Imagery in Home Insurance Underwriting

## Angle
An AI has already scored your roof from the sky. It decides your premium, your renewability, and increasingly, whether you're covered at all. For builders, roof material choice is now an insurance variable, not just a construction one. Catherine Chen beat — regulation/policy.

## Kill Test
**Does this help someone building or buying a home?** YES. Builders need to know that AI aerial imagery now directly affects insurability and resale. Buyers need to know their insurance quote was partly determined by a computer vision model that scored their roof from a satellite photo. Both need to understand Class 4 shingle break-even math.

## Primary Sources

### 1. WSJ Analysis — "The Home-Insurance Coin Flip" (May 2026)
- Top 5 home insurers (State Farm, Allstate, Liberty Mutual, USAA, Farmers) didn't pay out on 44%+ of claims resolved last year
- Up from 36% a decade earlier
- Insurers raising deductibles, tightening criteria on roof replacements
- Vicky Weidner, Tulsa: Golf-ball hail, contractor estimated $49,131 replacement. State Farm said damage was $2,000 (below deductible), paid nothing, then dropped her
- Slide Insurance told investors it will "vigorously contest payment" of claims — 50% nonpayment rate (up from 26% in 2022)
- Florida: 44%+ nonpayment rate in 2024. Hurricane Milton: 95,000+ claims declined

### 2. Verisk 2026 U.S. Roof Report (published May 2026)
- 38% of US residential homes show moderate-to-poor roof condition based on aerial imagery analytics
- Roof replacement costs up 33%
- South: 28% of roofs 0-4 years old, only 4% are 31+ years (high turnover from weather events)
- Northeast: only 14% of roofs 0-4 years old; 18% are 31+ years
- Roofing material costs up 1.48% nationally in 2025; labor up 0.79%
- Nevada roofing material costs climbed 10.37% in 2025; NH declined 15.80%
- Ryan D'Amario (Verisk SVP): "roof condition becomes a core underwriting signal"

### 3. CAPE Analytics — AI Property Intelligence
- Used by "a majority of US P&C carriers"
- AI converts aerial imagery into structured data in 2 seconds
- Modules: Roof Condition Rating (RCR), Property Condition (yard debris, pool condition), Roof Value (complexity, size), Liability (pools, trampolines)
- Change detection systems: monitors properties at renewal, flags changes
- Uses NVIDIA GPUs, Triton inference server for real-time processing
- Not just visual aid — "foundational data source in modern property insurance operations"

### 4. Nearmap + Zurich Integration (October 2025)
- Zurich North America embedded Nearmap AI-enhanced data directly into US Middle Market underwriting platform
- Provides: high-resolution aerial imagery, roof condition scores, deferred maintenance signs
- Can determine whether physical inspections are even necessary
- Alex Wells (Head of US Middle Market, Zurich): "reduces friction, supports simplification"

### 5. NAIC AI Systems Evaluation Tool — 12-State Pilot (March-September 2026)
- 12 states: CA, CO, CT, FL, IA, LA, MD, PA, RI, VT, VA, WI
- Questionnaire for regulators to learn about AI applications in underwriting and claims
- 88% of auto insurers currently use or plan to use AI to evaluate claims (NAIC survey)
- Nationwide rollout targeted for NAIC fall meeting, November 2026
- Confidential data collection; treated as de facto early exam-style inquiry

### 6. State Regulatory Guidance (Troutman Pepper analysis, March 2026)
- Regulators acknowledge aerial imagery improves efficiency
- Message: "don't rely on it blindly"
- Aerial imagery should be "one input among several, not the sole basis for cancellations, nonrenewals"
- Concerns: images obscured by trees/shadows, misaligned, outdated, mis-identified
- Some states considering specific image recency requirements
- Distinction between structural risk vs cosmetic issues

### 7. Consumer Impact
- State Farm: Linda Bennett, California, 30+ year homeowner, received $28,290 ultimatum (replace roof or lose cover) — no inspector ever visited, aerial imagery only
- NPR: homeowners losing coverage from aerial imagery; some images outdated or misinterpreted
- Texas: 12+ homeowners complained to Texas DOI since 2023 about aerial photo use; in one case insurer looked at wrong image
- Alaina Callahan, Houston: insurer demanded new roof despite roof being only 5 years old
- Kiplinger: "drones, satellite images and artificial intelligence now being used to analyze roofs and other exterior features"
- Doug Heller (Consumer Federation of America): "Using images gathered without consumer awareness, or let alone consent, is really problematic"

### 8. Class 4 Impact-Resistant Shingles — Builder Implications
- UL 2218 Class 4: highest impact rating; withstands 2-inch steel ball from 20 feet
- This Old House 2026 survey: 47% of homeowners installed asphalt shingles (most common)
- Class 4 insurance discounts: up to 33% (State Farm), typical 10-25% across carriers
- Class 4 cost premium: 10-20% more than standard architectural shingles
- Lifespan: 30-35+ years vs 20-30 for Class 3; withstands 130 mph winds (vs 110 mph standard)
- Documentation critical: some homeowners fail to submit proof and miss discount entirely

### 9. EagleView Assess — AI Drone Inspection
- AI-powered damage detection: drone found 240 impact marks vs 50 by human inspector (Cimaroli case)
- Insurer originally denied claim; forced to pay for entire roof after AI drone evidence
- Can work FOR homeowners, not just against them

## Original Contribution
**Break-even calculation: Class 4 shingles for a new build**
- Average new roof cost for 2,000 sq ft home: ~$12,000-$18,000 (standard asphalt)
- Class 4 premium: 10-20% more = $1,200-$3,600 additional
- Average US home insurance premium (2026): ~$2,285/year (Bankrate, varies wildly by state)
- 15% insurance discount = ~$343/year saved
- Break-even on Class 4 upcharge: 3.5-10.5 years
- Plus: longer lifespan (5-10 additional years), better wind resistance, better resale
- In hail-prone states (TX, CO, OK, KS): discount often 25-33%, break-even under 3 years

## Strongest Counterargument
Aerial imagery is more consistent than human inspectors and catches legitimate hazards. Ann Frohman (former Nebraska insurance commissioner): "Policies were being used as a home-maintenance program, paying to replace roofs for even minor damage." The AI is arguably correcting years of overpayment, not creating new unfairness.

## Limitations
- Insurance discount percentages vary wildly by carrier, state, and policy type — no universal figure
- We couldn't verify CAPE Analytics' claim that "a majority" of P&C carriers use their product (they don't publish client lists)
- The 44% nonpayment figure from WSJ includes claims withdrawn by consumers and claims below deductible, not just insurer denials
- NAIC pilot is still running — no results available yet; outcomes may differ from expectations
- Break-even calculation assumes constant premium savings over time; insurance markets reprice annually
