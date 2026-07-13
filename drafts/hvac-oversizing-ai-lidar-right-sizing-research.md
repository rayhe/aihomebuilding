# Research Notes: HVAC Oversizing & AI/LiDAR Right-Sizing

## Angle
The residential HVAC industry has a massive, quantifiable oversizing problem — contractors size by gut instinct and rule of thumb, costing homeowners billions collectively. AI + LiDAR tools (Conduit Tech/ServiceTitan) now make proper Manual J sizing fast enough that contractors will actually do it on-site.

## Key Sources & Data

### Scale of the Problem
- **DOE:** Improper HVAC installation affects ~65% of systems; 31% are oversized (DOE 2018 Residential HVAC Installation Practices Review)
- **NREL:** "Roughly 70% to 90% of homes throughout the country exhibit various energy-wasting HVAC issues, encompassing problems such as incorrect airflow, excessive or insufficient refrigerant charge, improper sizing, and duct issues" (NREL, Optimizing Residential HVAC Systems report)
- **Air Doctors Heating & Cooling (2021 survey):** ~4,000 homes in Southeast — 98% oversized by 200%+ of heating capacity, 33% exceeding required cooling capacity
- **FieldProMax/ACCA:** Equipment sized by rule of thumb is wrong ~70% of the time
- **NIST:** First study to quantify efficiency losses from common installation errors. "Improper installation could increase household energy use for space heating and cooling on the order of 30% over what it should be." — Piotr Domanski, NIST

### Installed Base & Market
- **Carrier CEO Dave Gitlin (Baird Conference, Nov 2025):** 130M installed HVAC systems in US; typical annual replacement ~6% (~8M units) + 1-1.5M new construction = ~9-9.5M units/year. 2025 actual ~7.5M (market slump).
- **EIA:** HVAC represents 51% of all residential site energy consumption (32% of total electricity use)
- **NJ Green Building Manual:** "HVAC systems consume 48% of the energy used in a typical US home"

### The Rule-of-Thumb Problem
- **Energy Vanguard (Allison Bailes):** "Most newer homes have loads of 800 sq ft per ton or more. Cooler climates and high-performance homes can be 1,500-2,500 sqft/ton. A contractor using 500 sqft/ton installs AC 2-5x larger than needed."
- **Average new construction:** 1,431 sqft/ton (Energy Vanguard, 40 projects)
- **Rewiring America/MassCEC data:** Rule of thumb (30 BTU/sqft) oversized by average 31,000 BTU. Not a single homeowner would've gotten the right heat pump. Second rule (÷400) still produced 30% oversized by >1 ton and 32% undersized.

### Cost of Oversizing
- **Steven Winter Associates/NREL (OSTI report 89805):** Two identical multifamily buildings, one with right-sized VRF (90% of peak load), one with 240% oversized VRF. Cooling electricity was **6x lower** in right-sized building. Manufacturer said proper sizing would have saved **24% in equipment costs**.
- **EPA fan system study:** 60% of buildings had systems 60% larger than needed
- **ENERGY STAR:** Requires no more than 15% oversizing of cooling systems for certified new homes

### AI/LiDAR Solution: Conduit Tech
- **Founded 2022** by Marisa Reddy and Shelby Breger
- **Acquired by ServiceTitan (NASDAQ: TTAN)** — expected to close fiscal Q3 2026
- **Technology:** iPad Pro LiDAR → 3D model in 10 min → ACCA-certified Manual J on-site → system recommendation + AR visualization
- **Results (Conduit Tech data):** 32% increase in ticket size, 21% higher close rate, 126% growth in total sales
- **HVAC Today (Horne Heating & Air):** User waited until Conduit matched accuracy of Wrightsoft Manual J; adopted May 2025. "I haven't looked back since."
- **Other tools:** CoolCalc (ACCA-approved, LennoxPros integration), Wrightsoft Right-Suite Universal, Kwik Model 3D (LiDAR scan import)
- **University of Maryland (March 2026):** Hybrid ML-physics model for VRF — 5-6% prediction error, outperforms pure ML in data-scarce conditions

### Original Contribution: National Waste Calculation
- 130M installed systems × 31% oversized = ~40.3M oversized systems
- Average US household energy spending: ~$2,000/yr (EIA)
- HVAC share: 48-51% = ~$980/yr
- 30% excess energy use (NIST) = ~$294/yr per oversized home
- **National aggregate: 40.3M × $294 ≈ $11.8B/yr in unnecessary HVAC energy costs**
- Plus equipment cost premium: at ~8M replacements/yr, even conservative 20% oversized = 1.6M unnecessary upsizes × ~$1,000 avg premium = $1.6B/yr in wasted equipment spend

**Limitations:**
- The 31% oversizing figure comes from DOE's review of field studies; some surveys show much higher rates (Air Doctors' 98% in Southeast is extreme and likely reflects regional climate/contractor practices)
- NIST's 30% energy penalty is modeled, not field-measured across a representative sample
- Conduit Tech's 32%/21%/126% performance numbers are company-reported; no independent verification published
- AI/LiDAR tools require iPad Pro with LiDAR ($799+), which is an adoption barrier for small contractors
- Right-sizing doesn't fix existing systems — only helps at replacement. The installed base will churn slowly over 15-20 years.

## Journalist
Jake "Jackhammer" Kowalski — construction tech beat, punchy/enthusiastic, hands-on
