# Research: Muse Texts You First — The Unfinished Etiquette of Proactive Agents

**Slug:** muse-agent-texts-you-first-2026
**Journalist:** Elena Vasquez (Design & UX of AI agents)
**Date:** October 13, 2026
**Kill test:** PASS — helps readers configure Muse's proactive surfaces (reminders, scheduled tasks, suggestions) and decide how much interruptive access to grant an agent with their calendar, inbox, and location. Directly actionable.

## Angle
Muse doesn't wait for you anymore. It sends messages at scheduled times, pings location-based reminders, and proactively suggests actions (a saved Instagram recipe reel becomes a grocery list). The design question nobody has settled: when is an agent allowed to interrupt a human? The article builds a "proactivity ladder" (reactive → scheduled → proactive-notify → proactive-act) and runs interruption-cost math nobody has published for personal agents.

## Primary sources

### 1. Meta — "How to manage reminders and scheduled tasks with Muse" (meta.com help)
URL: https://www.meta.com/help/artificial-intelligence/1484325780075655/
- One-time or location-based reminders: "Get a message at a specific date and time or when near a specific location."
- Recurring tasks: daily, weekly, custom intervals — "You'll receive a message each time the task is due."
- View via Upcoming tab (Assistant Icon → Upcoming).
- Cancel/change by natural language.

### 2. Meta launch announcement (Sept 8, 2026; via PYMNTS)
URL: https://www.pymnts.com/facebook-meta/2026/meta-targets-mass-market-automation-with-new-muse-ai-agent/
- Muse is "a secure, private personal AI agent that proactively helps people meet their goals and suggests ideas" (digitalmatters.me summary of the announcement).
- "For bigger tasks, the personal AI agent can keep working after the user closes the app and come back when something changes or when it needs the user's approval."
- Talk to it in the Muse app or in WhatsApp, "as if they were messaging another person."
- Runs on Muse Secure VM; Sentinel monitors external actions.

### 3. Meta Muse Wonder announcement (Oct 12, 2026; via iPhone in Canada)
URL: https://www.iphoneincanada.ca/2026/10/12/meta-muse-wonder-smarter-safer/
- Muse Wonder + Muse Wonder Full; Active Memory ("remember important details from earlier chats and bring them up when they matter"); Active Focus ("keeps the model working on longer tasks and gets it to try a different approach when something goes wrong").
- Artificial Analysis Intelligence Index: Wonder Full 56, Wonder 52.

### 4. Builtin overview — Proactive Planning
URL: https://builtin.com/articles/meta-muse
- Muse "can connect to Google Workspace, fitness, e-commerce, and social media apps. By tracking user habits across these applications, Muse can anticipate a user's needs and act accordingly without any prior guidance. It can send reminders based on email content, suggest future purchases related to past shopping patterns and put together a workout plan centered around a user's health data."

### 5. Gloria Mark interruption research (via Gallup interview + CHI 2005)
URL: https://news.gallup.com/businessjournal/23146/too-many-interruptions-work.aspx
- Mark (UC Irvine): interrupted work resumed same-day 81.9% of the time, on average in 23 minutes 15 seconds — but with ~2 intervening tasks first; "there's a cognitive cost to an interruption."
- HONESTY NOTE (from a research digest cross-checking her papers): the published CHI 2005 figure is 25 min 26 sec elapsed time to resumption (conditioned on same-day resumption, 77%), during which workers completed ~2 other tasks — it measures resumption, not cognitive recovery. Mark herself quoted "23:15" in the Gallup interview. Use the number WITH this caveat in the article — the contested number is part of the rigor story.

### 6. Jakob Nielsen UX Roundup (Oct 2, 2026) — proactive AI studies
URL: https://jakobnielsenphd.substack.com/p/ux-roundup-20261002
- Two studies agree: "proactive AI should speak first, softly, and be easy to ignore. Give users the dials, make silence cost nothing."
- Shamsi Iqbal & Brian Bailey (Illinois): deferring notifications to natural breakpoints (pauses between subtasks) reduced frustration and reaction time vs. immediate delivery.
- "An interruption is a withdrawal from the user's attention, and the balance is smaller than you think."

### 7. Real-world parallel — EV smart assistants "too annoying"
URL: https://ai.itbrief.co/posts/ai-in-evs-are-smart-assistants-becoming-too-annoying/
- Owners report AI assistants "proactively suggest actions... often without user initiation or explicit consent," "constantly offering suggestions," limited customization, "always on." Precedent for what goes wrong when proactivity ships without manners.

### 8. ChatMaxima — Personal Agent Protocol (Meta + Sierra, Oct 6, 2026)
URL: https://chatmaxima.com/blog/meta-muse-ai-agent-businesses-whatsapp-messenger/
- Open standard for how agents deal with businesses; consumer decides agent access, business sets agent permissions. Cloudflare now blocks AI agents by default on ad-supported pages for new domains.

### 9. Skepticism material — Patrick Wardle 0-day report (RocketNews, Oct 2026)
URL: https://rocketnews.com/2026/10/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day-6/
- Reported: locally installed apps could access Muse auth tokens on macOS; voice transcription routed to Meta cloud created the vector. Attribute carefully ("security researcher Patrick Wardle reported..."). Use briefly — this is Catherine's beat; Elena's angle stays on design.

## Original contribution
1. **The proactivity ladder** — four rungs: (1) reactive Q&A, (2) scheduled delivery (reminders/crons you asked for), (3) proactive notification (suggestions it initiates), (4) proactive action (it does things unprompted). Each rung changes the etiquette question. Nobody has published this taxonomy for personal agents.
2. **Interruption-cost math for agent pings**: applying Mark's resumption figures to proactive agent messages. 6 proactive pings/day × ~23 min resumption cycle = ~2.3 hours of displaced attention, with stated assumptions (not every ping interrupts deep work; batching into digests collapses the cost; the 23:15 figure is resumption, not recovery, and is itself contested — see Limitations).
3. **Design audit of Muse's actual controls**: what the user can actually dial today (Upcoming tab, natural-language cancel, location reminders) vs. what's missing (per-category quiet hours, digest batching, an "interruptibility budget").

## Strongest counterargument
Proactivity is the entire point — an agent that never speaks first is just a chatbot with a calendar. The users who benefit most (caregivers, people managing chronic conditions, anyone drowning in logistics) need the agent to notice things they didn't ask about. Calibration, not elimination, is the design problem. And "off" exists: you can cancel any scheduled task in plain language.

## Limitations
- Cannot independently measure Muse's real-world proactive ping frequency; Meta publishes no data on suggestion volume or acceptance rates.
- Mark's interruption research comes from office-work contexts (2005–2015), not agent-notification contexts; the 23:15 figure is contested even within her own publications (see note above).
- Proactive-suggestion quality varies by connected data; a wrong proactive suggestion (misremembered dietary need, mistimed reminder) has costs the ladder doesn't quantify.
- Wardle 0-day cited from secondary reporting; no independent verification.

## Actionable takeaways (required)
- Audit: ask Muse "what reminders do I have?" — the Upcoming tab is the inventory.
- Separate rungs: keep scheduled delivery (rung 2) generous, proactive suggestions (rung 3) on a short leash until you've seen its hit rate.
- Demand batching: one morning digest beats six scattered pings (Iqbal & Bailey breakpoints).
- Location reminders are the highest-value proactive surface (groceries when near the store) and the lowest-interruption one.
- Test the off-switch: cancel something by voice and confirm it's gone from Upcoming — trust the control, not the promise.
