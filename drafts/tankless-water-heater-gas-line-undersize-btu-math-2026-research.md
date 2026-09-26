# Research: Tankless Water Heater Gas Line Undersize (Article #971)

**Slug:** tankless-water-heater-gas-line-undersize-btu-math-2026
**Journalist:** Jake Kowalski (construction tech, tools)
**Date:** September 26, 2026

## Angle
A 50-gallon tank water heater burns ~40,000 BTU/hr. A whole-house tankless unit burns 199,000 BTU/hr, roughly 5x. The gas pipe in the wall was sized for the old load. Most tankless swap quotes never run the gas-pipe sizing math from IFGC Table 402.4(2), so homeowners discover mid-install that they need a main upsized from 1" to 1-1/4", typically $900-$1,600. The AI angle: Honolulu made AI plan review (CivCheck) mandatory for residential alterations Sept 1, 2026; Toronto's pilot cut time-to-decision 55%; Denver signed a $4.6M contract. Automated review encodes exactly this table math. Homeowners can run it themselves in 10 minutes.

## Kill test
Does this help someone building or buying a home? YES. Anyone quoted $3,500 for a tankless swap needs the gas-load arithmetic before signing. A 10-minute table lookup avoids a four-figure surprise or a burner starved of gas on the coldest night of the year.

## Original contribution (worked math, IFGC Table 402.4(2) / IRC G2413.4(1))
Table: natural gas, Schedule 40 metallic pipe, <2 psi inlet, 0.5" w.c. pressure drop, sp. gr. 0.60. Capacity in CFH. Conversion used: 1,100 BTU = 1 CFH (City of Greenfield handout).

Archetype home: furnace 80,000 + tank WH 40,000 + range 65,000 + dryer 35,000 = 220,000 BTU/hr = 200 CFH.
Existing main: 1" Sch 40, meter to farthest outlet 50 ft. Table: 1" at 50 ft = 284 CFH. 200 < 284, adequate.

Swap tank for 199,000 BTU tankless: new total 379,000 BTU/hr = 345 CFH. 1" at 50 ft carries 284 CFH. Shortfall: 61 CFH = ~67,000 BTU/hr, ~18% undersized.

Dedicated-branch check for the tankless alone on a 30 ft branch: 199,000 / 1,100 = 181 CFH. 3/4" at 30 ft = 199 CFH (adequate, zero headroom). 1" at 30 ft = 374 CFH (comfortable).

Fix: upsize main to 1-1/4" (528 CFH at 60 ft). Cost at $15-$25/linear ft (Angi 2026): 50 ft = $750-$1,250 + permit $100-$300 = roughly $900-$1,600.

Gotcha: fittings add equivalent length. A 1" 90-degree elbow counts as ~2.62 ft of straight pipe (2009 Virginia Residential Code App. A, Table A.2.2). Six elbows turn a 50 ft run into ~66 ft effective length; the code says to round up to the next table row (80 ft), which drops 1" capacity to 220 CFH. At that point even the old 200 CFH load was at 91% of capacity, and the tankless swap fails by 125 CFH.

## Primary sources
1. IFGC Table 402.4(2) / IRC Table G2413.4(1), natural gas Schedule 40 sizing table (0.5" w.c. drop): 1" at 40 ft = 320 CFH; 50 ft = 284 CFH; 60 ft = 257 CFH; 100 ft = 195 CFH; 1-1/4" at 60 ft = 528 CFH. https://www.iccsafe.org/wp-content/uploads/membership_councils/4531S09_CodeNotes.pdf
2. Rheem gas piping facts worked example: 199,900 BTU tankless requires 1" pipe for a 20 ft branch (0.3" w.c. drop table); trunk must be sized on total connected load; fittings' equivalent length must be added. https://resource.gemaire.com/is/content/Watscocom/Gemaire/rheem_606392_article_1404816218763_en_cl2.pdf
3. IBC 199,000 BTU/hr condensing tankless installation manual: inlet gas pressure must be 4.0"-14.0" w.c.; max pipe lengths (1" w.c. drop): 1/2" = 10 ft, 3/4" = 40 ft, 1" = 150 ft; verify pressure with a manometer through the unit's full modulation range; retrofit regulator caution. https://manualspro.net/284086-ibc-199000-btu-hr-high-efficiency-condensing-tankless-water-heater-instruction-manual
4. City of Greenfield (CA) gas pipe calculation handout: 1,100 BTU = 1 CFH conversion; worked sizing procedure. https://ci.greenfield.ca.us/DocumentCenter/View/1756/Gas-Pipe-Calculation-Handout-PDF
5. U.S. DOE (via Len The Plumber): tankless 24-34% more efficient than storage for homes using <=41 gal/day; 8-14% at ~86 gal/day; up to 50% for point-of-use. https://lentheplumber.com/blog/summer-savings-tankless-water-heater/
6. ENERGY STAR (via Dierolf Plumbing): certified gas tankless saves a family of four ~$95/year, ~$1,800 lifetime vs. standard gas storage; ~20-year typical life. https://dscwater.com/articles/tankless-water-heater-vs-traditional-2026-southeastern-pennsylvania-homeowners-comparison/
7. DOE (via Contradia): gas tankless saves ~$100/yr; electric tankless ~$44/yr. https://contradia.com/article/699344-tankless-vs-tank-water-heaters-and-which.html
8. Angi 2026 cost data: gas line work $15-$25/linear ft; national average $598; most projects $271-$936; plumber labor $45-$150/hr. https://www.angi.com/articles/average-gas-line-repair-and-installation-costs.htm?cid=blogDGDYI1&entry_point_id=33797117
9. HomeAdvisor 2025: gas line installation $272-$936, avg $598; permit fees $100-$300. https://www.homeadvisor.com/cost/plumbing/install-or-repair-gas-pipes/?entry_point_id=42373194
10. CivCheck/Clariti AI plan review: Honolulu DPP mandatory for eligible residential projects (incl. alterations) Sept 1, 2026; Toronto pilot cut time-to-permit-decision 55% for residential (Q1 2026); Denver approved 5-year $4.6M contract. https://www.prnewswire.com/news-releases/city-of-toronto-launches-ai-pre-check-with-clariti-to-speed-up-housing-approvals-302863114.html ; https://www.govtech.com/artificial-intelligence/honolulu-is-among-cities-bringing-ai-to-planning-permitting ; https://www.pymnts.com/news/artificial-intelligence/2026/ai-tackles-paperwork-problem-blocking-america-housing-permits/

## Skepticism / counterarguments (full strength)
- Many homes are fine: newer construction often runs 1-1/4" mains; short meter-to-appliance runs keep 1" adequate. The problem concentrates in retrofits of 1960s-1990s homes with 1" or 3/4" mains and long runs.
- The efficiency story is thinner than marketing: DOE's 24-34% applies at <=41 gal/day; heavy-use households see 8-14%. ~$100/yr savings against a $1,500-$2,500 install premium plus ~$1,200 gas upsize = 27-37 year payback, longer than the unit's ~20-year life.
- Electric heat-pump water heaters (UEF 3.5+) sidestep the gas question entirely where panel capacity exists.
- Condensing tankless units add hidden costs: condensate drain, 120V outlet, annual descaling in hard-water areas.
- No survey data on how often installers skip the sizing calc; the claim rests on contractor-forum anecdotes and the absence of the calc on typical quotes. Labeled as such.

## Limitations
- Table values assume 0.5" w.c. drop, <2 psi, 0.60 specific gravity; propane tables differ; CSST tables differ from black iron.
- 1,100 BTU/cf is a typical heating value; actual utility gas varies ~1,000-1,100 BTU/cf and derates with altitude.
- Costs are national averages (Angi 9,232 projects; HomeAdvisor 2025); local labor varies widely.
- CivCheck-style tools check submission completeness and scoped code items; the gas-load calc is the kind of deterministic check they encode, but no vendor was found advertising per-appliance gas-pipe sizing as a shipped feature. Framed as "the math these systems are built to run," not as a claimed feature.
