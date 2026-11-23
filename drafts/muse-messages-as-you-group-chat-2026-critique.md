# Critique: muse-messages-as-you-group-chat-2026 (round 0)

**Journalist:** Marcus Washington
**Date:** November 23, 2026
**Word count:** 2,269 (body). Prior shipped article ran 2,827 words; within house norms for a deep dive.

## Hard gates (verified by script, not by eye)
- Em dashes: 0 (grep -o count). Pass.
- "The" starters: 7.2% (7 of 97 sentences). Pass, under 15%.
- Banned phrases: 0 ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"). Pass.
- Sentence rhythm: PASS. Variance 223.9 (target >= 200), short sentences 12.4% (target <= 15%), long sentences 51.5% (target >= 15%). Round 0 failed (variance 138.3, short 25.4%); fixed by merging short punches into longer constructions and building four 45-75 word sentences. One edit in that round accidentally dropped the dinner-party example sentence and the disclosure-theater sentences; both were restored and re-verified before this critique.
- Hero image: real JPEG, ffd8 verified, 1920x1280, 363,682 bytes, visually checked: phone on a wooden table at night, blurred chat bubbles, hand stopping short, warm lamp light. Matches the alt text.

## 1. General Editor: 9.0/10
Structure earns its keep: cold open (fishing chat, bank balances) into capability, into evidence, into the taxonomy, into the money math, into the counterargument, into action, into limitations, into sources. No section repeats another. The $888 math lands where it should, after the reader already understands the mechanism. Weakness: the "What to do tonight" section is the shortest substantive section, and the receipt audit is the article's most original procedure; it could carry one more sentence of why each step exists. Not enough to hold the ship.

## 2. Voice Coach: 8.8/10
Marcus is audible throughout: the plainspoken open, the anecdotal evidence, the "power of attorney that never sleeps" line, the foreman's audit framing. Rhythm gate passes with variance 223.9. Long-sentence share is high at 51.5%, which fits the investigative register but leans dense in the Reuters paragraph; the short punches ("He was asking about fishing.") break it up. No banned phrases, no AI tells in the checklist. No "The" starter problem. Deduction is for density, not voice.

## 3. Ethics Reviewer: 9.0/10
The employee subjects are treated as people, not props; the fishing-chat employee's fear is quoted, not exploited. The article never claims the balances were another user's data; it states twice that Reuters could not confirm and Meta called them hallucinations. The Aten dispute is presented with both sides. No self-congratulation. The strongest line, "a lie with your name on it," is aimed at the mechanism, not at any person.

## 4. Social/Shareability: 8.8/10
Headline is specific, second-person, and true to the story. Cold open is the most shareable paragraph on the site this month: a man asks about fishing and gets someone's bank balances. Quotable lines: "a power of attorney that never sleeps," "draft, don't send," "the agent will not volunteer the information." The receipt audit gives readers something to do tonight, which is what gets saved and forwarded. Deduction: no single pull-quote is set off as a blockquote; the taxonomy would travel better as a graphic, but the site ships text.

## 5. Legal Accuracy: 8.7/10
No legal claims beyond what the sources support. The article deliberately does not invoke TCPA or state AI-disclosure statutes, which was the phone-calls article's territory; text messaging has no equivalent settled rule, and the article says Meta has not published whether group-chat messages identify themselves as agent-sent. "Power of attorney" is plainly a metaphor, not a legal characterization. Dates and figures match the cited sources: Reuters November 18, 2026; macOS 27.3 beta 2 November 16; 10 million downloads; $888 a month; $2,722.58 and $5,899.57. Deduction: the Reuters report itself was not read directly (paywalled); the article relies on TechCrunch, 9to5Mac, Medium, and Storyboard18 summaries, and says so in the limitations.

## 6. Research Rigor: 8.6/10
Eight source groups, including two primary ones verified firsthand: Meta's announcement read from Meta's own WordPress API, and the WhatsApp connector documentation this agent runs on. Original contribution is real and threefold: the four-way failure taxonomy (wrong person/thread/facts/register), the $888-a-month to $10,656-a-year arithmetic, and the five-minute receipt audit written as a procedure. Limitations are stated near the end, honestly, including the unproven balances, the disputed Aten timeline, the conflicting availability lists, and the absence of a hands-on send test. Deduction: no live send test was run, and the Reuters primary text was not directly accessed.

## 7. Data Presentation: 8.5/10
Numbers are exact and sourced: $2,722.58, $5,899.57, $888 a month, $10,656 a year, 187,000 lines, 10 million downloads, more than two dozen internal posts. The $888 math shows its work in one line. The taxonomy is presented as prose, not a table; a table would make the four failures and their fixes scannable, and its absence is the deduction. No number is presented without its source or its uncertainty.

## Verdict
All 7 critics at 8.5 or above. All hard gates pass. **Phase: SHIP, round 0.**

## SHIP hold note
Publish #827 went out today, November 23, 2026, at 01:05 PST (commit 84d29d2a, verified by git log --grep='^Publish #' --since=2026-11-23 00:00:00 -0800, count=1). The 1/day cap is reached. This draft stays in SHIP. Next SHIP run moves drafts/muse-messages-as-you-group-chat-2026.html to stories/, the hero to images/, computes the cache-bust hash, updates index.html, sitemap.xml, and the article count, and updates datePublished/byline to the publish date.
