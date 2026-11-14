# Research: Muse Spaces — Describe It Once, Keep It Forever

**Slug:** muse-spaces-describe-once-keep-it-2026
**Journalist:** Elena Vasquez (design & UX of AI agents)
**Date:** November 14, 2026
**Status:** RESEARCH complete, ready for DRAFT

## Topic
Meta launched Spaces in Muse on November 6, 2026: describe an idea in plain language and Muse builds a persistent, custom mini-app inside the Muse app. A tracker, planner, game, or dashboard you return to instead of re-prompting a chat thread every time. This is the biggest interface change to Muse since its September 8 launch: the agent stops being only a conversation and becomes a place with rooms.

## Kill test
PASS. A reader deciding whether to build their routines into Spaces needs to know: what a Space actually is, which of Meta's nine examples depend on live connector access, what happens when a connection breaks, and the lock-in cost (no export, no sharing yet). That is a use-it-better / trust-it-wisely decision, not a press-release rewrite.

## Self-critique gate
- Proposed angle: Spaces as the moment Muse stops being a chat and becomes a place; audit Meta's nine examples against what connectors can actually do, and price the lock-in.
- Challenge: Is this the best use of the cycle? Yes. Spaces + Voice + Wonder models landed Nov 5-6, eight days ago, and no article on this site covers Spaces yet. The United agent-booking ban (#818) covered the legal perimeter; this covers the interface interior. Fresh, sourced, distinct.
- Verdict: Proceed.

## Primary sources (verified)
1. **Meta Newsroom, "Design the Muse App, Just for You," November 6, 2026** — read firsthand via browser.open (crawled 2026-11-14 10:27 UTC). Full text captured. Key claims: "A space is a custom experience you create inside Muse by describing your idea, like a holiday gift tracker, a daily word game, or a planning board for your next DIY project." Spaces can be pinned to the sidebar, moved to main tabs, hidden, and scheduled to appear at set times (work planner weekdays, weekend plans Saturday). "Your spaces are personal from the start. Connect the apps you use, and your spaces keep themselves up to date in the background, so new concert dates, price changes, or savings progress show up without you having to ask." Sharing: "We're also exploring ways for you to share your spaces with others." Same post: specialized models trained with learnings from Muse Wonder rolling out. URL: https://about.fb.com/news/2026/11/introducing-spaces-customize-muse-app/
2. **The Verge, Emma Roth, "Meta's Muse AI can create custom 'spaces' for the version of the app you need right now," November 6, 2026** — independent coverage: connect Gmail, Google Calendar, OpenTable, Notion and other apps Muse works with; Muse pulls information in the background to update pricing, dates, and other information. Active Memory and Active Focus from Muse Wonder coming to Muse and Meta AI. Spaces rolling out to all Muse users.
3. **TechCrunch, Lucas Ropek, November 6, 2026** — Zuckerberg's own Spaces: a barbecue game, an event tracker, and a home control dashboard. Reads Spaces as topic-focused workspaces where Muse works toward one goal.
4. **Meta AI Research / Superintelligence Labs, "Bringing Specialized Models to Muse and Meta AI," November 6, 2026** — the models behind the rollout: Muse forgets critical information 2.4x less often; uses key context correctly in 90% of tasks, up from 76%; Personal Superintelligence Index 38% to 47%; Active Focus gives a 67% improvement in completing everyday tasks where unexpected issues arise. All figures from Meta's own evaluations; no methodology, task counts, or third-party verification published.

## Facts established
- Launch: November 6, 2026, "everywhere Muse is available." Muse live in five countries as of Nov 5, 2026: US, Canada, Japan, Singapore, Mexico (per builtwithmuse.com; Japan launched Oct 23, Mexico Nov 5).
- Voice + avatar rolled out November 5 (US only, mobile/web/Mac); Spaces November 6 — two features in two days, two months after Muse's September 8 US launch.
- Meta lists NINE example spaces: shopping hub (gift ideas, Instagram saves wishlists, Marketplace listings + buyer messages), school dashboard (events from school emails into calendar), music tracker (new releases, upcoming shows), wedding planner (RSVP list, vendor invoices, to-dos), trivia game, podcast studio (episode ideas, research, scripts), small-business order tracker (new orders, customer messages, what ships today), freelance client hub (projects, deadlines, invoices), trip planner (flights, hotel, reservations, day-by-day itinerary).
- iPhone app v14.3 (Nov 6) release notes describe Spaces, confirming iOS. No separate confirmation for Mac, web, or Android in sources checked; nothing about Spaces inside WhatsApp.
- No price stated for Spaces anywhere in the announcement or coverage checked. No usage-limit statement.
- Sharing does not exist. Export does not exist (nothing in the announcement mentions export, embed, or API). A Space lives inside Muse only.

## Original contribution (novel analysis for this article)
1. **The nine-example audit.** Sort Meta's nine examples by what they actually require: (a) pure display of things Muse already knows (trivia game, podcast studio — no live connector needed); (b) read access to connected apps (school dashboard needs email reads; music tracker needs release/show data); (c) read-plus-write on money or other people's data (order tracker touches customer messages and shipping; client hub touches invoices). The pitch treats all nine as equal; the permission and failure surface is not equal. A school dashboard that misreads one email date is a missed recital. An order tracker that misreads a customer message is a missed shipment.
2. **The re-prompting math.** In chat, a tracker you check three times a week costs three re-descriptions a week, about 150 a year, each one a chance for the agent to misunderstand you again. A Space pays the description cost once. That is the real product: not a prettier chat, but an amortized instruction. Flip side: an instruction you write once and never revisit is also an instruction that goes stale silently, which is why the background-update claim matters so much and why its failure modes (stale price, dead connection, no warning) need naming.
3. **The word-count gap.** The entire Spaces announcement runs under 600 words. The September 8 Muse launch came with a long technical account of Sentinel, permission scopes, and audit trails. The Spaces post says nothing about what a Space may read or write, which connector scopes apply, what happens when a connection breaks, or whether a Space's background updates are themselves approval-gated. A feature that reads your email in the background deserves the permission paragraph the launch got.
4. **The lock-in ledger.** What you build in Muse stays in Muse. No export, no sharing, no stated portability. Compare with the chat era: a good prompt could be copied anywhere. A good Space cannot. Every hour spent refining a Space raises the cost of leaving.

## Limitations / what we could not verify
- No hands-on test: no Muse account was used for this article, so no firsthand confirmation that Spaces appears on every account, on which platforms, or how background updates behave when a connector disconnects.
- No independent testing of Active Memory / Active Focus claims; all figures are Meta's internal evaluations with no published methodology.
- No confirmation of which connector permissions a Space inherits (read vs. write), update intervals, stale-data warnings, or failure behavior.
- Pricing and plan gating for Spaces unconfirmed; announcement states no price.

## Strongest counterargument
Spaces may be a prettier trap: the chat interface at least made the agent's work visible step by step, with an audit trail you could read. A Space hides the work behind a tidy screen, and a tidy screen that shows a wrong price or a missed date looks exactly like a correct one. The "describe once" promise is also a "trust once" demand, and Muse's own record on memory (2.4x less forgetting still means forgetting happens) and on mid-job context loss says the first version of any Space will be wrong in ways you only discover when it matters. The honest version of this feature is a dashboard you must still verify, not a tool you can stop watching.

## Sources list (for inline links)
- Meta Newsroom, "Design the Muse App, Just for You," Nov 6, 2026: https://about.fb.com/news/2026/11/introducing-spaces-customize-muse-app/
- The Verge, Emma Roth, "Meta's Muse AI can create custom 'spaces' for the version of the app you need right now," Nov 6, 2026
- TechCrunch, Lucas Ropek, Nov 6, 2026 (Spaces launch; Zuckerberg's BBQ game, event tracker, home control dashboard)
- Meta AI Research, "Bringing Specialized Models to Muse and Meta AI," Nov 6, 2026 (Active Memory / Active Focus figures)
- aihomebuilding.com, "You Are Unreachable. Your Agent Is Not Idle." (muse-unreachable-decision-rules-2026) — prior site coverage of approval gaps, for the background-updates permission question
- aihomebuilding.com, "Muse Now Forgets 2.4x Less" context via Meta's Nov 6 models post (same source as #4)

## Notes for the draft (Elena Vasquez voice)
- Elegant, precise, spatial: a Space is a room, not a thread. Make the reader feel the difference between visiting a chat and living with a dashboard.
- Skeptical of demos that flatten agency into autocomplete; Spaces could be exactly that flattening, or the opposite.
- Cold open: a person, mid-action — someone checking the same gift list for the fourth time in a chat thread, re-explaining it to an agent that forgot.
- Length: 800-1200 words, deep dive. Date: November 14, 2026.
- Hard gates to respect in the draft: 0 banned phrases, em dashes 3 or fewer, "The" sentence starters under 15%, sentence rhythm variance 200+.
