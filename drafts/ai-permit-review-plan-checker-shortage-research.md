# Research: AI Permit Review vs. Plan Checker Shortage

## Angle
Cities are losing experienced plan reviewers to retirement (54% over 55). Permit backlogs cost homeowners $31K+ per home. AI tools like CivCheck and Archistar PreCheck are cutting review times from 60-90 minutes to 15-20 minutes. But most cities haven't adopted them. The bottleneck isn't technology — it's institutional inertia.

## Journalist
Catherine "Code" Chen — Policy & Regulation

## Kill Test
Does this help someone building or buying a home? YES. If you're waiting 4+ months for a permit, this explains why, what it costs you, and which cities have fixed it.

## Primary Sources

### 1. Honolulu DPP / CivCheck Partnership
- Source: GovTech (Jan 2026), Route Fifty (May 2025)
- Pre-screening wait: 6 months (2022) → few days (2025) via RPA automation
- CivCheck AI: review time per application 60-90 min → 15-20 min
- CivCheck launched Dec 2023 partnership; optional, phasing to mandatory
- 174 projects in prescreen with ~7 day wait (vs 6 months pre-automation)
- CEO Dheekshita Kumar: "designed to augment plan reviewers, not replace them"
- CivCheck captures senior reviewer knowledge to train junior staff
- "Human-in-the-loop" — AI suggests, human decides

### 2. Austin TX Carrying Costs (City of Austin 2023 Site Plan Review Report, p.15)
- Single-family home carrying cost: $9,700/month during permitting delay
- Multi-family development: $546,000/month
- Source: City of Austin Development Services, EDIMS document #414213
- Archistar eCheck formally adopted as pre-check layer for single-family homes

### 3. Washington State BIAW Permitting Delay Study
- Average permit delay statewide: 6.5 months
- Total holding cost per delay: $31,375 per home
- NAHB: every $1,000 added → 2,200 families priced out of homeownership
- 69,025 Washington families priced out by average delay
- Up from 57,855 in March 2022
- Causes: staffing levels, experience gaps, redundant processes, bottlenecks

### 4. ICC Workforce Survey (2014-2017)
- 54% of code officials over age 55
- "Silver tsunami" of retirements in building departments
- SAFEbuilt: losing 1-2 key staff can cause longer turnaround, project delays
- New hires take years to fully learn code interpretation

### 5. Archistar PreCheck (formerly eCheck)
- Computer vision + ML + deterministic rules
- Parses architectural drawings: setbacks, heights, lot coverage, window placement, energy specs
- Maps against city-specific zoning and building regs
- Produces standardized compliance report in minutes
- No hallucinations due to deterministic rule layer
- Source: Archistar blog, Nov 2025

### 6. Additional Cities
- Bellevue, WA: Govstream.ai for AI permitting
- Louisville, KY: piloting AI permitting
- Naples, FL: adopted AI for plan review (HousingWire)
- Jeff Bezos at America Business Forum: suggested AI instant permit decisions
- Miami Mayor Suarez: daily carrying cost $200K-$400K for big buildings
- LA: permitting can take 1+ year

### 7. Architecture 2030
- Global building floor area expected to double 2020-2060
- "Adding an entire New York City to the world, every month, for 40 years"

## Original Contribution
Nobody has calculated: if every US city adopted Honolulu's model (75% review time reduction), how many staff-hours and carrying costs would be saved nationally. I'll estimate based on Census permit data + average review times.

## Strongest Counterargument
AI can check objective code requirements (setbacks, heights, lot coverage) but struggles with subjective judgment: design review, neighborhood compatibility, variances, conditional use permits. The hardest permit decisions are judgment calls, and those still need experienced humans. Also: liability — if AI misses a code violation, who's responsible?

## Limitations
- ICC workforce data is from 2014-2017; current retirement rate likely worse but no updated survey
- CivCheck/Archistar results are self-reported or company-provided; no independent audit of accuracy rates
- Carrying cost estimates vary by market — Austin and Seattle are high-cost; cheaper markets see smaller dollar impacts
- "15-20 minute" review times are for residential permits specifically, not complex commercial
