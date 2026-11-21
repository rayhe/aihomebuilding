# Research: Muse vs. ChatGPT, Claude, and Gemini — Four Personal Agents, One $20 Decision

**Slug:** muse-vs-chatgpt-claude-gemini-personal-agent-2026
**Journalist:** Jake Kowalski (agent capabilities, tools, comparisons)
**Date researched:** November 21, 2026
**Kill test:** PASS — a reader choosing which agent to trust with real work (email, calendar, purchases, scheduled jobs) needs this comparison, and nobody has scored all four on the same verifiable criteria.

## Angle
All four big labs now sell a personal agent that works while you sleep. All four cost about $20 a month at the entry paid tier. But they meter work in four different currencies — tokens, messages, 5-hour sessions, and "free with limits" — and those currencies hide wildly different amounts of actual work. This article scores the four agents on the same eight criteria, all checkable against the vendors' own docs, and does the per-dollar math nobody else has published: what one $20 bill actually buys in scheduled jobs.

## The four agents (as of Nov 21, 2026)

### Muse (Meta)
- Announced September 8, 2026 as a personal AI agent that "doesn't just answer questions, it actually does the work" (Meta launch post).
- Own computer: a Secure VM with terminal, filesystem, live Chromium browser, connected accounts (Gmail, Calendar), skills, scheduled work (crons), voice/text messaging surfaces.
- Pricing (Meta subscriptions help page, figures as of Nov 12, 2026): Free tier with an unpublished usage limit; Power $20/month for 500M Muse tokens/week; Maximum $100/month for 3B tokens/week. No annual commitment; monthly renewal; cancel anytime.
- Outbound phone calls to US businesses added November 12, 2026, announced by Chief AI Officer Alexandr Wang on X; paid plans only (Power and Maximum), US only.
- Model pricing via API (JPMorgan note, Oct 12, 2026): Muse Wonder $4.00/1M input tokens, $20.00/1M output; Muse Spark 1.3 $1.25/1M input, $4.25/1M output.
- Token meter caveat: Meta's usage help page says how much usage a task consumes varies with feature, request complexity, input/output size and model tier, and Meta does not guarantee a set amount of usage will produce a fixed quantity or quality of output. There is no published tasks-per-token conversion.
- Source: Meta launch announcement Sept 8, 2026; Meta subscriptions help page; TechCrunch reporting on calling; JPMorgan research Oct 12, 2026.

### ChatGPT Work / agent mode (OpenAI)
- Agent mode: select from tools menu or type /agent; agent executes multi-step tasks, pauses for clarification, can be interrupted mid-task (OpenAI Help Center, "ChatGPT agent").
- Usage limits (OpenAI Help Center): Plus 40 agent messages/month; Pro 400/month; Business & Enterprise 40/month. Each unique agent invocation counts, including invocations inside scheduled tasks.
- Scheduling: after a task finishes, set it to repeat daily, weekly, or monthly (clock icon); managed at chatgpt.com/schedules.
- July 9, 2026: OpenAI killed the Atlas browser and folded it into ChatGPT Work, powered by GPT-5.6; the unified desktop app has Chat, Work, and Codex modes; cloud browser keeps its own sign-ins (separate from the user's own browser); computer use lets the agent click, type, and move files.
- Safeguards: user confirmations for high-impact actions, prompt-injection monitoring, "watch mode" requiring supervision on certain sites; for logins the agent pauses and hands the user the browser ("Take over browser"); screenshots are not captured while the user controls it.
- Pricing: Plus $20/month; Pro now three tiers at $100, $200, $500/month (OpenAI Pro help page; Pro 500 = 25x Plus allowance per OpenAI DevDay 2026 recap). Go $8/month. Scheduled-task caps per OpenAI help text Oct 30, 2026: Go 3 active tasks, Plus 5.
- Source: OpenAI Help Center "ChatGPT agent"; ppc.land reporting on Atlas shutdown July 9, 2026; OpenAI pricing/help pages via layer3labs and tech-insider (verified against OpenAI docs Oct–Nov 2026).

### Claude (Anthropic)
- Agent features launched as Claude Cowork; merged into Claude starting September 16, 2026 (Pro, Max, Ultra first); generally available for Enterprise October 23, 2026 and Team November 12, 2026.
- Pricing (claude.com pricing page, checked Nov 21, 2026): Free $0 (chat only, no agent tasks); Pro $20/month ($17 billed yearly); Max $100 (5x Pro usage) or $200 (20x); Ultra $200; Team $25/seat ($20 annual).
- "Hand off and schedule tasks" is a paid feature from Pro up. Limits are 5-hour sessions plus a weekly limit, shared with chat; Max gets 5x Pro per week, Ultra 10x. No message count published.
- Tools: files and folders you grant, connectors, plugins, skills, sub-agents, built-in browser (since August 26, 2026), Claude in Chrome, computer use in Claude Desktop (beta). Anthropic says it reaches for connectors first, browser second, screen only as a last resort. Scheduling: hourly, daily, weekly, weekdays, manual; runs remotely with the computer asleep, except tasks needing local files or apps.
- Source: claude.com pricing page and Claude Help Center; tailkits.com review (Nov 12, 2026, read against Anthropic's own pages); paretotalent.com pricing guide (verified Oct 22, 2026).

### Gemini / tasks in Gemini (Google)
- Scheduled Actions announced at Google I/O (June 2025): set a prompt to run at a time; up to 10 active at once; requires Google AI Pro or Ultra (or qualifying Workspace plan) and Keep Activity on. Google says scheduled prompts run within an hour of the set time, not at the exact minute.
- Gemini Spark announced May 19, 2026: a proactive 24/7 agent with schedules and triggers (e.g., run when a new email arrives), multi-step workflows across Gmail, Calendar, Drive.
- November 17, 2026: tasks in Gemini went free in the US (plus Canada, Australia, India, Japan, South Korea) with once-a-day schedules; Google AI Pro ($19.99/month) or Ultra adds hourly schedules and Gmail/news triggers. Renamed from "Spark" to "tasks in Gemini." Personal Google accounts only; work/school accounts cannot use it yet.
- November 19, 2026: Gemini app for Mac can automate local apps (Apple Silicon, macOS Sequoia 15+), in an isolated background window with live preview; user approves key actions.
- US additions: phone calls to businesses on your behalf, checkout with Google Pay under a spending cap you set, texting Gemini, forwarding email to gemini@google.com.
- Source: Google Gemini support community (Scheduled Actions announcement); Google blog/release notes via justinmckelvey.com (Nov 20, 2026, read against blog.google and support.google.com); makeuseof.com hands-on (Nov 8, 2026); mejba.me hands-on test (May 31, 2026).

## Original contribution: the $20 math

At the $20 entry tier, the four agents meter work differently. Converted to the same unit — one scheduled daily job for a month:

- **ChatGPT Plus ($20):** 40 agent messages/month. One daily scheduled task burns ~30 invocations a month, leaving 10 spare messages. Cost per daily scheduled job: effectively the whole $20, and you can run only one daily job plus a handful of one-offs. A second daily job does not fit.
- **Muse Power ($20):** 500M tokens/week, about 2B/month. Meta publishes no tasks-per-token figure, so no honest conversion exists. But the scale is suggestive: even at a generous 5M tokens per scheduled job (heavy browsing + reasoning), 500M/week covers 100 jobs a week. The meter is opaque, but the headroom is two orders of magnitude above ChatGPT's message cap.
- **Claude Pro ($20):** usage in 5-hour sessions, shared with chat; no published message or task count. A heavy scheduled job eats the same pool your afternoon chatting uses. Unquantifiable from public docs — that is itself a finding.
- **Gemini (free in the US since Nov 17, 2026):** once-a-day schedules at $0; $19.99 Pro for hourly schedules and Gmail/news triggers. On price alone, Gemini wins the daily-briefing job by $20/month. The catch: 10 active scheduled actions max, runs land within an hour of the set time (a 7 a.m. brief can arrive at 8), and work/school accounts are excluded.

Second original calculation — the annual cost of the "serious user" tier: Muse Maximum $1,200/year; ChatGPT Pro 100 $1,200/year; Claude Max $1,200/year; Gemini Ultra price not verified for this piece (excluded rather than guessed). Three of the four converge on exactly $1,200/year at the $100/month rung. The $20 rung is where they actually differ.

## Comparison matrix (verifiable from vendor docs)

| Criterion | Muse | ChatGPT Work | Claude | Gemini tasks |
|---|---|---|---|---|
| Entry paid price | $20/mo (Power) | $20/mo (Plus) | $20/mo (Pro) | $0 in US / $19.99 Pro |
| Free tier does agent work? | Yes, with unpublished limit | Agent mode on paid plans; Free has chat | No — agent/scheduling paid-only | Yes, once-a-day schedules |
| How work is metered | Weekly tokens (500M Power) | Monthly messages (40 Plus) | 5-hour + weekly sessions, shared with chat | Active-action cap (10) + frequency |
| Scheduled work | Yes (crons, hooks) | Yes, daily/weekly/monthly | Yes, hourly/daily/weekly | Yes, daily free / hourly Pro |
| Own persistent computer | Yes — Secure VM | Cloud browser + optional local computer use | Cloud sessions; local files need desktop app open | Cloud; Mac app automates local apps (Nov 19) |
| Phone calls to businesses | Yes, paid US (Nov 12, 2026) | Not in agent mode docs | No | Yes, US (Nov 2026) |
| Purchases/checkout | Yes (wallet, Shop Pay etc.) | Via browser, with takeover for login | Via browser/connectors | Google Pay checkout under a cap you set |
| Login handling | Own browser profile, persistent | Takeover: user logs in, agent resumes | Built-in browser separate from user logins | Google account native; other sites via browser |
| Prompt-injection safeguards | Documented in prior coverage; ask before consequential actions | Monitoring + watch mode + confirmations | Connectors first, screen last | Not prominently documented |

## What each one is actually best at (opinion, grounded in the above)
- **Muse:** the only one with its own always-on computer and a token meter generous enough that scheduled work is not rationed by the message. Best for someone who wants a dozen background jobs running.
- **ChatGPT Work:** the strongest at producing finished office artifacts (decks, sheets, docs) over hours-long sessions, and the only one with a desktop app that unifies chat, work, and coding. Worst meter at $20: 40 messages a month is a ration, not an allowance.
- **Claude:** the most careful agent — connectors first, screen last — and the best coding-adjacent agent (Claude Code in every paid plan). Worst transparency: session limits shared with chat make scheduled-work budgeting guesswork.
- **Gemini:** the cheapest daily briefing on the market right now ($0 in the US) and the only one native to the Google account most people already live in. Weakest for anything that is not Google: personal accounts only, 10-action cap, sloppy timing.

## Strongest counterargument
The whole comparison may be premature. All four products changed materially in the last six weeks — Gemini went free on Nov 17, Muse added calling on Nov 12, Claude finished its Cowork merge on Nov 12, ChatGPT Pro split into three tiers in October. A buyer who picks on today's matrix may be buying last month's product. The honest advice is to pick on the meter and the home turf (whose apps you already live in), not on this week's feature list, because the feature list will be different by January.

## Limitations
- No hands-on testing of ChatGPT Work, Claude, or Gemini by this newsroom for this article; all claims are from vendor docs and secondary reporting checked against vendor pages. Task-quality comparisons (which agent actually finishes a messy booking) are not in this piece.
- Muse token-to-task conversion is unknowable from public docs; the 5M-tokens-per-job figure is an illustrative assumption, flagged as such.
- Prices change fast: ChatGPT Pro's allowance for new $200 subscribers was cut in September 2026 with no price change; Gemini's free tier is a November 17, 2026 change that may not hold.
- Gemini Ultra pricing and Claude Ultra ($200) details were not verified and are excluded rather than estimated.

## Sources (primary first)
1. Meta — Muse launch announcement, September 8, 2026 (muse.ai / Meta newsroom)
2. Meta — Muse subscriptions help page (Power $20/500M tokens weekly; Maximum $100/3B; figures as of Nov 12, 2026)
3. OpenAI Help Center — "ChatGPT agent" (40/400 message limits; scheduling; watch mode; takeover browser)
4. OpenAI — ChatGPT Work / Atlas shutdown, July 9, 2026; Pro tiers help page ($100/$200/$500)
5. Anthropic — claude.com pricing page; Claude Help Center (Pro $20, Max $100/$200, hand-off and schedule tasks; Cowork merge Sept 16, 2026)
6. Google — Gemini support community, Scheduled Actions announcement (10-action cap; Pro/Ultra gate; within-an-hour timing)
7. Google — blog.google / support.google.com via justinmckelvey.com (Spark free Nov 17, 2026; Mac app Nov 19, 2026; Google Pay checkout)
8. JPMorgan research note, October 12, 2026 (Muse Wonder $4/$20 per 1M tokens; Spark 1.3 $1.25/$4.25)
9. TechCrunch via businesscabal/coinmag — Muse outbound calling, November 12, 2026 (Alexandr Wang announcement)
10. makeuseof.com hands-on, November 8, 2026 (Gemini morning briefing; scheduled-action timing); mejba.me hands-on test, May 31, 2026 (Gemini Spark week-long Gmail/calendar test)
