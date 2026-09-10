# Critique Round 0 — ai-lumber-price-forecast-framing-package-timing-2026

**Date:** 2026-09-10
**Journalist:** Frank DeLuca
**Headline:** Lumber Is Up 23% in a Year. Your Framing Package Costs $2,250 More.
**Hero:** drafts/ai-lumber-price-forecast-framing-package-timing-2026.jpg (real JPEG 1920x1280, md5 42a8d290)

## Hard gates (mechanical, source of truth)

- Em dashes: `grep -o '—' → 0` (limit 3) — PASS
- "The" sentence starters: 10/78 = 12.8% (limit 15%) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): 0 — PASS
- Sentence rhythm: variance 206.3 (≥200), short 11.1% (≤15%), long 34.7% (≥15%) — PASS (script exit 0)
  - Note: round 0 draft initially failed rhythm (variance 81.3, short 16.9%); revised by merging short fragments and adding 40-60 word DeLuca-style constructions. Re-ran script: PASS.

## Critic scores

1. **General Editor — 8.7.** Cold open (Thursday price sheet) lands. Structure follows the house template without feeling templated: problem, tech, original math, skepticism, actionable rules, limitations, close. ~1,340 words is at the top of the deep-dive range but earns it. Minor: the numbered rules echo the site's invoice-fraud piece format; acceptable as house style.

2. **Voice Coach — 8.8.** DeLuca is present: long measured sentences, process obsession, world-weary humor ("you bought the weather at a discount", "Nobody ever saved a project with a brilliant lumber trade"). No AI tells, no banned phrases, no em dashes. Rhythm gate passes with real variance. Could not swap bylines with Kowalski or Chen without noticing.

3. **Ethics Reviewer — 8.9.** Fair to all sides: the lumber lobby's counterargument is stated at full strength with its own numbers, not strawmanned. No self-congratulation. Serves the small builder, not the vendor. No conflicts.

4. **Social/Shareability — 8.6.** Shareable headline with two hard numbers. Pull quotes ready: "Forecasting the commodity is not forecasting your invoice." Stat callout ($3,923) is card-friendly. Niche trade topic caps the ceiling; within the audience it will travel.

5. **Legal Accuracy — 9.0.** Duty figures (AD/CVD 25.9%, Section 232 10%, effective 35.9%) attributed to NAHB's tracker. No legal advice rendered. Sources hyperlinked inline. No defamation exposure; vendor claims (LLAIE) framed as vendor claims.

6. **Research Rigor — 8.8.** Original contribution: per-house swing math ($261.50/MBF × 15 MBF = $3,923 full range; $1,500-$2,250 realistic 2026 seasonal; $30K-$78K/yr for a 20-home builder) — not computed anywhere in the trade press. Methodology shown inline. Dedicated limitations section is honest (wholesale vs yard prices, unverified vendor claims, arithmetic not transaction data). Counterargument engaged at full strength. 8 primary sources, all verifiable.

7. **Data Presentation — 8.7.** Numbers specific throughout ($535 composite, $428,215 survey cost, 8,077 contracts open interest). Math shown, not asserted. Stat callout used well. One gap: no scenario table for the swing ranges, but inline math is clear enough.

**Average: 8.79. All 7 ≥ 8.5. All hard gates pass.**

## Decision
→ **phase=SHIP.** Queued behind existing ship_ready queue per 1/day rule (last ship_after 2026-11-04), next open slot 2026-11-05. Article number 811.

## Revision note (headline, pre-ship)
Round 0 headline "Lumber Moved $120 Per Thousand Feet in Six Weeks" was not precisely sourced (mixed indices across the six-week window). Replaced with "Lumber Is Up 23% in a Year. Your Framing Package Costs $2,250 More." — both halves sourced (WSJ +23% composite; computed seasonal swing upper bound). Updated in title, h1, JSON-LD, og:title, twitter:title. Gates re-verified after change.
