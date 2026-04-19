# Research: AI/Algorithmic Office-to-Residential Conversion — What the Score Doesn't Measure

## Angle
Gensler's Conversions+ algorithm (and similar tools) can assess structural feasibility of office-to-residential conversions in minutes instead of months. But the algorithm optimizes for whether a building *can* become apartments — not whether those apartments will feel like homes. The architecture of dwelling is fundamentally different from the architecture of work, and no scoring system captures that gap.

**Journalist:** Elena Vasquez (Architecture & Design)
**Kill test:** Yes — anyone buying or renting a converted office apartment, any developer considering a conversion, any city official writing adaptive reuse policy.

## Primary Sources

### 1. Gensler "Conversions+" Algorithm (Steven Paynter, Oct 2023 update)
- 1,300+ buildings assessed across 130+ cities in North America
- Only 25% score as suitable candidates for conversion
- Factors: building form, location, floor plate size, context
- Key finding: "all the features that result in an unpleasant office make for an excellent multifamily product" (e.g., 12-ft floor-to-floor → oppressive 8-ft office ceilings → luxurious 11-ft residential clear heights)
- Claim: 30% lower cost than new construction
- Calgary pilot: 6M sqft assessed, 5 projects under construction, 10 in development, 24% increase in downtown residential units
- Tool does feasibility in minutes vs months
- Source: https://www.gensler.com/blog/what-we-learned-assessing-office-to-residential-conversions

### 2. National Office Vacancy & Market Data
- 18.2% national office vacancy rate, up 190 bps YoY (CommercialEdge, Nov 2025)
- 15% of commercial offices in 105 largest US cities suitable for residential conversion → 171,470 potential units (Capital Innovations, Michael Underhill)
- 118 conversion projects expected to complete in major US cities (CBRE)
- 60M sqft of conversions planned/underway (1.4% of US office inventory, up from 1.2%)
- Since 2016: ~20,000 housing units created from office conversions; 21,000 more planned
- Source: CommercialEdge, CBRE via Commercial Property Executive (April 2026)

### 3. SF Downtown Adaptive Reuse Program (July 2023, updated April 2026)
- Zoning waivers: lot coverage, dwelling unit exposure, dwelling unit mix, bike parking, TDM
- Financial incentives: transfer tax waiver, inclusionary housing/impact fee waiver, property tax incentive
- Up to 33% additional building volume allowed
- Eligibility: C-3 or C-2 zoning east of Franklin/13th, north of Townsend
- New: Downtown Revitalization Financing District accepting applications (April 2026)
- Source: sfplanning.org

### 4. 55 Broad, NYC — Case Study
- 36-story former financial district tower → 571-unit luxury rental
- First office-to-resi to achieve LEED certification
- Architect: CetraRuddy
- Developer: Metro Loft + Silverstein Properties
- 25,000 sqft amenity collection, rooftop pool
- Source: Multi-Housing News (April 2026)

### 5. Academic: Çelik (2025), Cambridge University Press
- AI-generated floor plans tested across 5 climate zones
- "None of the models consistently integrated solar orientation or seasonal lighting considerations"
- Only 8 of 31 AI-generated plans were architecturally legible enough to reconstruct
- Gap between "generative representation and environmental logic"
- Source: AI EDAM journal, DOI 10.1017/S0890060425100085

### 6. Building Code Requirements (IRC R303.1)
- Habitable rooms: glazed area ≥ 8% of floor area
- Light and ventilation requirements for every bedroom, living room, kitchen
- Deep office floor plates (50-70 ft) make compliance difficult/impossible without light wells, atriums, or cutting into the floor plate

### 7. Construction Challenges (Dyer Brown, ULI)
- Each residential unit needs independent plumbing (kitchen + bathroom minimum)
- Office buildings: typically one shared kitchen/bathroom per floor
- Structural elements, mechanical systems require movement
- Sprinkler systems, closets, windows, egress per unit — all code-mandated
- Source: Ashley Dunn (Dyer Brown), Michelle Landers (ULI Boston/New England)

## Original Contribution
Cross-reference Gensler's 25% conversion suitability rate with IRC R303.1 natural light requirements. A building can score well on structural/economic feasibility while producing apartments where the bedroom faces a corridor and the living room gets zero direct sunlight. The algorithm scores the bones. It doesn't score the quality of dwelling.

Calculation: A typical 1960s-80s office floor plate is 25,000 sqft with a 60-foot depth from window wall to core. IRC R303.1 requires 8% glazed area per habitable room. For a 150-sqft bedroom, that's 12 sqft of window. Any unit deeper than ~30 feet from the facade will have rooms that fail this test unless the building is carved open. Carving light wells or atriums costs $150-300/sqft of sacrificed floor area — revenue lost, not just cost incurred.

## Strongest Counterargument
Cities need housing desperately. Office vacancy is a crisis. Even imperfect apartments created from conversions are better than no housing at all. The perfect is the enemy of the good — and a well-lit apartment that doesn't exist is worse than a dim one that does.

## Limitations
- Gensler's 25% figure covers North America broadly; suitability varies dramatically by city (vintage, building type, zoning)
- Cost data is sparse and project-specific; "30% cheaper than new construction" is Gensler's aggregate claim, not independently verified
- We don't have access to Conversions+ scoring criteria in detail — the algorithm is proprietary
- SF and NYC data may not generalize to smaller markets
