# Research: muse-subpoena-agent-memory-2026
Journalist: Catherine Chen (privacy, security, data practices, policy)
Working headline: "20 Million Deleted Chats Weren't Deleted: What Your AI Agent Remembers About You"
Slug: muse-subpoena-agent-memory-2026

## Kill test
Does this help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an AI agent with real work? YES. A personal AI agent that runs your calendar, inbox, and errands accumulates a far richer record than a chatbot — and the reader is deciding how much of their life to hand it. The legal discoverability of that record is a first-order trust question, not a footnote.

## Thesis
AI chat logs are already established as discoverable evidence. A personal agent's footprint goes well beyond chat: a curated memory graph, an approvals/activity ledger, standing permissions, scheduled-task grants, connected-account metadata, and workspace artifacts. Most users have never inventoried any of it. Muse's own docs are unusually explicit about what is deletable, what is not, and where the user actually stands.

## Primary sources

### 1. Meta's Muse documentation (authoritative for Muse-specific claims)
- `~/docs/data-handling.md`: Standard VM — interactions "may be logged and reviewed by Meta," not end-to-end encrypted, contribute to AI training (opt-out in Settings > Data Controls). Confidential VM — Meta cannot access content; client-owned keys; TEE; opt-out row absent. "Muse doesn't share your conversations or the data in your virtual machine with Meta ad systems."
- `~/docs/privacy-and-credentials.md` ("Data retention and the user's controls"): Export via Settings > Data Controls > "Download your agent data." Reset permanently deletes chat history, files, active tasks — "the only full wipe." "The main chat can never be deleted, by the agent or the app." "Memory files are deletable best-effort." "There is no incognito or off-the-record mode. Clearing a conversation is not private because memory can still be written." Permissions settings page lists every standing permission (websites, connected accounts, scheduled-task grants), each removable per site; "The agent cannot revoke a standing permission."
- `~/docs/privacy-and-credentials.md` ("Who can see the user's data"): "Everything the agent does is recorded in the Activity view and approvals History; none of it can be secretly erased."
- `~/docs/memory.md`: memory persists facts/preferences; user can ask to remember/update/forget; import memory from other assistants (ChatGPT, Claude, Gemini, Meta AI exports).

### 2. NYT v. OpenAI — the preservation/production orders (case law thread)
- Complaint filed Dec 27, 2023, SDNY (copyright; Exhibit J: 100 alleged verbatim reproductions; Times later withdrew Exhibit J from jury presentation).
- May 13, 2025: Magistrate Judge Ona Wang ordered OpenAI to "preserve and segregate all output log data that would otherwise be deleted on a going forward basis," regardless of whether deletion was requested by users or mandated by privacy regulations. Affirmed by Judge Stein June 26, 2025.
- Nov 7, 2025: production order — OpenAI to produce 20M+ de-identified ChatGPT chat logs (Dec 2022–Nov 2024 window) to the Times and co-plaintiffs.
- Oct 9, 2025: order narrowed — OpenAI may resume normal deletion for new logs after a Sep 26, 2025 cut-off; must retain already-collected logs and logs of Times-flagged accounts; EEA/Swiss/UK-origin data excluded from further preservation.
- Sources: patentailab.com timeline (2026), thurrott.com, terms.law summary, nelsonmullins.com analysis. The preservation fight, not the copyright merits, is the article's thread.

### 3. US v. Heppner — no AI privilege (reported Oct 23, 2026)
- Court ruled a defendant's Claude conversations were not shielded by attorney-client privilege or work-product protection: no attorney-client relationship "exists or could exist, between an AI user and a platform such as Claude."
- Source: TechRadar, "You thought your ChatGPT conversations were private. The courts disagree." (2026-10-23), citing the opinion.

### 4. The scale of the practice
- Washington Post investigation (~Aug 2026): at least a dozen court cases have cited AI chatbot logs as evidence (via TechRadar).
- DuckDuckGo survey: 75% of respondents unaware their AI chatbot conversations could be subpoenaed by law enforcement (via TechRadar, citing spreadprivacy.com).
- Provider self-reporting: Anthropic's systems flagged a Florida woman's Claude conversations for human review and contacted police; she was charged (Futurism, via TechRadar).

### 5. Hands-on verification (this deployment, counts only, no content)
- One heavily used Muse deployment, Oct 2026: 18 daily memory logs, 263 person profile pages, 21 group pages, plus workspace files, artifacts, and a transcript database. All of it is the kind of curated, structured record a subpoena would love: names, relationships, schedules, preferences, decisions.

## Novel contribution (original analysis)
A "discoverability map" of a personal agent's data footprint, with a deletability rating per category, built from Muse's own documented controls:
1. Chat transcripts (main chat: never deletable; side chats: deletable; Reset: full wipe).
2. Memory graph (deletable best-effort; "clearing a conversation is not private because memory can still be written").
3. Activity/approvals ledger ("none of it can be secretly erased").
4. Standing permissions and scheduled-task grants (user-revocable in Settings; agent cannot revoke).
5. Connected accounts and device data (disconnect with tokens removed; health data erasable per request).
6. Workspace files and artifacts (user-deletable; exportable).
Plus the VM-tier distinction: standard (Meta can access; training use with opt-out) vs confidential (Meta cannot access; client-held keys) — the single biggest architectural lever a user has.

## Strongest counterargument
Most users will never be subpoenaed, and discovery is not new: email, texts, and search history have been discoverable for decades. Agents are not uniquely exposed; they are the newest instance of an old rule (records held by companies are producible). Providers do fight overbroad orders (OpenAI objected on privacy and burden grounds; the Oct 2025 narrowing shows courts can be moved). Deletion and erasure rights still matter for the far more common threat model: data brokers, breaches, and internal misuse. The article must not scare readers into thinking the FBI reads their grocery lists.

## Limitations
- Verified Muse's documented controls from its own docs; did not (and cannot) test Meta's behavior under an actual legal order. Retention details beyond what's documented are not public.
- Generalizes across providers where their policies differ; the NYT case is about OpenAI, not Meta. Say so.
- Counts from one deployment are illustrative, not representative of a typical user.
- Not legal advice; a lawyer-shaped journalist, not a lawyer.

## Actionable takeaways (required)
1. Ask your agent what it knows about you — it will answer from its own memory; audit it.
2. Review standing permissions (Settings > Connectors); revoke grants you no longer use.
3. Standard vs confidential VM: know which you have and what changes.
4. Training opt-out: Settings > Data Controls on a standard VM.
5. Reset is the only full wipe; deleting one chat is not privacy.
6. The bright line: if you would not want it read aloud in a deposition, do not type it into an agent whose infrastructure you do not control.

## Banned-phrase / gate notes
No em dashes beyond 3 (count mechanically). "The"-starters under 15%. No "Here's the thing," "The kicker," "paradigm shift," "game-changer," "deep dive," "unpack." Sentence rhythm: variance >=200, short <=15%, long >=15%. 800-1100 words. Date: October 23, 2026.
