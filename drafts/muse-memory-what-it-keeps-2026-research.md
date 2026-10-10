# Research: muse-memory-what-it-keeps-2026

**Journalist:** Catherine "Code" Chen (privacy, security, data practices)
**Date:** 2026-10-10

## Thesis
Muse remembers everything it can get away with remembering: a curated long-term profile, dated daily logs, and a page per person in your life, updated hourly, including people who never installed the app. Deleting a chat does not delete what the agent learned. Meta is unusually honest about this, and the files are unusually inspectable, which makes the remaining gaps (training data default, friends who never consented, Meta's retained technical access until the Confidential VM ships) sharper, not softer.

## Kill test
PASS. Directly answers "should I trust an AI agent with real work": it documents exactly what gets stored, where, who can see it, and how to audit/erase it. A reader who does the 10-minute audit in this article will know more about their agent's memory than 99% of users.

## Primary sources (3+)
1. **Gizmodo, Oct 2026** — "Meta's Muse Is Collecting Information on Everyone in Your Life": independent researcher Karan Joshi extracted Muse's internal system instructions and shared them with WIRED; The Future Society published a corroborating copy from an exported Muse VM. Relationship pages include name, connection to user, recurring topics, birthdays/anniversaries, relationship history, closeness assessment, "relationship needs." Meta spokesperson Daniel Roberts: context gathered "based on public information and from what you've chosen to share," stored in each user's dedicated secure VM inaccessible to other users' agents. https://gizmodo.com/metas-muse-is-collecting-information-on-everyone-in-your-life-2000821697
2. **PCWorld, Oct 5 2026 (Safe Mode column)** — "I wouldn't trust Meta's Muse AI agent with my personal data yet": by default Meta trains its AI on Muse data; deleting is not a complete wipe ("Muse may still remember information it learned from what you deleted"); training data is anonymized and scrubbed of PII per Meta's privacy policy; users can ask Muse what it recalls or dig through Muse's files. https://www.pcworld.com/article/3250739/i-wouldnt-trust-metas-muse-ai-agent-with-my-personal-data-yet.html
3. **MLQ News, Sep 10 2026** — launch architecture summary citing Meta technical docs: dedicated cloud VM, Sentinel permission authority (approvals bypass the conversational model), surrogate credentials (model never sees real passwords/tokens), files + memory inspectable/editable/downloadable, VM continuously backed up, conversations and VM data excluded from ad systems, sanitized interaction data used for training by default with opt-out setting, operational-policy controls do not prevent Meta access for support/security/operations, Confidential VM with user-held keys in testing, planned later 2026, $300K bug bounty including prompt injection. https://mlq.ai/news/metas-muse-agent-offers-access-to-email-calendars-and-payments-with-trust-still-required/
4. **webpronews / TechRadar / Surfshark, Oct 2 2026** — privacy-label analysis: "Meta is unbeatable in data collection"; data flows into per-user Secure VMs; Meta retains technical access until Confidential VM; default training participation with settings opt-out; Meta Superintelligence Labs VP Tarek Sheasha defended the default ("every Muse user gets a better personal agent as we all collectively use the product"); EPIC senior counsel Calli Schroeder called the default a red flag; Muse conversations/VM data stay out of ad systems but agent browsing activity can still influence ads via merchant tracking. https://www.webpronews.com/metas-muse-sets-record-for-data-appetite-as-privacy-fears-mount/
5. **builtin.com** — capability summary: long-term memory across sessions, background work, Secure VM, Sentinel. https://builtin.com/articles/meta-muse
6. **First-hand operator knowledge (this worker's own stack):** a Muse-family agent's memory consists of a curated long-term file (MEMORY.md), dated daily logs (memory/YYYY-MM-DD.md), per-person relationship pages (memory/people/*.md with an index), semantic search over all of it (memory_search / memory_get tools), and an explicit "forget" mechanism that removes a fact from active memory and stops automations from reintroducing it. Memory is how the agent persists across sessions on its own VM.

## Verified facts (with provenance)
- Launch: Sep 8 2026, US-only, 18+ (MLQ, TechCrunch via MLQ).
- Pricing: free tier; Power $20/mo; Maximum $100/mo (TechCrunch; Meta announcement confirms free + plans without listing prices) (MLQ).
- Memory mechanics: relationship pages updated on an hourly basis for people in the user's life, including non-users (Gizmodo/WIRED/Future Society, from extracted system instructions; Meta did not dispute the mechanism, only framed it).
- Training default: sanitized conversations, tool calls, subagent handoffs used for future model checkpoints; opt-out via setting; default is participation (MLQ citing Meta docs; PCWorld; Sheasha defense in WIRED via webpronews).
- Deletion gap: "Muse may still remember information it learned from what you deleted" (PCWorld quoting Meta).
- Meta access: operational controls restrict personnel but Meta's own technical docs say controls do not prevent access when necessary to support, secure, or operate the service; Confidential VM (user-held keys) in testing, planned later 2026 (MLQ citing Meta docs).
- Ad separation: Muse conversations and VM data excluded from ad systems; external-site activity by the agent can still shape ads through merchant tracking (MLQ; webpronews).
- Security model: Sentinel approves network egress/connector actions outside the conversational model; surrogate credentials; user sees agent's browser in real time; approval cards (MLQ; builtin).
- Incidents: Amazon blocked Muse shopping (Sep); zero-day in Mac client patched (could let malware hijack the agent) (Gizmodo via AIWeekly).
- Bug bounty up to $300,000 including prompt injection; Meta acknowledges prompt injection remains open and Muse "will sometimes make mistakes" (MLQ).

## Original contribution (novel analysis)
1. **First-hand anatomy of an agent's filing system** (operator's view, redacted): what the memory files actually look like and what the agent can retrieve — curated profile, daily logs, per-person pages, semantic search. No press outlet has published this from the inside; the WIRED/Gizmodo pieces inferred it from leaked instructions.
2. **The 10-minute memory audit**: a concrete, verifiable procedure any Muse user can run tonight — ask the agent what it remembers, read the files yourself, exercise the forget function, find the training opt-out, and ask your friends whether they use it. This turns an abstract privacy story into an action.
3. **The consent asymmetry framed as a policy gap**: the person with the most to lose from a relationship page is the one who never agreed to it, and they have no audit rights at all. PCWorld's advice ("unfriend and delete conversations") is quoted as the current state of the art in self-defense, which is the story in one line.

## Strongest counterargument (full strength)
Meta's position deserves its weight: context is the product. An agent that cannot remember that the plumber who sent you an invoice is the same plumber you hired in March is a chatbot with extra steps. Muse's file-based memory is arguably the most transparent consumer-agent memory system ever shipped: you can read the files, edit them, download them, and tell the agent to forget. Training participation is disclosed and opt-out exists. The Confidential VM, with user-held encryption keys, is in testing for later 2026 and would remove even Meta's technical access. Nobody is hiding the mechanism; the argument is over whether disclosure plus controls is enough when the default is participation and your friends' data rides along on your consent.

## Limitations (what this analysis does not prove)
- The hourly-update cadence and relationship-page schema come from extracted system instructions published by third parties, not from Meta's documentation; Meta confirmed the mechanism in general terms but not the specifics.
- The training-data sanitization pipeline is Meta's claim; no independent audit of what "sanitized" means in practice was found.
- VM isolation and personnel-access controls are described in Meta's technical materials; they have not been independently validated by a third-party security review found in this research (a $300K bug bounty exists, but no public validation of the full production system at launch, per MLQ).
- This article describes Muse's architecture as of October 2026; the Confidential VM is not yet shipped, so the strongest privacy promise is prospective.
- Pricing and download figures are analyst/press reports, not Meta disclosures, where noted.

## Actionable takeaways (for the article)
1. Ask Muse "what do you remember about me" and read the answer critically; then ask about one specific person.
2. Do the file tour: ask to see the memory files themselves (inspectable, editable, downloadable).
3. Use the forget function for anything that should not persist; verify it stuck.
4. Find the training-data setting and decide consciously whether to stay opted in (default is in).
5. Ask the people closest to you whether they use Muse; know that their agent may hold a page about you.
6. Do not put anything in reach of the agent (connected email, documents) that you would not put in a file labeled with your name on someone else's computer.
