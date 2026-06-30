# Research: AI Reading Construction Daily Logs for Dispute Prevention

## Angle
Your superintendent writes a daily log. It says "waiting on engineer" three days in a row. Nobody flags it. Six months later, that phrase shows up in an arbitration filing worth $340,000. An AI would have caught it on day two.

Construction daily logs — site diaries — contain predictive signals about delays, disputes, and compensation events. But they're written in shorthand, filed in binders or scattered across apps, and nobody reads them systematically until a dispute lands in arbitration. AI natural language processing can read them in real time and flag patterns before they become claims.

## Journalist
Frank "The Foreman" DeLuca — Project Management & Operations. This is his beat: process, documentation, the grinding mechanics of project delivery.

## Primary Sources

### 1. HKA CRUX Insight 2024 Report
- Analysis of 2,002 projects across 107 countries, combined CapEx of $2.25 trillion
- **$84.40 billion in total disputed sums** across those projects
- Average cost overruns: **33.2% of project budgeted CapEx**
- Average schedule overruns: **16 months (66.5% over planned schedule)**
- Source: Lexology / HKA (global construction consultancy)

### 2. Currie & Brown Construction Certainty Index 2025
- Surveyed 1,000+ decision-makers managing construction pipelines averaging $12.9 billion
- **$2.5 trillion in projected construction activity erased** by uncertainty in past year
- Average 13.7% financial loss on annual construction pipeline
- 24% of projects cancelled, 32% scaled down, 29% delayed
- Only 1 in 5 leaders expressed full confidence in delivering within budget

### 3. National Academies – Dispute Resolution
- Disputes arise in **10-30% of all construction projects**
- **1 in 4 construction projects has a claim**
- Transactional costs for resolving disputes: **$4-12 billion/year (US)**
- Includes lawyers, claims consultants, lost productivity, broken relationships

### 4. NEC Contract Time-Bar Mechanism
- Under NEC3/NEC4, contractor must notify compensation events within **8 weeks** of awareness
- Miss the deadline → **complete bar** to claiming additional time or money
- Even for employer breaches of contract
- This is the mechanism that makes diary quality existential — a "revised drainage layout" noted in a diary but not formally notified as a compensation event becomes unrecoverable money

### 5. Gather AI (gatherinsights.com) — Real Product
- UK-based AI site diary platform used by Balfour Beatty, Costain, Network Rail, Siemens, Murphy, Amey
- QS AI Agent reads every diary entry, cross-references contract clauses (NEC4)
- Flags compensation events before notice periods expire
- **Results:** TfL 4LM project: 11% cost reduction. Circet: 100+ hours/month saved. Costain Tideway: 12% schedule saving and ahead-of-schedule handover
- 64% of diary fields pre-populated from programme
- Voice-to-text, offline capture, GPS-tagged records

### 6. UEL Framework Study (Dr. Jawed Qureshi, 2026)
- Published in Frontiers in Built Environment
- Systematic review of 60 peer-reviewed studies on AI in construction management
- Key insight: Risk detection AI and schedule optimization AI both exist — nobody connects them
- "Projects generate enormous amounts of warning data every day — safety alerts, design clashes, supply delays — but nothing in the schedule actually changes when these signals appear"

### 7. Michigan Tech / Hong Kong Automated Daily Report Study (2024)
- Published in Automation in Construction journal
- Framework: Computer vision analyzes site video → ChatGPT generates daily reports
- Validated on real construction site in Hong Kong over one month
- Shows automated generation of daily reports from video footage is technically feasible

### 8. AI Cost Prediction Models (MDPI systematic review)
- 18 studies demonstrated AI for cost prediction
- ANN model: R² = 0.9913, RMSE = 0.021 (Arabiat et al.)
- Tabu Search + ANN: R² = 0.9385 for both cost and time overrun prediction
- But models rely on structured quantitative data — daily log text analysis is the frontier

### 9. NAHB Tariff Impact (2025)
- Latest tariffs increased construction costs by **$10,900 per home** (25% on steel/aluminum, 145% on Chinese imports)
- This means change orders and cost disputes will spike — making diary documentation even more critical

## Original Contribution
Nobody has cross-referenced the HKA $84.4B dispute data with the NEC time-bar mechanism to calculate the cost of *missed notifications specifically*. If even 5% of disputed amounts were lost to missed notification deadlines (a conservative estimate given that the NEC time-bar is absolute), that's $4.2 billion left on the table globally because someone didn't read a diary entry and file a notice.

For residential: US residential construction spending is ~$900B/year. At the industry average 33.2% cost overrun rate, that's ~$300B in residential overruns. Most of these are change orders, scope creep, and undocumented delays. An AI that catches "waiting on engineer" on day 2 instead of day 14 saves the cascade effect.

## Kill Test
Does this help someone building or buying a home? YES.
- **GC running $2-5M residential projects:** Know that your daily log is a legal document. AI can flag when your super's notes contain early warning signals of a dispute.
- **Homeowner:** Understand why your builder's documentation quality directly affects whether cost overruns get absorbed or disputed.
- **PM/Super:** The 20 minutes you spend on a daily log has a measurable ROI when it prevents a $50K change order dispute.

## Limitations to Acknowledge
- Gather's results are from UK infrastructure (NEC contracts) — US residential uses AIA contracts with different notification mechanics
- The 33.2% overrun figure is from global projects averaging $1.28B CapEx — residential is smaller scale
- No published study quantifies the specific percentage of disputes caused by missed notification deadlines (the 5% estimate is mine)
- AI diary analysis requires structured digital input — many residential projects still use paper logs or WhatsApp

## Strongest Counterargument
A superintendent on a $3M custom home doesn't need AI to read their diary — they need to write a better diary. The problem isn't detection; it's that small residential projects don't have dedicated documentation staff. An AI reading garbage-in produces garbage-out. The solution is training, not technology. (Counter: the Gather data shows that when you make documentation 5 minutes instead of 30 minutes, compliance goes up — the AI isn't replacing judgment, it's reducing friction.)
