# Research: AI Permit Pre-Screening Coverage Gap

## Angle
AI permit pre-screening tools (Archistar eCheck, CivCheck, Blitz AI) achieve high accuracy on the checks they run — 87% completeness, 92% compliance in Seattle's pilot. They can process a 172-page construction document set in 3 minutes that would take a human reviewer 2 days. Cities are adopting them: LA, Denver, Austin, Seattle, Naples, Honolulu, Bellevue. But accuracy ≠ coverage. The tools catch only a fraction of total corrections needed. If pre-screening misses even one correction, the applicant still goes through the same number of review cycles. The technology works. The problem is the regulatory complexity underneath it.

## The Asymmetry
An AI system can check a residential building plan against zoning setbacks, height limits, lot coverage, and window placement in minutes (Archistar eCheck). It achieves 80% accuracy out of the box, 90%+ after municipality-specific training. But Seattle's building code alone has thousands of compliance requirements, many of them "conceptually complex and likely difficult to automate" (Seattle IP report, June 2026). Completeness checks (does the application have all required documents?) are more automatable than compliance checks (does the design meet all code requirements?). The sheer quantity of compliance checks means AI pre-screening rarely eliminates an entire review cycle — and it's eliminating review cycles that saves time, not catching individual errors.

## Key Sources

### 1. PermitPlace 2026 State of Building Permits (March 2026)
- 741 cities analyzed, 44 states
- National average initial review: 22.9 days, median: 14 days
- Published timelines are 2-5x shorter than actual commercial project timelines
- Chicago slowest major metro: 92 days initial review
- San Francisco: 60 days, Portland: 51 days
- Denver fastest: 2 days, Houston: 2 days, Miami: 2 days
- California averages 21.1 days across 160 cities — extreme variance (1 day to 180 days)
- 18 cities list 180-day timelines (statutory maximums)
- Source: permitplace.com/state-of-building-permits-2026/

### 2. Seattle CivCheck AI Pre-Screening Pilot (March 2025 – Oct 2025, report June 2026)
- Tested on small residential projects: townhomes, single-family homes, ADUs
- Completeness check accuracy: 87%
- Compliance check accuracy: 92%
- Key finding: accuracy matters, but COVERAGE matters more for time savings
- "Removing a review cycle requires the pre-screening to flag every single correction up front"
- "If the pre-screening only catches some of the corrections needed, then the applicant may end up going through the same number of review cycles"
- Completeness checks (smaller set of requirements) more automatable than compliance checks (thousands of building code requirements)
- "Some of those requirements are conceptually complex and likely difficult to automate"
- Interviewed 20 former applicants and 12+ staff members
- Source: buildingconnections.seattle.gov, June 17, 2026

### 3. Archistar / eCheck Technology
- AI PreCheck: computer vision, ML, automated rulesets against local zoning + building codes
- 80% accuracy out of box, trained to 90%+ with municipality-specific tuning
- ICC (International Code Council) partnership for standardized code compliance
- 25+ municipalities worldwide including Vancouver, Austin, LA
- Austin: 5-year contract after 3-month pilot; initial rollout limited to single-family residential
- LA: Newsom announced free Archistar tool for LA fire rebuilding (April 2025)
- 172-page document processed in 3 minutes vs. 2 days manual review
- "We don't profess to say that our AI solution is perfectly accurate out of the box, which is why the human in the loop is still critical"
- Source: archistar.ai/blog/real-ai-permitting/

### 4. Denver CivCheck Implementation (March 2026)
- 5-year, $4.6M contract with CivCheck (Clariti)
- Pre-flags missing documents, incomplete fields, application errors before reaching human reviewers
- Denver already cut processing time for SFR/duplex by ~45% since 2023
- Set 180-day "shot clock" with $10K refund if missed
- Cut 59 budgeted positions from Community Planning dept for 2026 (251 total)
- "Most plan review delays start upstream, when submissions enter the queue incomplete or inconsistent" — Julia Richman, Clariti VP
- Source: pymnts.com, housingwire.com

### 5. Naples, FL — Blitz AI + CityView (2026)
- First Florida city to implement Blitz AI for automated compliance review
- Integration with CityView permitting system
- Accelerating review, surfacing compliance gaps early
- Source: housingwire.com

### 6. Cost of Permit Delays
- Virginia homebuilding firm: permit delayed because county staffer resigned mid-review and didn't hand off
- "Different reviewers may interpret the same code differently" — subjectivity problem
- Developers build long delays into project timelines; smaller projects avoided entirely
- Carry costs, opportunity costs passed to homebuyers
- Source: Independent Institute, March 2026

### 7. Aspen, CO — Extreme Example
- Major new residential permit: 16-18 weeks for Round 1 review alone
- Each additional review round: 8-10 weeks
- Simple change orders: 8-10 weeks
- Total timeline for a major residential project: easily 6-12 months in permitting alone
- Source: aspen.gov, updated July 2026

## Kill Test
Does this help someone building or buying a home? YES.
- Homeowners/builders need to understand what AI pre-screening can and can't do for their permit timeline
- If you're in a city that's adopted CivCheck or Archistar, you should use the pre-screening — but don't expect it to eliminate review cycles
- The real savings come from submitting a cleaner application, not from faster review
- Understanding the coverage gap helps set realistic timeline expectations

## Journalist
Catherine Chen — policy, regulation, legal analysis. This is about the gap between AI capability and regulatory complexity.

## Headline Options
1. "An AI Checked Your Building Plans Against the Zoning Code in Three Minutes. The City Reviewer Who Checks the Other 2,000 Rules Still Needs Eight Weeks."
2. "Seattle's AI Permit Tool Caught 92% of Compliance Errors. The Other 8% Still Cost the Applicant Three Months."
3. "AI Pre-Screens Your Building Permit Application in Minutes. It Catches Half the Problems. The City Still Needs the Same Number of Review Cycles."

## Draft Notes
- Lead with a specific permit delay story (Virginia company staffer who quit mid-review)
- Introduce the AI tools as a real solution — they work
- The pivot: accuracy ≠ coverage, coverage ≠ time savings
- Seattle data is the strongest evidence — government's own pilot with honest assessment
- Close with the real problem: building codes are so complex that automating compliance is a multi-year project, and simplifying the codes would help AI work better
