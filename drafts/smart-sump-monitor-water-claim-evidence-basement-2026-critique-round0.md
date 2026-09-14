# Critique Round 0 — smart-sump-monitor-water-claim-evidence-basement-2026

Article #853. Journalist: Jake Kowalski. Word count: 1919.

## Hard gates (mechanical, run before scoring)
- Em dash count (`grep -o '—' | wc -l`): **0** (limit 3) — PASS
- "The" sentence starters: **2.6%** (limit 15%) — PASS
- Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack / and it's not even close / inflection point): **0** — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **239.9** (≥200), short **2.7%** (≤15%), long **56.2%** (≥15%) — PASS
- Hero image: `images/smart-sump-monitor-water-claim-evidence-basement-2026.jpg`, real JPEG (FFD8 magic), 1920x1280, hash `aae5d70f`, cache-busted `?v=aae5d70f` on all img/og references — PASS

## Critic scores

1. **General Editor — 8.8.** Cold open lands (2:14 AM timestamps). Protection ladder table is the article's spine and is genuinely useful. Sections flow: problem → math → ladder → tech → evidence → skepticism → limits → actions. Deduct: 1919 words is long for the beat; the code-minimum paragraph in the ladder section could be tighter.

2. **Voice Coach — 8.7.** Jake's register is present: punchy, spec-first, bar-talk cadence ("That is predictive maintenance, the same idea factories use on million-dollar motors, pointed at a $300 appliance sitting in a concrete pit."). No banned phrases, no AI reveal formulas. Rhythm variance 240 with real punches and sprawlers. Deduct: "Here is the part nobody in the waterproofing aisle mentions" is slightly formulaic as a transition.

3. **Ethics Reviewer — 9.0.** The flip-side paragraph (the sensor documents your neglect too) is the honest move most vendor-friendly coverage skips. No self-congratulation, no moralizing about homeowners who flood. Limitations section is a real accounting, not hedging.

4. **Social/Shareability — 8.7.** Headline carries two specific numbers and addresses the reader. Stat callout (~40%) is shareable. Pull-quote candidates: "A sensor you ignore is a very expensive clock that testifies against you." Deduct: headline is long for social cards.

5. **Legal Accuracy — 9.0.** Sudden-and-accidental vs. gradual/seepage standard stated correctly per the cited trade press. Flood exclusion boundary stated plainly with the right scope. No case law overclaimed ("no court I am aware of has ruled that pump telemetry compels coverage"). IRC R405 cited as code-minimum context, correctly noting dampproofing ≠ waterproofing.

6. **Research Rigor — 9.0.** 7 primary sources, all hyperlinked inline with verbatim URLs. Original contribution: the 30-year mortgage math (~40% lifetime claim probability, ~$7,700 expected claim dollars, ~$770 expected unrecovered) with inputs shown. Strongest counterargument stated at full strength (sensor doesn't move water; telemetry can document neglect; installation quality dominates). Deduct: the ~10% denial rate is an industry estimate, disclosed as such.

7. **Data Presentation — 8.8.** Ladder table ranks options by cost with verified numbers. The 40% stat callout. Math shown with inputs. Deduct: battery-backup runtime caveat lives in limitations rather than next to the product claims; acceptable but not ideal.

## Verdict
Average: **8.87**. All seven critics ≥ 8.5, all hard gates pass. **→ SHIP.** No revision round needed (rounds: 0).

Queued: one article already published 2026-09-14 PT (one-per-day rule). Added to ship_ready with ship_after 2026-12-25 (day after queue tail 2026-12-24).
