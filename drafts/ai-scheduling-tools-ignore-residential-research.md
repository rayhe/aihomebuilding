# Research: AI Scheduling Tools Were Trained on Skyscrapers. Your Custom Home Isn't in the Dataset.

## Angle
AI construction scheduling has exploded — nPlan trained on 750,000 historical schedules ($2T+ in spend), ALICE simulates millions of sequencing options, Autodesk Build has schedule tools. But these platforms are built for and trained on commercial/infrastructure projects (highways, rail, public buildings, commercial towers, oil & gas). Residential construction — 1.3M+ single-family starts per year — is essentially invisible to these models. Meanwhile, residential builders use Buildertrend ($299/mo) or CoConstruct ($99/mo) for basic task management, not predictive AI. The "AI scheduling revolution" skipped the biggest construction sector by volume.

## Kill Test
Does this help someone building or buying a home? YES. If you're a custom home builder or owner-builder, this tells you:
1. Why the AI scheduling tools you've heard about won't help you (they weren't trained on your project type)
2. What the actual cost of delay is for a single-family home (novel calculation)
3. What tools actually exist at residential scale, and their limitations

## Key Data Points

### Census Bureau / NAHB (Survey of Construction, 2024 data)
- Average single-family home: 9.1 months permit-to-completion (7.6 months construction, 1.4 months authorization)
- Built-for-sale homes: 7.6 months total (fastest)
- Owner-built homes: 15.1 months (slowest — nearly 2x built-for-sale)
- Contractor-hired homes: 12 months
- Regional variance: Middle Atlantic 13.7 months, South Atlantic 7.8 months
- Source: https://eyeonhousing.org/2025/09/single-family-homes-are-built-faster-in-2024/

### Weather Delays
- 45% of construction projects worldwide experience weather-related delays (Archdesk/industry data)
- A single lost day on a large project costs ~$250K (commercial scale)
- Weather-related delay research: Schuldt et al. (2021), "Weather-Related Construction Delays in a Changing Climate," Sustainability 13(5):2861
- Source: https://www.mdpi.com/2071-1050/13/5/2861

### AI Scheduling Tools (Commercial Scale)
- **nPlan:** 750,000 historical schedules, $2T+ construction spend, clients include Skanska, BAM, Shell, Google, HS2, Network Rail. Focus: infrastructure, commercial buildings, heavy civil.
- **ALICE Technologies:** Generative scheduling, millions of sequencing simulations, DCMA 14-point checks. Named Top Preconstruction Tech 2025 by BuiltWorlds. Clients: Hawaiian Dredging. Enterprise pricing (not published).
- **Autodesk Build:** Schedule tool with delay prediction, but designed for Autodesk Construction Cloud ecosystem (commercial GCs).
- None of these tools publish residential housing data in their training sets.

### Residential Project Management Tools
- **Buildertrend:** $299/mo, scheduling with dependencies across 500+ tasks, 94% of surveyed builders report improved on-time completion within 6 months. 1M+ users, 100+ countries.
- **CoConstruct:** $99/mo, focused on client communication (73% reduction in selection-related communication). Better for <20 homes/year.
- Neither offers predictive AI for schedule delays. Both are task management, not forecasting.

### Construction Delay Cost (Novel Calculation for Residential)
Average custom home: $500K build cost, 9 months construction
- Construction loan interest: ~7.5% on average draw (~$250K average balance) = ~$51/day
- Property tax: ~1.2% of land value (~$200K in many markets) = ~$6.58/day
- Builder's risk insurance: ~$2,500/year = ~$6.85/day
- Builder overhead (superintendent, trailer, utilities): ~$300-500/day
- Homeowner temporary housing (if selling existing): ~$100-150/day (rent)
- Total carrying cost per delay day: ~$465-715 (homeowner perspective), $365-565 (builder overhead)
- One month of delay: $13,950-$21,450

### The Gap
- nPlan's 750K schedules: ~0 are residential custom homes
- Residential builders in NAHB surveys: 65% use some form of software, but only for scheduling (not prediction)
- HousingWire reports residential contractors remain "AI-skeptical" — early adoption is minimal

### Strongest Counterargument
Residential construction is inherently less predictable than commercial because:
1. Custom homes have unique designs (no two floor plans identical), making pattern-matching harder
2. Subcontractor pools are smaller and less reliable (1-5 person crews vs. union shops)
3. Change orders are client-driven and unpredictable
4. The data doesn't exist in structured form — residential daily logs are text messages, not Primavera P6 exports
Counter-counterargument: That's exactly why AI could help — the chaos is the opportunity, not the obstacle. But the training data problem is real.

### Limitations
- Carrying cost calculation uses national averages; varies dramatically by market (Bay Area vs. rural Tennessee)
- nPlan and ALICE don't publish model architecture or training data composition — "no residential data" is inferred from client lists, marketing, and absence of residential case studies
- Buildertrend's "94% improved on-time completion" is self-reported survey data, not independently audited
- We couldn't access ASCE paper on NLP daily log analysis (paywalled)

## Journalist
Frank "The Foreman" DeLuca — project management, operations, scheduling. Methodical, patient, world-weary humor.

## Sources
1. U.S. Census Bureau Survey of Construction (2024 data) via Eye on Housing / NAHB
2. nPlan.io — product page, training data claims (750K schedules, $2T spend)
3. ALICE Technologies — product page, BuiltWorlds 2025 recognition
4. Archdesk — weather delay data (45% of projects), schedule risk analysis
5. ConstructionBids.ai — Buildertrend vs CoConstruct comparison (Feb 2026)
6. Schuldt et al. (2021) — weather-related construction delays systematic review
7. Incora Software — AI scheduling agents in construction overview
