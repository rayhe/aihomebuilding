# Research: AI Floor Plan Generators — The Constraint Gap

## Thesis
AI floor plan generators produce dozens of layouts in seconds, but they treat architectural constraints as suggestions and optimize for countable metrics while missing the intangible spatial qualities that make homes livable. Homeowners working with architects who use these tools need to know what questions to ask.

## Journalist: Elena Vasquez (Architecture & Design)
- Elegant, precise. Buildings as art first, technology second.
- Skeptical of tools that flatten design into optimization.
- Longer paragraphs with essayist's flow.

## Headline Candidates
1. "AI Generated 31 Floor Plans for a Study on Daylight. Only 8 Were Architecture. None Faced the Sun."
2. "Your Architect's AI Scored 90% on Floor Plan Accuracy. The Test Was Whether It Counted the Bedrooms Right."
3. "AI Can Draft Your Floor Plan in 8 Seconds. It Doesn't Know Why Your Kitchen Should Face East."

## Key Data Points

### Market Adoption (Chaos/Architizer 2026 survey, ~800 architects)
- 64% of architects have experimented with AI tools; only 20% fully integrated
- 74% plan to increase AI use in next 12 months
- 43% say AI adds most value in concept/pre-design phases
- 69% only "somewhat" satisfied with AI output
- 85% report efficiency gains, mostly in concept design and image workflows
- Source: https://blog.chaos.com/the-state-of-ai-in-architecture-survey-insights

### The Constraint Problem (Snaptrude/ASCE data, 2025-2026)
- 62% of architecture professionals say AI tools are not ready for full production use (Chaos/Architizer survey of 1,200+ architects, 2024)
- Only 27% of AEC firms currently use AI in operations (ASCE survey, 2025)
- 70% of architects want AI integrated into existing software, not added as new tools
- AI treats locked dimensions as suggestions — a 10-foot ceiling becomes 12 feet, 24-inch cabinets stretch to 36 inches
- "Change that ceiling height and you've invalidated six other design decisions" (Snaptrude)
- Architects "kissing a lot of frogs" — testing and abandoning AI tools at equal rates
- Source: https://www.snaptrude.com/blog/ai-architecture-software-and-the-constraint-problem-why-architects-still-trust-excel-2026

### Daylight Performance Study (Çelik, Cambridge University Press, July 2025)
- Tested AI-generated floor plans across 5 climate zones for daylight performance
- 31 initial plans generated; only 8 valid enough to reconstruct in AutoCAD and simulate
- ChatGPT plans had better spatial clarity; Copilot varied significantly; LookX excluded for "insufficient architectural legibility"
- NONE of the models consistently integrated solar orientation or seasonal lighting
- "Gap between generative representation and environmental logic"
- Source: Cambridge AI EDAM journal, doi: 10.1017/S0890060425100085

### AI Floor Plan Tool Landscape
- **Maket.ai:** $30/mo Pro, 1M+ users, generates plans in seconds. Spatial reasoning "lags behind competitors." Montreal-based, $3.4M CAD seed funding (Oct 2025). Best for feasibility/pre-design. Source: illustrarch.com review, March 2026
- **Finch3D:** €49/month, reduces preliminary design time by 80%. Graph technology + AI. Supports Rhino/Revit/Grasshopper. 12,000 early access customers. Malmö, Sweden. Source: aecmag.com
- **TestFit:** Site planning optimization, commercial/multifamily focus
- **Snaptrude:** Cloud-native BIM with "bidirectional editing" — positions itself as constraint-respecting alternative
- Most tools map only to early conceptual design stage, not production workflows (ScienceDirect, 2025)

### Academic Context
- Yale/RIBA: Stanford Anderson's 1966 "problem worrying" thesis — architecture is a wicked problem requiring heuristics, not algorithms. Phil Bernstein + Vincent Guerrero (Yale) frame AI as entering architecture in 2026 across 4 dimensions: 2D/3D image gen, LLMs for practice knowledge, agentic AI for design evaluation, custom software generation. Source: RIBA Journal, March 2026
- FloorPlan-LLaMa (ACL 2025): Floor plan model that integrates architect feedback — acknowledges that pure generation without human architectural knowledge fails
- HouseDiffusion (CVPR 2023): Diffusion model for vector floorplans. Metrics: room count compliance, spatial connectivity. >90% accuracy on room count — but that's an absurdly low bar for livability
- Harvard Design Magazine: "Resistant Data: Questioning Architectural Values in the Age of AI" — tensions between sustainability, social equity, economic viability

### The Cost Dimension (Original Contribution)
- Custom home architectural design: $15,000-$75,000 depending on size/complexity (typically 8-15% of construction cost)
- If AI handles "70% of tasks before architects" (Maket.ai claim), where does the fee go?
- A Revit license costs $400+/month; Maket.ai costs $30/month — 13x cheaper
- But: the 30% of design work AI CAN'T do (spatial intuition, lived experience, light quality, emotional resonance) is the entire reason you hired an architect
- Finch3D claims 80% reduction in preliminary design time → a $50K design engagement could theoretically compress 40% of billable hours
- **Original calculation:** If schematic design is ~35% of architectural services (AIA benchmark), and AI tools compress schematic time by 80%, that's a potential $14,000 savings on a $50K engagement — but ONLY if the architect passes savings to the client, and ONLY if the AI output doesn't require extensive rework

### The Livability Gap (What AI Optimizes For vs. What Matters)
**What AI measures:**
- Room count compliance
- Square footage targets
- Adjacency rules (bedroom near bathroom)
- Code setback requirements
- Spatial efficiency ratios

**What AI can't measure:**
- Morning light through an east-facing kitchen window
- The way a hallway compresses before opening into a living room
- Sightlines from the kitchen to the backyard where kids play
- Acoustic separation between a teenager's bedroom and a home office
- Where you'll put the Christmas tree (seasonal spatial needs)
- How furniture actually fits (a 12x12 room is different from a 10x14.4 room at the same square footage)
- The feeling of arrival at a front door
- Cross-ventilation pathways for summer evenings

## Kill Test
Does this help someone building or buying a home? YES.
- If you're hiring an architect for a custom home: ask whether they use AI floor plan tools, what role those tools play, and whether the design has been tested for daylight, views, and furniture placement — not just room count
- If you're using an AI floor plan generator yourself: understand what it optimizes for (metrics) vs. what it can't (experience)
- Budget reality: AI tools don't necessarily make architectural services cheaper if rework eats the time savings

## Strongest Counterargument
The best case FOR AI floor plan generators: they democratize access. Not everyone can afford a $50K architect. A $30/month tool that generates competent layouts lets a first-time homebuilder at least start the conversation with a builder from an informed position rather than a blank page. The tool's output may be mediocre architecture, but mediocre architecture beats no architecture for the 85% of new homes built without an architect (Census Bureau data: only 2% of new single-family homes involve an architect from the start in most markets). The real competition isn't "AI vs. human architect" — it's "AI layout vs. builder's stock plan."
