# Critique round 0: muse-unreachable-decision-rules-2026

Date: October 27, 2026. Verdict: PASS to SHIP. All 7 critics at 8.5 or above, all hard gates green.

## Hard gates (regex counts are the source of truth)

- Em dashes: `grep -o '—' drafts/muse-unreachable-decision-rules-2026.html | wc -l` = 1, and the single hit is the site title separator in `<title>` ("Idle. — AI Home Building"), the same separator every published article carries. Body count = 0. Gate: PASS (limit 3).
- "The" sentence starters: 0 of 128 sentences (0.0%). Gate: PASS (limit 15%).
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake"): 0 hits. Gate: PASS.
- Markup: article-hero, article-container, article-body; links ../css/bootstrap.min.css plus print.css. No legacy story-page/story-body classes, no story.css. PASS.
- Hero: real JPEG, 1920x1280, md5 prefix ad239dd0, cache-busted ?v=ad239dd0 on img, og:image, and JSON-LD image.

## Critic scores (/10)

1. General, 9.0: The unreachable-hours gap is a real hole between the site's scheduled-work and approval-dialog coverage. The flight cold open lands, the four tiers are memorable, and the copy-ready block gives the reader something to paste. Minor: the bill-negotiation and client-message examples both resolve to HOLD, which slightly blurs tier distinctions; acceptable, since both are correct applications.
2. Voice (Frank DeLuca), 9.0: Methodical, process-obsessed, longer measured sentences, failure modes first, world-weary without preachiness. Distinct from Jake's punch and Catherine's legal sharpness. The "deliberately boring" line is pure DeLuca.
3. Ethics, 8.5: The piece refuses to let the agent improvise on a client's behalf or accept a contract unseen, and it names the credibility cost, not just the money cost. It could press harder on who bears harm when a held task is a medical or caregiving task; the tier system covers it implicitly but never says so.
4. Social, 8.5: No second-person shaming, no hype, no claim that everyone can afford to be unreachable. The fallback order (named second person, then draft, then expiry) is socially realistic rather than assuming a household staff. Weak spot: readers without a trusted second person get HOLD/EXPIRE only, which the article states but does not soften.
5. Legal, 8.5: No legal advice is offered; contract-acceptance risk is framed as practical exposure, not doctrine. OWASP LLM06 is attributed correctly (functionality, permissions, autonomy; approval as last layer). The practitioner five-decision list is explicitly labeled one writer's boundary, not a standard.
6. Rigor, 9.0: Sourcing quality is labeled throughout: Meta claims via independent summaries, the 10M figure via Zuckerberg, the approval-shelf-life gap stated as "no published rule was found" rather than filled with invention. Monday/Friday test is original and checkable. No firsthand meter test is claimed.
7. Data Presentation, 8.5: Numbers are few and all attributed; the article leans on rules rather than tables, which fits a protocol piece. A small tier-assignment table (harm x reversibility) would have made the assignment test scannable, but the two-question test in prose does the same work.

## Result

No revision round needed. Phase: SHIP. SHIP itself is held by the 1/day cap in the same run: Publish #800 already landed today (October 27, 2026, 00:05 PDT), so this draft waits in SHIP for the next eligible run, which must move the hero from drafts/ to images/ (already cache-busted) plus the draft to stories/ and update index.html, sitemap.xml, and the article count.
