# Research: AI Building Permit "Review" Tools — The Intake vs. Review Gap

## Thesis
Cities across the US are deploying AI tools marketed as cutting building permit review times by 60-80%. But these tools don't review plans — they check whether applications are complete before submission. The gap between the marketing claim and the mechanical reality matters for every homeowner and builder waiting on a permit.

## Key Data Points

### Denver
- Only 37% of applications approved on first try (Denver7)
- $4.6M / 5-year contract with CivCheck (Clariti), approved March 2026
- Target: push first-try approval to 80%
- 180-day shot clock with $10K refund guarantee if missed
- Already cut single-family/duplex processing time by 45% since 2023
- Community Planning and Development cut 59 budgeted positions for 2026 (total: 251)
- Source: PYMNTS (May 2026), Denver7, Denver Gazette

### Honolulu
- Average review times fell from 73 days to 32.5 days (55% reduction)
- Review cycles dropped from 3.4 to 1.4
- **Sample size: only 19 CivCheck permits vs 17 non-CivCheck** (DPP's own numbers)
- Plan review time from 90 min to 20-30 min (64% reduction per review)
- 20,000 building permit applications annually, only ~1,400 new housing units authorized
- Piloted since 2022, CivCheck launched Dec 8, 2025
- "It's kind of like TurboTax for permitting" — Dawn Takeuchi Apuna, DPP Director
- Source: GovTech (Jan 2026, Jul 2026), StateScoop (Jun 2026)

### CivCheck / Clariti
- Claims 97%+ accuracy, 80%+ reduction in approval times (BusinessWire, Oct 2025)
- Clariti acquired CivCheck Oct 2025
- "Designed to augment rather than replace staff" — Dheekshita Kumar, CEO
- Human reviewers still evaluate final submitted plans
- Checks: missing documents, incomplete fields, code compliance at intake
- Does NOT: make final approval decisions, interpret ambiguous code provisions, coordinate inter-agency review
- Now deployed/piloting: Denver, Honolulu, San Jose, Seattle, Calgary, Toronto, Vancouver

### San Jose
- 75% of ADU applications were incomplete (missing required documents) — Clariti pilot finding

### Surrey, BC (Archistar)
- 80% of residential permit applications had significant zoning deficiencies
- Average 1.6 resubmissions required
- Launched AI PreCheck March 2026 for R3 Urban Residential
- "It's like spell-check for zoning" — Jerome Thibaudeau, Planning & Development

### Archistar
- Used by 25+ municipalities (US, Canada, Australia)
- ICC (International Code Council) partnership for dynamic code content
- Deployed for LA fire recovery (free, via Steadfast LA / Amazon / Autodesk partnership)
- Governor Newsom announced April 2025
- Computer vision + ML + automated rulesets
- Checks designs against local zoning and building codes
- Also deployed: Austin, Houston, Seattle, Vancouver, Colorado (state contract)

### Edmonton, Alberta
- Same-day residential permits (single/semi-detached homes) using AI auto-review
- Previously: 20-day wait
- Source: Bloomberg What Works Cities

### National Context
- PermitPlace 2026 study (741 cities, 44 states): Average 22.9 days (published guidelines), median 14 days
- Gap between published timelines and actual: 2-5x for complex projects
- Census Bureau: Pacific region avg 2.1 months from permit to construction start
- National avg total construction time: 9.1 months

## Original Contribution
**Resubmission cycle cost calculation:**
- If Denver's 37% first-try approval means 63% of applications require resubmission
- Honolulu data: avg 3.4 cycles before CivCheck, each cycle ~21 days (73 days / 3.4)
- Carrying cost on a $400K residential project (construction loan at ~8%): ~$87/day
- Each avoided 21-day cycle = ~$1,830 in carrying costs alone
- Over 3.4 cycles average = $5,490 in carrying costs from resubmissions
- AI cuts cycles to 1.4 (saving ~2 cycles × 21 days × $87) = ~$3,654 saved per permit
- Denver's $4.6M contract / ~15,000 residential permits/year = ~$61/permit
- ROI: $3,654 saved / $61 cost = 60:1 for permits that would have required resubmission
- BUT: this only applies to permits that would have been incomplete (63% in Denver, 75% in San Jose for ADUs)
- Net savings across all permits: ~$2,302/permit avg ($3,654 × 63%)
- This math assumes all resubmission delays are eliminated; actual results will be lower

**The critical distinction:**
These tools reduce the NUMBER OF TIMES a permit gets reviewed, not the TIME each review takes. The per-review time (20-30 min in Honolulu) is unchanged. The AI eliminates the 2-3 unnecessary cycles caused by incomplete submissions.

This is genuinely valuable — but it's intake automation, not plan review AI. The marketing conflates the two.

**What the AI doesn't touch:**
1. Structural engineering review
2. Fire code compliance requiring professional judgment
3. Zoning variances and conditional use permits
4. Environmental review (CEQA in CA)
5. Inter-agency coordination (water, sewer, fire, transportation)
6. Discretionary design review
7. Neighbor notification and appeal periods

## Strongest Counterargument
The distinction between "intake" and "review" may be less meaningful than it appears. If 63-80% of all delays are caused by incomplete submissions bouncing back and forth, then solving intake IS solving the permitting bottleneck for most applicants. The AI doesn't need to replace the plan reviewer if the plan reviewer was never the bottleneck in the first place.

## Limitations
- Honolulu's results are based on 19 permits. Not a typo. Nineteen.
- Denver just launched; no results data yet
- No independent validation of CivCheck's "97% accuracy" claim — that's the company's own number
- Edmonton's "same-day" permits apply only to simple single/semi-detached homes in specific zones
- Cost calculation uses estimated carrying costs; actual costs vary widely by market and project type
- No data on what percentage of total permit processing time is attributable to resubmissions vs. other delays
