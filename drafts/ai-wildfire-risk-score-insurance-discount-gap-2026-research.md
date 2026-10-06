# Research: The AI That Scores Your Home's Wildfire Risk, and the Discount That Doesn't Pay

**Article #1024 · Journalist: Catherine "Code" Chen (Policy & Regulation) · Started 2026-10-06**

## Thesis
California's first-in-the-nation 2022 regulation forces insurers to discount premiums for wildfire mitigation. The actual discounts ($42-$75/yr at the state's second-largest insurer) don't come close to paying for the mitigation ($2,780 for just the 5-foot ember zone). Meanwhile, AI wildfire models rescore your home every year from satellite imagery, and 52% of California homes got riskier between 2022 and 2025 without their owners lifting a finger. The incentive structure is honest math that doesn't work, and the article's job is to show the real arithmetic and say what actually does work.

## Kill test
Does this help someone building or buying a home? Yes. It tells buyers in the WUI what their insurer's AI sees, what mitigation the state requires insurers to credit, what the real payback math is, and where the money is actually best spent (building ember-resistant new, where IBHS found cost differences are negligible).

## Primary sources

1. **ZestyAI Z-FIRE methodology** — AI model trained on 1,400+ wildfire events across 20+ years of historical loss data; uses ML + annual high-resolution satellite imagery to evaluate vegetation, terrain, building characteristics, climate factors, proximity to historical fires; produces 1-10 scores for wildfire hazard (L1) and potential home destruction (L2). Approved by California Department of Insurance for underwriting AND rating; Farmers committed to writing 30,000+ new policies for higher-risk homeowners using it. (zesty.ai, CDI approval announcement)
2. **ZestyAI Jan 2026 report via Morningstar** — Analysis of 11,808,251 California properties with Z-FIRE scores (March 2025): 52.0% saw regional wildfire hazard worsen, scores increasing an average of 1.3 points. A single-point increase = 51% jump in annual wildfire probability. ~$1 trillion in CA homes labeled "low risk" by FEMA's National Risk Index carry elevated danger per Z-FIRE. FEMA ratings "showed little change" over 2022-2025; environmental conditions "deteriorated faster than homeowners could mitigate."
3. **IBHS ember research** — Up to 90% of homes and buildings damaged/destroyed in wildfires were first ignited by embers or ember-set fires, not the main fire front (2019 duplex ember-attack demonstration, Richburg SC; wildfire-resistant side did not burn). If a home is ignited by wildfire, >90% chance of total loss (IBHS wildfire resilience presentation). Daniel Gorham, P.E.: "It's all about the embers and making sure they have nothing combustible to land on."
4. **IBHS/Headwaters Economics 2018 cost study** — Building a new home to wildfire standards "can cost roughly the same" as a non-compliant home. NAHB found retrofit costs range $1,827-$44,888 depending on siding choice. The 0-5 ft ember-resistant zone plus enclosing under-deck area costs roughly $2,780. "Optimum" materials (metal roof) run $18,180-$27,080. (via SDPB/NPR, July 2022)
5. **CA CDI Safer from Wildfires regulation (Oct 2022, CCR 2644.9)** — First-of-its-kind: all admitted carriers must incorporate wildfire mitigation credits into rating plans within 180 days; must release wildfire risk determinations to policyholders; framework lists 11-12 mitigation measures across three layers of protection. Lara's Feb 2022 proposal estimated consumers could save an average of $100/year, ~8% on a typical premium.
6. **Sacramento Bee via insurancenewsnet (2024 follow-up)** — A year and a half after the mandate: discounts proposed by largest insurers "not led to significant savings." Farmers (2nd-largest CA home insurer, 2022) estimated average high-risk policyholder saves $42-$75/year for taking the specific mitigation steps. Harvey Rosenfield (Consumer Watchdog): "heads, insurance companies win, tails, insurance companies lose." Nevada City homeowner Hans Shillinger pays ~$7,200/year with Farmers; calls the savings "a drop in the bucket."
7. **E&E News (2024)** — California first state to require discounts; other western states watching but "not ready to require discounts." Research shows a full suite of mitigation steps significantly reduces risk, but "less understanding of the extent to which just one or two of those steps could reduce damage and insurance claims." Insurers cautious: "minimal discounts."
8. **Colorado HB 25-1182 (effective July 2026)** — Requires insurers to credit documented mitigation. IBHS Wildfire Prepared Home became available to Colorado homeowners April 2026; $125 non-refundable application fee; two levels (Base/Essential = ember protection, achievable by retrofit: 0-5 ft noncombustible zone, 30 ft managed defensible space, Class A roof, ember-resistant vents, 6 in. noncombustible base; Plus/Enhanced = radiant heat/flame: enclosed eaves, noncombustible siding, dual-pane tempered windows, noncombustible decks). (via blazeblocker.co)

## Original contributions (calculations nobody published)

1. **The 71% number.** Z-FIRE report: 52% of CA homes worsened by an average 1.3 points, 2022-2025; one point = 51% jump in annual wildfire probability. Compounding: 1.51^1.3 = ~1.71. So the average worsened home's modeled annual wildfire probability rose ~71% in three years, driven by environmental conditions, not homeowner behavior. (Methodology: exponential compounding of per-point relative risk; assumes the 51%-per-point relationship is multiplicative as the report's phrasing implies.)
2. **The payback nobody prints.** IBHS's $2,780 for the 0-5 ft ember zone + under-deck enclosure, divided by Farmers' $42-$75/year discount for high-risk policyholders = 37-66 year payback on the insurance discount alone. The discount does not finance the mitigation. The mandate's pitch (reward the work) and its arithmetic (pennies on the dollar) are in tension, and that tension is the story.
3. **The cross-check.** IBHS: building wildfire-resistant NEW costs "roughly the same." Retrofitting the ember zone costs $2,780 with a 37-66 year discount payback. Conclusion: the rational buyer moves the money to the purchase decision (buy the hardened house, or harden at build time) rather than chasing the discount after the fact. Nobody has combined the IBHS cost study with the CDI discount filings to state this plainly.

## Limitations (to state in the article)
- Z-FIRE's Jan 2026 figures come from a vendor-published report; the 11.8M-property analysis and FEMA comparison are ZestyAI's own methodology, not independently audited.
- Discount figures ($42-$75) are from Farmers' filings as reported by the Sacramento Bee in 2024; other carriers differ and filings have evolved.
- IBHS cost figures ($2,780; $18,180-$27,080) come from a 2018 study reported in 2022; inflation and regional labor spreads apply.
- No published study quantifies how much ONE or TWO mitigation steps (vs. the full suite) reduce actual claim costs (E&E News); the per-measure effectiveness data insurers would need for bigger discounts doesn't exist yet.
- The 71% compounding calculation assumes multiplicative per-point risk; ZestyAI's report phrasing supports it but the exact functional form is proprietary.

## Strongest counterargument (to state at full strength)
The small discounts may be actuarially honest. If individual mitigation steps genuinely reduce expected claim costs only slightly (per-measure data doesn't exist), then $42-$75/year is fair pricing, not insurer greed. The AI models also serve the other direction: granular scoring lets carriers write policies in places they had abandoned (Farmers' 30,000 new policies), which is coverage the market desperately needs. And CDI's own deputy commissioner flagged the bias risk: property-level AI scoring can penalize homeowners for vegetation regrowth or neighbors' lots, things they don't control, with no clear appeals path. Scoring people on satellite photos of their yards raises exactly the fairness questions the regulation was supposed to answer.

## Headline options
- "An AI Rescored 11.8 Million California Homes. 52% Got Worse."
- "The State Made Insurers Pay You to Fireproof. The Check Is $58 a Year."
- "Your Insurer's AI Watched Your Roof From Space. Then It Raised Your Risk 71%."
- Pick: **"An AI Scored Your Home's Wildfire Risk From Orbit. The Discount for Fixing It Is $58 a Year."**

## Actionable takeaways (required)
- Buying in the WUI: ask for the home's wildfire risk score and which model produced it; CDI rules give you the right to see the determination.
- The 0-5 ft noncombustible zone (~$2,780) is the highest-leverage retrofit; do it for survival, not the premium discount.
- Building new: wildfire-resistant construction costs roughly the same (IBHS/Headwaters); specify Class A roof, ember-resistant vents, noncombustible 5-ft zone at plan stage.
- Renters/buyers: check whether the community has Firewise or equivalent recognition; insurers must credit community-level mitigation too.
