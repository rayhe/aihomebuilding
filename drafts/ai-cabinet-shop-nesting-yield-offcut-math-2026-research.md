# Research: AI Nesting & Cut-List Optimization in Cabinet Shops
**Slug:** ai-cabinet-shop-nesting-yield-offcut-math-2026
**Journalist:** Frank DeLuca
**Article #:** 932
**Researched:** 2026-09-21

## Topic
AI-driven nesting and cut-list optimization for cabinet/millwork shops: how software turns designs into cut plans that squeeze more parts out of each 4x8 (or 5x10) sheet, and what that is actually worth in dollars.

## Coverage check (2026-09-21)
Grepped all 336 story slugs + 866 draft/research files for: millwork, cnc, nesting, panel-saw, cut-optimization, cabinet. Zero hits on millwork/cnc/nesting. One prior draft covers framing cut optimization (ai-framing-cut-optimization-waste) — different trade, different math (2x lumber, not sheet goods). One covers cabinet tariff pricing (cabinet-tariff-pricing-fog) — pricing, not production. Angle is clean.

## Kill test
Does this help someone building or buying a home? Yes. Cabinet shops and GCs price millwork with a waste factor baked in; a shop that nests better bids lower or keeps margin. Buyers can ask their cabinetmaker one question ("what's your sheet yield?") and get a signal about how the shop is run.

## Primary sources
1. **Woodworking Network / FDMC magazine** — "Manufacturing Yield vs. Product-Level Nesting Yield": distinguishes nesting yield (89% in their example) from manufacturing yield (82%), and documents remnant-management practices (shelf them for re-cuts vs. discard-if-short). https://www.woodworkingnetwork.com/magazine/fdmc-magazine/manufacturing-yield-vs-product-level-nesting-yield
2. **Laguna Tools** — "How to Optimize Cabinet CNC Nesting for Better Sheet Yield": true-shape nesting, rotational nesting with grain constraints, common-line cutting, part spacing/kerf, and the operator-setup caveat ("bad inputs produce bad nests"). https://info.lagunatools.com/optimize-cabinet-cnc-nesting-for-better-sheet-yield
3. **MaxCut Software** — industry waste norms: 10-15% for no-grain sheet goods (melamine, MDF), 20-25% for grained sheets. https://maxcutsoftware.com/cabinet-material-estimation-process/
4. **Aman Pratap, millwork consultant (Medium, Nov 2025)** — case study: mid-size cabinet manufacturer, 150 kitchens/month; CAD analytics showed one CNC machine wasting 7% more material due to an operator's buffer setup; standardizing nesting logic via Microvellum BOM/cut-list automation saved $4,000/month. Yield improvement from 88% to 97% cited across shops. https://medium.com/@amanpartapmillworkconsultant/how-millwork-manufacturers-are-using-cad-analytics-to-save-costs-a20d60ba8687
5. **CutPlan.ai FAQ** — honest vendor skepticism: for small rectangular-part jobs, guillotine cut lists match nesting yield; the 5-15% paper yield gap "only turns into money when it removes a whole sheet from the order." Nesting wins on large runs and irregular parts; "for most workshops the saw wins" on simple carcasses. https://cutplan.ai/en/blog/cnc-nesting-vs-manual-cut-list.html
6. **Mozaik Software** — Mozaik CNC at $225/month billed monthly, includes true-shape nesting, cut lists, G-code, 175+ machine post processors. Design tier $50/month. https://www.mozaiksoftware.com/en-CA/mozaik-products/mozaik-cnc-
7. **Woodshop News** — Mozaik CNC Complete $125/mo (older pricing), CNC Operator real-time nesting at the router; Microvellum AutoCAD-based automation for shops of all sizes. https://www.woodshopnews.com/features/catching-up-with-cnc-software
8. **ToolsToday (2026 update)** — "AI in Woodworking": nesting/layout optimization called out as the most practical AI-adjacent benefit; caveat that AI output must be verified against real joinery, tooling, and wood movement. https://toolstoday.com/learn/incorporating-ai-into-the-woodworking-design-process

## Original calculation (rigor requirement)
Take a typical kitchen: 30 sheets of 3/4" prefinished maple ply at ~$70/sheet = $2,100 in sheet material. Parts require ~22.5 sheets of actual part area.
- Manual/saw layout at 75% yield: orders 30 sheets.
- Optimized nest at 90% yield: orders 25 sheets.
- Savings: 5 sheets = $350/kitchen.
At 6 kitchens/month: $2,100/month saved, $25,200/year. Mozaik CNC costs $225/mo ($2,700/yr). Net: ~$22,500/year to the shop. Break-even in under two weeks.
Caveats folded in: this assumes the whole-sheet math (per CutPlan, partial-sheet savings round away), grained visible parts lose yield to grain-lock constraints (20-25% norm), and the 90% figure is a vendor-adjacent claim — the FDMC manufacturing-yield frame says real shops land 82% when remnants are counted honestly.

## Skepticism angles
- The CutPlan vendor's own FAQ undercuts the hype: on simple rectangular carcass runs, a saw and a good cut list match the nest.
- Operator setup can erase algorithmic gains: the 7% one-operator buffer gap from the millwork case study.
- Grain direction on visible parts is a hard constraint the optimizer cannot negotiate away.
- "AI nesting" is mostly 1990s-era bin-packing heuristics with better UX; the AI label is doing marketing work. Say that.
- Nesting yield vs manufacturing yield (FDMC): vendors quote the flattering number; the remnant pile in the corner is the honest one.

## Actionable takeaways (draft)
1. If you run a cabinet shop with a CNC router and no nesting software: Mozaik CNC at $225/mo pays for itself if it removes one sheet per month. Track nesting yield per machine per month, not per job.
2. If you run a saw-only shop: a free/cheap guillotine cut-list optimizer (CutPlan has a free tier: 30 calculations/month) gets you most of the way on rectangular carcasses. The CNC advantage shows up on curved/irregular parts and volume.
3. For GCs and buyers: ask your cabinetmaker "what's your sheet yield, nesting or manufacturing?" A shop that knows the difference runs tighter than one quoting a 25% waste factor as destiny.
4. Mind the grain: grained sheet goods carry a 20-25% waste norm. If your shop nests everything at the same target yield, the visible parts are where the math quietly breaks.
5. Remnant policy matters more than the algorithm: FDMC's two practices (shelf-and-reuse vs discard-if-short) determine whether your 89% nesting yield is an 82% manufacturing yield. Label and inventory offcuts or admit they're waste.
