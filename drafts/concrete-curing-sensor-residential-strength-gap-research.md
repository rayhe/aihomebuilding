# Research: Concrete Curing Sensors — Residential Strength Gap

## Angle
ML-embedded concrete sensors predict curing strength in real-time from inside the pour. Cost: $135/sensor. Commercial construction uses them to strip forms days earlier, saving $10K-$15K/day. An insurance company (Shepherd) now discounts premiums for sensor-equipped projects. Residential construction — foundations, slabs, driveways — still cures by calendar ("wait 28 days") with zero measurement. Nobody knows if your foundation actually hit spec.

## Kill Test
Does this help someone building or buying a home? YES — homeowners can specify sensor deployment in their contract, get a permanent strength record for their foundation, and potentially negotiate better builder's risk insurance. Builders can strip forms faster with verified data instead of waiting arbitrary calendar time.

## Primary Sources

### 1. GreenVibe / ENR (Aug 2026)
- Source: Engineering News-Record, "GreenVibe Concrete Sensors Put Lab Results to the Test"
- URL: https://www.enr.com/articles/63496-greenvibe-concrete-sensors-put-lab-results-to-the-test
- GreenVibe embedded sensors: ultrasound, flexoelectric, electrical resistivity, temperature
- ML algorithms analyze data in cloud platform
- $12M raised, ~10,000 sensors produced, 70-80% deployed on active projects
- Beyond tower (Tel Aviv, ~1,050 ft): project manager ignored sensor data, trusted lab results → $500,000 in repairs
- After trusting sensors: saved 98 working days on same project
- Currently supplemental QA, not accepted as replacement for ASTM 28-day testing in US
- Participating in ASTM Committee C09 on Concrete and Concrete Aggregates
- Effective measurement radius: ~8 inches per sensor
- 11 paying projects as of Aug 2026

### 2. Giatec SmartRock Pricing (Multiple distributors)
- SmartRock3 individual sensor: $134.99 (HMA Lab Supply), $170 CAD (Geneq Online)
- SmartRock Long-Range: sold in packs of 10, 1,000 ft wireless range
- SmartHub remote monitoring: $3,950
- SmartRock Pro: self-calibrating, mix-independent, first of its kind
- ASTM C1074 compliant (approved by ACI 318, CSA A23.1, most USDOT specs)
- Free mobile app (Android/iOS), Giatec 360 cloud dashboard
- Roxi AI: analysis of concrete pouring time and mix calibration errors
- Specs: ±1.8°F accuracy, readings every 15 min, 4-month battery, waterproof

### 3. Shepherd Insurance + Brickeye LumiCon (Jul 2026)
- Source: Concrete Products, Jul 6 2026
- URL: https://concreteproducts.com/index.php/2026/07/06/builders-risk-underwriter-links-coverage-lumicon-concrete-sensor-deployments/
- Shepherd Insurance (SF) + Brickeye (Toronto) partnership
- Contractors using LumiCon IoT devices get tiered protection: premium credits, lower deductibles
- BuildersRiskIQ intelligence platform integrated into Shepherd's policy model
- Real-time risk assessment: catches burst water lines, flags thermal conditions in mass concrete
- Focus: vertical commercial construction, expanding to infrastructure
- CEO Tim Angus: "De-risking a project starts before breaking ground"
- CEO Justin Levine: built on thesis that financial services can incentivize loss prevention

### 4. Architect Magazine — Building Structural Health Monitoring (Aug 2026)
- Source: Architect Magazine, "Your Building Could Be Failing. You Just Can't See It."
- URL: https://www.architectmagazine.com/design/your-building-could-be-failing-you-just-cant-see-it/
- Concrete sensor market: $1.8B (2025), expected to double by 2034
- Giatec SmartRock: affixed to rebar, smartphone-connected, real-time strength/temperature/maturity
- GreenVibe: "ultrasound of construction," five sensing approaches
- Material passports concept: continuous biography of building components, like quantified self for buildings

### 5. FEMA / GAO — Connecticut Crumbling Foundations
- Source: FEMA case study + GAO-20-649
- Up to 34,000 homes with pyrrhotite-contaminated concrete foundations (built 1983-2015)
- $1B+ potential economic impact to Connecticut housing market
- Foundation replacement: $150,000+ per home
- Internal sulfate attack takes 10-30 years for cracks to appear
- Cracking first reported 2015, 550+ homes reported by May 2017
- No in-situ monitoring during original construction — problem invisible for decades

### 6. ASTM C1074 — Standard Practice for Estimating Concrete Strength by Maturity Method
- Requires establishing strength-maturity relationship for specific concrete mixture
- Records temperature history during curing
- Informs: formwork removal, post-tensioning, opening pavement to traffic
- Currently used primarily in commercial/infrastructure, rarely residential

### 7. Giatec SmartRock Pro Savings Data
- Source: Giatec marketing materials
- Commercial construction: each day costs $10K-$15K
- Smart sensors save 1-2 days per pour with real-time strength data
- Truck-to-truck concrete mix variability is a real problem — self-calibrating sensors catch it

## Original Contribution
Cost analysis: A typical residential foundation pour (1,500 sq ft home) uses ~60-80 cubic yards of concrete, with 4-6 critical monitoring points. At $135/sensor, that's $540-$810 for real-time strength data on the most expensive single element of the house. Compare to $30,000-$60,000 cost of the foundation itself. Monitoring adds 1-2% to foundation cost. Foundation repair/replacement if something goes wrong: $150,000+.

Insurance angle is novel for residential: if Shepherd already offers premium discounts for commercial sensor use, the actuarial case exists. Nobody has extended it to residential builder's risk or homeowner's policies.

## Strongest Counterargument
Residential foundations are simpler pours than commercial structures. Standard ready-mix from a reputable supplier, placed in a straightforward form, in moderate weather, almost always achieves target strength. The failure mode that sensors catch — premature form stripping, bad mix — is rarer in residential because forms usually stay in place and nobody is in a hurry to strip them. The Connecticut pyrrhotite case was an aggregate problem, not a curing problem, and no sensor would have caught it.

## Journalist
Frank "The Foreman" DeLuca — project management angle, timeline optimization, the gap between what commercial PMs know about their concrete and what residential builders don't.
