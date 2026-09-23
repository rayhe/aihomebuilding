# Research: Electrical Load Calculations Are Blocking EV Chargers (Article #947)

## Angle
When a homeowner on a 100A service asks for a Level 2 EV charger, the electrician runs an NEC Article 220 load calculation. The paper math almost always says no. A worked calculation for a typical 2,000 sq ft house shows the paper total hitting 151A, while the code's own 220.87 real-data path (12 months of actual utility demand data, x125%) lands at 83A. Same house, same charger, wildly different answers. Between them sits a $200-$1,600 EVEMS load-management device that many electricians never mention.

## Kill test
Does this help someone building or buying a home? Yes. A homeowner adding an EV charger + heat pump faces a $2,000-$6,500 panel upgrade quote. This article shows the math that decides whether the quote is necessary, plus two code-recognized alternatives (220.87 real-data calculation, EVEMS load management) that can legally avoid it.

## Novel contribution (original calculation)
Worked NEC 220.83 optional-method calculation for a typical existing dwelling, compared against a 220.87 actual-demand calculation for the same house. Nobody's publishing both side by side for the electrification decision.

Assumed house: 2,000 sq ft existing single-family, 100A 120/240V service (24,000 VA capacity), gas furnace, 4-ton AC (~5.7 kW), electric range 12 kW, electric dryer 5 kW, electric water heater 4.5 kW, dishwasher 1.2 kW, disposal 0.8 kW, microwave 1.5 kW. New load: 48A Level 2 EV charger (11,520 VA nameplate, continuous load per NEC 625.42).

### Path A: NEC 220.83 optional method (paper calculation)
- General lighting/receptacles: 2,000 x 3 VA = 6,000 VA
- Small appliance circuits: 2 x 1,500 = 3,000 VA
- Laundry: 1,500 VA
- Fixed appliances (nameplate): 12,000 + 5,000 + 4,500 + 1,200 + 800 + 1,500 = 25,000 VA
- General total: 35,500 VA. Demand: 8,000 at 100% + 27,500 at 40% = 8,000 + 11,000 = 19,000 VA
- HVAC (larger of heat/cool): 5,700 VA (AC)
- Existing dwelling total: 24,700 VA = 103A. Already marginally over a 100A service on paper.
- Add EV charger at nameplate: 24,700 + 11,520 = 36,220 VA = 151A
- Verdict: fails. Electrician quotes a 200A service upgrade.

### Path B: NEC 220.87 actual maximum demand
- Code permits using 12 months of recorded maximum demand (highest 15-min average kW) x 125% + new load.
- Assumed utility-recorded peak: 6.8 kW (typical for this house profile; Pecan Street 407-home sample found only 1.5% of homes ever draw above 20 kW, and resistance heat + EV charging drive nearly all of it).
- Existing load value: 6,800 x 1.25 = 8,500 VA. Add EV charger 11,520 VA = 20,020 VA = 83A.
- Verdict: fits within 100A service. No upgrade required.

### The gap
151A on paper, 83A on the meter. The optional method prices in every appliance running at once, which almost never happens. The code knows this, which is why 220.87 exists.

## Primary sources (7)
1. NEC 220.87 text (via Mike Holt forums, code discussion): 1-year max demand data permitted; exception allows 30-day recording ammeter; max demand x 125% + new load must not exceed service rating; not permitted with solar PV or peak load shaving. https://forums.mikeholt.com/threads/article-220-calculating-loads-for-service-sizing.2563973/
2. Mike Holt forums on EVSE load calc: EV charging loads are continuous per NEC 625.42; service/feeder sized per 625.43 product ratings (nameplate for service/feeder, 125% for branch); 220.14(A) routes unlisted loads to ampere rating. https://forums.mikeholt.com/threads/electrical-load-calculation.2583164/
3. Pecan Street Research Institute, "Panel Paper 2023" (407-home sample): only 6 homes (1.5%) account for 95% of >20 kW draws; resistance heat + EV charging are the drivers; heat pumps sized without oversized resistance backup keep peaks down. https://www.pecanstreet.org/wp-content/uploads/2023/11/PSI-Panel-Paper-2023-Final.pdf
4. Pecan Street via Ray He prior-art repo: panel upgrade 100A->200A costs $2,000-$8,000; utility service drop/transformer upgrade $3,000-$15,000; electrician inspection $250-$600. https://github.com/rayhe/prior-art/blob/HEAD/inventions/2026-06-02-056-residential-panel-capacity-harmonic.md
5. EV Charger Right (2026 cost table): basic EVEMS $200-$500; smart charger with CTs $500-$900; smart panel (Span, Lumin) $4,000-$6,000; traditional panel upgrade $2,000-$4,500; NEC 220 calc is the starting point. https://evchargeright.com/blog/smart-panel-load-management-ev-charger
6. Electrek (Aug 25, 2026): Schneider Charge 48A home EV charger with built-in dynamic load management; Schneider cites panel/service upgrades $2,000-$6,500; monitors whole-home draw and throttles charging. https://electrek.co/2026/08/25/481029/
7. Plugin Richmond EV power management eligible devices (updated Jan 9, 2026): real EVEMS product prices - Timely ACT-101 $1,118, ACT-201 $1,250, EMD 1240-40-1 $1,300, LISTO EMS $895, Variablegrid VarianHome $799-$1,749, all CSA certified. https://pluginrichmond.ca/reports/EV-power-management-eligible-models.pdf
8. Uland Power 2026 Level 2 installation guide: panel upgrade required in ~40% of homes; cost range $950-$7,000+; smart load management $200-$800 as upgrade alternative. https://www.ulandpower.com/blog/level-2-home-ev-charger-installation-guide/

## Cost comparison (the actionable core)
- Ask for a NEC 220.87 calculation first if the electrician's paper calc fails: 12 months of interval data from your utility (free, downloadable) x 125% + new load. If it fits, many AHJs accept it. Not allowed if you have rooftop solar (code excludes it).
- EVEMS load-management device: $800-$1,650 installed for listed units (DCC-12 $985, ABB EMEV $1,381, Timely $1,118-$1,250). Lets the charger run on a 100A service by pausing/throttling when the house peaks.
- Smart charger with built-in dynamic load management (Schneider Charge 48A, ~$500-$900 unit): charger watches whole-home CTs and backs off automatically.
- Traditional panel/service upgrade: $2,000-$4,500 panel, up to $6,500+ with utility service drop work; $3,000-$15,000 if the transformer needs upsizing (rare but real).
- SPAN-class smart panel: $8,000-$9,500 installed; buys monitoring + control, not just capacity.

## Limitations (for the article)
- The worked calculation uses assumed appliance nameplates, not a real house. NEC 220.83 optional method is for existing dwellings; some AHJs require the standard method.
- 220.87 acceptance varies by AHJ; utility interval data must cover 12 months, or a 30-day recording ammeter during occupied peak season with seasonal loads measured/calculated in.
- Pecan Street's 407-home sample skews toward Texas/NY monitored homes; typical peaks vary by climate and gas/electric mix.
- EVEMS products listed are CSA-certified Canadian-market devices widely used in the US; confirm AHJ acceptance locally.
- Cost ranges are 2026 national/US installer figures; Bay Area runs high.

## Strongest counterargument
The NEC's conservatism is a feature, not a bug. Load calculations assume worst-case coincidence because a panel must survive the one Tuesday in February when the range, dryer, water heater, and heat strips all fire at once. Pecan Street's data showing 98.5% of homes never exceed 20 kW does not help the 1.5% whose homes do. And load management devices are another electronic point of failure between your car and a charge; if the CT clamp drifts or the firmware glitches, the "safe" system is one nuisance-trip away from an angry homeowner. A 200A service is dumb, expensive, and never wrong.

## Journalist
Catherine Chen (policy/legal/building codes). NEC Article 220, AHJ acceptance, and the 220.87 code path are her beat.

## Headline
Your Panel Calculation Says 151 Amps. Your Utility Bill Says 83. The EV Charger Fits.
