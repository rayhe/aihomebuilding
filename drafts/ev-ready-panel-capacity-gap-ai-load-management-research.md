# Research: EV-Ready Home Panel Capacity Gap + AI Load Management

## Core Angle
New homes in California (and increasingly other states) must be "EV-ready" under CalGreen 2022 / NEC 2023 Article 625. But the mandate only requires a dedicated circuit — it doesn't verify whether the electrical panel has enough capacity when the EV charger, heat pump, electric range, dryer, and water heater all run simultaneously. AI-powered smart panels could dynamically manage this load. Nobody installs them in new homes.

## Key Data Points

### Regulatory Requirements
- **CalGreen 2022 (Title 24):** All new single-family homes must have at least one EV-capable parking space with a dedicated 40A, 208/240V branch circuit (Section 4.106.4)
- **NEC 2023 Article 625:** Requires dedicated EV circuits with specific breaker sizing. A Level 2 charger (48A max) needs a 60A breaker (80% continuous load rule)
- **NEC 2023 Article 220.87:** Allows optional load calculation using actual measured demand data — but nobody measures
- **IRA + federal incentives:** 30% tax credit for EV charger installation (up to $1,000 residential)

### The Load Problem
- Standard new home panel: 200A service
- Level 2 EV charger: 40-48A (draws 9.6-11.5 kW)
- Heat pump (cold climate): 30-60A (7.2-14.4 kW)
- Electric range/oven: 40-50A (9.6-12 kW)
- Electric dryer: 24-30A (5.8-7.2 kW)
- Heat pump water heater: 15-30A (3.6-7.2 kW)
- **Simultaneous peak: 149-218A** — dangerously close to or exceeding 200A service
- NEC load calculations use diversity factors (not everything runs at once), but electrification is changing that assumption

### The Gap
- Traditional load calc assumes gas appliances for some loads. All-electric homes change the math.
- 15% EV adoption already causes transformer overload in some neighborhoods (MDPI 2026 study)
- Smart charging reduces peak demand by 44.7% (same study, XGBoost demand forecasting)
- NFPA data: Electrical distribution equipment is the #2 cause of home fires (behind cooking)
- Real-world case: EV owner's NEMA 14-50 outlet nearly burned down garage after 12 years (EV OG video)

### AI/Smart Panel Solutions
- **Span Panel ($5,000-8,000 installed):** AI-powered smart electrical panel. Monitors every circuit in real-time. Can automatically shed loads to prevent overload. CES 2023 Innovation Award.
- **Lumin ($3,000-5,000):** Smart panel add-on, manages loads dynamically
- **Enphase IQ EV Charger:** UL 3141-compliant Power Control Software — dynamically adjusts EV charging rate based on real-time household consumption
- **Schneider Square D Energy Center:** Smart subpanel for whole-home energy management
- **NEC Article 220.87:** Allows measured demand data for load calcs — smart panels COULD provide this data but aren't used for sizing

### Why Nobody Does This
- Smart panels cost $5,000-8,000 more than standard panels ($1,500-3,000)
- Builders optimize for first cost, not operating cost
- Code officials check for dedicated circuit but don't verify total panel capacity under simultaneous load
- Homebuyers don't know to ask
- Traditional electricians don't install smart panels

### Sources
1. MDPI 2026 paper: "AI-Driven Smart Charging and Fire-Risk-Aware Governance" — 15% EV adoption causes overload, smart charging reduces peak 44.7%
2. NEC 2023 Articles 220, 625, 706
3. CalGreen 2022 Section 4.106.4
4. Enphase PCS documentation — UL 3141 compliance
5. EV OG YouTube — real-world garage fire near-miss from NEMA outlet
6. State Farm insurance guide — EV charging risks
7. NFPA home fire statistics

## Journalist: Catherine Chen
## Slug: ev-ready-panel-capacity-gap-ai-load-management
