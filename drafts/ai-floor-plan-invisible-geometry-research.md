# Research: AI Floor Plan Generators and the Invisible Geometry of Home

## Angle
AI floor plan generators have crossed 1 million users. They optimize for what's measurable — room dimensions, square footage, code clearances. But the qualities that make a home feel right — sightlines from the kitchen to the yard, a sense of arrival at the front door, circulation that doesn't route your groceries through the living room — aren't in any building code. They're the invisible geometry architects spend years learning to see. And no AI tool even attempts them.

## Journalist: Elena Vasquez (Architecture & Design)
Perfect fit — she sees buildings as art first, technology second, and is skeptical of tools that flatten design into optimization.

## Kill Test
Yes. Homeowners using Maket, Planner5D, Coohom to design or remodel need to know what these tools can't do. Builders relying on AI-generated plans need to understand the gap between "code compliant" and "livable."

## Primary Sources

### 1. Lara et al. (2026) — "Generative Floor Plan Design with LLMs via Reinforcement Learning with Verifiable Rewards"
- **Source:** arXiv:2605.14117, Accepted to Findings of ACL 2026
- **Key findings:** Even with RLVR fine-tuning, LLM-generated floor plans exhibit: non-closed polygons, self-intersections, duplicated or missing rooms, numerical drift in room areas, repetition loops, schema hallucinations
- **Critical quote:** "could negatively affect occupants' quality of life" and "contribute to unsafe designs, construction errors, and downstream legal liability"
- **Limitation acknowledged:** "Fewshot prompting alone does not provide the built-in structure needed to enforce bubble diagram connectivity and numerical constraints jointly"
- **94% reduction in Compatibility error** vs existing methods — sounds good until you realize the baseline was terrible

### 2. HouseMind (Qin, Weber et al.) — UC Berkeley / Tsinghua University
- **Source:** arxiv, housemind.github.io
- **Key finding:** "Architectural floor plan design demands joint reasoning over geometry, semantics, and spatial hierarchy, which remains a major challenge for current AI systems"
- **Approach:** Discrete room-instance tokens, multimodal alignment — promising but acknowledges the fundamental challenge

### 3. Maket.ai — Market Data
- **Source:** illustrarch.com review (March 2026)
- 1 million+ registered users as of early 2026
- CEO Patrick Murphy: "It really does 70 to 75 percent of the work. And then you get to a point where you meet an architect and you save a fair amount of time and money within the process."
- Remaining 25-30%: structural review, code compliance, engineering
- Maket v2 (expected 2026): will add zoning code verification, HVAC planning — still nothing about spatial quality
- Outputs: JPEG and DXF only — not construction documents
- "An architect still needs to review and stamp the final plans"
- Agentic editing: describe changes in conversation ("make the kitchen bigger") — AI applies in real time. As of early 2026, Maket is the only residential tool offering this.

### 4. AI Floor Plan Tool Landscape (illustrarch.com, 2026)
- 8 major tools: Maket, TestFit, ArkDesign, Autodesk Forma, Finch3D, Hypar, GetFloorPlan AI, ARCHITEChTURES
- Code compliance: Only TestFit and ArkDesign have built-in compliance; Maket has "zoning checks (v2)" — most have partial or none
- NO tool checks for: sightlines, circulation quality, spatial hierarchy, sense of arrival, wall alignment, enfilade, proportional harmony

### 5. Korean Kitchen Work Triangle Study (PubMed)
- Analyzed 38 actual apartment kitchen floor plans
- Finding: "the impact of Work Triangle compliance on movement efficiency was limited"
- Implication: Even the ONE spatial quality metric that's been codified (the work triangle) turns out to have limited real-world validity. The qualities that matter aren't the ones being measured.

### 6. Architectural Flow Principles (Multiple Sources)
**Tami Faulkner Design (May 2026):**
- 5 essentials of floor plan flow: (1) proportional rooms, (2) hub-and-spoke transitions, (3) multiple circulation paths, (4) consistent wall alignments, (5) intentional lines-of-sight
- "When wall corners and wall runs align, the plan reads as calm and intentional. Staggered or misaligned corners create unnecessary jogs that interrupt movement and introduce visual disorder."
- "When the architecture is planned with clear, intentional sight-lines, each view from one space to the next feels deliberate."

**Fine Homebuilding — "Houses that Flow":**
- Linear vs circular circulation patterns
- Enfilade: "Views are framed by a series of doorways that draw you along the intended path"
- Target-style circulation: tight circle around central service core
- "Elements requiring less daylight (closets, fireplaces, stairs) typically comprise the central core"

**Building Advisor — Circulation:**
- "Consider how you feel when you move directly from room to room, versus moving through a central hall between rooms"
- "Passing through a door in a wall is something like moving offstage in one play and suddenly finding yourself onstage in another"
- This is the kind of spatial intelligence that is fundamentally about embodied human experience — not something you can optimize with a loss function

**Shea McGee (Studio McGee):**
- "Alignment creates a really thoughtful feeling in our home"
- "I needed my kitchen sink to be exactly lined up with the center of my fireplace and I wanted my island to be exactly lined up with the center of my dining room"

### 7. Buyer's Guide — Puravankara (2026)
- "Circulation tax": the percentage of square footage consumed by movement (corridors, passages, entry zones)
- "A good plan keeps circulation compact. You enter, you reach the living area quickly, and bedrooms feel private without needing long corridors."
- "If the plan has multiple long hallways, you're paying for space you don't live in."

## Novel Contribution
Calculate what percentage of the "Five Essentials of Flow" (Faulkner) any AI floor plan tool can verify or optimize for. Answer: essentially 0 of 5. All five require spatial reasoning about human perception, embodied experience, and visual continuity — none of which appears in any tool's constraint set.

Also: the Maket CEO's "70-75% of the work" claim deserves interrogation. That 70-75% is the EASY part — room placement, rough sizing, basic adjacency. The remaining 25-30% is where the architecture lives. It's like saying a spell-checker does 95% of a novelist's work because it handles 95% of the keystrokes.

## Limitations to Acknowledge
- We haven't tested every tool exhaustively
- The ACL 2026 paper's RLVR approach IS showing improvement — the trajectory is real even if the destination isn't reached
- Some homeowners genuinely don't need architectural refinement — a basic compliant plan may be sufficient for simple additions
- Space syntax and isovist analysis ARE being researched as computable spatial quality metrics — the gap may narrow

## Strongest Counterargument
The strongest case for AI floor plan tools is that they democratize access to design exploration. Not everyone can afford $5,000-$15,000 in architect fees for the exploratory phase. If Maket lets a homeowner arrive at the architect's office with a clear brief — "I want something like this but better" — the architect can spend their time on the invisible geometry instead of basic space allocation. The 70-75% claim may be right if you reframe "the work" as "the conversation about what the homeowner wants."
