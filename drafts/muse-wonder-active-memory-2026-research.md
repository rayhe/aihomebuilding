# Research: Muse Wonder — Meta's Memory-First Bet (and What It Really Costs)

**Date:** 2026-10-20 | **Journalist:** Elena Vasquez (design & UX of AI agents) | **Slug:** muse-wonder-active-memory-2026

## The news

- **Oct 12, 2026:** Meta Superintelligence Labs (MSL, led by Alexandr Wang) released **Muse Wonder** and **Muse Wonder Full** — the company's first models it calls "frontier," built for personal and professional agentic work (leases, insurance claims, financial/health info, software).
- Headline features, codename "watermelon" (Zuckerberg posted a watermelon photo from his own Muse assistant hours before launch):
  - **Active Memory** — carries context about the user across conversations, retrieves relevant details when a task needs them. Meta research scientist Kavya Kopparapu: "a tremendous amount of effort into making sure your model can remember what's important to you over days, weeks, months, and beyond."
  - **Active Focus** — sustains effort on hard goals: tries alternate approaches, works through blockers, asks for clarification, and checks in before important actions.
- Multimodal input (text, image, video, audio), text output, ~1M token context window. Trained at the gigawatt-scale Prometheus data center (Ohio).
- **Pricing:** Meta Model API — $4 per 1M input tokens, $20 per 1M output tokens (TechCrunch via Pondero: roughly in line with GPT-6 Sol / Claude Opus 5.5).
- **Access:** Wonder via Meta Model API + Muse Code. Wonder Full is NOT on the API — only for Muse Code subscribers (plans reported ~$50 and $200/mo).
- **Consumer rollout:** not live at launch — Wonder will power experiences in the consumer Muse agent "soon, rolling out first to subscribers." Consumer Muse tiers: free (usage-limited), Power $20/mo, Maximum $100/mo (per Crowdfund Insider).
- Meta also calls Wonder its "most aligned model to date" — trained to protect private info and resist malicious instructions (relevant: the agent sees messages, calendars, documents).

## Benchmarks (all Meta's own — treat as company claims)

- **Harvey LAB-AA** (legal agent benchmark, pass = meets every criterion + passes hallucination checks): Wonder Full 13.1%, Wonder 10.0%, GPT-6 Astra 8.6%. SiliconANGLE notes Meta's model-card caveat: competitor runs were "best-effort" and "prompts and tools may not have been optimally tuned for them."
- **DeepSWE 1.1** (long-horizon coding): Wonder Full 79.0, Wonder 78.8 — margin of noise.
- **AutomationBench-AA** (end-to-end business workflows): Wonder Full 45.4 vs Wonder 39.1.
- **Artificial Analysis Intelligence Index:** Wonder 52, Wonder Full 56, behind Claude Opus 5.5 at 58.
- **MemoryBench** (Meta's own continual-learning/memory benchmark): 64K–100K-token multi-turn conversations with distractor turns and fact updates. Meta's own test of its own claim — promising, not proven.
- **FocusBench / SWE-Marathon** (Meta's measures of sustained execution): Wonder models ahead of Fable, Opus, Astra per Meta's model card.

## The companion release: Muse Spark Open (Oct 15, 2026)

- 816B total parameters (42B active per token, MoE: 256 experts, 8 per token), 1M-token context, text/image/audio/video in, text out.
- Downloadable weights (BF16 ~1.65TB, NVFP4 ~537GB) via Hugging Face, SageMaker, GCP Model Garden, MS Foundry. Day-one engines: vLLM, SGLang, llama.cpp, MLX.
- Meta's demo runs it on **two Mac Studios with M5 Ultra (512GB unified memory each)** — a ~$20,000+ desk; the 512GB config wasn't even released at announcement.
- License: **Muse Model License** — free download, fine-tune, redistribute, but: (1) "Built with Muse Spark Open" attribution required; (2) Model-as-a-Service providers above **$20M revenue in 12 months** must sign a separate agreement with Meta; (3) acceptable-use restrictions. NOT an OSI open-source license.
- Hosted APIs day one: Baseten, Fireworks, Groq, Modal, Nebius, OpenRouter ($1.25/M input, $4.25/M output on OpenRouter), Together AI.

## The skepticism (the part that makes this an article, not a press release)

- Every headline number is Meta's own testing with Meta's own benchmarks (MemoryBench, FocusBench are internal). The model card admits competitor comparisons are best-effort. No independent verification yet.
- The consumer agent that Active Memory is FOR doesn't run it yet — subscribers first, timing unspecified. This is a preview of a memory, not a memory you can use.
- Wonder Full — the one that wins the benchmarks — is the one you can't buy via API at any price.
- **Context rot tension:** Chroma's "Context Rot" technical report (Hong, Troynikov, Huber, July 2025): 18 models, "performance consistently degrades with increasing input length," even on trivial tasks. LongMemEval: Claude Opus 4 fell from 0.92 to 0.38 answering the same questions with 300 tokens of focused context vs. 113K tokens of full history. Anthropic's own Sept 2025 context-engineering guidance frames it as a finite "attention budget" — a performance gradient, not a cliff, present in all models. Active Memory promises to recall across weeks and months; the evidence says recall degrades as the pile grows. Retrieval quality is the whole game, and Meta's MemoryBench (64K–100K) is far below the 1M window it advertises.

## Original contribution: the memory-budget calculation

Method: at Wonder API pricing ($4/M input tokens), compute what "carrying your history in context" would cost, and compare against the flat consumer subscription tiers.

- One full 1M-token context read = **$4.00** input.
- A working "memory" of 200K tokens carried into every request = $0.80/request input alone.
- At 50 agent requests/day: $0.80 × 50 = $40/day = **~$1,200/month**.
- Consumer tiers: Power $20/mo, Maximum $100/mo. Even Maximum would cover ~83 such requests at API prices (or ~25 full-1M-token reads) before losing money — and that's input only, ignoring output at $20/M.
- Conclusion: Meta cannot be stuffing your history into context wholesale; Active Memory MUST be selective retrieval ("retrieves the relevant details when needed" — Meta's own phrasing is consistent with this). The subscription math proves the architecture claim. The honest corollary: your agent's memory is only as good as its retrieval, and retrieval over months of messy life is exactly what MemoryBench-style tests measure — and exactly what context rot attacks.

Assumptions stated: 200K-token memory size is illustrative; 50 requests/day is a heavy power-user estimate; API prices ≠ Meta's internal inference cost; cache discounts ignored (they'd help but don't change the order of magnitude).

## Kill test

Does this help someone understand what Muse can do, use it better, or make an informed trust decision? YES: it tells a prospective Power/Maximum subscriber what Active Memory actually is (retrieval, not omniscience), what the benchmarks do and don't prove, and why the price math means memory quality — not model size — decides whether the agent remembers the thing that mattered.

## Sources (3+ primary)

1. Meta announcement / AI at Meta (Oct 12, 2026) — via quoted text in Digit.in and Pondero: "Muse Wonder is available today via the Meta Model API and Muse Code... will soon power experiences in our personal agent product, Muse, rolling out first to subscribers."
2. Muse Wonder model card (benchmarks, competitor caveat "best-effort... prompts and tools may not have been optimally tuned for them") — reported by SiliconANGLE: https://siliconangle.com/2026/10/12/meta-releases-muse-wonder-ai-models-built-to-run-personal-and-professional-agents/
3. Meta Muse Spark Open release (Oct 15, 2026): 816B/42B, 1M context, Muse Model License, $20M MaaS threshold — https://ainotis.com/n/meta-releases-muse-spark-open-an-816b-parameter-open-weight-model-with and https://www.marktechpost.com/2026/10/15/meta-muse-spark-open-816b-open-weight-model/
4. Chroma "Context Rot" technical report (July 2025) — https://www.matthewswong.com/en/blog/ai-agent-harness-engineering-research/ (LongMemEval 0.92→0.38 figure); Anthropic engineering guidance Sept 29, 2025 ("Effective context engineering for AI agents") via medium.com/@jfamily0707
5. Pricing tiers: $4/$20 per MTok via API (Pondero: https://pondero.ai/news/2026-10-13-meta-muse-wonder/); Power $20 / Maximum $100 consumer tiers, $50/$200 Muse Code tiers (Crowdfund Insider: https://www.crowdfindinsider.com — use full URL: https://www.crowdfundinsider.com/2026/10/318029-meta-introduces-muse-wonder-ai-model-to-enable-advanced-agent-tasks-and-drive-subscription-revenue/)
