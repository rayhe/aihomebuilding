# Research: AI Electrification Calculators Overestimate Panel Upgrade Needs

## Thesis
AI-powered electrification planning tools (Rewiring America, QuitCarbon, Zero Homes, etc.) routinely flag panel upgrades as necessary by adding nameplate amperage ratings of appliances. Real-world data shows 99% of all-electric homes never exceed 100 amps, with typical peaks around 29 amps. This creates a false barrier costing homeowners $2K-$30K they may not need to spend.

## Journalist
Priya Greenwood (Sustainability & Green Building)

## Kill Test
Does this help someone building or buying a home? YES — homeowners considering electrification face this exact decision. Panel upgrade costs ($2K-$30K) are often cited as the biggest barrier to going all-electric. If the barrier is overstated, homeowners need to know.

## Primary Sources

### 1. Peninsula Clean Energy (PCE) — Analysis of 100,000+ homes
- **Finding:** 99% of both gas-using and all-electric single-family homes never draw more than 100 amps all year
- **Detail:** 80%+ never pull more than 40 amps
- **Source:** PCE building electrification resources (peninsulacleanenergy.com)
- **Quote:** Blake Herrschaft (building electrification programs manager): "It's almost impossible — even if you tried — to use every load in your house at once"

### 2. PCE Pilot (2024, published Jan 2026)
- 9 low-income homes in San Mateo County, CA
- 5 households had 100-amp panels
- All fully electrified (furnace, water heater, stove, dryer → heat pump equivalents) without panel upgrades
- No smart panels needed
- Average cost to PCE: $35K per residence ($25K for like-for-like replacements)
- Most households saw significant monthly energy bill savings
- **Source:** library.peninsulacleanenergy.com case study (Jan 2026)

### 3. PCE Analysis of 700+ All-Electric Homes (2024)
- Most common peak demand: 29 amps
- Less than 1/3 of a 100-amp panel's capacity
- **Source:** PCE Design Guidelines for Home Electrification (May 2024)

### 4. Redwood Energy — Service Upgrades Study (2022)
- Electrical service upgrades in California: $2,000 to $30,000
- Timeline: 2 months to 2 years
- **Source:** redwoodenergy.net/research/service-upgrades-for-electrification-retrofits-study-final-report-2

### 5. Pecan Street Research
- **48 million US homeowners** have panels below 200 amps
- Cavan Merski (senior data analyst): "When you're working with limited funds, being able to electrify without a panel upgrade is great"
- **Source:** pecanstreet.org/publications/addressing-an-electrification-roadblock-residential-electric-panel-capacity/

### 6. PG&E + Span Pilot (March 2026)
- Testing Span meter-connected devices + Itron digital meters
- Span devices plug into utility meters and control when/how home uses power
- Avoid need for higher-capacity panels
- Starting with PG&E employee homes, larger rollout to volunteers in 2027
- **Source:** Canary Media, March 10, 2026

### 7. Wayne Szeto Case Study (Burlingame, CA)
- Fully electrified 2,350 sq ft 1958 ranch on 100 amps
- Heat pump HVAC, HPWH, induction stove, HP dryer, solar, battery, EV charger
- Contractors initially quoted $20K service upgrade — he avoided it
- **Source:** Canary Media, Dec 2023

### 8. Passive House Alberta / Calgary Retrofits
- Successfully electrified 100-amp homes in extreme cold climate
- Required Passive House insulation levels to keep heating loads manageable
- **Source:** passivehousecanada.com (2023 report)

## Original Contribution
Nameplate vs. actual draw calculation:
- Typical all-electric home nameplate circuit totals:
  - Heat pump HVAC: 40A breaker
  - HPWH: 30A breaker
  - Induction range: 40A breaker
  - Electric dryer: 30A breaker
  - EV charger (Level 2): 40A breaker
  - General circuits: 50A
  - TOTAL: ~230A nameplate
- Actual measured peak: 29A typical (PCE data)
- **Gap: 87% between nameplate sum and actual peak**
- This 8:1 ratio means calculators using simple addition overstate needs by a factor of 8

NEC Article 220 does include demand factors (first 10kVA at 100%, remainder at 40%), but:
- Many online calculators skip demand factors
- Many electricians default to conservative nameplate addition for liability reasons
- AI electrification tools typically flag any home with <200A as "needs upgrade"

## Strongest Counterargument
- In cold climates with resistance backup heat (emergency/aux heat strips), actual draw CAN approach limits
- A leaky 1960s home in Minnesota with aux heat + EV charging + cooking could exceed 100A during a polar vortex
- Calgary worked because it was Passive House — very low heating loads
- Electricians face liability if they don't recommend upgrades and problems occur
- NEC calculations exist for safety, not optimization — the conservative buffer has prevented fires

## Limitations
- Most data comes from California's mild climate
- PCE pilot was only 9 homes (small sample)
- 700+ home analysis also in Bay Area climate
- No equivalent large-scale data from cold climates
- Long-term reliability data on running near capacity unknown
- Smart panels (Span, Lumin) could change the calculus but add $3K-$5K cost

## Actionable Takeaways
1. Before accepting a panel upgrade quote, request a load calculation using NEC 220 demand factors (not nameplate addition)
2. Ask your utility for actual peak demand data on your home
3. Consider electrifying incrementally — HPWH first, then HVAC — to see actual draw before committing to panel work
4. In mild climates (zones 3-4), 100-amp service handles full electrification in virtually all cases
5. In cold climates (zones 5-7), envelope upgrades (insulation, air sealing) may be cheaper than panel upgrades and solve the actual problem
6. Smart panels ($3K-$5K) can manage loads if you're truly near capacity — cheaper than a full service upgrade
