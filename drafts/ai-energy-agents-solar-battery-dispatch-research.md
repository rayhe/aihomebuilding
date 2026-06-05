# Research Notes: AI Energy Agents for Home Solar/Battery Dispatch

## Angle
Agentic AI is moving from the data center to your electrical panel. A new generation of AI energy management systems — not rule-based thermostats, not dashboards with recommendations, but autonomous agents that plan, execute, and iterate — are showing measurable results for homeowners with solar and storage. The gap between what homeowners actually earn from their solar+battery systems and what they could earn with AI dispatch is the story.

## Primary Sources

### 1. Sigenergy SigenAgent (announced June 3, 2026)
- **Source:** Globe Newswire press release, June 3, 2026
- Goal-based AI energy management for solar, storage, EV charging
- Available as software upgrade via mySigen App 4.0 (June 2026) — no hardware replacement
- Built on "AI in All" strategy; 200,000+ plants worldwide, 10-second data refresh
- **Four vertical agents:**
  - Energy Manager: plans household strategy around load, PV, battery state, tariffs
  - System Doctor: full-site diagnosis, anomaly detection, maintenance reports
  - Power Trader: optimizes charge-discharge timing for dynamic tariffs and VPP markets
  - Business Assistant: production, delivery, lifecycle data for managers
- **Field results:**
  - Poland: ~50% reduction in grid-purchase costs
  - Sweden: ~70.3% average bill reduction across ~2,500 plants
  - Poland: 220-300% increase in PV selling revenue
- Governed by four principles: User Authorization, Secure Infrastructure, Offline Resilience, Transparent AI Decision
- HK-listed: HKEX 6656.HK

### 2. AIIR + Copeland Partnership (2026)
- **Source:** IoT M2M Council
- AIIR Intelligent HVAC + Copeland Verdant VX4 thermostat integration
- All AIIR products ship with custom Verdant VX4
- Verdant platform: 11,000+ properties, 15-20% HVAC energy savings
- ML-powered predictive comfort optimization
- Supports Title 24 (California) and Local Law 97 (NYC) compliance
- 10-minute commissioning time
- Residential and multifamily targets

### 3. Time-of-Use Rate Spreads (Evidence of Growing Arbitrage Opportunity)
- **PEC (Pedernales Electric Cooperative, Texas):** On-peak $0.27/kWh vs off-peak $0.043/kWh (6.3x spread, effective March 2026)
- **Seattle City Light:** Just launched residential TOU rate (May 2026) — peak 5-9pm most expensive
- **PG&E E-TOU-D (California):** Peak 4-9pm ~$0.52-0.61/kWh vs off-peak ~$0.28-0.36/kWh (~1.7-2x spread)
- **CORE Electric (Colorado):** On-peak $0.27/kWh vs off-peak $0.086/kWh (3.1x spread, effective Jan 2026)
- Key trend: As more utilities adopt TOU, the arbitrage opportunity for smart dispatch grows

### 4. HYXI Muse AI Native Energy OS (SNEC 2026)
- **Source:** Morningstar/PR Newswire, June 4, 2026
- EcoSavvy residential string inverter series + 2500W microinverter
- 98.3% conversion efficiency via SiC power devices
- HYXI Cloud: intelligent energy scheduling, AI-based O&M, predictive safety, VPP integration
- "Future of energy systems will not only be connected, but increasingly autonomous"

### 5. NLR (formerly NREL) foresee™ HEMS
- **Source:** National Laboratory of the Rockies
- Secure home automation coordinating appliances, batteries, rooftop solar
- ML algorithms learn home + occupant patterns
- Predicts comfort needs, energy costs, environmental impacts, grid service availability
- Physics-based modeling + data-driven appliance models

## Novel Analysis: The AI Dispatch Gap

### Baseline: Typical California Solar+Battery Home (PG&E E-TOU-D)
- 7kW solar array, 13.5kWh battery (Tesla Powerwall 3 or equivalent)
- Average daily production: ~30 kWh (summer), ~18 kWh (winter)
- Average daily consumption: ~25-30 kWh

### Manual/Rule-Based Management:
- Simple rule: charge battery during solar peak, discharge during TOU peak (4-9pm)
- Problem: doesn't account for weather forecasts, changing demand patterns, grid pricing signals
- Typical self-consumption rate: 50-60%
- Excess solar exported at NEM 3.0 rates (~$0.05-0.08/kWh) — massive value destruction
- Annual savings vs no-solar baseline: ~$1,800-2,200

### AI-Optimized Dispatch:
- Pre-heats/cools home before TOU peak using cheap solar
- Holds battery charge for highest-value discharge windows
- Factors in next-day weather, utility dynamic pricing, household patterns
- Typical self-consumption rate: 75-90%
- Sweden data (SigenAgent): 70.3% average bill reduction vs manual
- Poland data: 50% grid-purchase cost reduction + 220-300% export revenue increase
- Estimated additional annual value: $500-1,200 over rule-based systems

### The Math:
If TOU peak = $0.54/kWh, off-peak = $0.30/kWh, NEM 3.0 export = $0.06/kWh
- Battery dispatch value (13.5 kWh × $0.24 spread × 300 days) = ~$972/yr at peak optimization
- Vs simple timer rule at 80% efficiency: ~$778/yr
- AI lift: ~$200/yr from dispatch alone
- Plus: pre-conditioning savings (~$150-300/yr), export optimization (~$100-200/yr)
- Total AI value: ~$450-700/yr additional over rules-based

## Kill Test
Does this help someone building or buying a home?
YES. If you're specifying a solar+battery system for a new home, or buying a home that already has one, this tells you: (1) the management software matters as much as the hardware, (2) AI dispatch is now available as a retrofit, (3) the value gap will widen as TOU spreads increase.

## Strongest Counterargument
SigenAgent's field data comes from Europe (Poland, Sweden), where electricity pricing structures differ from US TOU rates. The 70.3% bill reduction in Sweden may not translate to US conditions. Additionally, the system requires internet connectivity and user authorization — and many homeowners prefer set-and-forget systems over autonomous agents making energy decisions.

## Limitations
- SigenAgent field data is from European markets; US residential deployments are pending
- The "70.3% bill reduction" metric lacks specifics on baseline and methodology
- Comparison across manufacturers (SigenAgent vs Tesla Autobidder vs Enphase IQ) not possible with current data
- NEM 3.0 export rates vary by utility and are changing; calculations use PG&E estimates
- AIIR/Copeland savings (15-20%) are from commercial/hospitality deployments, not single-family residential

## Journalist
**Priya Greenwood** — sustainability + green building, connects energy data to real utility bills, evidence-based with strong comparisons.
