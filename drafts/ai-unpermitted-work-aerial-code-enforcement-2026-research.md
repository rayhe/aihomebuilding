# Research Notes: Your Unpermitted Addition Has an Aerial Photo. The County's AI Just Matched It to the Permit File.

**Slug:** ai-unpermitted-work-aerial-code-enforcement-2026
**Article #:** 913
**Journalist:** Catherine "Code" Chen (policy, legal, building codes — enforcement is her beat)
**Date:** September 19, 2026

## Angle
Cities and counties no longer discover unpermitted work when a neighbor complains. They discover it when an AI compares last year's aerial photo to this year's and flags the new deck that has no permit. This is deployed, not theoretical: Dallas found ~29,000 issues from garbage-truck cameras; Sawyer County, WI runs 2025-vs-2020 aerial overlays specifically for unpermitted structures; France built a €40M/year revenue machine finding undeclared pools from space. The article tells sellers, buyers, and DIYers what enforcement math now looks like — and why "nobody will notice" expired as a strategy.

## Primary Sources

### 1. Governing — "New Tools to Improve the Quality of City Spaces" (Dallas + Cleveland City Detect)
- Dallas mounted cameras on sanitation brush trucks ("good overview of the city"); initial rollout: nearly 29,000 potential property maintenance concerns across 49 issue types + ~12,900 right-of-way encroachment issues
- Cleveland began City Detect partnership Aug 2025; two side-facing cameras on a city car; by May 2026 the survey had covered ~158,000 parcels — "work that in the past would have required 40 officers over six months"
- Critical nuance: "The machine does not write tickets. It nominates conditions for remediation." Cleveland officials review pictures before sending inspectors; Dallas: "All AI-generated detections are reviewed and validated by city staff before any enforcement action is taken" (Code Compliance Director Chris Christian)
- Process inversion: code officers used to visit only after a neighbor's report; now they work a ranked queue of already-found conditions
- URL: https://www.governing.com/management-and-administration/new-tools-to-improve-the-quality-of-city-spaces

### 2. Sawyer County, Wisconsin — AI aerial overlay for unpermitted structures (2025)
- Zoning administrator Alex Kozlowski: 162 orders for correction in 2025, ~75% compliance, 14 citations; "My plan is to then use an AI overlay as part of a 2025 aerial and a 2020 aerial that will then showcase additional structures that were placed on a property" — structures compared against permit records to find unpermitted builds
- Operational notes: no fixed numeric limit on unlicensed vehicles if screened; enforcement deadlines set for spring when access is feasible
- URL: https://citizenportal.ai/articles/7290886/Sawyer-County/Wisconsin/Sawyer-County-officials-report-record-permits-and-plan-aerial-AI-assisted-zoning-enforcement

### 3. France "Foncier innovant" — AI pool/extension detection (2022-2024)
- System sifted aerial imagery to detect undeclared additions, cross-referenced against tax authority data; trialed in 9 regions (Alpes-Maritimes, Var, Bouches-du-Rhône, Ardèche, Rhône, Haute-Savoie, Vendée, Maine-et-Loire, Morbihan)
- Bouches-du-Rhône: 7,200 undeclared swimming pools identified; a pool adds ~€200/year to property tax
- From 2024: extended from pools to house extensions, verandas, garden sheds; estimated €40M in additional levies for 2023
- Union pushback: CGT Finances Publiques raised concerns about potential staff cuts
- France has 3M+ private pools (2nd largest pool market outside the US)
- URLs: https://www.techradar.com/news/ai-technology-used-to-track-down-unauthorized-swimming-pools ; http://www.archyde.com/ai-and-taxes-how-artificial-intelligence-is-helping-tax-authorities-track-house-extensions-and-garden-sheds/

### 4. Cathedral City, CA — PASS AI drive-by enforcement (Oct 2025 – Jan 2026)
- 186,297 images captured across five districts; 12,489 parcels analyzed; 18,612 roadside detections across 90+ miles of roadway; 623 individual parcel violations across 36 violation types (vehicles on lawns, tarps on roofs, plywood windows, illegal dumping, graffiti, tire accumulations)
- GPS-tagged reports go directly to Public Works manager with photo documentation; before/after image comparison closes complaints without a second site visit
- URL: https://www.publicceo.com/2026/06/transforming-municipal-compliance-through-ai-powered-detection/

### 5. D.C. Department of Buildings AI surveillance plan — House Oversight investigation (Sept 2026)
- Chairman James Comer (House Oversight & Government Reform) investigating D.C. DOB plan with D.C. DOT and the Office of the CTO to use panoramic-camera vehicles + AI to identify vacant properties and external maintenance violations
- Concern: "excessive fees, external property maintenance violations, and unpayable tax debt, putting [owners] on a path towards foreclosure"; letter requests briefing from DOB Director Brian J. Hanlon
- Shows the political ceiling: automated discovery is fine until it feeds a fine-and-foreclose pipeline
- URL: https://grainindustry.einnews.com/pr_news/941343245/comer-sounds-alarm-on-d-c-plan-to-use-ai-surveillance-to-target-district-property-owners

### 6. DirtSignal preprint — "Seeing Neglect" (June 15, 2026)
- Study using Jacksonville, FL code-enforcement records + dated aerial/Street View imagery: a Street View image carries statistically significant signal of a FUTURE first citation — strongest within 6 months before, significant up to a year before; some properties visibly neglected for years before any record
- "The gains came from matching the question to the camera angle and combining views" — a 4-number greenness measure out-predicted 768-dimensional foundation-model embeddings; a 2B-parameter vision model matched a larger one
- Implication: public imagery is a leading indicator of enforcement, and you don't need frontier models to read it
- URL: https://realestate.einnews.com/pr_news/919781041/study-public-street-view-images-showed-property-neglect-months-before-cities-filed-code-violation

### 7. Bloomberg Law — satellite tax enforcement (Poland, World Bank projects)
- Poland's fourth-largest city using low-cost high-precision satellite imagery to catch property tax evaders; expected ~$1M/year revenue; World Bank-led projects in Karachi, Nigeria
- Context: more private rockets + mini-satellites made high-res imagery cheap — the input cost of enforcement fell first, then the analysis got automated
- URL: https://news.bloomberglaw.com/daily-tax-report-international/latest-precision-satellites-employed-to-snag-property-tax-cheats

## Original Contribution (novel analysis)
The conversion-rate math nobody has published:
- Sawyer County: 162 orders for correction, ~75% compliance, 14 citations → enforcement funnels to an ~8.6% citation rate on discovered issues; the machine nominates, the human adjudicates, and most cases resolve without a fine
- Combine with DirtSignal's lead-time finding (visible up to a year before citation): the enforcement window is now the gap between when the camera sees it and when the officer knocks — a homeowner who self-reports/permits inside that window converts an 8.6%-citation-rate discovery into a routine permit fee
- The asymmetry finding: France's program is tax-revenue-driven (€40M levies); US programs are compliance-driven (orders for correction first). Same AI, opposite incentives — which means in the US the rational move is still to permit after discovery, while in France the rational move is that the AI is the tax collector and there's no compliance path that avoids the levy
- Buyer math: aerial-imagery vendors (EagleView/Verisk class) already sell change-detection to assessors and insurers; a buyer comparing the assessor's property sketch against listing photos gets the same change-detection the county runs — for free

## Kill Test
Does this help someone building or buying a home? Yes:
- Seller with unpermitted work: disclose and price, or legalize before listing — the county's before/after now exists whether or not you mention it
- Buyer: pull the permit history and compare to the assessor's sketch; mismatches are leverage and risk
- DIYer: retroactive permitting typically costs 2-4x the original permit fee plus potential daily fines; the "nobody will notice" era ended when the garbage truck got cameras
- Contractor: permit-expiration timelines and scope-match are now machine-checkable

## Counterargument (strongest, stated at full strength)
The machines do not write tickets, and every cited program has humans in the loop — Dallas reviews every detection before action, Cleveland re-inspects photos before dispatch. France's system has no published false-positive rate, and its critics (CGT union, civil-liberties voices) argue the revenue motive corrupts the enforcement motive. Aerial imagery cannot see interiors, so the enforcement is systematically biased toward exterior changes — the unpermitted bathroom gut that actually creates the safety hazard is invisible while the permitted-looking deck gets flagged. And D.C.'s oversight fight shows the real ceiling: when discovery feeds fines that feed tax liens that feed foreclosure, automated enforcement becomes a regressive tax administered by camera. The technology is neutral; the fine schedule is not.

## Limitations
- Municipal results are self-reported (Dallas, Cathedral City, Sawyer County); no published false-positive or appeal-overturn rates for any program
- DirtSignal is a preprint (June 2026), single-city (Jacksonville, FL); greenness-beats-embeddings result needs replication
- France's €40M extensions estimate is a 2023 projection, not collected revenue; pool tax figures are per-department averages
- D.C.'s program is under congressional investigation, not confirmed deployed
- US interior unpermitted work remains undetectable from aerial/drive-by imagery — this analysis covers exterior footprint changes only
