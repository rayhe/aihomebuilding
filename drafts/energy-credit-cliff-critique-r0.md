# Critique Round 0 — Article #495: Energy Credit Cliff
**Draft:** `energy-credit-cliff-green-home-economics.html`
**Journalist:** Priya Greenwood (Sustainability & Green Building)
**Date:** July 11, 2026

---

## Hard Gates

| Gate | Result | Detail |
|------|--------|--------|
| Em dash (raw `—`) | ✅ PASS | 0 |
| Em dash (entity `&mdash;`) | ✅ PASS | 3 (≤3) |
| "The" starters | ✅ PASS | 7/60 = 11.7% (<15%) |
| Banned phrases | ✅ PASS | 0 found |
| Sentence rhythm | ✅ PASS | Variance 334.7 (≥200), Short 8.5% (≤15%), Long 66.1% (≥15%) |

All hard gates pass.

---

## Critic Scores

### 1. 🔍 General Editor — 7.5/10

**Strengths:**
- Exceptional cold open. The $3,200 → $5,000 credit → $1,800 net → $360,000 on 200 units math chain in the first paragraph is exactly the kind of trade-pub specificity that earns reader trust instantly.
- "On July 1, the credit vanished." — clean one-sentence punch after the setup. Textbook.
- Article structure follows a logical builder→homeowner→policy arc that serves all three audience segments.

**Weaknesses:**
- **BLOCKING: Word count is 1,556.** The STORY_GUIDE caps deep dives at 1,200 words. This article is 30% over. The "What Fills the Vacuum" and "The Case for Not Panicking" sections cover overlapping territory (state programs, code ratcheting, market demand) and should be consolidated. The Limitations section is also longer than necessary for a policy analysis piece — trim to the 2-3 most material uncertainties.
- "Here is where the conversation splits between what builders should do and what they will do" — mild throat-clearing. The STORY_GUIDE says "Cut the throat-clearing. Don't start with a paragraph of context-setting. Start where the story gets interesting." This is a section-level version of the same problem. Lead with the cost data directly.
- The sections after "What Died and When" follow a predictable claim→data→"but"→caveat rhythm. Eight of 60 sentences (13.3%) use "but" as a pivot, which creates a repetitive rhetorical pattern. Vary the transitions.

**Blocking issues:** Word count must come down to ≤1,200.

---

### 2. 🗣️ Voice Coach — 8.5/10

**Sentence Rhythm Check (script output):**
```
✅ PASS
Variance:  334.7 (target ≥200)
Short:       8.5% (target ≤15%)
Long:       66.1% (target ≥15%)
```

**Strengths:**
- Strong Priya Greenwood voice overall. Evidence-based, connects policy to utility bills, uses comparisons and contrasts well. "Urgency without preachiness" is achieved — the article lets the numbers make the emotional case.
- Sentence rhythm is excellent. The variation between the 6-word "On July 1, the credit vanished" and the 45-word builder-staring-at-costs sentence is exactly what human writing sounds like.

**Weaknesses:**
- The heading "The Homeowner Math Still Works. Barely." has a punchiness that sounds more like Jake Kowalski than Priya Greenwood. Priya is "passionate but evidence-based" — she would frame this more like "Why Homeowners Still Benefit — But Barely Enough to Notice" or integrate the qualification into the body.
- "Here is where the conversation splits between what builders should do and what they will do, and the gap is wider than anyone in the sustainability space wants to admit." — this reads like a setup-line from a TED talk. Cut or rework. Priya would dive straight into the numbers.
- No banned phrases detected, but keep "not unless someone is paying for it, and right now nobody is" — good voice.

**Blocking issues:** None (all gates pass).

---

### 3. ⚖️ Ethics Reviewer — 9.0/10

**Strengths:**
- Politically fair. The article credits the OBBB's fiscal savings ("Killing it saved the federal budget roughly $240 million per year") while making the environmental cost case. No partisan name-calling. No preachiness.
- Both builder and buyer perspectives are presented with genuine empathy. The article doesn't villainize builders for dropping green features — it explains why the economics make it rational.
- No self-congratulatory framing ("we calculated" / "our analysis reveals"). The math speaks without editorial chest-thumping.

**Weaknesses:**
- The fiscal counterargument is underdeveloped. The article presents the case for credits being efficient policy (4× ROI) but doesn't seriously engage with the argument that tax credits distort markets, that efficiency should be mandated through code rather than subsidized, or that the deficit justification for the OBBB was substantial. "The Case for Not Panicking" focuses on market demand, not fiscal discipline. Per the STORY_GUIDE: "The best case against the article's thesis must be stated at full strength — not strawmanned, not immediately dismissed."
- Minor: the article says "free money" in the first paragraph. This is technically a tax credit, not a subsidy — the distinction matters to builders and accountants, and "free money" is editorializing, even if accurate in net-effect terms.

**Blocking issues:** None.

---

### 4. 📱 Social/Shareability — 8.5/10

**Strengths:**
- Headline is top-tier for sharing: "$945 Million a Year" + "Eleven Days Ago" = urgency + scale. This is the kind of headline that gets quote-tweeted with "🧵".
- The 350,000 stat callout is visually perfect for screenshot sharing.
- The article has multiple pull-quotable lines: "On July 1, the credit vanished," the builder-staring-at-costs sentence, "right now nobody is."

**Weaknesses:**
- Missing a human anecdote. Every highly-shared construction/policy article starts with or includes a specific person — "a builder in Phoenix," "a first-time buyer in Charlotte." Priya's voice spec says she's "comfortable citing homeowner conversations." Adding a 2-sentence builder quote or homeowner reaction would dramatically boost share potential.
- The $20/mo stat callout label is too long (36 words). For visual sharing, the label should be under 20 words. Current: "Approximate monthly mortgage cost of Energy Star upgrade at current rates. The energy savings roughly offset it, but the value proposition collapses from 'free for the builder' to 'marginal for the buyer.'" Trim to one punchy sentence.

**Blocking issues:** None.

---

### 5. ⚖️ Legal Accuracy — 8.0/10

**Strengths:**
- Credit codes (45L, 25C, 25D, 30C, 179D) are correctly identified with accurate descriptions.
- The OBBB signing date (July 4, 2025) and the 45L expiration date (June 30, 2026) are consistent with IRS and NAHB source data.
- The narrow acquisition-date interpretation by IRS is correctly described — this is a real issue for builders with unsold inventory.

**Weaknesses:**
- **The Executive Order link points to `whitehouse.gov/presidential-actions/` — the generic landing page, not the specific EO.** Per the STORY_GUIDE: "Every factual claim must be traceable to a cited source the reader can check." A reader clicking this link cannot find the specific order. Either link to the actual EO or cite it by number/title.
- **25D expiration date needs verification.** The article states 25D (Residential Clean Energy Credit) expired Dec 31, 2025. Some sources indicate the OBBB modified 25D with a phase-down rather than hard termination on that date, and the solar ITC (48E) has separate begin-construction rules. The table should match the most authoritative source (the bill text or IRS guidance).
- The claim "the IRS has signaled it will interpret the acquisition date narrowly" — what is the source for this signal? Is it an IRS notice, a revenue ruling, or informal guidance? This needs attribution.

**Blocking issues:** Generic links reduce verifiability score. Fix the EO link and verify the 25D date.

---

### 6. 🔬 Research Rigor — 8.0/10

**Strengths:**
- **Original contribution is solid.** The break-even calculation ($3,200 cost → $5,000 credit → $1,800 net) and the monthly mortgage impact ($20/mo cost vs. $35-$40/mo savings) are original computations not found in vendor claims or press releases. The $945M/year aggregate (350,000 × $2,700) is a novel figure derived from combining ACEEE home counts with IRS credit averages.
- **Limitations section is genuinely honest.** ACEEE data vintage, climate zone variability, state program flux, and NAHB scope caveats are all material and specific.
- **Counterargument is present** — market demand, resale premiums, code ratcheting.

**Weaknesses:**
- **Three of five outbound links are homepage URLs, not specific reports:**
  - `https://www.aceee.org/` — should link to the specific ACEEE analysis of 45L uptake
  - `https://www.nar.realtor/` — should link to the specific NAR green home premium study/report
  - `https://www.whitehouse.gov/presidential-actions/` — should link to the specific Executive Order
  - The NAHB links are specific and good. But 3/5 being generic homepages is a verifiability failure.
- The "$1.7 billion over seven years" projection is unsourced. Which entity produced this estimate — ACEEE, CBO, JCT? Attribution is missing.
- The "four times the cost of the credit" ACEEE finding needs a specific citation (report title, date) rather than just linking to aceee.org.

**Blocking issues:** Homepage links must be replaced with specific report URLs. The $1.7B figure needs attribution.

---

### 7. 📊 Data Presentation — 8.5/10

**Strengths:**
- The opening math chain ($3,200 → $5,000 → $1,800 → $360,000) is masterful. The reader understands the financial mechanics in one paragraph.
- The credit expiration table is clean, scannable, and informative. Exactly the right use of a table — structured data that would be painful as prose.
- Cost inputs are well-contextualized: diesel +105.9% and metal trim +42.9% sit next to the $131,734 regulatory cost figure, building a coherent cost-pressure narrative.

**Weaknesses:**
- The policy math at the end is unshown: "Killing it saved the federal budget roughly $240 million per year. The homes that will not be built to Energy Star as a result will consume that $240 million in excess energy costs within three years." Where does $240M come from? If $1.7B over 7 years ≈ $243M/year, say so. And the "three years" claim for payback in excess energy costs needs its own calculation walkthrough. Per the STORY_GUIDE: "When the article makes claims involving numbers — cost savings, timeline reductions, ROI projections — show the math with inputs, assumptions, and calculation."
- The diesel/metal trim YoY figures (+105.9%, +42.9%) are dramatic but disconnected from the green-vs-code cost differential. How much does diesel or metal trim increase affect the $2,000-$4,000 Energy Star premium specifically? If they don't affect it directly, they're padding the cost-pressure argument without earning their place.
- The stat callout for $20/mo is a strong concept but the label text is wordy and tries to do too much rhetorical work for a visual element.

**Blocking issues:** Show the math on the $240M/year figure and the "three years" claim.

---

## Score Summary

| Critic | Score | Status |
|--------|-------|--------|
| 🔍 General Editor | 7.5 | ❌ Below 8.5 |
| 🗣️ Voice Coach | 8.5 | ✅ |
| ⚖️ Ethics Reviewer | 9.0 | ✅ |
| 📱 Social/Shareability | 8.5 | ✅ |
| ⚖️ Legal Accuracy | 8.0 | ❌ Below 8.5 |
| 🔬 Research Rigor | 8.0 | ❌ Below 8.5 |
| 📊 Data Presentation | 8.5 | ✅ |

---

## Required Fixes (Priority Order)

1. **Trim to ≤1,200 words.** Consolidate "What Fills the Vacuum" and "The Case for Not Panicking" into one section. Tighten Limitations to 2-3 key points. Cut throat-clearing sentences.
2. **Replace 3 homepage links with specific report URLs:**
   - ACEEE: link to the specific 45L/Energy Star analysis
   - NAR: link to the specific green home premium study
   - Executive Order: link to the specific EO or cite by number
3. **Attribute the $1.7B projection** — name the source (CBO, JCT, ACEEE, or other).
4. **Show the math on $240M/year** — if derived from $1.7B ÷ 7 years, say so explicitly.
5. **Show the math on "three years"** — the claim that excess energy costs will equal the budget savings in three years needs a transparent calculation.
6. **Attribute the IRS narrow-interpretation claim** — cite the specific IRS notice or guidance.
7. **Minor:** Cut "Here is where the conversation splits..." throat-clearing. Tighten the $20/mo stat callout label.

---

## VERDICT: NEEDS REVISION

Three critics scored below 8.5 (General Editor 7.5, Legal Accuracy 8.0, Research Rigor 8.0). Primary blockers are word count (1,556 vs. 1,200 cap) and weak source linking (3 of 5 outbound links are generic homepages). Fixes are straightforward and should resolve in one revision round.
