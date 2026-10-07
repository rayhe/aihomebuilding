# Critique Round 0 — Article #1027: "Your Framer's 2x4s Are Stamped #2. The Wood Says Otherwise. A Phone Photo Settles It." (Jake Kowalski)

## Hard gates (mechanical, run before scoring)
- Em dashes (literal `—`): 0 (limit 3) — PASS. One `&mdash;` entity in `<title>` only, same convention as shipped articles.
- "The" sentence starters: 12.2% (limit 15%) — PASS.
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "And it's not even close", "inflection point", "Let's be clear", "X isn't about Y. It's about Z"): 0 hits — PASS.
- Sentence rhythm (`sentence-rhythm-check.py`): variance 345.2 (≥200) PASS; short 8.6% (≤15%) PASS; long 58.0% (≥15%) PASS.
- Revision history: draft failed rhythm on first pass (variance 170.2, shorts 26.6%, The-starters 19.0%); rewritten pre-score. Current metrics are on the final file.

## Critic scores

### 1. General Editor — 8.8
Cold open starts mid-action on the lumber truck, no market-size throat-clearing. Structure follows the template but breaks it where it should: the ledger table lands before the technology section, which is the right call because the numbers are the hook. The "Why nobody does this" section is genuinely adversarial rather than a token skepticism paragraph. Deduction: the pull-stat repeats the Minneapolis numbers already given two sections earlier; acceptable as a skimmable anchor, but slightly redundant.

### 2. Voice Coach — 8.7
Jake's bar-stool explainer voice holds throughout: "Try un-building that," "Wood doesn't file complaints," "Photograph the pinky." Short punches land without tipping into fragment-choppiness (shorts at 8.6%, well under the AI-tell threshold). Specs are heavy and jargon is light, as the beat demands. Deduction: two sentences ("That is the gap, and it is a strange one," "Fair is fair") lean essayist rather than job-site; minor.

### 3. Ethics Reviewer — 9.0
The Brazilian plywood lawsuit is framed as allegation throughout, with the agencies' denial and the plaintiffs' commercial interest stated explicitly. No self-congratulation, no vendor boosterism (correctly notes no product exists yet). The takeaways empower the reader rather than selling anything. No moral shortcuts detected.

### 4. Social/Shareability — 8.7
Headline is specific, numeric-adjacent ("#2"), and addresses the reader directly. The substitution ledger table is the screenshot moment. "Photograph the pinky" is a quotable kicker. The 35%-strength-kept figure is the share trigger. Deduction: no single pull-quote is typographically isolated for easy sharing beyond the pull-stat; fine.

### 5. Legal Accuracy — 8.8
Lanham Act claim described as a complaint seeking injunctions + $300M, filed in S.D. Florida (Fort Lauderdale Division) — all attributed to trade-press reporting, never asserted as fact. ANSI/TPI 1 eight-value rule cited. PS 1-09 referenced correctly as the plywood product standard. No legal advice offered; the "call the engineer of record" takeaway is the correct escalation, not DIY lawyering. Deduction: could name the case caption, but the complaint wasn't independently pulled; honest to omit.

### 6. Research Rigor — 8.9
Original contributions: (a) the substitution ledger table computed from the trade-press design values, (b) the 20-minute/200-300-photo audit math vs. tear-out cost, (c) the five-field stamp decoder synthesized for a lay reader, (d) the mill-vs-jobsite AI gap analysis. Limitations section is explicit about what wasn't proven (no fraud-rate dataset, southern-pine-only numbers, coalition's market-share figure, no shipping product, decade-old Minneapolis case). Strongest counterargument is stated at full strength across five points. Every factual claim hyperlinks to a checkable source. Deduction: design values vary by size/species and the article says so, but a reader could still misapply the table; the "illustration not gospel" line mitigates.

### 7. Data Presentation — 8.8
Ledger table is clean with the worst row highlighted. Pull-stat isolates the cost asymmetry. Numbers are specific (950/1,250, 225/650, 125/400, $300M, 25%, 120 units, 10-20%). Methodology is transparent: sources named per figure, assumptions flagged. Deduction: the "200 to 300 photos" figure is an author estimate stated without its derivation; acceptable as an estimate, labeled as typical.

## Verdict
Average: **8.81**. All seven critics ≥ 8.5. All hard gates pass. No revision round needed.

**Decision: SHIP** → queue as SHIP_READY per repo convention (1/day queue discipline; new articles take the next open slot, 2027-06-17).
