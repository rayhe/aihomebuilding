# Research Notes: AI Permit Pre-Check & the Resubmission Bottleneck

## Core Thesis
The biggest bottleneck in residential building permits isn't the code review — it's the resubmission cycle. 80% of applications contain deficiencies that trigger multiple rounds of corrections, each restarting the review clock. AI pre-check tools attack this upstream problem, catching errors before the city even opens the file.

## Journalist: Catherine "Code" Chen (Policy & Regulation)

## Key Data Points

### National Permitting Stats
- National average initial review time: 22.9 days (mean) / 14 days (median) — PermitPlace 2026, 741 US cities
- San Diego County: 6 months to 1 year total for new SFR permit, "about half of projects require more than two plan check cycles"
- NYC DOB: 275,000 applications/year through century-old borough-based system (NYC Commission on Government Efficiency, Jul 2026)
- Fastest cities: Denver (2 days), Houston (2 days), Miami (2 days) — for simple over-the-counter permits
- Commercial permit delays: ~$500/day carrying costs (PermitPlace)

### The Resubmission Problem (Key Finding)
- Surrey, BC: 80% of residential permit applications contained "significant zoning deficiencies" requiring an average of 1.6 resubmissions (Jerome Thibaudeau, City of Surrey Planning & Development, Mar 2026)
- Honolulu DPP: "More than 50% of building permit plans that come in, the quality is not good" (Dawn Takeuchi Apuna, DPP Director, GovTech Jun 2026)
- Washington County, OR: "Applications rarely meet all code requirements or standards in the first round of reviews"
- San Diego County: "About half of projects submitted require more than two plan check cycles"

### AI Tools Deployed
1. **Archistar AI PreCheck** — Computer vision + automated rulesets, checks designs against zoning and building codes. "Spell-check for zoning" (Thibaudeau). Used by 30+ cities globally. Partnered with ICC for code content freshness. Free for LA fire rebuilding (Newsom, Apr 2025). Cities: LA, Austin, Houston, Seattle, Surrey, Vancouver, Colorado.
2. **CivCheck (Clariti)** — "TurboTax for permitting" (Takeuchi Apuna). Decision-support, not autonomous approval. Piloted by ~20 jurisdictions. Denver selected Mar 2026. Honolulu launched Dec 2025.
3. **PermitFlow** — Named in HUD grant announcement alongside Blitz Permits, CivCheck, Permitify.
4. **Edmonton "auto-review"** — Same-day permits for single/semi-detached homes vs previous 20-day wait (Bloomberg What Works Cities).

### Results
- Honolulu: 60-70% reduction in residential permit review times with CLARITI/CivCheck
- Virginia VPT: 70% reduction in processing times via transparency platform
- Edmonton: Same-day permits (from 20-day baseline)
- Surrey: "Spell-check for zoning" catches deficiencies pre-submission

### Federal/State Action
- HUD grant (May 2026): Up to $3M per jurisdiction for automated building code permitting systems. Applications closed Jul 13.
- Newsom executive order (Apr 2025): Free Archistar for LA fire rebuilding. CEQA suspended.
- Seattle: Mayor Harrell signed executive order directing all development applications through AI pilot (Jun 2025), full rollout expected 2026.
- NYC Commission on Government Efficiency (Jul 2026): Recommended modernizing century-old building permit system

### Human-in-the-Loop Design
- CivCheck configured as "decision-support system rather than an autonomous approval engine" (Denver announcement)
- "Preserves professional judgment and accountability in final decisions"
- Julia Richman (Clariti VP): "not deploying something that's spying on people" — intake support only

### Code Freshness Risk (Counterargument)
- ICC's Childs: "Sometimes new local laws are passed and posted as a PDF, but they're not incorporated into the code for 8 to 12 weeks. If you're not dealing with fresh code content, you risk disseminating incorrect information."
- Tools using scraped codes vs ICC-licensed content risk being wrong, which is "actually worse than doing nothing"

### Julia Richman Personal Story
- Former Colorado tech official, VP at Clariti
- During 2022 home expansion in Denver, foundation issues required new permits
- Submitted just as Denver changed zoning regulations — flood of applications from other builders
- Waited ~7 months, paid mortgage + rent simultaneously
- Total extra cost: ~$100,000 (materials inflation + dual housing)
- Led her to join CivCheck as adviser

## Original Contribution
**Resubmission cost calculation:** If 80% of applications have deficiencies (Surrey data, n=all residential applications) requiring 1.6 average resubmissions, and each resubmission restarts a 14-day median review clock (PermitPlace national median, 741 cities), the deficient application's total review time = initial review (14 days) + 1.6 × 14 days = ~36.4 days. A clean application takes 14 days. The resubmission penalty is 22.4 additional days. Across the ~1.5 million annual US housing starts (Census Bureau), if 80% trigger resubmissions, that's 1.2 million delayed applications × 22.4 extra days × estimated $200-300/day residential carrying cost (conservative estimate based on dual mortgage/rent, material inflation risk) = $5.4-8.1 billion in annual nationwide resubmission-driven delay costs.

Limitation: The 80% deficiency rate is from Surrey, BC (one city), and may not be nationally representative. The $200-300/day residential carrying cost is an estimate based on Richman's $100K/7 months (~$476/day) on the high end and more typical dual-housing scenarios on the low end. The calculation assumes each resubmission fully restarts the review clock, which varies by jurisdiction.

## Sources
1. PermitPlace, "2026 State of Building Permits Across America" (741 US cities survey)
2. City of Surrey / Archistar press release (Mar 2026)
3. Honolulu DPP / GovTech (Jun 2026)
4. StateScoop, "How states, cities can use federal funds to fix permitting delays with AI" (Jun 2026)
5. Governor of California press release (Apr 2025)
6. Denver / CivCheck press release via BusinessWire (Mar 2026)
7. PYMNTS, "AI Tackles Paperwork Problem Blocking America's Housing Permits" (May 2026)
8. Bloomberg What Works Cities, "How Data and AI Will Power Local Housing Solutions in 2026" (Feb 2026)
9. NYC Commission on Government Efficiency preliminary report (Jul 2026)
10. Archistar / ICC partnership announcement (Mar 2026)
11. San Diego County Building Division permit guide
12. Washington County, OR building permit timeline
