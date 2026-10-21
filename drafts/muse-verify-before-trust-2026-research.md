# Research: muse-verify-before-trust-2026
Journalist: Frank "The Foreman" DeLuca (Productivity Systems & Life Operations)
Started: 2026-10-21

## Working headline
"Done" Is the Most Dangerous Word Your Agent Knows. Here's the Verification Habit That Catches the Errors.

## Angle
Life-ops framing: when a personal agent (Muse) reports a task complete — bill paid, flight booked, form filed, calendar moved — what the 2026 reliability research says about trusting that report, and a cheap verification routine anyone can run. The single highest-ROI intervention in the research is verification itself: adding one verification step lifted ChatDev's task success 15.6 points with no model change. Frank's thesis: treat the agent like a crew you manage, not a tool you use. Inspection is part of the job, not a lack of trust.

## Kill test
Does it help someone use Muse better or make an informed decision about trusting an agent with real work? Yes — it converts academic reliability findings into a practical inspection checklist for the most common personal-agent failure (confident wrongness on completed tasks). PASS.

## Primary / verifiable sources
1. **Princeton, ICML 2026 (Rabanser, Kapoor, Kirgis, Liu, Utpala, Narayanan)** — "Towards a Science of AI Agent Reliability." 15 models, GAIA + tau-bench. Reliability defined across four dimensions: consistency, robustness, predictability, safety. Finding: 24 months of capability gains, only small reliability improvements; models remain inconsistent across runs, brittle to prompt rephrasings, poorly calibrated on when they'll fail. Outcome consistency 0.58–0.84 on GAIA, 0.52–0.90 on tau-bench. Financial-accuracy errors the single most common failure on tau-bench: agents getting a transaction wrong while sounding certain. (via trustabl.ai, Aug 2026 — full piece read 2026-10-21)
2. **UC Berkeley, NeurIPS 2025 Spotlight (Cemri, Pan, et al.)** — MAST: first Multi-Agent System Failure Taxonomy, 1,642 annotated traces across 7 frameworks (MetaGPT, ChatDev, AppWorld, AG2, Magentic-One...). Failure rates 41%–86.7%. 14 failure modes in 3 categories: system design 44.2%, inter-agent misalignment 32.3%, verification failures 23.5%. Step repetition alone ~16%. Interventions: clear decision authority +9.4%, one added verification step +15.6% — same model. (via trustabl.ai, Aug 2026)
3. **Queen's University 2026 (Hasan, Li, Rajbahadur, Adams, Hassan)** — audited 856 real-world MCP tools across 103 servers (Anthropic, GitHub, Microsoft, PayPal tools included): 97.1% of tool descriptions had at least one "smell" (unstated limitations, missing usage guidance, opaque parameters). Rewritten descriptions raised task success 5.85 points — but median execution steps rose 67.46%. Lesson: tool description is part of the agent's operating spec. (via trustabl.ai, Aug 2026)
4. **WithTai, compounding-error analysis (Sep 2026)** — 95% per-step over 30 steps gives ~21% clean runs (0.95^30); running it backwards: 95% end-to-end over 10 steps demands 99.5% per step; at 95% per step the task drops below a coin flip at 14 steps. Stanford orchestration research: perception/planning/grounding error classes; planning errors dominate as trajectories lengthen. METR time-horizon: task duration at 50% reliability doubles roughly every 7 months. (withtai.com, read 2026-10-21)
5. **Taskade error-recovery taxonomy (Jul 2026)** — three error classes demanding different responses: transient (retry helps), permanent (fall back), critical (save state, alert human; retry is dangerous). Anthropic's "Building Effective Agents": favor simplicity, fewest moving parts. (taskade.com, read 2026-10-21)
6. **Code Ninety enterprise survey (Feb 2026, 188 architects)** — dominant oversight model is human-in-the-loop mandatory approval (58.5%); full autonomous execution only 11.7%. Operator-to-agent ratio 1:18 (IT support) to 1:2 (code generation). Top failure mode: cascading state errors across tool calls (61.2%). (codeninety.com, read 2026-10-21)
7. **RunCycles "State of AI Agent Incidents" 2026** — silent failures: agent returns success while underlying data is wrong; errors propagate 10+ downstream steps before detection. Google Research (Jan 2026): independent agents amplified errors up to 17.2x vs 4.4x with centralized coordination. (runcycles.io, read 2026-10-21)

## Key numbers for the piece
- 41%–86.7% task failure across 7 production multi-agent frameworks (Berkeley MAST)
- 0.58–0.84 outcome consistency on GAIA — even the steadiest models diverge on ~1 run in 10 (Princeton)
- 44.2% of multi-agent failures are fixable system design (step repetition, unclear termination), not model limits
- +15.6 points from one added verification step; +9.4 points from clear decision authority (ChatDev interventions)
- 97.1% of MCP tool descriptions have at least one "smell"
- 95%^30 ≈ 21% clean runs; below a coin flip at 14 steps at 95%/step
- Only 11.7% of enterprises run agents with no human gate; 1:2 oversight ratio for code-gen agents

## The Frank DeLuca frame (operations discipline)
1. **The invoice rule:** never accept "done" on a money task without a receipt you didn't generate. Financial-accuracy errors are the single most common agent failure in the benchmarks.
2. **The 14-step rule:** if your request chains more than ~14 tool calls, your end-to-end success is a coin flip at 95%-per-step reliability. Break long jobs into inspectable chunks.
3. **The verification tax:** the ChatDev result — one extra check step buys 15.6 points of success. Make the agent show its work: what it clicked, what it typed, what came back.
4. **The three-bucket triage:** transient (retry), permanent (fallback), critical (stop and call a human). Know which bucket before you delegate.
5. **The gate goes outside the agent:** approval gates must be enforced by the platform (Sentinel-style), not by the agent asking itself whether to ask. "Above proposes; below decides."

## Differentiation check
- muse-standing-instructions-half-stick-2026 (#793): instruction-following rates. This is verification/inspection, different axis.
- muse-who-pays-when-your-agent-fails-2026: liability/payment. Different.
- 3 AM scheduled-tasks article: delegation trust ladders. Complementary, not duplicative.

## Next: DRAFT
Full HTML to drafts/muse-verify-before-trust-2026.html, Frank's voice, article-hero/article-container/article-body markup, hero image (generated, real JPEG), em-dash and "The"-starter gates in mind from the start.
