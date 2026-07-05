# Critique: AI Thermal Drone Energy Audit — Round 1

**Article:** "Your Energy Auditor Spent 90 Minutes in Your House. A Thermal Drone Scanned 500 Homes That Afternoon. The AI Found What He Missed."
**Journalist:** Priya Greenwood
**Date:** 2026-07-04

---

## Hard Gates

| Gate | Result | Detail |
|------|--------|--------|
| Em dashes | ✅ PASS | 1 total (1 &mdash; in title, 0 in body). Limit: ≤3 |
| Sentence rhythm | ✅ PASS | Variance 259.0 (≥200), Short% 9.1% (≤15%), Long% 58.4% (≥15%) |
| "The" starters | ✅ PASS | 10/75 = 13.3% (<15%) |
| Banned phrases | ✅ PASS | 0 found |
| Hero image | ✅ PASS | JPEG verified (FF D8), cache-bust hash: bdf8ef96 |
| Actionable insights | ✅ PASS | Three distinct reader segments addressed (builder, homeowner, utility) with specific cost figures and actions |

---

## Critic 1: 🔍 General Editor — 9.0/10

**Strengths:**
- Cold open is excellent. The auditor scene is concrete, specific, and immediately establishes the cost asymmetry ($500 for one house vs. one drone doing 487 homes by noon). Reader is hooked before the second paragraph ends.
- Structure follows problem → technology → evidence → skepticism → stakes cleanly, but the transitions feel earned rather than formulaic. The "And 'decides' is doing a lot of work in that sentence" turn is exactly the kind of voice that makes this read like journalism, not a report.
- The closing is tight: "The drone doesn't replace the auditor. It tells the auditor where to go." Memorable, quotable, balanced.
- Length (~1,100 words) is appropriate for a deep dive. Nothing feels padded.

**Weaknesses:**
- The "Math That Should Bother You" section has one paragraph that runs to ~180 words. It's well-structured internally but could benefit from a paragraph break after the $100 million utility cost figure to let that number land before the drone comparison. Readers skim long paragraphs, and the drone economics deserve their own visual block.
- The weather analogy ("Consider the difference between a weather forecast...") is good but slightly generic — Priya's voice is strongest when she connects to utility bills and specific homeowner decisions, not metaphors.

---

## Critic 2: 🗣️ Voice Coach — 9.0/10

**Sentence Rhythm (script results):**
- Variance: 259.0 ✅ (target ≥200)
- Short%: 9.1% ✅ (target ≤15%)
- Long%: 58.4% ✅ (target ≥15%)
- Distribution well-shaped: punchy fragments ("The auditor found one cold spot.") interspersed with complex constructions that unfold across subclauses.

**Priya's Voice:**
- Evidence-based urgency without preachiness: ✅. She presents the data and lets the reader draw conclusions. "The uncomfortable truth" is as edgy as she gets, and it's earned by the preceding evidence.
- Comparisons and contrasts: strong throughout. The $500/house vs. $15-30/drone unit, the 92% mAP vs. human inspectors, the 300% cost estimate divergence — these are Priya signatures.
- Utility bill connections: ✅. "$5,000 to $15,000 per year at $0.20/kWh" — she always converts abstract energy data to dollars.

**No AI voice tells detected.** No sycophantic openings, no "Here's where it gets interesting" transitions, no "let's break it down" filler. The article reads like a knowledgeable journalist who's read the studies and has opinions about them.

**Minor note:** "I want to be careful here" in the limitations section is a first-person interjection that works for Priya's voice but is rare for this publication. Acceptable — it signals honesty rather than hedging.

---

## Critic 3: ⚖️ Ethics Reviewer — 8.5/10

**Privacy treatment:** Good. The article explicitly names thermal camera privacy risks ("can see which rooms in your house are occupied, when you shower, and whether you're growing plants in the basement") and predicts community resistance. This isn't buried — it's in the limitations section with appropriate weight.

**Worker displacement:** Partially addressed. The closing reaffirms auditors aren't obsolete, but the article doesn't engage with the economic reality that drone-AI at $15-30/home would devastate the traditional audit industry's revenue model. If 400 auditor-years of labor becomes 10 drone operators and a cloud processing bill, that's a workforce transition worth naming directly.

**Equity angle:** Strong. The "worst-to-first" approach and the insight that "homes wasting the most energy are almost never the ones that apply for audits" directly addresses environmental justice. The 68% excess consumption reduction from upgrading low-income homes is powerful.

**No self-congratulatory language.** The article maintains critical distance throughout.

---

## Critic 4: 📱 Social/Shareability — 9.5/10

**Headline:** Exceptional. Three-part structure with escalating surprise. The specific numbers (90 minutes, 500 homes, "that afternoon") ground it in reality. "The AI Found What He Missed" is the hook that makes people click.

**Pull quotes for social:**
1. "The auditor found one cold spot. The drone found the whole neighborhood." — Perfect for Twitter/X. Concise, surprising, shareable.
2. "Your auditor aims an IR camera at a wall for a few seconds, eyeballs the thermal gradient, and writes 'suspected insufficient insulation' in the report, which is a qualitative observation dressed up as quantitative data." — LinkedIn gold for energy efficiency professionals.
3. "The drone doesn't replace the auditor. It tells the auditor where to go." — Closing kicker.

**Share triggers:** The $100M vs. $3-6M comparison is the kind of math people screenshot and share. The 300% divergence between three auditors auditing the same building is genuinely surprising and shareable. The 2.61% savings from a 1°C dial turn is a "tell your neighbor" fact.

**Missing:** No infographic opportunity called out, but the data is strong enough to generate one (traditional vs. drone cost per home, coverage speed, accuracy comparison).

---

## Critic 5: ⚖️ Legal Accuracy — 8.5/10

**IRA $150 tax credit:** Correct. Energy Efficient Home Improvement Credit under IRC §25C includes up to $150 for home energy audits.

**FAA Part 107 + BVLOS:** Accurate. Commercial drone operations require Part 107 certification, and Beyond Visual Line of Sight requires a waiver (§107.31). The article correctly notes FAA grants these "reluctantly" — as of mid-2026, only ~150 BVLOS waivers have been issued nationally.

**DOE audit cost range:** Cited as "$200 to $700" — consistent with DOE published estimates. Article also cites Angi data in research notes showing $200-$1,000, and uses the more conservative DOE range in text. Good editorial judgment.

**Privacy law gap:** The article mentions privacy concerns but doesn't cite specific legal frameworks (Fourth Amendment aerial surveillance doctrine, state drone privacy laws like California Civil Code §1708.8). For a Priya Greenwood article this omission is acceptable — she's a sustainability writer, not Catherine "Code" Chen — but a parenthetical citing the legal landscape would strengthen the limitations section.

**No legal claims made that couldn't be verified.** No case law cited incorrectly.

---

## Critic 6: 🔬 Research Rigor — 9.0/10

**Original Contribution:** ✅
- The utility-scale cost comparison ($100M traditional vs. $3-6M drone-AI for 200K homes) is an original calculation not found in any of the cited sources. The per-home $15-30 figure at scale is derived from the research but the total territory-wide comparison is novel.
- The cross-study synthesis connecting drone thermal imaging (IEEE Access) → neighborhood-scale triage (Kestrix/MDPI) → indoor HVAC hybrid modeling (UMD) → heat pump field performance (Nature Communications) builds a coherent pipeline argument that no single source makes.

**Limitations Acknowledgment:** ✅ Strong and specific.
- Geographic limits: heating-dominant climates, pre-dawn flights, temperature differential requirements
- Building type gap: studies used UK masonry and academic buildings, not US stick-frame residential
- No US residential peer-reviewed comparison: explicitly calls for the study that needs to happen
- FAA regulatory barriers: BVLOS waivers, overflight restrictions

**Strongest Counterargument:** ✅ Stated at full strength.
- "No peer-reviewed study has yet compared drone-AI recommendations against traditional audit recommendations on the same cohort of U.S. residential buildings. That study needs to happen before anyone declares victory." This is honest and not immediately dismissed.

**Verifiability:** ✅ All major claims traceable to named sources.
- IEEE Access YOLOv4 study: named, 92% mAP figure cited
- Kestrix: named company, InnovateUK/DESNZ backing cited
- MDPI Energies: methodology divergence cited (300%, 250%)
- UMD CEEE: journal (Energy and Buildings), date (April 2026), error margins (5-6%)
- Nature Communications: sample size (1,023), countries (10), key finding (2.61%)
- PNNL: overestimation range cited (75% over to 16% under)

**Methodology Transparency:** ✅ Cost calculation inputs are explicit ($500/audit, 1-2 audits/day, 200K customers, $15-30/drone unit).

**Minor gap:** The 68% excess consumption reduction figure from MDPI Energies is cited as "upgrading low-income residences to median household efficiency" but the article doesn't specify whether this is national or a regional calculation, or what baseline assumptions underlie "median efficiency." Worth a parenthetical clarification.

---

## Summary

| Critic | Score |
|--------|-------|
| 🔍 General Editor | 9.0 |
| 🗣️ Voice Coach | 9.0 |
| ⚖️ Ethics Reviewer | 8.5 |
| 📱 Social/Shareability | 9.5 |
| ⚖️ Legal Accuracy | 8.5 |
| 🔬 Research Rigor | 9.0 |
| **Average** | **8.9** |

**All hard gates: PASS**
**All critic scores: ≥ 8.5**
**Verdict: ADVANCE TO SHIP**

The article is strong. The two 8.5 scores (Ethics, Legal) are at the threshold, both for omissions rather than errors — worker displacement could be named more directly, and privacy law frameworks could get a parenthetical. These are "would improve" items, not blocking defects. The article's core argument is well-sourced, honestly limited, and genuinely useful to its three target audiences.
