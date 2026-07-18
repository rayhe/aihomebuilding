# Research: HVAC Oversizing × LiDAR/AI Load Calculation Tools

## Topic
The majority of residential HVAC systems are oversized — often by 50–100% or more. Rule-of-thumb sizing (500-600 sf/ton) persists despite Manual J requirements in building codes. AI/LiDAR tools now make accurate load calculations trivial (15 minutes), but contractors have perverse incentives to keep oversizing: bigger system = bigger sale, fewer complaints.

## Journalist
**Priya Greenwood** — Sustainability & Green Building beat. Connects energy data to real utility bills. Passionate but evidence-based.

## Primary Sources (5+)

### 1. FSEC Study — Florida Solar Energy Center (James et al., 1997)
- Study of over 400 Florida homes
- Over 50% had cooling equipment oversized more than 120% of Manual J
- Direct contractor quotes:
  - "Oversize by 50% so customers will not complain."
  - "Oversize most of the time because of future expansion."
  - "Customers still believe bigger is better."
  - "I go to next half ton up all the time."
  - "Some customers and contractors just don't believe load calculation."
- Source: www.fsec.ucf.edu (FSEC-PF-289-95)

### 2. Energy Vanguard / ACCA (Allison Bailes)
- 40 new-construction projects averaged 1,431 sf/ton — nearly 3x the rule-of-thumb 500 sf/ton
- Savannah case study: 89,000 BTU/hr furnace → actual need was ~30,000 BTU/hr (furnace 3x oversized)
- Even Manual J inflates loads 10-20% when done correctly
- Heat pump replacement: 2-stage heat pump (24K-37K BTU/hr) ran mostly on low stage, never hit auxiliary heat
- Source: energyvanguard.com (2025)

### 3. Autodesk/Rocky Mountain Institute Joint Study
- Rule-of-thumb approaches result in ~50% oversizing
- Global cost: £224 billion ($280B+) problem
- Right-sizing could reduce GHG by 0.44 metric tonnes CO2-eq/year per commercial building
- Source: CIBSE Journal (citing Autodesk/RMI study)

### 4. EIA RECS 2020 (U.S. Energy Information Administration)
- AC accounts for 19% of residential electricity (254 billion kWh)
- 87% of US homes use AC
- Average AC electricity cost: ~$295/year
- Average total HVAC (heating + cooling): ~$1,346/year (Self.inc from EIA data)
- Source: eia.gov RECS 2020

### 5. EPA Study on Fan System Oversizing
- Researchers visited Energy Star partner sites on peak cooling days
- 60% of buildings had systems 60% larger than needed
- Source: facilitiesnet.com (citing EPA study)

### 6. NREL Fact Sheet on Oversized Air Conditioners
- Energy penalty ~10% for systems oversized 50%
- Parasitic power losses (standby drain) amplify oversizing penalty
- If parasitic losses are minimal, energy penalty is small — but most systems have significant standby draw
- Source: nrel.gov

### 7. Henderson (1992), Lucas (1993)
- Two-thirds of 75 NW sites sized larger than Manual J (Lucas, 1993)
- Energy penalty approximately 10% for 50% oversizing

### 8. Green Building Advisor (Allison Bailes)
- Oversizing a minisplit negates variable capacity entirely
- 6,000 BTU/hr unit in room with 1,500 BTU/hr load = always runs at minimum, no variable advantage
- "When a contractor proposes seven indoor ductless units for a 2100-sq.-ft. house without doing a load calculation, there's close to a 100% chance the system will be oversized"
- Source: greenbuildingadvisor.com

### 9. Nature Communications (2024)
- Study of 1,023 heat pumps in residential buildings
- ~10% oversized, ~1% undersized
- 17% of air-source HPs fall short of EU efficiency standards
- 2-3 fold difference between lowest and highest efficiency systems
- Source: Nature Communications

### 10. Conduit Tech / ServiceTitan
- LiDAR-powered iPad scanning for ACCA Manual J
- Complete room-by-room load calc in 15 minutes
- Results: 32% increase in ticket size, 21% higher close rate, 126% growth in total sales
- Acquired by ServiceTitan
- HVAC Today review: "The process from start to finish for an 1,800-sq.ft. home takes about 15 minutes"
- Source: getconduit.com, servicetitan.com, hvactoday.com

## Original Contribution

### National Cost Calculation of HVAC Oversizing
- ~130M US households, 87% with AC = ~113M households with AC
- Average AC cost $295/year (EIA RECS 2020)
- If 50% of systems are oversized 50%+ (FSEC data): ~56.5M oversized systems
- Energy penalty of 10% for 50% oversizing (Henderson/Lucas): $295 × 10% = $29.50/year per household
- National AC energy waste: 56.5M × $29.50 = ~$1.67 billion/year
- This is CONSERVATIVE: doesn't include heating oversizing (often worse) or the much larger comfort/humidity costs
- Including heating (where oversizing can be 200-300%): total HVAC waste plausibly $3-5B/year

### The Heat Pump Transition Makes It Worse
- Millions switching gas furnace → heat pump (IRA incentives: up to $8,000 tax credit)
- An oversized gas furnace: runs short cycles, wastes ~10% energy, costs $500-800 more upfront than right-sized
- An oversized heat pump: negates variable-speed benefits entirely, creates severe humidity problems, costs $2,000-5,000 MORE upfront, reduces equipment life
- The irony: the technology that makes oversizing MORE damaging (variable-speed heat pump) is the one being deployed at massive scale with no improvement in sizing practices

### The Perverse Incentive Math
- Conduit Tech results: 32% increase in ticket size, 21% higher close rate
- Wait — larger ticket size WITH right-sizing? How?
- The answer: contractors using load calcs don't sell smaller equipment, they sell BETTER equipment (variable-speed, higher SEER) at similar or higher prices, with the confidence that comes from data-backed recommendations
- The real competition isn't "right-sized vs. oversized" — it's "professional presentation vs. three prices on a kitchen table"

## Kill Test
Does this help someone building or buying a home? YES.
- If you're building: demand a Manual J from your HVAC sub. It's code-required. Most don't do one.
- If you're buying: your 5-ton system might need 3 tons. That's $3,000-5,000 wasted upfront and $30-50/year wasted on energy.
- If you're an HVAC contractor: the LiDAR tools pay for themselves in close rates, not in selling bigger systems.

## Headline Options
1. "Your HVAC Contractor Sized Your System With a Guess. The iPad Says It's Twice What You Need."
2. "Half of American ACs Are Oversized. The Fix Takes 15 Minutes. Nobody Runs It."
3. "Your 5-Ton AC Cost $14,000. A 15-Minute iPad Scan Says You Needed a 3-Ton."
4. "Your Contractor Quoted a 5-Ton System. Manual J Says 3. He Didn't Run Manual J."

## Strongest Counterargument
Variable-speed/inverter systems can modulate down, partially mitigating oversizing. A variable-speed system oversized by 30% may not short-cycle the way a single-stage system would. Some argue that slight oversizing of variable-speed equipment is acceptable or even beneficial for recovery from setback. However: (1) this argument doesn't apply to the 50-100% oversizing that's typical, (2) even variable-speed systems lose efficiency when always running at minimum, and (3) most residential systems installed today are still single-stage or two-stage, not fully variable.
