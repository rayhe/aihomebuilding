# Research: Smart Thermostats Making Heat Pumps Run Like Space Heaters

## Angle
Your $250 smart thermostat was designed for a gas furnace. When paired with a heat pump, its default settings fire expensive auxiliary resistance heat strips far too aggressively — costing 2-4x more per BTU than necessary. The AI-powered predictive control algorithms that could fix this exist in university labs but haven't reached consumers.

## Journalist: Priya Greenwood (Sustainability & Green Building)

## Key Data Points

### Heat Pump Market Scale
- Heat pumps outsold gas furnaces in 2025 by 11%: 3.64M heat pumps vs 3.25M furnaces (AHRI/ACHR News)
- Through May 2025, AHRI reported 1,713,388 units shipped YTD — up 9.5% over same period 2024
- IRA incentives: up to $8,000 HEEHRA rebate (income <80% AMI), $2,000/yr Section 25C tax credit
- As of 2020, ~18M US households used heat pumps for space heating (50% increase over 2015)
- RMI estimates 12M+ new heat pumps by 2030, floor not ceiling

### The Thermostat Problem
- Most smart thermostats (Nest, Ecobee, Honeywell) ship with conservative defaults designed for gas furnace systems
- Default aux heat threshold: fire aux at 2°F temperature gap (many systems) — way too aggressive
- Variable-speed heat pumps need deeper integration than step-level staged control most smart thermostats provide (LBNL/escholarship paper)
- Proprietary OEM thermostats that come with heat pumps are typically harder to use than popular smart thermostats

### The Cost Math
- Heat pump COP: 1.5 to 4.0 (delivers 1.5-4 units heat per 1 unit electricity)
- Aux resistance heat COP: 1.0 (delivers exactly 1 unit heat per 1 unit electricity)
- Cost multiplier: aux heat costs 2-4x more than heat pump operation
- Example: heat pump uses 5-9 kWh to produce 100,000 BTU; aux strips need ~30 kWh for same amount
- Proper thermostat settings can reduce winter bills by 20-40% (SmartSMSSolutions)

### The AI Research
- Purdue University field demonstration (2023, published Applied Energy):
  - Predictive control for air-to-air heat pump with backup electric resistance
  - Tested Jan-Mar 2023 in occupied 208 m² house in Indiana, temps as low as -15°C
  - Results: 19% reduction in daily heating energy (95% CI: 13-24%)
  - 38% reduction in backup heat energy use
  - 83% reduction in using highest stage (19 kW) of backup heat
  - Maintained satisfactory thermal comfort per concurrent resident surveys
  - Estimated $300/yr savings (95% CI: 23-34% reduction)
  - Uses weather forecasts, occupancy conditions, data-driven building/equipment models

### Smart Thermostat Mistakes
- Crank thermostat >2°F at once → aux heat activates automatically
- Setting compressor lockout too high → heat pump shuts off when it could still work efficiently
- Some systems wired incorrectly → aux strips activate in COOLING mode (GreenBuildingAdvisor)
- Setting aux lockout temperature too high (40°F) → unnecessary aux heat use; proper balance point ~30°F or lower
- Nest "Heat Pump Balance" setting exists but buried in menus

### ServiceTitan Data (April 2026)
- 74% of residential contractors view AI as efficiency engine
- Only 25% currently using AI
- 48% of early adopters report increased productivity
- 73% believe starting early creates competitive advantage

## Sources (3+ primary)
1. Purdue/Emerson field study: predictive control for heat pump (Applied Energy, arxiv preprint)
2. AHRI monthly shipment data via ACHR News / tradecolleges.org analysis
3. LBNL/escholarship paper: "Smart Thermostats Plus Heat Pumps: Incompatible? Or Just Need Counseling?"
4. ServiceTitan 2026 Residential State of the Trades Report (1,000 contractors surveyed)
5. GreenBuildingAdvisor: aux heat wiring errors, balance points
6. RMI: heat pump deployment projections
7. DOE IRA program progress data

## Kill Test
Does this help someone building or buying a home? YES — anyone installing a heat pump (millions/year) needs to know their smart thermostat defaults are costing them hundreds/year extra and what settings to change. Actionable: specific settings to check (aux lockout temp, compressor lockout, deadband). Forward-looking: AI predictive control is coming.

## Original Contribution
Cross-referencing the Purdue predictive control study results against consumer smart thermostat default settings to calculate the actual cost penalty homeowners are paying. Nobody has done this specific math: if predictive control saves 19% and reduces aux heat 38%, and the average home with a heat pump spends $X on heating, the default thermostat settings are costing the average homeowner $Y/year unnecessarily.
