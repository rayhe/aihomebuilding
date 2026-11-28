# Research: When You Die, Your Agent Keeps Working — The Digital Estate Problem Nobody Built an Off Switch For

**Slug:** muse-digital-estate-agent-keeps-working-2026
**Journalist:** Catherine Chen (privacy, security, data practices, policy)
**Date:** November 28, 2026
**Status:** RESEARCH complete — ready for DRAFT

## Angle

Every other account you own has a plan for your death, or at least a door your family can knock on. Google watches for silence and hands your data to a trusted contact. Apple lets you name a legacy contact with an access key. Facebook memorializes the profile. Muse has none of that. Meta's own help pages describe exactly three ways your Muse data ever moves: you download it, you reset it, or you delete your Meta account. All three require you to be alive and logged in.

Meanwhile Meta's own FAQ says Muse "keeps working in the background whether you're actively using the app or not." Scheduled tasks fire on their own. Approval prompts wait for a person who will never answer. The subscription renews monthly until someone cancels it. So the honest question is not what happens to your agent when you die. It is what keeps happening, for how long, and who is allowed to stop it.

This is NOT a rehash of #810 (the VM attack surface, Catherine Chen) or the memory piece (what Muse keeps). #810 mapped what the agent's computer can reach while you are alive. This piece maps what happens to all of it when you are not, and the fact that the only off switch Meta provides destroys the very data your family might need.

## Kill test

Passes. A reader deciding how much of their life to hand to an agent needs to know the exit terms, not just the features. If your agent holds your inbox, your calendar, your photos, your scheduled jobs, and the keys to your other accounts, then "what happens when I die" is a trust decision with real consequences, and the answer right now is: nothing automatic happens at all.

## Primary sources (verified November 28, 2026)

1. **Meta Help Center, "How to manage your Muse data"** — Read in full November 28, 2026. Muse stores interactions, connector information, goals, artifacts, system files, reminders and scheduled tasks, memories, soul, and identity. The only deletion paths are per-item delete, the forget skill, Reset Muse (permanently deletes chat history, files, and active tasks, cannot be undone), or deleting the Meta account from Accounts Center (deletes all information associated with the account, including Muse). Download path: Settings > Data controls > Download your Muse data. No legacy contact, no inactivity trigger, no death or incapacity provision anywhere in the page. No retention period stated. Meta also warns that after you delete something, "Muse may still remember information it learned from what you deleted."
   https://www.meta.com/help/superintelligence/2225571704857152/?helpref=faq_content

2. **Meta, "Muse: Meta's personal AI agent, features & capabilities" (ai.meta.com FAQ)** — "Does Muse keep working after I close the app? Yes. When you ask Muse to do something, it keeps working in the background whether you're actively using the app or not." Free tier with a usage limit; paid subscription for more. Muse asks permission before sending messages, making purchases, or sharing information with a connected app.
   https://ai.meta.com/muse/

3. **Hey Hermes, "Meta Muse privacy: what it can see and which settings to change" (November 22, 2026)** — Independent read of Meta's own pages. Muse Privacy Policy effective November 16, 2026: interactions used to train Meta's AI models unless switched off; Muse does not share conversations or VM data with Meta's ad systems; no retention period stated anywhere; "the terms say Meta may keep logs of Muse's actions for safety, abuse prevention, service improvement and legal compliance, also without a period." Deleting the Meta account deletes Muse with it.
   https://www.heyhermes.app/guides/meta-muse-privacy

4. **Uniform Law Commission / RUFADAA, via Lexology, WealthManagement, Trust & Will, Legal 500** — The Revised Uniform Fiduciary Access to Digital Assets Act (2015) governs fiduciary access to digital assets in nearly every state (WealthManagement: "enacted in all but six U.S. states"; California has its own law modeled on RUFADAA). Hierarchy of instructions: (1) an online tool provided by the custodian overrides everything, including a will; (2) a will, trust, or power of attorney; (3) the terms-of-service agreement. Critical limit: a fiduciary gets access to the *content* of electronic communications only if the user explicitly consented. The custodian retains sole discretion to grant access, may demand a court order, and may charge a reasonable administrative fee. A fiduciary has no more rights than the user had under the TOS.
   https://www.lexology.com/library/detail.aspx?g=6dce1a6f-c7ee-406c-8584-6b2ed77718b7
   https://www.wealthmanagement.com/estate-planning/administering-digital-estates
   https://trustandwill.com/learn/what-is-rufadaa

5. **Google Inactive Account Manager / Apple Legacy Contact / Facebook Legacy Contact, via FTC.net, AP via Barchart, Farwell** — Google: choose 3, 6, 12, or 18 months of inactivity; after warnings to recovery contacts, up to 10 trusted contacts get download access to the data slices you chose, with three months to download; passwords, payment methods, and 2FA codes are never shared; optional auto-delete after three more months. Apple: Legacy Contact needs the access key you shared plus a death certificate; access lasts three years, then Apple deletes the account; iCloud Keychain passwords, licensed media, and payment information are excluded. Facebook: a legacy contact can manage a memorialized profile but cannot read private messages or log in as you.
   https://www.ftc.net/blog/digital-legacy-planning-for-after-youre-gone/
   https://www.barchart.com/story/news/29192445/one-tech-tip-how-to-prepare-your-online-accounts-for-when-you-die
   https://www.farwellapp.com/learn/set-up-google-apple-facebook-legacy-contacts

6. **AideDex, "How to cancel or delete an AI agent" (October 2026)** — Muse cancellation is Settings > Manage subscription > Cancel; Meta gives no credit or partial refund "unless required by law." Deleting is separate from cancelling: Reset Muse is the full wipe. Disconnecting a connector stops new access but does not delete past data.
   https://aidedex.com/guides/cancel-or-delete-ai-agent/

7. **Prior generic coverage (for differentiation):** WhatsinAI, "What Happens to Your AI Assistant When You Die?" — a general explainer across assistants; AIForRegulars, "What Happens to Your Accounts and AI Chats After You Die" — general digital-estate guidance, notes 47 US states have adopted some version of RUFADAA. Neither addresses Muse's scheduled jobs, approval queues, or the reset-or-nothing catch-22. This article is the Muse-specific version with original analysis.
   https://www.whatsinai.com/ai-and-the-future/what-happens-to-your-ai-assistant-when-you-die-the-future-of-digital-inheritance
   https://aiforregulars.com/guides/ai-digital-estate-plan

## Original contribution (novel analysis for this article)

**The RUFADAA hierarchy, applied to Muse specifically.** Nobody has run the statute's three-step hierarchy against Muse. Step one, the online tool, is empty: Muse offers no legacy contact, no inactivity manager, no beneficiary designation of any kind, so there is nothing that outranks the will. Step two, the will or power of attorney, can authorize a fiduciary, but only helps with the *content* of Muse's chats and memory if the user explicitly consented to content access, which almost no will does today because wills were written before anyone owned a personal agent. Step three, Meta's terms of service, then governs, and Meta's terms give the executor no login, no handoff, and no read access at all. The practical result: the executor's only Meta-provided path to stop the agent is deleting the Meta account, which also deletes the agent.

**The reset-or-nothing catch-22 (original framing).** The two off switches Meta documents both destroy evidence. Reset Muse deletes chat history, files, and active tasks. Deleting the Meta account deletes everything associated with the account, including Muse. There is no "freeze the agent and hand the family a copy" state. An executor who needs the agent stopped quickly (it is still sending messages, still running scheduled jobs, still billing) must destroy the very material the estate may need: the documents in the VM, the records of what the agent bought and booked, the memory file that knows where the money went. The family has to choose between stopping the agent and preserving its records, and nothing in Meta's documentation acknowledges the choice exists.

**The zombie-agent inventory and the cost of inaction (original calculation).** What keeps running or billing after death, with nothing automatic to stop it:
- The subscription: free tier, or Power at $20/month, or Maximum at $100/month (reported pricing). Maximum left uncancelled for a year costs $1,200, charged to a card nobody is watching. Meta gives no refund unless the law requires it.
- Scheduled jobs: reminders, monitoring, recurring tasks. Meta's FAQ says they continue in the background without check-ins. A job that watches a price, a bill, or an inbox keeps watching.
- Approval-gated jobs stall rather than run amok: purchases require human approval every time, so the dangerous actions pile up as unanswered prompts instead of completing. That is the safer failure mode, but it is still a queue of half-finished business nobody owns.
- "Always allow" grants are the exception: jobs authorized to send messages or share information without asking keep acting with nobody watching, the same failure mode as the Robb Marketplace case, except now there is no one left to discover it late at night.
- The memory file keeps its contents indefinitely: Meta states no retention period, and the terms reserve the right to keep action logs for safety and legal compliance, also without a period.

**The 20-minute plan (original checklist).** Six things, all doable in one sitting, that close every gap above: (1) download your Muse data now, so the family has a copy that survives any later reset; (2) add one sentence to your will or power of attorney explicitly consenting to fiduciary access to the content of your Muse chats and memory, which is what RUFADAA requires; (3) name a digital executor and tell them where the instructions live; (4) set Google Inactive Account Manager to 12 months and name the same person, because your Gmail is where most password resets and receipts live; (5) set Apple Legacy Contact, because your photos and files are the other half of the estate; (6) leave written instructions to reset Muse and cancel the subscription, in that order, so the agent stops without the family having to guess.

## What Meta has NOT said (limitations)

- No published policy on what happens to a Muse account on the user's death or incapacity, no inactivity threshold, no legacy or beneficiary feature, no executor request process. Checked November 28, 2026; the help page's only account-ending paths are user-initiated.
- No stated retention period for Muse data or action logs; no statement of what happens to data when a paid subscription is cancelled (as opposed to the account being deleted).
- No documented case of a Muse account being administered after a user's death; the zombie-agent behavior is reasoned from Meta's published descriptions of background work and billing, not observed.
- Subscription prices ($20 Power, $100 Maximum) are from secondary reporting, not Meta's own pricing page as read for this piece; Meta's FAQ confirms a free tier with a usage limit and paid subscriptions.
- RUFADAA adoption counts differ by source (47 states vs. "all but six"); the article will say "nearly every state" and note California's parallel law.
- This is general information, not legal advice; estate documents should be reviewed by a lawyer in the reader's state.

## Strongest counterargument (to state at full strength)

The skeptical case is that this is a problem for every online account, not a Muse problem, and the platforms already solved the important half of it. Apple and Google built the handoff tools; Facebook built memorialization; the data your family actually wants, photos, email, files, is covered if you spend twenty minutes turning those tools on. Muse adds nothing new except scheduled jobs and a subscription, and both are fixable the boring way: the will names an executor, the executor cancels the subscription and deletes the account, and the family moves on. The agent's approval gates mean the dangerous actions stall instead of completing, which is the safe failure mode, and a dead person's agent sending a few more price-watch alerts is an annoyance, not a crisis. On this reading the article invents a new anxiety out of an old estate-planning gap, and the honest advice is the same twenty-minute checklist your parents needed for Gmail. The article must not dismiss this; for a careful user who has already set up Google and Apple, the Muse-specific gap really is small, and the piece should say so.

## Facts to use in the draft

- Muse launched September 8, 2026 (US). Free tier with usage limit; paid subscriptions (Power $20/mo, Maximum $100/mo, as reported).
- Meta help page, "How to manage your Muse data": stores interactions, connector info, goals, artifacts, system files, reminders/scheduled tasks, memories, soul, identity. Reset permanently deletes chat history, files, and active tasks. Deleting the Meta account deletes Muse. Download via Settings > Data controls > Download your Muse data. Deleting something does not guarantee Muse forgets what it learned from it.
- ai.meta.com FAQ: "Does Muse keep working after I close the app? Yes... it keeps working in the background whether you're actively using the app or not."
- Muse Privacy Policy effective November 16, 2026: training on by default, removable PII stripped, disassociated from account; no retention period; no sharing with Meta ad systems; Meta may keep action logs without a stated period.
- RUFADAA: 2015 revision; hierarchy online tool > will/trust/POA > TOS; content of electronic communications requires explicit user consent; custodian discretion, may require court order, may charge a fee; fiduciary has no more rights than the user had under the TOS.
- Google Inactive Account Manager: 3/6/12/18 months; up to 10 trusted contacts; three months to download; passwords, payment methods, 2FA codes excluded; optional auto-delete.
- Apple Legacy Contact: access key + death certificate; three-year access window, then account deleted; iCloud Keychain passwords, licensed media, payment info excluded; requires iOS 15.2 / macOS Monterey 12.1 or later.
- Facebook Legacy Contact: manages memorialized profile; cannot read private messages or log in.
- AideDex: Muse cancel path is Settings > Manage subscription > Cancel; no credit or partial refund unless required by law.
- Prior site coverage: #808 approval gates (Elena Vasquez), #810 VM attack surface (Catherine Chen), #811 receipts/audit trail (Frank DeLuca), #832 undo windows (Frank DeLuca). None covers death, incapacity, or estate administration.

## Sources list for the article footer

Meta Help Center, "How to manage your Muse data"; Meta, "Muse: Meta's personal AI agent, features & capabilities" (ai.meta.com FAQ); Hey Hermes, "Meta Muse privacy: what it can see and which settings to change" (November 22, 2026); Uniform Law Commission / RUFADAA via Lexology, WealthManagement, and Trust & Will; Google Inactive Account Manager, Apple Legacy Contact, and Facebook Legacy Contact via FTC.net, Associated Press via Barchart, and Farwell; AideDex, "How to cancel or delete an AI agent" (October 2026); WhatsinAI and AIForRegulars (prior generic coverage, for differentiation).
