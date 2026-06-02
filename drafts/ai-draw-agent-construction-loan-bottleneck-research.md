# Research: AI Draw Agents Are Unclogging Construction's Biggest Cash Flow Bottleneck

## Journalist: Frank "The Foreman" DeLuca
## Beat: Project Management & Operations
## Article #327

## Angle
AI agentic systems are automating construction loan draw reviews — the single most frustrating cash flow chokepoint in residential building. Built Technologies' Draw Agent processes draws in 3 minutes that took humans 20-40 hours. For builders who've been playing "Peter pays Paul" with project funds for decades, this is the first technology that attacks the financial plumbing, not just the physical plumbing.

## Kill Test
Does this help someone building or buying a home? **YES.** Draw delays cascade into everything: your contractor can't pay subs, subs leave for other jobs, your project timeline slips, carrying costs mount. If you're building a custom home with a construction loan, faster draws = fewer delays = lower total cost.

## Primary Sources

### 1. Built Technologies — Draw Agent (2025-2026)
- **Source:** Built Technologies press release (BusinessWire, Nov 2025) + HousingWire coverage (May 2026)
- **Platform:** 185,000 contractors, partnerships with US Bank and Citi
- **Draw Agent stats:**
  - 95% time reduction on draw reviews (20-40 hours → 3 minutes)
  - 60% acceleration in draw turn time (borrower request to funding)
  - 400% increase in risks detected vs human-led reviews
  - 99%+ accuracy in production
- **Three-stage rollout:** Audit (read-only analysis) → Assist (AI completes select tasks, human approves) → Automate (full autonomous review/approval)
- **Thomas Schlegel, VP Engineering:** "Over that eight-year process, we've been making incremental improvements... Last year was a watershed moment for the capabilities of these models."
- **Key insight (Schlegel):** "For the bank, that money, once those construction loans are originated, goes into a state that's known as committed, but it is not funded. When the money is committed to a customer, you cannot use it for anything else, but until it's funded, you're also not collecting interest."
- **Key insight (Schlegel):** "It's a very cash flow driven industry, and the biggest risk to any project is that your builder has to go to another project to get paid. And very frequently, builders are using money from Peter to pay Paul, and that's when things come sideways."

### 2. MightyBot — AI Exoskeleton Architecture
- **Source:** MightyBot case study (Built x MightyBot)
- Built in 3 months from concept to production using daily engineering sprints
- "AI exoskeleton" wraps around Built's existing loan management platform — no re-architecture needed
- Page-by-page document classification: AIA G702 applications, G703 continuation sheets, conditional lien waivers, inspection reports, insurance certificates
- Handles mixed-format documents, rotated pages, poor scan quality
- Reversible: can be turned off without disrupting core operations

### 3. Industry Context
- **Typical construction draw timeline:** 7 business days (industry standard per HousingWire)
- **Draw package contents:** Invoices, lien waivers, inspections, photos, plans, budgets (hundreds of documents per draw)
- **Construction is cash-flow driven:** builders often use revenue from one project to fund another

### 4. Proptech VC Signal (May 2026)
- **Source:** Proptech Briefing, May 2026 (Michael Bristow, LinkedIn)
- Pi Labs' 14th Growth Programme cohort explicitly built around "agentic AI across the construction lifecycle"
- Five startups: Veridue, Bite, AutoSitu, Movable, Unbane
- Signal: "the next wave of value is expected to come from AI that executes real work across construction and real-asset workflows, not just assists with analysis"

## Original Contribution (Required)
Calculate the dead capital cost of slow draws:
- Average US new home construction loan: ~$350,000 (NAHB data)
- At 7% interest, each day of "committed but unfunded" costs the lender ~$67/day in lost interest
- For a 7-draw project with 7-day delays each: 49 days × $67 = ~$3,283 in dead capital cost per loan
- With 185,000 contractors on Built's platform alone, the aggregate float is enormous
- For the homeowner: each week of draw delay adds carrying costs (lot interest, insurance, opportunity cost)

## Strongest Counterargument
- AI making financial decisions about residential construction carries systemic risk. If Draw Agent approves a draw that should have been flagged (missing lien waiver from a major sub, insurance lapse), the downstream liability hits the homeowner — not the AI.
- The 400% increase in "risks detected" could include false positives that slow down legitimate draws
- Trust gap: Schlegel himself notes "not everyone fully trusts the technology yet"
- Concentration risk: if one AI system handles a significant portion of US construction lending draws, a systematic error could cascade

## Limitations
- All performance metrics come from Built Technologies (no independent third-party audit)
- 99%+ accuracy sounds impressive but at scale (thousands of draws monthly), even 0.5% errors = significant dollar amounts
- No data on false positive rates or the cost of unnecessary risk flags
- The three-stage rollout provides safety, but we don't know what percentage of customers have reached "Automate" mode
- No comparison with competing systems (e.g., Rabbet, Mosaic) to establish whether Built's numbers are unique or industry-standard
