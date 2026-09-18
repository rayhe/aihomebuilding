# Research Notes: Roof-to-Cistern — Why Rainwater Harvesting Is a Storage Problem, Not a Collection Problem

**Slug:** ai-rainwater-harvesting-roof-cistern-sizing-2026
**Journalist:** Priya Greenwood
**Article #:** 890

## Kill test
Does this help someone building or buying a home? Yes. New construction is the cheapest moment to add rainwater plumbing: gutters are already going up, trenching is open, and a cistern can be sited before landscaping. A buyer evaluating a home in a drought-prone state can use the sizing math below to judge whether an installed system is a real asset or a decorative tank. A remodeler can learn that retrofitting collection is cheap, but the storage tank is the entire decision.

## Core numbers (all sourced, all checkable)

**Collection formula (Texas Water Development Board, via Texas Water Newsroom):**
Gallons = Rainfall (inches) x Roof Area (sq ft) x 0.623
- 1 inch of rain on 1,000 sq ft of roof = ~623 gallons.
- A 2,000 sq ft roof in San Antonio yields ~30,000 gallons/year of runoff.

**Demand (EPA WaterSense):**
- Average American family: 300+ gallons/day at home; 30% outdoors nationally, up to 60% in arid regions.
- Average American home uses ~50,500 gallons outdoors per year, mostly irrigation (DeOreo et al., 2016, via EPA).
- Up to 50% of irrigation water is lost to wind, evaporation, and runoff from inefficient systems.
- Landscape irrigation nationally: nearly 9 billion gallons/day.

**The mismatch (original contribution):**
A 2,000 sq ft San Antonio roof collects ~30,000 gallons/year. The average home uses ~50,500 gallons/year outdoors. So the roof could theoretically cover ~60% of outdoor demand. But rain arrives in storms and demand peaks in dry months. The binding constraint is storage, not collection. A 500-gallon tank fills in a single good storm off a 2,000 sq ft roof (4 inches in San Antonio's rainiest month = 2,000 x 4 x 0.623 = ~4,984 gallons in a month, or about 1,246 gallons per inch per event) and then overflows while the lawn dies in August. Tank sizing is the engineering problem; collection is trivial.

**Colorado legal cap vs. the math (original contribution):**
Colorado HB16-1005 (2016) allows two 55-gallon barrels = 110 gallons total, outdoor use only. One inch of rain on a 2,000 sq ft roof produces ~1,246 gallons. The legal limit captures less than one-tenth of a single moderate storm's worth. Colorado was the only state with an outright residential ban before 2016; a Colorado State University Stormwater Center study found rain barrels have no quantifiable effect on the water cycle ("the water is going to be infiltrated or evaporated. The only difference is the timing, a day, maybe two"), defusing the prior-appropriation objection that killed the bill for years.

**Costs (sourced):**
- Simple barrel system: ~$2,249 total in a Bellingham, WA city demonstration (~$321/tank average for 275-gallon HDPE tanks; gravity-fed, no treatment).
- Large corrugated steel tanks: 9,500-gallon steel tank listed at $9,200; 31,000-gallon at $25,385.71 (tank-depot, 2026 listings).
- Rebates: San Diego County's Watershed Rebate Program pays on rain-harvest capacity (container must hold runoff from a 110 sq ft area in a 0.75-inch storm = 471 gallons for a 1,000 sq ft roof... formula verified in their 09/2025 calculation guide).

**ROI math (methodology shown, price assumptions flagged):**
Worked example: 2,000 sq ft roof, San Antonio (30,000 gal/yr collected, minus ~10-15% first-flush/filter losses = ~26,000 gal usable).
- At $6/CCF ($0.008/gal): 26,000 x $0.008 = ~$208/year offset.
- At $10/CCF ($0.0134/gal): ~$348/year.
- A $2,500 gravity barrel system pays back in 7-12 years on water savings alone at Western municipal rates; a $9,200 9,500-gallon tank + pump + filtration ($12-15K installed) pays back in 30+ years on water alone.
- Honest conclusion: at current municipal water prices, cisterns rarely pencil out on bill savings alone. They pencil out on: drought resilience (watering during restrictions), stormwater fee avoidance where cities charge them, new-construction marginal cost (trenching already open), and well-water households (Colorado's unlimited-collection carve-out exists precisely for well users). This is the article's honest punchline, not a sales pitch.

**Regulatory patchwork (sourced):**
- California: AB-1750 Rainwater Capture Act (2012) legalized residential collection; California Plumbing Code Chapter 16 (1602.0) governs nonpotable rainwater catchment systems (toilets, urinals, irrigation, cooling tower makeup); SB-558 (2018) excluded rainwater capture systems from new-construction property tax reassessment.
- Colorado: HB16-1005 (2016), 110-gallon cap, outdoor use only; well-supplied properties exempt from the cap (unlimited roof collection, indoor + outdoor).
- Arizona: state income tax credit for rainwater harvesting systems (DOE/OSTI state regulation summary).
- ARCSA/ASPE 63 is the design standard referenced by the California Plumbing Code.
- DOE FEMP maintains a free Rainwater Harvesting Calculator with historic precipitation data for sizing; the Alternative Water Supply Tool maps state-by-state regulations.
- STEP (Sustainable Technologies Evaluation Program, Toronto) has an Excel-based residential design and costing tool verified against monitoring data, with sizing criteria including "supply for N days without rain."

**AI angle:**
- The DOE FEMP calculator + satellite roof-area measurement means a homeowner can size a system in minutes: address in, roof outline from aerial imagery, historic rainfall from NOAA, and the tool outputs monthly collection curves. This is what the article's worked math mirrors.
- Smart controllers (irrigation controllers that switch between cistern and municipal based on tank level + forecast) close the storage-timing loop; EPA notes WaterSense irrigation controllers alone cut irrigation use up to 30% (~15,000 gal/yr average home).
- The gap: no mainstream quoting tool does demand-matched sizing (collection curve vs. irrigation demand curve); installers still size by rule of thumb ("get the biggest tank that fits"). That is the opening for AI quoting tools.

**Counterargument (full strength):**
Municipal water is absurdly cheap relative to storage. A 5,000-gallon tank costs thousands and stores ~$40-70 of water. Tanks are large, ugly, and need maintenance: first-flush diverters clog, screens tear, mosquitoes breed in stagnant water, and freeze protection matters in cold climates. In humid regions with cheap water and no drought risk, rainwater harvesting is a hobby, not an investment. And the strongest version: the greenest water intervention for most homes is not a cistern but replacing turf with native plantings (EPA: established natives need little water beyond rainfall) plus a WaterSense irrigation controller — cheaper, no tank, no maintenance.

**Limitations:**
- Collection formula assumes ~100% capture; real systems lose 10-25% to first-flush diversion, filter losses, evaporation, and overflow during intense storms. I apply a 15% haircut in the worked math and say so.
- Water price assumptions ($6-10/CCF) are illustrative ranges for Western municipal utilities, not a specific utility's tariff; the article will present the math as a sensitivity table, not a promise.
- Installation costs are list prices for tanks, not turnkey installed costs, which vary wildly by site; pump, filtration, trenching, and permits can double equipment cost.
- No third-party audit of residential cistern payback claims exists; the payback ranges are my calculation from sourced inputs.

**Sources (primary):**
1. Texas Water Newsroom / Texas Water Development Board — high-volume residential system design guide (collection formula, San Antonio worked example, TWDB sizing calculator): https://texaswaternewsroom.org/articles/how_to_build_a_high-volume_residential_rainwater_harvesting_system.html
2. U.S. DOE Energy.gov / FEMP — Rainwater Harvesting Calculator + state regulation mapping tool: https://www.energy.gov/cmei/femp/articles/rainwater-harvesting-calculator
3. EPA WaterSense — How We Use Water / Statistics and Facts (30% outdoor, 50,500 gal/yr outdoor, 50% irrigation waste, 15,000 gal controller savings): http://www.epa.gov/watersense/how-we-use-water and http://www.epa.gov/watersense/statistics-and-facts
4. OSTI/DOE — Alternative Water Supply state regulation summary (Colorado 110-gal, California, Arizona tax credit): https://www.osti.gov/servlets/purl/1530432
5. Colorado State University — Stormwater Center study on rain barrels and water cycle (via source.colostate.edu): https://source.colostate.edu/extension-offers-fact-sheet-on-how-to-harvest-rainwater-under-new-colorado-rules/
6. San Diego County Watershed Protection Program — Rain Harvesting Calculation Guide 09/2025 (formula + rebate sizing): https://www.sandiegocounty.gov/content/dam/sdc/dpw/WATERSHED_PROTECTION_PROGRAM/WatershedRebates/WRP/PDF/RWH_Calculation_Guide.pdf
7. California AB-1750 / CPC Chapter 16 / SB-558 — via Pioneer Water Tanks legal summary (primary statute references): https://pioneerwatertanksamerica.com/is-it-illegal-to-collect-rainwater-in-your-state/
8. STEP — Rainwater Harvesting Design and Costing Tool (verified against monitoring data): https://sustainabletechnologies.ca/home/urban-runoff-green-infrastructure/low-impact-development/rainwater-harvesting/rainwater-harvesting-design-and-costing-tool/
9. City of Bellingham rainwater harvesting booklet — demonstration system costs ($2,249, $321/tank): https://cob.org/wp-content/uploads/rainwater-harvesting-booklet.pdf
10. Tank-Depot listings — 9,500-gal ($9,200) and 31,000-gal ($25,385.71) corrugated steel tanks: https://www.tank-depot.com/contain-water-systems-9500-gallon-corrugated-steel-rainwater-harvesting-tank-with-dome-roof-cw-1502d-r

**Headline candidate:** "Your Roof Catches 30,000 Gallons a Year. Your Tank Holds 500. That Is the Entire Problem."
