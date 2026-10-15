# Research: Who Pays When Your Agent Gets It Wrong?

**Slug:** muse-who-pays-when-your-agent-fails-2026
**Journalist:** Marcus Washington (investigative, human-centered — real people, real workflows, uncomfortable conclusions)
**Working headline:** The Chatbot Lied and the Airline Paid. When Your Agent Messes Up, You Pay.
**Kill test:** PASS — this is the trust decision itself. Nobody should hand an agent their accounts without knowing whose name is on the receipt when it errs.

## The core finding (original contribution)

Three liability buckets, and nobody has drawn the map cleanly:

1. **Their bot, their bill.** When a company's chatbot acts, the company pays. Settled (at least once): Moffatt v. Air Canada, 2024 BCCRT 149 — the tribunal rejected the "separate legal entity" defense outright.
2. **Your agent, your bill.** When YOUR personal agent acts on your accounts, YOU pay. Meta's own Muse ToS, Section 7.4 (User Responsibility): the user is "solely responsible for the actions Muse takes or directs in furtherance of those instructions, goals and guidance... whether they are a result of precise instructions, an identified goal, general guidance or otherwise." That clause names contracts, commitments, communications, and transactions explicitly.
3. **The law is catching up — unevenly.** Connecticut's CART Act (Public Act 26-15, SB 5, effective Oct 1, 2026) codifies "AI is not a defense" for employers. Warner's AI AGENT Act (S. 5051, July 2026) would require auditable records of delegated authority. Neither yet answers the personal-agent question: if you told it "handle the returns," did you authorize store credit?

The permission paradox: every permission you grant Muse transfers liability from Meta to you. The audit trail Meta keeps is simultaneously your receipt and, in a dispute, the evidence that you authorized the action. The more you use the agent, the more of its mistakes you own.

## Primary sources

### 1. Moffatt v. Air Canada, 2024 BCCRT 149 (primary: tribunal decision, via legal analysis)
- Nov 2022: Jake Moffatt's grandmother died; Air Canada's website chatbot told him he could book full-fare tickets and claim a retroactive bereavement discount "within 90 days of the date your ticket was issued."
- Real policy: no retroactive claims. Moffatt booked relying on the chatbot; airline refused the ~CA$650 difference.
- Airline's defense: the chatbot was "a separate legal entity responsible for its own actions."
- Feb 14, 2024: Tribunal Member Christopher Rivers rejected it — "should be obvious" Air Canada is responsible for all information on its website, chatbot or not. Negligent misrepresentation. Award: CA$812.02 ($650.88 damages + $36.14 pre-judgment interest + $125 tribunal fees).
- Sources: https://www.dww.com/articles/bc-tribunal-finds-air-canada-liable-for-inaccurate-advice-given-by-website-chatbot?amp ; https://github.com/makerchecker/makerchecker/blob/HEAD/incidents/entries/AID-2022-0001.md
- Note: small-claims tribunal, not appellate precedent — but the first known ruling holding a company liable for chatbot output, widely cited by ABA, law firms.

### 2. Muse Terms of Service, Section 7 (primary: Meta's own terms)
- URL: https://Muse.ai/terms
- Section 7, User Representations and Warranties: user warrants full legal authority over connected accounts and recipients contacted; has obtained all necessary permissions/consents; will comply with all applicable laws.
- Section 7.4, User Responsibility: user is "solely responsible for the instructions, goals, and guidance" AND "solely responsible for the actions Muse takes or directs in furtherance of those instructions, goals and guidance... whether they are a result of precise instructions, an identified goal, general guidance or otherwise" — expressly including "any contracts, commitments, communications, content or transactions made."
- Meta help page (via Moneywise): "You're responsible for all transactions your Muse makes on your behalf. Keep an eye out for email confirmations, receipts and statements."
- Source: https://moneywise.com/news/top-stories/meta-muse-ai-assistant-privacy-purchase-responsibility
- Muse scale context: ~3.4M downloads since Sept 8 launch (Sensor Tower, via Moneywise).

### 3. Connecticut AI Responsibility and Transparency Act, Public Act 26-15 / SB 5 (primary: statute, via legal analyses)
- Signed spring 2026; key provisions effective October 1, 2026 (14 days before this article's date).
- Sec. 13 amends the Fair Employment Practices Act: "The use of an automated employment-related decision technology... shall not be a defense against a complaint alleging a discriminatory practice."
- Sec. 26: employers serving federal WARN notices must disclose whether layoffs relate to AI use.
- Enforcement: state AG via CUTPA; no private right of action; 60-day cure window through Dec 31, 2027.
- Caveat for the article: the "not a defense" doctrine targets employers/deployers of hiring tech — it does NOT yet reach personal agents acting for consumers. The direction of travel matters, not the current coverage.
- Sources: https://www.aipolicydesk.com/blog/connecticut-cart-act-october-2026-aedt-warn-enterprise ; https://www.jdsupra.com/legalnews/connecticut-takes-aim-at-ai-in-6344339/ ; https://www.jdsupra.com/legalnews/the-growing-patchwork-of-state-ai-laws-7690612/

### 4. The counterweights (what softens the "you pay" rule)
- **Muse insured purchase protection** (Forkast, Sept 2026): Cover Genius/XCover coverage, premiums paid by Stripe Link, up to $500 per claim for transaction errors — Meta's tacit admission that pure user-liability has limits. Source: https://forkast.news/three-agent-products-went-live-this-week-each-disclaims-liability-differently-none-has-a-federal-rulebook/
- **Warner's AI AGENT Act, S. 5051** (July 21, 2026): defines "custodial user agent" (authorized in a transparent, documented, limited, revocable manner); requires real-time action records; directs NIST to build standards for verifying delegated authority and auditable records. Not law yet. Source: https://www.kcau9.com/news/national-news/an-ai-agent-spent-your-money-can-anyone-prove-you-authorized-it/
- **E-SIGN Act**: a contract can't be denied legal effect merely because an electronic agent participated, if attributable to the person bound. "The AI did it" is not an automatic exit. Source: https://usaherald.com/metas-muse-ai-agent-can-act-for-you-but-the-legal-risk-may-still-be-yours/
- **Amex (April 2026)**: announced coverage of agent purchases for registered agents with documented user intent. Single-source (LinkedIn); use with hedge. Source: https://www.linkedin.com/pulse/when-ai-pays-bill-who-actually-authorized-transaction-travis-bowman-ba5gc
- **The Conversation (Aug 2026)**: the "shirt" scenario — user says "find, don't buy"; agent buys anyway; retailer, agent provider, and payment service each hold accurate-but-unlinked records. No evidence chain ties the charge to the task scope. This is the attribution gap in one paragraph. Source: https://www.stuff.co.za/2026/08/14/an-ai-agent-spent-your-money-can-anyone-prove-you-authorised-it/
- **Target AI shopping agent ToS (March 2026)**: customers fully responsible for agent purchases even on misinterpretation. Shows the disclaim-everything pattern is industry-wide, not just Meta. Source: https://aihaberleri.org/en/news/ai-shopping-agent-liability-in-2026-target-makes-you-pay-for-ai-mistakes
- **Comparative terms**: OpenAI's Instinct — user "bears all risk of financial loss"; liability capped at $250 or a year's fees. Apple's Siri AI terms (Sept 9, 2026) — no agent-specific liability framework at all. Source: https://github.com/dpawlan/ai-assistant-benchmark/blob/HEAD/data/articles/comparing-privacy-policies-of-ai-assistants.md

### 5. Human incidents (context, brief — Frank's article owns the Robb story)
- Matt Robb / USA Today (Oct 1, 2026): Muse accepted below-asking offers, gave out home address, misrepresented Robb's presence to a buyer. Reference in one paragraph as the concrete case; the liability question is what's new here. Source: https://www.usatoday.com/story/tech/2026/10/01/ai-personal-agent-security/91992649007/
- Note for honesty: some reported agent-spend incidents (e.g., viral "$78K Codex" and "$5K video gen" claims) are unverified single-source social posts — do NOT use as evidence, mention only as the rumor class if at all.

## Numbers for the article
- CA$812.02: Moffatt award (2024 BCCRT 149)
- $500: Muse per-claim insured purchase protection cap (Cover Genius/XCover via Stripe Link)
- $250: Instinct liability cap floor (or a year's fees, whichever greater)
- Oct 1, 2026: CART Act effective date
- S. 5051: Warner bill number
- ~3.4M: Muse downloads since Sept 8 (Sensor Tower via Moneywise)

## Strongest counterargument (to state at full strength)
Meta's ToS is a contract of adhesion — nobody reads it, nobody negotiates it, and courts have a long history of refusing to enforce one-sided disclaimers when the product itself was defective or the "supervision" demanded of the user was impractical. The $500 insurance carve-out is Meta's own tell: if user-liability were airtight, no insurer would need to be in the loop. And the regulators are moving the other way — Connecticut, Warner's bill, the EU's long-running liability debates all point toward someone other than the consumer absorbing agent risk eventually. This article's "you pay" framing has a sell-by date.

## Limitations (to state explicitly)
- No US court has yet ruled on personal-agent liability (Moffatt is a Canadian small-claims tribunal ruling about a corporate chatbot — persuasive, not binding, and a different fact pattern).
- ToS language changes; the Muse terms cited were live as of research date (Oct 15, 2026).
- This is journalism, not legal advice; no attorney was interviewed on the record for this piece.
- The Connecticut provisions most relevant here target employment tech, not personal agents — the personal-agent application is inference, labeled as such.
- Amex's agent-purchase coverage is single-sourced.
