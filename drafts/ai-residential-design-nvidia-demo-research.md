# Research: AI Residential Design — Jensen Huang's GTC Taipei Demo and the State of AI Floor Plans

## Angle
Jensen Huang stood on a stage in Taipei and had an AI agent design a house — locally, on a PC. This was the flagship demo for NVIDIA's RTX Spark, meaning the chip company thinks residential architecture is the killer use case for personal AI agents. Elena Vasquez examines what this means for homeowners, architects, and the design phase of residential construction.

## Kill Test
Does this help someone building or buying a home? YES — design is typically 8-16 weeks and $10-50K for a custom home. If AI compresses that, it changes the economics of custom residential construction.

## Primary Sources

### 1. NVIDIA GTC Taipei Keynote (June 1, 2026)
- Jensen Huang demoed an AI agent running locally on RTX Spark (ARM CPU + Blackwell GPU)
- The agent took site selection, concept sketches, and a mood board
- Opened Rhino, modeled terrain, setbacks, building envelope
- Proposed building forms optimized for cost, comfort, quality
- Generated interior layouts — walls, circulation, rooms
- Self-corrected when it made a mistake
- Exported to Blender, transferred materials, rendered photorealistic views
- Multiple viewpoints, different lighting conditions
- All running locally on a PC — not cloud
- Source: NVIDIA official, LinkedIn posts from Adeline Chan (AAL Innovation) and industry observers

### 2. AIA Architecture Firm Survey (2025)
- 25% of architects regularly use AI for their jobs
- Most common: chatbots, image generators, grammar/text analytics
- Only 8% of firms have implemented AI solutions into practice
- AI experimentation driven significantly more by architects under 50
- Source: AIA (American Institute of Architects) via Archinect year-end roundup

### 3. RIBA White Paper (September 2025)
- 88% of architects expect AI to become increasingly important for business success within 10 years
- RIBA President Chris Williamson: "excitement and trepidation"
- Source: Royal Institute of British Architects

### 4. Maket AI — Floor Plan Generation Platform
- Patrick Murphy (CEO) quote: "It really does 70 to 75 percent of the work. And then you get to a point where you meet an architect and you save a fair amount of time and money"
- Remaining 25-30% (structural review, code compliance, engineering) still requires professional
- Agentic editing: describe changes in conversation ("make the kitchen bigger"), AI applies in real time
- As of early 2026, Maket is the only residential tool offering agentic editing
- Source: Maket.ai article on AI floor plan generators

### 5. ARCHITEChTURES Platform
- Automatically generates 3D models and floor plans
- Comparatively analyzes each alternative's energy performance or structural efficiency
- Designers select optimal solution in short time
- Source: Springer Nature academic paper (Architectural Design in the Age of Generative AI)

### 6. Autodesk Forma
- Early-stage building design in several hours using AI
- Source: Albukhari (2025) via Springer Nature

### 7. Zaha Hadid Architects
- AI-based simulation tools render complex forms and lighting in real time
- Design feedback cycle shortened from several days to several hours
- Source: Bell (2024) via Springer Nature

### 8. RTX Spark Specs
- ARM CPU (20-core, designed with MediaTek) + Blackwell GPU (near desktop RTX 5070)
- Full CUDA stack — first Windows on ARM chip with CUDA
- 128GB RAM
- Runs x86 emulation for all Windows applications
- OEMs: ASUS, Dell, HP, Lenovo, Microsoft, MSI (fall 2026 launch)
- Jensen: "For forty years, you launched apps. Click. Type. With RTX Spark and Microsoft Windows, you ask — and the PC does the work."
- Source: Reuters, Motley Fool, NVIDIA official, multiple LinkedIn posts

### 9. Procore Report (April 2026)
- Over half of industry leaders expect automation to disrupt construction within 5 years
- AI-powered tools for preconstruction and planning gaining adoption
- Human expertise remains indispensable
- Source: Procore

## Original Contribution
Cost analysis: What does the design phase actually cost for a custom residential project, and what would compressing it by 70% mean in real dollars? Cross-reference Maket's 70-75% claim with typical architect fees (AIA median data: 8-15% of construction cost, design phase = ~40% of architect's work). For a $500K custom home, architect fees = $40-75K, design phase = $16-30K. If AI does 70%, that's $11-21K in potential savings — but only if the AI output is actually usable, which currently it isn't for construction documents.

## Strongest Counterargument
No AI tool today produces construction-ready drawings. The demo showed schematic design — the pretty part. Construction documents (CDs) are where 60% of an architect's liability sits. A photorealistic render of a house tells you nothing about whether it meets IRC 2021, local zoning setbacks, or fire separation requirements. The gap between "looks beautiful" and "can be built legally" is exactly where architects earn their fee.

## Limitations
- The GTC demo was a controlled presentation, not a real project
- No third-party verification of the agent's output quality
- Adoption data (AIA survey) is from 2025, pre-RTX Spark
- Maket's 70-75% claim is self-reported by the CEO
- No data on how many homes have actually been designed start-to-finish with AI tools

## Journalist
Elena Vasquez — Architecture & Design. This is her beat: the tension between design as art and design as optimization. She'll be simultaneously fascinated by the demo and deeply skeptical of the "AI replaces architects" narrative.
