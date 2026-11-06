# Research: Can You Prove What Your Agent Did? — Muse's Receipts, Ranked

**Slug:** muse-agent-receipts-audit-trail-2026
**Journalist:** Frank DeLuca (productivity systems, life operations, workflows and failure modes)
**Date:** November 6, 2026
**Angle:** Muse works while you sleep, sends emails, moves money, edits files, books things. When something goes wrong, what evidence exists? Meta gives you an Activity log. The services Muse touches give you their own records. The agent itself gives you a summary. Those three records disagree more often than anyone admits, and the gaps are where accountability dies.

## Kill test
Passes. A reader deciding how much of their life to hand to an agent needs to know, before the first mistake, which of the agent's actions leave proof and which leave only its word. This is the difference between "Muse says it booked the flight" and "here is the confirmation number from the airline."

## Primary sources

1. **Meta, "How Muse works with your guidance and approval"** (meta.com/help/superintelligence/1385290430137537/) — the official control surface. Key facts: Activity log (assistant icon) is "a chronological record of actions your Muse has taken and permissions you've given it"; System Files offer "a deeper look"; approval options are Allow once / Allow for this task / Allow for this site / Always allow / Deny; "Some other actions, like sending an email, cannot be reversed"; "Resetting Muse permanently deletes all information, chat history, files, and active tasks" — including, by implication, the Activity log itself. Permission defaults: "Ask for some actions" asks before every write action and important read actions; "Always ask" asks before any action.
2. **Meta, Muse product page** (ai.meta.com/muse/) — "You can review your agent's activity, manage permissions, and report issues at any time." Muse "keeps working in the background whether you're actively using the app or not." Free tier with usage limit; Power $20/mo; Maximum $100/mo (per AgentComparison's documentation check, Oct 28, 2026).
3. **NIST / CAISI AI Agent Standards Initiative** (launched Feb 17, 2026; update Aug 14, 2026) — three pillars: industry-led standards, community-led open protocols, research into agent authentication and identity. The plumbing you need before you can answer "which agent, acting for whom, did what."
4. **EU AI Act, Articles 12–14 and 50** — high-risk and transparency provisions in force Aug 2, 2026; Article 12 requires logging that supports identifying risk situations and post-market monitoring. Penalties up to 15 million euros or 3% of global turnover.
5. **Cygnux Labs, "Trust the Log, Not the Summary"** (Sep 22, 2026) — flight-recorder design: record three separate channels (intent, self-report, actions), join per action; hash-chain (SHA-256) every entry so edits break the chain; ~24 ms per event; pattern-matching gates blocked only 41% of harmful commands; on spliced concealed faults, rules caught 82%, an independent reviewer caught all of them. Core lesson: "Monitor actions and their consistency with the request; combine deterministic rules with a semantic reviewer; put enforcement below the agent and keep the audit trail independent of it."
6. **Atera, "How to audit AI agent activity"** — SailPoint survey of 353 IT professionals: 80% said their organization's AI agents had taken unintended actions (accessing unauthorized systems, downloading sensitive content). Standard logs answer who/what/where/when; the agent's *choice* goes unrecorded. A useful trail needs operational telemetry plus request context and decision context.
7. **McKinsey 2026 research (via Writingmate)** — 80% of organizations report risky AI agent behavior; only 33% say governance maturity matches deployment speed. Accenture/Wharton: "Intelligence may be scalable, but accountability is not."
8. **NextKick Labs, "AI Audit Logging"** — EU AI Act Article 12 floor; California ADMT regs (finalized Sep 2025) require five-year retention of risk assessments for automated decisions touching financial, housing, employment, or healthcare outcomes. IBM research: average 204 days to identify a data breach, 73 more days to contain it. Seven categories of event; most implementations capture maybe three. Chain of thought is "a liar when it counts most."
9. **Site's own prior coverage:** #810 (Catherine Chen, Nov 5) mapped the VM attack surface and the five Meta defenses; #809 (Elena Vasquez) covered approval gates; "who pays when your agent fails" covered liability. None of them answered the evidence question: after the failure, what can you prove?

## Original contribution: the receipts matrix

Novel analysis for this article: I scored 10 everyday Muse actions on four questions, using Meta's own documentation plus the architecture Meta describes (Sentinel as sole egress authority, Secure Credentials Store, Activity log, System Files). Scoring is my own judgment, stated as such.

| Action | Muse Activity log? | Independent third-party record? | Reversible? | Provable without trusting Muse's word? |
|---|---|---|---|---|
| Send an email | Yes | Yes (sent folder / recipient) | No | Yes |
| Create a calendar event | Yes | Yes (calendar provider) | Yes | Yes |
| Make a purchase | Yes | Yes (order confirmation, bank) | Sometimes | Yes |
| Edit a file in the workspace | Yes | Partial (git diff if versioned; otherwise no) | Yes, if versioned | Only if versioned |
| Book a flight or hotel | Yes | Yes (confirmation, itinerary) | Sometimes | Yes |
| Post to social media | Yes | Yes (the post itself) | Yes, delete | Yes |
| Read a website / browse | Yes | No (site may log the visit; you can't see it) | N/A | No |
| Change a permission / grant access | Yes | No | Yes | No |
| Send a message as you (chat/WhatsApp) | Yes | Yes (recipient's copy) | No | Yes |
| Run a scheduled task overnight | Yes | Depends on what it did | Depends | Often no |

Headline finding: **7 of 10 common actions leave an independent receipt. The 3 that don't — browsing, permission changes, and overnight scheduled work whose outputs are files — are exactly the actions where the agent's own summary is the only witness.** And the Activity log itself is deletable: a full Muse reset permanently deletes chats, files, and active tasks, and Meta does not state that the log survives a reset. An audit trail the subject can erase is a diary, not a record.

Second finding: the approval gate is a *pre*-action record, not a *post*-action one. "Allow for this site" and "Always allow" collapse dozens of future actions into a single logged permission. The log will show you granted the permission once; it will not necessarily show you each action taken under it. That is the exact shape of the Marketplace address incident from September (Robb clicked "Allow Always" believing it covered replies, not address-sharing) — the log would show a permission, not the five address disclosures.

Third finding (the counterweight): for money and messages, Muse is *more* auditable than a human assistant, because every action routes through a connector with its own ledger — your bank, your sent folder, the airline. The audit gap is not in the high-stakes actions. It is in the low-stakes, high-volume ones: reads, permission grants, and overnight jobs, where the only record lives inside the system being audited.

## The strongest counterargument
The Activity log plus connector ledgers may be enough for a personal agent, and demanding enterprise-grade tamper-evident logging (hash chains, external anchors, independent reviewers) for a $20/month consumer product is scope creep dressed as rigor. Most people do not audit their human assistant's browsing history either. The counterargument has force — but it fails on one point: a human assistant cannot act while you sleep, at machine speed, across a dozen accounts, and then summarize its own work. The scale of unsupervised action is new, and the evidence standard has to match the scale, not the job title.

## Limitations
- Meta does not publish the Activity log's retention period, export format, or whether it survives a reset; the reset-deletes-everything claim is Meta's own wording about "all information," and I could not verify the log's fate independently.
- The receipts matrix is my scoring, not a lab test; I scored from documentation and architecture descriptions, not by running all 10 actions and inspecting logs.
- NIST's initiative is standards work in progress, not a compliance requirement for consumer agents; the EU AI Act's Article 12 applies to high-risk systems, and a personal agent's classification is unsettled.
- Cygnux Labs' 41% figure comes from their own five experiments, not a peer-reviewed benchmark.

## Actionable takeaways for the reader
1. Set connectors to "Always ask" for anything that sends, posts, or spends; use "Allow once" while learning what normal looks like.
2. Check the Activity log after the first few tasks — it teaches you what the agent does when you are not watching.
3. Never grant "Always allow" on a connector that can message people or share your address.
4. For file work, keep anything that matters in a git repo: the diff is the receipt the Activity log is not.
5. Once a week, ask Muse: "Show all URLs you have visited in the last week" and "List every permission I granted and when" — cross-check the answers against the Activity log, not against the agent's summary.

## Sources (URLs for inline links)
- https://www.meta.com/help/superintelligence/1385290430137537/
- https://ai.meta.com/muse/
- https://writingmate.ai/blog/ai-agent-accountability-audit-trail-2026
- https://www.cygnuxlabs.com/research/agent-records-that-cannot-be-rewritten
- https://www.nextkicklabs.com/p/ai-agent-audit-logging-compliance
- https://www.atera.com/blog/how-to-audit-ai-agent-activity/
- https://agentcomparison.net/agents/muse/
