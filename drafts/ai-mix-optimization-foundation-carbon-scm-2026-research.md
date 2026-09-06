# Research: AI-Optimized Concrete Mix Design for Residential Foundations

**Topic:** AI mix-optimization platforms (AICrete, Concrete.ai, Giatec Roxi, Converge Mix AI) cutting embodied carbon in residential foundation concrete
**Journalist:** Priya Greenwood (sustainability)
**Slug:** `ai-mix-optimization-foundation-carbon-scm-2026`
**Date researched:** September 6, 2026

## Kill test
Does this help someone building or buying a home? YES. Foundation concrete is the single biggest carbon line item in most new homes, and buyers/builders can act on it this week: ask the ready-mix supplier for an EPD, specify SCM content or Type IL cement, and compare bids on GWP per cubic yard. The AI angle makes the lever concrete (sorry) and quantifiable.

## The original calculation (article's novel contribution)
Typical 2,000 sq ft single-story home, slab-on-grade foundation:
- Slab: 2,000 sq ft x 4 in thick = 666.7 ft3 = 24.7 cubic yards
- Thickened edge footings (~180 linear ft perimeter, 12"x12"): ~6.7 cubic yards
- **Total: ~31 cubic yards** of 3000-4000 psi concrete (round to 30 for readability; show the math)

NRMCA Industry Average EPD v3.2 (A1-A3, cradle-to-gate), 3001-4000 psi:
- Straight cement (0% SCM): 326.27 kg CO2e per cubic yard
- 50% SCM (fly ash/slag): 199.70 kg CO2e per cubic yard -> 39% reduction
- Source: CarbonCure guidebook excerpt of NRMCA table

Foundation totals:
- Straight cement: 30 cy x 326.27 = **9,788 kg = 9.8 metric tons CO2e**
- 50% SCM: 30 cy x 199.70 = 5,991 kg = **6.0 metric tons CO2e**
- Delta: **3.8 metric tons saved** - roughly one year of driving an average US passenger car (EPA: ~4.6 t/yr)

AI optimization layer (AICrete @ Clark Pacific): 17% carbon reduction vs their existing mix, plus 4-5% cost savings per cubic yard. Applied to the straight-cement baseline: 9.8 t -> ~8.1 t.

Concrete.ai (UCLA spinoff) claims industry-wide concrete overdesign costs $2.4B/year and 10M metric tons of incremental CO2 from cement production. (Vendor claim - flag as unverified.)

## Primary sources
1. NRMCA Industry Average LCA Report v3.2 - https://www.nrmca.org/wp-content/uploads/2022/02/NRMCA_LCAReportV3-2_20220224.pdf (GWP per cy tables, 3001-4000 psi band)
2. CarbonCure spec guidebook (cites NRMCA table directly) - https://www.carboncure.com/wp-content/uploads/2023/07/wp-IncludingCarbonCureintoConcreteSpec-1-1.pdf (the 39% SCM reduction number)
3. AICrete $4M seed announcement, PRNewswire - https://www.prnewswire.co.uk/news-releases/sustainable-and-ai-concrete-startup-aicrete-announces-4-million-seed-funding-301629774.html (Clark Pacific: 4-5% cost savings, 17% carbon reduction, 4 optimized mixes)
4. Concrete.ai beta announcement - https://www.concrete.ai/news/concrete-ai-releases-beta-version-of-tool-reducing-cost-carbon-intensity-of-concrete-construction/ (100,000+ mixes analyzed, $2.4B overdesign claim)
5. Microsoft customer story: Giatec - https://www.microsoft.com/en/customers/story/25573-giatec-scientific-azure-iot-hub (Roxi AI: 300,000+ mix designs, 75M cubic meters of concrete data)
6. Engineering.com: Converge Mix AI launch - https://www.engineering.com/converge-announces-mix-ai/ (Stanley Black & Decker partnership, strength/carbon forecasting)
7. AEC Magazine: Converge decarbonization - https://aecmag.com/construction/converge-uses-ai-to-help-decarbonise-concrete/
8. Concrete Products: Concrete-AI (UCLA Bauchy/Sant, FHWA consortium) - https://concreteproducts.com/index.php/2021/08/09/concrete-a-innovation/
9. Architectural Record: California CALGreen embodied carbon code - https://www.architecturalrecord.com/articles/16420-california-adopts-first-in-nation-building-code-revision-to-reduce-embodied-carbon (three compliance paths: 45% reuse, prescriptive GWP limits, WBLCA; expands 100K -> 50K sq ft by 2026; LA considering residential)
10. Glotman Simpson: CALGreen update - https://glotmansimpson.com/california-leads-the-way-decoding-the-new-embodied-carbon-requirements-in-calgreen/

## Policy context (accuracy notes)
- CALGreen July 2024: embodied carbon limits apply to buildings 100,000+ sq ft. Prescriptive path caps concrete at 130% of NRMCA GWP values.
- Jan 1, 2026: expands to non-residential 50,000+ sq ft. Residential NOT yet covered statewide; LA is considering a residential version (per William Leddy / Architectural Record).
- GSA (IRA-funded federal): top-20% concrete GWP limit of 284 kgCO2e/m3. FEMA: 308. These are federal/public procurement, not residential.
- Frame honestly: the codes are aimed at big commercial, but the residential market is where most concrete volume lives. The homeowner angle is "do this voluntarily before the code makes you."

## Skepticism / counterarguments (steelman)
1. **SCM supply is collapsing, not growing.** Fly ash depends on coal plants (retiring); slag depends on blast furnaces (declining). AI optimization is only as good as the local materials available. In regions without SCM supply, the model has nothing to optimize toward.
2. **Overdesign exists for a reason.** Concrete.ai's framing ("overdesign wastes $2.4B") ignores that engineers over-specify strength to absorb real uncertainty: aggregate variability, curing conditions, contractor water additions on site. Trimming the safety margin with an algorithm doesn't remove the uncertainty.
3. **AI doesn't pour the concrete.** A perfect mix design still gets ruined by a driver adding water at the chute. Field QA (Converge's sensors, Giatec's SmartRock) matters more than the design algorithm.
4. **CarbonCure and SCMs are older, cheaper levers.** A buyer can demand 30-50% SCM or Type IL cement today with zero AI. The AI is an optimizer on top of decisions the spec writer already controls.
5. **Vendor claims are unverified.** AICrete's 17% figure comes from one Clark Pacific trial (precast, not residential ready-mix). Concrete.ai's 10M-ton figure is a company estimate. No independent third-party audits.

## Actionable takeaways (for the article)
- If building new: ask your ready-mix supplier for a product-specific EPD and the GWP per cubic yard. Compare against the NRMCA industry average (326 kg/cy for 3000-4000 psi straight cement).
- Specify Type IL portland-limestone cement or 25-50% SCM content in the foundation spec. In most markets this costs the same or less.
- Ask whether the supplier uses mix-optimization software (Giatec SmartMix, AICrete, Concrete.ai). If they don't know what that is, their mixes are probably overdesigned.
- For a 2,000 sq ft slab home, the difference between straight-cement and 50%-SCM concrete is ~3.8 tons of CO2 - equivalent to taking a car off the road for ~10 months.

## Limitations (for the article)
- The 9.8-ton figure uses the NRMCA industry-average EPD (A1-A3 only: raw materials through plant gate). It excludes transport to site, pumping, and finishing - real cradle-to-site numbers run 10-20% higher depending on haul distance.
- 30 cubic yards assumes a simple slab-on-grade with thickened edges. Homes with basements, stem walls, or deep footings use 40-80+ cubic yards; the carbon scales linearly.
- SCM availability varies wildly by region. The 50%-SCM number is achievable in markets near fly ash/slag sources; in the Mountain West it may be physically impossible.
- AI optimization results (17% carbon, 4-5% cost) come from precast trials, not residential ready-mix. Residential mixes are more variable and lower-margin.
