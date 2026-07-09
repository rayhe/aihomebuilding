# Research Notes: AI Wildfire Risk Scoring vs. Mitigation Verification Gap

## Angle
AI-powered wildfire risk models (CoreLogic, etc.) now score individual structure risk to the square meter, driving insurance underwriting decisions that have swung premiums from $40K to $2M+ for a single development. Meanwhile, the actual cost of fire-hardening a home (IBHS Wildfire Prepared Home standards) adds only $9,000–$15,000 (~2-3%) on a $500K build. The critical gap: the insurance industry has no shared tracking system to verify which homes have been hardened. AI created the pricing problem; it hasn't built the feedback loop to reward the fix.

## Journalist
Catherine "Code" Chen — Policy & Regulation

## Key Data Points

### Insurance Side (AI Risk Scoring)
- **CoreLogic** model: can assess wildfire risk to within a SQUARE METER. Color-coded overlays on satellite maps — green (low) to red (high). Synthesizes rainfall, vegetation, wind, topography, human activity data.
- **Real premium impact:** San Diego condo development went from $40,000/year to $2,000,000+/year premium. Dan Dunmoyer (California Building Industry Association CEO): "The most attainable product that we sell is now unbuildable."
- California's $15 billion homeowners insurance market
- 2022 California regulations mandate insurers offer premium discounts for risk-reducing hardening measures — discounts can be "a few percent to over 40%"
- 45+ million US homes at high wildfire risk (NFPA)

### Construction Cost Side (Fire Hardening)
- **IBHS + Headwaters Economics study** (2025): For a 1,750-sq-ft, $500,000 home:
  - California Chapter 7A (CWUIC Part 7): adds ~$13,000 over traditional
  - IBHS Wildfire Prepared Home (WFPH) Base: adds ~$9,000
  - IBHS WFPH Plus: adds ~$15,000
  - "That really equates to $50 extra per month on a traditional 30-year mortgage" — Steve Hawkes, IBHS wildfire director
- For a 2,000 sq ft home: ~$30,000 for Chapter 7A + ~$5,000 additional for IBHS WFPH = ~$35,000 total
- **Component costs:**
  - Roof: <$1,000 differential between standard and fire-safe alternatives on a ~$25,000 roof
  - Eaves: IBHS Plus standard = $5,200, nearly 3x the non-standard alternative
  - Ember-resistant vents: modest cost
  - 0-5 foot noncombustible zone + deck enclosure: ~$2,780

### Regulatory Framework
- California Building Code Chapter 7A → became CWUIC Part 7 (Title 24) on January 1, 2026
- Key components: noncombustible roofing, screened attic vents, 0-5 foot ember-resistant zone, fire-resistant siding/decks
- IBHS WFPH Plus goes beyond Chapter 7A: noncombustible gutters/downspouts, under-deck mesh enclosure, noncombustible fencing/landscaping within 5 feet

### The Verification Gap
- IBHS has received 4,400 certification applications, granted only 600 (~14% approval rate)
- "Insurers and firefighting officials are working on devising a way to track the adoption of the standards... but no shared tracking system is in place yet."
- **40% of homes destroyed in Palisades/Eaton fires were in neighborhoods where Chapter 7A DOESN'T APPLY** (4,882 of ~11,519 homes)

### KB Home Case Study
- Dixon Trail community near San Diego — first in US to meet IBHS standards at both home and neighborhood level
- 75% of 64 homes sold, 40 closed prior to completion
- Demonstrates buyer willingness to pay for certification
- Homes start ~$1M (near Sacramento: high $700Ks)
- Structure separation is "the biggest indicator of wildfire progress" — at least 10 feet between buildings
- California code doesn't require 10-ft separation or elimination of "connective fuel pathways"

## Original Contribution
1. The $50/month mortgage premium vs. potential $163K/month insurance premium swing calculation (converting the San Diego condo case)
2. Cross-referencing the 40% non-Chapter-7A Palisades/Eaton loss figure against the code's actual coverage map
3. The 4,400/600 certification backlog analysis — what's causing 86% of applicants to NOT receive certification?

## Strongest Counterargument
AI risk scoring at the structure level is genuinely more accurate than zip-code-level pricing. The problem isn't the models — it's that mitigation verification requires physical inspection, which doesn't scale. Until remote sensing can verify compliance (satellite + drone inspection of roofs, vents, defensible space), the feedback loop will stay broken. The models are right; the remediation pipeline is the bottleneck.

## Limitations
- The $40K→$2M premium spike is one example; industry-wide premium distributions by WUI zone would strengthen the claim
- IBHS cost estimates use Southern California labor rates; costs vary regionally
- KB Home's Dixon Trail is luxury ($1M+); cost-effectiveness of fire hardening at affordable price points is less studied
- The 4,400/600 certification numbers don't distinguish between applications denied vs. still in review

## Sources
1. IBHS + Headwaters Economics: "Construction Costs for Wildfire-Resistant Homes" (2025)
2. CoreLogic wildfire risk model documentation (via CleanTechnica/NYT reporting)
3. KB Home Dixon Trail / IBHS neighborhood standard (Fast Company, Jan 2026)
4. NFPA (Michele Steinberg, Director Wildfire Division) — 45M homes at risk
5. CAL FIRE Damage Inspection database (May 2025): 11,519 single-family homes destroyed/major damage in Eaton/Palisades
6. Steve Hawkes, IBHS wildfire director — cost quotes
7. Dan Dunmoyer, California Building Industry Association — insurance premium impact
8. California CWUIC Part 7 (Title 24), effective January 1, 2026
