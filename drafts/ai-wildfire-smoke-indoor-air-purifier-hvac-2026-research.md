# Research: AI, Smart Sensors, and the Wildfire Smoke Getting Into Your Home
**Slug:** ai-wildfire-smoke-indoor-air-purifier-hvac-2026
**Journalist:** Priya Greenwood
**Date:** September 6, 2026

## The angle
Staying inside during wildfire smoke season is the standard advice. But the data says your house is not the shelter you think it is, and the gadgets people buy to fix it (a purifier in the bedroom, a smart sensor on the wall) only work if they're sized, placed, and run correctly. New AI-driven tools — smart thermostats that auto-switch HVAC to recirculation when smoke arrives, sensors that tell you which room is actually dirty — are changing the playbook from "close the windows and hope" to an automated response.

## Kill test
Does this help someone building or buying a home? Yes: homeowners in the West face smoke season every year now. This tells them what actually protects indoor air (and what wastes money), with sizing math they can apply this weekend.

## Key findings

### 1. How much smoke gets inside (PNAS 2021, Liang et al., UC Berkeley)
- Study: 1,400+ buildings, PurpleAir paired indoor/outdoor sensors, 2020 CA fire season, 2.4M+ sensor-hours.
- Mean indoor PM2.5 nearly TRIPLED on fire days vs non-fire days.
- Infiltration factor (fraction of outdoor PM2.5 that ends up suspended indoors): geometric mean 0.23 on fire days (outdoor > 35 ug/m3), 0.42 on non-fire days. 25th-75th percentile: 0.16-0.36.
- People closing up + filtering cut infiltration roughly in half vs. doing nothing (Berkeley News summary of same study).
- Newly constructed homes and homes with central AC kept smoke out significantly better.
- Source: https://www.pnas.org/doi/10.1073/pnas.2106478118 and https://news.berkeley.edu/2021/08/31/how-much-wildfire-smoke-is-infiltrating-our-homes/

### 2. What drives residential PM2.5 overall (PNAS 2023, 3,977 residences, >10,000 monitor-years)
- Outdoor sources: median 52% of residential PM2.5. Cooking: 28%. Persistent indoor: 20%.
- Infiltration factors highest in summer, lowest in winter (halved in most climate zones).
- Temperate marine climate zone (i.e., coastal CA) had HIGHER infiltration factors (more open-window time).
- Source: https://www.pnas.org/doi/full/10.1073/pnas.2308832120?cookieSet=1

### 3. Multi-region confirmation (Fire/MDPI 2026, 2019-2024 paired sensors)
- Infiltration ratios dropped from ~0.4 non-fire to ~0.2 on wildfire days, yet indoor PM2.5 still nearly tripled.
- Nursing facilities: 24h indoor peaks up to 200 ug/m3; infiltration 0.22-0.76 across buildings (building characteristics dominate).
- Source: https://www.mdpi.com/2571-6255/9/5/190

### 4. The AI/automation layer (UC Berkeley CBE, smart thermostat research)
- CBE developing automated HVAC control: data exchange between local HVAC and remote AQI (AirNow)/weather/energy pricing; control algorithm overrides HVAC during wildfires — turns off ventilation, switches to recirculation, fan-only mode, sends notifications.
- Based on ecobee "Donate Your Data": ~8,000 CA homes analyzed.
- Quote-worthy: "the ability of HVAC systems to deliver cleaner air without heating or cooling is often overlooked by homeowners."
- Source: https://cbe.berkeley.edu/research/smart-thermostats-wildfire-resiliency/
- Commercial parallel: Kaiterra/Fellowes smart IAQ systems auto-adjust purification to PM2.5 (commercial focus; residential analogs emerging).

### 5. Standards (ASHRAE)
- ASHRAE Guideline 44-2024: Protecting Building Occupants from Smoke During Wildfire and Prescribed Burn Events. Covers filtration, HVAC operation, occupant protection.

### 6. What actually works (EPA / Consumer Reports)
- EPA: best HEPA purifiers can reduce particle concentrations by up to 85%.
- Consumer Reports: top smoke performers are HEPA + large fan; rated for rooms 350+ sq ft; $50-$1,000+; noise at every speed matters (runs 24/7); annual operating costs = filters + energy.
- AHAM rule of thumb: CADR should be at least 2/3 of room square footage (for 8-ft ceilings). E.g., 400 sq ft living room needs CADR >= ~270 for smoke.
- Coway Airmega AP-1512HH: CADR 234 smoke, ~$207. Blueair Blue Signature: CADR 455 smoke, ~$411.
- MERV 13 filter upgrade: catches smoke-range particles far better than standard MERV 8 1-inch filters; watch for airflow/pressure-drop issues on older systems (contractor guidance).

## Original contribution (novel math)
- **The 0.23 math:** Infiltration factor 0.23 x outdoor AQI 200 (~240 ug/m3 PM2.5) = ~55 ug/m3 indoors = "Unhealthy" AQI indoors even with windows closed. At the 75th percentile (0.36), that's ~86 ug/m3. Doing nothing (windows open, 0.42+ infiltration) can push indoor near outdoor levels. This quantifies why "stay inside" is necessary but insufficient.
- **CADR sizing walkthrough:** 400 sq ft living room x 2/3 = CADR 267 minimum for smoke; a single bedroom unit (CADR ~140, like the Dreo-class units) in a 400 sq ft open plan is undersized by half.
- **Cost comparison nobody ran:** DIY Corsi-Rosenthal box (~$70-100 in parts, CADR ~600+) vs. $207 Coway (CADR 234) vs. $411 Blueair (CADR 455). Dollars per CADR: DIY ~$0.15, Coway ~$0.88, Blueair ~$0.90. The box-fan build is the cheapest clean air per dollar, with noise/aesthetics as the tradeoff.

## Skepticism / counterargument (full strength)
- PurpleAir sensors are known to read HIGH for wildfire smoke particles; studies apply correction factors, but corrected or not, low-cost sensors are less accurate than reference monitors. A $150 sensor telling you to panic may be wrong by 30%+.
- Smart HVAC automation is still research-stage (CBE project) — no shipping consumer product does the full "detect smoke, recirculate, notify" loop out of the box today. Ecobee/Nest have eco modes, not wildfire modes.
- Portable purifiers only clean the room they're in; whole-home claims from $875 in-duct "air scrubber" upsells (see FinancialContent piece) often lack independent CADR-equivalent verification. ActivePure-type tech is not HEPA and its smoke-removal efficacy is vendor-claimed.
- Filtration does nothing for gases (CO, VOCs in smoke) — carbon filters help odor but aren't rated for toxic gas removal.
- Behavior dominates: the PNAS data shows infiltration halved when people acted. The fanciest sensor can't help if windows stay open.

## Limitations (must state in article)
- Infiltration factors come from PurpleAir crowdsourced data (self-selected sensor owners, CA-heavy, 2020 season) — not a randomized housing sample.
- Cost figures are Sep 2026 retail snapshots; CADR-per-dollar math assumes rated CADR holds at tolerable noise levels (CR notes many units underperform at low speed).
- Health claims: we cite PM2.5 exposure associations, not a clinical trial of purifiers preventing outcomes.
- Could not verify per-home costs of smart-thermostat wildfire automation (no consumer product exists yet).

## Costs / actionable
- MERV 13 filter swap: ~$15-40 per filter, replace every 2-3 months in smoke season (check system compatibility).
- One good portable HEPA for the bedroom (CADR >= 2/3 room sq ft): $100-250.
- Indoor PM2.5 monitor (Airthings/Temtop-class): $100-300; tells you whether your setup is working.
- Thermostat trick (free): set fan to ON/CIRCULATE during smoke, close windows, kill the ERV/HRV fresh-air intake or switch to recirculation.
- Clean-room strategy: pick one room, seal it, over-filter it. EPA-backed.

## Sources (primary)
1. Liang et al., PNAS 2021 — https://www.pnas.org/doi/10.1073/pnas.2106478118
2. PNAS 2023 residential PM2.5 apportionment — https://www.pnas.org/doi/full/10.1073/pnas.2308832120?cookieSet=1
3. UC Berkeley CBE smart thermostat wildfire research — https://cbe.berkeley.edu/research/smart-thermostats-wildfire-resiliency/
4. Fire/MDPI 2026 multi-region analysis — https://www.mdpi.com/2571-6255/9/5/190
5. ASHRAE Guideline 44-2024 (referenced via https://www.linkedin.com/pulse/how-improve-building-air-quality-during-1uwmc)
6. Consumer Reports air purifier wildfire smoke testing — https://www.consumerreports.org/appliances/air-purifiers/best-air-purifiers-for-wildfire-smoke-a1153295134/
