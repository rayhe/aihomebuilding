# Research: muse-supervision-burden-regressive-2026
Journalist: Priya Greenwood (Everyday Life & Accessibility)
Started: 2026-10-21

## Working headline
Your Agent Saves You an Hour. Checking Its Work Costs Your Mom Four. The Supervision Tax Is Regressive.

## Angle
The verification habit from muse-verify-before-trust-2026 is necessary (+15.6 points from one verification step, Berkeley MAST), but verification is itself a cost in time and skill, and that cost lands hardest on the people who need agents most: older adults managing medications and bills, stretched caregivers, the 51% of Americans who never use chatbots. Priya's thesis: the supervision burden is regressive. Meta says Muse asks before sensitive actions and that nothing publishes/sends/spends without the owner's approval, but an approval tap is only as good as the judgment behind it. When 77% of adults 65+ never use chatbots, the judgment behind the tap is exactly what's missing.

## Kill test
Does it help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an AI agent with real work? Yes — it tells a family exactly who should be allowed to approve what, why the fluent family member must be the verifier (not the person who gave the command), and how to size the real cost of an agent before handing it a parent's pill schedule. PASS.

## Primary / verifiable sources
1. **Pew Research Center, "Americans and AI 2026: Chatbots, Smart Devices and Views on Impact"** — survey of 5,119 US adults, conducted Feb. 17-23, 2026, published Oct. 9, 2026. 51% of US adults never use chatbots. Non-use by age: 77% of 65+, 58% of 50-64, 39% of 30-49, 34% of 18-29. Reasons for non-use (major reason): 60% lack of interest, 54% privacy concerns, 45% accuracy concerns, 29% don't know how. 67% of non-users unlikely to try in next 12 months. https://www.pewresearch.org/short-reads/2026/10/09/why-dont-some-people-use-chatbots/
2. **NBER WP 31161, Brynjolfsson, Li & Raymond, "Generative AI at Work"** (Apr. 2023; published QJE 140(2), 2025). Staggered introduction of a generative AI conversational assistant across 5,179 customer support agents. Access raised issues resolved per hour by 14% on average, including a 34% improvement for novice and low-skilled workers, with minimal impact on experienced/highly-skilled workers. Mechanism: the AI disseminated best practices of more able workers. Also improved customer sentiment and employee retention. https://www.nber.org/papers/w31161 — THE COUNTERARGUMENT SOURCE.
3. **Princeton, ICML 2026 (Rabanser, Kapoor, Kirgis, Liu, Utpala, Narayanan)** — "Towards a Science of AI Agent Reliability." 15 models on GAIA + tau-bench. Reliability (consistency, robustness, predictability, safety) improves only slowly despite 24 months of capability gains. Outcome consistency 0.58-0.84 on GAIA. The single most common failure on the financial benchmark: agents getting a transaction wrong while sounding certain. (via verify-before-trust research, read 2026-10-21)
4. **UC Berkeley, NeurIPS 2025 Spotlight (Cemri, Pan, et al.)** — MAST, first multi-agent failure taxonomy: 1,642 annotated traces, 7 frameworks, 41-86.7% task failure. Verification failures 23.5% of all failures. One added verification step lifted ChatDev task success 15.6 points with no model change. (via verify-before-trust research, read 2026-10-21)
5. **Meta Muse launch materials (Sept. 8, 2026; Connect keynote Sept. 23, 2026)** — Muse is a personal AI agent on its own Muse Secure VM with its own browser; asks before sensitive actions (sending email, spending money). Tiers: free (metered), Power $20/mo, Maximum $100/mo. Muse for Small Business (Sept. 29, 2026): "nothing publishes, sends or spends without the owner's approval." https://www.curatedai.net/guides/meta-muse-ai-agent-explained.html ; https://ppc.land/metas-muse-agent-gains-access-to-ad-accounts-and-15-business-tools/

## Key numbers for the piece
- 77% of adults 65+ never use chatbots; 58% of 50-64; 34% of 18-29 (Pew, Oct 2026, n=5,119)
- 45% of chatbot non-users cite accuracy concerns as a major reason — the skeptics are responding to a real property (Pew)
- +14% average productivity from AI assistance; +34% for novice/low-skilled workers (NBER 31161, n=5,179)
- Most common agent failure on financial tasks: wrong transaction, stated with certainty (Princeton ICML 2026)
- +15.6 points of task success from a single verification step (Berkeley MAST)
- Only 29% of non-users say "don't know how" is a major reason — the barrier is not mostly interface complexity (Pew)

## The original calculation: the regressive supervision tax (ILLUSTRATIVE, assumptions labeled)
Scenario: a weekly routine — refill two prescriptions, move one doctor's appointment, pay one bill.
- Human baseline (H): 60 minutes/week (phone trees, hold music, driving to the pharmacy).
- Agent execution (A): 5 minutes (stated assumption: Muse handles the calls and forms via its own computer).
- Checkpoints (C): 2 — one after the money moved, one after the appointments changed (per the 14-step/inspectable-chunks discipline).
- Fluent verifier (adult child, comfortable reading agent output): 3 min per checkpoint. Verification cost = 6 min. Net benefit = 60 - 5 - 6 = 49 min. Tax rate = 6/55 = 11% of gross savings.
- Low-fluency user (the 78-year-old herself): 12 min per checkpoint (re-read the summary twice, open the pharmacy site to confirm, call a grandchild to interpret the approval dialog). Verification cost = 24 min. Net benefit = 60 - 5 - 24 = 31 min. Tax rate = 24/55 = 44%.
- Result: same agent, same task, the supervision tax is 4x higher for the person who needs the agent most. And this is the OPTIMISTIC version, because it assumes the low-fluency user detects every error. Princeton says the errors arrive wearing certainty; detection is itself a skill. If the fluent verifier catches 9 in 10 errors and the low-fluency user catches 3 in 10, the residual risk concentrates exactly where the user is least able to absorb it.
- HONESTY LABEL: no study has measured verification time or error-detection rates by age or digital fluency. The per-checkpoint minutes and detection rates above are my assumptions, chosen to be plausible, not empirical. The math is shown so the reader can substitute their own family's numbers. The qualitative claim — that verification cost scales with fluency while agent speed does not — follows directly from the cited research.

## The strongest counterargument (NBER 31161, at full strength)
The best evidence against this thesis is the NBER finding itself: AI assistance helped novice and low-skilled workers the MOST (+34% vs ~0% for experts), improving customer sentiment and retention. If the pattern holds for agents, the least fluent users are exactly who benefits most, and worrying about their supervision burden is paternalism dressed as analysis. This deserves a serious answer, and the answer is a distinction the paper forces: in the NBER setting, the AI SUGGESTED and the human DECIDED, with the customer on the line to correct course. Every action was reviewed by construction. An autonomous personal agent inverts the loop: the agent decides and acts, and the human sees only the report. The +34% came from a system where the novice kept the decision seat. Take the seat away and the novice's biggest advantage — her judgment about when the suggestion looks wrong — has nowhere to sit. The finding is real; the regime is different. The argument of this article is not "don't give the agent to the novice." It is "budget the supervision from somewhere, because the paper's gains came with a human in the loop, and your parent's agent has no loop."

## Limitations (for the article's dedicated section)
- No empirical study measures how long verification takes, or how often errors are caught, by age or digital fluency. The tax arithmetic is illustrative.
- Pew measures chatbot use, not personal-agent use; Muse launched Sept. 8, 2026, after the survey fieldwork. Agent adoption patterns may differ (voice surfaces and proactive agents could reach older adults differently), or be worse.
- The NBER study is customer support with a human agent in the loop, not autonomous personal agents; the counterargument distinction above is analytical, not experimental.
- Princeton and Berkeley measure model/framework behavior, not household outcomes; no study tracks what happens when a family actually delegates a parent's bills to an agent for a year.

## Actionable insights (hard gate — the family playbook)
1. Start the agent on reversible work (summaries, lists, drafts, research), not irreversible work (payments, bookings, refills). Earn the irreversible jobs with a track record.
2. The approval tap is the whole privacy policy (cf. muse-approval-dialog-allow-always-2026): never tap "allow always" on behalf of someone else's account; for a parent's bills, every sensitive action gets an individual approval, and Meta's own rule — nothing publishes, sends, or spends without the owner's approval — should be treated as a floor, not a ceiling.
3. The verifier is a named person. The fluent family member gets the receipts, not whoever issued the command. If nobody in the family can read the agent's work critically, the agent is not ready for irreversible tasks in that household.
4. Brief like a babysitter: one job, one page, what "done" looks like, what to do when stuck. (Standing instructions only half-stick — cf. muse-standing-instructions-half-stick-2026.)
5. Size the plan for the verifier, not the user: the supervision work is real labor; the subscription is the cheapest line item.

## Differentiation check
- muse-verify-before-trust-2026 (#795 in SHIP, Frank DeLuca): the verification habit, operations frame. This article is the distributional consequence: who can afford the habit. Complementary, different axis, different journalist.
- muse-approval-dialog-allow-always-2026 (Catherine Chen): the tap as privacy policy. Referenced, not repeated.
- muse-true-cost-supervision-tax-2026 (Frank DeLuca): supervision cost in aggregate. This article: who bears it, with age/fluency arithmetic. Different.
- muse-agent-tuesday-morning-caregiving-2026 (Priya): caregiving stress test. This article extends the family thread to the economics of trust. Fine for Priya to own the family-agent beat.

## Next: DRAFT
Full HTML to drafts/muse-supervision-burden-regressive-2026.html, Priya Greenwood's voice, article-hero/article-container/article-body markup, hero image (generated, real JPEG, cache-bust ?v= hash), hard gates in mind from the start: 0-3 em dashes (regex count is truth), <15% The-starters, no banned phrases, sentence-rhythm variance >= 200, short <= 15%, long >= 15%.
