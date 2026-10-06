# Critique Round 0 — ai-job-cost-feedback-estimate-calibration-2026

**Article:** "Your Last 10 Jobs Lost Money the Same Way. Your Next Bid Has Amnesia."
**Journalist:** Frank DeLuca
**Date:** 2026-10-06

## Hard gates (all verified by script, regex count is source of truth)
- Em dashes (literal —): **0** (limit 3) — PASS
- "The" sentence starters: **12.8%** (limit 15%) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", + STORY_GUIDE extensions): **0** — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **228.3** (>=200), short **8.1%** (<=15%), long **52.5%** (>=15%) — PASS
- Actionable takeaways: present (5-step discipline + homeowner interview question) — PASS
- Original contribution: calibration math table + committed-cost framing — PASS
- Limitations section: dedicated ("What This Analysis Does Not Prove") — PASS
- Strongest counterargument: full-strength (garbage-in via FMI's own expert, small samples, tacit knowledge, vendor numbers) — PASS

## Critic scores

### 1. General Editor — 8.8/10
Cold open earns its place: a specific kitchen, specific invoices, specific red lines, then the gut punch that the bid for kitchen five learned nothing. Structure follows the template without feeling templated. The middle (adoption paragraph) sags slightly under vendor-survey caveats, but the caveats are handled honestly rather than buried. The five-step close is genuinely usable. Deduct for one soft transition ("Enough theory. Here is what the loop is worth") that tells rather than shows.

### 2. Voice Coach — 8.9/10
Distinctly Frank: methodical, process-obsessed, world-weary without cynicism ("twenty years of projects going sideways" is lived-in, not pasted on). Rhythm gate passes with real spread (variance 228): one-word hammers ("March.", "Ever.", "Yet.") against 40+ word builds. No banned phrases, no AI tells, no "X isn't about Y, it's about Z" reveal formula. Minor: two section transitions lean on the same "Here is" construction.

### 3. Ethics Reviewer — 9.0/10
No self-congratulation, no vendor cheerleading. The article is fair to builders (the discipline framing blames systems, not people) and honest about who the advice excludes (nothing here helps a bucket-one builder who won't code jobs). The homeowner interview question empowers the weaker party in the transaction. No moralizing.

### 4. Social/Shareability — 8.6/10
Two strong pull stats ($81,120 leakage, 28% overrun) and three quotable lines ("The final nail or the coffin," "Garbage in, calibrated garbage out," "The reports remember everything, and somebody finally has to read them"). Headline is specific, direct-address, and surprising. Deduct: the calibration table is the shareable asset but tables don't travel on social; the pull stats carry that load adequately.

### 5. Legal Accuracy — 8.8/10
All statistics attributed inline with hyperlinks (FMI via ClockShark, Buildxact via ConstructionPlacements, Buildertrend 2026 research, nedesestimating, NAHB via ProRemodeler, Propeller Aero/Oxford). Vendor-survey numbers explicitly flagged as vendor numbers. No legal advice given; the homeowner question is framed as an interview prompt, not a contractual recommendation. Deduct: the Kahneman/Flyvbjerg "outside view" reference is conceptual without a linked primary source.

### 6. Research Rigor — 8.9/10
Original contribution is real: the calibration table ($4,200/job leakage per biased cost code, $81,120/yr across three codes, 5-6 jobs to detection, 7-year software payback) is a calculation nobody published, with every assumption stated. Limitations section is dedicated and specific (illustrative model, vendor bias, unverified pricing, no outcome data). Counterarguments run at full strength, including the devastating one (FMI's own garbage-in point). Methodology transparency: inputs, noise assumption, and scaling behavior all shown. Deduct only for what is acknowledged: no field study of actual margin improvement exists.

### 7. Data Presentation — 8.8/10
Calibration table is clean, labeled, and the red-highlighted leakage column reads instantly. Pull stats pair a big number with a one-sentence explanation. All dollar figures are specific ($33,600, $4,788, $81,120), not ranges. Deduct: the table's "Actual (avg)" column could note the sample basis inline rather than relying on surrounding prose.

## Verdict
**Average: 8.83/10. All 7 critics ≥ 8.5. All hard gates pass. → SHIP (round 0).**

No revision round required. Known remaining gaps (documented, not blocking): no linked primary for the outside-view concept; table sample-basis note lives in prose rather than the table; one soft transition in the draft.
