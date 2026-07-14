# Research Notes: AI Smart Panels & the Residential Electrification Capacity Gap

## Angle
48 million US homes supposedly need panel upgrades to go all-electric. But actual field data shows most homes never use even half their existing capacity. AI-powered smart panels and load management solve the "capacity gap" through software, not copper — but most builders still spec dumb panels.

## Slug
`smart-panel-electrification-gap`

## Journalist
Jake "Jackhammer" Kowalski — construction tech beat

## Key Data Points

### The Problem (Pecan Street Research, Aug 2021)
- **48 million** US single-family homes need electric service panel upgrades to fully electrify (Pecan Street)
- At average $2,000/upgrade = **~$100 billion** national cost impediment
- **More than half** of new homes being built have panels too small for full electrification (~550,000 homes/yr)
- Source: "Addressing an Electrification Roadblock: Residential Electric Panel Capacity" — Pecan Street Inc.
- 21% of US homes have 100A or less panel capacity (DOE EERE 2023)
- 44% of homes have two or fewer slots available in panels (DOE EERE 2023)
- LA alone: estimated $780M–$1.8B to upgrade all deficient single-family residential panels (LADWP)

### The Surprise (Peninsula Clean Energy Pilot, 2024-2025)
- PCE analyzed 700+ all-electric single-family homes in service territory
- **99% never drew more than 100 amps** of electric current all year
- **Most common peak demand: 29 amps** — less than 1/3 of a 100A panel's capacity
- Finding: "In most cases, homes can go all-electric on 100 amps" — Pamela Leonard, SVCE
- **Caveat:** Small sample, one county, temperate Bay Area climate. May not apply in extreme climates.
- Source: Canary Media, April 2026; PCE analysis

### NEC Code Evolution (2026)
- **NEC 625.42** now specifically permits EV Energy Management Systems (EVEMS) that automatically manage charging loads
- **2026 NEC** introduces new provisions for energy management at the service level
- Local jurisdiction adoption required
- This is the code foundation enabling smart load management as an alternative to physical panel upgrades

### Smart Panel Products & Costs
| Product | MSRP/Hardware | Installed Cost | Key Feature |
|---------|---------------|----------------|-------------|
| SPAN Panel MAIN 32 | $3,500 | $6,500–$8,000 | PowerUp EMS, circuit-level control, 32 spaces |
| SPAN Panel MAIN 40 +MID | — | — | 40 spaces, builder-focused, new March 2025 |
| SPAN Panel MLO 48 | — | — | 48 spaces, largest builder model |
| Schneider Pulse | — | — | AI-driven energy orchestration, auto-priority |
| Leviton Smart Load Center | $2,000–$3,000 | — | Smart breakers, best for new construction |
| Siemens Smart Panel | $2,500–$3,500 | — | Utility grid integration, demand response |
| Smart Main Panel | $1,650+ | $2,500–$5,000 | Fault detection, solar+battery gateway |
| EVEMS (DCC-9, Emporia) | $200–$500 | — | Add-on device, NOT panel replacement |

### Builder Economics (Critical for Original Contribution)
- **SPAN claim:** New builder models save **$3,000–$10,000 per site** by avoiding 400A utility service
- **PulteGroup** (top 3 US builder) already SPAN partner: "smart, flexible electrical systems" — Kirk Hammersmith, National Director Procurement
- **Pre-wiring for Level 2 EV charging:** $300–$1,500 at construction (NAHB/HomeAdvisor)
- **Panel upgrade cost (retrofit):** $1,300–$5,000 for 200A service (This Old House/Angi)
- **400A service upgrade:** $8,000–$12,000 (Fixr)
- **Full smart panel retrofit:** $4,000–$10,000 installed (Qmerit)

### The Original Contribution Math
**National new construction calculation:**
- ~1.4 million US housing starts (2025-2026 estimates)
- Smart panel premium at construction: ~$1,500–$3,000 over standard panel
- National cost to make all new homes electrification-ready via smart panels: $2.1B–$4.2B per year
- vs. Pecan Street's $100B retrofit estimate for existing 48M homes
- **Cost per home avoided retrofit:** $1,500–$3,000 now vs. $4,000–$10,000+ later
- **The real insight:** The problem isn't amps, it's peaks. AI load management handles the 0.1% of time when everything runs simultaneously. The other 99.9%, your home uses 29 amps.

### Counterarguments (Required)
1. **Climate dependency:** PCE study was Bay Area (mild). Cold climates with resistance backup heat during heat pump defrost = massive peaks. The 29-amp finding may not apply in Minnesota.
2. **Smart panel longevity:** What happens when the software company goes bankrupt? A dumb panel works for 40 years. A smart panel with bricked firmware is worse than nothing.
3. **Contractor skill gap:** Most residential electricians have never installed a smart panel. Misinstallation creates worse problems than the old panel.
4. **EVEMS is often enough:** For builders just adding EV charging, a $200–$500 EVEMS is dramatically cheaper than a $3,500+ smart panel. Don't oversell.

### Limitations
- PCE data is from one temperate county in California (San Mateo)
- No large-scale field studies of smart panel performance in cold climates with heat pump defrost
- Builder cost savings are primarily SPAN's own estimates — independent verification limited
- NEC 2026 adoption varies by jurisdiction — many areas still on 2020/2023 NEC
- Smart panel market is young — no 10-year reliability data exists
- Pecan Street's 48M figure is from 2021 and has been widely cited but not independently verified
