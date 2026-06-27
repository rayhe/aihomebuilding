# Research: AI HVAC Sizing vs. the Oversizing Epidemic

## Journalist: Frank "The Foreman" DeLuca (Project Management & Operations)
## Date: June 27, 2026

## The Problem: Systematic Oversizing

### How Contractors Actually Size Systems
- **Florida Solar Energy Center survey of 489 HVAC contractors** (ACEEE):
  - Only 33% use ACCA Manual J procedure
  - 34.4% use "software" (but unclear if Manual J-compliant)
  - 24.2% use square-footage rules of thumb (350-700 sq ft per ton — wildly inconsistent)
  - ~8.4% use "other estimates"
  - **Over a third intentionally oversize** — to avoid callbacks, accommodate future expansions, enable lower thermostat setpoints
  - Source: "How Contractors Really Size Air Conditioning Systems" — ACEEE (Parker, Sherwin, Klongerbo, Sonne, Cummings — Florida Solar Energy Center)

### How Bad Is the Oversizing?
- **Building Science Corporation / ACEEE study (Redding, CA subdivision)**:
  - Production builder standard practice: 155-185% of calculated Manual J load
  - After "resizing" effort: still 135-150% of Manual J load
  - Both groups were comfortable all summer — the oversized group just used more energy
  - Source: Townsend & Ueno, Building Science Corporation, ACEEE

- **Steven Winter Associates / NREL study (VRF multifamily)**:
  - One building sized at 90% of peak load (right-sized)
  - Another sized at 240% of peak load (oversized)
  - Right-sized building: **6x lower cooling electricity per apartment floor area**
  - VRF manufacturer said **proper sizing would have saved 24% in equipment costs**
  - Oversized systems spent most time below 33% capacity, where COP drops dramatically
  - Source: NREL/TP-5500-89805 (2024-2025)

- **Rewiring America analysis (heat pump sizing)**:
  - Using sq-ft rules of thumb: 30% of homes would get a heat pump oversized by >1 ton (12,000 BTU)
  - 32% would get seriously undersized units
  - Source: Rewiring America Electrification Planner

### Energy Penalty
- **NREL fact sheet (2015)**: Oversized AC energy penalty comes NOT from cycling efficiency loss but from **off-cycle parasitic power consumption** (controls, crankcase heaters). Oversized units are off more, so parasitic power = larger % of total energy.
- HVAC = 40-50% of building energy consumption (UMD CEEE, multiple sources)
- Central air annual cost: $340-$700/year depending on location (USA Today / ARS, 2026)
- Central air replacement cost: $3,900-$7,900 (Angi, 2026)

## The AI Solution: LiDAR + Automated Load Calcs

### Conduit Tech (acquired by ServiceTitan, Sept 2025)
- iPad-based LiDAR scanning platform for HVAC contractors
- Creates 3D models of home interiors in minutes
- **ACCA-certified Manual J calculations** — permit-ready
- Generates photo-realistic visualizations of system placement
- Under 15 minutes from scan to proposal
- ServiceTitan (Nasdaq: TTAN) acquisition closing expected Q3 2026
- Integration with ServiceTitan's AI automation suite
- Source: ServiceTitan press release, Contracting Business, Sept 18, 2025

### Other AI-Powered Tools
- **CoolCalc, Wrightsoft Right-J, Energy Diagnostics** — Manual J software used by contractors
- **cove.tool (loadmodeling.tool)** — ASHRAE Standard 140-compliant, cloud-based, rapid prototyping for larger projects
- **JHU DFL model** — hybrid physics + AI approach for HVAC optimization, connects predictions to cost outcomes
- **UMD CEEE research** — comparing ANN vs LSTM deep learning for VRF energy prediction; LSTM outperforms for seasonal variation capture

## The Math (Original Calculation)

For a 2,000 sq ft home in a warm climate (e.g., Redding, CA):
- Proper Manual J load: ~3 tons (36,000 BTU/h)
- Typical contractor sizing at 170% of load: 5 tons (60,000 BTU/h)
- Equipment cost difference: 3-ton unit ~$3,500 vs 5-ton unit ~$5,200 = **$1,700 upfront waste**
- Annual energy penalty from oversizing (assuming 15-25% higher consumption from parasitic losses): $51-$175/year on a $340-$700 AC bill
- Over 15-year equipment life: $765-$2,625 in wasted energy + $1,700 upfront = **$2,465-$4,325 total waste per home**
- At ~130M US households, even if only 50% have central air and 40% are oversized: **26M oversized systems**

## Kill Test
Does this help someone building or buying a home? **YES.** 
- Homeowner action: demand a Manual J load calculation before any HVAC install ($150-$300 for proper calc vs thousands in waste)
- Builder action: use LiDAR tools like Conduit Tech to standardize right-sizing
- Buyer action: check existing system sizing against home's actual load before assuming HVAC replacement schedule

## Novel Contribution
Original cost analysis combining: contractor survey sizing behavior data + real-world oversizing energy penalties + new AI tool costs = actionable ROI for right-sizing via LiDAR.

## Limitations
- Florida contractor survey is old (late 1990s); newer survey data on contractor behavior is sparse
- NREL parasitic power findings are from 2014-2015; newer variable-speed equipment may reduce the penalty
- Conduit Tech integration with ServiceTitan not yet complete (Q3 2026 closing)
- VRF study was multifamily, not single-family; results may not translate directly
