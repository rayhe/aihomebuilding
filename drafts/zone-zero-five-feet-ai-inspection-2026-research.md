# Research: Zone 0 — California's 5-Foot Ember Zone Meets the AI Inspector

**Slug:** `zone-zero-five-feet-ai-inspection-2026`
**Journalist:** Elena Vasquez (architecture & design — Zone 0 is a landscape-design brief disguised as a fire regulation)
**Article #:** 768 (next after 767)
**Date:** September 4, 2026

## Kill test
Does this help someone building or buying a home? **Yes.** 2.12 million California structures just got a compliance clock (3-year phase-in for existing homes, immediate for new construction in SRA). AB 38 means sellers must produce defensible-space inspection documentation at point of sale — buyers inherit the liability. Builders in the State Responsibility Area must now design the 5-foot perimeter as a regulated zone from day one. This article gives them the rulebook, the cost math, and the coming AI inspection regime.

## The news (primary sources)

1. **Board of Forestry adopted final Zone 0 rules Aug 19–20, 2026** (E&E News by Politico, Camille von Kaenel, 08/20/2026). First-in-the-nation rules. ~2 million homes in high-risk areas must reduce flammable material within 5 feet of structures. Bars wood mulch, firewood, wood fences, dead vegetation in Zone 0; maintained plants/trees allowed. Final version less restrictive than earlier drafts after LA pushback over costs and mature trees. Local governments may craft own rules. Existing-home deadline extended up to 5 years in final version.
   - URL: https://www.eenews.net/articles/california-approves-landmark-zone-zero-wildfire-rules/
2. **NBC Palm Springs (08/30/2026):** rules apply in Very High Fire Hazard Severity Zones + State Responsibility Areas. Phase 1: roofs/gutters debris-free, trees 5 ft from roof / 10 ft from chimneys. Existing homeowners get 3 years.
   - URL: https://www.nbcpalmsprings.com/public-safety/2026/08/30/californias-new-wildfire-rules-target-the-first-5-feet-around-your-home
3. **CalCities Zone 0 FAQ (Sept 17, 2025)** — the regulatory detail goldmine:
   - Origin: AB 3074 (2020) directed the Board to create the zone; SB 504 (2024) requires existing and new structures to meet the SAME standard.
   - Scope: 1.25M structures in SRA + 870K in LRA Very High zones = **2.12M structures, 17% of all structures statewide**.
   - Existing structures: 3-year phase-in to clear vegetation/combustibles from first 5 feet.
   - Enforcement: Board doesn't enforce; CAL FIRE defensible-space inspectors (SRA) and local fire departments (LRA VH) enforce like existing defensible-space inspections. Goal is education-first, not penalties.
   - Trees ALLOWED in Zone 0 if maintained: no dead/dying branches, no branches within 5 ft of roof/walls or 10 ft of chimneys. Single-specimen trees and ordinance-protected trees get exceptions.
   - Moveable items (trash cans, vehicles, BBQs, HVAC) handled via inspector guidance, not hard regulation.
   - Cost: "actual costs will vary case-by-case"; SB 504 requires regulations to address compliance costs.
   - AB 38: sellers must provide defensible-space compliance documentation to buyers.
   - ~90% of CA homes were built before 2008 Chapter 7A ignition-resistant code.
   - URL: https://www.calcities.org/docs/default-source/advocacy/fire-safety-zone-zone-zero-faq-sept-17-2025.pdf?sfvrsn=2dc688da_1
4. **CAL FIRE defensible space page** (official zone guidance: hardscape, no combustible mulch, relocate firewood/lumber to Zone 2, replace attached combustible fencing).
   - URL: https://www.fire.ca.gov/DSpace
5. **IBHS + Cal Fire burn demonstration** (Firehouse): two model structures torched at McClellan to demo Zone 0; Frank Bigelow (Cal Fire deputy director, State Fire Marshal's office): "Zone zero is the most important component of defensible space for the protection of embers." Embers travel miles ahead of flame front.
   - URL: https://www.firehouse.com/operations-training/wildland/news/55319387/proposed-ca-wildfire-strategy-could-be-vital-to-save-homes

## The enforcement-capacity gap (primary sources)

6. **CitizenPortal coverage of 2026 CA Senate budget hearing** (Deputy Director Frank Bigelow testimony): CAL FIRE requested $6.1M + 31 positions FY 2026-27 to stabilize defensible-space inspections. Damage-inspection data: homes lacking compliant defensible space are **6× more likely to be destroyed**. Without ongoing funding, annual inspections drop from 250,000 goal to **fewer than 130,000** after one-time wildfire funds expire.
   - URL: https://citizenportal.ai/articles/7822801/california/legislative/senate/california-state-senate/california/legislative/senate/california-state-senate/california/legislative/senate/california-state-senate/california/legislative/senate/california-state-senate/california/legislative/senate/california-state-senate/california/legislative/senate/california-state-senate/California/CAL-FIRE-outlines-yearround-staffing-needs-nursery-shortfalls-and-requests-for-permanent-defensiblespace-inspectors
7. **CA Legislative Analyst's Office report** ("Reducing the Destructiveness of Wildfires"): 768,000 SRA parcels subject to inspection; goal = each parcel once every 3 years (~250K/yr); actual **200,000+/yr** — falling short. Four units inspected ≤10% of parcels in 2019-20. Rates overstate coverage since some parcels get repeat visits.
   - URL: https://lao.ca.gov/Publications/Report/4457

## The AI inspection angle (primary sources)

8. **izzystu/zone-zero (GitHub):** open-source U-Net semantic segmentation pipeline on 10 cm/px drone imagery. Classifies building/vegetation/ground/car/water/clutter, applies distance transforms for 0-5 ft and 5-30 ft zones, outputs compliance map with sq-ft violation areas. Held-out test: 90.8% pixel accuracy, **97.2% Zone 0 violation detection** (predicted 23,441 sq ft vs 22,806 ground truth — within 3%).
   - URL: https://github.com/izzystu/zone-zero
9. **basanthpr/hiz-wildfire-assessment (GitHub):** CLIP zero-shot + Qwen2.5-VL VLM pipeline with regulatory knowledge graph (PRC 4291, IBHS Wildfire Prepared Home, CAL FIRE LE-100a). Key finding: **~88% of IBHS/CAL FIRE requirements are aerially detectable** — the theoretical ceiling for drone inspection without ground follow-up.
   - URL: https://github.com/basanthpr/hiz-wildfire-assessment
10. **Defensive prior art (public domain, 2026-07-04):** drone-based defensible-space compliance assessment system (SfM photogrammetry + semantic segmentation + per-zone PRC 4291 scoring) published to public domain — evidence the concept is already in the water.
    - URL: https://github.com/rayhe/prior-art/blob/HEAD/inventions/2026-07-04-095-drone-defensible-space-compliance.md

## Cost grounding (primary sources)

11. **Angi 2026 fence data:** steel privacy fence installed $1,000–$2,000 per 100 linear ft ($10–$20/ft); aluminum $700–$3,200/100 ft. **Yelp 2026 cost guide:** old fence removal/disposal $1.50–$4.00/linear ft.
    - URLs: https://www.angi.com/articles/metal-fence-cost.htm?msockid=366019c5e00f66e81be20c5ae1996744 and https://www.yelp.com/costs/wrought_iron_fence_services
12. **FireEngineering (La Jolla):** landscape architect Jim Neri — compliance "might be expensive for homeowners who have flammable vegetation or fixtures in the 5-foot space" but Zone 0 is "another aspect of any design program" for landscape architects.
    - URL: https://www.fireengineering.com/fire-safety/fire-prevention/firefighters-citizens-weigh-in-on-new-ca-fire-prevention-rules/

## Original contributions (the novel analysis)

### A. The inspection-capacity math (nobody has published this division)
- Structures subject to Zone 0: **2,120,000** (CalCities/Cal Fire estimate).
- CAL FIRE's demonstrated inspection throughput: **~200,000/yr** (LAO), goal 250,000/yr, at-risk floor **<130,000/yr** (Bigelow testimony).
- At demonstrated throughput: 2,120,000 ÷ 200,000 = **10.6 years to inspect every structure once**.
- At goal throughput: 2,120,000 ÷ 250,000 = **8.5 years per cycle**.
- At the at-risk floor: 2,120,000 ÷ 130,000 = **16.3 years per cycle**.
- The existing-home compliance window is **3 years** (up to 5 in the final rules). Even at goal capacity, the state can only reach ~35% of structures within the 3-year window (750,000 of 2.12M).
- And every one of those visits now has a NEW inspection dimension (the 5-foot zone didn't exist as an enforceable standard before), which lengthens per-visit time — throughput likely falls, not rises.
- Conclusion: manual inspection cannot cover the mandate. Aerial/AI triage (per the 88%-aerially-detectable finding) is the only arithmetically plausible path to universal coverage. The inspector of 2029 is a drone pilot reviewing segmentation maps.

### B. Parametric Zone 0 compliance-cost model (labeled assumptions)
Model home: 1,800 sq ft single-story, ~140 linear ft of wall perimeter → 5-ft band ≈ 700 sq ft.
- **Fence:** 20 ft of wood fence touching the house → replace with steel privacy at $10–$20/ft installed (Angi 2026) + removal $1.50–$4/ft (Yelp 2026) = **$230–$480**.
- **Mulch swap:** 700 sq ft of wood mulch → 3" gravel/decomposed granite. (No verified 2026 installed $/sq ft found in this research round — article must either find one or frame as "get three quotes; this is the line item most homeowners underestimate.")
- **DIY floor:** pulling weeds/mulch under a deck and relocating firewood = $0 + a weekend (CalCities FAQ's own recommended starting point).
- Model total for the fence portion: **under $500** for the highest-risk fix (the fence-as-wick), which the CalCities FAQ itself prioritizes: "upgrade the five feet of wood fence or gate that touches the house."
- Honest framing: the Board itself says costs vary case-by-case; the article must not present a single "Zone 0 costs $X" number.

### C. The design reframing (Elena's lens)
- Zone 0 converts the foundation planting bed — the default American landscape gesture for 70 years — into a regulated hardscape zone. That is an architectural event, not just a fire story.
- The compliant Zone 0 palette (gravel, pavers, decomposed granite, succulents in noncombustible planters, steel fence panels) is a genuine new vernacular. UC Berkeley landscape-architecture design competition for wildfire-prepared homes already exists (cited in CalCities FAQ: wildfireprepared.org).
- For new construction in SRA, Zone 0 applies **immediately** — architects must detail the 5-foot perimeter on the plans, including the 6-inch vertical noncombustible strip between ground and siding.

## Strongest counterargument (steelman)
- **"This is security theater that punishes gardeners."** The final rules were already watered down after pushback; maintained trees are allowed; enforcement is education-first with no penalty schedule. A skeptic can fairly argue Zone 0 will be widely ignored (see: 10.6-year inspection cycle) while imposing real costs on the conscientious. Further: 88% aerial detectability still leaves the hardest 12% (under-deck fuel, siding clearance) to humans who aren't coming. And the insurance payoff is speculative — the Board itself says insurance is "outside the scope of our authority."
- **"The AI inspection story is overhyped."** The 97.2% figure is from 7 held-out drone scenes by a solo open-source project — not a validated product. Vegetation pixel accuracy was only 81.1%. No commercial vendor currently sells "Zone 0 compliance scans" to homeowners; the market doesn't exist yet. Say so.

## Limitations
- Inspection throughput figures mix SRA parcels (LAO, 768K parcels) with structures (CalCities, 2.12M structures incl. LRA) — parcels ≠ structures; the 10.6-year figure is an order-of-magnitude illustration, not an audit. Label it as such.
- Cost model covers fence only with sourced unit prices; mulch-to-hardscape conversion costs not verified this round.
- No data on how many insurers currently discount for Zone 0 specifically (vs. general defensible space).
- The "up to 5 years" extension (E&E, final rules) vs "3 years" (NBC, CalCities FAQ) discrepancy reflects rule evolution; present the range.

## Kill-test answer
A buyer in a Very High zone needs to know the AB 38 disclosure now covers Zone 0. A builder in SRA must detail it on plans today. A homeowner gets a prioritized fix list (fence wick first, under-deck second, mulch third) with real prices on the first item and an honest account of the inspection math.
