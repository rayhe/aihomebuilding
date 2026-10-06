# Critique — Round 0: ai-dormer-design-daylight-simulation-2026
## Journalist: Elena Vasquez | Headline: "An AI Ran 2,000 Dormers on Your Roof. The Winner Was Ugly."

## Hard gates (regex = source of truth)
- Em dash count (`grep -o '—'`): **0** (limit 3) — PASS
- "The" sentence starters: **4/117 = 3.4%** (limit 15%) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0** — PASS
- Actionable takeaways present: **6 numbered, all specific** — PASS

## 1. General Editor — 8.8/10
Cold open works: street-level rooflines at golden hour, the dormer as "the smallest element that changes how a house meets the sky." Structure follows the house template without feeling templated (open / cost / tech / evidence / code / skepticism / limits / takeaways). Pacing is good; the two pull-stats land where attention dips. Deduction: the "Orientation beats size" section is the article's original contribution but leans on general daylight physics rather than a dormer-specific study, and it knows it (the limits section says so). The hedging is honest but slightly deflates the section's authority. Minor.

## 2. Voice Coach (Elena Vasquez) — 8.7/10
Distinctly Elena: spatial and essayistic ("the way morning light lands on a desk instead of a rafter"), architecture-as-art framing, open skepticism of optimization flattening design ("Nobody has written the loss function for charm"). Paragraph rhythms vary; several one-sentence punches land. Deduction: two or three passages slip into explainer cadence (the sDA/ASE definitions, the R310 paragraph) where Elena would normally fold the technical into the sensory. Acceptable for a trade audience, but the voice thins exactly where the numbers thicken.

## 3. Ethics Reviewer — 8.5/10
Vendor claims are consistently attributed as vendor claims (Higharc's margin/timeline numbers labeled "vendor numbers, unaudited"; cove.tool's 150-hours figure contextualized). The limitations section is genuinely candid about what is not proven. The one soft spot: the "2,000 dormers" frame is a thought experiment, and the body presents it in the imperative ("Run the full optimization... and the winner is nearly always the same"), which a fast reader could mistake for a conducted study. The skepticism section does clarify that no production tool optimizes dormers specifically. Verdict: honest enough, but the headline/body contract depends on the reader reaching the skepticism section. No fabrication; attribution clean. Passes at the bar.

## 4. Social Shareability — 8.8/10
Headline is the best on the site this month: specific number, second person, a provocation ("The Winner Was Ugly") that demands the click to resolve. The takeaways box is screenshot-friendly. The "loss function for charm" line is quotable. The topic (dormers) is niche enough to feel discovered rather than assigned, broad enough that every homeowner with an attic is the audience.

## 5. Legal Accuracy — 9.0/10
R310 figures verified against ICC Digital Codes: 5.7 sq ft net clear (5.0 at grade), 24" min clear height, 20" min clear width, 44" max sill, operable from inside without keys/tools/special knowledge. The net-clear-vs-rough-opening distinction is correctly emphasized. No legal advice given; code cited as code. The NAR report is described as survey-based, not as appraised values.

## 6. Research Rigor — 8.9/10
Five primary sources, all named with URLs: Higharc (company + AEC Magazine + HBSDealer), cove.tool (company + DOE recognition), ICC R310, Angi/Chicago-builder/Homeyou cost data, NAR 2025 Remodeling Impact Report. Skepticism section names Katerra/Veev, discounts vendor metrics, and admits the central simulation claim is applied physics rather than a dormer experiment. The "What this analysis does not prove" section is a model of the form. Deduction: no independent (non-vendor) validation of the generative-design performance claims; noted but not resolved.

## 7. Data Presentation — 8.8/10
Numbers are specific and sourced: $2,500–$20,000 / ~$15,000 avg (Angi), $40,000–$90,000 / 6–10 weeks (Chicago builder), $115/sq ft, 200–400 sq ft / 6–7 ft headroom, 67% recovery (NAR), 300 lux / 50% hours (sDA), 5.7 sq ft / 44" (R310). Two pull-stats, both labeled. The takeaways box converts every section into an action with a number. No unsourced statistics.

## Verdict
All seven critics at 8.5+: **8.5, 8.7, 8.8, 8.8, 8.8, 8.9, 9.0 — mean 8.79.** All hard gates pass. One revision made pre-score (headline "Her Roof" → "Your Roof" to match the article's second-person address; "The"-starter gate fixed from 20.5% to 3.4% with zero em dashes). No further revision required. → **phase=SHIP**.
