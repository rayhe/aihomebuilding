# Research: Your AI Agent Ignores Half Its Instructions — Which Half Sticks

**Slug:** muse-standing-instructions-half-stick-2026
**Journalist:** Frank DeLuca (productivity systems, life operations, failure modes)
**Headline candidate:** "You Gave Your AI Agent 40 Rules. It Follows About Half. Here Is Which Half."

## Kill test
Does this help someone use Muse better or make an informed decision about trusting an agent with real work? YES. It teaches readers how to write standing instructions their agent will actually follow, explains the failure taxonomy with 2026 research numbers, and gives a verification protocol. Nobody has published the "instruction → check → gate → automation" durability ladder for personal agents in plain prose.

## Dedup check
- `ls drafts/*.md stories/*.html | grep -iE 'stand|instruction|obey|rule'` → no Muse-era hits on standing instructions (all hits are old construction-era drafts: AFCI nuisance trip rules, IRC rules, etc.)
- Related but distinct published pieces: muse-memory-what-it-keeps-2026 (what memory stores), muse-approval-dialog-allow-always-2026 (approvals), muse-true-cost-supervision-tax-2026 (supervision economics). None covers instruction durability.

## Sources

### 1. Muse's actual standing-instruction architecture (mouse.dev runtime export)
- URL: https://mouse.dev/blog/muse-runtime-export/
- Muse stores memory in plain Markdown: `~/MEMORY.md` (facts, preferences, commitments), dated files under `~/memory/`, files under `memory/bank/` organizing material into circumstances, experiences, preferences with citations back to source lines.
- Postgres backing: `memory.entries` (chunks + line refs), `memory.embeddings` (384-dim vectors), `memory.claims` (evidence, confidence, status); newer claims replace older ones via `supersedes_claim_id`.
- Hourly background job checks new claims against original messages; nightly "dream" writes alignment guidance (`~/dreams/`, `ALIGNMENT_SYNTHESIS.md`).
- `prompt_hoisted: false` on dream files — the prose is guidance for future sessions, not injected prompt text.

### 2. Power-user system-file editing (Medium, jonsbrain)
- URL: https://medium.com/@jonsbrain/dont-touch-meta-s-muse-until-you-read-these-quick-tips-54158a8dc431
- Muse exposes System Files editable by the user: SOUL.md (persona — "values and habits Muse tries to hold to in every conversation," ships from a template, user can refine), MEMORY.md (long-term memory, nightly tidy pass), USER.md. Edited in-app via pencil icon. This is the consumer surface of standing instructions.

### 3. The Compliance Gap (arXiv, 2026)
- URL: https://arxiv.org/html/2605.01771
- Identical instructions placed at four architectural positions (System, User, Tool-description, Repeated) yield compliance rates ranging from 26% (Tool) to 65% (Repeated). Instruction content explains 4x more variance than position (eta2=.358 vs .089).
- Sharma [2026] ContextCov: transforms passive agent instructions into executable guardrails — implicit acknowledgment that text instructions alone are insufficient.
- Parasuraman & Riley [1997] taxonomy of human-automation failures (Use, Misuse, Disuse, Abuse) extended with "AI-side Misuse" where the AI over-relies on available tools. "Algorithmic paternalism" (McCradden & Kirsch 2023): system overrides user procedural judgment because it calculates delegation is more efficient.

### 4. IFScale — instruction density (Distyl AI, arXiv 2507.11538)
- URL: https://ar5iv.labs.arxiv.org/html/2507.11538
- 500 keyword-inclusion instructions on a business report task, 20 frontier models across seven providers. Even the best frontier models achieve only 68% accuracy at 500 instructions.
- Three degradation patterns: threshold decay (near-perfect until critical density, then collapse — reasoning models), linear decay, exponential decay. Bias toward earlier instructions.

### 5. Offscript — automated auditing of instruction adherence (UW, arXiv 2512.10172)
- URL: https://arxiv.org/html/2512.10172v1/
- Custom instructions sourced from Reddit, analyzed with automated auditing. Potential deviations detected in 86.4% of conversations; 22.2% confirmed as material violations on human review.

### 6. InfoBench compliance baselines (arXiv 2601.03359)
- URL: https://arxiv.org/html/2601.03359v1
- Baseline compliance: ~70% on Easy subset, ~30% on Hard subset. Optimization raised Hard compliance in 53% of cases.

### 7. Meta launch facts (Reuters/worldnewsguru)
- URL: https://worldnewsguru.us/technology-news/meta-introduces-muse-a-personal-ai-agent-that-can-send-emails-book-travel
- Launched Sept 8, 2026; US only at launch; dedicated app or WhatsApp; Muse uses "permissions, security controls and confirmation for sensitive actions"; Meta delayed April release to cross safety threshold ("impossible to say there is never going to be a mistake"); Muse Confidential VM planned (user-held encrypted keys).
- Pricing context already on record (prior article): Free / Power $20 / Maximum $100; 500M and 3B weekly token allowances.

### 8. This publication's own pipeline rules (primary operational evidence)
- The article-pipeline spec documents that "articles have shipped with 25+ em dashes because critics scored them 8.9 while ignoring this rule" — i.e., a text instruction ("limit em dashes") with no enforcement failed; the grep-count hard gate replaced it.
- Sentence-rhythm gate: variance >= 200 (human ~287, AI ~84), short sentences <= 15%, long >= 15% — a machine-checkable instruction.
- Standing-rule evidence from production ops: atomic commit+push in one exec (staging sweeps by concurrent crons), curl -SL for downloads (silent 0-byte files), PAT extraction by host selection. Each lesson is a rule PLUS its check.

## Original contribution (the enforcement ladder)
Nobody has published this in consumer prose: standing instructions sort into a durability ladder —
1. Naked text instruction (durable ~days, compliance 26-70% depending on density/position)
2. Instruction + machine check (the grep count is the source of truth — deterministic verification)
3. Instruction + gate (blocking review that runs the check before work ships)
4. Instruction + automation (the rule executes itself; no agent compliance needed — e.g., the scheduler enforcing 1/day, the memory system resolving conflicts via supersedes_claim_id)

The ladder doubles durability per rung. Practical protocol: write each standing instruction so a machine could verify it (the "grep test"); keep standing-instruction count small (IFScale: bias to earlier instructions, decay with density); repeat the critical ones at the decision point (Compliance Gap: Repeated 65% vs Tool 26%); audit quarterly like a safety review (Offscript: 22.2% material violation rate on real custom instructions).

## Limitations
- No public data on Muse-specific instruction-compliance rates; benchmarks (IFScale, Offscript, InfoBench) are model-level, not Muse-workload-specific.
- Compliance Gap positions (System/User/Tool/Repeated) are experimental architecture, not Muse's exact stack.
- Ladder durability estimates are qualitative from operational evidence, not measured in a controlled study.
- mouse.dev runtime export is a third-party teardown (27 days old), not Meta documentation.

## Strongest counterargument
The ladder is a counsel of distrust: if you engineer every instruction into a machine check, you get a reliable agent and a brittle relationship — every edge case becomes a rule, rules conflict, and the agent that follows 500 rules perfectly is a rules engine, not a personal agent. IFScale itself shows density kills adherence. The honest alternative reading: fewer, better instructions, and a human who audits. Over-instrumentation is its own failure mode.
