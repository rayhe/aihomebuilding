# Research: AI Floor Plan Generators — The Livability Gap

## Thesis
AI floor plan generators can produce 10+ layout variations in under two minutes for $20-50/month. Architects are finding that these tools optimize for geometric compliance and square footage maximization but consistently fail at the spatial qualities that make a home livable — circulation logic, room adjacency, natural light, privacy gradients, and the proportional instincts that distinguish a floor plan from a diagram.

## Key Sources

### 1. Maket.ai Reviews & Data
- **Source:** illustrarch.com (July 2026 review), Maket.ai own site, Medium review
- **Trustpilot:** 2.3/5 stars (7 reviews, early 2026)
- **CEO Patrick Murphy quote:** "It really does 70 to 75 percent of the work. And then you get to a point where you meet an architect and you save a fair amount of time and money within the process."
- **Critical findings (illustrarch.com):** "Generated layouts sometimes produce rooms with awkward proportions, impractical circulation paths, or hallways that waste square footage." Tool handles rectangular lots well, struggles with L-shaped parcels, sloped sites, multi-story.
- **Pro tip from review:** "AI tools frequently place kitchens far from dining areas or put bedrooms adjacent to mechanical rooms."
- **Medium (AI Pro Insider):** "Maket's layouts feel formulaic. They work on paper. They just don't feel like they were designed by someone who understands how people actually live."
- **Pricing:** Free plan (1 project, 50 credits), Pro $20-30/mo, DXF export
- **Key limitation:** "Not construction ready. An architect still needs to review and stamp the final plans."

### 2. Academic Research — Ergonomics vs. Packing
- **Source:** arxiv.org — "What a Comfortable World: Ergonomic Principles Guided Apartment Layout Generation"
- **Finding:** When AI optimizes for ergonomic principles (room adjacency, circulation comfort), there's a trade-off: "slightly lower area coverage compared to the baseline." The model improved ergonomic cost from 0.502m to 0.353m baseline, but coverage dropped from 79.83% to 74.19%.
- **Implications:** AI tools must choose between maximizing buildable area and making spaces comfortable. Most commercial tools optimize for the former.

### 3. ACL 2026 Paper — LLM Floor Plan Generation
- **Source:** arxiv:2605.14117, accepted to Findings of ACL 2026
- **Method:** Fine-tunes LLM with reinforcement learning with verifiable rewards (RLVR) to generate floor plans that respect connectivity and numerical constraints
- **Result:** "94% relative reduction in Compatibility" vs existing methods — meaning better adherence to constraints
- **Note:** Focuses on topological and numerical constraints, not livability or experiential quality

### 4. Architect YouTube Video — 9 Problems in AI Floor Plan
- **Source:** YouTube — "Architect fixes AI-generated floor plan (so many mistakes...)"
- **9 problems found:** Entry design, privacy issues, warehouse-scale rooms, lighting, kitchen layout, closet placement, bulk storage, daylight vs sunlight distinction, furniture layout incompatibility
- **Key insight:** AI doesn't understand privacy gradients (public → semi-private → private zones), furniture placement constraints, or how sunlight angle changes through the day

### 5. Cost Comparison
- **AI tools:** $20-50/month subscriptions (Maket $20-30, ARCHITEChTURES $49, TestFit $100, ARK $180)
- **Architect (floor plan design):** $1,500-$9,000 (RoomSketcher/industry data)
- **Draftsman:** $800-$2,500
- **Hidden cost of AI (solidrender.com):** Architect spending 12 hours tweaking AI prompts at $200/hr = $2,400 in lost productivity. "Free AI rendering often costs $10,000 to $25,000 on a mid-sized project" when you account for revision cycles and delays.

### 6. Tool Landscape (2026)
- **Residential leaders:** Maket.ai, ARCHITEChTURES
- **Multi-family/commercial:** TestFit, ArkDesign.ai
- **Rendering/visualization:** Veras (BIM-native, $29-59/mo), Midjourney (concept only)
- **Site analysis:** Autodesk Forma (enterprise)
- **All tools produce schematic layouts only — NOT construction documents**
- **Code compliance varies significantly across tools** (illustrarch.com)

### 7. What AI Gets Wrong (Specific)
From combined sources:
- Kitchen placed far from dining areas
- Bedrooms adjacent to mechanical rooms
- No privacy gradient (front door opens directly into living space with sight lines to bedrooms)
- Rooms sized like warehouses (proportionally wrong even if square footage is correct)
- Closets in wrong locations relative to bedrooms
- No consideration of furniture layout within rooms
- Daylight vs sunlight confusion (a north-facing window gets daylight but never direct sun)
- Hallways that waste square footage while making circulation worse
- Formulaic layouts — all variations share the same structural bones

## Kill Test
Does this help someone building or buying a home? **YES.** 
- Homeowner considering AI tools for a new build or renovation gets an honest assessment of what these tools can and can't do
- Builder using AI for preliminary layouts gets a checklist of livability problems to catch before showing clients
- Anyone comparing $30/month AI vs $3,000 architect gets real data on what the cost difference buys them

## Original Contribution
A livability audit framework: the 7 things AI floor plan generators consistently get wrong, mapped against the design principles (Alexander's "A Pattern Language," circulation theory, privacy gradients) that explain WHY they get them wrong. This is new synthesis — the reviews note individual problems, but nobody has organized them into a systematic diagnostic.

## Journalist
**Elena Vasquez** — Architecture & Design. She sees buildings as art first, technology second. Skeptical of tools that flatten design into optimization. This is her ideal piece — engaging seriously with the technology while explaining what it can't replicate about spatial thinking.
