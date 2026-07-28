# Research Notes: Plan Review Workforce Crisis × AI Adoption Gap

## Angle
The building code officials who review your residential plans are retiring in droves. AI plan review tools exist that can do the first pass in 10 minutes. Building departments aren't buying them. The result: your ADU permit sits in queue for 14 weeks while the reviewer who'd approve it is two years from retirement with no replacement in sight.

## Journalist
Catherine "Code" Chen — Policy & Regulation

## Kill Test
Does this help someone building or buying a home? YES. If you're submitting plans to a building department, you need to know: (1) how bad the review backlog actually is and why, (2) whether AI pre-submission tools can help you get cleaner plans through faster, and (3) why the government bottleneck is structural, not temporary.

## Primary Sources

### 1. Workforce Crisis Data (ICC/NIBS Demographic Survey)
- 147,600 construction and building inspectors in US (BLS 2024)
- 85% over age 45; only 3% under 35
- 80% retiring within 15 years
- 62% of certified building officials leaving within 10 years (Utah building official study, ICC)
- 14,800 annual openings needed — "almost entirely from retirements and career exits" (BLS Projections 2024-2034)
- -1% projected employment decline vs +3% average all occupations (BLS Occupational Outlook)
- 90% male — limiting recruitment pool further (Data USA 2023)
- Average AHJ inspector age: 55-64 years old, 15 years experience, 35+ years in construction (IAEI Workforce Survey)
- Multi-certification problem: 71% of plan reviewers also certified as building inspector, 66% residential inspector, 58% mechanical, 56% general, 51% plumbing, 50% energy. One retirement = 3-6 vacancies.
- Source: https://www.planchecksolver.com/blogs/building-official-shortage-crisis (aggregates ICC/NIBS, BLS, IAEI data)

### 2. Pay Gap Driving the Shortage
- Government building inspector median: $72,120
- Government sector avg as low as $48,041
- Private construction manager median: $106,980
- Senior PM: $147,760; Director: $203,093
- 48% pay gap means skilled professionals don't apply
- Post-2008 budget cuts eliminated junior training positions; never restored
- Source: BLS, via PlanCheckSolver analysis

### 3. Economic Impact
- 19,000 homes not built in 2024 due to permit delays ($8.14B loss)
- $10.81B annual economic impact from extended timelines
- 78% of projects delayed; 62% due to staffing
- Avg project completion stretched from 7 to 11 months
- Source: PlanCheckSolver analysis (NOTE: vendor source, but cites BLS/ICC data)

### 4. Actual Plan Review Times by Jurisdiction (2025-2026 data)
- **Dallas, TX:** 4 weeks prescreen + 10 weeks plan review = **14 weeks total** (residential permits). Source: dallascityhall.com permit review table
- **Aspen, CO:** 16-18 weeks Round 1 (major residential); 8-10 weeks per additional round. Source: aspen.gov building permit timelines (Dec 2025)
- **Redwood City, CA:** 4-8 weeks (new buildings), 3-4 weeks (additions/alterations). Source: redwoodcity.org
- **Charlotte County, FL:** 6 business days / ~2 weeks (new SFR). Source: charlottecountyfl.gov (week of Jul 13, 2026)
- **Boise, ID:** 10-11 days (single family). Source: cityofboise.org (Oct-Dec 2025)
- **Miami-Dade, FL:** 5 business days current but warning: without fee increase, review times "would effectively double" toward statutory 30-day max. Source: miamidade.gov supplemental budget doc (Jun 2025)
- **DC:** DOB creating "Instant Permits" for smaller residential scopes to reduce backlog. Source: oca.dc.gov FY25 performance report

### 5. AI Plan Review Tools That Exist Now
- **UpCodes Plan Review** (launched June 3, 2026): AI-native QA/QC against 11M locally adopted building codes. 800K AEC professionals use platform. $39/mo (Essentials) / $59/user/mo (Professional with AI Copilot). Built for architects/engineers doing pre-submission compliance. Source: morningstar.com PR, getapp.com
- **PlanCheckSolver:** 10 min per plan set vs 8-10 hours manual. Claims 97% catch rate vs ~11% manual. Found 814 issues across 10 residential plans vs 93 by human reviewers (8.7x). Source: planchecksolver.com (vendor data — needs independent verification caveat)
- **CodeComply:** Automated compliance against IBC, NFPA, ADA, FHA, local amendments. "VersionVue" automated version comparison. Source: sourceforge.net review
- **AutoReview.AI:** UF spinoff. AI plan review + AR inspection overlay (iPad/phone superimposes plan on construction site). Named UF "Invention of the Year." Source: warrington.ufl.edu
- **ICC Navigator:** AI tool for code research, grounded in ICC's authoritative code library. NOT a plan review tool — research/lookup. Source: indexbox.io (ICC article)

### 6. Why Building Departments Aren't Adopting
- 70% of planning professionals cite "resource and staffing shortfalls" as barrier to meeting mandated permitting deadlines (ICC survey, cited SmartCitiesDive Apr 2026)
- Government procurement cycles incompatible with SaaS adoption
- Liability: if AI misses a code violation, who is liable? No legal framework.
- Budget: same budget cuts causing inspector shortage prevent technology investment
- NYC DOB: 16% vacancy rate (287 unfilled of 1,884 positions), further budget cuts by Mayor Adams. Source: commercialobserver.com
- ICC's official position: "AI is not a replacement for the knowledge and judgment of trained professionals" — human-in-the-loop required. Source: indexbox.io
- "Past and current strategies and interventions have failed to provide solutions at scale." — Dr. George Guszcza, CEO, NIBS (Elevate 2025 Workforce Summit)

### 7. Construction Rework Context
- $177B/year lost to rework, data-hunting, conflict resolution (FMI/PlanGrid 2018, still widely cited in 2026)
- 6-10% of project budget is rework; ~50% of rework traces to design/documentation errors
- $31.3B in rework specifically from poor data and miscommunication
- For $500K custom home: $30K-50K potential rework cost
- Source: autodesk.com/blogs/construction (PlanGrid/FMI report)

### 8. ServiceTitan 2026 Contractor AI Adoption
- 74% of contractors view AI as efficiency engine
- Only 25% currently using AI (gap between interest and adoption)
- 48% of early adopters report increased productivity
- 45% report time savings
- Source: globenewswire.com ServiceTitan 2026 Residential State of the Trades Report (Apr 7, 2026)

### 9. Academic Research (July 2026)
- arxiv.org/abs/2607.00015v1: "Towards an automated AI-based framework for floor plan compliance checks for residential buildings" — Australian researchers proposing AI framework for multi-apartment residential compliance. Demonstrates the academic direction but NOT deployed.
- MDPI paper: Agentic AI for roof design compliance using CV + RAG + LLMs (Florida building code). Multi-agent framework tested on real scenarios.
- Both confirm: the technology works in controlled settings. Neither is deployed in a building department.

## Original Contribution
Nobody has cross-referenced actual 2026 plan review queue times from specific US jurisdictions against the workforce demographic data and the capabilities of commercially available AI tools to calculate: what would happen if Dallas's building department (10-week residential queue) deployed UpCodes or PlanCheckSolver? At 10 minutes per plan vs 8 hours, and with 3 reviewers instead of the 15 they can't hire, the queue math collapses. But the liability question, the procurement process, and the "AI is not a replacement" posture from ICC mean the math stays theoretical while the homes don't get built.

## Strongest Counterargument
AI plan review tools are built by vendors with a financial incentive to overstate performance. PlanCheckSolver's "97% catch rate vs 11% manual" is a vendor-published stat with no independent audit. An AI that flags 814 "issues" on 10 plans may be generating false positives that waste MORE reviewer time. The real bottleneck may not be the plan review itself but the inspection after construction starts — and no AI can inspect a foundation pour in person.

## Limitations
- PlanCheckSolver performance data is self-reported; no independent verification exists
- Plan review times vary enormously by jurisdiction; the cited examples are illustrative, not nationally representative
- The $177B rework figure is from 2018 and covers all construction, not residential specifically
- ICC/NIBS demographic survey sample size (3,850) represents ~2.6% of the 147,600 inspectors
- No building department has publicly reported results from deploying AI plan review at scale
