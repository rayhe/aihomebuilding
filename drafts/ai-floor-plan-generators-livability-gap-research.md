# Research: AI Floor Plan Generators — The Livability Gap

## Angle
AI floor plan generators can produce 10 layouts in 60 seconds. But the outputs consistently fail at what makes a home feel right: circulation, adjacency, sightlines, daylighting. The gap between "dimensioned floor plan" and "livable home" is where architects still earn their fee — and where homeowners using these tools directly get hurt.

## Kill Test
✅ Helps someone building or buying a home understand whether AI-generated floor plans are trustworthy, what to look for, and when human design review is still critical.

## Journalist
Elena Vasquez (Architecture & Design) — skeptical of tools that flatten design into optimization. Elegant, precise. Sees buildings as art first, technology second.

## Primary Sources

### 1. Maket.ai Review & User Data (illustrarch.com, March 2026)
- Maket.ai: Montreal-based, 1M+ registered users, $3.4M CAD seed funding (Oct 2025, Amiral Ventures)
- Pricing: Free tier (1 project, low-res) or Pro at $30/month
- Trustpilot: 2.3/5 rating (7 reviews as of early 2026)
- Consistent complaints: "awkward proportions, impractical circulation paths, hallways that waste square footage"
- Struggles with: L-shaped parcels, sloped sites, multi-story vertical coordination
- Pro users find more value because they refine in CAD; casual users expect finished plans
- Key quote: "AI tools frequently place kitchens far from dining areas or put bedrooms adjacent to mechanical rooms"
- Source: https://illustrarch.com/articles/design-softwares/73352-maket-ai-review.html

### 2. Architecture AI Adoption Survey (Architizer & Chaos, 2024/2025)
- 1,227 architecture professionals surveyed
- 46% already use AI tools in active projects
- 24% planning to start soon
- Adoption concentrated in early design phases
- Source: Referenced in illustrarch.com AI Floor Plan Generator comparison (March 2026)

### 3. Automation in Construction Systematic Review (2025)
- 161 journal papers reviewed
- 68.94% of AI usage in architecture occurs during early design phases
- Source: Automation in Construction journal, 2025

### 4. Academic Research on AI Floor Plan Quality (Multiple 2024-2026)
- GSDiff framework (arXiv 2408.16258): Notes that AI methods face "obvious geometric inconsistencies such as misalignment, overlap, and gaps"
- MDPI Buildings journal: "Comprehensive and Dedicated Metrics for Evaluating AI-Generated Residential Floor Plans" — the fact that metrics are still being developed means quality standards don't exist yet
- TU Delft research: Exploring AI-based floorplan searching and generation — still academic, not production-ready
- arXiv 2404.13353: "Generating Daylight-driven Architectural Design via Diffusion Models" — AI can't yet optimize for natural light

### 5. Tool Landscape (illustrarch.com comparison, March 2026)
- 8 tools compared: Maket.ai, TestFit, ArkDesign.ai, Autodesk Forma, Finch3D, others
- Autodesk claims 50% early-phase productivity increase with Forma (single firm case study)
- TestFit & ArkDesign embed zoning rules; most tools have NO code compliance
- Export formats vary wildly: some only export flat images (useless for production)

## Novel Analysis: Real Time Savings Calculation

### Traditional Schematic Design
- 3 layout options × 6 hours each = 18 person-hours
- Includes: adjacency studies, circulation analysis, sightline checks, orientation/daylighting

### AI-Assisted (Optimistic Scenario)
- Generate 10 layouts: 10 minutes
- Review & discard 7 unusable ones: 30 minutes
- Fix 3 remaining (circulation, adjacency, sightlines, dimensions): 2 hours each = 6 hours
- Total: ~7 hours (61% savings)

### AI-Assisted (Realistic Scenario, per user complaints)
- Generate 10 layouts: 10 minutes
- Review all 10: 60 minutes (many have geometric issues)
- Find 2 worth salvaging: 3 hours each to fix (circulation rework, adjacency correction, daylighting consideration, dimension correction)
- Total: ~7 hours (61% savings) — BUT only 2 options instead of 3
- AND: requires architect who knows what's wrong. Homeowner alone? Gets a plan that "looks right" but lives wrong.

### The Homeowner Problem
$30/month Maket.ai vs. $5,000-15,000 architect schematic design fee. The price difference creates a temptation to skip professional design. But an AI plan with 22% circulation waste (hallway-heavy) on a 2,000 sq ft home means ~440 sq ft of dead space. At $200/sq ft construction cost, that's $88,000 in built space that serves no purpose beyond getting from one room to another. A good architect targets 10-15% circulation.

## Strongest Counterargument
AI tools are explicitly designed for early-phase ideation, not construction documents. Criticizing their livability is like criticizing a napkin sketch for missing structural details. The tools save time during feasibility — they were never meant to be the final plan.

## Limitations
- No independent benchmark study comparing AI-generated vs. architect-designed floor plan livability metrics
- Maket.ai's Trustpilot sample size is tiny (7 reviews)
- The circulation percentage comparison (10-15% vs. 20-25%) is an industry rule of thumb, not empirically measured across AI outputs
- Autodesk's "50% productivity increase" is a single case study, not peer-reviewed
