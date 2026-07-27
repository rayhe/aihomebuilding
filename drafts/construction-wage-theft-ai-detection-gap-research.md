# Research: Construction Wage Theft AI Detection Gap

## Core Thesis
Construction wage theft costs U.S. workers ~$50 billion/year — more than all robberies, burglaries, and car thefts combined. AI tools now exist that can detect violations from paystub photos trained on 365,000+ federal enforcement cases. But these tools are being built for insurance auditors and employers, not for the workers losing the money. Federal enforcement has collapsed to a 52-year low. The residential construction sector is ground zero for misclassification and wage theft, yet the homeowner building or buying a house has no visibility into whether their project is being built by exploited labor.

## Key Data

### Scale of the Problem
- **$50 billion/year** total wage theft in US (Economic Policy Institute)
- **$15 billion/year** from minimum wage violations alone in 10 most populous states (EPI)
- **$12 billion/year** from worker misclassification specifically in construction (TCF study)
- **2.1 million** construction workers illegally misclassified as independent contractors
- **$2,634** average annual wage theft loss per low-wage worker (EPI study: NYC, Chicago, LA)
- **2 out of 3** low-wage workers experience at least one pay violation per week
- Construction is the #1 industry for misclassification (50% of audited MA construction employers committing violations)

### Enforcement Collapse
- **611 federal WHD investigators** as of May 2025 — 52-year low (Rutgers/Northwestern)
- **1:278,000** ratio of investigators to workers
- Down from peak of 1,232 investigators in 1978
- DOL cited ~8,500 employers for $287 million in 2019 — rarely punishes repeat offenders
- $933 million recovered in 2012 from private lawsuits + agency complaints — vs $50B actual losses (1.9% recovery rate)

### AI Tools That Exist
1. **PaySnap** — Gemma 4 fine-tuned on 365,393 real DOL enforcement cases
   - Reads paystub photos via multimodal AI
   - Detects overtime violations, illegal deductions, minimum wage violations
   - Works in 11 languages (critical for construction workforce)
   - Runs on-device (3.4GB, phone-capable)
   - Free, open-source
   
2. **¡Reclamo!** (Justicia Lab) — Wage theft documentation tool for undocumented workers
   - Calculates stolen wages, generates legal complaint letters
   - Designed for non-lawyers and advocates
   - "A complaint letter sent to the offending employer is often enough to get wages returned"

3. **Insurance AI (Nomad Data Doc Chat)** — Enterprise fraud detection for SIU investigators
   - Detects payroll fraud, misclassification rings, vendor clustering
   - Identifies networks of subcontractors sharing addresses/bank accounts
   - Cross-checks certified payroll against actual payments
   - NOT available to workers — built for insurance companies

4. **DOL AI Timekeeping Warning** — AI monitoring tools can CAUSE wage theft
   - AI that tracks "active" vs "idle" time can incorrectly categorize compensable work
   - Keystroke/eye movement monitoring "not determinative of hours worked" per DOL guidance

### Residential Construction Connection
- Misclassification gives cheating contractors a 20-30% cost advantage over honest ones
- When workers are misclassified: no workers' comp, no OSHA coverage, no unemployment insurance
- Homeowner liability if uninsured worker is injured on their property
- Quality risk: underpaid, unprotected workers → corners cut → defects
- The cheapest bid often correlates directly with labor exploitation

### Sources
1. Economic Policy Institute, "An Epidemic of Wage Theft" — $50B estimate
2. The Century Foundation, worker misclassification study — 2.1M construction workers, $12B/year
3. Rutgers Workplace Justice Lab / Northwestern — WHD staffing at 52-year low (611 investigators)
4. UMass Labor Center — MA construction misclassification study (50% employer violation rate)
5. ABC (Associated Builders & Contractors) — $50B/year, $2.7T industry context
6. PaySnap (dev.to) — 365,393 DOL cases, Gemma 4, open source
7. Fast Company, ¡Reclamo! — wage theft app for undocumented construction workers
8. Perkins Coie, DOL AI guidance — AI timekeeping wage-hour risks
9. Nomad Data — insurance AI fraud detection for construction payroll

## Journalist: Marcus Washington
Beat: Workforce & Labor. Investigative, human-centered. Heavy on labor statistics. Union family background — respects the craft, worries about the workers.

## Headline Options
1. "The Framer Who Built Your Walls Lost $2,634 Last Year to Wage Theft. An AI Can Read His Paystub. He Doesn't Know It Exists."
2. "Construction Workers Lose $50 Billion a Year to Stolen Wages. There Are 611 Federal Investigators. An AI Just Learned from All 365,000 Cases."
3. "Your Builder Won the Bid Because His Workers Lost $12 Billion. An AI Catches It From a Paystub Photo. The Workers Can't Find It."
