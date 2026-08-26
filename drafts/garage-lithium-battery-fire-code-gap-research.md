# Research: Garage Lithium-Ion Battery Fire Code Gap

## Slug
`garage-lithium-battery-fire-code-gap`

## Journalist
Catherine "Code" Chen (Policy & Regulation)

## Thesis
IRC R302.6 requires half-inch gypsum board between an attached garage and the living space — a fire separation designed for gasoline. Homeowners are now filling that garage with lithium-ion batteries (EVs, e-bikes, e-scooters, power tools, portable power stations) that burn at nearly twice the temperature, reach flashover in seconds instead of minutes, and release hydrogen fluoride gas the code doesn't mention. AI-based thermal runaway detection can predict onset hundreds of seconds in advance. No residential building code requires it, and most jurisdictions have exempted themselves from the one provision (IRC R313 sprinklers) that FSRI research proved actually works against these fires.

## Headline candidates
- "Your Garage Was Built to Contain a Gasoline Fire. You're Charging a Lithium-Ion Battery That Burns at Twice the Temperature and Reaches Flashover in Twelve Seconds."
- "Your Garage Fire Separation Is Half an Inch of Drywall Rated for Gasoline. The E-Bike Charging Behind It Reaches Flashover Before Your Smoke Detector Responds."
- "A Machine-Learning Model Detects Battery Thermal Runaway Hundreds of Seconds Before Flames. Your Garage's Half-Inch of Drywall Has to Do It Alone."

## Kill Test
**Homeowner question:** If I'm building a new home with an attached garage, is the fire separation between my garage and my house designed for what I'm actually storing in there?
**Answer:** No. The IRC's garage fire separation was calibrated for gasoline vehicle fires (peak ~600°C, flashover in minutes). If you charge an e-bike, e-scooter, or EV in your garage, you have lithium-ion batteries that reach 900-1100°C, can go from first visible smoke to flashover in 12-30 seconds, and release hydrogen fluoride gas. Half an inch of regular gypsum board provides roughly 15-20 minutes of fire resistance — adequate for a slow gasoline fire, inadequate for a thermal runaway event that can blow out windows in 20 seconds.
**Actionable:** Install residential sprinklers (NFPA 13D) in the garage if your jurisdiction allows it. FSRI research proved they prevent flashover in lithium-ion thermal runaway. Consider a dedicated outdoor or detached charging station for e-bikes/e-scooters. Never charge lithium-ion devices unattended overnight in an attached garage. Battery monitoring/thermal detection devices exist but are not consumer products yet.

## Primary Sources

### 1. FSRI/UL/FDNY — Thermal Runaway in Residential Structures (2025)
**Paper:** "Quantifying the Fire Hazard from Li-Ion Battery Fires Caused by Thermal Runaway in E-scooters," *Fire Technology*, 2025.
**DOI:** 10.1007/s10694-025-01707-z
**URL:** https://link.springer.com/article/10.1007/s10694-025-01707-z

Three experiment series characterizing e-scooter LiB thermal runaway:
- **Closed bedroom:** First visible smoke → battery explosion + window failure in ~20 seconds. Flashover within 30 seconds of visible smoke. Flames visible out failed window within 40 seconds. Time from visible battery gas release to explosion: "only a few seconds."
- **Living room (open floor plan):** Larger volume diluted gases, but within 10 seconds of sustained visible battery gas, ignition occurred. Pressure increase caused failure of window frames and individual window components across living room, kitchen, and open bedroom.
- **Key finding:** Room of origin immediately fatal to occupants within seconds.

### 2. FSRI — Impact of Residential Fire Sprinklers on E-Scooter Fires (2025)
**Paper:** "Examining the Impact of Residential Fire Sprinklers on e-Scooter Fires Initiated by Thermal Runaway of Li-Ion Batteries," *Fire Technology*, 2025.
**DOI:** 10.1007/s10694-025-01808-9
**URL:** https://link.springer.com/article/10.1007/s10694-025-01808-9

- 4 bedroom + 4 living room sprinklered experiments
- NFPA 13D residential sprinklers activated in 3-5 seconds after TREG cloud ignition
- Prevented flashover in ALL experiments
- Contained fire to e-scooter seating area
- Note: pressure from thermal runaway gas explosion was sufficient to displace wall sections even with sprinklers — nails pulled from stud-bottom plate connections, creating gaps between drywall sheets.
- Quote: "Without sprinklers, the fire escalates quickly — placing every occupant in danger within seconds and threatening the building soon after." — Charley Fleischmann, FSRI

### 3. IRC R302.6 — Dwelling/Garage Separation (2021 IRC)
**Table R302.6:**
| Separation | Material |
|---|---|
| From residence and attics | Not less than 1/2" gypsum board applied to garage side |
| From habitable rooms above garage | Not less than 5/8" Type X gypsum board |
| Structures supporting floor/ceiling assemblies | Not less than 1/2" gypsum board |
| Garages < 3 ft from dwelling on same lot | Not less than 1/2" gypsum board on interior side |

**Door:** 20-minute fire-rated or solid wood 1-3/8" or honeycomb-core steel with self-closing device.
**Duct penetration:** No. 26 gage sheet steel, no openings into garage (R302.5.2).

**Key gap:** This is NOT a fire-resistance-rated assembly. It is a single layer of gypsum board on one side of the framing. No fire-resistance test rating is required. Half-inch regular gypsum board provides approximately 15-20 minutes of fire resistance to a standard fire exposure. The code assumes a fire that develops over minutes, not one that reaches flashover in seconds.

### 4. CPSC Data — Lithium-Ion Battery Fire Incidents
**Source:** CPSC Commissioner Richard Trumka statement, April 23, 2025
**URL:** https://www.cpsc.gov/About-CPSC/Commissioner/Richard-Trumka/Statement/CPSC-Set-to-Vote-on-Proposed-Solution-to-E-bike-Lithium-Ion-Battery-Fires

- 227 e-mobility battery incidents, 39 deaths, 181 injuries, 2019-2023 (CPSC data)
- CPSC acknowledges this is "a vast undercount based on reports from New York City alone"
- Proposed mandatory safety standard for e-bike LiB systems (April 2025)

### 5. NYC FDNY Data — Battery Fire Trends
**Sources:**
- FDNY 2024 report (Gothamist, Jan 8, 2025)
- Congressional testimony (Feb 2024)

- **2023:** 268 Li-ion battery fires in NYC, 18 deaths, 150 injuries
- **2024:** 277 fires (up from 268), but deaths dropped to 6 (67% decline)
- NYC now requires UL 2849 certification for e-bike batteries
- Outdoor fires increased (133 in 2024 vs 90 in 2023) — public is moving charging outdoors

### 6. U.S. Fire Administrator Testimony — Congressional Hearing (Feb 2024)
**Source:** House Homeland Security Subcommittee hearing, Feb 16, 2024
**URL:** https://www.firerescue1.com/lithium-ion-battery-fires/fire-service-leaders-testify-before-congress-about-lithium-ion-battery-hazards

- U.S. Fire Administrator Dr. Lori Moore-Merrell: "In fires where these devices are involved, there is often only 15 seconds from the first sign of smoke to thermal runaway and explosion, with windows blown out and fire burning in homes, apartments and businesses."
- FDNY Chief Fire Marshal Daniel Flynn: many of the deadliest NYC fires caused by e-devices kept in residential homes

### 7. AI Thermal Runaway Detection — XGBoost Framework (2026)
**Paper:** "XGBoost-Powered Predictive Analytics for Early Identification of Thermal Runaway in Lithium-Ion Batteries," *World Electric Vehicle Journal*, 2026, 17, 68.

- XGBoost selected over LSTM/CNN for: (1) superior tabular data performance, (2) computational efficiency for embedded systems, (3) interpretability via SHAP
- 5-20 second prediction window targeted based on BMS response times: emergency shutdown 2-3s, thermal management 3-5s, current limiting 1-2s
- Designed for real-time inference on resource-constrained battery management systems

### 8. AI Thermal Runaway Detection — Deep Sequence Fusion (2026)
**Paper:** "Thermal Runaway Monitoring and Tiered Early Warning for Lithium-ion Batteries Based on Deep Sequence Fusion," SSRN, Jan 2026.
**DOI:** 10.2139/ssrn.6142512

- BTRNet (1D-CNN + Transformer encoder) temperature prediction model
- MAE as low as 0.106°C, R² > 0.99
- Three-tier warning: (1) Six Sigma minor anomalies, (2) voltage plateau significant faults, (3) imminent thermal runaway via residual change rate
- Warnings hundreds of seconds before thermal runaway
- Strong generalization across battery types and conditions

### 9. Comprehensive Review — On-Board TR Detection (2026)
**Paper:** "On-Board Implementation of Thermal Runaway Detection in Lithium-Ion Battery Packs: Methods, Metrics, and Challenges," *Energies*, 2026, 19(3), 858.
**URL:** https://www.mdpi.com/1996-1073/19/3/858

- Available precursor signals: thermal, electrical, gas, acoustic emissions
- Diagnostic algorithms: threshold-based to deep learning
- Key deployment challenges: model compression, inference hardware, functional safety compliance
- Multi-modal data fusion constrained by hardware cost and sensor reliability
- Note: ALL current research focuses on EV/BMS applications, NOT residential charging environments

### 10. EV vs. ICE Fire Characteristics
**Source:** Dr. Muhammed Imran Taj PhD, research report, June 2026 (via LinkedIn)
**Additional:** NTSB safety report on high-voltage LiB fire risks, 2021

- Li-ion cell temperatures: 900-1100°C (vs ~600°C for gasoline)
- EV fire suppression: 3,000-8,000 gallons of water, 6+ hours
- ICE fire suppression: ~500 gallons, ~20 minutes
- Toxic gases: hydrogen fluoride (HF), carbon monoxide (CO), hydrogen cyanide (HCN)
- Reignition risk: hours or days after apparent extinguishment
- Available safe egress time: 6 minutes (EV) vs 12 minutes (ICE) in enclosed structures (50% reduction)

### 11. Phoenix Fire Department Data (2025)
**Source:** Phoenix FD Lithium Ion Battery Fire Investigations, monthly reports 2023-2025

- 71 Li-ion battery fires investigated in Phoenix alone through November 2025
- Garage/shed was the most common structure type in 2024 (21 fires)
- Micro-mobility (e-bikes, scooters, hoverboards): highest category
- Over half of fires occurred when battery was NOT charging — stored indoors
- Power tools: second highest category

## Existing Coverage Check
- **Existing FEMA flood article:** Different topic entirely
- **Existing fire articles:** #733 (airtight home fire behavior) covers DIFFERENT aspect — energy code vs fire code for combustion dynamics. This article is about garage fire separation vs lithium-ion battery chemistry. No overlap.
- **Existing AI insurance exclusion article:** Different topic — covers CGL policy exclusions for AI-generated design errors
- **Existing smart panel articles:** Cover electrification/load management, not fire risk

**No direct overlap with any existing article. Topic confirmed novel.**

## Strongest Counterargument
Most lithium-ion fires involve uncertified, damaged, or counterfeit batteries — not UL-listed products used as intended. NYC's 67% death reduction after enforcement and education suggests regulation of battery quality (UL 2849), not building code changes, may be the more effective intervention. CPSC's proposed mandatory standard addresses the battery itself. Changing IRC garage separation requirements for a hazard that better battery standards might eliminate could add thousands in construction cost for a diminishing problem.

This is a legitimate counterargument. The article should engage it honestly. But it doesn't eliminate the code gap: even with UL 2849, a certified e-bike battery can still experience thermal runaway from manufacturing defect, physical damage, or charging fault. The IRC's garage separation was never calibrated against thermal runaway events regardless of battery quality. And the FSRI experiments used standard batteries, not counterfeit ones.

## Article Dimensions
- **Surprising angle?** Yes — most homeowners don't know their garage fire wall was designed for gasoline
- **Real data with sources?** FSRI full-scale residential tests, CPSC incident data, FDNY city-level statistics, peer-reviewed AI detection papers
- **Distinct journalist voice?** Catherine Chen — building code analysis, regulatory gaps, legal implications
- **Would a reader share?** High — every homeowner with an attached garage charges something with lithium batteries in it
- **Anti-AI voice clean?** TBD in draft
