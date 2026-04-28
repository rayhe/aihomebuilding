# Research: AI Floor Plan Generators — The Daylight Performance Gap

## Angle
AI floor plan generators now have 1M+ users and produce layouts in seconds. Academic research reveals a critical blind spot: these tools generate plans that *look* architecturally legitimate but systematically ignore solar orientation, daylight performance, and climate context. The gap between visual plausibility and environmental performance has measurable dollar consequences for homeowners.

## Journalist
Elena Vasquez (Architecture & Design)

## Self-Critique Gate
- **Propose:** Evaluate AI floor plan generators against measurable performance metrics (daylight, orientation, energy). Novel contribution: cross-referencing academic evaluation data with consumer tool adoption numbers and calculating the dollar cost of orientation-blind floor plans.
- **Challenge:** Already published generative design (#1), parametric (#2), interior design (#3), digital twins (#4). None evaluated ACTUAL PERFORMANCE of AI-generated plans against simulation. This fills that gap.
- **Verdict:** PROCEED.

## Primary Sources

### Source 1: Çelik 2025 (Cambridge University Press, AI EDAM)
"Evaluating daylight performance of AI-generated housing plans via diffusion models and climate-based simulation"
- Published: July 30, 2025, Cambridge Core
- DOI: 10.1017/S0890060425100085
- Methodology: 3-phase (AI generation → AutoCAD reconstruction → Velux Daylight Visualizer simulation)
- Tools tested: ChatGPT, Copilot, LookX
- Results:
  - 31 AI-generated plans, only 8 valid (74% failure rate on reconstruction)
  - LookX excluded entirely — "insufficient architectural legibility"
  - ChatGPT: higher spatial clarity, more balanced daylight
  - Copilot: outputs varied significantly
  - **KEY FINDING:** "None of the models consistently integrated solar orientation or seasonal lighting considerations"
  - "Gap between generative representation and environmental logic"
  - Quote: "Can machines think like architects, or do they merely draw like them?"

### Source 2: Springer — Performance Prediction (2025)
"Performance Prediction of AI-Generated Architectural Layout Design: Using Daylight Performance of Residential Floorplans as an Example"
- Combines diffusion models with GANs for plan generation + evaluation
- GAN daylight predictor: <5% deviation from ground truth, MSE 4.2, SSIM 0.98, 267x faster than traditional simulation
- Problem: AI plans focus on form and spatial layout, neglecting performance evaluations
- Plans are presented as images without geometric/physical properties for simulation

### Source 3: Maket.ai Data (illustrarch.com, March 2026)
- 1M+ registered users
- Founded 2020, Montreal — Patrick Murphy (CEO), $3.4M CAD seed (Oct 2025)
- Pro plan: $30/mo or $288/yr
- Features: text-to-plan, agentic editing, zoning PDF upload, DXF export
- Zoning assistant: interprets uploaded PDFs, no live code database
- Cannot cross-reference overlapping regulations (historic + base zoning)
- "AI floor plan generators work best during feasibility and pre-design phases"

### Source 4: Building Orientation Energy Impact
- DOE Building America: proper orientation (long axis E-W) reduces heating/cooling 10-20%
- MDPI study (Afghanistan cities, 2024): orientation differences up to 25% energy variance
- Average US home energy cost: ~$2,000/year (EIA 2023)
- Bad orientation penalty: 15% × $2,000 = $300/year × 30 years = $9,000 over mortgage life
- This is the hidden cost of an AI that draws rooms without knowing where the sun is

### Source 5: MDPI — Comprehensive Metrics for AI Floor Plans (May 2025)
"Comprehensive and Dedicated Metrics for Evaluating AI-Generated Residential Floor Plans"
- Academic framework for evaluating AI floor plans beyond visual appearance
- Metrics include spatial quality, circulation, room proportions, adjacency

## Kill Test
Does this help someone building or buying a home?
YES — if you're a homeowner using Maket/Planner5D/ChatGPT to generate a floor plan before hiring an architect, you need to know: the plan might look great but cost you $9,000 in energy over the life of your mortgage because the AI didn't know which way the sun moves. This article tells you exactly what to check and when these tools add value vs. when they're dangerous.

## Novel Contribution
Cross-referencing academic simulation data (Çelik 2025's 74% failure rate, zero consistent solar integration) with commercial tool adoption (1M+ Maket users) and calculating the per-homeowner dollar cost of orientation-blind floor plans ($9,000 over 30 years). Nobody has combined these three data streams.

## Strongest Counterargument
These tools don't claim to replace architects — Maket explicitly positions itself as "feasibility and pre-design." Using AI plans as inspiration, not construction documents, is perfectly valid. The problem is that 1M+ users include homeowners who may not know the difference, and the tools don't warn about performance blind spots.
