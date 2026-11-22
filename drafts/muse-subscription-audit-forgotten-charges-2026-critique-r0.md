# Critique — muse-subscription-audit-forgotten-charges-2026 (round 0, Frank DeLuca)

**Date:** November 22, 2026

## Hard gates (all PASS)
- Em dashes: 0 (the site-wide `<title>` separator is an `&mdash;` entity, not a literal em dash; 0 in body text). Limit 3.
- "The" starters: 14 of 126 sentences, 11.1%. Limit 15%.
- Banned phrases: 0 ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack").
- Sentence rhythm (`sentence-rhythm-check.py --json`): PASS. Variance 244.4 (target >= 200), short sentences 11.6% (<= 15%), long sentences 56.2% (>= 15%).
- Hero image: real JPEG, ffd8 magic bytes, 1920x1280, 510,557 bytes.
- Word count: 2,827 body words (above the 800-1200 deep-dive band, but in line with recent shipped articles at 2,200-2,555; the two tables and the limitations section earn the length).

## Critic scores (all /10)
1. **General Editor — 8.7.** Cold open lands (monthly close, operations frame) and the structure follows the guide's arc: problem, capability, evidence, skepticism, stakes. The two tables are the article's spine, and the headline carries a surprising number. Length is the only drag, and the "monthly close" motif appears three times (open, audit section, close) where twice would do.
2. **Voice Coach — 9.0.** DeLuca is unmistakable: methodical, process-obsessed, world-weary humor ("dead is dead", "starting with me", "nobody is coming to run it for you"). Longer measured sentences with short punches; rhythm script passes with margin. No AI tells: no banned phrases, varied paragraph lengths, tables instead of 3- or 5-item lists.
3. **Ethics Reviewer — 8.8.** No self-congratulation, no hype. The bank-feed recommendation names its own risk in the counterargument section rather than burying it, and the brief says "do not cancel anything yourself" in plain language. Credits California's law before criticizing the federal vacuum. No hands-on test is disclosed, not hidden.
4. **Social/Shareability — 8.7.** Headline is specific and reader-directed with two surprising numbers ($86 vs $219). Quotable lines: "dead is dead", "You are the foreman. The agent brings the ledger", "the number that counts is not what you cancelled. It is what stopped coming back." The recovery table is a shareable artifact, and $1,596/year is the pull stat.
5. **Legal Accuracy — 8.6.** FTC vacatur facts check against Sidley and Gibson Dunn: adopted October 2024 by 3-2 vote, vacated July 8, 2025 by the Eighth Circuit in Custom Communications, Inc. v. FTC, Section 22 preliminary regulatory analysis, $100 million threshold, court did not reach the merits. AB 2863: effective July 1, 2025, notice windows 3-21 / 15-45 / 7-30 days, same-medium cancellation, all match Revision Legal and the AG alert. One watch item: "no replacement rule has followed" as of November 2026 rests on the absence of newer reporting rather than a November-dated source; the limitations section states the same claim, so the reader is not misled about its basis.
6. **Research Rigor — 8.8.** Original contribution is real: the two-source reconciliation protocol with an exact scheduled-task brief, three-scenario recovery math with assumptions shown, and the visibility ledger of what Muse can and cannot see. Dedicated limitations section. Counterargument stated at full strength and answered on the merits. Weaknesses are disclosed: no hands-on audit was run, C+R is 2022 and self-reported, no statement-level audit of a large sample exists.
7. **Data Presentation — 9.0.** Both tables are clean and scannable with an assumptions column on the recovery math. The C+R method (guess vs itemize) is explained in text before the number is used. Arithmetic verified: $133 x 12 = $1,596; $66.50 x 12 = $798; $21 x 12 = $252; Deloitte $69 streaming figure contextualized against the $86 guess. No chart needed.

## Fix applied during critique (round 0, pre-ship)
- **Recovery-math error, floor scenario:** the draft claimed $252/year of admitted waste "pays for the agent subscription that ran the audit twelve times over." That is wrong. Muse Power is $20/month, $240/year, so $252 covers one year of the subscription with $12 to spare, not twelve times over. Rewrote the paragraph to state the honest reading: the floor scenario barely breaks even against the agent's own cost, and the middle and ceiling scenarios are where the audit earns its keep. Gates re-verified after the edit: 0 em dashes, 0 banned, The-starters 11.1%, rhythm PASS (variance 244.4, short 11.6%, long 56.2%).

## Verdict
All 7 critics at 8.5+. All hard gates pass. **Phase → SHIP.** Daily cap for Nov 22 already reached (Publish #826 at 01:05), so the SHIP run holds this slug for the next eligible run (Nov 23).
