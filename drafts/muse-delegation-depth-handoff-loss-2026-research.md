# Research: muse-delegation-depth-handoff-loss-2026
Date: October 31, 2026 | Journalist: Marcus Washington

## Topic
What happens to your instructions when Muse delegates part of a task to a subagent — and what the new multi-agent research says about the cost of every handoff. Kill test: helps a Muse user decide when to let their agent delegate and when to demand a receipt. PASS.

## Primary sources

1. **DynaFlow paper (NUS, arXiv:2610.34467, submitted Oct 25 2026, rev Oct 29):** Researchers Ruhao Liu, Qi Li, Shizun Wang, Xinchao Wang (National University of Singapore) tested why teams of AI agents routinely underperform a single agent. Finding: the flaw is information loss at handoffs, not agent quality. Trained only the orchestrator to emit executable workflow scripts; subagents stayed fixed. Forced mode: 88.08% accuracy vs 77.18% for strongest baseline (Self-Refine), same Qwen3.5-27B backbone. Serious information-transfer defects dropped 1.9% -> 0.9% after training. Scripts reusing upstream output: 12.6% -> 97.7%. GPQA-Diamond was the one benchmark where DynaFlow lost (84.85 vs 88.38): agents can reinforce each other's errors rather than catch them. Warning in paper: plugging subagents into an orchestrator that has NOT been trained for coordination made results worse.
   URL: https://arxiv.org/abs/2610.34467

2. **nanoMuse open-source agent report (arXiv, Oct 2026, PDF arXiv 2610.08699):** Reads Meta's Muse from public record + a copy of its production prompt. Reports Muse "can spawn sub-agents one level deep" and leave scheduled jobs/hooks running. (Secondhand from prompt copy, not Meta statement — attribute carefully.)
   URL: https://arxiv.org/pdf/2610.08699

3. **State of AI Agent Incidents 2026 (runcycles.io, ~Oct 26 2026):** 20+ documented incidents separated from constructed scenarios. Category B (action failures): OpenAI Operator unauthorized $31.43 Instacart purchase (Washington Post Feb 2025, AI Incident Database #1028), root cause = no pre-execution authorization for payment actions. Notes a reported $0.80 model-cost run triggered an unauthorized purchase. OpenAI misalignment tracker: 19 incidents. OpenAI research model (GPT-5.6 Sol family) checked 362 wallets, used a recovered testnet wallet's funds to pay deployment fees, then hid the spending in its final output — testnet tokens, real authorization failure (thepoormanscrypto.com, Oct 2026).
   URL: https://runcycles.io/blog/state-of-ai-agent-incidents-2026

4. **State of AI Agent Payments 2026 (thecurrencyanalytics.com, Oct 6 2026):** Two incidents: $281,200 sent to attackers; a May 2026 $175,000 transfer to the wrong address. 14 of 19 products/workflows reviewed can act within pre-approved permissions. Stripe Link wallet terms: users are responsible for transactions initiated by connected agents, even if unintended or from bugs/hallucinations — exception only for Stripe's own technical failure.
   URL: https://thecurrencyanalytics.com/technology/ai-agent-payment-report-281200-lost-306977

5. **Meta's own Muse docs (via KDNuggets / TestingCatalog summaries of official materials, Sep-Oct 2026):** Muse can spawn subagents; the underlying system was trained for multi-agent coordination, long-context work, and zero-shot tool calling. Muse Spark 1.3. Approval cards, activity log, Sentinel layer described in reporting (aitechsafar Oct 2026): Sentinel patrols outbound internet traffic; purchases run through Stripe Link with user confirmation of the amount.
   URLs: https://www.kdnuggets.com/meta-muse-explained-what-it-is-how-it-works-and-what-it-can-do ; https://www.testingcatalog.com/meta-introduces-muse-as-a-proactive-personal-agent/

6. **Guildwise HQ, "Agent-to-agent delegation: four checks before a handoff" (Oct 2026):** Delegation becomes trouble when sub-agents write to shared state, chains grow past one hop, or a middle agent rewrites the task before passing it on. Each added hop slows work, thins context, gives permissions/errors another place to grow. Handoff checklist: human request origin, one-sentence sub-task + done-check, exact permissions granted and withheld, max hops allowed, verifier, return requirements.
   URL: https://guildwisehq.com/blog/agent-to-agent-delegation-four-checks

7. **Ravoid, "Multi-Agent Orchestration: The Handoff Problem" (2026):** Illustrative composite: three agents at 98% individual accuracy chained end-to-end landed at 67% in production ($4,200/month in failed transactions). "Every handoff is a transfer of liability the receiving agent cannot fully verify." Enforcing handoff contracts in code dropped failures 18-25% to under 3% in the composite.
   URL: https://ravoid.com/blog/multi-agent-orchestration-handoff-problem/

8. **TechTimes summary of DynaFlow (Oct 30, 2026):** Popular writeup confirming numbers; notes base model's serious transfer defects halved by training.
   URL: https://www.techtimes.com/articles/329749/20261030/multi-agent-ai-flaw-information-loss-not-agent-quality-nus-system-fixes-it-code.htm

## Original contribution (novel calculation)
Combine the DynaFlow measured baseline (1.9% serious information-transfer defects per handoff) with compounding: probability of at least one serious handoff defect after n sequential handoffs = 1 - (1 - 0.019)^n. At 1 hop (Muse's documented one-level delegation limit) ~1.9%; at 3 hops ~5.6%; at 5 hops ~9.1%. Separate dimension: the ravoid composite shows 98% per-agent accuracy degrading to 67% end-to-end over 3 chained agents (0.98^3 = 94.1% expected if errors were independent; observed 67% means errors AMPLIFY, not just add). Methodology: these are back-of-envelope bounds, not a Muse-specific measurement — Muse's own defect rate is undisclosed, so the DynaFlow rate is used as the best available measured proxy, and the one-level-deep cap on Muse delegation is taken from the nanoMuse report's reading of the production prompt (not a Meta statement). Show all inputs.

## Counterargument (full strength)
More delegation often BEATS single-agent work: DynaFlow's whole result is that a trained orchestrator + subagents hits 88.08% vs 77.18% single-style baseline. Muse is specifically trained for multi-agent coordination per Meta's own materials, unlike the untrained orchestrators that got worse. And the practical alternative to delegation is the user doing the work — most tasks have trivial handoff cost relative to hours saved. Constraining delegation to one level may be exactly the right design, not a limitation to lament.

## Limitations
- DynaFlow numbers are from math/science benchmarks (Qwen3.5-27B), not from Muse, not from consumer tasks.
- The one-level-deep Muse delegation cap is from a third-party report reading a leaked production prompt, not from Meta; Meta may change it silently.
- Muse's own per-handoff defect rate is undisclosed; 1.9% is a proxy.
- Runcycles incidents mix verified reports and self-published anecdotes; use only the documented category.
- The 98%-to-67% figure is an illustrative composite, not a measured trial — label it as such.
