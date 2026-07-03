# Research: AI Schedule Self-Healing — The Gap Between Knowing and Fixing

## Journalist: Frank "The Foreman" DeLuca
## Beat: Project Management & Operations
## Category: Construction Technology / Project Management

## Angle
The disconnect between risk detection and schedule adjustment in construction. Your risk register shows three red flags. Your P6 schedule still says you're on track. The schedule is always the last thing to change — and by the time someone manually updates it, the delay has cascaded. AI tools are starting to close this gap, but a new peer-reviewed systematic review of 60 studies confirms the systems are still mostly siloed. The tools to detect (Buildots) and the tools to reschedule (ALICE) exist separately — connecting them is the frontier.

## Kill Test
Does this help someone building or buying a home? YES. A GC running a $500K–$3M residential project loses $300–$800/day in carrying costs alone when the schedule slips. Understanding which AI tools can actually compress that gap — and which can't — is directly actionable.

## Primary Sources

### 1. UEL Systematic Review (Qureshi, 2026)
- **Source:** Dr. Jawed Qureshi, University of East London. Published in *Frontiers in Built Environment* (2026). DOI: 10.3389/fbuil.2025.1741095
- **Method:** Systematic review of 60 peer-reviewed studies on AI in construction management
- **Key finding:** Risk prediction systems and schedule optimization systems operate in isolation. "Projects generate enormous amounts of warning data every day — safety alerts, design clashes, supply delays and contractual risks — but nothing in the schedule actually changes when these signals appear."
- **Framework:** Proposes connecting risk warnings to immediate, machine-readable planning decisions. No single tool does this yet.

### 2. BIM+AI Dynamic Schedule Management (MDPI Buildings, 2026)
- **Source:** Published in *Buildings* journal (MDPI), 2026. DOI: 10.3390/buildings15142451
- **Case study:** Water conveyance tunnel project in China (large-scale, multi-stakeholder)
- **Three-engine architecture:** Task Engine + 4-in-1 Network Diagram Engine + Blueprint Engine
- **Results:**
  - AI-driven early warnings reduced cascading delays by 63%
  - Material delay alerts prompted 3-hour acceleration in resource adjustments
  - Real-time synchronization shortened schedule adjustment time by 50%
  - 78% of AI-generated resource reallocation recommendations were implemented, preventing a potential 14-day delay
  - Workflow efficiency enhanced by 35%, processing times reduced from 48h to 31h average
  - Task conversion errors reduced by 88% (audited across 500+ tasks)
- **Limitation:** Tested on infrastructure, not residential. Mobile response times up to 8s in weak signal areas.

### 3. ALICE Technologies — Generative Scheduling
- **Source:** ALICE Technologies (Menlo Park, CA). Founded 2015. McKinsey partnership announced 2025/2026.
- **What it does:** "Construction optioneering" — imports Oracle P6 schedules or BIM models, simulates millions of execution paths, identifies optimal scheduling under constraints (labor, equipment, materials, space, sequence).
- **Results (company claims):** 17% reduction in project duration, 14% in labor costs, 12% in equipment costs
- **Case study:** Zachry Construction reduced a highway project timeline by 28 days
- **P6 integration (ALICE Core):** No BIM required — works directly from Primavera P6 schedules. Two-step: assess (digest XCR file, label variables) → recover (AI re-sequences to meet cost/time constraints)
- **Pricing:** Not publicly listed; enterprise. Likely $5K-15K/month for mid-size projects based on comparable tools.

### 4. Buildots — Visual Progress Detection
- **Source:** Buildots press release, July 2, 2026. Just launched superstructure tracking.
- **What it does:** 360° cameras → AI compares actual progress against BIM schedule → predictive analytics surface risks
- **Key quote (CEO Roy Danon):** "Catching structural delays weeks earlier, before they cascade into subsequent activities, and having the data to replan while recovery is still on the table."
- **Gap:** Buildots detects delays. It does NOT automatically reschedule. The replan step is still manual.

### 5. Industry Statistics
- **85% of large construction projects experience schedule overruns** (cited in MDPI Buildings paper, ref [6])
- **AI in construction market:** $2.28B (2025) → $3.02B (2026, +32.8% CAGR) → $9.48B by 2030. Predictive scheduling is a "predominant trend." (ResearchAndMarkets, June 30, 2026)
- **SVM models predict residential delay causes with 85% accuracy** (Akhmedov & Khairova, 2023)
- **PMI data (2026):** Only 20% of PMs have extensive/good AI experience; 49% have little to none. High AI adopters: schedule performance 85% vs. 46% for low adopters. Same tools — different practitioners — very different results.

### 6. Cost of Delay — Residential
- **NAHB/HBI (Oct 2025):** Skilled labor shortage costs $10.8B/year — $2.66B in carrying costs, $8.14B in lost production (19,000 homes)
- **Construction loan rates (NAHB, Q4 2025):** 7.47% for speculative single-family, 7.16% for pre-sold. Average effective rates: 10.64% (spec) and 11.01% (pre-sold) when including points.
- **My calculation — daily carrying cost:**
  - Median new home price (2025): ~$420,000
  - Construction loan at 7.47%: ~$31,374/year interest = ~$86/day on the loan alone
  - Add insurance, taxes on land, equipment rental, crew standby: realistic carrying cost ~$300-500/day for a $400K residential project
  - A 30-day delay = $9,000-$15,000 in carrying costs. On a 6% margin project ($24,000 profit), that's 37-62% of your profit gone.

### 7. The Silo Problem (Original Analysis)
Detection tools: Buildots, OpenSpace, Disperse, Doxel — they see what's happening
Scheduling tools: ALICE, Oracle P6, Microsoft Project, Procore — they plan what should happen
The link between them: mostly human. A PM looks at the deviation report, opens P6, manually re-sequences. Takes hours to days. By then, the cascade has started.

Only the MDPI Blueprint Engine study shows an automated closed loop, and that's on infrastructure, not residential. No commercial product does end-to-end detect-to-reschedule for residential builders. This is the gap.

## Strongest Counterargument
Residential projects are too small and too variable for AI scheduling to pencil out. A $400K custom home has 200-400 tasks; a highway has 5,000+. The complexity that justifies AI tools lives at infrastructure scale. At residential scale, a good superintendent with a whiteboard and a phone is faster than any software — because the bottleneck isn't computation, it's phone calls and relationships. When your framer no-shows, you don't need an algorithm. You need Steve's number.

## Limitations
- ALICE's 17%/14%/12% claims are company-published, not independently verified
- UEL review is a framework proposal, not a tested system
- MDPI case study is infrastructure (tunnel), not residential — results may not transfer
- No head-to-head comparison of AI scheduling tools exists in peer-reviewed literature
- Construction loan carrying cost calculation uses median figures; actual costs vary by market, project size, and loan terms
- PMI high-adopter statistics measure correlation, not causation — better PMs may adopt AI more AND manage schedules better independently
