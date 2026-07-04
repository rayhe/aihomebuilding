# Research: AI Rendering Buildability Gap
## Journalist: Elena Vasquez (Architecture & Design)

### Thesis
AI rendering tools now produce photorealistic interior and exterior images for $0.04 each. 71% of homeowners use AI for home projects. But designers report a growing problem: clients arrive with AI-generated images that look finished but violate physics, building codes, and material behavior. The gap between what AI can render and what can actually be built is creating a new category of design rework — and it's costing homeowners money they don't realize they're spending.

### Kill Test
Does this help someone building or buying a home? YES — homeowners using AI design tools need to understand the buildability gap before they anchor to an unbuildable image. Architects and designers need language for the conversation. Builders need to understand why clients arrive with impossible expectations.

### Primary Sources

**1. TBBW Magazine (May 5, 2026) — "AI interior images look real. But can they be built?"**
- Johanna G. Seldes, lead designer at IDC/Interior Design Consulting, Tampa
- "People bring in images that look finished. But once you start looking at them, you realize they don't account for how a space actually functions."
- Common example: AI images show open fireplaces placed directly below shelving or near mounted TVs — violates heat clearance codes (IRC R1003.18: minimum 12" clearance for combustibles)
- "You can create something that looks incredible. But it may not follow code, it may not handle heat correctly, and it may not work in the space."
- Key insight: AI "does not apply constraints or account for code requirements, material behavior or long-term use"
- Clients increasingly bringing AI-generated references rather than magazine tear-sheets
- Source: https://tbbwmag.com/2026/05/05/ai-interior-design-images/

**2. Acorn Finance 2026 State of AI & Homeownership Report**
- Survey of 1,000 U.S. homeowners
- 71% of homeowners now use or plan to use AI for home-related questions, planning, or projects
- 46% engage with AI every day (especially Gen Z and Millennials)
- 52% say AI gave them ideas they hadn't considered and made them feel more confident starting their project
- 78% have made a purchase based on AI recommendations
- 62% use AI to compare prices, materials, or vendors (top use case)
- 99% of current AI users plan to continue using AI for future home projects
- Source: https://www.acornfinance.com/contractor-resources/state-of-ai-and-homeownership-report-2026/

**3. Fenestra — AI Rendering Cost Data (2026)**
- AI rendering (Fenestra): ~$0.04 per image on Pro plan ($35/mo for ~1,000 renders)
- vs. High-End Visualization Studio: $2,000-$8,000+ per image, 1-3 week turnaround
- vs. Mid-Tier Studio: $800-$2,500, 5-10 days
- vs. Freelancer: $300-$1,200, 3-7 days
- AI renders generate in seconds with unlimited revisions
- This 50,000x price collapse is creating a flood of images with no quality/buildability filter
- Source: https://fenestra.app (2026 pricing guide)

**4. Lara et al. (ACL 2026) — "Generative Floor Plan Design with LLMs via Reinforcement Learning with Verifiable Rewards"**
- arXiv:2605.14117, accepted to Findings of ACL 2026
- Trained LLM on real floor plans + RLVR to enforce numerical constraints
- Achieved 94% relative reduction in Compatibility errors vs. existing methods
- BUT explicit limitation: "Generated floor plans may fail to satisfy building codes, accessibility requirements, structural constraints, or domain-specific best practices"
- GPT-4o, OpenAI o3, QwQ-32B all fail with few-shot prompting — "typical failures included non-closed polygons, self-intersections, duplicated or missing rooms, violations of bubble diagram connectivity"
- Recommend "human-in-the-loop use with clear disclaimers that outputs are not certified designs"
- Even the best AI floor plan generator can't guarantee buildability
- Source: https://arxiv.org/abs/2605.14117

**5. PlanRadar (2025) / Mahamid (2024) — Construction Rework Cost Data**
- Rework accounts for 1-20% of total project cost, most studies cluster at 4-10%
- Residential-specific: 4.95% (Liu et al. 2018), 5-10% (Mahamid 2024)
- CII (Construction Industry Institute) range: 2-20%
- PlanRadar 2023 study: 7.9%
- On median $20,000 renovation (Houzz 2026 study): that's $990-$2,000 in rework
- Source: https://www.planradar.com/cost-of-rework-in-construction/

**6. 2026 U.S. Houzz & Home Study**
- 54% of U.S. homeowners undertook renovation projects in 2025
- Median renovation spend: $20,000 in 2025 (held steady from 2024)
- Top 10% projects reached $150,000+ (up from $140,000)
- 50% planning renovations in 2026 (down from 52%)
- Intended median spend declining to $15,000 for 2026
- 42% of construction pros and 48% of design pros adopting/upgrading AI technologies
- Source: Houzz Inc., reported by Woodworking Network and TileLetter

**7. William J. Cohen, AIA — LinkedIn (2026)**
- Architect, Cohen Design/Build Architects, Massapequa, NY
- "AI can generate a floor plan. AI can render a beautiful exterior. AI can make your project look 'done.' But here's the truth nobody's saying out loud: That's the easiest 15% of the process."
- The other 85%: zoning, buildability, coordinating MEP, navigating permits, managing budget
- "AI doesn't navigate people. AI doesn't fight through the system. AI doesn't take responsibility."
- Source: LinkedIn post, 2026

**8. Guo et al. (ANZAScA 2025) — AI Floor Plan Daylight Evaluation**
- cGAN predicts daylight distribution maps in 0.5 seconds (90% faster than Honeybee physics simulation)
- SSIM = 0.93 (high visual fidelity)
- BUT CNN classifies functional layout rationality with only 82.28% accuracy
- ~18% of AI-generated floor plans have functional layout problems that the AI itself can't catch
- Source: https://doi.org/10.65388/CXAM4196

### Original Contribution
Cost calculation of the "AI rendering gap" — what it actually costs when a homeowner arrives with an unbuildable AI-generated design:
1. AI rendering: $0.04 (Fenestra) to $29/month (consumer tools like RoomGPT, Interior AI)
2. Architect/designer time to explain why it can't be built and translate client intent: 3-6 hours at $150-250/hr = $450-$1,500
3. Design revision to achieve the aesthetic within code/physics: $500-$2,000 additional
4. If unbuildable elements survive into construction (because nobody caught them): rework at 5-10% of project cost
5. On a $20,000 median renovation: the gap between the $0.04 rendering and reality is $950-$3,500 in additional costs

The irony: the 4-cent image costs more to un-render than a $2,000 professional rendering that was buildable from the start.

### Strongest Counterargument
AI renderings expand creative exploration and help clients articulate preferences they couldn't verbalize before. 52% of homeowners say AI gave them ideas they hadn't considered (Acorn Finance). The images are reference material, not construction documents, and experienced designers can translate intent into buildable plans. The "gap" is just a new version of the old magazine tear-sheet problem — clients have always brought unbuildable inspiration.

### Limitations
- No systematic study specifically measuring the cost of AI-rendering-driven rework vs. other rework causes
- Designer anecdotes (TBBW) are from a small sample, not a controlled survey
- The $950-$3,500 cost estimate is a novel calculation combining data from different sources (Fenestra pricing, Houzz median spend, PlanRadar rework %) — it hasn't been independently validated
- Consumer AI tools vary enormously in output quality; some (like Havenly) pair AI with human designers
- The problem may self-correct as AI tools incorporate physics and code constraints

### Category: Architecture & Design
### Word count target: 600-800
