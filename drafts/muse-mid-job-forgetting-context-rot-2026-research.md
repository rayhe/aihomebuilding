# Research: Your Agent Forgot the Middle of the Job (context rot, drift, and long-task reliability)

Slug: muse-mid-job-forgetting-context-rot-2026
Journalist: Frank DeLuca (productivity systems, life operations, failure modes)
Date: November 4, 2026
Kill test: PASS. Helps a reader decide which jobs to hand to Muse, how to structure a long job so it survives, and where to check the agent's work before trusting it. A trust decision about real work, not a feature tour.

## Angle
Muse is sold on long jobs: research that runs while you sleep, goals that advance in the background, plans that span days. The quiet failure inside that pitch is not a crash. It is forgetting. As a job gets longer, the agent's working memory fills, its summaries compress, and the middle of the job goes soft: a constraint dropped, a date swapped, a decision re-made differently the second time. The article maps three distinct forgetting modes, gives the measured numbers, explains what Muse's own design (files, memory, summaries, split work) does about each, and ends with a checklist for structuring jobs that survive their own length.

## Sources (3+ primary/measured, plus Meta's own architecture as described in launch and docs coverage)

1. Chroma context-rot study (2025), 18 frontier models including GPT-4.1, Claude Opus 4, Gemini 2.5, Qwen3. Finding: performance dropped 15-40% as context length increased, even on simple retrieval and replication tasks, without hitting token limits. Needle-in-a-haystack tests overstate long-context health because they test narrow retrieval, not reasoning over a full session.
   - https://mnemoverse.com/docs/research/ai-agent-memory-crisis
   - https://keepmyclaw.com/blog/ai-agent-context-rot
2. Liu et al. 2023, "lost in the middle": models use the start and end of long contexts better than the middle, a U-shaped position bias. Practical consequence: the constraint you stated in paragraph four of a long brief is the one most likely to vanish.
   - Via https://mnemoverse.com/docs/research/ai-agent-memory-crisis
3. "Beyond Task Completion: An Assessment Framework for Evaluating Agentic AI Systems" (arXiv:2512.12791, Dec 2025), as reported: memory retrieval reached only 13.1% recall in complex scenarios even when agents completed the tasks assigned. Memory failures per session: 0.67 simple, 2.33 moderate, 3.67 complex. Tool orchestration was the worst dimension at 7.67 average failures in complex scenarios.
   - https://www.channel.tel/blog/memory-silent-failure-mode
4. Microsoft and Salesforce research, as reported: average 39% performance drop when benchmark prompts were sharded across several chat turns instead of given all at once. Drew Breunig's four context failure modes: poisoning, distraction, confusion, clash.
   - https://www.testmuai.com/blog/why-ai-agents-forget/
5. Anthropic session data, as reported: longest agent sessions grew from under 25 minutes (99.9th percentile, Oct 2025) to over 45 minutes (Jan 2026). Longer sessions mean more context accumulation and more room for rot.
   - Via https://keepmyclaw.com/blog/ai-agent-context-rot
6. Meta Muse architecture (launch Sept 8, 2026; US, then Canada Sept 18): a dedicated cloud computer per user (Muse Secure VM) with browser, files, and storage; background and scheduled work that continues after the app closes; memory kept in files the user can read and edit; a separate Sentinel program approving anything that reaches the internet; approval pauses before sensitive actions.
   - https://zentor.ai/blog/what-is-meta-muse
   - https://squad.so/resources/meta-muse
   - https://anselmfowel.com/ai-library/tutorials/70909e46-71bd-4b18-ad5f-099cd9674678

## Muse's own mitigations (design, not guarantees)
- Work lands in files, not just chat: a plan written to a file survives a session ending; a plan kept only in conversation does not.
- Durable memory files (MEMORY.md and dated notes) persist across sessions, and the user can read and edit them.
- Compaction/summarization between runs: older turns are summarized so a new run starts fresh. This is also a forgetting mechanism: a summary keeps the gist and drops the detail, which is exactly where constraints live.
- Splitting work: subagents and scheduled runs each start with a narrow brief, so no single session carries the whole job. This is the strongest practical defense, and it is a workflow choice the user makes, not a default.
- Checkpoints the user can verify: Activity log, files in the workspace, deliverables saved to a Library. Verification after each leg beats one big check at the end.

## What is NOT proven
- No published Muse-specific measurement of context rot, drift rate, or recall on long jobs. All hard numbers above come from general agent/model research, not from Muse itself. The article must say so.
- No public data on how Muse's compaction summaries are built, what they drop, or how often a resumed run contradicts an earlier one.
- The checklist (write the brief to a file, freeze constraints at the top, split legs, verify per leg) is sound engineering practice drawn from the failure modes, not a Meta-endorsed procedure. Label it as such.

## Actionable takeaways (required)
1. Never brief a long job in chat alone. Put the brief, the constraints, and the done criteria in a file first, and point the agent at it.
2. Put non-negotiables first and repeat them at each leg, not buried in the middle of a long brief.
3. Split a multi-day job into legs with a deliverable each, and verify each leg before the next starts.
4. Ask for the agent's own mid-job summary in writing, then diff it against your brief. Drift shows up in the summary before it shows up in the deliverable.
5. Re-brief from scratch when a job changes hands between sessions rather than assuming the new session inherited the old one's judgment calls.

## Risks / skepticism
- Context rot numbers describe models in general; a reader should not treat 15-40% or 13.1% as Muse's score.
- File-based memory helps only if the agent actually writes to it and actually re-reads it; a file nobody opens is a diary, not a memory.
- Splitting work creates its own failure (handoff loss), covered in an earlier article; the fix for forgetting trades against the fix for fragmentation.
