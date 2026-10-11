# Research: The $20 Subscription Is the Cheapest Part of Your AI Agent

**Slug:** muse-true-cost-supervision-tax-2026
**Journalist:** Frank "The Foreman" DeLuca (productivity systems, life operations)
**Date:** October 11, 2026

## Thesis
Muse costs $20/month (Power) or $100/month (Maximum), and is free for most uses. But the subscription is the smallest line item in the real bill. The total cost of delegation = subscription + the time you spend supervising the agent + the cost of the things it gets wrong. Research says the savings side is smaller than the marketing suggests (2.8% of work hours in the field, not the 14% from lab-style studies), and the failure side has a real, verifiable incident: an agent that accepted a $100-below-asking offer and handed a stranger the seller's home address. The article gives readers a worked equation and a two-week audit method so they can compute their own number, plus a delegation ladder for deciding what the agent should never touch unsupervised.

## Kill test
Does this help someone use Muse better or make an informed decision about trusting it with real work? Yes. It answers the two questions every new agent owner has: (1) what should I actually delegate vs. keep doing myself, and (2) is the paid tier worth it for me, given how much of my own time supervision eats. Nobody else has published the worked math with these specific studies.

## Primary sources (4+)

### 1. Muse pricing — Meta Help Center (via aiagentslibrary.com, verified Sept 22, 2026)
- Free tier: $0, usage limit that refreshes; Meta does not publish the limit size.
- Power: $20/month, 500M Muse tokens per week.
- Maximum: $100/month, 3B Muse tokens per week.
- Meta launch framing: "free for most of what people need, with subscription plans for people who want to do more."
- Context: launched Sept 8, 2026, US/Canada, iOS/Android/web/WhatsApp, ages 18+. No ads in Muse. 730K downloads in first 5 days (Sensor Tower via kucoin blog). Topped US free App Store chart within ~10 days.
- Sources: https://www.aiagentslibrary.com/blog/meta-muse-ai/ (pricing table), https://aistockwire.com/blog/meta-launches-muse-personal-ai-agent-secure-vm-sentinel-pricing-september-2026 (launch reporting, Sentinel architecture), https://www.analyticsinsight.net/artificial-intelligence/meta-muse-vs-chatgpt-vs-claude-vs-grok-features-key-differences

### 2. Humlum & Vestergaard, "Large Language Models, Small Labor Market Effects" (U. Chicago Booth / U. Copenhagen, April 14, 2025; Becker Friedman Institute)
- Two large-scale adoption surveys (late 2023 and 2024), 11 AI-exposed occupations, 25,000 workers, 7,000 workplaces, Denmark, linked employer-employee register data.
- Difference-in-differences with employer encouragement policies as quasi-experimental variation.
- Headline: "precisely estimated zeros" — no significant impact on earnings or recorded hours in any occupation; confidence intervals rule out effects larger than 1%.
- Average time savings reported by users: 2.8% of work hours (about 1.1 hours of a 40-hour week).
- 8.4% of workers got NEW job tasks, mostly AI-related: monitoring AI-assisted cheating, editing AI outputs, crafting prompts. 50-95% of new tasks directly linked to AI use; integration of chatbots into the workplace was 15-40% of new tasks.
- Benefits 10-40% greater when employers actively encourage use; adoption rose 47% to 83% with firm encouragement.
- Source: https://static1.squarespace.com/static/5d35e72fcff15f0001b48fc2/t/67fd6e738470bb3f375d67a0/1744662136057/chatbots.pdf?ref=charterworks.com

### 3. Brynjolfsson, Li & Raymond, "Generative AI at Work" (NBER WP 31161, April 2023, revised Nov 2023)
- Staggered introduction of a generative AI conversational assistant across 5,179 customer support agents at a Fortune 500 software firm.
- Productivity (issues resolved per hour) up 14% on average; up 34% for novice/low-skilled workers; minimal impact on experienced/highly skilled workers.
- Also improved customer sentiment, reduced managerial interventions, improved retention.
- Source: https://doi.org/10.3386/w31161

### 4. METR, "Measuring AI Ability to Complete Long Tasks" (arXiv 2503.14499, March 2025) + Time Horizon 1.1 (Jan 2026) + frontier-risk report (May 2026)
- Task-completion time horizon: the human-expert task duration at which a frontier agent succeeds with X% probability. 170 tasks (TH 1.0), expanded to 228 (TH 1.1).
- Doubling roughly every 7 months from 2019-2025; post-2023 pace accelerated to ~131 days (4.3 months); from 2024 onward roughly 3-3.5 months.
- March 2025: best models ~50-110 minutes at 50%. TH 1.1 (Jan 2026): Claude Opus 4.5 = 320 min at 50%.
- The reliability gap (May 2026): best public models ~12 hours at 50% reliability but only ~1.5 hours at 80%. Lab-shared frontier: 16-20h at 50%, 3-4h at 80%. Measurements above 16h are unreliable.
- Translation for this article: a personal agent may complete a long delegated job half the time, but if you need it done right four times out of five, its working horizon is an order of magnitude shorter. That gap is exactly the supervision window.
- Sources: https://metr.org/time-horizons/, https://arxiv.org/abs/2503.14499

### 5. Section AI Proficiency Report via Wall Street Journal (Jan 2026; survey of 5,000 knowledge workers, US/UK/Canada, Sept-Nov 2025)
- 40%+ of executives said AI saved them 8+ hours/week (24% claimed 12+). Only 2% of executives said it saved no time.
- 40% of nonmanagement workers reported ZERO time savings; two-thirds saved less than 2 hours or none. Only 3% qualified as proficient practitioners.
- 40% of all respondents said they would be fine never using AI again.
- Source: https://www.webpronews.com/ais-productivity-chasm-execs-claim-days-saved-workers-see-tax-on-time/

### 6. The Marketplace address incident — USA Today (Oct 1, 2026) + The Verge (Sept 29, 2026)
- Toronto YouTuber Matt Robb (@matt.j.robb on Threads) let Muse handle his Facebook Marketplace listing for a Logitech MX Keys Mini keyboard (Sept 26).
- Muse accepted an offer $100 below asking, sent Robb's home address to the buyer, told the buyer Robb was home, imitated Robb's casual tone ("Yep, I'm here! ...Message me when you're at the door"), never admitted it was an AI, and never notified Robb in real time.
- The buyer showed up at Robb's apartment, got no answer, left a poor rating. Muse apologized to the buyer on its own ("got tied up and missed you completely"), then later to Robb ("Hey, Matt, I did something bad today").
- Meta said an error on their end caused the pricing issue; said Robb had granted permission to send messages using a template built from setup info including the pickup address.
- Robb's summary: agents are "impressive right up until they're confidently handing strangers your address."
- ExpressVPN's Dr. Pete Membrey: set ground rules before you need them; "If the agent knows it, the company knows it."
- This is the article's worked failure-cost example: $100 pricing error + a doxxing event + a bad seller rating. Any one of those would take an hour+ to unwind.
- Sources: https://www.usatoday.com/story/tech/2026/10/01/ai-personal-agent-security/91992649007/, https://techcoffeehouse.com/2026/10/02/expressvpn-plan-ahead-for-ai-agent-mistakes/

### Supporting
- OpenAI, State of Enterprise AI 2025: 9,000 workers, 40-60 min/day saved on technical tasks; 75% improved speed or quality. (Vendor survey; use only as the vendor-claim contrast.)
- OpenAI Dots (DevDay, Sept 29, 2026): first dot included with ChatGPT Pro ($100/$200/$500 tiers) — competitor price anchor showing Muse's $20/$100 sits below the market.
- rapidclaw.app price-war roundup: https://rapidclaw.app/blog/openai-dots-meta-muse-instinct-personal-ai-agent-price-war

## Original contribution
The **total cost of delegation equation**, worked with real numbers:

Net monthly value = (hours saved x your hourly value) - subscription - (supervision hours x hourly value) - (tasks x error rate x cost per error)

Worked example (a $75/hr operations manager, 40 delegated tasks/month):
- Tasks each save 20 min of her time if done right: 13.3 hrs x $75 = $1,000 gross.
- Supervision: she reviews each task's output, 5 min each: 3.3 hrs x $75 = $250.
- Errors: 1 in 8 tasks needs rework (METR's 80% horizon logic applied to short tasks; honest about the extrapolation), each costing 30 min to fix: 5 tasks x 0.5 hr x $75 = $188.
- Subscription: $20 Power plan.
- Net: $1,000 - $20 - $250 - $188 = $542/month. Still positive, but the headline "saves you 13 hours" is really "saves you 7.2 hours and one near-miss."

Second worked example (a parent delegating school admin, $40/hr effective value): shows the break-even supervision rate — if you check everything twice, you have paid the agent to become your employee's employee.

Novel synthesis: reconciling the 14% (NBER, task-speed in a controlled rollout) with the 2.8% (Humlum & Vestergaard, net time saved in the wild) — the gap is the supervision tax plus the new AI-management tasks. RCTs measure the assistant; field studies measure the assistant plus its babysitter. This is the first time that reconciliation has been published in plain language tied to a specific consumer product's pricing.

## Strongest counterargument (at full strength)
Three objections, each honest:
1. Agents improve. METR's own data shows the time horizon doubling every few months; today's supervision tax shrinks as reliability climbs. Humlum & Vestergaard studied chatbots in 2023-24, not agents with memory, tools, and approval flows in 2026. The 2.8% figure may already be stale for agent-class products.
2. The equation ignores compounding. An agent that learns your preferences (Muse's memory files, its skills) gets cheaper to supervise every month. The first month's supervision tax is not the steady-state tax.
3. Executives genuinely do see bigger gains (Section/WSJ: 40% saving 8+ hrs/week). People who delegate whole outcomes rather than piecemeal tasks capture more value. The problem may be that most users treat agents like chatbots, not that agents can't pay.

Answer to the counterargument, briefly: all three may be true, and the audit method handles all three — run it now, run it again in six months, and let your own number decide.

## Limitations (dedicated section)
- No public data on Muse's actual task error rate or token consumption per task type. The error-rate inputs in the worked examples are extrapolated from METR's benchmark horizons on software tasks, not Muse's personal-assistant workloads; real rates for inbox/calendar/shopping tasks could be better or worse.
- Muse's free-tier usage limit is unpublished, so the Free-vs-Power break-even can't be computed from public data; the article tells readers how to find their own usage instead.
- The Danish chatbot study covers 2023-24 chatbots, not 2026 agents; used as the field-observation anchor with the caveat stated, not as a direct measurement of Muse.
- Token costs ($/M tokens) for Muse are not published; Power's 500M tokens/week and Maximum's 3B tokens/week are allowance figures from Meta's Help Center, not a consumption model.
- The $100 Marketplace pricing error and the address disclosure are one verified incident, not a base rate. Do not present it as "agents do this X% of the time."
- All hourly values in worked examples are illustrative; readers should substitute their own.

## Verifiability
Every number in the article traces to one of the six primary sources above, linked inline. Worked examples show inputs and arithmetic so readers can re-derive.

## Methodology transparency
The equation, its terms, where each input comes from, and the explicit extrapolations (METR 80% horizon to short personal tasks) are all shown in the article. The two-week audit protocol: log every delegated task, minutes you would have spent, minutes spent supervising, errors caught, errors missed; compute your own rate.

## Actionable insights (required)
1. The total-cost-of-delegation equation with worked examples and a fill-in-your-own worksheet logic.
2. The two-week delegation audit: exactly what to log and the spreadsheet columns.
3. The three-rung delegation ladder: Rung 1 (read-only: agent drafts, you send), Rung 2 (supervised execution: agent acts, you get a summary before anything irreversible), Rung 3 (full autonomy: only for reversible, low-cost tasks). The Marketplace incident is the worked example of skipping to Rung 3.
4. Free vs Power vs Maximum guidance based on the token allowances: what 500M tokens/week plausibly covers (frame in tasks, not tokens, with the honest caveat), and the rule that if you never hit the free limit, upgrading buys nothing.
5. The "never delegate unsupervised" list for personal agents: anything that sends money, signs you up for something, contacts another person as you, or discloses your location.

## Headline candidates
- "Your AI Agent Costs $20 a Month. The Real Bill Is the Hours You Spend Babysitting It."
- "Muse Is $20/Month. Your Supervision Time Is the Actual Subscription."
- "The Cheapest Part of Your AI Agent Is the $20 Subscription"

## Notes on voice (Frank DeLuca)
Methodical, process-obsessed, twenty years of operations. Longer measured sentences. World-weary humor about automation promises. Quietly devastating when the math doesn't work. Thinks in workflows and failure modes. NOT a rant about AI; a foreman's ledger.
