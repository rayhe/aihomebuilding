# Research: AI Stair Design and the Steepest Legal Stair

Slug: `ai-stair-design-steepest-legal-riser-2026`
Journalist: Elena Vasquez (architecture & design beat)
Article #: 872 (queued, ship_after 2027-01-13)

## Kill test
Does this help someone building or buying a home? Yes. Three things a reader can do this week: (1) tape-measure every riser on their stairs and check the 3/8-inch uniformity rule, the single biggest trip predictor; (2) when reviewing architectural plans, ask for 7"/11" riser/tread instead of the code-maximum 7.75"/10", knowing it costs ~2 feet of floor space per story; (3) use a free AI stair builder to generate a code-checked design before paying a designer for the first iteration.

## Thesis
Residential stair code sets a maximum steepness, not a recommended one, and production builders routinely build to the maximum because floor space is money. AI stair-design tools (RedX AI, ARCHICAD's algorithmic stair tool) now generate code-checked staircases from plain language in under a minute, but they check against the legal floor, not the comfort optimum. The original contribution: the geometry math showing exactly what the steepest legal stair costs in safety margin versus floor space.

## Primary sources

1. **CPSC NEISS 2020 Data Highlights** (cpsc.gov): "Stairs, ramps, landings, floors" ranked #1 product category for ED-treated injuries: 2,662,147 estimated injuries, rate 807.0 per 100,000. https://www.cpsc.gov/s3fs-public/2020-NEISS-data-highlights-sex.pdf
2. **Blazewick et al., American Journal of Emergency Medicine (2018)** via ScienceDirect: 24,760,843 stair-related ED visits 1990-2012, averaging 1,076,558/year (37.8 per 10,000); estimated $92 billion annual direct + indirect costs of non-fatal injuries. https://www.sciencedirect.com/science/article/abs/pii/S0735675717307593
3. **LendingTree analysis of CPSC NEISS (2014-2023)**: "stairs or steps" caused 11.3 million injuries over the decade, the only product besides flooring above 10M; floors/flooring 18.0M. https://www.lendingtree.com/insurance/home-structure-injuries-study/
4. **IRC R311.7.5 / R311.7.5.1 (2018 IRC, via Stairbuilders and Manufacturers Association visual interpretation, inspectapedia.com)**: max riser 7-3/4", min tread 10", greatest-to-smallest variation within any flight max 3/8"; nosing 3/4" to 1-1/4"; open risers must reject a 4" sphere above 30" drop. https://inspectapedia.com/Stairs/2018-IRC-Stair-Code-WA.pdf
5. **RedX AI stair builders (redxapps.com)**: plain-language prompt ("U-shaped stairs, 9 foot rise, closed stringers, landing at half height") builds complete 3D design with stringers/treads/risers/landings in under a minute; live code flags (risers over 7-3/4", treads under 10"); core math published: riser count = round(total rise / 7.5), exact riser = rise / count, stringer = hypotenuse, comfort rule 24" <= 2R+T <= 25"; exports dimensioned PDF blueprints + full cut lists. https://redxapps.com/build/stairs
6. **Graphisoft ARCHICAD 21 algorithmic Stair Tool (engineering.com)**: automatic validation against ergonomic and safety specifications across thousands of permutations; railing tool with code-aware options. https://www.engineering.com/the-magic-powering-autodesk-and-graphisofts-stair-wizard-tools/
7. **iPhone LiDAR accuracy (AEC Magazine / SiteScape)**: phone LiDAR scans accurate to about +/- 1 inch; MDPI mineshaft study: iPhone 13 Pro vs FARO Focus, 5-15 cm accuracy class vs 3 mm survey grade. Implication: phone scanning cannot verify the 3/8" riser-uniformity rule; a tape measure can. http://aecmag.com/reality-capture-modelling/sitescape-lidar-scanning-on-the-iphone-ipad/ and https://www.mdpi.com/2072-4292/15/21/5089

## Original contribution: the steepest-legal-stair math
For a 9-foot (108") floor-to-floor rise:
- Code-maximum stair: 14 risers at 7.71" (108/14), 13 treads at 10" = 130" run (10.8 ft). Slope angle = atan(7.71/10) = 37.6 degrees. 2R+T = 25.4", just over the top of the comfort band.
- Comfortable stair (7" riser, 11" tread): 15 risers at 7.2", 14 treads at 11" = 154" run (12.8 ft). Slope angle = atan(7.2/11) = 33.2 degrees. 2R+T = 25.4"... (7.2*2+11 = 25.4). Hmm, recompute: 2(7.2)+11 = 25.4. Use 7"/11": 2(7)+11 = 25, angle atan(7/11) = 32.5 degrees.
- Floor-space price of comfort: 24 inches (2 feet) of additional run per story. At $500-$1,000/sqft construction cost and 3 ft stair width, that is 6 sq ft = $3,000-$6,000 in direct cost, plus opportunity cost of lost floor area.
- The 3/8" rule is the trip rule: human gait calibrates to the first two risers; a single riser 1/2" taller than its neighbors is the classic trip mechanism. Verifiable with a $10 tape measure; not verifiable with phone LiDAR (+/- 1" error swamps a 3/8" tolerance).

## The skepticism
- RedX publishes no pricing and no independent review of its code-check accuracy exists; "run the code checks" is a vendor claim, and local amendments (common) are explicitly disclaimed ("always verify with your building department").
- AI checks the legal floor, not the optimum: RedX's own default (7.5" target riser) sits near the steep end of the comfort band. A tool that guarantees code compliance can still output the least comfortable legal stair.
- Most stair injuries involve behavior and conditions (carrying loads, no handrail use, poor lighting, socks on hardwood, aging), not geometry alone; geometry is necessary but not sufficient.
- Injury statistics cover all existing housing stock (much of it pre-code or non-compliant), not new construction; cannot isolate new-build stair injuries from NEISS.

## Strongest counterargument (full strength)
The code maximum exists because floor space is the most expensive thing in a house. On a small lot or in an ADU, shaving 2 feet off the stair run can be the difference between a compliant bedroom and a failed plan check. Production builders are not being careless when they build 7.75"/10" stairs; they are trading a few degrees of slope for thousands of dollars of sellable space and, at the margin, for housing affordability itself. A mandate for gentler stairs would be a regressive tax on small homes. The honest position: steepness is a budget line item, and buyers should know they are the ones paying it, in risk rather than dollars.

## Limitations
- Could not verify RedX AI pricing, user counts, or adoption; no third-party audit of its code-check engine found.
- Blondel's 2R+T rule (cited by RedX as the "comfort rule") is a 1675 heuristic from Francois Blondel, not a biomechanical standard; the 24-25" band is convention.
- NEISS injury data cannot separate new-construction stairs from century-old ones; the 1.08M/year figure describes all stairs.
- No data found on what fraction of production builders actually build to code-maximum vs. gentler defaults; the "builders build to the max" claim rests on floor-space economics, not a survey.
- Phone-LiDAR accuracy figures (+/- 1") come from vendor-adjacent AEC press and one MDPI study, not a controlled stair-measurement trial.

## Actionable takeaways (for the article)
1. The 60-second tape test: measure every riser in each flight; if any two differ by more than 3/8", that stair is both a code violation and a trip hazard. Fix: shim or rebuild the offending tread.
2. Plan-review ask: specify 7" risers / 11" treads on custom plans; know it costs ~2 ft of run per story.
3. Remodel shortcut: RedX AI generates a code-flagged 3D stair + cut list from one rise measurement, free to try, before engaging a stair builder.
4. Handrails on both sides + lighting switches at both levels (IRC R303.7/R303.8) matter more than an inch of tread for older occupants.
5. Do not trust phone LiDAR to verify stair code compliance; the tolerance (3/8") is smaller than the sensor error (+/- 1").
