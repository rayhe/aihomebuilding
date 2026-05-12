# Research Notes: AI Scheduling Tools and the Data Quality Problem

## Angle
88% of construction schedules fail quality benchmarks (SmartPM 2025). AI scheduling vendors promise 17-40% timeline savings. Nobody's asking: what happens when you optimize a broken schedule?

## Journalist
Frank "The Foreman" DeLuca — project management, operations, process. World-weary, seen every fad. Perfect for "the tool isn't the problem, the data is."

## Kill Test
Does this help someone building or buying a home? YES. If you're a GC considering AI scheduling software ($$$), you need to know whether your data is even ready to feed it. Actionable: fix your schedule data BEFORE buying AI tools, or you're automating your own dysfunction.

## Primary Sources

### 1. SmartPM 2025 State of Construction Scheduling Report
- 88% of baseline schedules fail quality benchmarks
- Only 12% meet best-practice quality standards
- 63% of construction professionals lack proper understanding of schedule quality
- Only 4% of companies have dedicated project controls teams
- 35% of companies lack qualified scheduling staff
- 75% of executives rely on schedules for high-level decisions despite terrible quality
- Over 70% of projects underperform against original plans
- Source: SmartPM/GlobeNewsWire press release, March 2025; Construction Owners Association coverage; Plan Academy analysis

### 2. ALICE Technologies + McKinsey Partnership
- McKinsey formalized alliance with ALICE Technologies for generative AI scheduling
- Client results: highway project timeline reduced by 28 days; data center project schedule reduced by 40%
- ALICE Insights Agent: claims up to 17% savings on project durations, 50% reduction in manual effort
- Clients include Suffolk Construction, Zachry Construction
- ALICE uses parametric algorithms + 3D BIM models, not LLMs
- Pricing: enterprise (not disclosed publicly)
- Source: Construction Briefing, Bisnow, ForConstructionPros, ALICE blog

### 3. Industry Delay/Overrun Statistics
- 98% of construction projects face cost overruns or delays (Bridgit 2026)
- Average delays are 37% longer than planned (Bridgit)
- Only 8.5% of megaprojects meet cost AND schedule targets (McKinsey "iron law of megaprojects")
- 98% of megaprojects exceed budgets, costing $1.6 trillion annually globally (Oxford/biCanvas)
- $1.4 trillion annual problem with construction project delays (industry consensus)
- 67% of construction projects run over budget (biCanvas 2026)
- Source: Bridgit, McKinsey, Oxford studies

### 4. nPlan (AI Schedule Prediction)
- Raised $16M Series B (CapHorn, Chevron, Google Ventures)
- Uses ML + historical data to predict and prevent delays
- Claims to have saved customers over $1.2 billion
- Approach: predictive (forecast delays) vs ALICE's generative (optimize schedules)
- Source: Digital Construction Plus

### 5. Data Standardization Problem
- Construction Dive: lack of standardized data creating silos that trap insights
- Active governance needed to unify systems and define structured data standards
- CMIC: AI forecasting requires a "unified data core" for reliable predictions
- Only 4% have dedicated project controls = almost nobody maintaining schedule data quality
- Source: Construction Dive, CMIC Global

### 6. Rider Levett Bucknall Analysis
- AI scheduling offers efficiency but requires careful application
- AI lacks human experience and must be reviewed for accuracy
- Effective use = strategic tool, not replacement for professional judgment
- Source: RLB.com

## Original Contribution (Novel Analysis)
**The 88% × 17% paradox:** If 88% of schedules fail quality benchmarks, and ALICE claims 17% duration savings, what are you optimizing? 

Calculate: On a 12-month residential project, 17% savings = ~2 months. But if the baseline schedule is garbage (wrong logic ties, missing constraints, unrealistic durations), the AI is finding the optimal path through a fantasy. You could "save" 2 months on paper and still finish 4 months late because the schedule never reflected reality.

**The $50K savings claim vs the data quality problem:** Ryan McCain (Medium, March 2026) claims $50,000 savings per $2M project (7x-14x ROI year one) from AI scheduling. But that ROI assumes the input schedule was directionally correct. If 88% aren't, the ROI calculation is built on sand.

**The 4% problem:** Only 4% of companies have dedicated project controls teams. These are the people who would maintain schedule data quality. So 96% of companies buying AI scheduling tools have nobody ensuring the input data is clean. That's like buying a GPS for a car with no windshield.

## Strongest Counterargument
ALICE and nPlan would argue their tools IMPROVE data quality by forcing structure. ALICE requires BIM integration, which imposes discipline. The counterargument is that the tool itself fixes the garbage data problem by making you build better schedules to feed it. Some truth to this — the discipline of setup is real.

## Limitations
- SmartPM has a commercial interest in reporting bad schedule quality (they sell schedule analytics)
- ALICE's savings claims are self-reported; no independent audit found
- The 88% figure is across all project types, not residential-specific
- nPlan's $1.2B savings claim methodology is not publicly documented
- We couldn't access the full SmartPM report (behind registration wall)

## Slug
`ai-scheduling-garbage-data`
