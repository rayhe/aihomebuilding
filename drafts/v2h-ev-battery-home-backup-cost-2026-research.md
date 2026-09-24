# Research: Vehicle-to-home (V2H) bidirectional charging as a home-building decision
## Article #962 — Priya Greenwood

### Thesis
An EV parked in the garage is a 60–200 kWh battery that homeowners already paid for. Bidirectional chargers now let it back up the house and arbitrage time-of-use rates. Nature Energy (2025) found V2H cuts lifetime charging costs 40–90% (median $3,800 electricity savings over the vehicle lifetime) and household electricity GHG 70–250%. But the retrofit costs $4,800–$11,000 installed, one Cybertruck owner was quoted $30,000, and the federal 30C residential credit window closed mid-2026. The payback arithmetic only works if you make the decision at rough-in: pre-wiring for V2H during construction (conduit, critical-loads subpanel, gateway location) costs a few hundred dollars and turns a marginal retrofit into a sound investment.

### Kill test
Does this help someone building or buying a home? Yes. A homeowner building or remodeling can spend a few hundred dollars at rough-in to pre-wire for bidirectional charging instead of paying thousands for a retrofit later. An EV buyer can compare the $7,200 GM bundle / $4,000 Tesla hardware against a $9,000–$18,000 Powerwall or $10,000–$25,000 generator. A utility-bill payer on a time-of-use rate learns exactly what the Nature Energy $3,800 median savings figure does and does not include.

### Novelty check
Corpus search 2026-09-24 (339 published + 221 queued): no article covers V2H, V2G, or bidirectional charging specifically. `ai-home-battery-tou-arbitrage-nem3-payback-2026` covers home-battery TOU arbitrage (no EVs); `sb-913-home-battery-resource-adequacy-vpp` and `vpp-home-battery-ai-optimization-asymmetry` cover virtual power plants (no V2H). This is original to the corpus.

### Primary sources (7)
1. **Chen, Keoleian & Vaishnav, "Vehicle-to-home charging can cut costs and emissions," Nature Energy 10, 1400–1401 (2025), doi:10.1038/s41560-025-01899-2** — Simulates 6,480 vehicles across 432 continental-US regions using NREL Cambium and ResStock datasets. Findings: V2H reduces lifetime charging costs 40–90% vs uncontrolled charging; median household saves $3,800 in electricity costs over the vehicle lifetime; GHG from household electricity use falls 70–250% (median 38 t CO2e), enough to more than offset charging emissions in regions covering 60% of the US population. Policy messages: pair V2H with building-code updates and an upskilled retrofit workforce. KEY CAVEAT, stated by the authors: "We assume that adding V2H capability to an EV owner's home is costless; so, in fact, our estimates represent the most a household can save." The $3,800 is an upper bound before install cost.
2. **DOE Vehicle-Grid Integration Assessment Report, January 2025 (energy.gov)** — NREL degradation case study: two 16 kWh graphite/NMC PHEV packs cycled around the clock with drive cycles plus V2G discharge to isolate added degradation from bidirectional use. Confirms degradation drivers: temperature, depth of discharge, state of charge, C-rate, chemistry, energy throughput. Framework for the skepticism section: extra cycling is real and chemistry-dependent.
3. **GM Energy official product pages (gmenergy.gm.com, live pricing Sept 2026)** — V2H Bundle $7,198 promotional ($8,998 list): PowerShift Charger + V2H Enablement Kit (Home Hub, inverter, dark start battery), bidirectional Level 2. Enablement kit alone $5,599 promo ($6,999 list). Prices exclude installation and taxes. GM refers installs to preferred providers (Qmerit).
4. **Electrek, Sept 10, 2026: "Tesla Cybertruck Powershare finally backs up homes with a Powerwall 3"** — Combined system gives 3+ days backup; Tesla's math: 123 kWh truck pack ≈ nine 13.5 kWh Powerwalls. Powershare delivers up to 11.5 kW; requires Universal Wall Connector + Powershare Gateway, hardware ~$4,000 installed. Quote variance is extreme: one owner quoted over $30,000, others under $5,000.
5. **pv magazine USA, Oct 2022 and Oct 2024** — PG&E secured CPUC approval for the nation's first V2G export compensation rate (commercial EVs); 2024 PG&E launched a residential/commercial bidirectional charging pilot at dynamic hourly rates; California requires large utilities and CCAs to offer dynamic hourly rates to all customers by end of 2027. Establishes that export compensation is moving from nonexistent to real, and that V2G income promises need utility programs in writing.
6. **evchargeright.com, "Bidirectional EV Chargers & V2H: What Your Home Actually Needs (2026)"** — 2026 cost tiers: bidirectional charger $3,000–$6,500; automatic transfer switch or critical-loads subpanel $800–$2,000; electrician labor and permit $1,000–$2,500; optional panel upgrade $2,000–$4,500; typical all-in $4,800–$11,000. 200-amp service usually suffices. 30C federal credit expired June 30, 2026 per installer reporting. Pure V2H (no grid export) is permitted like a backup generator; V2G needs interconnection agreement, utility-approved inverter list, often an export meter (weeks-to-months timeline).
7. **Electrek / Medium (Eos), 2026** — Ford F-150 Lightning: up to 9.6 kW home output; Charge Station Pro + Home Integration System hardware ~$5,000 + install. V2H vs alternatives: V2H $4,000–$15,000 installed; Powerwall 3 $9,000–$18,000; standby generator $10,000–$25,000 plus fuel. V2H's structural weakness: the car must be plugged in at home during the outage.

### Numbers to use (all sourced)
- Median lifetime electricity savings from V2H: $3,800 (Nature Energy; upper bound, assumes free install)
- Lifetime charging-cost reduction: 40–90%
- Household electricity GHG reduction: 70–250%; median 38 t CO2e
- Cybertruck pack: 123 kWh ≈ 9 × 13.5 kWh Powerwalls; 11.5 kW output; 3+ days backup
- Ford Lightning: 9.6 kW home output
- GM bundle: $7,198 promo ($8,998 list); kit alone $5,599 ($6,999 list)
- Tesla hardware: ~$4,000; install quotes observed $5,000–$30,000
- Typical all-in V2H install: $4,800–$11,000
- Alternatives: Powerwall 3 $9,000–$18,000; generator $10,000–$25,000
- CA dynamic hourly rates required statewide by end of 2027

### Skepticism angles (for "The other side")
- The Nature Energy $3,800 assumes zero install cost; subtract a $4,800–$11,000 install and the pure-arbitrage payback is 10+ years or never on TOU savings alone.
- Extra cycling degrades the battery; magnitude is chemistry- and duty-dependent (DOE/NREL study), and EV warranties were not written with V2H throughput in mind — check warranty fine print.
- The car must be home and plugged in during the outage; commuters lose backup during workday PSPS events.
- Install-quote variance ($5,000 vs $30,000) signals an immature contractor market; panel upgrades and conduit runs dominate.
- V2G income is not V2H backup: export requires interconnection agreements and approved equipment; salespeople promising income need utility program documents.
- 30C residential credit window closed mid-2026; remaining incentives are state/utility specific.
- The car sits idle ~95% of the time, but outage value depends on the home's critical loads being on a separate subpanel — without that, a V2H system backs up nothing.

### Original contribution
The rough-in arbitrage: the install cost is dominated by labor, transfer-switch, and subpanel work — items that cost a few hundred dollars when specified during construction (2-inch conduit from garage to panel, a designated critical-loads subpanel, gateway mounting location, 200-amp service) and thousands as a retrofit. The decision to make V2H pencil out is not a purchase decision; it is a construction-timing decision. Combined with the Nature Energy upper-bound savings figure and the quote-variance evidence, this reframes V2H from "cool EV feature" to "a line item in your electrical scope."
