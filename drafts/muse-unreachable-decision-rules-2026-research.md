# Research: You Are Unreachable. Your Agent Is Not Idle.

Slug: muse-unreachable-decision-rules-2026
Journalist: Frank DeLuca (Productivity Systems & Life Operations)
Date: October 27, 2026
Phase target: DRAFT

## Thesis (1-2 sentences)

Muse keeps working after you close the app and returns when it needs approval, which sounds safe until you are on a plane, in surgery, or simply asleep and the approval never comes. The real product question is not whether Muse asks, but what it does while it waits: act, prepare, hold, or let the moment expire.

## Self-critique gate

Propose: a decision-rules guide for unreachable hours, with a four-tier protocol readers can set before they go dark.
Challenge: is this the best use of this cycle? The site covered scheduled work (muse-scheduled-tasks-work-while-asleep-2026, muse-zombie-scheduled-tasks-2026), supervision cost (muse-true-cost-supervision-tax-2026), and approval dialogs (muse-approval-dialog-allow-always-2026). None of those answers the gap between them: an approval request that arrives while the user cannot answer, for a task whose window closes before the user returns. Adjacent coverage is about work running on schedule or approval screens in general, not about expiry, fallback order, and the cost of waiting. Proceed.

## Kill test

Passes. A reader who sets scheduled or delegated work learns (a) which categories Meta says always pause for approval, (b) a reversibility-based rule for what may proceed without an answer, (c) how to write expiry and fallback rules into a task before going unreachable, and (d) how to audit what the agent did while they were gone. That is a concrete decision about trusting an agent with real work during hours the user cannot supervise it.

## Primary sources (3+ required)

1. Meta's Muse announcement and product descriptions, via independent summaries: Muse keeps working after the user closes the app and returns when something changes or when it needs approval; sensitive steps such as sending an email or completing a purchase pause for user approval; a full audit trail shows everything the agent has done and plans to do; each user gets a dedicated Muse Secure VM and a Sentinel agent that must approve every internet-bound action.
   Via: https://www.marktechpost.com/2026/09/08/meta-introduces-muse-a-personal-ai-agent-that-runs-on-its-own-dedicated-secure-cloud-computer/ ; https://toolsfine.com/blog/meta-muse-personal-ai-agent-launch-features-safety-privacy.html ; https://agentpedia.codes/blog/meta-muse-personal-agent-guide
2. Meta's money-features description, via Yahoo Finance review published October 22, 2026 (as summarized October 24, 2026): Muse can track spending, audit subscriptions, negotiate bills including by calling providers, and buy things, but purchases happen only after user approval and use single-use card numbers where no card is stored; Meta says it is not immune to attack and will sometimes make mistakes; the Identity Theft Resource Center does not recommend the money features yet.
   Via: https://www.trade2spike.com/ai-in-action/meta-muse-ai-agent-manage-your-money-review-10-million-users-identity-theft-resource-center-too-new
3. OWASP LLM06:2025, Excessive Agency: damaging actions can follow unexpected, ambiguous, or manipulated model output; root causes are excessive functionality, excessive permissions, and excessive autonomy; prevention starts with scoping what the agent can call and what each extension can do, then requires human approval for high-impact actions, then complete mediation and logging. Approval is the last layer, not the first.
   Via: https://safeguard.sh/resources/blog/human-approval-for-agent-actions-safeguard-desktop-and-mobile-apps-early-access ; https://avestalabs.ai/blog/ai-agent-human-approval
4. Autonomy-boundary practice, from practitioner sources: set the boundary by consequence of being wrong and reversibility of the action; add confidence-based escalation so the agent escalates when certainty is low even inside an otherwise autonomous category; avoid both over-automation (acts beyond competence) and under-automation (routes trivial decisions to humans and erases the gain).
   Via: https://www.inteqgroup.com/blog/which-decisions-can-an-ai-agent-make-and-which-require-human-approval ; https://zodinet.com/en/ai-safety-for-agentic-systems-why-autonomy-changes-risk/
5. Scale and availability context: Muse launched in the US on September 8, 2026; more than 10 million people in the US and Canada had set it up by late October 2026, per Meta chief executive Mark Zuckerberg; free tier with a usage limit, Power $20/month, Maximum $100/month.
   Via: https://www.trade2spike.com/ai-in-action/meta-muse-ai-agent-manage-your-money-review-10-million-users-identity-theft-resource-center-too-new ; https://www.practicalaiwise.com/2026/09/meta-muse-ai-agent-explained.html
6. Community practice for reviewing agent work: a recurring review task that reports what the agent did in the week, what it flagged that did not matter, what it got wrong or could not finish, and everything new it saved to memory, with the user deleting or fixing items.
   Via: https://zachdoesai.com/guides/meta-muse/

## Numbers and claims the article will use (with attribution)

- Muse launched in the US on September 8, 2026; by late October 2026 more than 10 million people in the US and Canada had set it up (Zuckerberg, via Yahoo Finance summary).
- Meta says sensitive steps such as sending an email or completing a purchase pause for approval; Meta also says Muse will sometimes make mistakes and is not immune to attack (via Yahoo Finance review summary).
- OWASP's three causes of excessive agency: excessive functionality, excessive permissions, excessive autonomy (OWASP LLM06:2025).
- Five hard-stop categories named by one practitioner essay: financial transactions, data destruction, external communication, self-modification, agent reproduction. Treat as one writer's line, not an industry standard.
- No published Meta rule was found for how long an approval request stays valid, or for what an agent does when a time-sensitive approval expires. The article states that gap plainly rather than filling it with a guess.

## Original contribution (not just synthesis)

1. The four-tier unreachable protocol: ACT (reversible, low-cost, already specified), PREPARE (do all work short of the irreversible step, leave a one-tap decision), HOLD (freeze and log, with a named re-check time), EXPIRE (let the window close and say so, instead of acting late on stale facts).
2. The expiry rule: an approval has a shelf life. A price, a seat, a deadline, or a person's availability that was true on Monday is evidence, not permission, on Friday. Any instruction that outlives its facts needs re-checking, not execution.
3. The fallback order, written before going dark: first the named second person, then a prepared draft, then a hold. Never an invented answer. A task with no fallback is a task that should not run while you are unreachable.
4. The return audit: a five-minute check on return (what acted, what waited, what expired, what changed in memory, what is still pending) modeled on the community weekly-review practice, but scoped to the unreachable window.
5. The waiting cost, stated honestly: holding is not free. A held bill negotiation can miss a promo window; a held reply can cost a deal. The protocol trades that cost against the cost of a wrong irreversible act, and it does so in writing, before the flight, not in the air.

## Article structure (Frank DeLuca voice: methodical, process-obsessed, longer measured sentences, world-weary humor, failure modes first)

1. Cold open: a flight, a phone in airplane mode, an agent mid-task with an approval pending and a deadline inside the flight.
2. The problem: approval gates assume a reachable human. Scheduled and background work does not.
3. What Meta actually promises: pause for approval on sensitive steps, audit trail, Secure VM plus Sentinel. What it does not publish: approval shelf life, expiry behavior, fallback order.
4. The four tiers, with a concrete example in each and a rule for assigning a task to a tier.
5. The expiry rule and the stale-facts problem, with the Monday/Friday test.
6. The fallback order and how to write it into a task before going dark.
7. The return audit, step by step.
8. Skepticism: what this protocol cannot fix (prompt injection through retrieved documents, a wrong premise in the original instruction, an approval the user taps half-asleep).
9. Verdict and a copy-ready instruction block the reader can paste into a scheduled task.
