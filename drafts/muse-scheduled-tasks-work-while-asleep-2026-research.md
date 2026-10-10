# Research: Half Your Agent's Work Should Happen While You're Asleep
**Slug:** muse-scheduled-tasks-work-while-asleep-2026
**Journalist:** Jake Kowalski (agent capabilities, tools, hands-on how-tos)
**Date:** October 10, 2026
**Article type:** flagship explainer + how-to (first Muse-focused article on the site)

## Thesis
The single feature that separates Muse from a chatbot is scheduled, autonomous background work. A chatbot answers when asked. Muse keeps working after you close the app. This article explains what that actually means in practice, what a power user does with it, and the honest trust ladder for handing an agent your accounts — with the skepticism intact.

## Kill test: PASS
Helps a reader: (1) understand the core capability difference between agent and chatbot, (2) set up their own scheduled tasks with the trust ladder, (3) decide whether to trust an agent with real accounts. Not a press-release summary.

## Primary sources (3+ required)
1. **Meta's own launch + design docs** — "Introducing Muse: The World's First Personal AI Agent Built for Everyone" (about.fb.com, Sept 8, 2026); "How We Designed Muse" (introducing.muse.ai); security details at security.muse.ai. Cited via nexscope.ai source list (Oct 2026). Establishes: Muse Secure VM, own browser, Muse Spark model, asks-before-sensitive-actions policy, background tasks and scheduled work in design docs.
2. **TechCrunch, Sarah Perez, "Everything new coming to Meta's AI agent Muse" (Sept 23, 2026, Connect announcements)** — avatar with realtime video chat, glasses integration with wake word, Muse for Mac ("walk away from your computer and it keeps working"). Primary-ish tech press with on-stage quotes (Alexandr Wang).
3. **Power-user field report: sozai.app transcript, "26 Meta Muse Use Cases I've Already Implemented" (early Oct 2026)** — independent creator, no Meta affiliation disclosed as none ("not paid by Meta or affiliated"). Concrete verifiable claims: named his Muse "Q"; scheduled nightly news briefings (written, voice note, podcast formats); tennis court availability checks + booking; custom Kanban board built on demand by the agent; Google Calendar connector (broke for a while, came back, agent notified him); Gmail; Spotify connector; Plaid-connected financial monitoring; SMS/RCS texting as user (Android: individuals only, no group texts); "draft-before-send" policy the user imposed; phone-calling feature rolling out (recording + transcript, not available to him yet); "half my work happens while he's asleep."
4. **Stark Insider, "Meta Muse vs OpenClaw" (Sept 2026)** — asked the agent to describe its own stack: persistent Linux VM, bash shell, MEMORY.md + dated notes with semantic search, real Chromium browser with persistent sessions, subagents, skills, cron scheduling with event hooks. Independent corroboration of the architecture.
5. **iphoneincanada.ca (Oct 7, 2026)** — Muse for Windows announced at Microsoft's Windows and Surface event; MXC (Microsoft Execution Containers) sandboxing, "lets organizations decide which files and networks an AI agent can reach." Confirms the sandboxing/infrastructure layer story.
6. **ai-market-watch (Sept 23, 2026)** — honest note: Meta's glasses/Connect announcements "suppl[y] no evidence of completion rates or adoption." Useful for skepticism section.

## Hard numbers
- Launch: Sept 8, 2026, US (iOS, Android, web at muse.ai; WhatsApp messaging). Canada Sept 18. Mac app Sept 17. iPad app Oct 7.
- Sensor Tower estimates: 3.4M downloads in the week before Sept 29; passed 6.6M installs (per gossipherald, Oct 2026); No. 1 free US App Store for ~2 weeks (via 9to5Mac).
- Pricing (per openaimaster, Oct 2026): free tier up to 100M tokens/week; Power $20/mo; Maximum $100/mo. Pro access excludes EEA/Switzerland/UK at launch.
- Rivals with same shape: OpenAI Dots AI (announced Sept 29, 2026, Pro/business focus); Grok Bot (public beta Aug 2026); Manus (early 2025); OpenClaw (Nov 2025). Instinct raised $350M (per TBS News).
- Trust incidents: public privacy dispute (Meta denies Muse read a user's messages without consent); Bank of America note warning Muse could pull purchases away from Apple.

## Original contribution
The **Trust Ladder** framework — a 4-level delegation model synthesized from the power user's practices and Meta's architecture, mapped to concrete Muse features:
- Level 1 (read-only): scheduled monitoring, news briefs, calendar digests. Failure mode: stale data, cost ~zero if wrong.
- Level 2 (draft-before-send): emails, texts, posts drafted for approval. Failure mode: embarrassing drafts (caught by you).
- Level 3 (reversible with receipts): bookings, purchases with protections (Stripe Link purchase protections — first for an AI agent), calendar writes. Failure mode: money moves; receipts + approval-before-sensitive-actions are the guardrails.
- Level 4 (autonomous): daily summary of what it did overnight. Failure mode: silent wrongness — requires the activity log review habit.
This is editorial synthesis, not vendor claims.

## Strongest counterargument
A chatbot that schedules things is still a probabilistic system with your keys. Meta publishes no task-completion rates. One power user's self-report is not an audit. Connectors break (his Google Calendar connector died and came back; the agent had to tell him). The phone-calling feature that would make restaurant booking work without portals isn't fully rolled out. The privacy dispute and BofA note are real. The honest read: scheduled work is the most useful feature and the least verifiable, because nobody independent measures whether the 3 AM tasks actually completed correctly.

## Limitations
- No independent benchmark of scheduled-task reliability exists; the article says so explicitly.
- Token/pricing economics: no published data on what a typical scheduled task costs in tokens; the article does NOT invent token math.
- The sozai creator is one self-selected power user; not representative.
- Download numbers are analyst estimates, not Meta disclosures.

## Kill-test on sources
All claims traceable: Meta launch/design docs (about.fb.com, introducing.muse.ai, security.muse.ai), TechCrunch Connect coverage, named user report with specifics, Sensor Tower via 9to5Mac/Reuters citations, Stark Insider architecture confirmation.

## Angles rejected
- "Muse vs Dots vs Grok comparison" — feature checklists are misleading per saganote; would repeat their work.
- Pure pricing/economics — no solid token-cost data; would be invented math.
- Avatar/glasses features — demo-stage, nothing verifiable; the article mentions them as "coming months" only.
