# Research: AI vs. the Change Order Fee Bleed — article #751

**Slug:** `ai-change-order-fee-erosion-gc-margin-2026`
**Journalist:** Frank DeLuca (Project Management & Operations)
**Date:** September 2, 2026

## Kill test
Does this help someone building or buying a home? Yes. For GCs/remodelers: change-order
process discipline is the highest-ROI operational fix available, and new AI tooling attacks
the exact failure point (documentation latency). For homeowners: explains why CO paperwork
matters, what fair CO markup looks like, and why "just do it and we'll figure out the price
later" is the most expensive sentence in residential construction.

## Angle (self-critique gate)
- **Propose:** Change orders are not the margin killer; undocumented change orders are.
  Fresh 2026 Dodge/Clearstory data quantifies the bleed (98% fee erosion), and CoConstruct's
  older dataset proves the paradox (each documented CO adds ~0.4% margin). AI tools now
  attack the documentation gap directly.
- **Challenge:** Adjacent to #736 (cost overrun prediction) and #738 (drywall tracking).
  Different enough? Yes: #736 was about predicting overruns; this is about the commercial
  mechanism (COR negotiation, fee erosion, closeout delay) and the paperwork workflow.
  No prior article covered the change-order business process.
- **Verdict:** Proceed.

## Primary sources

1. **Dodge Construction Network / Clearstory, "Optimizing the Change Order Processes"
   SmartMarket Insight, June 2026** (vendor-commissioned; Clearstory sells CO software —
   treat product-adjacent claims with care, but the survey data is Dodge's).
   - 98% of GCs have experienced fee erosion from change order negotiations; nearly half
     of those say erosion exceeded 10% of their fee on at least some projects.
   - 93% of GCs experienced delayed closeout from CO issues; 2/3+ say delays stretched
     beyond a month.
   - 96% of GCs: lack of CO visibility hurts cost control (78% unanticipated costs,
     60% late costs).
   - 91% of GCs sometimes don't pay full CO amounts: disputed pricing, incomplete
     documentation, scope disagreements.
   - Only ~1/3 of GCs AND ~1/3 of specialty trades say their CO process works very well.
   - Trades: full cycle from work performed to authorized CO averages nearly 7 weeks;
     97% start work before approval; 83% say it hurts cash flow; 77% write off
     unapproved/downward-negotiated COs as bad debt.
   - Firms with structured processes + digital capabilities get measurably better outcomes.
   - URLs: https://www.clearstory.build/construction-blog/2026-gc-change-order-report
     and https://www.businesswire.com/news/home/20260623740974/en/Only-1-in-3-Contractors-Say-Their-Change-Order-Process-Works-New-Research-Shows-What-the-Best-Ones-Do-Differently

2. **PlanRadar, "Cost of Rework in Construction" (updated ~Sept 2026)**, citing 2026 ASCE
   study (Peter Love): contractors under-report field rework ~300%; mid-project changes
   add 10–25% of project value in unplanned cost on typical mid-size commercial or
   multi-unit residential projects; 2 in 3 professionals say changes drive budget overruns
   on many or most projects.
   - URL: https://www.planradar.com/us/cost-of-rework-construction/

3. **CoConstruct change order volume study (2020 data, still the best public
   residential-specific CO dataset)**:
   - Home building projects with a single change order average $11,180 per CO; with three
     COs, $7,479 per CO.
   - For home builders, each incremental change order correlates with +0.4% average profit
     margin on the project.
   - Projects over $1M: fixed-price COs averaged $3,114 more than open-book COs.
   - URL: https://www.coconstruct.com/blog/volume-of-change-orders-in-construction-declined-in-2020

4. **ServiceTitan/Thrive Analytics Commercial Construction Report 2026** (via Contractor
   Magazine, ~April 2026; n=1,000+ commercial owners/executives/managers):
   - Change orders add 5–20% in project value for most firms; 71% report wage increases
     tightening margins; only 20% operate on a single platform.
   - URL: https://www.contractormag.com/technology/news/55367533/ai-gains-traction-in-commercial-construction-as-contractors-target-profitability-and-cash-flow

5. **Autodesk Digital Builder, "2026 AI Construction Trends: 25+ Experts"** — Tom Reno
   (Agave): 2026 is the year AI moves into "the least forgiving parts of the business:
   finance, compliance, and controls," handling "invoices, pay apps, change orders, lien
   waivers, and vendor compliance, with humans focused on the edge cases."
   - URL: https://www.autodesk.com/blogs/construction/2026-ai-trends-25-experts-share-insights/

6. **PMC (NIH), "An investigation study on residential buildings for cost overrun"**
   (2025): periodic design changes rank #3 cost-overrun driver (frequency index 0.681);
   inadequate design/specification #2 (0.681); rework/extra work #5 (0.667).
   - URL: http://pmc.ncbi.nlm.nih.gov/articles/PMC11993604/

## Original contribution (the novel analysis)
**The documentation arbitrage.** Combine CoConstruct with Dodge/Clearstory:
- CoConstruct: each *processed* change order adds ~0.4% margin for home builders.
- Dodge: 98% of GCs *lose* fee to change order negotiations; half lose >10% of fee.
- Both true at once. The difference is not the change — it is whether the change was
  documented, priced, and approved before the work happened. 91% of GCs short-pay COs
  over disputed pricing and incomplete documentation; 97% of trades start work before
  approval. The margin lives or dies in the 7-week approval gap.
- **Worked example (show the math in the article):** $1.2M custom home, 12% GC fee =
  $144,000 fee. Six change orders at the CoConstruct 3-CO average ($7,479) = $44,874 in
  CO value (~3.7% of contract — conservative vs. the 5–20% Thrive range). If half the
  erosion scenario hits (10% of fee = $14,400) on disputed COs, the GC needs ~2 fully
  documented COs at typical 15% markup just to recover it. A structured CO process
  (the thing only 1/3 of firms have) is worth roughly $14k per bad project to a
  $1.2M residential GC — before counting the closeout-delay carrying cost.

## Skepticism / counterarguments (strongest, at full strength)
- The Dodge data is commissioned by a change-order software vendor (Clearstory). The
  numbers serve their pitch. Independent replication does not exist yet.
- The data skews commercial; residential custom-home CO dynamics are inferred, and
  CoConstruct's residential dataset is six years old.
- AI summarization of CO threads does not fix the underlying commercial problem: owners
  who won't pay and GCs who won't document. Software cannot make a handshake a contract.
  The firms getting "measurably better outcomes" may simply be better-run firms that also
  buy software (selection bias).
- Katerra rule: construction tech graveyard is deep; workflow tools die when they add
  clicks instead of removing them.

## Limitations to state in article
- Dodge/Clearstory surveyed commercial GCs and specialty trades; residential
  applicability is inferred, not measured.
- CoConstruct figures are 2020-vintage; material/labor inflation since then means
  dollar averages are stale (direction and ratios more reliable than levels).
- No independent audit of vendor AI claims (Clearstory, Procore, CMiC) on CO cycle-time
  reduction; treat "7 weeks to X days" style claims as marketing until third-party measured.
- The $14,400 worked example assumes 12% fee and the >10%-erosion scenario; actual
  residential fee structures vary (cost-plus vs. fixed-price behave very differently —
  CoConstruct: fixed-price COs run $3,114 higher).

## Tools/companies to mention (with skepticism)
- Clearstory (change order communication/COR log; commissioned the Dodge study — disclose)
- Procore (Daily Log Agent, CO approval workflows — enterprise pricing)
- CMiC (change order tracking, approval workflows, audit trails)
- Agave (Tom Reno thesis: AI agents on pay apps/change orders/lien waivers)
- FlowForma (no-code workflow automation incl. change orders)

## Actionable takeaways (required)
- For GCs ($1–5M residential): price every CO within 48 hours of the request, never after
  the work; use a standardized COR form with photo documentation; the 7-week trade
  approval cycle is a cash-flow loan you are giving interest-free — charge for it or
  close it.
- Break-even framing: one avoided fee-erosion event per year pays for any of these tools.
- For homeowners: never say "just do it, we'll figure out the price later"; demand the
  CO in writing with line-item pricing before work starts; expect 10–20% markup on COs
  as normal, 50%+ as a red flag.
