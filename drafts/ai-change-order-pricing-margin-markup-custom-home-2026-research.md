# Research: AI Change-Order Pricing — Margin, Markup, and the Custom Home Budget

**Slug:** ai-change-order-pricing-margin-markup-custom-home-2026
**Journalist:** Frank "The Foreman" DeLuca (Project Management & Operations)
**Date:** October 5, 2026
**Kill test:** Does this help someone building or buying a home? Yes. Change orders are the mechanism by which custom-home budgets move after signing. A buyer who understands the two-margin model, the allowance trap, and the contract clauses that cap change-order markup can save five figures. This is the most practical pre-signing knowledge a custom-home client can have.

## Thesis

Residential builders win fixed-price work in competitive bidding at compressed margins, then price mid-project change orders sole-source at much fatter margins. The change order is not a cost-recovery formality. On a typical custom home it is a meaningful share of total job profit, concentrated in a small share of revenue. Allowances are the quiet engine that manufactures change orders before the owner makes a single discretionary change. AI estimating and change-order platforms (KonstructIQ, Buildertrend, CoConstruct, AI takeoff tools) speed up pricing and enforce approval workflows, but they price from historical data and cannot fix a handshake process.

## Primary sources (9)

1. **Pro Builder (Mike Beirne), "Home Building: The Customizing Conundrum"** — trade publication, builder Palmer quote: "If anyone comes back and asks us for something after the budget is done, we know that because it was added as a change order — any dollars that (were) added after that initial budget, we made a nice margin on."
   https://www.probuilder.com/sales-marketing/article/55197162/home-building-the-customizing-conundrum

2. **Academic paper, "Change order markups" (6-project survey)** — average allowable markup on contractors' own work 5.4%; on subcontractors' work 6.2%. Actual labor burden averaged 29%, exceeding the contractual allowable in 4 of 6 projects. The real margin hides in labor burden, not the markup line.
   http://ndl.ethernet.edu.et/bitstream/123456789/87881/63/Change%20order%20markups.pdf

3. **Phoenix Home Remodeling (Aug 31, 2026, company-published)** — reports 2.1% change-order rate on interior remodels vs a "20% to 32% industry range" cited in its own materials. Self-reported; definitions vary by company (count vs dollar value vs owner-requested only). Useful as an existence proof that the range is wide and definition-dependent.
   https://www.openpr.com/news/4617823/phoenix-home-remodeling-reports-a-2-1-change-order-rate

4. **Swager Builds (custom builder, Sep 14, 2026)** — allowances are "the single largest source of budget overruns"; "A contract with no allowances is a contract where the price can only move through change orders you personally sign." Change-order markup listed among the negotiable structural items (not headline price).
   https://swagerbuilds.com/2026/09/14/can-you-negotiate-with-custom-home-builder/

5. **Ensign Custom Homes (Utah custom builder)** — "The most dangerous four words on a jobsite are 'we'll price it later.' Ten of those and you've lost control of the number." Allowance games: $85K lighting placeholder on a 7,000 sq ft home "isn't a budget, it's a placeholder designed to keep a proposal looking competitive."
   https://ensignbuilt.com/what-happens-if-your-builder-goes-over-budget-and-how-we-prevent-it/

6. **ETASR peer-reviewed paper (change-order causes, RII method)** — top causes: duplicated documents from previous projects (RII 0.77), changes in plans/scope by the owner (0.755), owner financial challenges (0.741), inadequate site investigation (0.74), design errors and omissions (0.723). Top impacts: time overruns, cost overruns, rework and demolition, payment delays, disputes between contracting parties.
   https://etasr.com/index.php/ETASR/article/download/8717/4423/39505

7. **KonstructIQ (AI-powered residential construction platform)** — estimating with customizable cost codes, markup/margin calculation, cost-plus or fixed-price models; approved estimates become the project budget; every change order auto-updates budget and job costing. The AI-native entrant in the Buildertrend/CoConstruct space.
   https://sourceforge.net/software/compare/CoConstruct-vs-Remodel-AI/

8. **Alta Ferrante / Medium (Sep 2026)** — "$12,000 for appliances when your taste aligns with a $22,000 package. The gap becomes a change order, often with added markup because the builder manages procurement and warranty." Selections are supply-chain decisions with lead times.
   https://medium.com/@gwrachgsze/custom-home-builder-contracts-what-to-know-before-you-commit-7515473433ae

9. **Grant Fuellenbach / LinkedIn (Jul 2026)** — on AI for custom builders: "Cheaper, better models widen the gap between builders with documented process and builders without it. If your change order workflow lives in your head and three group texts, a smarter model has nothing to grab."
   https://www.linkedin.com/pulse/best-ai-custom-home-builders-grant-fuellenbach-cmxrc

Supporting: MDPI Buildings (contractor-perspective cost modeling — competitive bidding compresses margins; from the owner's perspective change orders and errors/omissions are the most relevant causes of cost deviation); BookaBuilderUK (full change-order cost stack: labour, materials, plant/access, programme impact, administration, margin — legitimate costs exist); Buildertrend/CoConstruct pricing and change-order workflow features (Projul, Capterra, SelectHub comparisons).

## Original contribution (the two-margin model)

Worked example, $750,000 fixed-price custom home:
- Base bid won competitively: ~10% margin = $75,000 gross profit (illustrative; MDPI confirms competitive contexts compress margins).
- Change-order volume at a conservative 12% of contract = $90,000, priced sole-source at ~25% margin (Palmer's "nice margin"; markup paper shows actuals exceed allowables via labor burden) = $22,500 profit.
- Result: change orders are 12% of revenue but ~23% of gross profit. At the 20% industry figure ($150,000 in changes), they are ~17% of revenue and ~33% of profit.

Allowance-gap compounding: 10 allowance lines underfunded by 40% on $120,000 of allowances = $48,000 in allowance-driven change orders (6.4% of a $750K contract) before one discretionary change, each carrying the change-order markup.

Methodology note: 10% and 25% are modeled, not measured. No public dataset of residential change-order margins exists. The 5.4%/6.2% figures come from a 6-project sample outside US residential. The 20-32% range is vendor-cited for remodeling. The model's value is structural: it shows why the incentive exists, not the exact basis points.

## AI angle

- KonstructIQ: AI estimating + change-order management in one residential platform; markup/margin calculated per line; budget auto-updates on approval.
- Buildertrend / CoConstruct: change-order approval workflows, client-facing pricing, budget tracking ($299-$499/mo tiers).
- AI estimating services: PlanSwift, STACK AI takeoffs, RSMeans data for rapid repricing of changes; "what-if" scenario models.
- Skepticism: AI prices from historical/RSMeans data that lags real sub pricing; cannot capture remobilization, resequencing, or small-quantity premiums (the BookaBuilderUK cost stack); no public accuracy dataset for AI change-order pricing; Fuellenbach's process point — the model is only as good as the documented workflow it runs on. The "we'll price it later" failure is behavioral, not computational.

## Counterargument (strongest)

Owner-driven scope changes are the #2 ranked cause of change orders (ETASR RII 0.755) — most change orders start with the client, not the builder. Mid-project changes genuinely cost more than base-bid work: remobilization, trade resequencing, small-quantity material orders, admin time. Fixed-price contracts need a change mechanism or builders absorb legitimate extras. And competitive bidding genuinely compresses base margins (MDPI), so change-order margin partly offsets underpriced base bids rather than constituting pure extraction. Sloppy change management also loses builders money.

## Actionable takeaways

1. Convert allowances to fixed, priced line items before signing (Swager). A zero-allowance contract moves only through signed change orders.
2. Cap change-order markup in the contract: e.g., max 15% on sub work, 10% on own work, with labor burden shown separately (the markup paper shows burden is where margin hides).
3. Never "price it later" (Ensign): require written pricing within 48 hours before changed work proceeds.
4. Require line-item breakdowns on every change order: labor hours and burden, materials, markup each shown.
5. Set a cumulative tripwire: at 10% of contract value in change orders, stop and hold a formal budget review.

## Limitations

- No public dataset of residential change-order margins; the two-margin model is illustrative.
- 5.4%/6.2% markup figures from a 6-project non-US sample; not directly transferable.
- 20-32% industry range is vendor-cited (Phoenix Home Remodeling materials) for remodeling, definition-dependent.
- Phoenix's 2.1% is self-reported with its own definition.
- No independent accuracy verification for AI change-order pricing products.
- 10% base / 25% change margins are modeled assumptions, flagged as such in the article.
