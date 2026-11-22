# Research — muse-subscription-audit-forgotten-charges-2026

**Journalist:** Frank DeLuca (productivity systems, life operations)
**Date:** November 22, 2026
**Headline (working):** You Think Your Subscriptions Cost $86 a Month. They Cost $219. Muse Can Do the Math.

## Angle (1-2 sentences)
People underestimate their subscription spending by roughly 2.5x, and the federal rule that would have forced one-click cancellation was vacated in July 2025, so nobody is coming to save you. Muse can run a monthly audit that cross-checks your bank feed against your inbox receipts and hands you the list of charges to kill, which is the closest thing to the cancelled rule that actually exists.

## Self-critique gate
**Propose:** A subscription audit is the most concrete money job an agent can do, and the FTC vacatur plus California's AB 2863 give it a live policy spine.
**Challenge:** Is this the best use of the cycle? The subscription-spending numbers are heavily covered by personal-finance blogs, and no hands-on Muse audit was run for this piece, so the capability claim rests on documented connectors and scheduled tasks rather than a measured test. The counterweight is that nobody has combined the C+R and CNET numbers with the FTC vacatur, the California law, and a concrete agent protocol in one place, and the recovery math is original.
**Verdict:** Proceed. The combination is the contribution, and the limitations section will say plainly what was not tested.

## Kill test
Does this help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an agent with real work? Yes on all three: it gives a specific scheduled-task setup with exact wording, it names the bank-feed access the job requires so the reader can decide whether to grant it, and it quantifies the money at stake.

## Sources (3+ primary)

### 1. C+R Research, "Subscription Service Statistics and Costs" (2022)
- Survey fielded April 22-May 2, 2022, n=1,000 U.S. consumers, even split across four generations.
- Asked off the top of their heads, respondents estimated $86/month on subscriptions. Asked to itemize category by category, the same people totalled $219/month, a $133/month gap, about $1,596/year.
- 42% admitted they had kept paying for a service they had stopped using. 74% agreed recurring charges are easy to forget. 72% had all subscription payments on autopay.
- Nearly a third of respondents underestimated by $100-199/month; about a quarter were off by $200 or more.
- Method caveat: both numbers are self-reported. Nobody checked a bank statement, so read this as a memory gap, not an independent audit. The study is from 2022 and has not been repeated at that scale.
- URL: https://www.crresearch.com/blog/subscription-service-statistics-and-costs/

### 2. CNET / YouGov subscription survey (2026)
- Survey of 2,522 U.S. adults, fielded late April to early May 2026, published July 2026.
- Average adult now reports spending $111/month on subscriptions, up 23% from $90/month in the 2025 survey, and wasting $21/month, $252/year, on subscriptions they never use.
- Self-reported, so it sits below the itemized C+R figure. The gap between the two is itself a methodology story: asking people to guess produces lower totals than making them count.
- Corroborated in coverage at https://www.moneyunder40.com/subscription-audit-find-hidden-spending/ and https://walnutinvest.com/stats/subscription-spending-statistics

### 3. FTC Negative Option Rule vacated, Eighth Circuit (July 8, 2025)
- The FTC adopted the revised Negative Option Rule, commonly called Click-to-Cancel, in October 2024 by a 3-2 vote. Its misrepresentation provisions took effect January 19, 2025; disclosure, consent, and cancellation provisions were delayed to July 14, 2025.
- On July 8, 2025, the U.S. Court of Appeals for the Eighth Circuit vacated the rule in its entirety in Custom Communications, Inc. v. Federal Trade Commission, on procedural grounds: the FTC failed to conduct the preliminary regulatory analysis required by Section 22 of the FTC Act once an administrative law judge found the rule's economic impact exceeded the $100 million threshold. The court did not reach the substantive merits.
- The FTC restarted rulemaking on January 30, 2026, submitting a draft Advance Notice of Proposed Rulemaking to OIRA; on March 11, 2026 it sought public comment, due April 13, 2026. As of November 2026 no replacement rule has followed. Enforcement under the Restore Online Shoppers' Confidence Act (ROSCA) continues.
- Sources: https://www.sidley.com/zh-hans/insights/newsupdates/2025/07/us-ftc-click-to-cancel-rule-struck-down ; https://www.gibsondunn.com/ftc-restarts-negative-option-rulemaking-after-eighth-circuit-vacatur-enforcement-under-rosca-continues/

### 4. California AB 2863, Automatic Renewal Law amendments (effective July 1, 2025)
- Stats. 2024, Ch. 515. Applies to contracts entered into, amended, or extended on or after July 1, 2025.
- Requires express affirmative consent to auto-renewal terms, an annual reminder notice, and cancellation in the same medium used to sign up, with a prominently located click-to-cancel option and no steps that obstruct or delay termination.
- Trial-expiry notice 3-21 days before a free or discounted period ends (trials over 31 days); annual-term renewal notice 15-45 days before renewal; fee-change notice 7-30 days before the change takes effect.
- California AG Rob Bonta issued a consumer alert on the strengthened law.
- Sources: https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2863 ; https://oag.ca.gov/news/press-releases/attorney-general-bonta-issues-consumer-alert-california%E2%80%99s-automatic-renewal-law ; https://revisionlegal.com/internet-law/californias-automatic-renewal-law-for-consumer-contracts/

### 5. Muse scheduled tasks and connectors (Meta documentation and hands-on reporting)
- Muse runs scheduled tasks on its own computer in Meta's cloud, so they keep running when the phone is in a pocket or locked. Tasks are described in plain English with when, what to check, and what to send back.
- Scheduled tasks use the user's weekly allowance every time they run, and have their own approvals, reviewable in Settings, Permissions, Artifacts and scheduled tasks. Tasks are listed under the assistant icon, Upcoming.
- Connectors give Muse read access to Gmail and, through Plaid, to bank and card transactions, which are the two feeds a subscription audit needs.
- Sources: https://www.alwaysongtm.com/how-to/schedule-recurring-tasks-in-muse ; https://agentwikis.com/wiki/muse/wiki/concepts/reminders-and-scheduled-tasks.md ; https://dev.to/ying_liao_0a481102ff971b4/automating-real-work-with-muse-connectors-scheduled-tasks-58co

### Supporting numbers
- West Monroe 2021, n=2,500: $273/month across 21 categories, up from $237 in 2018; 66% underestimated their spend by more than $200.
- Deloitte Digital Media Trends 2026: average subscribing household spends $69/month on streaming video across four services.
- Source for both: https://subby.online/guides/average-subscription-cost.html ; https://renood.com/guides/subscription-statistics/

## Original contribution
1. **The two-source reconciliation audit.** No published subscription-audit guide combines a bank feed with an inbox receipt search and scores each charge on both. The protocol: every recurring charge found in the bank feed gets matched against Gmail receipts and against actual use, and the output is a three-bucket list (keep, question, cancel) with the dollar figure attached to each bucket. The audit's prime suspect is a charge with a bank record, no recent receipt, and no use in 90 days.
2. **Recovery math, three scenarios, inputs shown.** Floor: CNET's $21/month of admitted waste, $252/year. Middle: half the C+R $133/month gap, $66.50/month, $798/year. Ceiling: the full C+R gap, $133/month, $1,596/year. Each scenario states what it assumes, and the article says plainly that the ceiling assumes the average household, not any particular reader.
3. **The visibility ledger.** A table of what Muse can see in a subscription audit (bank feed, Gmail receipts, renewal emails, annual charges) versus what it cannot (App Store and Google Play billing buried in platform receipts, family members' cards, annual charges that predate the Gmail connection, cash or gift-card renewals). No vendor document publishes this split.

## Strongest counterargument (stated at full strength)
The audit asks you to hand your bank feed to the same agent you are asking to cancel things, which is the access paradox at the center of the whole personal-agent idea: the more useful the agent, the more of your financial life it can see, and a misread charge is a cancelled service you actually use. Cancellation is also the part Muse is worst at, because many merchants still require a phone call, a retention maze, or a chat with a human, and California's same-medium rule only helps if you live in California. The federal rule that would have made cancellation one click everywhere was vacated, so the agent finds the money and then hands you the phone. If the audit saves $252 a year but costs you an afternoon of retention calls and one wrongly cancelled password manager, you are behind.

## Limitations (what was NOT proven)
- No hands-on Muse subscription audit was run for this article. No real bank feed was connected and no real household's subscriptions were audited, so the recovery figures are arithmetic on published survey numbers, not measured results.
- C+R Research is from 2022 and self-reported; CNET 2026 is self-reported. No published statement-level audit of a large sample exists, so the true average waste is unknown and the $133 gap is a memory gap, not a bank-verified figure.
- California's AB 2863 protections apply only to California consumers. Readers elsewhere rely on ROSCA and the FTC's restarted rulemaking, which has produced no rule as of November 2026.
- Muse's Plaid connector scope, and whether a scheduled task can read transactions without a fresh approval each run, were not independently verified beyond connector documentation; the article flags this as a setup step to confirm.

## Structure (Frank DeLuca)
1. Cold open: the operations view, a monthly close that never closes, because the charges never stop.
2. The problem: the $86 vs $219 gap, with the C+R method explained so the reader trusts the number.
3. The law that didn't save you: FTC vacatur, then California as the one jurisdiction that did something.
4. The capability: the two-source audit protocol, step by step, with the exact scheduled-task wording.
5. The evidence: recovery math in three scenarios, visibility ledger table.
6. The skepticism: the access paradox and the cancellation maze, at full strength.
7. The stakes and the setup checklist: what to connect, what to approve, what to check monthly.

## Actionable takeaways (required)
- The exact monthly scheduled-task brief to give Muse, with the two feeds named and the three-bucket output format.
- The setup checklist: connect Plaid and Gmail, set the task for the 1st of the month, review the Upcoming tab, prune the task if the allowance cost exceeds the savings.
- The California rights to cite when a merchant obstructs cancellation, and the ROSCA baseline for everyone else.
- The kill list rule: a charge with a bank record, no receipt in 90 days, and no use in 90 days gets cancelled first.
