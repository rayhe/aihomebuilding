# Research: AI Screening Office-to-Residential Conversions

**Journalist:** Elena Vasquez (Architecture & Design)
**Date:** May 6, 2026
**Kill test:** Yes — developers, architects, and city planners need to know which empty offices can actually become homes. Someone buying a condo in a converted office tower should know the geometry of what they're living in.

## Core Problem
90,300 office-to-apartment conversions are projected for 2026, a 28% increase over 2025 (RentCafe/Yardi Matrix). US office vacancy sits at 17.8% (March 2026, CommercialCafe) to 18.6% (Q1 2026, CBRE). But the dirty secret of adaptive reuse: most office buildings are geometrically unconvertible. Floor plates are too deep, cores are wrong, structural grids don't align with residential unit planning, and plumbing doesn't exist where kitchens and bathrooms need to go. AI is now being used to screen buildings for conversion feasibility before anyone spends money on architects.

## Key Data Points

### The Conversion Boom
- 90,300 office-to-apartment conversions projected 2026 (RentCafe 2026 report, 28% increase from 71K in 2025)
- 55,300 units completed/planned from 2021-2024 (fourfold surge)
- NYC leads: 16,358 units. Then DC, Chicago, LA
- $150 billion in office mortgages under pressure
- Average building age for conversion candidates: 20 years
- Conversion cost: $300-400/sqft vs $500-600/sqft ground-up (Vanbarton Group data)
- Timeline: 18-20 months to first TCO vs 4+ years ground-up

### The Floor Plate Problem (The Real Barrier)
- Standard office floor plate: 20,000-40,000+ sqft
- Office buildings designed for 50-80ft deep floor plates (core to window wall)
- NYC residential code: every habitable room needs a window (8% glazed area per IRC)
- Practical residential limit: no bedroom or living room more than ~30ft from exterior wall
- Buildings deeper than ~65ft lose interior footage to corridors and unusable "dark" zones
- Pearl House (160 Water St NYC): worked because of 3 exposures and side core placement
- Most buildings: center core, 2 exposures, 60-80ft depth = conversion impossible

### AI for Feasibility Screening
- **Autodesk + Arcadis "X-Ray Vision" project:** Using AI + laser scans + sensors + old floor plans + GIS data to create predictive 3D models of existing buildings. Can infer hidden elements (pipe positions, material conditions, structural health). Goal: "If we can create a kind of x-ray vision for buildings, we may be able to unlock new possibilities for material reuse, circularity, and decarbonization." — David Benjamin, Director AEC Industry Futures at Autodesk
- Key innovation: combining "multiple data sets that are limited instead of one data set that is comprehensive" — imperfect data triangulated produces better predictions
- **Gensler ConversionScore:** Gensler developed a screening tool that evaluates office buildings on 8-10 criteria including floor plate depth, structural grid spacing, window-to-core distance, ceiling height, facade condition. Scores buildings as green/yellow/red for conversion feasibility.
- **CBRE & other brokerages:** Using data analytics to screen portfolios for conversion candidates
- SF Downtown Adaptive Reuse Program (July 2023): Waives planning code requirements for C-3/C-2 conversions, financial incentives including transfer tax waivers

### The Geometry Math (Novel Calculation)
- If the average US office building has a 70ft floor plate depth, and residential requires max 30ft from window wall:
- A center-core building with 2 exposures: 70ft depth means 35ft from each exterior wall to core. 5ft over the comfortable limit.
- With 4 exposures (corner building): 35ft from each wall, workable with interior corridors
- Only ~30% of US office stock has favorable geometry (narrow plates, side cores, or multiple exposures) per industry estimates
- 70% of office buildings are "architecturally stranded assets" — can't become residential regardless of incentives
- AI screening can identify the 30% that work in minutes instead of spending $50K-100K on feasibility studies

### Economics
- Brookings: Without public policy intervention, most conversions are economically unviable
- Conversion: $300-400/sqft (Vanbarton data) vs ground-up $500-600/sqft
- But acquisition cost matters: distressed office buildings at $50-150/sqft + $300-400 conversion still competes with ground-up
- SF, LA, Chicago offering incentives: tax waivers, zoning relief, streamlined permitting
- Key insight: AI screening prevents wasting millions on feasibility for geometrically impossible buildings

### The Plumbing Problem
- Office buildings have plumbing concentrated in core areas (restrooms near elevators)
- Residential needs plumbing distributed across every unit (kitchen + bathroom per unit)
- Running new waste lines through concrete floor plates: $40-80/sqft additional
- Saniflo above-floor pump systems used in Florida conversion to avoid cutting concrete
- Each plumbing riser serves ~4-6 units; adding risers means cutting through structural slabs

## Angle
Elena would frame this as: the office-to-residential gold rush has a fundamental geometric problem that no amount of policy incentives can solve. AI doesn't design the conversion — it tells you whether conversion is even physically possible before you spend a year learning the answer the expensive way. Most empty office towers are architecturally stranded. The buildings that CAN convert share specific geometric DNA.

## Strongest Counterargument
A skilled architect can make almost any building work with enough creative intervention — cutting light wells, adding atriums, carving out double-height spaces. The Japanese have put habitable rooms 40+ feet from windows in micro-apartments for decades. AI screening might reject buildings that creative design could save, potentially deepening the housing crisis by labeling salvageable buildings as impossible too early.

## Limitations
- The "30% convertible" figure is an industry estimate, not from a comprehensive study
- Most conversion data comes from NYC, DC, and a few major cities; transferability is uncertain
- Autodesk/Arcadis tool is experimental, not commercially available
- Conversion cost comparisons don't account for wide variation in building condition
- RentCafe/Yardi data includes planned and pipeline units, not just completed
- No post-occupancy satisfaction data comparing converted vs. purpose-built residential
