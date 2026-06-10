# Research: AI Structural Engineering for Residential Construction

## Topic
AI-powered structural engineering tools are emerging that can generate physics-validated, code-compliant structural designs for residential homes in hours instead of weeks. This represents a significant shift in one of the most time-consuming bottlenecks in residential construction.

## Kill Test
Does this help someone building or buying a home? **YES.** Structural engineering is a required step for virtually all new residential construction and major renovations. It costs $2,000-$10,000 for a single-family home, takes 2-6+ weeks, and creates schedule dead time that burns carrying costs. AI tools that compress this to hours at $99/month directly affect project timelines, budgets, and feasibility — especially for smaller builders who can't afford engineering firm retainers.

## Key Sources

### Source 1: Genia AI (genia.design)
- Founded in LA by Robin Li (ex-Arup structural engineer) and Zhihao Zhao (ex-Amazon AI engineer), plus Houtao Wang and Peter Dai
- $3M seed funding led by Pi Labs; investors include Amplify, Boost VC, Dorm Room Fund, Suffolk Technologies, Scale AI execs
- Yale Ventures backed
- **Claims:** 10x faster structural design, up to 20% material savings, physics-validated
- **How it works:** Upload architectural drawings (PDF, CAD, BIM) → AI parses walls/windows/doors → generates 100s of structural layout options → validates via building code calculations → outputs 3-5 optimized designs with material take-offs → export permit-ready structural drawings
- **Pricing:** Free ($0, 100 one-time credits), Professional ($99/mo, 500 credits), Team ($299/mo, 2,000 credits), Enterprise (custom)
- **Partners:** Simpson Strong-Tie, Weyerhaeuser (ForteWeb), Saint-Gobain, Suffolk Construction, NVIDIA, PulteGroup, CEMEX, Best West Engineering
- **Trusted by 200+ structural firms**
- **Customer quotes:**
  - "By using Genia, I'm able to produce permit-ready structural drawings in just a couple hours." — Aaron C., PE, Principal Engineer
  - "We use Genia to help one developer client cut 15% material spending on structure without sacrificing performance." — Mehdi E., PE
  - "Genia helps us stress test the impact to existing structure in a retrofit project." — Murat Melek, SE, Director, Suffolk Construction
- **Key data from VentureBeat:** Planning permissions rejected as often as 40% of the time due to human error. A 20-story tower requires 15+ engineers, 18 months, 750,000 manual calculations. 
- **Suffolk Construction deal:** Adaptive reuse projects (schools/warehouses → residential), validating structural integrity for repurposing

### Source 2: Traditional Structural Engineering Costs (HomeAdvisor/Angi 2025-2026)
- New home build plans: $2,000–$10,000 (HomeAdvisor)
- Per project: $2,000–$8,500 (Angi)
- Per hour: $70–$250 (avg ~$150/hr)
- Per square foot: $2–$10
- As % of construction budget: 1–5% (new), 7–10% (renovation)
- Inspection only: $350–$800
- Average structural inspection: $555

### Source 3: BLS Workforce Data (2024)
- Civil engineers in US: 368,900 (2024)
- Projected growth: 5% (2024-2034), faster than average
- ~23,600 openings per year (many from retirement)
- Median pay: $99,590/year
- Architecture & engineering median: $97,310
- Brookings (2023): 17 million infrastructure workers projected to leave in next decade

### Source 4: ALLPLAN Steel Genie (April 2026)
- AI-powered estimating for structural steel
- Automates steel takeoffs from structural drawings
- Detects beams, columns, joists, braces
- Uses AISC Design Guide for connections
- "Steel estimating has long been a manual, time-intensive process" — Sunil Pandita, CEO

### Source 5: Cornell AR3-Lumber Project
- AI-powered reprocessing, regrading, and recertification of salvage lumber
- Develops scalable AI-driven system for visual grading and reuse of reclaimed lumber
- Bridges circular economy and structural applications
- Uses computer vision for defect detection and structural grading

### Source 6: CMU AI Truss Design Research
- AI agents trained on human design progressions for truss problems
- On average, AI agents performed better than humans
- "It's tempting to think that this AI will replace engineers, but that's simply not true" — Prof. McComb
- AI agents used vision-based strategy techniques without specific optimization goals

### Source 7: Multi-Agent LLM Framework (Academic, ScienceDirect)
- Multi-agent LLM system for code-compliant automated structural design
- Uses DeepSeek-V3 as foundation model
- ACI 318-19 code compliance
- Addresses hallucination through rule-based checks
- GUI for human-robot interaction in design process

## Angle
Frank DeLuca (Project Management) — Frame this as a schedule bottleneck story. Structural engineering is dead time on every residential project. A PM waits weeks for structural drawings while carrying costs burn. AI tools like Genia compress that to hours. The story examines whether the output is trustworthy, what a PE stamp means when AI does the calculations, and where the technology falls short.

## Original Contribution
Calculate the carrying cost of structural engineering wait time. If a builder has $500K tied up in a project and waits 6 weeks for structural drawings, at current rates (~7-8% construction financing), that's roughly $4,000-$5,000 in dead carrying costs alone, ON TOP of the $5,000-$10,000 engineering fee. Total cost of the structural bottleneck: $9,000-$15,000 per single-family project. AI compression from 6 weeks to 2 hours eliminates most of that carrying cost.

## Skepticism Angles
1. **PE stamp requirement:** In all 50 states, structural plans must be reviewed and stamped by a licensed Professional Engineer. AI can't stamp plans. This limits AI to being an assistant, not a replacement — the PE still reviews and takes liability.
2. **Code compliance verification:** Building codes vary by jurisdiction. Can AI reliably navigate the patchwork of IBC, IRC, and local amendments?
3. **Liability:** When AI generates a design that a PE stamps and a beam fails, who's liable? The PE, the AI company, or the builder?
4. **Complex sites:** Standard rectangular homes on flat lots are easy. Hillside lots, seismic zones, unusual geometries, and older structures with unknown conditions are where human judgment matters most.
5. **200+ firms is tiny** — there are an estimated 100,000+ structural engineering firms in the US. Adoption is early.
