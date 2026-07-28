# Research: Panel Upgrade Algorithm vs. Electrification Gap

## Angle
Twenty-three million American homes need an electrical panel upgrade to go all-electric. The NEC demands it. A Purdue lab ran a fully electrified house — heat pump, water heater, EV — on a 100-amp panel for 31 winter days, including a -20°C cold snap, by letting an algorithm manage the loads instead. The code doesn't recognize that yet. Meanwhile, homeowners are paying $2,000–$10,000 for hardware upgrades that software might eliminate.

## Kill Test
If you're electrifying a home (heat pump, EV charger, electric water heater) and your electrician says you need a panel upgrade, this tells you there's a proven algorithmic alternative — and why you can't use it yet.

## Journalist
Catherine "Code" Chen — this is a code-vs.-technology story at its core. NEC Article 220 prescribes how to size panels. The algorithm sidesteps the prescription entirely. The regulatory gap IS the story.

## Primary Sources

### 1. Purdue University Field Study (Pergantis et al., 2024)
- **Paper:** "Protecting residential electrical panels and service through model predictive control: A field study"
- **Source:** Preprint submitted to Elsevier, September 2024. Center for High Performance Buildings, Purdue University.
- **Key findings:**
  - 31-day field test in occupied, fully electrified single-family home
  - Code-minimum insulation, air-to-air heat pump with backup resistance, resistance water heater, PHEV with Level I (1.8 kW) charging
  - Outdoor temps as low as -20°C
  - Home nominally requires 200A panel under NEC; system maintained current within 100A limits
  - Two-level control: high-level MPC plans device setpoints; low-level monitors real-time and ramps down if necessary
  - Only adjusted HP and WH temperature setpoints via manufacturer APIs — no hardware changes
  - Simulations show same 100A could handle second EV with Level II (11.5 kW) charging
  - **Savings:** $2,000–$10,000 per household by avoiding panel upgrade
  - First field demonstration of whole-home current-limiting control in the research literature

### 2. U.S. DOE EERE Report (2023)
- **Source:** U.S. Department of Energy's Office of Energy Efficiency & Renewable Energy
- **Key findings:**
  - ~21% of U.S. homes have 100A or less panel capacity
  - ~44% of homes have two or fewer slots available in their panels
  - ~23 million single-family homes could require panel upgrades for full electrification
  - Gas-heated homes generally have smaller panels than electrically heated homes
  - Colder climates need larger equipment + backup resistance heating, making the problem worse

### 3. Los Angeles DWP Study
- **Key findings:**
  - 46% of single-family homes in disadvantaged communities in LA have panels rated at 100A or less
  - Additional 31% rated between 100A and 200A
  - Estimated $780 million to $1.8 billion to upgrade all deficient single-family residential service panels for full electrification in Los Angeles alone
  - Equity issue: disadvantaged communities have the worst panels and least ability to pay

### 4. EPRI (Electric Power Research Institute) Report
- Referenced in Purdue paper
- Panel size breakdown by four census regions
- Of homes with 100A or less, 80% have three or fewer large electrical appliances
- Less than 20% of homes in West, Midwest, Northeast are all-electric (44% in South)

### 5. Pecan Street (Austin, TX Survey)
- Surveyed 263 residences
- Floor area, year built/last renovated, and fuel source have most impact on panel size
- But much of this data not publicly available (renovation dates especially)

### 6. Consumer Cost Data
- Panel upgrade costs (Angi, This Old House, Fixr, HomeAdvisor, multiple sources):
  - 100A upgrade: $800–$1,500
  - 200A upgrade: $1,300–$4,500
  - Panel relocation: add $500–$4,000
  - Full home rewire: $12,000–$20,000
  - Average: $1,300–$3,000 for most 200A upgrades
  - With service line, meter box, grounding: can reach $6,000+

### 7. NEC 220.87 — Determining Existing Loads
- Allows using actual maximum demand data (1-year POCO records or 30-day load test) instead of theoretical calculations
- But: exception in NEC 2020/2023 disqualifies homes with solar PV from using this method
- Key limitation: 220.87 was designed for adding loads to existing installations, not for algorithmic real-time management
- No NEC provision currently permits algorithmic load management as a substitute for panel capacity
- Codes require the panel to HANDLE the load at any given time, not to MANAGE it algorithmically

### 8. SPAN Smart Panel
- Commercial product: smart electrical panel with real-time load monitoring
- Can prioritize and shed loads to stay within panel limits
- NVIDIA-backed XFRA product uses SPAN panels for distributed AI compute in homes
- Cost: $3M/MW vs $15M/MW for traditional data centers (different application but shows real-time panel intelligence is commercial reality)

## Novel Analysis
- **National upgrade cost:** 23M homes × $2,000–$10,000 = $46 billion to $230 billion for panel hardware alone
- **Algorithmic alternative cost:** Smart thermostat + communicating appliances + software = fraction of hardware upgrade
- **Equity dimension:** Homes that most need electrification (gas-heated, old, disadvantaged communities) have the smallest panels and least ability to pay for upgrades
- **The code gap:** NEC was written for static loads. Algorithms manage dynamic loads. The code hasn't caught up.

## Strongest Counterargument
NEC codes exist because electrical fires kill people. A panel is hardware — it works when the power is on and the software is off. An algorithm is a single point of failure: if the software crashes, the thermostat loses WiFi, or the API changes, the loads could exceed panel limits simultaneously. The Purdue system itself needed a dedicated low-level safety controller precisely because the high-level optimizer can't be trusted to never fail. Building codes are conservative for a reason. The graveyard of "smart" home systems that stopped working after a firmware update is deep.

## Limitations
- Purdue study is a single occupied house in Indiana — limited to one climate, one building type, one occupant profile
- 31 days is a proof-of-concept, not a code-level reliability demonstration
- The system used manufacturer APIs that aren't standardized — a different heat pump or water heater may not have them
- No study yet on what happens when the algorithm fails (actual failure modes, not simulated)
- SPAN is commercial but not positioned as a "skip your panel upgrade" product — it's marketed alongside upgrades
- NEC code cycle takes 3 years; next edition is 2026 — algorithmic provisions are not in draft

## Headline Options
1. "Twenty-Three Million Homes Need a Panel Upgrade to Go Electric. An Algorithm Kept One Running on 100 Amps for a Month."
2. "Your Electrician Says You Need a $4,500 Panel Upgrade. A Purdue Lab Proved You Might Not."
3. "The NEC Says Your Home Needs 200 Amps to Go All-Electric. An Algorithm Ran It on 100."
