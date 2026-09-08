# Research: AI Punch Lists — 360 Cameras That Catch Defects Before the Walk-Through

## Angle
Your builder's punch list has 400 items and takes six weeks to clear. A hardhat with a 360 camera walked the same house in 12 minutes and flagged the crooked outlet, the missing insulation, and the scratched countertop the clipboard walk missed. The camera doesn't find defects faster. It finds them before they become defects.

## Journalist
Jake Kowalski — Construction Technology (punchy, hands-on, specs-heavy, respects the job site)

## Kill Test
Does this help someone building or buying a home? YES — for builders/GCs on $500K+ residential projects: catching deviations while the trade is still on site avoids rework that averages ~5% of project value (CII data, 359 projects) and weeks of carrying cost at closeout. For homebuyers: a photo-documented punch list is leverage and a permanent as-built record of what's behind your walls.

## Primary Sources

### 1. ENR — Build Group + Buildots case study (buildots on 19-story M2 residential tower, SF 5M development)
URL: https://www.enr.com/articles/52262-build-group-sees-results-with-site-intelligence-app-buildots
- Build Group (GC), VP of Operations Chad Krause: "The manual process is tedious for us. It's very time consuming to send personnel to the jobsite and track everything on job, marking it off on an iPad."
- Founded 2018 (Tel Aviv); hardhat-mounted 360 cameras; ML overlays imagery on BIM digital twin
- ML spots discrepancies day-to-day, sends alerts before they become delays
- Residential project: 19-story M2 residential tower, San Francisco 5M development — Build Group's first US customer
- 3–4 months of setup to get Navisworks models linked to Buildots Revit digital twins — the integration is NOT plug-and-play; designers must detail the small elements they want tracked
- Key honesty point: adoption cost is real — model prep takes months

### 2. Buildots 64-project study via Digital Construction Week
URL: https://www.digitalconstructionweek.com/transforming-on-site-management-processes-with-data-driven-efficiency-metrics/
- 64 global construction projects analyzed, 82 years of combined construction time
- 4 inefficiency categories quantified: Return Visits, Area Utilisation, Sequence Deviations, Trade Output Inconsistency
- AI analyzes 360 images against design + schedule automatically
- Original finding potential: Buildots' own data on how often sequencing deviations occur

### 3. OpenSpace — QC/punch list product pages + Wise Construction case study
URLs:
- https://www.openspace.ai/blog/construction-quality-control-with-openspace/
- https://www.openspace.ai/blog/punch-lists-in-openspace/
- https://wiseconstruction.com/wise-construction-brings-project-plans-life-using-openspace-360-capture/
- Founded 2017, SF-based; 4B+ sq ft captured across thousands of sites in 50+ countries
- Field Notes: punch items auto-pinned to floor plan location, auto-tagged by zone, timestamped — eliminates "where was that crack again?" on 11x17 printed plans
- AI Autolocation ("GPS for indoors"): phone + previous capture suggests location on floor plan
- Integrates with Procore (creates Punch List Items + Observations) and Autodesk (Issues) — no double entry
- Split-screen: photo vs. earlier date shows when damage occurred — dispute resolution gold
- BIM Compare: side-by-side photo vs 3D model for QA
- Wise Construction: uses for QA/QC + live punchlist tags, pushes RFIs to Procore with imagery
- OpenSpace Basic: free 360 capture tier (2021 launch)

### 4. PlanGrid + FMI study — rework from bad data (primary industry survey)
URL: https://informedinfrastructure.com/post/new-research-from-plangrid-and-fmi-identifies-factors-costing-the-construction-industry-more-than-177-billion-annually
- ~600 construction leaders surveyed; FMI (management consulting)
- Time on non-optimal activities: $177.5B/year in US labor costs
- Rework from miscommunication/inaccessible info: $31.3B in 2018 alone
- Workers lose ~2 working days/week on avoidable issues; 5.5 hrs/week hunting project data, ~5 hrs conflict resolution
- "Poor data and miscommunication drives over half of all construction rework"

### 5. PlanRadar rework cost compilation (academic + industry studies 1991–2026)
URL: https://www.planradar.com/us/cost-of-rework-construction/
- Residential-specific: Liu et al. (2018) — 4.95% avg rework cost on residential; Mahamid (2024) — 5–10% residential
- CII: 2–20% range; CII 2005: direct rework averages 5% of total construction cost
- Thomas et al. (CII, 359 projects): direct rework costs average 5% of total construction costs; in 2004 dollars that was ~$75B wasted/year in the US alone
- Love (2026), ASCE Journal of Construction Engineering: 0.38% pre-completion measured (contractor field data — the optimistic floor)
- Range: 0.4%–20% depending on measurement method; cluster 4–10%

### 6. Sityos AI punch-list whitepaper (2026)
URL: https://www.sityos.com/sites/default/files/documents/2026-07/ai-punch-list-defect-tracking-spacecapture-procore-n8n_en.pdf
- SpaceCapture: computer vision compares new capture vs QA standard and vs previous capture; flags new items
- Each flagged item quantified (e.g., "scratch length: 18cm, depth: 0.3mm") with confidence score
- High-confidence items auto-approved; low-confidence flow to AI reasoning layer
- Severity tags (minor/moderate/critical), trade categorization (painting, electrical, carpentry)
- Claim: "Cut Construction Punch List Time 70%"
- Consistent-capture caveat: "inconsistent capture technique is the #1 cause of missed defects in the first month" — same camera height, same walking speed, standardized route

### 7. Singapore BCA/JTC — remote inspections via LiDAR/360 (regulatory precedent)
URL: https://lidarnews.com/remote-building-inspections-with-lidar/
- Building and Construction Authority (Singapore) + JTC tested laser/LiDAR and 360 photos for remote building inspections at two industrial developments
- First virtual TOP (Temporary Occupation Permit) inspection; BCA developing technical guidelines for virtual TOP
- Regulatory acceptance of photo-based inspection is real, not speculative

## Novel Contribution
Calculate the closeout carrying-cost math nobody publishes for residential:
- Take a $650K residential build. Rework at residential-average 4.95% (Liu et al. 2018) = ~$32K in rework cost baked into the project.
- Construction loan carrying cost: $650K at ~9% = ~$58,500/year = ~$1,125/week. Every week of punch-list closeout burns over a grand in interest alone, before the homeowner's double-housing cost (rent + mortgage overlap).
- Compare: one 360 walk = ~12–20 min for a 2,500 sq ft home (OpenSpace-style capture cadence), vs. a traditional punch walk of 2–3 hours + report compilation. If the camera catches even half the items a week earlier than the traditional cycle, the math pays for a year of software on a single project.
- Show the break-even: OpenSpace/Buildots-style tools run $3–5K/month for commercial; residential builders using OpenSpace Basic (free tier) or per-project pricing face near-zero software cost — the barrier is capture discipline, not price.

## Limitations (for the article)
- Buildots' 64-project study is vendor-published, not peer-reviewed; "90%+ task recognition" claims are vendor marketing (YouTube promo), not independent verification.
- OpenSpace/Wise case studies are marketing pages; no third-party audit of their QA time-savings claims.
- The residential evidence is thin — most hard data (Build Group M2, 64-project study) is commercial/multifamily; single-family residential adoption data is sparse.
- 3–4 month BIM setup cost (Build Group) means the tech favors builders with repeatable plans/models; a one-off custom home gets less value.
- Capture discipline is the failure mode: inconsistent walks = missed defects (Sityos' own doc says so).
- The camera documents; it doesn't fix. A flagged item still needs a human with a putty knife.

## Strongest Counterargument
The punch list isn't a documentation problem, it's a craftsmanship problem. A 360 camera doesn't make the painter come back, doesn't make the drywall crew care, and a photo of a defect is worth exactly as much as the superintendent willing to fight about it. Builders who already run tight closeouts gain little; builders with 400-item punch lists have a management problem, not a technology problem. And for homebuyers, a 4-billion-square-foot visual record of your walls is also a surveillance record of the crew — the same camera that catches the crooked outlet watches the electrician eat lunch.

## Headline candidates
- "Your Punch List Has 400 Items. The Camera on the Hardhat Found 600."
- "The 360 Camera Caught the Crooked Outlet. The Clipboard Walk Missed It."
- "Six Weeks of Punch List, Twelve Minutes of Walking: The Camera Doesn't Blink"
