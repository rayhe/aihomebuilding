# Research: Both Sides of the Permit Counter Now Have AI. They Don't Agree.

## Angle
For the first time, both the architect/designer AND the municipal plan reviewer have AI-powered code compliance tools running against the same set of drawings. UpCodes Plan Review (launched June 3, 2026) lets designers self-check against 11 million locally adopted codes. On the other side, CodeComply.Ai (CivicPlus partnership, March 2026), CivCheck/Clariti, and Blitz AI let municipalities auto-check incoming plans. HUD is pouring $3M in grants to get more cities onto AI. ICC AI Navigator provides code content to some tools but not all.

Problem: these systems use different code databases, different amendment libraries, different interpretation models. When the designer's AI says "compliant" and the city's AI says "three violations," nobody's contract addresses who's right. The homeowner (or builder) eats the delay.

This is NOT the same as our existing permit review articles, which cover municipal AI adoption, or liability gaps generally, or the SBA self-certification story. This is specifically about the convergence of designer-side and municipal-side AI creating a "double AI review" scenario with predictable disagreements.

## Journalist
Jake "Jackhammer" Kowalski — Construction Technology. Punchy, specs-driven, short paragraphs. He'll crunch the technical differences between the two AI systems and explain why they'll fight.

## Kill Test
✅ If you're an architect, designer, or builder submitting residential plans in 2026, you might soon be pre-checking with one AI tool and getting reviewed by a different one. You need to know the systems don't agree — and what to do about it.

## Primary Sources

### 1. UpCodes Plan Review Launch (June 3, 2026 — PR Newswire / Morningstar)
- AI-native QA/QC feature automatically analyzes project drawings against 11 million locally adopted building codes
- 800,000 AEC professionals already use UpCodes for code research
- Covers 6,000+ jurisdictions across the US
- Discipline-specific analyses: architecture, structural, MEP, fire protection, life safety, accessibility, energy
- General code review OR checklist-based review using firm's own QA/QC templates
- Returns issues organized by severity and category, linked to drawing page and governing code section
- CEO Scott Reynolds: "We've built an AI QA/QC partner, grounded in adopted building codes, that can systematically identify compliance issues before they become RFIs, change orders, or costly delays."
- URL: https://www.prnewswire.com/news-releases/upcodes-adds-ai-native-plan-review-to-its-aec-qaqc-platform-302789640.html

### 2. CivicPlus + CodeComply.Ai Partnership (March 19, 2026 — CivicPlus press release)
- CivicPlus: public sector SaaS leader, 13,000+ org customers
- CodeComply.Ai: "first AI-powered platform in the U.S. built specifically to accelerate plan reviews and assess compliance with building codes"
- Supports: IBC, IMC, IPC, IRC, ADA, FHA, UFC, State Amended Building Codes, NFPA 101/70/72/13/14
- 83% of developers cite permitting delays as major barrier to housing development (Multifamily Executive source)
- Patrick Hughes (President, CodeComply.Ai): "cut plan review times from months to minutes"
- Critical disclaimer: "Automated compliance checks are informational and do not replace professional review or constitute legal advice. Final compliance determinations remain the responsibility of qualified reviewers."
- CodeComply.Ai also serves plan SUBMITTERS (architects, contractors, developers, permit expediters)
- URL: https://www.civicplus.com/news/nn/civicplus-brings-ai-building-plan-review-codecomply-ai/

### 3. HUD $3M AI Permitting Grants (June 2026 — StateScoop)
- HUD offered state and local governments up to $3 million to deploy AI-powered building code permitting systems
- Mid-July 2026 deadline for applications
- Julia Richman (VP, Clariti; former Colorado CTO): "Our AI studio is aimed to help communities really understand how AI could apply in their workflows"
- Federal funding will accelerate municipal AI adoption
- URL: https://statescoop.com/radio/funding-ai-powered-building-code-permitting/

### 4. ICC AI Navigator (June 8, 2026 — IndexBox summary)
- ICC AI Navigator launched in 2023, answered 140,000+ code questions to date
- Trained on many amended and specialized variants of International Codes
- Code Connect API lets third-party software developers use authoritative ICC content
- ICC: "a human should always remain in the loop, applying knowledge, verifying information"
- New features: summarization of large code sections, image filtering for searches
- Different AI tools may or may not use ICC data as their code source
- URL: https://www.indexbox.io/blog/icc-integrates-ai-into-building-safety-with-authoritative-tools/

### 5. Submittal Rejection Rates (Industry Data — UK Construction Blog / Construction Review Online)
- 30-40% of all submittals rejected on first submission (industry baseline)
- Complex MEP: rejection rates climb above 40%
- Cost per rejection: $550-$8,500
- 500 submittals × 35% rejection rate = $150,000+ in total rejection costs per project
- $805 average direct cost per rejection (admin reprocessing, contractor overhead, design team re-review)
- These are HUMAN rejection rates — dual-AI may help or may introduce new disagreement patterns
- URL: https://ukconstructionblog.co.uk/2026/04/cut-your-submittal-rejection-rate/

### 6. NAHB Regulatory Cost Study (2024)
- Regulation adds 26.4% to the average price of a new single-family home
- Permits and fees component: ~$94,000 per home
- Average total regulatory cost: $132,000+ per home
- Timeline delays are the largest component of regulatory burden

## Original Contribution
Map the specific technical reasons these AI systems will disagree when analyzing the same residential plan set:

1. **Code amendment databases:** UpCodes claims 11M locally adopted sections across 6K+ jurisdictions. CodeComply.Ai doesn't publish its code section count. Neither vendor discloses how frequently their amendment databases sync with individual jurisdictions. A city that adopted 47 local amendments to the 2021 IRC in March 2025 may have those amendments in one system but not the other.

2. **Code year divergence:** Local jurisdictions adopt specific code years (e.g., 2018 IBC, 2021 IRC) with varying amendment packages. If the designer's AI defaults to the most current model code and the city's AI runs against the locally adopted year with local amendments, they'll disagree on items like stair riser height limits (IRC R311.7.5.1: 7¾" max riser became subject to local amendments in several jurisdictions).

3. **Interpretation ambiguity:** Building codes contain "or equivalent," "approved by the building official," and "as determined by the code official" language that requires human judgment. Two AI systems will interpret these differently or flag them differently — one may pass, one may flag as unresolved.

4. **Liability vacuum:** Standard AIA A201 and ConsensusDocs contracts don't address AI-vs-AI disagreements. An architect who pre-checked with UpCodes can't use "my AI said compliant" as a defense when the city's AI disagrees. No E&O insurance policy has been tested against AI pre-check reliance.

## Strongest Counterargument
Even if both AIs disagree, the human plan reviewer retains final authority. AI is a decision-support tool, not a decision-maker. CodeComply.Ai's own disclaimer says "final compliance determinations remain the responsibility of qualified reviewers." The disagreement only becomes a real problem if understaffed building departments defer to their AI without independent review — which is increasingly likely when 83% of developers report permitting delays and municipalities are adding AI specifically to reduce backlogs.

## Limitations
- No independent testing of both systems on the same plan set exists
- UpCodes Plan Review pricing is not publicly available
- CodeComply.Ai accuracy data is limited to vendor claims ("months to minutes")
- The disagreement scenario is anticipated, not yet documented in field data
- ICC Code Connect API adoption by third-party vendors is not disclosed
- We could not determine which municipalities are currently using which AI system
