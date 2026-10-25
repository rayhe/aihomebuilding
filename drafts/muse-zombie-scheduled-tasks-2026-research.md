# Research: Muse Zombie Scheduled Tasks

Slug: muse-zombie-scheduled-tasks-2026
Journalist: Frank DeLuca (Productivity Systems & Life Operations)
Date: October 25, 2026
Phase target: DRAFT

## Thesis (1-2 sentences)

Scheduled work is Muse's best feature and its quietest failure mode: a task you set up in a burst of enthusiasm keeps running long after its purpose expired, acting on stale instructions, old permissions, and a life that moved on. The fix is not fewer automations, it is an expiry date and a quarterly audit, the same discipline operations managers apply to every other recurring job.

## Self-critique gate

Propose: zombie scheduled tasks as the operations dark side of agent autonomy.
Challenge: is this the best use of this cycle? The site already covered scheduled tasks as a capability (muse-scheduled-tasks-work-while-asleep-2026), approval dialogs (muse-approval-dialog-allow-always-2026), and the supervision tax (muse-supervision-burden-regressive-2026, muse-true-cost-supervision-tax-2026). This angle is distinct from all three: it is not about how to set tasks up, not about one approval click, and not about the cost of checking work. It is about tasks that outlive their intent, which none of those articles address. Proceed.

## Kill test

Passes. A reader who runs this audit learns (a) how to list everything their agent does on a schedule, (b) how to tell a live task from a zombie, and (c) how to put an expiry date on every future task. That is a concrete decision about trusting an agent with recurring autonomous work.

## Primary sources (3+ required)

1. Meta official help, "How Muse works with your guidance and approval" (meta.com): approval tiers including "Allow for this task," "Allow for this site," and "Always allow"; Activity log of actions and permissions; "Upcoming" view of scheduled tasks and reminders; reset "permanently deletes all information, chat history, files, and active tasks." Key gap the article exploits: Meta documents how to see upcoming tasks, but documents no expiry, no staleness warning, and no automatic sunset for a task whose purpose ended.
   https://www.meta.com/help/superintelligence/1385290430137537/?srsltid=AYCX9vJn0I-BwqbKVhGkrN0L5he9K9Bt3QSp9lQBIWCqnokO4x38IGJI
2. DEV Community, "Automating Real Work with Muse: Connectors + Scheduled Tasks": scheduled tasks are time-triggered jobs that run in the background whether or not the user is in the conversation; connectors give read/write access to accounts; the guide's own best practice is "state the stopping rule" (e.g., "Under $70/month"), which most users skip.
   http://dev.to/ying_liao_0a481102ff971b4/automating-real-work-with-muse-connectors-scheduled-tasks-58co
3. C+R Research survey of 1,000 U.S. consumers (via GCN and EIN Presswire summaries of CNET/YouGov reporting): consumers guessed $86/month on subscriptions, actually spent $219; 74 percent said recurring charges are easy to forget; 42 percent had stopped using a service but forgot they were still paying for it; 72 percent had all subscription payments on auto-pay.
   https://gcn.com/most-americans-guess-spend-month-subscriptions/21150/
   https://fda.einnews.com/pr_news/949563719/americans-spend-nearly-1-100-a-year-on-subscriptions-with-about-200-going-unused-cnet-survey-finds
4. CNET/YouGov 2025 survey of 2,440 adults: Americans spend close to $1,100 a year on subscriptions, roughly $200 of it on products rarely or never used; 61 percent reconsidering at least one subscription.
5. Self Financial 2026 survey of 1,272 U.S. adults (via GCN): nearly 60 percent had a paid subscription going unused each month, averaging 2.6 idle subscriptions per person, average wasted value $26.79/month; 70 percent had forgotten to cancel a free trial at some point.
6. Kevin Payne, "Future-proof your AI stack as an operator" (Substack, Sep 2026): on Sep 29 his desktop-linked automations stopped when the link broke; "nobody wrote down what the employee actually did, so nobody can move that work to a different tool." Operator lesson: work must be described as tasks with inputs, a check for done, and a place it runs, or it cannot be audited.
   https://kevintpayne.substack.com/p/future-proof-your-ai-stack-as-an
7. DEV Community operational case study, "A scheduled job can be healthy while its work is overdue": a job can be installed, exit successfully, and still fail to do the work; the status display answered "does the job exist?" when the useful question was "has the expected work completed?"
   https://dev.to/_nextquestion_/a-scheduled-job-can-be-healthy-while-its-work-is-overdue-39al
8. ShipWithMuse, "Meta Muse Automation Recipes: 12 Real Workflows": community recipes repeat the same habits, including "keep approvals on for money" and "start read-only"; scheduled tasks are what make daily/weekly recipes pay off, which is also what makes them accumulate.
   https://shipwithmuse.live/blog/muse-automation-recipes

## Numbers the article will use (with attribution)

- $86 guessed vs $219 actual monthly subscription spend; $133/month average underestimate (C+R Research, 1,000 U.S. consumers).
- 74 percent say recurring charges are easy to forget; 42 percent stopped using a service but forgot they were still paying (C+R Research).
- About $200/year on rarely or never used subscriptions, out of about $1,100/year total (CNET/YouGov 2025, 2,440 adults).
- 2.6 idle subscriptions per person; $26.79/month average wasted value; 70 percent forgot to cancel a free trial (Self Financial 2026, 1,272 adults).
- Muse pricing context from community reporting: free plan with a usage limit; Power $20/month; Maximum $100/month (Substack hands-on, Oct 14, 2026). Used only to frame what a forgotten always-on task can cost in tokens, not as a verified Meta price list; the article will say so.

## Original contribution (not just synthesis)

1. The zombie taxonomy, four types with a test for each:
   - Expired purpose (the trip is over, the job search ended, the kid's season finished; the task still runs).
   - Superseded instruction (you replaced the task with a better one and never killed the original; two tasks now work at cross purposes).
   - Orphaned by a life change (moved, changed jobs, broke up; tasks built around the old life keep acting).
   - Permission-creeped (a task granted "Always allow" for one job now acts on a different job; the permission outlived the trust decision).
2. The worked audit math: take the Self Financial idle rate (2.6 idle items per person) and apply it to a plausible agent roster. A user who creates one scheduled task a month for a year and never audits ends the year with 12 tasks; if even a quarter go stale, that is 3 zombies acting weekly. At Muse's reported Maximum tier of $100/month, one forgotten heavy task is not the risk; the risk is three quiet tasks each making low-stakes decisions you no longer endorse.
3. The expiry-date rule: every scheduled task gets a review date at creation (90 days for life-admin tasks, 30 days for anything that spends, sends, or books). The article gives the exact audit: open Upcoming, list every task, and for each answer three questions: what was this for, when did it last produce something I used, what happens if I pause it for two weeks. Pause, do not delete, on first pass; delete after the pause proves nothing broke.

## Article structure (Frank DeLuca voice: methodical, process-obsessed, world-weary humor)

1. Cold open: a plausible scene, a man who set up a weekly price watch for a stroller in March and is still getting alerts in October, months after the baby outgrew it. The alert is not wrong. It is just no longer his.
2. The problem: scheduled work is the only agent feature that acts while you are not looking, by design. Subscriptions taught us we forget recurring things; agent tasks are subscriptions that act.
3. The capability, honestly stated: what Muse's Upcoming view and Activity log actually show, and what they do not (no expiry, no staleness flag, no "last useful output" column).
4. The evidence: the forgetfulness numbers above, plus the operator case studies (the healthy-but-overdue job, the broken desktop link).
5. The audit: the three questions, the pause-first rule, the expiry-date rule, the four-type taxonomy.
6. The skepticism / strongest counterargument: maybe zombies are mostly harmless because approvals still gate sends, payments, and bookings, and a read-only digest that nobody reads costs almost nothing. Answered at full strength, then bounded: the harm is not one catastrophic action, it is quiet drift, stale data feeding live decisions, and permissions granted to a past self.
7. Limitations: no survey exists of Muse scheduled-task abandonment specifically; the subscription numbers are an analogy, not a measurement of agent tasks, and the article will say that plainly. The zombie counts in the worked example are illustrative arithmetic, not observed data.
8. Actionable takeaways box: the audit steps, the expiry rule, the pause-first rule.

## Banned phrases check (draft must avoid)

"Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack". Also STORY_GUIDE bans: "Let's be clear", "Make no mistake", "And it's not even close", "X isn't about Y. It's about Z.", market-size openers, uniform paragraph lengths.

## Hard gates for the draft

- Em dashes in HTML: 0 to 3 (regex count is source of truth).
- Sentences starting with "The": under 15 percent.
- Sentence rhythm script: variance 200+, short under 15 percent, long over 15 percent.
- Hero image: real JPEG (ffd8), landscape, cache-busted with ?v= hash.
- Byline/date: October 25, 2026 at publish time; draft may carry it from the start.
