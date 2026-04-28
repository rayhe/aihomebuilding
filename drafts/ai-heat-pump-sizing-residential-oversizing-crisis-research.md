# Research: AI Heat Pump Sizing — The Residential Oversizing Crisis

## Journalist: Priya Greenwood (Sustainability & Green Building)

## Kill Test
Does this help someone building or buying a home? **YES.** Every homeowner getting HVAC work done faces the sizing question. Oversizing is the default, costs thousands extra upfront and hundreds per year in wasted energy, shortens equipment life, and causes humidity/comfort problems. AI tools are now solving this — actionable for anyone replacing HVAC or building new.

## Core Angle
HVAC systems in American homes are routinely oversized by 50-200%. Contractors use rules of thumb (400-600 sf/ton) when Manual J calculations consistently show actual loads are 1,000-1,400 sf/ton. The penalty: higher upfront costs, higher energy bills, short-cycling that wrecks equipment and leaves homes humid. Now AI-driven platforms are fixing this — using satellite imagery, utility data, and ML models to right-size systems in minutes instead of the hours a proper Manual J takes. The stakes are enormous because heat pumps are more sensitive to oversizing than gas furnaces.

## Primary Sources

### 1. Energy Vanguard / Allison Bailes PhD — Manual J Data (2016, updated)
- 40 residential Manual J calculations analyzed
- Rule of thumb: 400-600 sf/ton (what contractors install)
- Actual Manual J results: average 1,431 sf/ton
- LOWEST in dataset: 624 sf/ton — still above the "high end" of rules of thumb
- Most above 1,000 sf/ton
- Implication: typical rule-of-thumb sizing installs systems 2.4x-3.6x too large
- Source: Green Building Advisor, "Manual J Load Calculations vs. Rules of Thumb"

### 2. NJ Green Building Manual / Rutgers — HVAC Oversizing Data
- HVAC systems consume 48% of energy used in typical US home
- Engineers oversize to meet extreme loads occurring 1-2.5% of the time
- Oversizing consequences: higher capital costs, reduced efficiency, short-cycling, poor humidity control, mold risk, increased fan power, higher peak demand
- Source: greenmanual.rutgers.edu/nr-properly-sized-hvac-equipment/

### 3. LBNL FLEXLAB — Load Prediction Accuracy (2020, OSTI)
- Validated EnergyPlus, DOE-2.1e, DOE-2.2 against measured data
- ~10% RMSE in peak load predictions
- Daytime absolute mean biases ~6% (more complex due to solar radiation)
- Source: OSTI Technical Report 1619175

### 4. AHRI Shipment Data / Environment America (2024)
- Heat pump sales outpaced gas furnaces by 37% (Nov 2023 - Nov 2024)
- Record margin, continuing multi-year trend
- Source: AHRI Statistical Release Nov 2024, environmentamerica.org

### 5. Arch — AI Platform for HVAC Contractors ($6.2M Seed, Feb 2024)
- Data intelligence platform integrating 12+ sources (CRM, ERP, satellite, real estate)
- Processes home analysis for heat pump sizing
- Backed by Gigascale Capital, Coatue, Floodgate, ReGen Ventures, MCJ Collective
- Processed $4M in heat pump sales through platform (early 2024)
- Aurora Solar co-founders are angel investors
- Source: TechCrunch, Pulse2, VCA Online

### 6. QuitCarbon — AI Home Electrification Planning
- Partners with cities (e.g., Palo Alto) for residential electrification
- AI-driven whole-home electrification plans
- Source: quitcarbon.com

### 7. Elephant Energy — Home Electrification Platform ($3.5M Seed, Nov 2022)
- Led by Building Ventures
- Full electrification service including sizing
- Source: elephantenergy.com

### 8. NEEP Cold Climate ASHP Product List
- Right-sizing tools for air source heat pumps in cold climates
- Visualizes capacity curves vs. heating load lines
- Shows cycling percentage at mild temps for oversized systems
- Source: neep.org, ashp.neep.org

### 9. DOE Building Science Education Collaborative (BSESC)
- Cold climate heat pump sizing training modules
- Emphasizes oversizing consequences: decreased efficiency and occupant comfort
- Source: bsesc.energy.gov

### 10. Rewiring America / IRA Analysis
- IRA provides average $10,600 per household for full electrification
- Average $1,800 annual energy savings
- 25 states (55% of US population) committed to 20 million residential heat pumps by 2030
- RMI: replacing gas furnace with heat pump can reduce up to 93% of climate pollution

### 11. Allison Bailes — "You Don't Need a Load Calculation" (2025)
- For EXISTING homes, time-and-temperature method can determine sizing
- Watch system performance in real conditions (heating and cooling seasons)
- New construction still needs Manual J
- Source: Green Building Advisor, June 2025

## Why Heat Pumps Make Oversizing WORSE

Heat pumps are more sensitive to oversizing than gas furnaces because:
1. Variable-capacity compressors can't modulate infinitely — they have a minimum output
2. Oversized heat pump in cooling mode short-cycles before dehumidifying air
3. COP drops at partial load for fixed-speed units
4. Cold climate performance already marginal — oversizing means defrost cycles triggered more often
5. Cost premium is higher — heat pump equipment costs more per ton than furnace+AC

## The AI Sizing Stack

How AI tools are solving this:
1. **Satellite imagery** → roof area, orientation, shading, building envelope geometry
2. **Utility data** → actual energy consumption patterns (12+ months)
3. **Real estate data** → square footage, construction year, insulation era norms
4. **Weather data** → local design temperatures, degree days
5. **ML models** → trained on thousands of actual Manual J calculations
6. **Result** → right-sized recommendation in minutes, not the 4-8 hours a proper Manual J takes

## Actionable Takeaways for Readers
- If your HVAC contractor sizes by "rule of thumb" or square footage alone: red flag
- Ask for a Manual J calculation — it's code-required for new construction
- For existing homes: consider the time-and-temperature method before committing to sizing
- Check NEEP's ASHP list for cold climate heat pump right-sizing
- Look into IRA rebates — up to $2,000 for qualified heat pumps
- A properly sized system costs less upfront, runs longer cycles (better dehumidification), uses less energy, and lasts longer
