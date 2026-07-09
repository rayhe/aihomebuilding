# Research: The Interest Clock on Construction Delays

## Core Thesis
Nobody has combined three public datasets to show what each day of construction delay actually costs a homebuyer in interest alone. The numbers are worse than the industry admits, and they compound in a way that punishes delays at the end of a project — when they're most common — far more than delays at the beginning.

## Key Data Sources

### 1. Census Bureau Survey of Construction (SOC) — 2024 Data
- Average single-family permit-to-completion: **9.1 months** (2024)
- Down from 2023 (9.6 months) but still ~2 months longer than 2015 (~7.2 months)
- Built-for-sale: 7.6 months
- Owner-built: 15.1 months  
- Hired contractor (custom): 12 months
- Regional variation: 7.8 months (South Atlantic) to 13.7 months (Middle Atlantic)
- Homes >4,000 sq ft: 10.7-16 months
- Source: eyeonhousing.org (NAHB analysis of Census data)

### 2. NAHB AD&C Lending Survey — Q1 2026
- Speculative single-family construction loan effective rate: **11.22%**
- Pre-sold single-family construction: **11.68%**
- Land acquisition: 9.36%, Land development: 10.15%
- 35% of builders use construction-to-perm loans for some production
- Source: housingwire.com reporting on NAHB data

### 3. NAHB Labor Shortage Impact Study (2025)
- Average construction time increase due to labor shortage: **1.98 months**
- 19,000 single-family homes NOT built in 2024 due to shortage
- Economic loss: $8.143 billion
- Smaller builders experience even greater delays
- Source: nahb.org

### 4. McKinsey / Industry Delay Statistics
- 98% of construction projects experience cost overruns, delays, or both
- 75% of construction projects are delayed (ScienceDirect)
- Large projects: 20% behind schedule on average
- Only 31% meet schedule, budget, and scope simultaneously
- Average project duration extends 37% longer than originally projected (North America)
- Source: openspace.ai aggregation

## Original Calculation (Novel Contribution)

### Daily Interest Cost
- Median new single-family home sale price: ~$420,000 (use Census/NAHB data)
- Typical construction loan: 80% LTC = $336,000
- At 11.22% rate: $336,000 × 0.1122 / 365 = **$103.27/day**
- At 11.68% (pre-sold): $336,000 × 0.1168 / 365 = **$107.50/day**

### The Draw Schedule Problem
Construction loans are interest-only, disbursed in draws:
- Draw 1 (Foundation): ~20% = $67,200 drawn → $20.66/day interest
- Draw 2 (Framing): ~25% = $151,200 cumulative → $46.47/day
- Draw 3 (Mechanicals): ~20% = $218,400 cumulative → $67.13/day
- Draw 4 (Finishes): ~20% = $285,600 cumulative → $87.78/day
- Draw 5 (Completion): ~15% = $336,000 cumulative → $103.27/day

KEY INSIGHT: Delays hurt more as the project progresses. A 30-day delay after Draw 1 costs ~$620 in interest. A 30-day delay after Draw 4 costs ~$2,633. The end of a project — when punch lists drag, inspections bottleneck, and weather catches up — is exactly when delays are most expensive. And most common.

### Aggregate Impact
- ~2 months average delay vs 2015 baseline
- At average draw of ~65% ($218K) over the delay period: ~$4,000 per home
- ~1,000,000 single-family starts/year
- Conservative aggregate: $4-6 billion/year in excess construction interest nationally
- This is pure carrying cost — doesn't include labor overtime, weather damage, price escalation, or rate lock extension fees

### Rate Lock Extension Risk
- Most rate locks are 60-90 days during construction (builder locks at contract signing or start)
- Extended construction-to-perm lock: typically costs 0.25-0.50% of loan amount per 30-day extension
- On a $350K mortgage: $875-$1,750 per month of delay BEYOND the original lock period
- Many builders pass this cost to the buyer

## AI Scheduling Tools Landscape
- ALICE Technologies: generative scheduling, mostly commercial ($100K+/year)
- Kaya AI: supply chain coordination, growing into residential, manages "billions in active projects"
- Buildots: camera-based progress tracking, ~$3-5K/month
- OpenSpace: 360° photo documentation for as-built vs. planned comparison
- UEL Study (Frontiers in Built Environment): Framework connecting risk detection to automated schedule adjustment — systematic review of 60 peer-reviewed studies. Gap: risk detection and scheduling systems don't talk to each other

## Residential AI Adoption Gap
- NAHB/IBS 2026: AI is "emerging" in residential but adoption is overwhelmingly in estimation and design, not scheduling
- The tools that could shave days off schedules exist but are priced for commercial ($3K-$100K/month)
- A custom home builder doing 5-10 projects/year can't justify $3K/month for scheduling AI
- The builders who need it most (small, 5-20 homes/year) can't afford it
- The builders who can afford it (production builders, 100+ homes/year) already have the process discipline to minimize delays

## Kill Test
Does this help someone building or buying a home? YES.
- Buyer: know what each month of delay costs you in interest; negotiate accordingly
- Builder: quantify delay cost for crews; make the ROI case for scheduling tools
- Custom homeowner: understand why the "almost done" phase is the most expensive to delay

## Journalist
Frank "The Foreman" DeLuca — this is pure project management. Process, timelines, cost analysis. His beat.

## Headline Ideas
- "Every Day Your Home Sits Unfinished Costs $103 in Interest. Nobody Told the Buyer."
- "Your Builder's Schedule Slipped Two Months. That Cost You $6,000 Before Anybody Picked Up a Hammer."
- "The most expensive phase of building your home is the one where nothing visible happens."
