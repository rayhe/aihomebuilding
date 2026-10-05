# Critique — Round 0: AI ANSI Z765 GLA Measurement + AI Floor-Plan Scanning

**Slug:** ai-ansi-z765-gla-measurement-floor-plan-scan-2026
**Journalist:** Elena Vasquez
**Date:** October 5, 2026
**Round:** 0
**Verdict:** SHIP (all 7 critics ≥ 8.5, all hard gates pass)

## Hard gates (mechanical, source of truth = regex/script)

| Gate | Result | Target | Pass |
|---|---|---|---|
| Em dashes (`grep -o '—' \| wc -l`) | 0 | ≤ 3 | ✅ |
| "The" sentence starters | 8 / 102 (7.8%) | < 15% | ✅ |
| Banned phrases (10-pattern sweep) | 0 | 0 | ✅ |
| Sentence rhythm variance | 206.2 | ≥ 200 | ✅ |
| Short sentences (<8w) | 12.0% | ≤ 15% | ✅ |
| Long sentences (>20w) | 54.3% | ≥ 15% | ✅ |
| Hero image | JPEG 1920x1280, real JPEG (FF D8, PIL-verified), hash 4addc356 | real JPEG | ✅ |

Rhythm revision history: initial draft failed variance (126.0) and short-pct (25.8%) with The-starters at 18.2%. First revision pass over-merged (variance 140.5, mean 24.2, median 23.0 — uniform on the long side). Second pass restored ~10 short punches and lengthened 6 medium sentences to 40+ word constructions: variance 206.2, short 12.0%, long 54.3%. PASS.

## Critic scores

### 1. General Editor — 8.8
Cold open earns its place: the vanished basement is spatial, specific, and turns on the second paragraph. Structure follows the template without feeling templated; the "five moves" section is genuinely actionable and ordered by need. The middle third (vendor numbers) is the densest stretch, but the liability-dodge paragraph rescues it. Ending lands on the grid line. Minor deduction: the Fannie-rationale paragraph and the CubiCasa-stats paragraph sit adjacent and both lean on vendor-adjacent sourcing; a transition sentence carries the load but just barely.

### 2. Voice Coach — 8.8
Elena is audible throughout: the spatial opening, the essayist's long builds, "sit with what that implies," the design-consequence section (standards shaping skylines upward), and the catchphrase deployed once, in context. Banned-phrase sweep clean; no "inflection point," no reveal formula, no market-size opening. Rhythm now passes with real spread. Minor deduction: "valuation noise" and "headline number" repeat across sections; "measurement noise band" leans technical-manual in one calc-box line.

### 3. Ethics Reviewer — 9.0
No self-congratulation, no vendor favoritism. CubiCasa's claims are reported with attribution and immediately stress-tested against the vendor's own study. The article explicitly refuses the stronger claim (AI is not more accurate, only more consistent). The $350/sq-ft assumption is labeled as illustrative in both the calc-box and the limitations. No vulnerable populations, no hidden incentives.

### 4. Social / Shareability — 8.7
Headline is specific, surprising, and directly addressed ("Your Basement Doesn't Count"). Pull-quote density is high: "The vendor that sells measurement refuses to publish the measurement" (paraphrase of the liability dodge), "Consistency, not accuracy, is what the algorithm sells," "The ruler is federal and the listings are local." Natural audience: buyers, agents, appraisers. Minor deduction: no visual data element beyond the calc-box; the 3.9%-vs-4.0% comparison wants a chart the format doesn't provide.

### 5. Legal Accuracy — 8.8
Every load-bearing claim is sourced inline: Fannie Mae April 2022 mandate (Appraisal Institute), Freddie Mac November 2023 (MeasureFloorPlan), the six ANSI rules, the any-portion-below-grade rule, the 7-foot/50%/5-foot ceiling rule, the computer-generated-sketch requirement. The $2.5M liability example is attributed as "recently modeled," not reported as fact. The "Nothing here is appraisal or legal advice" disclaimer is present and specific. Minor deduction: "roughly every conforming mortgage in America" is broad; it is qualified by "roughly" and the desktop-appraisal exception is disclosed in Limitations, but a first-time reader could miss the boundary.

### 6. Research Rigor — 9.0
Original contribution is real and labeled: the variance-to-dollars translation (±80 sq ft → ±$28,000 at an assumed $350/sq ft) and the basement-haircut math ($280,000 off the headline number) are calculations nobody published, with every assumption named in the calc-box and reprised in Limitations. The strongest counterargument gets its own full section ("In defense of the ruler") and is not strawmanned: pre-2022 chaos was worse, basements retain adjusted value, the market prices them anyway. Eight primary sources, all hyperlinked. Deduction withheld for the vendor-sourced study because the article discloses the provenance (n=43, self-published, not peer-reviewed) rather than laundering it.

### 7. Data Presentation — 8.7
Calc-box carries the novel math with labeled inputs. Numbers are specific throughout: $15–50 vs $150–400, 3.9% vs 4.0%, n=285 vs n=43, 4.9% vs 0.0% significant-variance rates, 8.0% vs 3.5% standard deviations, 4M+ plans, 350K+ downloads. The 2,400→1,600 running example is concrete and consistent. Minor deduction: the CubiCasa-vs-Matterport-vs-tape comparison would read cleaner as a small table; prose list is serviceable but not scannable.

**Average: 8.83. All critics ≥ 8.5. All hard gates pass. → SHIP, round 0.**

## Notes for the record
- 1/day rule: Publish #777 already logged 2026-10-05 PT → queued SHIP_READY as #1007, ship_after 2027-05-28 (day after #1006's 2027-05-27).
- Factual claims verified against research file before scoring; no claim in the article exceeds its source.
- Hero: images/ai-ansi-z765-gla-measurement-floor-plan-scan-2026.jpg (JPEG 1920x1280, hash 4addc356).
