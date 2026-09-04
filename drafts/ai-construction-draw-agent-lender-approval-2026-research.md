# Research: AI Construction Draw Approval — article #765 (Frank DeLuca)

## Working headline
"Your Builder's Draw Got AI-Approved in 3 Minutes. The Check Still Takes 9 Days."

## Slug
`ai-construction-draw-agent-lender-approval-2026`

## Kill test
Does this help someone building or buying a home? YES. Anyone financing a custom home, major remodel, or ADU with a construction loan lives inside the draw cycle: the builder finishes work, submits a draw request, the lender verifies, an inspector visits, money moves. Every day of lender delay is a day the framer isn't paid and a day the schedule slips. If AI changes who verifies and how fast, borrowers and small builders need to know what actually got faster, what didn't, and where the new risks sit.

## Primary sources (6)

1. **Built Technologies / MightyBot "Draw Agent" launch (PR Newswire via Morningstar, Nov 4, 2025)**
   - https://www.morningstar.com/news/pr-newswire/20251104cg14508/mightybot-powers-builts-draw-agent-to-transform-lending-with-industrys-first-autonomous-agentic-ai
   - Claims: 99%+ accuracy across thousands of construction loans; 95% time reduction on draw reviews (as few as 3 minutes); 30-60% improvement in draw turn time borrower-request-to-funding; 400% more risks detected vs human-led reviews; 100% policy adherence with audit trails.
   - Lender quotes: Randy Stewart (EVP, Zions Bancorporation), Jim Fraser (Chief Servicing Officer, Anchor Loans), Jennifer Robin (CIO, AgSouth Farm Credit).
   - VENDOR CLAIMS — treat as unverified marketing data, no independent audit cited.

2. **HousingWire: "How AI accelerates construction draws and cuts review times" (2026)**
   - https://www.housingwire.com/articles/ai-transforming-construction-draws/
   - Three deployment modes: Audit (read-only analysis), Assist (agent does routine steps, human approves), Automate (agent completes full review/approval, human handles complex cases only).
   - Built's Schlegel (8 years at company): "Last year was a watershed moment for the capabilities of these models. They have gotten so good that now we are starting to trust them with more and more things."

3. **Built Technologies blog: "Why Payment Delays Compound in Construction Lending" (Sep 2026)**
   - https://getbuilt.com/blog/construction-payment-delays-compound/
   - PYMNTS + American Express research (Jan 2025): payment delays cost US construction ~$280B/year; cost concentrates at lower tiers (subs/suppliers carry working capital).
   - Manual draw processing: 8-10 days; lender earns no interest while funds sit in-process, so faster turns = more interest income for lender.
   - Cites OCC Bulletin 2026-13 as supporting automated controls for operational risk.
   - VENDOR BLOG — the $280B figure is third-party (PYMNTS/Amex), usable with attribution.

4. **Land Gorilla: "How to Make Your Construction Draw Process Faster"**
   - https://landgorilla.com/blog/construction-draw-process/
   - Manual draw process takes 5-7 business days (lender-measured: request received to approval).
   - Enumerates lender-side steps: order draw inspection, verify documents, order title, review inspection report, approve inspection, verify title, sign documents, submit draw.
   - Notes lender-measured turn time understates the contractor's full cycle (time before/after the draw that the contractor experiences).
   - COMPETITOR of Built — useful as a second industry voice on the same numbers.

5. **Mobilization Funding: 2025 Construction Delays and Payment Timing Report (survey, Oct 2025)**
   - https://www.businesswire.com/news/home/20251008176254/en/Most-Americans-Blame-Bad-Planning-for-Construction-Delays-Contractors-Point-to-Late-Payments-Mobilization-Funding-Survey-Finds
   - Public blames bad planning; contractors point to late payments and mobilization funding gaps. CEO Scott Peper: "more often than the public realizes, the problem is subcontractors waiting on checks."
   - LENDER-ADJACENT source (construction lender) — survey methodology not detailed in release; attribute carefully.

6. **Medium / hard-money guide: "Rehab Draws & Inspections" (draw mechanics explainer)**
   - https://medium.com/@hardmoneyloan/rehab-draws-inspections-how-to-stop-funding-delays-from-killing-your-flip-e217e9f7e9eb
   - Standard mechanics: lender verifies scope match, invoice-to-budget alignment, photo support, milestone appropriateness; third-party inspection scheduled 1-3 business days after approval; average request-to-funding 3-5 business days with clean docs.
   - Common rejection reasons: missing lien waivers, unconvincing photos, over-budget invoices, funding requests for incomplete phases.
   - Practitioner source, not data — use for mechanics color only.

## Original contribution (the math vendors never show)
**The draw-delay carrying-cost calculation.** Nobody has published what a slow draw cycle costs a residential borrower in hard dollars.

Setup (stated assumptions):
- $900,000 construction loan, 8.25% interest-only during construction (typical 2026 construction-loan pricing band).
- 8 draws across the project (foundation, framing, rough-in, etc.).
- Manual lender turn time: 8 days per draw (Built's own 8-10 day figure, low end). AI-assisted turn time: 3 days (Built's claimed 30-60% improvement; using ~60%).
- 5 days saved per draw × 8 draws = 40 days of schedule recovered IF the draw was the critical path each time (aggressive assumption — flagged).

Math:
- Daily interest on fully-drawn $900K at 8.25% = 900,000 × 0.0825 / 365 = $203.42/day.
- 40 days × $203.42 = $8,137 in avoided interest carry.
- Conservative version (draw delay critical-path only half the time): ~$4,000.
- Lender side (Built's own commercial-observer quote): cutting turn from 10 days to 2-3 days picks up 7-8 days of additional interest income per draw for the lender. On a $112,500 average draw at 8.25%, 7 extra days outstanding = $112,500 × 0/365... = 112500 × 0.0825 / 365 × 7 = $178 per draw in lender interest income, × 8 draws = ~$1,424 per loan. The speed dividend splits: borrower saves carry time, lender books more interest days. Worth stating plainly.

## Skepticism / counterargument (full strength)
- The 99% accuracy / 400% risk-detection figures are vendor claims with no independent audit. "Risks detected" is a vendor-defined category; a model tuned to flag more items will always "detect" more.
- Automate mode lets software release six-figure sums with minimal human involvement. Photos can be staged; AI reviewing photos cannot see behind drywall, verify compaction, or catch that the "completed" framing is missing hold-downs. The inspection step that AI skips fastest is the one that catches the most expensive mistakes.
- Draw fraud vector doesn't disappear: front-loaded schedules and inflated percent-completes are paperwork fraud, exactly the kind of thing a document-reading agent is supposed to catch — but also exactly the kind a borrower can learn to format around once they know what the agent checks.
- Small residential borrowers may never see this: Draw Agent serves lenders on Built's platform (100+ large construction lenders). Your local bank doing 20 construction loans a year on spreadsheets gets none of it. The speed dividend accrues to big-lender borrowers first.
- The bottleneck moves: even if lender review drops to 3 minutes, title updates, lien waiver collection, and the physical inspection still take days. Land Gorilla's own process list shows review is one step among eight.

## Limitations (for the article)
- All performance figures (3-minute reviews, 99% accuracy, 30-60% faster turns) come from Built/MightyBot marketing materials; no third-party audit exists.
- The carrying-cost math assumes draws sit on the critical path; on many projects they don't, and the savings shrink accordingly. Rate and draw-count assumptions are stated, not universal.
- No data on borrower-facing outcomes (fewer sub walk-offs, fewer liens) attributable to AI draw processing specifically.
- OCC Bulletin 2026-13 cited via vendor blog; not independently verified.

## Actionable takeaways (for article)
- If you're financing a custom build: ask your lender what their draw turn time is and whether inspections are photo-based or boots-on-site. A lender quoting 3-day turns on Built's platform vs 10-day manual turns is worth real money (see math above).
- If you're a small builder: the draw package is now machine-read. Sloppy paperwork (missing lien waivers, blurry photos, invoices over budget lines) that a sympathetic human might wave through will get flagged by the agent. Submit clean packages.
- If you're a sub: faster lender approval doesn't mean faster pay. Your GC's pay cycle is a separate delay. Negotiate pay-when-paid terms with eyes open.
- Nobody should accept "automate mode" comfort: ask who is liable when the AI approves a draw for work that wasn't done.
