# Research: AI Construction Loan Draw Delays and Carrying Cost

## Topic
The hidden carrying cost homeowners pay when construction loan draw approvals take 7-21 days instead of same-day. AI-powered draw review tools (Built Technologies Draw Agent, Land Gorilla IDP) claim 95% reduction in review time. What does this actually mean in dollars for someone building a home?

## Kill Test
✅ Direct impact on anyone building or buying a new-construction home. Construction loans are interest-only during the build phase. Every day a draw sits in the approval queue is a day the builder can't pay subs, the project might stall, and the homeowner is racking up interest on previously disbursed funds while waiting for the next tranche.

## Primary Sources

### 1. Built Technologies — Draw Agent (Nov 2025)
- Source: BusinessWire press release, Nov 4 2025; Built blog posts
- Product: "Draw Agent" — AI that reviews construction loan draw packages
- Claims: 95% reduction in review time; same-day funding
- Process: Audit → Assist → Automate (three modes of increasing autonomy)
- Pilot results: "Over 90 discrepancies identified that would have gone unnoticed in manual audits"
- Key quote: "Average review times dropped by 95%, and disbursements that once required multi-day approval cycles were completed and funded the same day"

### 2. Land Gorilla — Intelligent Document Processing (May 2025)
- Source: Land Gorilla press release, May 20 2025
- Product: IDP embedded in construction lending platform
- "Leading provider of construction lending software"
- Handles handwritten entries, AIA forms, invoice processing
- CEO Sean Faries: "For too long, construction lenders have been bogged down by the inefficiency and expense of manual document processing"
- Auto-populates budgets from uploaded files, automates draw updates

### 3. Procore — Draw Request Process, Carrying Cost of Slow Payment
- Source: Procore Library (Alex Benarroche, Associate Counsel)
- Draw process: schedule → document bundle (invoices, receipts, schedule of values, lien waivers, inspection report, change orders) → review → approval → disbursement
- DNB/PWC studies: average DSO for construction companies is 51-83 days
- Carrying cost components: inflation, debt interest, opportunity cost

### 4. Bankrate/FRED — Current Interest Rates (April 2026)
- WSJ Prime Rate: 6.75% (as of April 2026, down from 7.50% a year ago)
- Federal Discount Rate: 3.75%
- Construction loan rates: typically prime + 1-2% = 7.75-8.75%
- Using 8.25% for calculations (midpoint)

### 5. LendingTree — How Construction Loans Work
- Interest-only payments during construction phase
- Draws disbursed based on completion milestones
- Inspector verifies progress before each draw

## Original Calculation: The Draw Delay Tax

**Setup:**
- Typical custom home construction loan: $500,000
- Interest rate: 8.25% (prime 6.75% + 1.5%)
- Build duration: 10-14 months
- Number of draws: 6 (foundation, framing, roofing/mechanical, drywall/insulation, finishing, final)
- Draw amounts escalate: ~$50K, $100K, $100K, $100K, $100K, $50K

**Manual draw processing:**
- Document assembly: 1-3 days
- Inspection scheduling: 2-5 days
- Lender review + approvals: 3-7 days
- Total: 7-14 days per draw (conservative range from Built, industry reports)

**AI-automated draw processing:**
- Document validation: minutes (AI pre-screens submissions)
- Review: minutes to hours (AI validates line items, budget, compliance)
- Approval: same-day for routine draws
- Total: 1-2 days (including inspection, which still requires physical visit or drone/photo verification)

**Per-draw delay cost:**
- By draw #4, ~$350,000 has been disbursed
- Interest accruing: $350,000 × 8.25% / 365 = $79.11/day
- Extra 8 days of delay (10 days manual - 2 days AI) = $632.88 additional carrying cost on that draw alone
- But the real cost is that the builder's subs aren't getting paid during the delay, potentially stalling work

**Cumulative across 6 draws:**
- Draw 1: $50K disbursed, 8 extra days → $50,000 × 0.0825/365 × 8 = $90.41
- Draw 2: $150K disbursed, 8 extra days → $150,000 × 0.0825/365 × 8 = $271.23
- Draw 3: $250K disbursed, 8 extra days → $250,000 × 0.0825/365 × 8 = $452.05
- Draw 4: $350K disbursed, 8 extra days → $350,000 × 0.0825/365 × 8 = $632.88
- Draw 5: $450K disbursed, 8 extra days → $450,000 × 0.0825/365 × 8 = $813.70
- Draw 6: $500K disbursed, 8 extra days → $500,000 × 0.0825/365 × 8 = $904.11
- **Total excess carrying cost: $3,164.38**

But that's just the interest. The bigger cost is project delays:
- If draw delays cause 1 week of idle time on 2 of 6 draws (common when subs walk to paying jobs)
- 2 weeks of total project delay
- Monthly carrying cost of a $500K loan at 8.25%: $3,437.50/month in interest alone
- 2 weeks ≈ $1,718.75 additional interest
- Plus: rent at temporary housing (~$3,000-$5,000/month in metro areas)
- Plus: rate lock extension fees if delays push past mortgage commitment ($500-$1,500)
- **Total realistic cost of draw delays: $5,000-$8,000+ per build**

## Strongest Counterargument
- Inspections still require physical site visits in most jurisdictions — AI speeds document review but can't eliminate the inspector
- Lenders are conservative about AI autonomy because of fraud risk — bad actors submit fake invoices and inflated completion claims
- Small community banks (which do most residential construction lending) may be 5-10 years from adopting AI draw tools
- The homeowner doesn't choose the lender's technology stack — this is a lender decision, not a consumer choice

## Limitations
- Built Technologies' 95% claim comes from their own pilot data, not independent verification
- We couldn't find public data on average draw processing times across the industry
- The calculation assumes a $500K loan at current rates — smaller loans in lower-cost markets see proportionally smaller savings
- AI draw automation doesn't address the physical inspection requirement, which is often the real bottleneck

## Journalist
**Frank "The Foreman" DeLuca** — This is a project management and cash flow story. Frank knows the pain of waiting for draws, watching subs threaten to walk, and managing float. His methodical, process-obsessed voice is perfect for breaking down the financial mechanics.

## Headline Options
1. "Your Draw Request Sat in Someone's Inbox for 12 Days. That Silence Cost You $632."
2. "AI Can Approve Your Construction Loan Draw in Hours. Your Lender Still Takes Two Weeks."
3. "Every Construction Loan Draw Costs You $109 a Day to Wait. AI Could Cut That Wait by 90%."
