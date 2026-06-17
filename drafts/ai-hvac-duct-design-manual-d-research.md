# Research: AI HVAC Duct Design — The Manual D Gap
**Journalist:** Jake "Jackhammer" Kowalski
**Beat:** Construction Technology
**Date:** June 17, 2026

## Thesis
Most residential HVAC contractors skip proper duct design (ACCA Manual D) entirely. They size equipment by rules of thumb — "500 sq ft per ton" — which produces systems 2-5x larger than needed. AI tools like HVAKR now automate the full Manual J → Manual D workflow in minutes instead of hours. The question isn't whether AI can do the calculation. It's whether it can fix the calculation that contractors were supposed to do but didn't.

## Kill Test
✅ Passes. Every homeowner with forced-air HVAC pays for this problem. Oversized equipment costs more up front, runs less efficiently, provides worse humidity control, and dies faster from short-cycling. Duct leakage wastes 20-30% of conditioned air. A builder reading this can immediately assess whether their HVAC sub is cutting corners on design.

## Primary Sources

### Source 1: ENERGY STAR / DOE — Duct Leakage Data
- "In a typical house, about 20 to 30 percent of the air that moves through the duct system is lost due to leaks, holes, and poorly connected ducts." (ENERGY STAR, energystar.gov/campaign/heating_cooling/duct_sealing)
- ENERGY STAR V3 requires total duct leakage ≤ 8 CFM25 per 100 ft² (2009 IECC) or ≤ 4 CFM25 (2012 IECC)
- DOE: "Ducts that leak heated air into unheated spaces can add hundreds of dollars a year to your heating and cooling bills" (energy.gov/energysaver/minimizing-energy-losses-ducts)

### Source 2: ACCA Manual J/D/S Standards + Compliance Data
- Manual J, Manual S, Manual D are the ACCA design protocols for residential HVAC (load calculation, equipment selection, duct sizing)
- Required by most U.S. building codes
- Martin Holladay (GreenBuildingAdvisor, Dec 2024): "Oversized furnaces, heat pumps, and air conditioners are the norm in most American homes... In a typical residential installation, some of these steps are performed sloppily or entirely omitted."
- ACCA blog (Allison Bailes, Energy Vanguard): Average new construction home needs 1,431 sf/ton. Contractors using 500 sf/ton rule of thumb install systems 2-5x larger than needed.
- ENERGY STAR new homes program requires no more than 15% oversizing of cooling systems
- Manual D friction rate: 0.10 IWC/100ft benchmark; ACCA wedge spans 0.06-0.18 IWC/100ft

### Source 3: HVAKR — AI HVAC Design Platform
- Founded 2021-2023 by Andres Krippner (CEO) and Davis Muxlow (COO)
- California-based, Techstars 2024 cohort
- Web-based, cloud platform: replaces scattered Excel + Trane Trace + Carrier HAP + separate CAD for duct layout
- AI agent: accepts architectural PDFs, natural-language prompts, performs project setup, space modeling, zoning, envelope properties
- Bulk edits in plain English (e.g., "change window heights across entire model")
- Runs analytical queries (e.g., "flag spaces with highest cooling load per sq ft")
- Upcoming: automated diffuser placement, generative duct routing, A-vs-B system comparisons
- Key advantage: change to glazing or occupancy propagates through loads, airflows, coil sizing, and duct annotations in one pass
- (Source: AEC Magazine, Martyn Day, April 2026)

### Source 4: Market Validation — AECOM/Consigli Acquisition
- AECOM acquired Norwegian startup Consigli for ~$390M in November 2025
- Consigli positioned as "autonomous engineer" across space planning, MEP loading, and modeling
- Signal that market is beginning to value discipline-specific AI tools
- Other players: Augmenta (electrical design), Endra (structural engineering)
- (Source: AEC Magazine)

### Source 5: HVAC Oversizing Cost Analysis (for Original Contribution)
- 2,000 sq ft new construction home, Climate Zone 4A (mixed-humid)
- Contractor rule of thumb: 500 sf/ton = 4-ton system
- Proper Manual J: ~1,400 sf/ton = 1.5-ton system (conservative: 2 tons)
- Equipment cost difference: 4-ton vs 2-ton central AC/heat pump = ~$2,000-3,000 more for oversized
- Oversized system short-cycles: compressor runs 8-10 mins vs. 15-20 mins per cycle
- Short-cycling consequences: poor dehumidification (humid climates), premature compressor wear, higher energy bills
- Energy penalty: oversized system uses 15-30% more energy than right-sized (varies by climate)
- For a $200/month heating/cooling bill: oversizing costs $360-720/year extra
- Over 15-year equipment life: $5,400-10,800 in excess energy costs alone
- Add duct leakage (20-30%): another $480-720/year wasted

## Angle
Don't lead with the AI tool. Lead with the problem: the contractor who never ran Manual D. The reader's HVAC system is probably oversized. Their ducts are probably leaking. These are code-required calculations that most contractors skip. THEN introduce the AI that does the calculation in minutes. The story is about a $10,000+ lifetime waste problem that AI solves as a side effect of doing the job properly.

## Skepticism Points
- HVAKR is primarily targeting MEP consultancies, not residential HVAC contractors
- Residential HVAC contractors may lack the technical sophistication to use any design tool
- The real problem is enforcement: jurisdictions don't verify Manual D compliance
- AI duct design still requires accurate building envelope data as input — garbage in, garbage out
- The 2-5x oversizing figure is contested; some contractors argue safety factors are needed for extreme weather
