# Research: AI HVAC Load Calculations vs. Rule-of-Thumb Oversizing

## Angle
Your HVAC contractor sized your system by squinting at your square footage and rounding up. The result is an air conditioner that's probably 50–200% too large, short-cycles itself to death, and leaves your house damp. LiDAR-powered AI tools can now produce ACCA-certified Manual J load calculations in 15 minutes from an iPad scan. Most contractors still won't bother.

## Journalist
Jake "Jackhammer" Kowalski — construction tech, specs, hands-on tools

## Kill Test
Does this help someone building or buying a home? YES. Oversized HVAC is one of the most common and expensive installation mistakes in residential construction. Readers can demand a proper Manual J, verify contractor claims, and now AI tools exist that make the calculation fast enough to do on every job.

## Key Data

### The Oversizing Problem
- HVAC consumes 48% of energy in a typical US home (NJ Green Building Manual, citing DOE data)
- 88% of US households use AC; 66% use central AC or central heat pump (EIA RECS 2020)
- Industry rule of thumb: 500 sq ft per ton of cooling. Actual proper sizing: 800–2,500 sq ft/ton depending on insulation, climate, orientation (Energy Vanguard — Dr. Allison Bailes, PhD physics, building science consultant)
- That means contractors routinely install systems 2–5x larger than needed
- NIST study: improper installation (including oversizing) increases household energy use by ~30% over rated efficiency (Piotr Domanski, NIST; first study to quantify efficiency losses from common installation errors)
- Rewiring America heat pump sizing analysis: using rules of thumb, 30% of systems oversized by more than 1 ton (12,000 BTUs), 32% undersized — total 62% wrong
- Nature Communications study (1,023 heat pumps): approximately 10% oversized, 2–3x efficiency difference between worst and best performing systems, 17% of air-source HPs fail European efficiency standards
- ENERGY STAR new homes program: maximum 15% oversizing for cooling systems

### Consequences of Oversizing
- Short cycling: system blasts cold air, hits thermostat setting quickly, shuts off before it can dehumidify
- Poor humidity control → "clammy" feeling, potential mold and moisture issues
- Uneven room temperatures
- Noisy starts and stops
- Higher utility bills (parasitic power losses from cycling)
- Shorter equipment lifespan from wear and tear of constant on/off cycling
- Higher installation costs (bigger unit = more expensive equipment)
- NREL research: parasitic power losses (standby draw, crankcase heaters) compound with each cycle, creating measurable energy penalty

### Why Contractors Don't Do Manual J
- Manual J takes 4–8 hours to do properly by hand — measuring every window, wall orientation, insulation, etc.
- Software like Wrightsoft Right-Suite Universal helps but still requires detailed data entry
- Contractors are incentivized to oversize: fewer callbacks for comfort complaints, higher equipment sales margin
- Homeowners don't know to ask for it
- Code enforcement is inconsistent — many jurisdictions require it but don't verify

### AI/LiDAR Solution
- **Conduit Tech** (acquired by ServiceTitan, Sept 18, 2025, Nasdaq: TTAN)
  - iPad-based LiDAR scanning of home interior
  - Creates 3D model, auto-extracts room dimensions, window counts, wall areas
  - ACCA-certified Manual J load calculations
  - Under 15 minutes total scan + calculation time
  - Generates permit-ready documentation
  - Photo-realistic renderings of equipment placement for homeowner presentations
  - Quote from Ara Mahdessian, CEO ServiceTitan: "Conduit makes that possible by taking the manual work out of assessments and proposals, giving technicians the ability to generate accurate, professional presentations in minutes."

### Manual J Background
- Developed by Air Conditioning Contractors of America (ACCA)
- ANSI-recognized national standard for residential HVAC sizing
- Required by IECC (International Energy Conservation Code)
- Required by ENERGY STAR new homes program
- Endorsed by DOE, EPA, RESNET
- Considers: orientation, insulation R-values, window types/areas, infiltration rates, occupancy, climate zone, duct leakage, internal heat gains
- Integrates with Manual S (equipment selection), Manual D (duct design), Manual T (air distribution)

### Original Analysis Opportunity
Calculate the cost impact of oversizing. Example:
- Typical 2,000 sq ft home in Climate Zone 4 (mid-Atlantic)
- Rule-of-thumb sizing at 500 sq ft/ton = 4-ton system
- Proper Manual J might show 2–2.5 ton requirement
- Price difference: roughly $2,000–$4,000 more for 4-ton vs 2.5-ton equipment
- Energy penalty: 15–30% higher annual cooling costs from cycling and parasitic losses
- Equipment lifespan reduction: 2–4 years off 15–20 year expected life from short cycling

### Sources
1. NJ Green Building Manual — HVAC energy share, oversizing causes
2. EIA RECS 2020 — AC prevalence statistics
3. Energy Vanguard (Dr. Allison Bailes) — sq ft/ton analysis, Manual J importance
4. NIST study (Domanski, Henderson, Payne) — 30% energy use increase from installation faults
5. Rewiring America — heat pump sizing analysis (30% oversized, 32% undersized)
6. Nature Communications — 1,023 heat pump field study, 10% oversized, 2–3x efficiency variation
7. NREL Fact Sheet — parasitic power losses from oversized ACs
8. ServiceTitan/Conduit Tech acquisition announcement (Sept 2025)
9. ACCA Manual J 8th Edition — the standard itself
10. Building Performance Association — HVAC load calculation best practices
11. Pima County, AZ — example of jurisdiction requiring Manual J/S/D at plan review
