# Research: AI Floor Plan Tools and the Cost of the Exploration Phase

## Angle
Your architect charges $110–$200/hour. You spend the first 40–80 hours figuring out what you actually want — moving walls, resizing rooms, debating the kitchen layout. That exploration phase typically runs $4,000–$12,000 before a single construction document gets drawn. Three academic papers published in 2026 show that AI can now generate dimensionally accurate floor plans from text descriptions, edit them conversationally, and predict daylight performance in half a second. One commercial tool charges $20/month. The 70–75% of exploration work it claims to handle is the most expensive per-insight hour an architect bills.

## Kill Test
Does this help someone building or buying a home? **YES.** Anyone about to hire an architect for a custom home or major remodel pays thousands for the exploration phase. Knowing that $20/month tools can now handle dimensionally constrained layout generation — and what they still can't do — is directly actionable.

## Primary Sources

### 1. Academic: Generative Floor Plan Design with LLMs (Lara et al., 2026)
- **Paper:** arXiv:2605.14117, Accepted to ACL 2026 (Findings)
- **Institution:** Mila – Quebec AI Institute, Université de Montréal, Polytechnique Montréal
- **Key findings:**
  - LLM fine-tuned on real floor plans + RLVR achieves 94% relative reduction in constraint violations vs. existing methods
  - Respects user-defined room connectivity AND numerical constraints (dimensions, areas)
  - Text-based input: describe what you want in plain language
  - Outperforms existing methods on Realism, Compatibility, and Diversity metrics
- **Limitation:** Academic model, not a shipped product. Trained on a specific dataset.

### 2. Academic: HouseMind (Qin et al., 2026)
- **Paper:** arXiv:2603.11640, Accepted to CVPR 2026
- **Key findings:**
  - Locally deployable multimodal LLM
  - Unifies floor plan understanding, generation, AND editing in one framework
  - Uses VQ-VAE to discretize layouts into room-instance tokens
  - Bridges symbolic reasoning and continuous geometry
  - "Efficient and locally deployable" — doesn't need cloud GPU
- **Significance:** First model that can understand an existing plan, generate new ones, AND edit parts of a plan within a single architecture

### 3. Academic: cGAN Daylight Evaluation (Guo et al., 2025)
- **Paper:** ANZAScA Conference, Guo/Chen/Wang/Zheng
- **Key findings:**
  - cGAN generates daylight distribution maps in 0.5 seconds per floor plan
  - 90% faster than traditional Honeybee/Radiance simulation
  - Structural Similarity Index (SSIM) = 0.93 vs. ground-truth
  - Fréchet Inception Distance = 25.56 (good visual fidelity)
  - CNN classifies functional layout rationality with 82.28% accuracy
- **Significance:** Daylight analysis — typically a $1,000–$5,000 architect add-on — can now be instant

### 4. Commercial: Maket.ai
- **Pricing:** Free (50 credits), $20/month Pro (300 credits)
- **Capabilities:** Text-to-floor-plan, agentic editing ("make the kitchen bigger"), 3D visualization, DXF/PDF export
- **CEO quote (Patrick Murphy):** "It really does 70 to 75 percent of the work. And then you get to a point where you meet an architect and you save a fair amount of time and money within the process."
- **The remaining 25–30%:** Structural review, code compliance, engineering still require a professional
- **Competitors:** Snaptrude (BIM), TestFit (multifamily), ARK ($180/mo, code compliance), ARCHITEChTURES ($49/mo)

### 5. Architect Fee Data
- **Hourly rates:** $110–$200 commonly, up to $315 for principals (Houzz); $50–$150 national average (Thumbtack); $100–$250 (Golden State DE)
- **Project fees:** 10–15% of construction cost for full services; 6% for basic plans
- **National average project cost:** $3,983 (Thumbtack)
- **Add-on costs:** 3D renderings $500–$3,000, sustainable/green consulting $1,000–$5,000, additional revisions $100–$250/hr (Angi)
- **Retainer to start:** $2,500–$4,000 typical

## Novel Contribution
Calculate the cost of the exploration phase specifically. If schematic design is ~15% of total architect hours, and total fees for a $500K house at 12% = $60K, schematic design = ~$9,000. The Mila paper's 94% constraint-adherence figure means the AI isn't just faster — it's generating plans that would survive the first client review, which is where most exploration-phase hours get burned.

Cross-reference: At Maket's $20/month, a homeowner could spend 6 months in exploration mode for $120 total before engaging an architect. The question is whether those 6 months of AI exploration actually produce better briefs for the architect, or just create false confidence.

## Strongest Counterargument
AI floor plan tools optimize for stated constraints. An architect optimizes for unstated ones. The homeowner who says "I want an open kitchen" doesn't know they also need the kitchen to face northeast to avoid afternoon glare on a 3-acre lot in Phoenix. The cGAN daylight tool is 90% faster but it runs AFTER the plan exists — it doesn't inform the generative process. HouseMind doesn't know your site. The 70–75% figure from Maket's CEO is self-reported by the vendor selling the tool.

## Journalist
Elena Vasquez — Architecture & Design. Elegant, precise, skeptical of tools that flatten design into optimization. This is her territory: the tension between efficiency and the irreducible human judgment in spatial design.

## Category
design
