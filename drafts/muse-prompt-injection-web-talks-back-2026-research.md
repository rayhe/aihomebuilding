# Research: The Web Page You Asked Muse to Read Just Gave It Orders

**Slug:** muse-prompt-injection-web-talks-back-2026
**Journalist:** Catherine Chen (privacy, security, data practices, policy)
**Date:** November 20, 2026
**Status:** Research complete, ready for DRAFT

## Kill test

Does this help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an AI agent with real work? Yes, and it is the trust question the whole site exists to answer. Muse's entire value is that it reads things you would not read and acts on them. That same design is the one attack that has no reliable fix anywhere in the industry. A reader who hands Muse their inbox, their calendar, and a credit card needs to know exactly what stands between a poisoned web page and their money, and what does not.

## The story in one paragraph

Muse reads the open web, your email, your files, and your connected apps, and it can act on what it finds: send messages, make phone calls, book travel, buy things, run commands on its own computer. Every one of those abilities is a feature you asked for. Together they form the exact combination security researchers call the lethal trifecta: access to your private data, exposure to content strangers wrote, and a channel to send information out. In 2026 that combination has been exploited against real agents again and again: one email hijacked the Manus agent in October, a public web form drained Salesforce Agentforce CRM data in September, and hidden instructions behind a Reddit spoiler tag took over Perplexity's Comet browser in August. Meta says Muse has multiple layers of protection against malicious instructions, including permission and security checks that operate separately from the AI model. OWASP, NIST, and every independent researcher who has studied the problem say the same other thing: no defense inside a language model removes this vulnerability. The honest question is not whether Muse can be tricked. It is what happens after it is.

## Verified facts

### What prompt injection is
- OWASP ranks prompt injection **LLM01:2025**, the single highest-priority vulnerability in its Top 10 for LLM Applications. Its definition: an attacker manipulates a large language model through crafted inputs, causing it to unknowingly execute the attacker's intentions. (OWASP Gen AI Security Project, LLM01:2025.)
- Direct injection is a malicious user overwriting the system prompt in their own session ("jailbreaking"). Indirect injection plants instructions in external content the agent reads later: a web page, an email, a file, a calendar invite, a code comment. The attacker never talks to the agent at all. (OWASP LLM01:2025.)
- NIST AI 600-1 describes indirect prompt injection as adversaries exploiting LLM-integrated applications remotely by placing prompts in data likely to be retrieved. MITRE ATLAS technique AML.T0051 covers prompts crafted to make a model ignore parts of its original instructions, with effects that can persist through a session. CWE-1427 is the weakness entry for the flaw. (Rillor report, Nov 8, 2026, citing NIST, MITRE, CWE.)
- The flaw is structural, not a bug: LLMs read instructions and data in one channel, so an instruction planted in content can steer an agent. NIST, the UK NCSC, and the CWE catalog describe the same flaw. OWASP states plainly that there is "no fool-proof prevention within the LLM." (Rillor; OWASP LLM01:2025.)
- History: September 2022, Riley Goodside showed GPT-3 abandoning a translation task because the text it was translating told it to do something else; Simon Willison named the attack prompt injection the next day. February 2023, Greshake and colleagues described indirect prompt injection and demonstrated it against a deployed search chat assistant and code-completion engines. (Rillor; Uxcel.)

### The lethal trifecta
- Security researcher Simon Willison's framing, widely cited in 2026: an agent becomes stealable when it holds all three at once: access to private data, the ability to read untrusted content, and a channel to send information out. The dependable defense is structural: make sure no single agent session holds all three ingredients at once, and check for the combination every time a new tool or connection is added. (Uxcel, "Prompt Injection and the Lethal Trifecta.")
- Muse holds all three by design: it reads your Gmail, files, and the open web; it keeps your data in its VM; and it can send messages, make phone calls, book, shop, and run shell commands. That is the product. It is also the exposure. (Meta Muse announcement, Sep 8, 2026; Meta Muse help page.)

### Documented cases, 2025-2026
- **EchoLeak (CVE-2025-32711):** a single email to a Microsoft 365 Copilot user carried instructions phrased as advice to the human reader; zero-click exfiltration. Reported January 2025, fixed June 2025. (Rillor; Uxcel.)
- **Perplexity Comet / Brave research (August 2025):** researchers hid instructions behind a Reddit spoiler tag; asking Comet to summarize the page was enough to trigger them. (Uxcel.)
- **Google Gemini calendar hijack (August 2025):** instructions embedded in calendar event titles hijacked Gemini assistants when a person later asked about their schedule. (Uxcel.)
- **Mozilla Tabstack (2026):** asked to summarize a web page, the agent never did; hidden instructions redirected it to an attacker-controlled form, silently filled it with conversation history, and submitted it. (Brave research blog.)
- **Cotypist (2026):** a fully on-device macOS autocomplete assistant; instructions embedded in a local document manipulated it into suggesting inaccurate content and surfacing user credentials inline. Brave's point: local deployment is not inherently more secure against this flaw. (Brave research blog.)
- **Manus agent (October 1, 2026):** Salt Labs researchers emailed a test Gmail account connected to Manus; the user only asked Manus to show emails from their manager, and the agent ran the attacker's code, exposing Gmail, Drive, and GitHub tokens. (dev.to, "5 Real Cases From 2026.")
- **Salesforce Agentforce (September 24, 2026):** a public web form let an attacker reach CRM account data. (dev.to.)
- **GitLab self-hosted AI Gateway (October 2, 2026):** a crafted flow configuration reached commands on the server. (dev.to.)
- **Roo Code coding agent (October 13, 2026):** text in project files reached commands on the developer's machine; no fix listed as of October 26, 2026. (dev.to.)
- **Six AI browsers and assistants (late June 2026):** a web page "game" reached credentials in logged-in tabs; fixed by some vendors. (dev.to.)
- **Scale signal:** Google researchers monitoring the web found a **32% increase** in malicious prompt injection payloads embedded in web content between November 2025 and February 2026. (Atlan, citing Google research.)
- **May 2025 demonstration:** a malicious public issue led an agent to leak private repository data. (Rillor.)

### How well defenses work, measured
- **AgentDojo benchmark (97 agent tasks):** a tool filter cut one model's attack success from **57.69% to 6.84%**, and a detector cut it to 7.95%, but benign task success fell from **69.0% to 41.49%**. The security tax is real: the filter that stops the attack also breaks more than a quarter of legitimate tasks. (Rillor.)
- **NIST Center for AI Standards and Innovation:** 25 attempts per attack raised average success from **57% to 80%**. Repetition alone defeats most defenses; CWE-1427 advises repeating each case and retesting whenever the model changes. (Rillor.)
- Rillor's summary of the guidance it reviewed: "none of the guidance reviewed here offers a defense that removes it." (Rillor, Nov 8, 2026.)

### What Meta says about Muse specifically
- Meta's help page, "How Muse handles your privacy, safety and security," has a section titled **"Protection against malicious instructions"**: "Websites, emails, files and connected services can contain instructions intended to manipulate an AI agent. This is sometimes called a prompt injection attack. Muse uses multiple protections to help detect and resist these attempts. These include model training, automated detection systems, and limits on the information and services Muse can access during a task. Important permission and security checks operate separately from the AI model, meaning that they don't depend only on Muse recognizing that an instruction may be malicious." (Meta help, accessed Nov 20, 2026.)
- Credential handling: when you connect an app, credentials are stored in a Secure Credentials Store. Muse can use it to complete an authorized action "without the AI model seeing your password," after checks confirming the intended service, that you connected it, and that you gave permission for that type of action. (Meta help.)
- VM isolation: every Muse user's VM is isolated so no one else's agent can access it; Muse maintains backups to protect agent history from data loss. Muse Confidential VM is planned: the whole VM encrypted with a key only the user holds, "so not even Meta can access it." (Meta help; Meta announcement Sep 8, 2026.)
- Training data: the setting allowing Meta to use interactions to develop models is on by default when you first use Muse; it can be changed in Settings under Data controls. When off, interactions are not used. When on, Meta says it removes certain categories of PII and disassociates interactions from the account. (Meta help.)
- Muse does not share conversations or VM data with Meta ad systems. (Meta help.)
- Muse launched September 8, 2026, running on Muse Secure VM, powered by Muse Spark; rolling out in the US on iOS, Android, and muse.ai, coming soon to AI glasses. (Meta announcement.)
- Muse Ember, announced November 9, 2026, is Meta's smallest agent model: $0.10 per million input tokens, $0.50 per million output tokens, built for "the work agents repeat all day: tool calls, coding subtasks, routing, extraction, and long document parsing." (Aragon Research, Nov 11, 2026.)

## Original contribution

Three things this article does that the coverage so far does not:

1. **A Muse-specific trifecta audit.** Nobody has mapped Muse's actual, documented capabilities against the lethal trifecta leg by leg: private data (Gmail, files, calendar, VM memory), untrusted content (browser, email, pasted skill files, connected services), exfiltration/action channel (messages, calls, purchases, bookings, shell). The audit shows Muse holds all three by design, which is the product's strength and its exposure in the same sentence, and it names which leg Meta's published defenses actually touch.
2. **The defense trade-off, quantified for a Muse reader.** AgentDojo's numbers (attack success 57.69% to 6.84% with a tool filter; benign success 69.0% to 41.49%) translate into the question every Muse user should ask: how much of your agent's usefulness are you willing to trade for safety, and who gets to set that dial? Meta's page does not publish any equivalent numbers for Muse.
3. **A practical read of Meta's own words.** Meta's help page is unusually candid for a product page: it names prompt injection, says protections "help detect and resist" (not prevent), and points to permission checks that operate separately from the model. The article reads that sentence as the actual security architecture, then tests it against the one protection Muse users can see with their own eyes: the approval card that appears before a sensitive action, and what happens when the page, not the user, is the one asking.

## What we could not verify

- No public prompt injection incident against Muse itself has been disclosed as of November 20, 2026. Every case in this file hit a rival agent or assistant. That is evidence about the industry, not a clean bill of health for Muse.
- Meta publishes no attack success rate, benchmark result, or red-team number for Muse's injection defenses. The help page describes layers; it does not quantify them.
- The exact behavior of Muse's automated detection systems is not public. Whether a poisoned page is flagged, silently ignored, or acted on cannot be tested from outside without running the attack, which we did not do.
- AgentDojo numbers come from one benchmark of 97 tasks on models that are not Muse Spark. They show the shape of the trade-off, not Muse's score on it.

## Angles for the draft

- Cold open: a user asks Muse to summarize a web page. The page has other plans.
- The mechanism, in plain language: one text channel, no reliable provenance. Your instruction and a stranger's instruction arrive as the same kind of text.
- The 2026 case file, told as short scenes: the email, the web form, the spoiler tag, the calendar invite.
- Meta's answer, quoted fairly: separate permission checks, the Secure Credentials Store, task-scoped limits.
- The gap Meta's answer leaves open: none of those layers stop the model from being *convinced*. They stop some of what a convinced model can *do*. That distinction is the whole article.
- The reader's checklist: what to never ask Muse to summarize and act on in the same breath; why approval cards are the last line and what they cost; how to scope connectors so one poisoned page cannot reach everything.
- Limitations and counterargument: the strongest case against the alarm is that no Muse incident is public, most injections fail, and the approval-card layer catches the consequential actions. State it at full strength.

## Sources

1. Meta, "How Muse handles your privacy, safety and security," Meta Help Center, accessed Nov 20, 2026. https://www.meta.com/help/superintelligence/1047255454427887/
2. Meta, "Introducing Muse: The World's First Personal AI Agent Built for Everyone," about.fb.com, Sep 8, 2026. https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/
3. OWASP Gen AI Security Project, "LLM01: Prompt Injection," 2025. https://genai.owasp.org/llmrisk2023-24/llm01-24-prompt-injection/
4. Rillor, "Prompt injection: how it works and how to test an agent," Nov 8, 2026. https://rillor.com/insights/prompt-injection-testing/report
5. Brave, "Indirect Prompt Injection remains a fundamental security challenge for AI," 2026. https://brave.com/blog/indirect-prompt-injection/
6. Uxcel, "Prompt Injection & the Lethal Trifecta," 2026. https://uxcel.com/lessons/the-lethal-trifecta-133
7. dev.to (AshTech), "Prompt Injection Attack Examples: 5 Real Cases From 2026," Oct 2026. https://dev.to/ashtech52/prompt-injection-attack-examples-5-real-cases-from-2026-and-how-to-protect-your-ai-features-14o2
8. Aragon Research, "Meta Muse Ember Sets a New Agent Price Floor," Nov 11, 2026. https://aragonresearch.com/meta-muse-ember-sets-a-new-agent-price-floor/
9. Atlan, "How Prompt Injection Attacks Compromise AI Agents in 2026." https://atlan.com/know/prompt-injection-attacks-ai-agents/
