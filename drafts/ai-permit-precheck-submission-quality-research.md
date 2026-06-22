# Research: AI Permit Pre-Check Tools — The Submission Quality Problem

## Angle
Most building permit delays aren't caused by slow bureaucrats. They're caused by bad applications. In Denver, only 37% of permit applications are approved on the first try. In Surrey, BC, 80% of residential permit submissions have "significant zoning deficiencies" requiring an average of 1.6 resubmissions. AI tools like CivCheck and Archistar's PreCheck aren't replacing plan reviewers — they're catching the errors before the application enters the queue. The savings come from eliminating rejection cycles, not automating judgment.

## Journalist
Catherine "Code" Chen — policy, regulation, building codes

## Kill Test
Does this help someone building or buying a home? YES. If you're a homeowner planning an addition, or a small builder filing permits, knowing that AI pre-check tools exist (and which cities offer them) could save you weeks of back-and-forth and thousands in carrying costs.

## Primary Sources

### 1. PermitPlace 2026 State of Building Permits (March 2026)
- Source: permitplace.com, 741 cities across 44 states
- National average initial review: 22.9 days (median 14 days)
- Chicago slowest major metro: 92 days
- San Francisco: 60 days, Portland: 51 days
- Denver fastest: 2 days initial intake
- 18 cities at 180-day maximums
- Gap between published and actual timelines: 2-5x
- "The 8.9-day gap between mean and median reveals a significant right skew"

### 2. Denver CivCheck Deployment (PYMNTS, May 2026)
- 5-year, $4.6M contract with CivCheck (by Clariti)
- Only 37% first-try approval rate before AI
- Target: push to 80% first-try approval
- 180-day shot clock with $10K refund if missed
- Cut 59 budgeted positions (down to 251)
- "Most plan review delays start upstream, when submissions enter the queue incomplete" — Julia Richman, VP Govt Relations, Clariti
- Already cut single-family/duplex possession time 45% since 2023

### 3. Honolulu CLARITI + CivCheck (GovTech, June 2026)
- CLARITI system piloted Feb 2026: 70% reduction in residential permit processing times
- CivCheck integrating for front-end pre-check
- "More than 50% of building permit plans that come in, the quality is not good" — Dawn Takeuchi Apuna, DPP Director
- Described as "not unlike TurboTax" for permit applications

### 4. California/LA Fires Archistar eCheck (Gov.ca.gov, April 2025)
- Archistar eCheck provided free for LA fire recovery (Palisades, Eaton fires)
- Computer vision + ML + automated rulesets check designs against local zoning/building codes
- Partnership: State + Steadfast LA + LA Rises + Autodesk + Amazon
- Used by 25+ municipalities: Vancouver, Austin, Houston, Seattle, Colorado, BC, NSW
- LA beta testing launched July 2025 for Pacific Palisades single-family homes
- LA County passed Board Resolution for unified permitting authority

### 5. Archistar Platform Data (archistar.ai)
- 30+ cities globally implementing or piloting
- Up to 55% reduction in permit review cycles
- First submission quality boosted to 90%
- "50% time-savings from the zoning perspective" — unnamed city official
- Uses computer vision to read architectural drawings, maps against digitized codes

### 6. Surrey, BC (Archistar case study, March 2026)
- 80% of residential permit applications had "significant zoning deficiencies"
- Average 1.6 resubmissions per application
- "It's like 'spell-check' for zoning" — Jerome Thibaudeau, Surrey Planning & Dev
- Public launch March 10, 2026 for R3 Urban Residential
- Reports reviewed by Archistar's trained architects (Vancouver-based)

### 7. SolarAPP+ (NREL/DOE, 2023 performance data)
- 18,906 permits in 2023 (300% increase over 2021)
- Projects completed 14.5 days faster than traditional permitting
- Saved 15,400 staff hours in 2023
- Instant permit for code-compliant residential rooftop solar

### 8. Altamonte Springs, FL (HousingWire, Nov 2025)
- AutoReview.AI pilot (company since folded)
- "What used to take us a week took us three to four minutes" — Frank Martz, city manager
- Even found errors in the city's own code

### 9. Seattle Executive Order (HousingWire, 2025)
- Mayor Bruce Harrell signed executive order directing all development applications through AI pilot
- Dedicated Permitting and Customer Trust (PACT) team
- Full rollout expected 2026

### 10. UK Google DeepMind Prototype (The Sun, June 2026)
- Testing in 3 English councils: Barnet, Camden, Dorset
- Aims to halve household planning application processing from 8 to 4 weeks
- Triages applications, summarizes key info, provides initial assessment
- Created by government + Google DeepMind + Google Cloud + Faculty
- Nationwide rollout planned for next year if successful

### 11. DOE AI in Buildings Initiative (energy.gov, March 2026)
- Formal challenge targeting "automated design, physics-based modeling, rapid permitting, and optimized maintenance"
- Partnering with ML and agentic platform developers

## Original Contribution — Cost of a Single Rejection Cycle
Calculation: What does one permit rejection-and-resubmit cycle actually cost a residential builder?
- Denver avg permit review: assume 15-20 business days per cycle (initial + corrections)
- Construction loan interest: typical $500K-$700K loan at 8-10% = ~$110-$190/day
- Crew standby/reschedule: $500-$2,000 per delay event (trades won't hold dates)
- Architect/engineer resubmission: $500-$1,500 per revision
- Conservative single rejection cycle cost: $3,000-$8,000 for a typical residential project
- If 63% of Denver apps rejected on first try → most projects eating this cost
- At scale: Denver ~4,000 residential permits/year × 63% rejection × ~$5,000 avg = ~$12.6M/year in unnecessary friction costs for Denver alone

## Counterargument (at full strength)
AI pre-check works on standardized rules — setbacks, lot coverage, document completeness. It does NOT handle:
- Discretionary design review (aesthetic/neighborhood character)
- Complex engineering judgment (unusual structural loads, seismic, flood zones)
- Neighborhood objections and political considerations
- Code interpretations where reasonable people disagree
- The reviewer who's seen 10,000 plans and spots the "technically compliant but dangerous" design

The risk: cities use AI efficiency as cover for cutting staff (Denver already cut 59 positions). When the edge cases come — and they always come — the remaining reviewers are overwhelmed. AI handles the volume; humans handle the exceptions. If you cut the humans, you've automated the easy part and bottlenecked the hard part.

## Limitations
- PermitPlace data reflects published timelines, not actual. Real delays are 2-5x.
- CivCheck/Archistar deployment data is self-reported by vendors. No independent audit of "55% reduction" claims.
- SolarAPP+ data is from NREL (credible) but solar permits are structurally simpler than full building permits.
- Denver's $4.6M/5yr contract cost hasn't been benchmarked against actual savings.
- Surrey's 80% deficiency rate may not generalize to US jurisdictions with different code structures.
- No data yet on whether AI pre-check tools reduce the TYPE of errors that cause the longest delays (as opposed to the most frequent but quick-to-fix errors).
