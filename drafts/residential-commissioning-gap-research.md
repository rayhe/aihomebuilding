# Research: The Residential Commissioning Gap — Nobody Tests the Whole House

## Proposed Headline
"Your Builder Tested 14 Systems. Nobody Turned Them All On at Once."

## Journalist
Frank "The Foreman" DeLuca — Project Management & Operations

## Kill Test
Does this help someone building or buying a home? **YES.** Homeowners and builders can immediately understand that individual trade inspections don't verify whole-house performance. Actionable: what commissioning looks like, what it costs, when to do it, and whether emerging AI/IoT tools make it practical at residential scale.

## Thesis
Commercial buildings get commissioned — a systematic process verifying that all systems perform as designed, together. Residential buildings do not. Every trade in your new home passes its own inspection in isolation. Nobody runs the HVAC, plumbing, electrical, ventilation, and envelope as an integrated system to see if the house actually works. AI and IoT sensors could make residential commissioning affordable for the first time. The industry isn't interested.

## Primary Sources (3+ required)

### 1. LBNL Commissioning Study (2018 update, funded by DOE Building Technologies Office)
- Database: ~1,500 commercial buildings across US and Canada
- New construction Cx: median cost $0.82/sqft (0.25% of construction cost), down from $1.16/sqft in 2009
- Existing building Cx: median cost $0.30/sqft
- Energy savings: 13% (new) and 16% (existing) whole-building median
- Payback: 4.2 years (new), 1.1 years (existing)
- Benefit-cost ratio: 1.1 (new), 4.5 (existing)
- Source: https://www.energy.gov/cmei/buildings/articles/new-doe-research-strengthens-business-case-building-commissioning
- Source: https://escholarship.org/uc/item/59f632fx

### 2. WarrantyWeek New Home Builder Warranty Report (April 2025)
- Data from 22 publicly-traded homebuilders
- Average warranty accruals: ~$2,596 per home sold (2022 data, std dev $283)
- 2024: total warranty accruals increased <1%, claims paid decreased 2%, reserves up 4%
- These companies represent ~47% of US new homes built
- Industry has structured data on every warranty callback but uses it for financial reporting, not predictive quality
- Source: https://www.warrantyweek.com/archive/ww20250417.html

### 3. LBNL Residential Commissioning Guidelines (LBNL-48767)
- Published guideline for residential commissioning
- Covers: envelope, HVAC, combustion appliances, hot water, moisture
- Never widely adopted — no code requires it for single-family
- Source: https://www.aivc.org/sites/default/files/members_area/medias/pdf/Inive/LBL/LBNL-48767.pdf

### 4. ASHRAE Standards
- ASHRAE Guideline 0 (2005/2019): The Commissioning Process — focused on commercial
- ASHRAE 62.2: Ventilation and Acceptable Indoor Air Quality in Residential Buildings
- No ASHRAE residential commissioning standard exists (Guideline 0.2 was proposed but never finalized)

### 5. NAIOP Construction Defects Report (Spring 2025)
- 450,000+ additional workers needed to meet industry demand (ABC estimate)
- Labor shortage + expedited construction = more defects
- Defects originate from: workmanship, design, or materials (or combination)
- Most manifest as moisture management failures
- Source: https://www.naiop.org/research-and-publications/magazine/2025/spring-2025/development-ownership/the-importance-of-addressing-construction-defects/

## Novel Contribution (Original Calculation)

### Break-even analysis for residential commissioning:
- Average new US home: ~2,200 sqft (Census Bureau)
- Commercial Cx cost at residential scale: $0.82/sqft × 2,200 = $1,804
- But residential is simpler than commercial → estimate $1,000-1,500 per home for basic commissioning
- Average warranty accrual per home: $2,596 (WarrantyWeek 2022)
- If commissioning catches even 40% of issues that would become warranty claims: $2,596 × 0.4 = $1,038 saved
- Break-even at ~40% defect detection rate — plausible given commercial data showing 13-16% energy savings alone
- **AI/IoT commissioning could reduce cost further:** Smart thermostat data + energy monitoring + moisture sensors during first 7 days of HVAC operation could automate 60-70% of manual commissioning checks
- Estimated AI-assisted commissioning cost: $400-800 per home (sensors reusable, software scalable)
- At $600/home and 40% warranty reduction: ROI is 4:1+

### What manual residential commissioning would look like:
1. Blower door test (envelope leakage) — most builders do this already where code requires
2. Duct leakage test — required in some jurisdictions, not all
3. HVAC airflow verification — measure CFM at each register vs. Manual D design
4. Ventilation rate verification — does fresh air actually meet ASHRAE 62.2?
5. Room-by-room temperature differential under load — does every room reach setpoint?
6. Hot water delivery time — does hot water arrive in <60 seconds at furthest fixture?
7. Drainage slope verification — does water flow away from foundation?
8. Electrical load test — can the panel handle design load without tripping?

Most builders do #1 (where required) and nothing else. The rest are "the homeowner will call if something's wrong."

## Strongest Counterargument
Builders will argue: (a) commissioning adds cost that buyers won't pay for, (b) code inspections already catch critical issues, (c) warranty systems handle post-occupancy problems adequately. The counterargument has merit on (a) — margins are thin, especially in entry-level construction. On (b), code inspections are pass/fail on individual components; they don't test system integration. On (c), warranty systems are reactive, not predictive — fixing a complaint at $800/callback is more expensive than catching it at $200/check during commissioning.

## Limitations
- LBNL data is overwhelmingly commercial; residential commissioning data barely exists
- Break-even calculation uses commercial Cx cost extrapolated to residential — actual residential costs are speculative
- AI/IoT commissioning costs are projections, not market prices — no vendor offers this product for residential at scale
- Warranty accrual data is from public builders; custom/small builders may have very different warranty cost profiles
- The 40% defect-catch rate is an estimate, not measured

## Angle
Frank DeLuca sees this from the GC's perspective. He's managed hundreds of homes. He knows that the final walkthrough is theater — the homeowner opens cabinets and checks paint while the HVAC system they'll live with for 15 years has never been tested as a system. He's seen the callbacks: the room that's always 5 degrees off, the bathroom that grows mold in year two, the water heater that runs out during every family shower. All preventable with a $600 commissioning protocol that nobody runs because nobody told them to.
