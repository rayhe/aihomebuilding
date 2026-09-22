# Research: AI lot-fit analysis — does your house plan actually fit the lot?

**Slug:** ai-lot-fit-zoning-check-before-you-buy-2026
**Journalist:** Catherine Chen (policy, legal, building codes)
**Date:** September 21, 2026

## Angle
Before you buy the lot or fall in love with the plan: AI tools that check whether a specific house plan fits a specific parcel — setbacks, lot coverage, FAR, height limits, daylight planes — against the actual zoning code. The failure mode is expensive: discovering at plan check that the design violates the code, months and thousands of dollars after the architect started drawing.

## Kill test
Does this help someone building or buying a home? Yes. Buying a lot that cannot legally hold your plan is a six-figure mistake; a plan-check rejection for zoning noncompliance costs months and a redesign. A lot-fit check before the offer or before schematic design is one of the highest-ROI analyses in custom residential construction.

## Primary sources

### 1. LotMatch.ai (Paramount Construction) — company product page
- URL: https://paramountconstruction.net/lotmatch/
- Claims: "Enter any teardown lot address. We'll show you exactly which home plans fit — and how much they'll cost to build."
- Workflow: (1) enter address, (2) "We analyze zoning & setbacks — we check the buildable footprint based on zoning, setbacks, and lot dimensions," (3) "We show you which house plans from our catalog fit — including estimated construction costs."
- Positioning: "Know what fits before hiring an architect. Save time and avoid costly redesigns."
- Note: lead-gen funnel for a builder (email capture for "custom home plans & pricing"); the fit analysis is the top of their sales funnel. Treat fit claims as marketing until independently verified.

### 2. TestFit — real estate feasibility platform (Dallas-based, VC-backed)
- Dallas Innovates (Sept 2026): TestFit added MCP support so Claude/ChatGPT can drive its feasibility engine — "A developer can tell it to hit a yield target. A civil engineer can tell it to solve the grading" (CEO Clifton Harness). Covers multifamily, single-family homes, industrial, retail, hotel, parking, data centers. Customers: developers, brokers, architects, city planners, contractors, civil engineers.
- URL: https://dallasinnovates.com/at-dallas-testfit-ai-assistants-can-now-guide-real-estate-feasibility-studies/
- ArchiGen AI review (May 2026): pricing ~$3,000–$5,000/seat/year. Key skepticism quote: 'The "AI" framing in the marketing is generous. The underlying solver is closer to mature constraint programming than to learned generative models... When the developer asks why the unit count dropped from 84 to 79, you can point to the setback change and the parking ratio rather than shrugging at a black box.'
- URL: https://archigenai.com/testfit-feasibility-generative-design-review-2026.html
- Use: the honest version of this category is constraint solvers, not magic. Deterministic and explainable is a feature, not a weakness.

### 3. Monterey Park Municipal Code Ch. 21.08, Table 21.08(E) — real zoning numbers (ecode360)
- URL: https://ecode360.com/43882770 (Ord. 2247, 9/4/2024 — current)
- R-1 standards: min lot 6,000 sq ft; FAR 0.40 (lots 6,000–10,000 sq ft); front setback 25 ft; side setback 5 ft (1st floor) / 10 ft (2nd floor); side facing street 10/15 ft; rear setback 25 ft; max 2 stories / 30 ft height.
- Used as the worked example below. Inputs are verifiable in the published table.

### 4. LLM-driven code compliance checking (arXiv:2506.20551, June 2025)
- Researchers built an LLM framework generating Python scripts executed in Revit to check a single-family residential project against IRC regulations; flagged non-compliant room dimensions, material usage, object placements. GPT-4o and Claude Sonnet 3.5 most effective; Llama 3.1-405B and Copilot failed to generate working scripts.
- URL: https://arxiv.org/abs/2506.20551v1
- Use: the research frontier for automated plan-vs-code checking on real house designs; also shows current LLM unreliability (two of four models tested could not produce working checks).

### 5. Prophetic SiteAI 3.0 (PR, May 2026) — cost anchor
- Claims automatic yield estimates with lot-width/depth compliance and setback analysis; "outside engineering studies that typically cost $3,000 to $10,000 and take days or weeks to deliver."
- URL: https://lifestyle.folsomlocalnews.com/story/684951/prophetic-introduces-siteai-30-featuring-industry-first-automatic-yield-estimates-with-lot-width-and-lot-depth-compliance/
- Use: vendor-claimed cost/time anchor for manual feasibility work. Subdivision-focused (production builders), not custom homes — say so.

### 6. IAARC 2019 — BIM-based automated design checking for residential light-frame permits
- Prototype automating municipal bylaw + wall framing code compliance for residential buildings; classified rules by translation complexity. Manual verification "requires significant effort and time and is error-prone."
- URL: https://www.iaarc.org/publications/2019_proceedings_of_the_36th_isarc/bim_based_automated_design_checking_for_building_permit_in_the_light_frame_building_industry.html
- Use: this problem is at least 7 years old in research and still not solved in practice — calibrates the hype.

## Original calculation: the binding constraint is usually not the one you checked
Worked example — 6,000 sq ft lot, 50 ft wide × 120 ft deep, Monterey Park R-1 (Table 21.08(E)):

- Buildable footprint (1st floor): width 50 − 5 − 5 = 40 ft; depth 120 − 25 − 25 = 70 ft → **2,800 sq ft** = 46.7% of the lot. Setbacks alone erase 53% of the parcel.
- Second-floor envelope: side setbacks widen to 10 ft → 30 × 70 = **2,100 sq ft**.
- FAR cap: 0.40 × 6,000 = **2,400 sq ft** total floor area, both floors combined.
- Finding: the setback envelope suggests you could build up to 4,900 sq ft of massing (2,800 + 2,100), but FAR caps the house at 2,400 sq ft. **The binding constraint is FAR, not setbacks.** A buyer who checks only setbacks — "my 2,600 sq ft plan fits inside the 2,800 sq ft envelope" — still fails plan check.
- Illustrative failure: a 1,800 sq ft first floor + 1,800 sq ft second floor = 3,600 sq ft total. Each floor fits its setback envelope (1,800 < 2,800 first floor; 1,800 < 2,100 second floor), yet the design fails plan check because FAR caps total floor area at 2,400 sq ft. Envelope compliance is necessary but not sufficient.
- Assumptions: rectangular lot, no easements, no daylight-plane or hillside overlays, garage/accessory rules excluded, FAR per Ord. 2247 (2024). Real parcels add overlays that only shrink the envelope further.

## Skepticism / counterargument
- The "AI" in most lot-fit products is a constraint solver plus a parcel database, not a learned model (ArchiGen on TestFit). That is fine — but buyers should not pay AI premiums for arithmetic.
- Garbage in, gospel out: these tools are only as good as their zoning database. Municipal codes change; overlays (historic, hillside, fire severity zones) are often missing; a tool that misses the daylight plane gives a confident wrong answer.
- LotMatch.ai is a builder's lead funnel — the "fit" verdict serves Paramount's plan catalog and pricing, not the buyer's independent interest.
- Research prototypes (arXiv 2025, IAARC 2019) show automated checking works on well-structured BIM models and fails on messy ones; half the LLMs tested could not generate working checks at all.
- No tool replaces the pre-application meeting with the city planner, which is usually free.

## Limitations
- Worked example uses one city's R-1 table; numbers vary enormously by jurisdiction (Atherton R-1A: 60-ft front setbacks; unincorporated San Mateo County: no single R-1 setback at all — dimensions come from mapped combining districts).
- No independent testing of LotMatch.ai's fit accuracy was performed; claims are vendor-reported.
- TestFit pricing (~$3–5K/seat/yr) is from a third-party review, not TestFit's published price list.
- Redesign cost figures: Prophetic's $3,000–$10,000 refers to subdivision yield studies, not custom-home architect rework; used as an order-of-magnitude anchor only.

## Actionable takeaways (for the article)
1. Before making an offer on a teardown lot, run the setback/FAR math yourself — it takes 20 minutes with the city's zoning table and kills bad lots fast.
2. If you use a lot-fit tool, verify its zoning data vintage against the city's published code; ask specifically about overlays (daylight plane, hillside, fire).
3. Check FAR before setbacks — on small lots the floor-area cap usually binds first.
4. A free 30-minute pre-application meeting with the planning counter beats any software verdict.
5. For custom builders: a lot-fit screen belongs in the go/no-go before schematic design, not at plan check.
