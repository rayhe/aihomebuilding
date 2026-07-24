# Research: The Panel Upgrade That Software Could Replace

## Core Thesis
23 million US homes will need electrical panel upgrades to fully electrify (heat pump + EV + electric water heater). Those upgrades cost $2,000-$10,000 each. Purdue University proved in a 31-day field test that a model predictive control system can keep a fully electrified home within the safe limits of a 100A panel — the panel size that "requires" a $6,000 upgrade to 200A. The 2023 NEC now codifies energy management systems (Article 750, Section 220.70) as a legal alternative to panel upgrades. But in residential construction, builders and electricians still default to "upgrade the panel."

## Key Data Points

### The Problem Scale
- 21% of US homes have 100A or less panel capacity (DOE Office of Energy Efficiency & Renewable Energy, 2023 report)
- 44% of homes have 2 or fewer available panel slots
- Full electrification with EV adoption: 24% of single-family homes need panel upgrades (EPRI estimate)
- That's ~23 million households nationally
- In the Midwest: 35.8% need upgrades (worst region)
- Los Angeles alone: $780M-$1.8B to upgrade all deficient single-family panels in disadvantaged communities (LA DWP estimate)
- Less than 20% of homes in West, Midwest, and Northeast are all-electric (Pecan Street survey, 263 Austin homes)
- Panel upgrade cost range: $2,000-$10,000 (DOE, multiple sources)
- Average cost: $3,500-$6,800 (Denommee Plumbing, NYSERDA)
- 400A upgrade: $10,000-$30,000 range (This Old House / YouTube electricians)

### The Purdue Field Study (arxiv.org/html/2409.04884v1)
- Authors: Pergantis, Reyes Premer, Lee, Liu, Groll, Ziviani, Kircher — Center for High Performance Buildings, Purdue University
- What: Model predictive control (MPC) system to maintain whole-home current within 100A safe limits
- Where: Occupied single-family house, cold climate
- Duration: 31 winter days, outdoor temps as low as -20°C
- House specs: Code-minimum insulation, air-to-air heat pump with backup resistance, resistance water heater, plug-in hybrid EV with Level I (1.8 kW) charging
- Panel requirement under NEC: 200A. System maintained within 100A.
- Method: Two-level control architecture
  - High-level: Scenario-based MPC using mixed-integer convex programming, plans device set-points over rolling prediction horizon
  - Low-level: Rule-based logic, ramps down devices if real-time current approaches unsafe levels; predicts resistance backup heat during HP defrost cycles
- Controls: Adjusted ONLY temperature set-points of heat pump and water heater via existing manufacturer smart thermostat APIs
- NO manufacturer-level hardware access, NO new panel hardware
- Simulation extension: Same 100A limit could accommodate a SECOND EV with Level II (11.5 kW) charging
- "First field demonstration of whole-home current-limiting control in the research literature"
- Estimated savings: $2,000-$10,000 per household (avoiding panel upgrade)

### The Regulatory Enabler
- NEC 2023, Article 750: First codification of Energy Management Systems in the electrical code
- NEC 2023, Section 220.70: Load calculations can now account for managed loads (not just peak demand)
- NEC 2023, Section 625.42: EV charger loads can use EMS to reduce service/feeder sizing requirements
- NEC 2026: Tightened — requires UL-listed products, restricted access to settings, no "informal workarounds"
- Key shift: The code now legally allows software to substitute for copper. Panel sizing can be based on managed demand, not theoretical maximum simultaneous draw.

### The Commercial Landscape
- SPAN Smart Panel: MSRP $3,500 (new model, <1" depth, 90A circuits) / $5,000 (original, 3.5" depth, 70A circuits). Installed: $7,500-$9,500. Eaton invested $75M in SPAN early 2026. PowerUp feature claims $3,000-$8,000 savings on service upgrades for EV installs.
- ABB ReliaHome Smart Panel: Mounts next to existing panel, monitors/controls key circuits via app, manages big loads (EV, pool, water heater) to stay within existing service.
- Emporia Vue: $150-$200, circuit-level monitoring only (no control), clips onto existing panel.
- Standard panel replacement: $2,000-$3,500
- The Purdue system: Used existing smart thermostats + smart meter. Essentially $0-$200 in additional hardware.

### The Gap
1. **Builder behavior:** New construction still sizes panels using traditional NEC load calculations (theoretical max simultaneous draw). Smart load management is NOT part of standard new construction design.
2. **Electrician behavior:** Default recommendation for electrification = "upgrade your panel." Not trained on NEC 750 / 220.70 alternatives.
3. **Cost asymmetry:** $200 in software/sensors vs. $3,500-$10,000 in copper and labor. The ROI is immediate.
4. **Equity gap:** Low-income households most impacted — they have the oldest panels, can least afford upgrades, and would benefit most from the cheaper software alternative.
5. **Builder incentive misalignment:** Electricians charge more for panel upgrades. No business incentive to recommend the cheaper option.
6. **Code adoption lag:** NEC 2023 is adopted state-by-state. Many jurisdictions still on 2017 or 2020 NEC. The legal framework exists but hasn't reached all inspectors.

### Original Calculation
The Purdue system ran on 100A while the house would require 200A under traditional NEC calculations. That's a 50% reduction in required panel capacity through software alone. At $5,000 average panel upgrade cost × 23 million homes = $115 billion in potential avoided costs nationally. Even at conservative $2,000/upgrade: $46 billion.

## Sources
1. Pergantis et al., "Protecting residential electrical panels and service through model predictive control: A field study," arXiv:2409.04884v1
2. US DOE Office of Energy Efficiency & Renewable Energy, 2023 panel capacity report
3. EPRI residential electrification panel upgrade scenarios
4. LA DWP panel upgrade cost estimates for disadvantaged communities
5. Pecan Street, Austin TX 263-home panel survey
6. NEC 2023 Articles 625.42, 750, Section 220.70
7. NYSERDA panel upgrade cost guidance ($3,000-$5,000)
8. EnergySage SPAN panel review (MSRP $3,500 new, $5,000 original)
9. Medium/US Power California smart panel analysis ($7,500-$9,500 installed)
10. Schneider Electric blog on NEC 220.70 and Article 750
11. CleanTechnica, "How To Fast-Charge An EV On A 100-Amp Panel"

## Journalist: Jake "Jackhammer" Kowalski
- Construction technology beat, hands-on, specs-heavy
- This is a tools-and-systems story at its core: a control system that replaces a physical upgrade
- Jake would be drawn to the specifics — the 100A vs 200A, the -20°C cold snap, the smart thermostat APIs
