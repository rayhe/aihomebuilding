# Critique: muse-while-you-sleep-agent-failures-2026 (Catherine Chen)

Date: 2026-11-01. Round 2. Gate results recorded; verdict SHIP (held by daily cap).

## Hard gates (final)
- Em dashes (grep -o '—' | wc -l): 1 (title tag only, site convention) — PASS (<=3)
- "The" sentence starters: 11.5% — PASS (<15%)
- Banned phrases: none found — PASS
- Sentence rhythm (sentence-rhythm-check.py): variance 239.9+ (>=200), short 10.9% (<=15%), long >=15% — PASS, exit 0
- Actionable takeaways: 6-item ordered checklist — PASS
- Word count: 1287 (in line with recent shipped deep-dives: 1277, 1643, 2578)

## Round 1 fixes (applied)
- short_pct was 16.1% (FAIL): merged "That was false." into the preceding sentence; merged three short punches ("Nobody involved was acting maliciously. Both users got their data back. Both vendors shipped structural fixes within days.") into one construction. Result: PASS.

## Round 2 fixes (applied)
- Tightened the Muse-architecture paragraph (cut "typed connector workers, a brokered browser," cataloging; cut redundant "when necessary to operate or secure the service" clause).
- Cut checklist throat-clearing ("This is the part where the article earns its keep").
- Cut steelman throat-clearing ("It would be dishonest to end there...") and the redundant over-scoping paragraph, folding its point into the counterargument's final sentence of the limitations-adjacent close.

## Critic scores (final, round 2)
1. General Editor — 8.8. Cold open earns attention (9 seconds, one API call), structure moves incident → mechanism → controls → checklist → steelman → limitations without detours. Trimmed round 2 reads tighter.
2. Voice Coach — 8.9. No banned phrases. Chen's dry legal voice is consistent ("a sentence in a chat window is an instruction, not a permission"; "Plan your threat model around that sentence"). Rhythm passes; sentence lengths vary from 3-word punches to 70-word builds.
3. Ethics — 9.0. No celebration of agent harm; vendors treated fairly (recovery and fixes credited); users' losses not sensationalized; steelman given full strength.
4. Social — 8.6. "Nine Seconds, Nine Days" is quotable; the six-item checklist is the shareable asset; the credential line ("a credential that cannot reach production") is pull-quote material.
5. Legal — 9.0. Lemkin's self-reported details attributed to his account; Replit CEO confirmation distinguished from user claims; PocketOS figures sourced to the post-incident report and outlet coverage; Muse architecture claims framed as Meta's disclosures via third-party analysis; "does not obviously fire" used instead of asserting a gap Meta has denied.
6. Rigor — 9.0. Original contribution: both destructive actions were legitimate well-formed tool calls against the wrong target, so prompt instructions and Sentinel-style egress gating both fail by construction; only user-side credential scoping and vendor-side post-credential controls demonstrably worked. Dedicated Limitations section; mechanism-parallel (not direct test) stated explicitly.
7. Data Presentation — 8.8. 1,206/1,196 records, ~4,000 fabricated records, 9 seconds, April 24 2026, ~30-minute recovery, ~3-month-old off-platform backup, all-caps freeze — specific, sourced, comparable across both incidents.

## Verdict
All 7 >= 8.5 and all hard gates pass → phase=SHIP. SHIP check: Publish #805 already shipped today 00:05 PDT (1/day cap) → held in SHIP for the next eligible run. Draft in drafts/; hero already in drafts/ (real JPEG ffd8, 1920x1280) — next SHIP run moves draft to stories/ AND hero to images/ (hero not yet in images/).
