# Research: AI Floor-Plan Circulation Scoring vs. the Hallway Tax

**Article #829 | Journalist: Elena Vasquez | Date: 2026-09-11**

## Kill test
PASS. A buyer comparing two floor plans, or a builder choosing which plan to put on a lot, gets a concrete metric: the circulation ratio (hallways + stairs + foyers + entries divided by finished square footage) and its dollar cost at current construction prices. This article tells them how to compute it in ten minutes with a tape measure, what bands to compare against, and which AI tools are starting to score it for them.

## Core thesis
Machine learning now reads floor plans fluently. The RPLAN dataset put 80,788 human-designed residential plans into training sets in 2019; ResPlan added 17,000 vector plans with metric scale and room-connectivity graphs in 2025; and the ArchiMetricsNet project (ACL 2025) is the first to formalize "circulation" as an AI evaluation dimension across 120,000 plans. Commercially, Higharc's spatial AI parses any floor plan into structured data and TestFit's generative design optimizes site efficiency. But none of this reaches the homebuyer: no consumer product scores a single-family plan's hallway waste. Meanwhile the math is brutal. At NAHB's 2024 national average of $162 per square foot of construction cost, every 100 square feet of hallway costs $16,200 to build. A typical 2,647-square-foot new home carrying 10% circulation holds roughly 265 square feet of hallway, a $42,900 corridor tax, and nobody shows the buyer that number.

## Primary sources

1. **NAHB, "Cost of Constructing a Home, 2024" (Jan 2025):** average construction cost $428,215 for a typical single-family home, about $162 per square foot, average home 2,647 sq ft. Interior finishes 24.1%, major systems rough-ins 19.2%, framing 16.6%. https://www.nahb.org/news-and-economics/housing-economics-plus/special-studies/special-studies-pages/cost-of-constructing-a-home-in-2024
2. **NAHB, median square-foot prices by region (Oct 2025, 2024 starts):** custom/contractor-built $166/sq ft national median; spec starts $153/sq ft; New England custom over $190/sq ft; East South Central custom at or below $129/sq ft. https://www.nahb.org/blog/2025/10/square-foot-prices
3. **Wu et al., RPLAN dataset (2019), via Hu et al., "Graph2Plan" (arXiv 2004.13204):** "large-scale floorplan dataset RPLAN consisting of more than 80,000 human-designed samples," used to train deep generative floor-plan models. https://arxiv.org/pdf/2004.13204
4. **ResPlan (arXiv 2508.14006, 2025):** ~17,000 residential floor plans, vector + graph format, metric-scale coordinates, 17 semantic categories, room-connectivity graph with four typed edges (via_door, adjacency, direct, via_window), CC BY 4.0. https://arxiv.org/pdf/2508.14006
5. **FloorPlan-LLaMa / ArchiMetricsNet (ACL 2025):** introduces ArchiMetricsNet, "the first floor plan dataset incorporating three professional evaluation dimensions: functionality, circulation, and overall assessment," 120,000 plans, with a FloorPlan-MPS reward model aligning generation with architects' preferences. https://aclanthology.org/2025.acl-long.331.pdf
6. **Higharc $90M Series C (SiliconANGLE, Jul 1 2026):** "spatial AI" trained exclusively on thousands of residential architectural drawings; models "can identify everything one might find in a home, such as a structural wall, a window bay, a load-bearing column and even the kitchen sink"; multimodel validation architecture to prevent hallucinations. https://siliconangle.com/2026/07/01/homebuilding-ai-startup-higharc-bags-90m-series-c-funding/
7. **Higharc via HousingWire (2026):** Signature Homes (Alabama/Nashville) imported a floor plan, auto-converted to a structured model, went from concept refinement to permit-ready construction documents in approximately two weeks; traditionally six months or longer. https://www.housingwire.com/articles/higharc-floor-plans-into-intelligent-data/
8. **Higharc AI launch (Inman, Feb 14 2025):** ML "analyzes and transforms any drawing, sketch, or floor plan image into a full 3D model online"; identifies room types from features (island = kitchen); connects 3D plan to cost estimate. https://www.inman.com/2025/02/14/higharcs-ai-seeks-to-pick-up-the-pace-of-home-construction/
9. **TestFit Generative Design launch (Engineering.com, Jun 27 2024):** computational AI tests "every possible configuration" for a site; users filter by FAR, parking ratio, yield on cost, net rentable square feet, site efficiency. https://www.engineering.com/testfit-announces-generative-design-for-building-optimization/
10. **TestFit via Construction Management (Jul 2024):** "first of its kind for architecture, especially for commodity buildings"; works from multi-family to industrial. https://constructionmanagement.co.uk/ai-tool-speeds-up-generative-design/
11. **QLCM method, MDPI Buildings 2025:** "QLCM Method for Determining the Quality Level of Circular Movement in Floor Plans of Houses and Apartments" — formal coefficients for path from room to room, door to door, and overall quality of circular movement. https://www.mdpi.com/2075-5309/15/3/444
12. **illustrarch on circulation in architecture:** "In most buildings, circulation space accounts for 25-40% of the total floor area" (commercial-weighted figure; corridors must meet code minimums, typically 1.2m residential). https://illustrarch.com/articles/architectural-diagrams/27045-what-is-architectural-circulation-diagram.html
13. **Al-Sadkhan / JEASD housing efficiency study:** walls, stairs, and internal corridors measured at 34% of ground-floor built area in the studied houses, 17% for stairs and internal corridors alone; proposed as an efficiency criterion. https://jeasd.uomustansiriyah.edu.iq/index.php/jeasd/article/download/2020/1786

## Original contribution: the hallway-tax calculation
Nobody in the trade or consumer press has multiplied NAHB's per-square-foot construction cost by a circulation share to price the hallway. The math, with explicit assumptions:

- NAHB 2024 national average: $162/sq ft construction cost, 2,647 sq ft average new home.
- Circulation share: there is NO published US single-family benchmark (stated honestly in the article). Design literature gives: 25-40% for buildings generally (commercial-weighted, includes lobbies/elevators, too high for houses); 17% stairs+corridors in the Iraqi housing study; industry rule of thumb that efficient residential plans run ~8-10% and sprawling plans 12-18%.
- Working range for the article: 8% (tight) to 15% (hallway-heavy), midpoint 10%.
  - 8%: 212 sq ft x $162 = **$34,300**
  - 10%: 265 sq ft x $162 = **$42,900**
  - 15%: 397 sq ft x $162 = **$64,300**
- The bands (<8% excellent, 8-12% typical, >15% hallway-heavy) are the article's own heuristic synthesized from the literature, labeled as such, not an industry standard.

## Technology state
- Academic: models trained on 80k-120k plans can generate and now evaluate floor plans, with circulation as an explicit scoring dimension (ArchiMetricsNet, 2025). Graph2Plan/House-GAN retrieve-and-generate from RPLAN.
- Commercial: Higharc parses any plan image into a structured room-level model (could compute a circulation ratio trivially; does not market one). TestFit optimizes efficiency for multifamily/sites, not single-family buyer plans. Maket AI generates plans with accessibility constraints.
- Consumer: NOTHING. No buyer-facing tool scores a single-family plan's circulation efficiency. The article's honest position: the capability exists in labs and B2B products; the score a buyer needs does not exist yet as a product. Demand it from the builder, who has the CAD file.

## Actionable takeaways (for the article)
1. Compute your plan's circulation ratio: measure hallways + stairs + foyers + entries, divide by finished square footage. Under 8% is tight, 8-12% is normal, over 15% means you are buying hallway.
2. Multiply the hallway square footage by your local construction cost per square foot (national average $162; custom builds run $129-$190+ by region) to get your hallway tax in dollars.
3. Ask the builder for the ratio on competing plans. They have the CAD files; it takes five minutes. If they can't produce it, that tells you something.
4. Red flags: long double-loaded corridors in "luxury" plans, formal living/dining rooms you only walk through, two-story foyers that eat 200 sq ft of air.
5. Do not optimize to zero. Hallways buy privacy, acoustic separation, and wall space for art. The zero-hallway extreme is the open-plan great room, which has its own well-documented costs.

## Limitations
- No published US single-family circulation benchmark exists; the 8-15% range and the three bands are the article's synthesis, not measured data.
- NAHB $162/sq ft is a national average; regional custom-build costs range from ~$129 to $190+/sq ft, so the dollar tax moves with market.
- RPLAN's 80,788 plans are Asian residential (mostly apartments), not US single-family; transferability of learned layout priors is unproven for suburban US plans.
- No consumer circulation-scoring product was found; the "ask your builder" advice assumes the builder will cooperate.
- The calculation prices hallway space at average cost per square foot, but hallways are cheaper to finish than kitchens/baths; true marginal cost is lower. State this.

## Counterargument
The strongest case against: hallways do work. They separate noisy living areas from bedrooms, give doors somewhere to swing without hitting furniture, and provide the only wall space in many plans for art and bookshelves. The "efficient" plan with no hallways is the open-plan great room, and the market's romance with that layout is already cooling as buyers rediscover that cooking smells, TV noise, and homework all happen in the same air. Optimizing circulation to zero is exactly the kind of flattening that makes every AI-generated plan feel the same. A hallway is not waste by default; an unexamined one is.

## Angle choice
Headline: "Your Floor Plan Has 265 Square Feet of Hallway. At $162 a Foot, You Paid $42,900 for the Walk to Your Bedroom."
Elena Vasquez: spatial description (make the reader see the corridor), elegant precise prose, essayist flow, and her signature skepticism: the metric is useful, but efficiency is not beauty, and the AI that scores your hallway should not be allowed to design your home.
