# Research: AI Permit Tools and the LA Fire Rebuild — Solving the Wrong Bottleneck

## Journalist: Catherine "Code" Chen (Policy & Regulation)

## Thesis
California deployed Archistar's AI-powered eCheck tool with political fanfare to speed LA wildfire rebuilding permits. One year later, only 28 homes have been rebuilt out of 13,000+ destroyed. The permitting tool works — but permits weren't the bottleneck. Insurance, labor costs, and construction pricing were. This is a policy analysis of misdiagnosed infrastructure.

## Kill Test
Does this help someone building or buying a home? **YES.** If you're a homeowner in a fire zone deciding whether to rebuild or sell, you need to understand that faster permits won't solve your rebuild timeline. Insurance coverage, contractor availability, and materials pricing are the real constraints. This article names them with data.

## Novel Contribution
Original analysis: Calculating the actual time breakdown of the rebuild pipeline to show what percentage of delay is attributable to permitting vs. insurance vs. construction. Nobody has done this math publicly.

## Primary Sources

### Source 1: LA County Recovers Dashboard (Government Data)
- URL: recovery.lacounty.gov/rebuilding/permitting-progress-dashboard/
- As of Feb 5, 2026: 13,142 parcels damaged/destroyed = 14,834 housing units
- 6,116 rebuild applications received
- 2,894 permits issued (47% of applications)
- 1,420 projects under construction
- Only 28 buildings completed after one year
- Average permitting time in fire zones: ~100 days
- vs. 24 months in Pacific Palisades non-fire zones
- vs. 8 months typically in Altadena
- vs. 64-day national average

### Source 2: Archistar eCheck Deployment (Company/Government)
- April 30, 2025: Gov. Newsom announces AI-powered eCheck software for LA City/County
- July 15, 2025: Beta launches for Eaton/Palisades fire survivors (R-1 residential zones)
- Free of charge, funded by philanthropy (LA Rises, Steadfast LA, Autodesk, Amazon contributions)
- Uses computer vision, ML, automated rulesets to check designs against local zoning/building codes
- Pre-submission check — homeowners verify plans before submitting to reduce resubmissions
- Beta: results took up to 10 business days during initial testing
- Dec 23, 2025: Gov. Newsom announces additional online resource; mentions Archistar helping "speed through permitting approvals"

### Source 3: City of Surrey, BC — Control Case (Government/Company)
- March 10, 2026: Surrey launches same Archistar AI PreCheck for R3 residential
- Key finding: "Roughly 80% of residential permit applications contained significant zoning deficiencies, requiring an average of 1.6 resubmissions and increasing approval times" — Jerome Thibaudeau, Surrey planning dept
- AI PreCheck acts as "spell-check for zoning" — flags issues before formal submission

### Source 4: UCLA Anderson Housing Study (Academic)
- SSRN paper: "Development Approval Times and New Housing Supply: Evidence from Los Angeles"
- Finding: Cutting approval times by 25% could boost housing production by up to 33%
- Peer-reviewed economic modeling based on LA-specific data

### Source 5: The Daily Economy Analysis (Journalism)
- URL: thedailyeconomy.org
- 28 homes rebuilt in first year out of 13,000+ destroyed
- Insurance identified as primary bottleneck, not permitting
- California insurance market collapsing — many homeowners uninsured or severely underinsured
- 2018 Woolsey Fire precedent: only 40% of 488 homes rebuilt years later
- CEQA reforms (AB 130, SB 131) approved June 2025 but effects unclear
- Construction cost inflation compounding the problem

### Source 6: NAHB Congressional Testimony (Industry/Government)
- Feb 19, 2025 testimony before Senate Environment and Public Works Committee
- Regulatory costs = 24% of final price of a new single-family home (2021 NAHB study)
- Federal permitting (CWA Section 404) takes 1+ year; ESA consultation adds more

### Source 7: SBA Disaster Relief Extension (Federal Government)
- Jan 7, 2026: SBA extends disaster relief deadlines, calls out "local bureaucrats stalling recovery"
- Federal frustration with local pace of recovery

## Math/Novel Analysis

### The Permit Time Budget
- Total time from fire to completion for the 28 homes: ~12 months
- Permit portion: ~100 days (3.3 months) = ~28% of total timeline
- Even if AI cut permit time to 10 days: total timeline shrinks by ~90 days
- But: 6,116 applications, only 2,894 permits issued. 3,222 applications (53%) still pending
- Of 2,894 permitted, only 1,420 (49%) under construction
- Of 1,420 under construction, only 28 (2%) completed

### The Real Bottleneck Cascade
1. **Insurance gap** — Many homeowners can't afford to rebuild (underinsured/uninsured)
2. **Construction cost** — Rebuild costs in Pacific Palisades far exceed pre-fire property values for many
3. **Labor shortage** — Not enough qualified contractors for 13,000+ concurrent rebuilds
4. **Permitting** — Actually moving faster than normal in fire zones (100 days vs. 8-24 months)

### Key Insight
Permits are the ONE part of the pipeline that's actually working faster than normal. AI tools may reduce the 80% deficiency rate (Surrey data) and cut resubmissions, but the bottleneck has already moved downstream.

## Skepticism
- Archistar is an Australian company; most US experience is recent
- Beta results in LA still took "up to 10 business days" — not exactly instant
- No published accuracy data or error rates for eCheck in LA deployment
- The tool only does pre-submission checks — doesn't replace human plan reviewers
- Political incentive to announce flashy AI solutions vs. harder insurance market reform

## Strongest Counterargument
Permit speed DOES matter at scale. If 80% of applications have deficiencies (Surrey data) and each resubmission adds weeks, the cumulative delay across 6,000+ applications is massive. AI pre-check could prevent thousands of rejected applications from ever entering the queue. The bottleneck may not be permitting *today*, but without AI it could become one as more insurance claims settle and construction demand spikes.

## Limitations
- LA County dashboard data is a snapshot; pipeline is dynamic
- No published data on Archistar's actual error rate or throughput in LA
- Insurance underwriting data is proprietary; underinsured percentages are estimates
- Surrey's 80% deficiency rate may not translate directly to LA fire zones (different codes)
