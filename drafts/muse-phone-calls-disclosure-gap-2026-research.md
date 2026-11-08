# Research: Muse's Phone Calls and the Disclosure Gap

**Slug:** muse-phone-calls-disclosure-gap-2026
**Journalist:** Catherine Chen (privacy, security, policy)
**Date:** November 8, 2026
**Headline (working):** Muse Called Your Hair Salon. Nobody Told the Salon It Was an AI.

## Angle (1-2 sentences)
Since September 16, 2026, Muse has phoned US businesses on users' behalf to book tables, move appointments, and check stock. The law has had an answer for AI voices on the phone since February 2024. Meta has not published whether Muse gives it.

## Challenge
Is this the best use of this cycle? Yes. It is the only Muse capability where a federal rule, three state laws, and an EU transparency duty all already exist, and the vendor's compliance posture is publicly undocumented. It is a decision readers face the first time they delegate a call: the risk is not that the call fails, it is that the call succeeds without the other side knowing what they were talking to.

## Kill test
Does this help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an AI agent with real work? Yes. A reader deciding whether to let Muse call a business needs to know: what the call says about itself, who is liable if it doesn't, and what to do when a business hangs up or takes the booking anyway.

## Facts (primary sources)

### 1. Muse calls businesses (public beta, Sept 16, 2026)
- Meta launched public beta outbound calling to US businesses on September 16, 2026, per TechCrunch reporting (summarized in Layer3 Labs' comparison of the three consumer AI calling services).
- Scope: restaurant reservations, appointment scheduling (e.g. haircuts), product availability checks, customer-service issues such as cable bills. US businesses only; no personal contacts, no emergency or medical-advisory calls.
- Users start a call by asking Muse in the Muse app or WhatsApp. After each call the user receives a transcript and a summary (per 404 Media reporting).
- Early testing included human call-center contractors placing some calls instead of synthetic voices. Internal tests reportedly found human-placed calls succeeded 95-98% of the time; AI-only calls did much worse. Meta rolled the human-placed calls back (Wall Street Journal reporting, summarized by Bland.ai and Layer3 Labs).
- Meta has NOT published: how a Muse call introduces itself, whether it always says it is AI, which number appears on caller ID, or whether a business can opt out. No opt-out mechanism, phone directory, or exclusion portal published.
- Source: https://www.layer3labs.io/guides/meta-muse-calling-your-business and https://www.layer3labs.io/comparisons/ai-assistants-that-make-phone-calls

### 2. The FCC already ruled on AI voices (FCC 24-17, Feb 8, 2024)
- Unanimous declaratory ruling, CG Docket No. 23-362, adopted Feb 2, 2024, released/effective Feb 8, 2024.
- Holding: the TCPA's restrictions on "artificial or prerecorded voice" encompass current AI technologies that generate human voices, including voice clones of real people. The ruling does NOT ban AI voice calls; it applies existing rules to them.
- Consequence: callers must obtain the prior express consent of the called party before a call using an artificial voice; telemarketing calls need prior express *written* consent. Identification and opt-out duties under 47 CFR 64.1200(b) apply to any AI technology initiating an outbound call using an artificial voice.
- Trigger: AI-generated robocalls imitating a presidential voice urging voters to stay home in a state primary.
- TCPA statutory damages: $500 per call for negligent violations, $1,500 per call for willful violations.
- A separate August 2024 proposal (FCC 24-84) to require AI disclosure at the start of each call has NOT become a final rule as of October 2026.
- Sources: FCC, "FCC Makes AI-Generated Voices in Robocalls Illegal," Feb 8, 2024; FCC 24-17; explainer https://nextlevel.ai/blog/fcc-ai-voice-robocall-ruling/ ; https://www.preflightapi.com/blog/tcpa-ai-voice-agents/

### 3. Google announces; Meta and Instinct do not (comparison)
- Google's agentic calling ("Ask for Me," launched Jan 2025): press reports say the call opens by announcing an automated system calling from Google on behalf of a user.
- Meta Muse and Instinct Concierge (launched Sept 16, 2026): neither has published official documentation stating whether or how their outbound calls announce AI usage.
- Source: https://www.layer3labs.io/comparisons/ai-assistants-that-make-phone-calls

### 4. State disclosure laws (the patchwork)
- **Utah, Artificial Intelligence Policy Act (SB 149), effective May 1, 2024; amended May 7, 2025 (SB 226/SB 332), now Utah Code ch. 13-77.** First state law regulating private-sector generative AI. Duty: if a consumer clearly and unambiguously asks whether they are interacting with AI, the supplier must disclose it (§13-77-103). Regulated occupations must disclose proactively and prominently in high-risk interactions. Safe harbor (§13-77-104): clear, conspicuous up-front disclosure ends the disclosure claims. Enforcement by Utah Division of Consumer Protection; administrative fines up to $2,500 per violation. The law also bars blaming the AI itself to avoid liability.
- **California AB 2905 (effective Jan 1, 2025):** amends Public Utilities Code §2874 — when a call is placed using an automatic dialing-announcing device, the required announcement must disclose if the prerecorded message uses an AI-generated voice.
- **Texas SB 140 (effective Sept 1, 2025):** requires disclosure that a call is AI-generated within the first 30 seconds.
- **California SB 1001 (2019):** clear and conspicuous disclosure where a bot is used with intent to mislead about its artificial identity in a commercial transaction.
- Sources: https://www.estaluna.ai/blog/ai-receptionist-disclosure-laws/ ; https://www.legal500.com/intelligence/united-states/consumer-protection/utah-enacts-first-ai-focused-consumer-protection-legislation-in-us ; https://iapp.org/news/a/utah-brings-gen-ai-into-consumer-protection-realm-with-bill-passage

### 5. EU AI Act, Article 50 (applicable Aug 2, 2026)
- Transparency obligations for AI systems intended to interact directly with natural persons: the person must be informed they are interacting with an AI system, unless obvious. General application date Aug 2, 2026 (legacy systems had until Dec 2, 2026 under the Omnibus adjustment).
- Source: https://tanjagavrilovic.com/ai-disclosure-laws/ ; https://www.prepaid.ai/blog/ai-call-disclosure-rules

### 6. Muse live voice calls are a DIFFERENT feature (do not conflate)
- Nov 5, 2026: Meta rolled out live voice conversations with an animated avatar inside the Muse app (US only). The user talks to Muse; Muse hears the user but does not see them. Built on Muse Realtime Voice and Muse Realtime Avatar, first shown at Connect Sept 23, 2026. This is user-to-agent voice, not agent-to-business calling.
- Source: https://yuphora.com/news/meta-muse-voice-calls-expressive-avatar

## Original contribution
1. **The consent paradox, stated plainly:** The TCPA requires the *called party's* prior express consent for an artificial-voice call. In a Muse call, the person who consented is the user who asked Muse to dial. The called party, the salon receptionist, consented to nothing. Nobody in the chain holds the consent the statute describes, and the statute was written before anyone imagined a consumer delegating the dialing. That gap is the story.
2. **The liability math, worked:** TCPA damages are $500 per negligent call and $1,500 per willful call. A user who lets Muse make one undisclosed business call a week for a year has 52 calls in the chain. If a court ever treated those as violations, the exposure runs $26,000 (negligent) to $78,000 (willful) — not because any single call is likely to be sued, but because the per-call structure means the risk scales with volume, and volume is exactly what delegation is for. The calculation is illustrative, not a prediction; no court has ruled on a personal-agent call.
3. **The three-way disclosure table** (Google announces / Meta unpublished / Instinct unpublished) has not been assembled as a consumer decision tool before; it is the article's centerpiece.

## Strongest counterargument
The other side is reasonable: a restaurant taking a reservation does not care whether the voice on the line is human or synthetic as long as the name, time, and party size are right, and disclosure theater ("Hello, I am an AI") mostly produces hang-ups that punish the user for delegating a boring errand. Google's own announcement-first approach reportedly still gets calls completed. But the counterargument cuts both ways: if disclosure is harmless to the outcome, the case for withholding it collapses to convenience, and convenience is a thin reason to leave the person on the other end of the line uninformed.

## Limitations
- Meta has not published its call script, caller ID, or opt-out process; absence of publication is not proof of absence of disclosure. The article must say so.
- No court has ruled on TCPA liability for a personal AI agent's business call; the liability analysis is reasoning from the statute, not case law.
- The 95-98% human-call success figure comes from internal tests reported secondhand (WSJ via secondary summaries); treat as reported, not verified.
- Texas SB 140's 30-second rule and California AB 2905's scope are summarized from secondary legal trackers; verify against enrolled text before quoting verbatim.

## Actionable takeaways (for the article)
- Before delegating a call, ask Muse to state in its opening line that it is an AI calling on your behalf; check the transcript afterward to see whether it did.
- Never let an agent give payment details by voice; confirm bookings in writing.
- If you run a business and a Muse call arrives, treat it as a real customer request, confirm in writing, and never take card numbers by voice.
- If a business hangs up on the AI voice, that is a signal about disclosure, not a bug to route around with a human contractor.
