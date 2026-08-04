# Research: AI Panel Load Assessment vs. Unnecessary Upgrade Gap

## Angle
Your electrician says you need a $5,000 panel upgrade before you can install an EV charger. An AI tool that reads a photo of your panel and runs NEC 220.82 says you don't. The gap between the two answers is costing American homeowners billions.

## Journalist
Jake Kowalski — construction tech, tools, AI assessment vs. manual estimation

## Key Data Points

### The Unnecessary Upgrade Problem
- **70% of homeowners already have enough capacity** for a Level 2 EV charger (ChargeRight / Jason Walls, IBEW Licensed Master Electrician, Local 369)
- **NEC 220.82 (Optional Method) vs Standard Method gap**: Same 2,400 sqft home, 200A panel, 48A Tesla charger:
  - Standard Method (contractor default): 204A → "you need an upgrade" ($3,000-$5,000)
  - NEC 220.82 (designed for existing homes): 149A → fits, $0 upgrade
  - **23-amp gap**, that's the entire cost difference
- Panel upgrades: $3,000-$5,000 typical; full service upgrades $6,000-$40,000 (PG&E data); 400A upgrades $10,000-$30,000
- Source: ChargeRight YouTube "The $5,000 Panel Upgrade Scam for EV Chargers 2026" and "Why Electricians Quote $5K Panel Upgrades You Don't Need!"

### Peninsula Clean Energy Evidence
- Fully electrified 9 homes as pilot demonstration
- **Zero needed a service upgrade** — even though 5 of the 9 had only 100A service
- "Research indicates that 99% of both gas-using and all-electric homes never draw more than 100 amps of electric current throughout the year"
- Source: peninsulacleanenergy.com

### AI Tools That Already Exist
1. **Qmerit LoadCRE** (Load Capacity Recommendation Engine):
   - AI computer vision analyzes panel photos via Microsoft Cognitive Services
   - Auto-generates NEC-compliant load calculations for permits
   - Identifies panel specifications, available circuit spaces, tandem breakers, total capacity
   - Determines if load management or panel upgrade is needed
   - Projected benefits: labor savings (hours → instant), safety standardization, faster/more accurate quotes
   - Source: Qmerit press release, May 2026

2. **SPAN Smart Panel** ($3,500):
   - PowerUp feature: bypass service upgrades for EV, heat pump installs
   - Eaton invested $75M (March 2026) — joint products Q2 2026
   - SPAN Panel retails ~$3,500 vs $300 for traditional panel
   - Qualifies for 30% tax credit (up to $600)
   - Source: Canary Media, Solar Power World, SPAN.io

3. **PG&E SPAN Edge / PanelBoost**:
   - Installed at the electric meter, $500-$2,000 with electrician
   - vs. service upgrades costing $6,000-$40,000 and taking months
   - PG&E plans to scale to thousands of customers summer 2026
   - Source: PG&E/Morningstar press release, Feb 2026

4. **ABB ReliaHome Smart Panel**:
   - Whole home energy management system, mounts next to existing panel
   - Monitor and control key circuits via app
   - Manages EV chargers, pools, water heaters to stay within service
   - Source: ABB, featured in "Upgrading Your Electrical Panel to 400 Amps" YouTube

5. **ChargeRight** ($12.99 assessment):
   - Online NEC 220.82 load calculation tool
   - Founded by Jason Walls, IBEW Licensed Master Electrician
   - Source: evchargeright.com

### Market Context
- NYSERDA: "Electric panel upgrades often cost between $3,000 and $5,000"
- Eaton forecasts: energy consumption to increase 65% in residential/commercial by 2030
- EV charging expected to account for 40-60% of home energy usage (Eaton)
- Rewiring America: 14 million electric machines needed by 2026 across US
- ~120 million US households
- Schneider Electric discontinued its Schneider Pulse smart panel — market consolidation
- Wood Mackenzie analyst: "The lowest-cost solution will always rely on software. It seems a smart meter and an EV charger, or a battery, are the only devices you need."

### NEC Code
- NEC Article 220: Load calculations
- NEC 220.82: Optional Method for existing dwelling units — uses demand factors that account for diversity (not everything runs at once)
- Standard Method: adds loads at face value, substantially overstates actual peak demand
- NEC has been adding provisions for energy management systems that can dynamically reduce loads

### The Gap / Original Contribution
- If ~2 million residential EV charger installations happen per year
- And 30% are quoted unnecessary upgrades at $4,000 average
- That's ~$2.4 billion/year in unnecessary panel upgrades
- Qmerit's AI can do the assessment from a phone photo in under a minute
- But most electricians still use the Standard Method because it's simpler and conservative (and the upgrade is revenue)
- The incentive structure is perverse: electricians profit from recommending upgrades

### Strongest Counterargument
- Electricians use the Standard Method because it's conservative and safe
- Underestimating load = fire risk, liability
- NEC 220.82 is optional — not wrong, but requires more professional judgment
- Smart panels are expensive ($3,500 SPAN) and add complexity
- Some homes genuinely do need upgrades, especially pre-1960s with 60A service
- AI tools are new and unproven at scale — misidentification of panel specs could be dangerous

### Limitations
- 70% figure from ChargeRight (single source, commercial interest in selling assessments)
- Peninsula Clean Energy pilot was 9 homes (tiny sample)
- "99% never draw more than 100A" needs original source verification
- Nationwide panel upgrade statistics don't exist — estimates only
- AI panel assessment accuracy data not independently validated
