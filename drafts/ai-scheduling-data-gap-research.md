# Research: The AI Scheduling Data Gap in Residential Construction

## Angle
nPlan trained its AI on 750,000 historical project schedules representing $2 trillion in construction spend. Your custom home builder has maybe 200 completed project schedules — ever. The AI scheduling revolution works brilliantly for billion-dollar infrastructure. For the person building your house, it's a statistical dead zone.

## Kill Test
Does this help someone building or buying a home? YES — helps homeowners understand why their builder's schedule is unreliable, why AI scheduling tools haven't fixed it, and what the realistic options are.

## Key Data Points

### The delay problem
- 98% of construction projects face delays (MDPI/Buildern 2025 data)
- Average project runs 37% longer than projected (North American data)
- 35.1% of residential building projects ran late in 2022 (SORCI Report)
- Average $750,000 build costs builder ~$670/day in delays (Association of Professional Builders / SORCI 2023)
- 48.3% of builders don't know their fixed expenses per job per day (SORCI 2023)
- Single-family home: avg 9.1 months start-to-finish (1.4 months authorization + 7.6 months construction), Census Bureau 2024 data
- Large projects typically 20% behind schedule, budget overruns up to 80%

### The AI tools and their data requirements
- **nPlan**: 750,000 historical schedules, $2T construction spend, $500B under active management. Sectors: highways, rail, public buildings, commercial, heavy infrastructure, oil & gas, utilities, data centers. NOT residential.
- **ALICE Technologies**: AI schedule optimization, focuses on large-scale construction
- **SmartPM**: Schedule diagnostics, forensic analytics, predictive performance — built for commercial/infrastructure
- **CMiC**: Enterprise ERP with AI forecasting — GCs and heavy highway firms

### The residential tool landscape
- **Buildertrend**: Drag-and-drop Gantt charts, task lists, multi-view calendars. No AI prediction.
- **CoConstruct**: Basic scheduling, shift planning, task assignments. No ML.
- **Procore**: Advanced project controls but targets larger commercial contractors.
- Construction management software market: ~$10B currently, expected $21B by 2030.

### The data gap (NOVEL ANALYSIS)
- nPlan needs 750,000 schedules to train its model. 
- Average custom home builder: completes 10-20 homes/year. Over 15 years = 150-300 project records.
- Even if you're a large regional builder (100 homes/year for 20 years) = 2,000 schedules.
- D.R. Horton (largest US builder): ~90,000 homes/year. They'd have meaningful data in 2-3 years.
- The problem: custom homes aren't standardized. A tract home schedule is transferable; a custom home on a hillside lot with a cantilevered deck isn't.
- nPlan's sectors listed: highways, rail, public buildings, commercial, heavy infrastructure, oil & gas, utilities, data centers. Residential is NOT listed.

### What actually works for residential (honest assessment)
- Weather-integrated scheduling (combine weather forecasts with critical-path schedules)
- Subcontractor reliability scoring based on builder's own historical data
- Simple rule-based alerts (if foundation pour delayed > 3 days, auto-reschedule framing)
- n8n/Zapier + Claude/GPT workflows: Connect weather API + scheduling tool + Slack for delay alerts
- The real residential scheduling problem isn't prediction — it's subcontractor coordination and no-shows

### Workforce/labor context
- Projected deficit of 499,000 construction workers
- Aging workforce, limited new skilled trades pipeline
- Wages rising for specific trades
- This CAUSES scheduling unpredictability — AI can't predict whether your electrician will show up

## Sources
1. Buildern (2025) — "Project Delays in Construction: Key Metrics for 2026" — 98% delays, 37% overrun
2. SORCI Report 2023 (Association of Professional Builders) — $670/day delay cost, 35.1% late, 48.3% don't know daily costs
3. Census Bureau (2024) — 9.1 months avg single-family construction time
4. nPlan.io — 750,000 historical schedules, $2T spend, sector list
5. CMiC Global (2026) — "How AI Improves Construction Forecasting to Reduce Delays"
6. MDPI Buildings journal (2024) — 98% delay rate, 20% behind schedule, 80% budget overruns
7. Schedule Training Hub (2024) — nPlan case study, SCS JV/HS2 project, £4.1B, identified 140 risk insights / 250 days delay / £120M cost

## Journalist
**Frank "The Foreman" DeLuca** — Project Management & Operations
- Methodical, patient, process-obsessed
- Twenty years of projects going sideways
- World-weary humor
- Thinks in timelines and critical paths
