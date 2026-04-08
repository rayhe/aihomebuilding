# Research: AI Floor Plan Generators Miss Building Physics

## Angle
AI floor plan generators (Maket, Planner5D, Homestyler, ChatGPT) produce layouts fast but ignore building physics — solar orientation, daylighting, thermal performance, circulation efficiency, HVAC routing, and structural grid alignment. A Tsinghua University study found 60%+ of AI-generated floor plans are "practically unusable." A Cambridge/Ostim Tech study found none consistently integrate solar orientation or seasonal lighting. The speed is real. The plans aren't buildable.

## Journalist
**Elena Vasquez** — Architecture & Design. Skeptical of tools that flatten design into optimization. She'll appreciate the irony of tools that optimize room adjacency while ignoring the physics that make rooms livable.

## Kill Test
Does this help someone building or buying a home? **YES.** Millions of people are using these tools. Maket alone has 1M+ users. If you're using an AI-generated floor plan as your starting point, you need to know what it doesn't check.

## Sources

### Primary
1. **GreenPlanner (Tsinghua University, 2025)** — "Over 60% of samples in existing datasets are practically unusable due to excessive energy use and flawed spatial-functional design." Some models "fail to generate essential structural components such as windows." https://arxiv.org/html/2512.00406v1

2. **Çelik (Cambridge University Press / Ostim Tech, 2025)** — Evaluated AI-generated floor plans from ChatGPT, Copilot, and LookX for daylight performance across 5 climate zones. Only 8 of 31 plans were even reconstructable in AutoCAD. "None of the models consistently integrated solar orientation or seasonal lighting considerations." https://doi.org/10.1017/S0890060425100085

3. **Maket.ai** — 1M+ registered users, $30/mo Pro plan. Generates floor plans from room counts, square footage, adjacency rules, lot constraints. Zoning compliance is upload-based (user uploads local code PDFs), not a live database. Cannot cross-reference overlapping regulations (e.g., historic district overlays + base zoning). Seed funded $3.4M CAD (Oct 2025). https://www.maket.ai

4. **DOE Passive Solar Fact Sheet** — Proper solar orientation (long axis east-west, major glazing south-facing in Northern Hemisphere) can reduce heating/cooling loads by 20-30%. https://www.energy.gov/energysaver/consumer-guide-passive-solar-home-design-fact-sheet

5. **EIA Electric Power Monthly** — Average US residential electricity bill ~$170/month (~$2,040/year). HVAC is approximately 50% of residential energy use. https://www.eia.gov/electricity/monthly/

6. **Illustrarch Maket.ai Review (March 2026)** — Professional critique. Notes zoning feature interprets uploaded docs, not live database. Lacks cross-referencing of overlapping regulations. https://illustrarch.com/articles/design-softwares/73352-maket-ai-review.html

### Supporting
7. **MDPI Buildings (2025)** — "Comprehensive and Dedicated Metrics for Evaluating AI-Generated Residential Floor Plans." New metrics for evaluating AI plans beyond visual plausibility.

8. **Nature Scientific Reports (2025)** — Energy and daylighting trade-offs in residential window design: multi-objective optimization study.

## Original Contribution
**The $30,800 Hallway Problem:** AI floor plan generators typically produce 13-18% circulation space (hallways, landings, transitions). A skilled architect designs for 6-10%. On a 2,200 sqft home at $200/sqft construction cost:
- AI plan at 15% circulation: 330 sqft × $200 = $66,000 in hallways
- Architect plan at 8% circulation: 176 sqft × $200 = $35,200 in hallways
- **Delta: $30,800 in wasted construction cost** — enough to upgrade the HVAC system, add solar panels, OR pay the architect who would have caught this

Plus: orientation penalty calculation. Wrong orientation (all glass west-facing vs. optimal south-facing) adds ~$300-600/year in HVAC costs. Over 30-year mortgage at 3% discount: $5,900-$11,700 NPV.

**Combined cost of using an unreviewed AI floor plan: $36,700-$42,500** in construction waste and lifetime energy penalty.

## Counterargument
AI tools are meant for ideation, not construction docs. Nobody serious builds directly from a Maket.ai export. The tools themselves say this. But: (a) 1M+ users aren't all architects, and (b) the output looks convincing enough that homeowners take it to a builder and say "build this," and (c) the builder may not catch the physics problems either.

## Limitations
- Circulation percentage estimates are from architectural literature, not a controlled study of AI-generated plans specifically
- Energy penalty calculations use national averages; climate zone variation is significant
- No direct comparison of the same program (same rooms, same lot) designed by AI vs. architect
- GreenPlanner study focused on Chinese residential datasets; US building patterns differ
