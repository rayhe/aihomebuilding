# Research: Slab-Edge Thermal Bridging + AI Infrared Detection

**Slug:** slab-edge-thermal-bridge-infrared-ai-2026
**Journalist:** Priya Greenwood (sustainability / energy performance)
**Article #:** 797
**Date:** September 7, 2026

## Kill test
Does this help someone building or buying a home? Yes. It tells a builder exactly which insulation detail is most-skipped and least-inspected (slab edge), what it costs to get right (~$1,200-2,000 during construction), how to verify it before backfill buries the evidence (photos + a $200 infrared add-on), and gives a homebuyer in a warm climate the one code-free upgrade worth paying for. It also does honest math showing the energy payback is weak (15+ years) while the comfort and compliance case is strong, so nobody oversells it.

## Core finding
The slab edge is the worst thermal bridge in a typical new home: at 25F outdoor / 70F indoor, the floor where the bottom plate meets the slab sits at 44F (GreenBuildingAdvisor). Concrete is R-1 per foot; a six-inch path through the edge yields R-0.5 against an R-19 wall. IECC 2021 requires R-10 slab-edge insulation 2-4 ft deep in climate zones 4+ (CZ5: R-10ci, 4 ft), but builders routinely misinstall it (foam stops short of grade, wrong depth, damaged during backfill), and once backfilled the inspector cannot see it. AI-assisted infrared thermography can now flag linear thermal bridges automatically (89% precision in field validation), turning a $200 IR scan into a verification tool for a detail nobody inspects.

## Primary sources (9)

1. GreenBuildingAdvisor, "Getting Slab-Edge Insulation Right" - 44F floor-edge temp at 25F/70F; concrete R-1 per foot; six-inch path = R-0.5 vs R-19 wall; CZ4 IRC prescribes R-10 at 2 ft depth. https://www.greenbuildingadvisor.com/article/getting-slab-edge-insulation-right
2. GreenBuildingAdvisor, Robby Schwarz (Nov 14, 2025), "Understanding the Energy Code: Slab Insulation Requirements" - 2021 IECC R402.1.3, CZ5 = R-10ci, 4-ft; 2024 IECC changes; builders struggle with slab-edge details. https://www.greenbuildingadvisor.com/article/understanding-the-energy-code-slab-insulation-requirements
3. ASHRAE Standard 90.1 assembly F-factors (Frame Building News reprint of Table A6.3): unheated slab, no insulation F=0.73; 24-in. vertical R-10 F=0.54 Btu/(h-ft-F). https://framebuildingnews.com/wp-content/uploads/2021/08/0410-FN-RT.pdf
4. MDPI Applied Sciences 11(3):931 (2021) - ANN detection of linear thermal bridges from IR images; field validation: precision 89.29%, recall 87.29%, F-score 87.63%. https://www.mdpi.com/2076-3417/11/3/931
5. MDPI Buildings 13(1):109 - RetinaNet + segmentation for automated insulation-defect detection in IR images. https://www.mdpi.com/2075-5309/13/1/109
6. arXiv 2402.02963 - one-class anomaly detection, color-to-thermal AI for envelope inspection; notes PIRT interpretation is artifact-prone (reflections, emissivity, wind). https://arxiv.org/pdf/2402.02963
7. HomeAdvisor 2025 cost data - home energy audit $212-698 (avg $437); infrared imaging ~$200 add-on; blower door ~$350. https://www.homeadvisor.com/cost/energy-efficiency/hire-a-home-energy-auditor/?entry_point_id=42373194
8. NREL FY15OSTI/64737 - slab-on-grade foundation insulation retrofit study: adding 2012 IECC stem-wall insulation cut test-module site energy 24.7% vs uninsulated reference. https://www.nrel.gov/docs/fy15osti/64737.pdf
9. Oregon BCD Technical Bulletin (June 2021) - ORSC slab-on-grade: perimeter insulated R-15, 24 in. minimum; termite-zone exemption. https://www.oregon.gov/bcd/codes-stand/Documents/res-techb-slabedge-insulation.pdf

## Original calculation (methodology)
Model home: 2,000 sq ft slab-on-grade, 40x50 ft footprint, perimeter 180 ft. Climate Zone 5 (Chicago, 6,536 HDD65).
- F-factor uninsulated: 0.73; F-factor with 24-in. vertical R-10: 0.54 (ASHRAE 90.1 Table A6.3).
- Delta-F = 0.19 Btu/(h-ft-F). Annual slab heat flow difference = 0.19 x 180 x 6,536 x 24 = 5,365,000 Btu/yr = 5.37 MMBtu = 53.7 therms.
- At $1.50/therm and 90% furnace efficiency: ~$90/year heating savings.
- Installed cost estimate: 2-in. XPS (R-10) at ~$1.50-2.50/sq ft material; 180 ft x 2 ft = 360 sq ft -> $540-900 material + labor/protective covering -> ~$1,200-2,000 installed during construction.
- Energy-only simple payback: 13-22 years. Conclusion: do not sell slab-edge insulation on energy payback; sell it on comfort (44F floor edge), code compliance (CZ4+), and condensation risk. In CZ1-3 where code requires nothing, it is a comfort upgrade, not an investment.

## Actionable takeaways (for the article)
- Building in CZ4 or colder: slab-edge insulation is code (R-10, 2 ft in CZ4; 4 ft in CZ5 per 2021 IECC). Photograph the foam before backfill; it is the most common envelope detail to be installed wrong and the hardest to verify afterward.
- Buying new in CZ1-3 (TX, FL, AZ): code requires zero slab-edge insulation. Adding 2 ft of R-10 during construction costs ~$1,500 and is the cheapest comfort upgrade on the plans. Retrofitting later costs 5-10x.
- Verification: a $200 infrared add-on to a home energy audit, done with at least a 20F indoor-outdoor delta, shows the slab edge as a glowing line if the insulation is missing. AI classifiers (89% precision in published field tests) now do the interpretation an expert thermographer used to do.
- Watch the termite exemption: in very-heavy termite zones, code exempts slab-edge foam because termites tunnel through it. Do not let a builder cite the exemption outside those zones.

## Strongest counterargument
The honest math is damning on energy alone: ~$90/year savings against ~$1,500 installed is a 15+ year payback, worse than almost any other envelope upgrade. A skeptic is right to ask why this deserves attention over attic air sealing. The answer has to be comfort and compliance, not ROI. Additionally, the AI detection story is mostly research papers, not products: the 89%-precision ANN was a field experiment, and the arXiv authors themselves warn that thermography is artifact-prone (reflections, emissivity, wind). An IR scan done on a mild day or by an untrained operator produces colorful images that mean nothing. And foam at the slab edge is physically vulnerable: UV degradation above grade, damage during backfill, and termite tunneling are real failure modes that insulation alone does not solve.

## Limitations
- The $90/year figure uses Chicago HDD and $1.50/therm; in mild climates or with cheap gas the savings shrink further; with heat pumps and expensive electricity the dollar savings rise but the payback stays long.
- F-factors are steady-state approximations; real slab heat flow is three-dimensional and seasonal (soil thermal mass). The calculation is directional, not a metering result.
- No third-party audit of AI thermal-bridge products was found; the cited accuracies are from peer-reviewed field experiments, not commercial tools with warranties.
- Installation cost is an estimate from material pricing, not a contractor bid survey.
