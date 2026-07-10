# Research: AI Progress Verification vs. Draw Schedule Self-Reporting

## Angle
Your builder self-reports percent-complete to trigger draw payments. Nobody independently verifies those numbers until it's too late. AI-powered 360° progress tracking can now objectively measure what's actually built vs. what's claimed — and the gap is often alarming.

## Journalist
Frank "The Foreman" DeLuca — Project Management & Operations

## Key Sources & Data

### AI Progress Verification Tools
- **OpenSpace**: 95% verified accuracy (human-in-the-loop AI), 60% reduction in manual reporting, 40 billion sq ft captured, documents 25K sq ft in 10 minutes. 360° camera on hard hat → auto-mapped to plans → BIM comparison. Acquired Disperse for verified progress analytics. Trade contractors use it to validate work-in-place for billing. "It's the holy grail for trade contractors to have consistent data points... to identify your percent complete." Cleveland Construction deployed across entire portfolio for "effective two-way conversations with field team." (openspace.ai)
- **Buildots**: 90%+ task recognition, compares actual vs planned work down to task level, automated daily reports, subcontractor performance scoring, quantifies labor hours per task. Integrates with Procore, BIM 360, P6. (youtube.com/Quasa.io review)

### The Draw Schedule Problem
- AIA G702 form is the standard pay application — it has a percent-complete column that's **self-reported by the contractor** (multihousingnews.com)
- **80% of cost overruns occur during the final 20% of project completion** — late-stage issues: scope changes, inspection failures, quality corrections, scheduling pressure (Birmingham Group, 2026)
- WIP accounting: overbilling = billed > earned revenue = a liability. Common enough to be a standard accounting concept with its own line item. (constructioncostaccounting.com)
- **Rabbet case study**: Top-10 construction lender had a $44,842.32 draw disbursement made to borrower *without being logged against the loan*. Borrower got undocumented $45K and won't pay it back. Manual Excel tracking was the failure point. (rabbet.com)
- **California CSLB**: Contractors cannot collect payment for work they haven't completed or materials they haven't delivered. Down payment capped at 10% or $1,000 (whichever is less) for home improvement contracts. (CSLB bulletin)
- **Arizona AG (April 2026)**: Growing pattern of construction fraud targeting ADU projects — contractors collecting large deposits, never pulling permits, never breaking ground. Families losing up to $250,000. (azag.gov)

### The Verification Gap in Residential
- Commercial construction has professional inspectors, lender-required progress verification, and sophisticated draw management software
- Residential custom homes: typically the bank sends an appraiser for milestone inspections (foundation, framing, dry-in, final), but the appraiser visits for 15-30 minutes and checks broad categories, not task-level progress
- Between those milestone inspections, the GC's word is all the homeowner has
- Cost-to-cost percent complete method: costs incurred / total estimated costs = % complete. But **the GC controls both numbers** — the costs reported AND the total estimate

### The Math
- Average custom home build: $350,000-$750,000 (excluding land)
- Typical draw schedule: 5-7 draws tied to milestones
- If a GC overbills by 15% at the framing draw on a $500K project, that's $75,000 the homeowner has paid for work not yet completed
- If the GC defaults or abandons, the homeowner is paying a new contractor with money already spent on phantom progress

### Original Calculation Opportunity
- Calculate the "trust premium": what it costs a homeowner when the GC's self-reported 80% is actually 65%. On a $500K build with a 70% cost of construction, the overbill at 80% reported vs 65% actual = $52,500 in phantom payments
- Compare cost of AI verification (~$3-5K/month for Buildots, but that's commercial scale) vs. cost of even a 10% overbill

### Limitations
- OpenSpace and Buildots are primarily commercial-scale tools — pricing and setup may not fit a single residential project
- 95% accuracy is impressive but 5% error rate on a 200-task project = 10 tasks potentially misclassified
- Most residential GCs are honest — the problem is the system provides no verification mechanism, so the dishonest ones face no friction
- Photo-based verification can't assess quality of concealed work (framing behind drywall, plumbing in walls)

## Kill Test
Does this help someone building or buying a home? **YES.** If you're building a custom home on a draw schedule, you need to know: your builder's percent-complete claims are unverified, the tools to verify them exist but aren't standard, and you can negotiate photo documentation requirements into your contract before signing.
