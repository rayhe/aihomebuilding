# Research: AI Design Tools Missing the Section — The Vertical Dimension Gap

## Journalist: Elena Vasquez (Architecture & Design)

## Core Thesis
Every consumer AI floor plan generator treats your home as a flat diagram. They optimize room adjacencies, circulation paths, and square footage — the plan. But they completely ignore the section: ceiling height variation, vertical spatial sequences, and the three-dimensional experience of moving through a home. Architecture school teaches that the section reveals the architecture; the plan is merely organizational. AI is giving homeowners organization charts and calling them designs.

## Key Data Points

### The Cathedral Effect (Meyers-Levy & Zhu, 2007 — University of Minnesota)
- 10-foot ceilings → abstract thinking, creativity, sense of freedom
- 8-foot ceilings → detail-oriented processing, confinement priming
- Effect persists even when participants don't consciously notice ceiling height
- Published in Journal of Consumer Research
- Source: ScienceDaily, LiveScience, Wikipedia "Cathedral effect" entry

### Aalborg University (Denmark) — Brain Imaging Study
- Higher ceiling heights and perceived enclosure influence beauty judgments and approach-avoidance decisions
- Open/tall spaces activate dorsal visual stream structures
- Enclosed spaces trigger emotional reactions
- Source: vbn.aau.dk architectural design and the brain study

### AI Tool Adoption
- 46% of architects use AI tools (illustrarch.com survey, 665 professionals, d5render.com 2025)
- 68.94% of AI usage occurs in early design phases — exactly when section decisions should be made
- AI tools "handle 70% of tasks before architects" (Maket.ai claim)
- Over 1 million people have used Maket.ai alone
- AI home renovation planning: 9% → 17% adoption (2024 → 2025, GlobeNewsWire market report)

### Consumer AI Floor Plan Tools — Section Capability Audit
- **Maket.ai** ($30/mo Pro): Generates 2D floor plans from prompts. No section generation, no ceiling height as design variable. "Spatial reasoning and rendering quality lag behind competitors" (illustrarch.com 2026 review)
- **Planner 5D** (10M+ downloads): Converts 2D to 3D, has furniture catalog. 3D view shows rooms at default ceiling height. No sectional design capability.
- **TestFit**: Optimizes multifamily density, unit yield, ADA compliance. Not designed for custom residential section design.
- **Coohom/RoomSketcher/ArchiVinci**: All operate in plan view with fixed-height 3D extrusions. No variable ceiling heights within a design.
- **HomeDesigner Software** (Chief Architect): Traditional CAD — DOES have ceiling height controls per room. But not AI-generative.
- **Key finding**: Zero consumer AI floor plan generators model ceiling height as a design variable or generate building sections.

### Building Codes — Vertical Minimums
- IRC 2018: 7'6" minimum for habitable spaces, 7' for non-habitable (basements)
- Sloped ceilings: must meet 7'6" for at least half the room area
- Bathrooms: 6'8" minimum around fixtures
- Source: DoItYourself.com, IRC 2018

### Proportion & Scale
- Roche Spaces: optimal ceiling heights 2.75m-4.00m (9'-13'2") based on floor area
- Architectural ideal room proportions: roughly 1:1.5:2.5 (height:width:length)
- A 12x14 room at 8' ceiling = 1:1.5:1.75 ratio (compressed)
- Same room at 10' ceiling = 1:1.2:1.4 ratio (more cube-like, different feel entirely)
- Double-height spaces (16-20') create dramatic vertical connections between levels
- Source: ArchDaily, Roche Spaces design guidelines

### The Section in Architecture
- "The section reveals the architecture" — standard architectural pedagogy
- UCLA Architecture studio: "Section and Elevation" course explores how section is both abstraction and functional medium
- ArchDaily: Double-height ceilings "create spacious, well-lit environments by connecting levels through vertical circulation"
- JLC Online: "Varied ceiling height adds interest" — lower ceilings for private spaces, higher for public areas
- Compression-to-release sequence: entry compresses (8'), opens to living (10-12'), compresses again (hallway 8'), bedrooms (9'). This sequence creates the experiential rhythm of a home.

### AI Research Gap
- TU Delft: "current models struggle with spatial understanding and environmental impact"
- RFP-A framework (MDPI study): Evaluates AI floor plans on room count compliance, spatial connectivity — no vertical metrics
- HouseDiffusion: >90% accuracy on room count — but accuracy metrics don't include section
- GSDiff framework: "vector floorplan design" — 2D only
- Text-to-Layout (LLM-based): Generates plans compatible with Revit — but plan only, no section

### Wharton Real Estate — Economic Value of Height
- Witold Rybczynski working paper: High ceilings in homes command premium pricing
- Premium real estate consistently features ceiling height variation as selling point
- The vertical dimension is economically valued by buyers but invisible to AI design tools

## Novel Contribution
An audit of the top consumer AI floor plan generators showing that none model ceiling height as a design variable or generate building sections. Cross-reference with the Cathedral Effect research to quantify the experiential gap: AI defaults every room to the same height, eliminating the compression-release spatial sequence that makes homes feel alive.

## Strongest Counterargument
Professional tools (Revit, ArchiCAD, SketchUp) DO handle the vertical dimension. AI floor plan generators aren't meant to replace full architectural design — they're early-phase exploration tools. The section comes later, when an architect develops the concept. The gap exists, but it's arguably the right gap: you wouldn't expect a napkin sketch to include section details either.

## Limitations
- No direct user study comparing homes designed with AI plans vs. architect-designed sections
- Cathedral Effect research conducted in controlled lab settings, not actual homes
- Some professional AI tools (Autodesk Forma, Hypar) may model vertical dimensions for commercial projects — audit focused on consumer/residential tools
- Proportion ratios cited are guidelines, not universal standards
