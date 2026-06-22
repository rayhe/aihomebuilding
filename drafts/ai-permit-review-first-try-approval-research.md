# Research: AI Permit Review — First-Try Approval Rates

## Angle
Cities are deploying AI to catch permit application errors *before* human reviewers see them. Denver went from 37% first-try approval to targeting 80%. Hernando County, FL cut review times from 30 days to 2 days. The insight: AI isn't replacing plan reviewers. It's intercepting the dumb mistakes — missing documents, incomplete fields, obvious code violations — that clog the queue for months. For a homeowner waiting on a permit, the bottleneck was never the complexity of the review. It was the paperwork ping-pong.

## Journalist
Catherine "Code" Chen — policy, regulation, building codes. This is her core beat.

## Primary Sources

### 1. Denver CivCheck Deployment (May 2026)
- Source: PYMNTS (May 2026), Denver7, Route Fifty, Denver Gazette
- Denver approved just 37% of building permit applications on the first try
- $4.6 million, 5-year contract with CivCheck (by Clariti)
- Implemented May 2026
- Flags missing documents, incomplete fields, application errors BEFORE plans reach city reviewers
- Goal: push first-try approval to 80%
- Context: Denver Permitting Office cut 59 budgeted positions in 2026 (down to 251 total)
- Already cut possession time for single-family/duplex by ~45% since 2023
- 180-day "shot clock" for permit decisions; $10K refund if missed
- Julia Richman, Clariti VP: "Most plan review delays start upstream, when submissions enter the queue incomplete or inconsistent"

### 2. Hernando County, FL — SwiftGov/SwiftBuild.ai
- Source: Smart Cities Dive (via Conduit Street Maryland Counties blog)
- Cut review times from ~30 days to as little as 2 days for single-family homes
- Saved roughly $1 million in administrative costs
- Cross-checks plans against local zoning codes, identifies missing info, flags violations
- Final approvals remain with human staff reviewers

### 3. Naples, FL — Blitz Permits/CityView (2026)
- Source: HousingWire (April 2026)
- First city in Florida to deploy Blitz AI
- Platform trained on Florida Building Code (800+ pages) and local ordinances
- Evaluates plans in minutes, generates review reports with red-lines on drawings
- Integrated with CityView permitting system
- Mayor Teresa Heitmann quote about innovation + service

### 4. UpCodes Plan Review (June 3, 2026)
- Source: PR Newswire / Morningstar
- 800,000 AEC professionals already use UpCodes for code research
- NEW: AI-native Plan Review against 11 million locally adopted building code sections
- Covers 6,000+ US jurisdictions including local amendments
- Discipline-specific: architecture, structural, MEP, fire protection, life safety, accessibility, energy
- Issues linked to drawing page + governing code section
- Scott Reynolds, CEO: "Multi-million dollar errors mean shrinking project margins when they're not caught pre-construction"

### 5. Other Cities Deploying
- Honolulu: CivCheck live for residential permits (Dec 2025), commercial by mid-2026
- Seattle: Mayor Harrell executive order directing all development applications through AI pilot
- Austin: Archistar for zoning review
- LA/LA County: AI for rebuilding permits after Eaton/Palisades fires (2025)
- AutoReview.AI: developed at UF with City of Gainesville, first US AI system for comprehensive code compliance, results in 24-48 hours

### 6. Permitting Delay Data
- NMHC quarterly survey: 97% of developers reported delays, 83% specifically due to permits
- 22% of developers reported 9+ month permit waits (up from 10% six months earlier)
- NAHB: labor shortage adds average 1.98 months to construction time; $8.143B economic loss
- Census Bureau Survey of Construction: average 1 month from permit to start, 6-7 months construction
- Wharton/BIAW: holding costs from permit delays quantified per county (mortgage payment × months delayed)

## Original Contribution
**Cost calculation nobody ran:** What does each rejected-and-resubmitted permit cycle cost a homeowner? If Denver's 37% first-try rate means ~63% of applicants cycle back at least once, and each cycle adds 4-8 weeks of holding costs (mortgage payments, insurance, taxes on the land, contractor schedule slippage, material price escalation), I can calculate the per-home cost of permit ping-pong.

Rough math:
- Median new home price (NAHB): ~$420K
- Monthly holding cost (mortgage + insurance + taxes): ~$2,800-3,200/month
- Each permit rejection cycle: 4-8 weeks minimum before resubmission + re-review
- At 63% rejection rate, average home goes through 1.7 cycles before approval
- That's ~2.5 months of holding costs: $7,000-8,000 per home from permit ping-pong alone
- Denver issues ~10,000 residential permits/year → ~$45-50M in aggregate holding costs from avoidable rejections

## Limitations
- Denver's 80% target is aspirational — no post-CivCheck data yet (deployed May 2026)
- Hernando's "$1M savings" is county estimate, not audited
- None of these tools handle the hard judgment calls (design review, discretionary approvals, neighbor appeals)
- AI catches completeness errors, not bad design. The creative/professional judgment calls still wait for humans.
- All cost calculations use median/average figures; individual costs vary enormously by market

## Strongest Counterargument
Cities that automated permit intake still have the same understaffed review departments. CivCheck doesn't make reviewers faster — it just pre-filters the queue. If the bottleneck shifts from "applications rejected for missing documents" to "applications waiting in the clean queue for a human who doesn't exist," the homeowner's wait might not shrink at all. Denver cut 59 positions the same year it deployed CivCheck. The tool may be a budget cut wearing a technology hat.

## Kill Test
**Does this help someone building or buying a home?** Yes.
- If you're submitting a permit: use UpCodes Plan Review ($?) or PlanCheckPro.AI to pre-screen before submission
- If your city deployed CivCheck/Blitz AI: expect faster initial feedback, submit cleaner applications
- If your permit is stuck: the data shows most delays are completeness, not complexity. Call your permitting office and ask what's missing.
- The real savings: avoid the $7-8K holding cost penalty of a rejected application

## Headline Options
- "Denver Approved 37% of Building Permits on the First Try. Then It Hired an AI to Read the Applications."
- "Your Building Permit Was Rejected for a Missing Checkbox. An AI Would Have Caught It Before You Submitted."
- "Sixty-Three Percent of Denver's Building Permits Failed on the First Try. The Problem Wasn't the Code. It Was the Paperwork."
