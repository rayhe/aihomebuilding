# Research: AI X-Ray Vision for Renovation — Predicting What's Behind the Walls

## Angle
Your contractor quoted $45,000 for a kitchen renovation. After demo, they found galvanized pipes, knob-and-tube wiring, and a header that doesn't meet code. The real number is $68,000. Autodesk and Arcadis are developing AI that predicts these hidden conditions before anyone swings a hammer.

## Journalist
Elena Vasquez — Architecture & Design. The design angle: how architects have always struggled with the "invisible building" — the structure behind the finishes. AI is changing what it means to *read* an existing building.

## Primary Sources

### Autodesk/Arcadis "See Through Walls" Research
- Source: ArchDaily, Nov 2025 (https://www.archdaily.com/1035859/see-through-walls-adaptive-reuse-through-data-ai-and-circular-design)
- Tool: AI system combining laser scans, sensors, old floor plans, geospatial data → 3D models predicting hidden infrastructure
- David Benjamin (Director, AEC Industry Futures, Autodesk): "a kind of x-ray vision for buildings" — "Laser scans tell you about visible aspects. They can't tell you about the invisible aspects, including what is inside the walls and the condition of each material."
- Key insight: "applying AI to multiple data sets that are limited instead of one data set that is comprehensive. When we combine imperfect data from old floor plans, laser scans, sensors, and GIS information, we can derive better insights than if we had a larger and more pristine data set from a single category."
- Uncertainty modeling: "Every time AI makes a prediction, it has a sense of how certain or uncertain it is, but this information is rarely visible to the user."
- Mansoor Kazerouni (Global Director Architecture/Urbanism, Arcadis): "Existing conditions aren't always clearly documented. You don't truly know what you'll encounter until work begins."
- Case study: Castellana 66, Madrid — 1990 office building → energy retrofit, 55% reduction in annual energy use, prevented 10,800 tons CO2 emissions

### Renovation Surprise Statistics
- Source: DoJo Business 2026, multiple contractor sources
- Hidden structural problems: 40-50% of renovation projects
- Outdated electrical/plumbing: 35-45% of renovation projects  
- Material overages/changes: 60-70% of projects
- Mold/environmental hazards: 20-30% of projects (pre-1980 homes: asbestos, lead paint)
- Change orders: 70-80% of projects
- Recommended contingency: 10-20% of total budget (renovation), 5-10% (new build)
- Pre-1985 homes: 10% contingency specifically for code-compliance issues

### Specific Hidden Cost Ranges
- Source: Homes.com, Angi 2026
- Electrical rewiring: $8,000-$15,000 (full home), $2,000-$5,000 (partial)
- Plumbing repiping: $4,000-$15,000
- Foundation repair: $4,000-$25,000+
- Asbestos abatement: $1,200-$30,000
- Mold remediation: $1,500-$9,000
- Structural beam replacement: $3,000-$10,000
- Code-compliance upgrades (discovered during demo): $500-$5,000+
- Permit fees: $525-$3,041

### AI-Powered Sound Insulation Prediction (complementary tool)
- Source: MDPI/Acoustics journal
- Artificial neural networks predict airborne/impact sound insulation of floor assemblies
- 252 lab measurements → model predicts weighted sound reduction index within 2 dB accuracy
- Key factors: insulation thickness, CLT density, concrete floating floor density
- Relevant because: hidden structure determines acoustic performance, another "invisible" dimension of buildings

### Other AI Tools for Existing Buildings
- Autodesk Forma: AI-powered noise analysis for site planning (rapid + detailed modes)
- Autodesk ReCap Pro: laser scans + drone images → 3D models for renovation
- Matterport Defurnishing AI: removes furniture from 3D scans to reveal underlying space
- Buildots/OpenSpace: computer vision for construction progress tracking
- CAADRIA 2026 paper: Sketch-based facade renovation with generative AI, bypasses need for detailed as-built modeling

### Market Context
- Buildings = 40% of global carbon emissions (David Benjamin, Autodesk)
- Renovation/remodeling market: ~$500B in US (JCHS, Harvard)
- U.S. homes with lead-based paint: 37 million (HUD estimate, homes built pre-1978)
- Knob-and-tube wiring still present in ~30% of pre-1950 homes (NFPA estimates)

## Kill Test
Does this help someone building or buying a home? YES. Anyone renovating an older home faces the "what's behind the walls" problem. This article explains emerging tools that predict hidden conditions AND gives practical advice about contingency budgets and pre-renovation assessments until those tools are widely available.

## Novel Contribution
Cross-referencing Autodesk's "see through walls" experimental tool (designed for commercial adaptive reuse) with residential renovation cost data to calculate the potential savings: if AI could identify hidden structural/electrical/plumbing issues before demo in even half of the 40-50% of projects where they occur, the average $8,000-$15,000 surprise becomes a planned line item. The article bridges commercial AI research with residential homeowner impact.

## Strongest Counterargument
The Autodesk/Arcadis tool is experimental and designed for large commercial buildings. Residential renovation is fundamentally different — smaller scale, less documentation, more variety in construction methods, and homeowners can't afford the laser scanning + sensor deployment that the tool requires. The cost of a pre-renovation LiDAR scan ($2,000-$5,000) might exceed the contingency budget on a modest kitchen remodel.
