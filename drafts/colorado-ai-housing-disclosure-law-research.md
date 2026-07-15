# Research: Colorado's AI Housing Law — First State Disclosure Requirements
## Journalist: Catherine "Code" Chen (Policy & Regulation)
### Slug: `colorado-ai-housing-disclosure-law`

---

## Core Thesis
Colorado just became the first state to pass a law requiring companies to tell homebuyers when AI materially influenced a housing decision — and to offer human review if the outcome was adverse. SB 26-189, passed May 12, 2026, takes effect January 1, 2027. It covers mortgage underwriting, insurance pricing, home inspections, and potentially even AI-powered permit review. Nobody in residential construction has noticed.

## Primary Sources

### 1. SB 26-189 (The "2026 Law")
- **Passed:** May 12, 2026, Colorado General Assembly
- **Replaces:** SB 24-205 (original 2024 Colorado AI Act, never took effect)
- **Effective date:** January 1, 2027 (most provisions)
- **Key shift:** From "high-risk AI systems" → "automated decision-making technology" (ADMT) that uses personal data for "consequential decisions"
- **Covered sectors:** Employment, education, HOUSING, financial/lending services, INSURANCE, healthcare, public benefits
- **Source:** Lexology analysis (May 2026), Wikipedia, Mondaq

### 2. What the Law Requires
**For Developers (companies building AI tools):**
- Provide deployers documentation describing intended uses, limitations, material updates
- Liable under existing anti-discrimination laws for consequential ADMT decisions
- NOT liable for uses that weren't intended, documented, marketed, or configured for

**For Deployers (companies using AI tools):**
- Clear notice when ADMT materially influences a consequential decision
- Post-decision disclosures after adverse outcomes (explain the AI's role)
- Must honor consumer requests for human review and reconsideration ("if commercially reasonable")

**Consumer Rights:**
- Right to know when AI influenced a housing decision
- Right to access/correct personal data used by ADMT (via Colorado Privacy Act)
- Right to request meaningful human review of adverse decisions
- No private right of action (enforcement = AG only)
- 60-day cure period for violations

### 3. What Got Cut (vs. 2024 Law)
- No mandatory impact assessments
- No ongoing bias audits
- No developer/deployer risk-management programs
- No affirmative defense tied to NIST AI RMF compliance
- No affirmative duty to avoid algorithmic discrimination (but existing anti-discrimination laws still apply)
- Expressly NO private right of action

### 4. How This Hits Residential Construction
**Mortgage underwriting:** AI-assisted loan decisions already widespread. 75% of homebuyers expect AI in the process (Cotality AI in Housing 2026 Report). Lenders in Colorado must now disclose when AI plays a material role and explain adverse decisions.

**Home insurance:** AI roof scoring from satellite imagery (Nearmap, Cape Analytics, Betterview) increasingly used for pricing and cancellation. Colorado insurers will need to explain when AI drove an adverse insurance decision.

**Home inspections:** Spectora AI Report Assist (10,000+ inspectors, 25% time savings), Palmtech AI Image Defect Detector — if inspection findings materially influenced by AI, disclosure required under the law.

**AI permit review:** Cities using AI for plan check (TestFit, Symbium) — if permit denial or revision request is a "consequential decision" affecting housing, disclosure may be required.

**Appraisals/AVMs:** CFPB already regulates AVMs separately, but Colorado's law adds state-level disclosure requirements on top.

### 5. Why This Matters Nationally
- Colorado is first comprehensive state AI law to survive → model legislation
- 2026 state AI bills proliferating: NY (S.6278), VA (HB 697), CA (SB 468), IL (HB 3021), MN (SF 1886)
- Federal vacuum: no federal AI regulation for housing decisions beyond CFPB AVM rule
- Colorado AG enforcement + 60-day cure = moderate compliance cost (not as punitive as EU AI Act)
- If you build AI tools for construction/housing, your Colorado customers need specific documentation NOW

### 6. Original Contribution: The "Disclosure Stack" Problem
A Colorado homebuyer in 2027 could receive AI disclosure notices at SEVEN points in a single transaction:
1. AI-generated listing photos (disclosure under existing real estate law)
2. AI-scored appraisal/AVM (CFPB AVM rule + Colorado)
3. AI-assisted home inspection (Colorado)
4. AI-powered mortgage underwriting (Colorado + ECOA/fair lending)
5. AI-priced homeowner's insurance (Colorado)
6. AI-driven title search (Colorado, if consequential)
7. AI-assisted closing package review (Colorado, if adverse)

Nobody has mapped this disclosure stack. The compliance cost isn't any single notice — it's that every vendor in the transaction chain now has independent disclosure obligations, and there's no coordination mechanism. A homebuyer could get seven different "AI was involved" notices from seven different companies using seven different formats. That's not transparency — it's noise.

### 7. Market Context
- ServiceTitan 2026: 25% of residential contractors using AI meaningfully; nearly half lack trust
- NAHB/HMI July 2025: 20% of builders using AI (marketing), <5% for other functions
- Houzz research: >1/3 of construction and design firms implemented AI, 66% believe significant transformation within 5 years
- Cotality AI in Housing 2026: 75% of buyers expect AI in the process, most still want humans verifying key decisions
- AI in construction market: ~$13B (2026) → ~$28B by 2031

### Strongest Counterargument
The 2026 Law is deliberately lighter than its predecessor — it dropped impact assessments, bias audits, and risk-management mandates. It's a disclosure law, not a prohibition. The 60-day cure period and AG-only enforcement mean the compliance burden is manageable, not transformative. And the "commercially reasonable" qualifier on human review means companies aren't obligated to rebuild their entire decision pipeline — just to have a human available when someone asks. For well-run companies already documenting their AI use, this changes very little.

### Limitations
- SB 26-189 is expected to be signed but was not yet signed by Governor Polis as of our research date. Could be vetoed (unlikely given Polis's support of the rewrite).
- Attorney General rulemaking (due Jan 1, 2027) will define key terms like "materially influence" and "commercially reasonable" — the practical scope is TBD.
- The litigation challenging the original 2024 Law is stayed but not resolved. How it affects the 2026 Law is unclear.
- Our "disclosure stack" analysis is illustrative — actual disclosure requirements will depend on AG rules, and some transaction steps (title search, closing review) may not qualify as "consequential decisions."
- We have no data on compliance costs specific to Colorado's construction sector.
