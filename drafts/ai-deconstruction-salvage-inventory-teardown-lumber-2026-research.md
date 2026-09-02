# Research: AI Deconstruction Inventory — Pricing the Teardown Before the Excavator Arrives

**Slug:** ai-deconstruction-salvage-inventory-teardown-lumber-2026
**Journalist:** Priya Greenwood (Sustainability & Green Building)
**Date:** September 2, 2026
**Kill test:** Does this help someone building or buying a home? YES — anyone planning a teardown-and-rebuild (extremely common in Bay Area / LA / Seattle infill markets) decides between a $15K demolition bid and a deconstruction bid almost entirely on price, with zero information about what the old house is worth in salvaged material. An AI pre-demolition inventory changes the information asymmetry.

## Thesis
Deconstruction loses to demolition on nearly every residential bid sheet, not because the math is bad but because nobody prices the salvage before choosing. AI-powered pre-demolition audits (computer vision wall scanning, contaminated-wood detection, material passports) attack the information problem directly: they inventory what's inside the walls before anyone swings a hammer, turning a gamble into a line item.

## Primary sources

### 1. EPA — C&D debris material-specific data (2018 Fact Sheet, still the latest federal estimate)
- 600 million tons of C&D debris generated in the US in 2018 — more than 2x municipal solid waste (~292M tons).
- Demolition = >90% of C&D debris; construction <10%.
- ~455M tons directed to "next use," just under 145M tons landfilled.
- EPA explicitly recommends considering deconstruction vs. demolition to salvage components for reuse.
- Notable: EPA stopped publishing after 2018. No federal agency currently produces a national C&D estimate; construction spending is up >40% since 2018, so today's number is almost certainly well above 600M tons (per Waste Advantage Magazine, Aug 2026).
- URL: https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/construction-and-demolition-debris-material

### 2. Autodesk Research — "From Walls to Resources: Early Results in AI-Powered Building Deconstruction Planning"
- Multi-modal sensors scan interior walls; ML identifies recoverable materials behind finishes.
- 95% accuracy detecting metal studs under controlled conditions (Boston Technology Center test).
- Case study (school demolition, drywall recovery): one test wall section projected $121 in reuse value from intact drywall panels vs. $102 disposal cost as waste; avoided ~40.5 kg CO2 by displacing new drywall manufacturing.
- Framing: if adopted in 10% of demolition projects globally, "millions of tons of CO2" avoided + "billions in material value" recovered. (Their extrapolation; treat as directional.)
- Status: research, not a shipping product. Crews use it without advanced automation; groundwork for future robotic integration.
- Also applicable: pre-renovation assessment, historic documentation, post-disaster structural assessment.
- URL: https://www.research.autodesk.com/blog/from-walls-to-resources-early-results-in-ai-powered-building-deconstruction-planning/

### 3. Yale Environment 360 — "Deconstructing Buildings: The Quest for New Life for Old Wood"
- Felix Heisel (Cornell Circular Construction Lab): deconstructed a 4,500-sq-ft home in Ithaca, NY in 5 days. Labor cost more than demolition, but salvaged-material revenue nearly offset the difference. Conclusion: under right conditions, deconstruction is time- and cost-competitive.
- Urban Machine (Oakland company): building robotic systems that pull nails out of lumber — attacks the single most labor-intensive step of wood salvage.
- European angle: Basel and other cities run digital databases tracking reusable materials and matching them with buyers before demolition begins.
- URL: https://e360.yale.edu/features/reclaimed-wood-deconstruction-cities

### 4. Monash University / Charles Darwin University — AI contaminated-wood detection (Resources, Conservation & Recycling)
- First real-world image dataset of contaminated C&D wood waste.
- Deep learning (CNNs + Transformers) on ordinary RGB images: 91% accuracy-class performance across six contamination types (paint, chemicals, metals, residues).
- Why it matters: contaminated wood is the reason most demo wood goes to landfill — manual sorting is too slow and unreliable. Deployable via sorting-line cameras, drones, or handheld tools.
- Team: Madini De Alwis (PhD candidate), Dr. Milad Bazli, A/Prof Mehrdad Arashpour.
- URL: https://www.monash.edu/news/articles/ai-detects-contaminated-construction-wood-with-91-accuracy

### 5. Guy & McLendon (2000), Univ. of Florida Center for Construction and Environment — 6 wood-frame homes, Gainesville FL
- Deconstruction upfront cost averaged ~21% more than demolition (range 1.6%–78%) BEFORE salvage revenue.
- Salvaged material valued at 25–50% of new retail: average $1.64/sq ft (range $0.20–$2.34).
- Net result: ~37% savings for deconstruction over demolition after salvage credits.
- Caveat (theirs): materials were never actually sold — no storage, transport, or sales overhead counted. Real-world net is thinner.
- URL: http://ascpro0.ascweb.org/archives/cd/2011/paper/CPGT361002011.pdf

### 6. The RE Store (Bellingham, WA) case study — 1,292 sq ft structure
- Total structure weight 15,921 lbs (12.32 lbs/sq ft). Salvaged 34.6% by weight, recycled 64%, landfilled 3.1%.
- Salvaged material value: $2,647.47 = $2.05/sq ft; $0.48/lb.
- Labor: 4 workers, 125.5 hours, ~$2,209. Track-hoe rental $580.
- Hybrid method (hand deconstruction + machine for marginal material) keeps economics viable.
- Nonprofit 501(c)(3) donation = tax deduction for homeowner on donated material value.
- URL: https://www.thefreelibrary.com/The+new+demolition%3A+a+case+study+compares+deconstruction+to...-a0153235066

### 7. Dezeen — "Circularity on the Edge" AI (Ukraine reconstruction)
- AI trained on 2,518 annotated images of damaged buildings; identifies brick, concrete, metal roofing, wood; flags hazardous materials (asbestos) for special handling.
- Four Bucha test sites: 46% of materials need disposal, 11% incineration, 43% reuse/recycling potential.
- Companion platform "Povtornо" (NGO ReThink, in beta) matches recovered materials to nearby projects.
- URL: https://www.dezeen.com/2025/07/07/circularity-on-the-edge-ai-ukraine/

## ORIGINAL CALCULATION — "The 2,000-square-foot teardown"
Inputs (all sourced, stated as assumptions):
- RE Store measured weight: 12.32 lbs of building per sq ft → a 2,000 sq ft home weighs ~24,640 lbs ≈ 12.3 tons.
- Current C&D tipping fees: $40–70/ton in many US regions, rising (Wilmot Inc. industry roundup, 2026). Use $60/ton midpoint.
- Avoided disposal if ~97% diverted (RE Store achieved 96.9% diversion): 12.3 tons × 0.97 × $60 ≈ $716 in avoided tipping fees.
- Salvage value via Guy & McLendon $1.64/sq ft (2000 dollars, never-sold caveat): 2,000 × $1.64 = $3,280 nominal. (2026 dollars would be roughly 1.9x via CPI ≈ $6,200, but the underlying retail lumber prices the ratio was built on have their own history — present the $3,280 as the study's number, flag inflation honestly.)
- Combined: roughly $4,000 in salvage + avoided disposal against a deconstruction labor premium.
- The AI audit economics: a 360-camera walkthrough plus analysis costs on the order of hundreds of dollars (Disperse-style capture is a few hours with an off-the-shelf camera). If the inventory lifts the realized salvage value by even 15% on a $3,280 base (~$500), the audit pays for itself — before counting avoided disposal or the tax deduction.
- Sensitivity: the BC Ministry of Environment study found labor cost dominates the deconstruction equation (10% labor swing = $640 vs. 10% salvage swing = $266 on their representative project). So the honest framing: the AI doesn't make deconstruction cheap; it makes the salvage side legible enough to bid against demolition fairly.

## Counterargument (strongest, stated at full strength)
Deconstruction's problem was never just information — it's labor arithmetic and market thinness. The BC sensitivity analysis shows labor dominates; in high-wage US metros the deconstruction premium can hit 78% (UF study max). Salvage markets are local and fickle: old-growth 2x4s sell in Portland and Seattle, but in most markets there's no buyer at any price, and storage isn't free. The Autodesk system is lab research (95% on metal studs under controlled conditions — not your 1920s balloon-frame with three remodels). Monash's 91% is on a curated dataset. And the dirtiest secret: the $1.64/sq ft UF number assumed materials sold at 25–50% of retail with zero selling costs — nobody's books look like that. AI can inventory the walls; it can't conjure a buyer for 400 used 2x4s in Fresno.

## Limitations
- No published per-home pricing for any AI pre-demolition audit product; "hundreds of dollars" is inferred from adjacent computer-vision capture services, not quoted.
- UF $1.64/sq ft is year-2000, six homes, one market, materials never actually sold.
- Tipping-fee midpoint ($60/ton) is a national-ish blend; actual fees range from ~$30 (rural Southeast) to >$100 (Northeast/West Coast), which flips the math by region.
- Autodesk and Monash results are controlled-condition research, not field deployments on occupied housing stock.
- Did not verify current reclaimed-lumber retail pricing per board foot; deliberately avoided quoting it.

## Actionable takeaways (for the article)
1. If you're planning a teardown: get a deconstruction bid alongside the demolition bid, and ask the deconstructor for an itemized salvage estimate — not a hand-wave. If they can't produce one, that's your sign the job will be priced on vibes.
2. Donate salvaged material through a 501(c)(3) reuse store (RE Store model): the tax deduction can exceed the cash sale value for high-income homeowners.
3. Ask your demo contractor what the tipping fee line item is. At $60–100/ton, every ton diverted is money back; get the disposal savings in writing as a credit.
4. Pre-1978 homes: lead paint and asbestos make wood legally un-salvageable in many jurisdictions — get the hazmat survey before dreaming about reclaimed floors. (This is exactly the contamination problem Monash's AI targets.)
5. For builders: reclaimed structural lumber generally can't be graded/stamped for structural reuse under most codes — plan it for non-structural uses (fencing, sheds, interior cladding) unless your AHJ accepts re-grading.
