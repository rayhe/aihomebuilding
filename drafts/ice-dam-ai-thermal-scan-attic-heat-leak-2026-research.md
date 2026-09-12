# Research: Ice Dams, AI Thermal Scans, and the Attic Heat Leak
**Article #835 — Priya Greenwood (Sustainability & Green Building)**
**Started:** 2026-09-12 | **Ship slot:** 2026-12-02 (queue position after #834)

## Kill test
Does this help someone building or buying a home? **Yes.** Anyone who owns or is buying a home in a cold climate faces a $8,000-$12,000 ice dam claim risk every winter. The fix (attic air sealing + insulation, ~$2,000-$3,000) costs less than the deductible on most claims, and fall is the last window to do it before freeze season. The AI angle gives readers a way to *see* the problem before winter: thermal drone scans that find the heat leaks.

## Core thesis
Those pretty icicles are a distress signal. An ice dam means your attic is hemorrhaging heat through air leaks, melting snow on the warm upper roof while the eaves stay frozen. AI-powered thermal imaging (drone + computer vision) can now map exactly where the heat escapes, turning a vague "add insulation" recommendation into a targeted hit list. The economics are lopsided: one avoided claim pays for the fix three to four times over, and the energy savings alone nearly justify it.

## Primary sources (5)
1. **DOE Building America Solution Center (PNNL)** — "Attic Air Sealing, Insulating, and Ventilating for Ice Dam Prevention": ice dams require snow + poorly air-sealed/insulated attic + freezing temps; can form with as little as 2 inches of snow; heat escaping into the attic warms the roof deck underside. https://basc.pnnl.gov/information/attic-air-sealing-insulating-and-ventilating-ice-dam-prevention
2. **University of Minnesota (Seavey et al.)** — "Ice Dam Symptoms and Solutions for a Cold Climate Roof": attic bypass heat leakage quantified via zone pressure diagnostics and blower door testing on a Minneapolis home; inadequate air/vapor barrier between conditioned space and attic is the driver. https://conservancy.umn.edu/server/api/core/bitstreams/45d32107-79c4-4dae-9467-b49cdd392139/content
3. **UMass Amherst Building & Construction Technology** — "Preventing Ice Dams": three requirements (snow, heat to melt, cold to refreeze); upper roof above living space warmed by indoor heat loss while overhangs stay at ambient sub-freezing temps. https://www.umass.edu/bct/publications/articles/preventing-ice-dams/
4. **Zeitview (2023)** — AI-enabled Property Insights Platform with aerial thermal analysis: drones + AI/ML detect rooftop anomalies including moisture and energy loss; commercial/residential/multifamily. http://www.businesswire.com/news/home/20230307005174/en/Zeitview-Expands-Rooftop-Inspection-Capacity-with-AI-Enabled-Software-Platform-and-Aerial-Thermal-Analysis
5. **Nearmap (Feb 2026)** — Nearmap Roof Assessment: AI-powered roof condition evaluation from high-resolution aerial imagery across portfolios; replaces subjective inspections. https://aapnews.aap.com.au/aapreleases/cision20260202AE76612
6. **MDPI / Engineering Proceedings (2026)** — "AI-Enhanced Detection of Thermal Anomalies in Urban Roofs via Drone-Assisted Infrared Thermography": YOLOv9-v12 models detect thermal bridges from UAV infrared imagery; validated workflow for automated building-envelope inspection. https://www.mdpi.com/2673-4591/138/1/15

## Supporting data
- **Insurance Information Institute:** water damage and freezing account for ~22% of all homeowners insurance claims; average claim $4,024 (older III figure).
- **Industry data (2026):** average ice dam claim payment $8,000-$12,000; ice dam claims ~15% of winter-related homeowners claims; homes with proper attic insulation see 70% fewer ice dam incidents; ice-and-water shield prevents 95% of ice dam water intrusion.
- **ConsumerAffairs (2017-2021 data):** average U.S. household water damage/freezing claim $12,514.
- **Repair costs:** emergency ice dam removal $500-$1,500; partial roof repair $1,500-$4,000; interior water damage repair $2,000-$10,000; full roof replacement $8,000-$25,000. Heat cable kits $100-$300 (treat symptom, not cause).
- **EPA / ENERGY STAR:** air sealing + insulating attics saves average 15% on heating and cooling; sealing attic bypasses cuts ~25% of total air infiltration.
- **Attic insulation cost:** ~$1,340 (realtor.com estimate) to ~$3,000 (contractor quote, USA Today 2026); 3-5 year energy payback typical.
- **DOE:** ~90% of American homes are under-insulated. IECC climate zone 5+ recommends R-49 to R-60 attic insulation.
- **NAHB (2020 retrofit guide):** ice dams damage shingles, sheathing, underlayment; repeated leaks reduce wind resistance over time.

## Original contribution: the heat-leak math
Air-leakage heat loss follows Q = 1.08 x CFM x delta-T (BTU/hr). Worked example for the article:
- A 2,000 sq ft colonial with leaky attic bypasses (recessed lights, plumbing stack chases, chimney chase, attic hatch, top-plate gaps) can easily leak 150 CFM of 70F air into a 15F attic (55F delta-T... use realistic winter numbers: indoor 68F, attic 20F, delta-T 48F).
- Q = 1.08 x 150 x 48 = **7,776 BTU/hr** dumped into the attic, 24/7, all winter. That is a 2.3 kW space heater running nonstop in the attic, aimed at the roof deck.
- Over a 4,000-hour heating season: 31 MMBtu, roughly $400-$700 in wasted heat alone (at $1.20-$2.00/therm equivalent), before counting a single drip of water damage.
- Sealing the top 8-10 bypasses with cans of foam and caulk (~$60 in materials, or ~$800-$1,500 pro) cuts that bypass flow by 60-80%.

Payback framing (the novel bit): price it as insurance, not energy. $2,500 air-seal-and-insulate job vs. $8,000-$12,000 average claim vs. $1,000-$2,500 deductible. One avoided claim in 20 years = 3-5x return. Energy savings ($300-$450/yr) make it cash-positive regardless.

## AI angle (genuine, not bolted on)
- Thermal drone + computer vision (Zeitview, Nearmap Feb 2026 launch, academic YOLO-on-UAV-thermal work) maps roof-deck thermal anomalies: the warm stripes over bypasses show up as bright thermal bridges on an IR overflight.
- Practical reader version: a $300-$500 drone thermal scan (or a $50 FLIR ONE phone attachment + a cold morning) finds the exact bypasses before snow falls. The article should be honest that residential drone thermal is still mostly commercial/portfolio-grade, but the phone-attachment version is in reach.
- Insurer angle: carriers already use aerial AI for roof condition (underwriting); ice dam risk scoring from thermal + snow-load data is the logical next step, which means the scan that saves your deductible may soon be the scan your insurer requires.

## Limitations (for the article's honest accounting)
- Climate-bound: irrelevant in IECC zones 1-3 (no sustained sub-freezing temps + snow). Roughly the northern tier + mountain states.
- The heat-loss math uses assumed bypass CFM; real values need a blower door test ($300-$500). Stated as illustrative, with the formula shown so readers can plug in their own numbers.
- AI thermal scan claims are vendor-reported; no independent head-to-head accuracy study of residential thermal-drone ice-dam prediction was found.
- Ice-and-water shield (95% intrusion prevention) only helps if installed; retrofitting it requires re-roofing.
- Ventilation matters too: air sealing without maintaining soffit-to-ridge ventilation can trap moisture. The fix is seal + insulate + ventilate, in that order.

## Strongest counterargument
Heat cables ($100-$300) and a $40 roof rake solve the symptom for 5% of the cost, and plenty of old houses with ice dams never leak because they have ice-and-water shield or steep pitches that shed snow. The air-sealing case also assumes the homeowner stays put long enough to amortize; for a seller listing in spring, the rational move may be the rake, not the $2,500 attic job. The article must concede: prevention beats cure, but the cure aisle exists for a reason.

## Headline options
1. "Those Pretty Icicles Are a $9,600 Warning. A Drone Saw the Heat Leak in August."
2. "Your Attic Is Running a 2.3 kW Heater Aimed at Your Roof. Winter Will Send the Bill."
3. "Your Roof Will Grow Icicles This Winter. The AI Saw the Heat Leak in August."

## Structure
1. Cold open: February, the drip inside the wall, the $9,600 claim.
2. The physics in 200 words: three ingredients, the warm roof/cold eave split (UMass, DOE).
3. The math: 7,776 BTU/hr, the 2.3 kW attic heater nobody installed on purpose.
4. The AI: thermal drones + computer vision mapping bypasses (Zeitview, Nearmap, YOLO study); the $50 phone version.
5. The fix, priced three ways: DIY foam ($60), pro air-seal ($800-$1,500), full air-seal + R-49 ($2,000-$3,000); heat cables as the honest cheap alternative.
6. The skepticism/counterargument: roof rake, ice-and-water shield, steep roofs, seller math.
7. Limitations box. Actionable takeaways: blower door test first, seal before you insulate, scan in fall.
