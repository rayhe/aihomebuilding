# Research: Energy Model Rate Assumptions vs. Data Center Demand Shock

## Thesis
Every new home's energy model — HERS rating, energy code compliance, cost-savings projections — assumes electricity rates that are either static or follow gentle historical trends. Data center demand is shattering that assumption in the PJM footprint and beyond. The homebuyer who was told their HERS 50 home would save $2,400/year is using numbers that may already be wrong by $300-$500/year, and the gap is growing.

## Journalist
**Priya Greenwood** — Sustainability & Green Building. This is squarely her beat: energy modeling, green building economics, the gap between paper efficiency and real-world costs.

## Key Data Points

### PJM Capacity Auction Explosion (Primary Source: Reuters, PJM data)
- PJM serves 67 million people across 13 states + D.C.
- Capacity auction prices: $28.92/MW-day (2024-2025) → $269.92/MW-day (2025-2026) → $329.17/MW-day (2026-2027)
- That's a **nearly 10x increase** in two years
- BGE and Dominion zones (near data centers): cleared at $466.35/MW-day and $444.26/MW-day for 2025-2026
- PJM projects 32 GW demand increase by 2030; 30 GW from data centers
- PJM has NO spare capacity beyond next year (ICF analysts, Reuters Jul 3 2026)

### EIA Residential Electricity Prices (April 2026 vs. April 2025)
- **National average:** 18.83 ¢/kWh, up 7.3% YoY
- **Ohio:** 19.49¢ → from 16.32¢ = **+19.4%**
- **Pennsylvania:** 21.47¢ → from 18.96¢ = **+13.2%**
- **New York:** 29.45¢ → from 25.69¢ = **+14.6%**
- **New Jersey:** 23.53¢ → from 20.15¢ = **+16.8%**
- **New Hampshire:** 27.24¢ → from 23.66¢ = **+15.1%**
- **Michigan:** 21.39¢ → from 19.93¢ = **+7.3%**

### Real-World Impacts
- **Belden Brick Company (Ohio):** Monthly capacity charge jumped from $1,600 → $12,000 (650% increase). Bills up ~90% overall. (Reuters Jul 7 2026)
- **Ohio residential:** Summer 2026 bills projected at $800, up 17% from $682 in 2025 (Third Way/Heatmap/MIT)
- **Illinois:** Consumers saw 20-25% price spike from 2025-2026 capacity auction results (BusinessWire)
- **Oregon:** Data center rates hiked 29%; residential rates dropped 1.3% (PUC Jul 7 2026) — data centers paying their way, but this is the exception
- **Ireland:** Data centers consume 23% of all electricity (up from 5% in 2015), adding €360/household in extra costs

### PJM Emergency (Jul 2-4 2026)
- PJM ordered emergency curbs as demand neared record 166.3 GW (old record from 20 years ago)
- Wholesale prices spiked to $2,500/MWh in northern Virginia data center hub (normal: ~$40/MWh)
- Coal output at 28 GW — 75% higher than 2026 average — to meet demand
- NYISO also stressed: asking customers to moderate AC and appliance use

### EIA Demand Projections (Released Jul 8 2026)
- U.S. power demand: 4,195 billion kWh (2025, record) → 4,269 billion kWh (2026) → 4,399 billion kWh (2027)
- Commercial sector (includes data centers) will outpace residential demand in 2026 for the first time on record
- Data centers are the primary driver

### HERS and Energy Model Limitations
- HERS ratings model energy USE (kWh) but savings claims are translated to dollars using assumed rates
- D.R. Horton's HERS disclosure explicitly disclaims: "D.R. Horton does not warrant or guarantee the monthly or annual utility bills"
- Energy models use "projected" rather than "confirmed" ratings for cost estimates
- No standard mechanism to update rate assumptions as grid economics shift
- Energy code compliance (IECC) doesn't model utility rates at all — it models energy consumption
- The dollar savings claims come from builders and realtors, not from the code itself

## Original Contribution
**Calculate the delta between modeled and actual energy costs for new homes in data-center-heavy regions.**

Example: A typical new all-electric home in Ohio (1,800 sq ft, HERS 55):
- Modeled annual energy cost (2024 rates, ~15¢/kWh): ~$2,250/year
- Actual 2026 cost (19.49¢/kWh): ~$2,925/year  
- Delta: **~$675/year or 30% higher than modeled**
- Over 30-year mortgage: ~$20,250 in unmodeled costs (not inflation-adjusted)

For a new home in New York (29.45¢/kWh vs. modeled ~24¢/kWh):
- Delta could be $400-700/year depending on consumption

## Counterargument (at full strength)
1. Energy models predict consumption, not cost — rate volatility is the buyer's responsibility, same as any household expense
2. Efficient homes still save MORE than inefficient homes regardless of rate level — a HERS 50 home using 50% less energy still pays half the inflated price
3. Higher rates actually IMPROVE the ROI of efficiency investments — every kWh saved is worth more at 20¢ than at 15¢
4. Some states (Oregon) are successfully rate-isolating data centers from residential customers
5. Solar + storage can hedge against rate increases (but adds $20K-$30K to new home cost)

## Limitations
- Rate increases are most acute in PJM territory; other regions may see modest increases
- Capacity charges hit industrial/commercial users disproportionately — residential rate structure cushions direct impact somewhat
- We're using April 2026 EIA data; summer rates may be even higher but are not yet published
- The "modeled cost" is an estimate — actual HERS reports use software-specific rate tables that vary by rater and vintage

## Sources
1. EIA Electric Power Monthly, Table 5.6.A (April 2026) — eia.gov
2. Reuters: "Big Tech data centers are driving up power bills at America's Rust Belt factories" (Jul 7 2026)
3. Reuters: "Largest US power grid PJM orders emergency curbs" (Jul 4 2026)
4. Reuters: "US power use to beat record highs in 2026 and 2027" — EIA STEO (Jul 8 2026)
5. Reuters: "Soaring US power auction prices set to spur new projects" (Sep 9 2025) — PJM capacity auction data
6. BusinessWire: "2026/2027 PJM Capacity Auction Outcome Will Jolt Electric Prices" (Jul 2025)
7. Oregon PUC: Data center rate hike 29% (Jul 7 2026)
8. Third Way/Heatmap/MIT: Ohio summer bills projected $800 (Jul 2026)
9. RESNET/HERS Index documentation — Wikipedia, EBSCO research starters
10. D.R. Horton HERS disclosure — drhorton.com
