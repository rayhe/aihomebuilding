# Research Notes: AI Battery Sizing Calculator Residential Backup Gap

## Angle
AI-powered home battery sizing calculators (Tesla, Enphase, Span, Sol-Ark, and online tools) consistently underestimate actual backup needs for residential homeowners. The 38% average sizing error means the homeowner who buys one Powerwall based on the calculator often needs two. The math behind the gap: calculators use average daily consumption, not peak demand; they ignore startup surges that can be 3-5x running load; they don't account for seasonal variation; and they conflate "usable capacity" with "rated capacity."

## Key Data Points

### Sizing Errors
- 38% average sizing error common with generic calculator estimates (2026 Solar+Storage Sizing Guide, jolban.com, citing NREL research)
- 22% overestimation of backup runtime when ignoring usable capacity vs rated capacity (same source)
- Using 1-2 months of bills instead of 12 months leads to wrong battery size (NREL 2026 analysis per delbou.com)
- Phoenix example: winter bills showed 900 kWh/mo, summer jumped to 1,800 kWh — homeowner undersized from 18 kWh needed to 10 kWh bought

### Battery Specs
- Tesla Powerwall 3: 13.5 kWh usable capacity, 11.5 kW continuous output
- LFP batteries allow 100% DoD with 6,000+ cycles
- Older lead-acid limits DoD to ~50%, 500-1,000 cycles
- Round-trip efficiency losses: 5-15%
- Cold weather reduces output further

### Load Realities
- Average US household: 30 kWh/day
- DOE recommends: identify critical loads, target ~12 kWh/day baseline
- HVAC startup surge: 3-5× running wattage (a 3.5 kW heat pump can draw 10-15 kW on startup)
- Well pump: 1-2 kW running, 3-6 kW startup
- EV charger: Level 2 adds 7-10 kW continuous
- Simultaneous startup of multiple loads can exceed battery's peak output (kW) even if stored energy (kWh) is sufficient

### Code Requirements
- NEC 702.4(A)(3) governs battery backup load calculations for residential
- 2026 IEEE residential energy standards require specific load calculation methodology
- Many installers skip detailed load analysis and use rule-of-thumb sizing

### The Calculator Problem
- Most online calculators ask for monthly kWh, divide by 30, add a buffer
- They DON'T ask: do you have a well pump? Sump pump? EV charger? Heat pump?
- They DON'T model startup surges — a battery with enough kWh for 12 hours might trip on overcurrent in hour 1
- The kW rating (power output) matters as much as kWh (stored energy), but calculators focus on kWh
- Professional tools using hourly utility data are "92% more accurate" than generic calculators
- But most homeowners use the free generic tools

### Market Context
- US residential battery storage installations doubled in 2025 (per EIA)
- ~30% of new solar installations now include storage
- Average installed cost: $12,000-$18,000 per battery
- Getting the count wrong by one battery = $12,000-$18,000 error

## Sources
1. 2026 Expert Guide to Residential Solar+Storage Sizing (jolban.com) — 38% sizing error, NREL data
2. NEC-Compliant Residential Battery Sizing Guide (delbou.com) — NREL 2026 analysis, Phoenix example
3. AltEnergyMag Complete Guide — load categories, sizing methodology
4. Electrek: Home Solar in Rural America — DOE 12 kWh baseline, Tesla sizing
5. Briggs & Stratton: How to Right-Size — DoD, efficiency losses
6. Sol-Ark Battery & Storage Calculator — industry tool reference
7. NEC 702.4(A)(3) — code requirement for backup load calculations

## Kill Test
Does this help someone building or buying a home? YES — anyone adding battery storage to a new or existing home needs to know that the free online calculator is likely wrong by 38%, that their battery might have enough energy but not enough power for startup surges, and that using 12 months of utility data instead of 2 months eliminates 90% of sizing mistakes.

## Journalist
Jake Kowalski — construction tech, tools, specs. Punchy, hands-on, explains to a smart friend at a bar.
