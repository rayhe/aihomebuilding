# Research: AI Site Planning Optimizers vs. Neighborhood Livability

## Article #557 — Elena Vasquez (Architecture & Design)

## Core Thesis
AI-powered site planning tools (TestFit, Autodesk Forma) optimize subdivision layouts for developer ROI — lot yield, parking ratios, FAR, unit count. They're blind to what actually makes neighborhoods worth living in: mature trees, walkable streets, privacy, social spaces, character. The math always favors the bulldozer.

## Key Sources

### 1. AI Site Planning Tools — What They Optimize

**TestFit** (founded 2016, Dallas)
- 650+ sites planned per week
- Reduces feasibility timelines from ~2 weeks to ~2 hours
- $4,000+ saved per feasibility study
- Optimizes for: FAR, parking ratio, yield on cost, unit mix, dwelling units/acre, setbacks, building efficiency
- Subdivision tool: "Subdivide a large piece of land into individual parcels for single-family or mixed-density development. Include multiple housing types: ADUs, townhomes, bungalow courts, tiny homes."
- Quote (CEO Clifton Harness): "While experience and local knowledge can be applied to decision-making, with Generative Design, a machine can test every possible configuration, inclusive of what we would never even think to try."
- Uses "proprietary parametric algorithm rather than pure machine learning"
- Source: TestFit website (testfit.io), AEC Magazine, illustrarch.com review (July 2026)

**Autodesk Forma** (formerly Spacemaker, acquired for $240M in 2020)
- Cloud-based AI generates hundreds of layout options
- Environmental analyses: daylight, noise, wind, embodied carbon
- Generative Site Design: AI-driven automation evaluates layouts against constraints
- Finnish developer T2H: evaluated 70 sites in 4 months, 50% time reduction per site
- BIM/zoning compliance study (MDPI, 2026): Forma placed buildings too densely, couldn't account for biologically active area requirements, deviated from specified building dimensions. "The building, despite the specified dimensions of 12 × 15 m, occupies the entire width of the lot."
- Source: Autodesk, archtech.se, MDPI Generative Design in Urban Planning study

### 2. What These Tools DON'T Optimize — and Why It Matters

**Mature Tree Preservation**
- National Arbor Day Foundation: one mature tree = at least $10,000 of a home's resale value, typically 15% of property value (Benotto 2002)
- Multiple surveys: mature trees increase home value 7-19% (University of Washington, National Gardening Association, 2007)
- It takes 40+ years for new trees to reach mature size — "half a lifetime for homeowners to realize the economic value" (UTA thesis, Montgomery Farm case study)
- Clemson University: homeowners get 100%+ ROI on landscaping investment
- Key problem: "many developers frequently remove all vegetation from a site before developing the land" (Ewan, cited in UTA thesis)
- Developers clear-cut because accommodating existing trees costs more upfront (design workarounds, grading constraints, root protection)

**Neighborhood Tree Canopy & Property Values**
- Virginia Tech / USFS (2024): In Milwaukee, 10% more tree cover within 330 ft adds ~$3,500 to property value. In Fresno, same increase adds only $9 — varies by city.
- Des Moines study (24,203 sales, 2007-2015): 10% increase in tree cover within 100m = 0.48% price increase ($1,371). Within 205m = 0.29% ($836).
- Systematic review (89 papers, 21 countries, PMC): "increasing tree canopy cover on property and neighborhood level... increased housing prices" in most cases
- An additional 1% tree cover increases housing prices by 0.2% on average (meta-analysis)
- Neighborhood trees reduce perceived crime (experience category strongly/inversely associated with perceived crime, Tucson walkability study)

**Walkability & Neighborhood Design**
- Tucson study (n=486): Traditional neighborhood design scored highest for walkability and physical activity. Cluster housing scored highest for social interactions and perceived safety. Enclosed community had no standout benefits.
- Vegetation/trees are critical for the "experience" of walking — not just sidewalk width or distance to amenities
- Source: PMC/MDPI, "Neighborhood Design, Physical Activity, and Wellbeing" (2017)

### 3. The Gap — What the Algorithm Sees vs. What People Feel

TestFit's input parameters:
- Unit count, unit mix, dwelling units/acre, setbacks, parking count, parking ratio, parking types, FAR
- None of these: tree canopy, view corridors, privacy (beyond setback minimums), social gathering spaces, pedestrian comfort beyond circulation, neighborhood character

Autodesk Forma does analyze daylight, wind, and noise — BUT:
- The generative optimizer's objective function is still density/yield
- The BIM study showed it prioritizes building placement over regulatory requirements (biologically active area)
- Environmental analyses are informational overlays, not optimization constraints

### 4. Original Contribution / Calculation

**The Developer Math:**
- A 40-year-old oak tree: ~$10,000 property value premium (Arbor Day Foundation)
- Cost to remove: $200-2,000 depending on size
- Freed-up footprint: ~400 sq ft (canopy area)
- At $200/sq ft lot value (median US new construction): freed footprint = $80,000 in additional buildable value
- The algorithm sees $80,000 in buildable area. It doesn't see $10,000 × 20 years of property value appreciation for the buyer.
- The math always points toward the bulldozer unless the optimization function includes long-term neighborhood value.

**TestFit's 650 sites/week × 52 weeks = ~33,800 site plans per year.** Each one optimized for yield. None of them optimized for the feeling of walking home on a shaded street.

### 5. Strongest Counterargument
These tools DO serve a real need:
1. The US has a 1.5-million-home housing gap (NAHB/HBI 2026)
2. Density is needed — sprawl is worse for environment, infrastructure costs, commute times
3. Faster feasibility means more projects get built, more housing supply
4. TestFit/Forma include zoning setbacks, so they're not ignoring regulations
5. Forma includes environmental analyses (daylight, wind, noise)
6. The problem may be developers' priorities, not the tools themselves

But: the tools encode developer priorities into their optimization functions. When the default is "maximize dwelling units per acre," every design starts from density and works backward. The tools could optimize for tree preservation, canopy targets, or walkability scores — they just don't, because nobody's paying for that.

### 6. Limitations
- Property value studies are mostly hedonic price models — correlation, not causation
- Tree value estimates vary widely ($9 to $3,500 per 10% canopy increase depending on city)
- TestFit/Forma are primarily used for multifamily; single-family subdivision use is growing but smaller market
- Haven't tested the tools ourselves — relying on published studies and manufacturer descriptions
- The BIM/zoning compliance study was for Polish local development plans, not US zoning

## Headline Options
1. "The Software That Plans 650 Neighborhoods a Week Has Never Walked Through One."
2. "An Algorithm Tested Every House Arrangement on the Lot. It Chose the One That Killed the Oak Tree."
3. "An AI Optimized Your Subdivision for Forty-Three Lots. The Forty-Fourth Was Where the Shade Used to Be."

## Kill Test
Does this help someone building or buying a home? YES — tells homebuyers what to look for (and what to be skeptical of) in new subdivisions planned with AI tools. Tells developers and architects that optimizing for yield alone destroys long-term value. Gives them specific value data (7-19% premium for mature trees) to justify preservation to clients.
