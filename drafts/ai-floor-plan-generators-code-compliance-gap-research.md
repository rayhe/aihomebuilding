# Research: AI Floor Plan Generators vs. Building Code Reality

## Angle
AI floor plan generators (Maket, Snaptrude, ARCHITEChTURES, Planner 5D, etc.) promise homeowners custom home designs for $29/month vs. $15K-$75K for an architect. But the outputs face a buildability gap — they generate plans that look great in renders but routinely violate building codes when submitted for permits. We test the claim vs. the reality.

## Kill Test
Does this help someone building or buying a home? YES — homeowners are increasingly tempted to skip architects and use AI tools. They need to understand what these tools can and can't do before spending months on a plan that won't pass plan check.

## Journalist
Elena Vasquez — Architecture & Design. She sees buildings as art first, technology second. Skeptical of tools that flatten design into optimization.

## Key Sources

### 1. CorbuAI Academic Paper (MDPI Buildings, March 2026)
- Source: https://www.mdpi.com/2075-5309/16/3/668
- Multimodal AI framework using Pix2pix-GAN + Stable Diffusion
- Spatial allocation accuracy: 0.88/1.0
- Facade consistency (pHash): 0.82
- **Critical finding:** "The system still occasionally produces non-standard wall thicknesses" and "AI-generated facades can occasionally disconnect from the internal zoning logic when faced with complex boundary conditions"
- Requires "human-in-the-loop adjustments"
- Only validated for standardized residential modules, not irregular/complex layouts

### 2. Maket.ai — CEO's Own Limitations Admission
- Source: https://www.maket.ai/post/exploring-the-limits-of-generative-ai-in-home-renovation
- CEO Patrick Murphy: "Generative AI is only as good as the data it's been trained on"
- "Lack of contextual understanding... can't consider important factors like personal preferences, the specific environment, or local culture"
- "Right now, generative AI systems can only handle basic tasks"
- Zoning compliance feature exists but reliability undocumented

### 3. Architect Fees vs. AI Tool Costs
- Angi/HomeAdvisor 2025: Architect fees = 5-15% of construction cost
- For a $500K custom home: $25K-$75K in architect fees
- AI tools: Maket $29/mo, Planner 5D free tier, ARCHITEChTURES free tier
- The cost gap creates an irresistible temptation for budget-conscious homeowners

### 4. TestFit / Higharc — Builder-Focused, Not Homeowner
- TestFit: Generative design for site planning, focused on production builders, 3200+ deals/week
- Higharc: $53M Series B (2024), backed by Home Depot Ventures, Spark Capital, Schneider Electric
- Key distinction: These tools serve professional builders, not individual homeowners
- Higharc quote (Jamin Kimmell): "we can produce 2-3 times more alternative models on a fixed budget"

### 5. Archistar/Multi-AR — Permit Automation
- Source: https://www.archistar.ai/blog/ai-building-permit-automation/
- Canada needs 430K-480K new units/year (CMHC), double current pace
- Multi-AR: AI building permit automation for multi-residential
- Arno Matis (AMA+U): "The municipalities just haven't kept up"
- Key: This automates REVIEW, not GENERATION — different problem

### 6. UCLA Housing Study
- Cutting approval times 25% could boost housing production 33%
- Source: UCLA Anderson (2024)

### 7. Building Code Specific Issues AI Misses
- Egress windows in bedrooms (IRC R310): min 5.7 sq ft opening, max 44" sill height
- Staircase width minimums (IRC R311.7): 36" clear width
- Ceiling heights (IRC R305): 7' minimum habitable rooms
- Bathroom ventilation (IRC R303.3): mechanical or window
- Hallway width (IRC R311.6): 36" minimum
- Fire separation between garage and living space (IRC R302.6)
- These are binary pass/fail — AI can't "approximate" them

### 8. Indian Context (Medium Articles)
- AI-generated designs fail to account for soil variability, setback mandates, local material availability
- "When homeowners attempt to use AI-generated layouts without verifying regulatory compliance, they may face delays during plan approval"
- Design may "exceed permissible height limits, lack required open spaces, or fail to include mandated services"

## Novel Contribution
Nobody has quantified the gap between AI floor plan generator marketing claims and actual building code compliance. The CorbuAI paper is the closest (0.88 accuracy) but that's for standardized Chinese residential modules — not custom American single-family homes with IRC/IBC requirements. We can build the first honest comparison matrix.

## Structure
1. Cold open: A homeowner who spent 3 months with an AI tool, then watched their plan get rejected at plan check
2. The cost temptation ($29/mo vs. $50K architect)
3. What AI tools actually output vs. what a building department requires
4. The specific code violations AI routinely generates (with IRC references)
5. The academic evidence (CorbuAI 0.88 accuracy — but that's the BEST case)
6. Where these tools ARE useful (early concept exploration, not construction documents)
7. The honest verdict: What they save, what they cost you

## Strongest Counterargument
"AI tools are improving rapidly — Higharc raised $53M, Archistar is automating permit review. The gap will close." Response: Maybe, but today's homeowners are making decisions with today's tools, and the marketing doesn't match the reality.
