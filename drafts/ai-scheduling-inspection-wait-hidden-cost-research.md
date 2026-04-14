# Research: AI Scheduling Tools Don't Count Inspection Wait Time

## Thesis
AI construction scheduling tools (ALICE, Procore Copilot, Outbuild) optimize task sequencing and resource allocation — but they model *work*, not *waiting*. A typical new single-family home requires 8-12 mandatory inspections, and most jurisdictions have 1-5 business day wait times per inspection request. That's potentially 40-60 business days of dead time per project that no AI scheduler accounts for. The constraint isn't sequencing logic — it's jurisdictional staffing levels that no algorithm can optimize.

## Journalist
Frank "The Foreman" DeLuca — Project Management & Operations

## Kill Test
Does this help someone building or buying a home? YES. Builders considering AI scheduling tools ($500-5,000/mo) need to understand that the biggest scheduling bottleneck is inspection wait time, which these tools can't solve. Homeowners need to understand that the 2-3 months of "delays" they experience aren't laziness — they're inspection queues.

## Primary Sources

### 1. Census Bureau Survey of Construction (2024 data, published Sep 2025)
- Average single-family home: 9.1 months permit-to-completion
- 1.4 months just waiting for authorization to start
- Built-for-sale homes: 7.6 months (fastest)
- Owner-built: 15.1 months (slowest)
- Pacific division: 10.8 months (CA, WA, OR)
- Middle Atlantic: 13.7 months (longest)
- This is ~2 months longer than 2015 average — "more stringent regulatory environment, elevated mortgage rates, shortage of skilled labor"
Source: https://eyeonhousing.org/2025/09/single-family-homes-are-built-faster-in-2024/

### 2. BD+C Survey of Contractors
- 87% of contractors reported experiencing construction delays
- 49% cited managing the schedule as a key challenge
- Delay drivers: Materials 71%, Weather 65%, Labor 38%, Subcontractor deadlines 24%, Safety 23%, Regulatory/code compliance 20%
Source: https://www.outbuild.com/blog/how-construction-delays-can-lead-to-additional-expenses

### 3. Florida Building Permit Delays 2026 (Freedom Code Compliance)
- Miami-Dade: 6-8 weeks plan review
- Every week of delay costs $5,000-$8,000+ in carrying costs on commercial, ~$30,000 total per single-family new construction
- Private providers can deliver in 24 hours vs weeks through building departments
- Virtual inspections eliminate scheduling delays
Source: https://fcc-website-main.up.railway.app/blog/florida-building-permit-delays-2026

### 4. NAHB Regulatory Cost Data (2021 study, cited Feb 2025)
- Regulatory costs: 24% of final price of new single-family home ($93,870 on average home)
- Fed permitting inefficiencies delay housing, raise costs, exacerbate affordability crisis
Source: https://www.nahb.org/blog/2021/05/regulatory-costs-add-a-whopping-93870-to-new-home-prices/

### 5. Procore AI Innovations (Groundbreak 2025)
- Procore launched AI scheduling assistants
- Focus: task optimization, resource leveling, progress tracking
- No mention of inspection scheduling or jurisdiction wait time modeling
Source: https://www.procore.com/press/procore-advances-the-future-of-construction-with-new-ai-innovations

### 6. Typical Residential Inspection Requirements (Portland/standard IRC jurisdictions)
Standard new construction inspections required:
1. Footing/foundation
2. Foundation wall
3. Slab/under-floor
4. Framing (rough)
5. Rough electrical
6. Rough plumbing
7. Rough mechanical/HVAC
8. Insulation
9. Drywall nailing (some jurisdictions)
10. Final building
11. Final electrical
12. Final plumbing
13. Final mechanical
Plus possible: erosion control, setback, energy compliance
= 10-14 inspections per typical new home

## Original Contribution (Novel Calculation)

### Inspection Wait Cost Calculator

**Inputs:**
- Average inspections per new home: 11 (conservative midpoint of 10-14)
- Average wait time per inspection request: 3 business days (common for suburban/urban jurisdictions)
- Total inspection wait: 11 × 3 = 33 business days = ~6.6 weeks
- Construction loan average: ~8.5% on $400K draw (typical for $500K home, 80% LTV)
- Daily carrying cost: ($400K × 0.085) / 365 = $93.15/day
- Insurance + taxes during construction: ~$30/day
- Total daily carrying: ~$123/day
- **Total inspection wait cost: 33 days × $123 = $4,059 per home**

For higher-cost markets (CA, NY):
- $800K draw at 9%: ($800K × 0.09) / 365 = $197/day
- Insurance/taxes: ~$55/day
- Total: $252/day × 33 days = **$8,316 per home**

For worst-case jurisdictions (5 days per inspection):
- 11 × 5 = 55 business days = 11 weeks
- $252/day × 55 = **$13,860 per home**

**Key insight: AI scheduling tools optimize the work between inspections. Nobody optimizes the wait.**

## Strongest Counterargument
Experienced builders already know inspection waits and bake them into schedules manually. AI scheduling isn't supposed to solve government bottlenecks — it's supposed to optimize what builders control. The real value of AI scheduling is preventing cascading delays from missequenced trades, which can cost far more than inspection waits. The inspection wait argument is attacking a strawman — nobody claims AI scheduling fixes government bureaucracy.

## Limitations
- Inspection wait times vary enormously by jurisdiction (same-day in some rural areas, 2+ weeks in overloaded cities)
- The calculation assumes inspections are sequential/blocking, but good PMs can overlap some (rough electrical + plumbing + HVAC in one call)
- Construction loan terms vary widely; carrying cost math uses averages
- No comprehensive national dataset on inspection wait times exists — this is based on contractor reports and jurisdiction-specific data
- AI scheduling tools are evolving rapidly; some may add inspection wait modeling soon

## Angle
Frank DeLuca's been building for 20 years. He's seen the AI scheduling demos — slick timelines, optimized trade sequencing, compressed critical paths. And every one of them shows a clean 7-month build. None of them model the 6 weeks you spend staring at your phone waiting for the inspector to call back.
