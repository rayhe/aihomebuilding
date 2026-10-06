# Critique — Round 0: ai-stucco-lath-photo-qa-weep-screed-2026
## Journalist: Jake Kowalski | Headline: "A $1,500 Inspection or a $12,000 Rot Repair: The AI Wants Your Lath Photos First"

## Hard gates (regex = source of truth)
- Em dash count (`grep -o '—'`): **0** (limit 3) — PASS
- "The" sentence starters: **1/68 = 1.5%** (limit 15%) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0** — PASS
- Sentence rhythm (`sentence-rhythm-check.py`): variance **358.0** (≥200), short **11.1%** (≤15%), long **46.0%** (≥15%) — PASS
- Actionable takeaways present: **3 role-specific (crew / buyer / vendor), all with numbers** — PASS

## 1. General Editor — 8.8/10
Cold open works: the brown coat as a ticking clock, the weep screed's disappearance as a permanent secret. Structure follows the house template (open / standard / money / tech / evidence / skepticism / takeaways / limits) without feeling templated. The C1063-vs-photo verification matrix is the article's original contribution and earns its place. Deductions: two sentences (62w in the C1063 paragraph, 71w in the unhappy-half paragraph) are genuine monsters; they pass the rhythm gate by design but test the reader's lung capacity even for varied prose. The "three-photo set" is a real three-item protocol, not listicle formula, so it stands. Minor.

## 2. Voice Coach (Jake Kowalski) — 8.7/10
Distinctly Jake: punchy, spec-heavy, bar-conversation cadence ("Backup camera, not driver", "a defect report nobody opens is expensive wallpaper", "builders with a process from builders with a prayer"). Numbers land like punches. Deduction: several paragraphs run long for Jake's "short paragraphs, get to the point fast" trait; the rhythm gate's demand for 30-45-word builds pushed a few passages toward an essayist register that reads more Elena than Jake. The fragments and one-line closes pull it back. Acceptable for a trade audience, but the voice thins exactly where the sentences lengthen.

## 3. Ethics Reviewer — 9.0/10
Vendor claims are consistently attributed as vendor claims (Spectora's 25% labeled "per the company"; Facadevision's defect taxonomy from the press release). The article refuses to oversell: the unhappy half of the matrix and the masonry-trap paragraph actively undercut the AI pitch the headline makes. No self-congratulation, no invented victims, no unverified anecdotes presented as reporting. The headline uses the top of both cost ranges ($1,500 / $12,000) while the body gives full ranges; the body is explicit, so the contract holds. Clean pass.

## 4. Social Shareability — 8.7/10
Headline is strong: two specific numbers, second person, a concrete action demand. The pull-stat block ($6,000-$12,000 vs $500-$1,500) is screenshot-friendly. Quotables: "Take the photos Wednesday", "expensive wallpaper", "the only insurance policy that pays out before the failure instead of after it". Deduction: the topic (lath-stage QA) is niche enough to feel discovered, but the matrix table does not screenshot as cleanly as a pull-stat; social lift will come from the headline and the closer, not the table.

## 5. Legal Accuracy — 8.8/10
C1063 section language (weep screed dimensions, control joint spacing, lath discontinuity) matches the published excerpts and manufacturer guidance cited inline, and the limitations section honestly discloses that the full paywalled text was not consulted. No legal advice given; the standard is cited as a standard. The Jerry Peck masonry correction (no weep screed required over solid substrates) is correctly applied as the AI false-positive case. Deduction: none material; the excerpt-based citation is a known weakness and it is disclosed rather than hidden.

## 6. Research Rigor — 9.0/10
Five primary sources, all named with URLs: ASTM C1063 excerpts (theiteh/scribd/InspectionNews), ClarkDietrich/Structa Wire control-joint guidance, Spectora Business Wire launch, YYForce Facadevision PR Newswire, StuccoSafe cost data. Original contribution is real: the C1063-checkpoint-vs-photo-verifiability matrix does not exist in any vendor deck found. Counterargument given full strength (training-data mismatch, competent municipal inspectors, Doxel's $4.5M lesson, masonry false positives). Limitations section is candid about excerpt-based code language, contractor-range cost data, unverified vendor claims, and the absence of any failure-apportionment study. Methodology transparent: the $6,000-$12,000 figure is shown as 100 sq ft × $60-$120/sq ft. Deduction: no independent validation of the AI tools' defect-detection accuracy on lath specifically; noted in both the counterargument and limitations.

## 7. Data Presentation — 8.8/10
Numbers are specific and sourced throughout: 3.5 in. flange, 1 in. / 4 in. / 2 in. clearances, 144 sq ft / 18 ft joints, $500-$1,500 inspection, $60-$120/sq ft severe remediation, $6,000-$12,000 per 100 sq ft, $14-$34/sq ft replacement, $30-$50/sq ft localized, 25% Spectora claim (labeled vendor), $4.5M Doxel raise. The verification matrix table is the article's best data element; the pull-stat reinforces the money paragraph. No unsourced statistics. Deduction: the table's "Yes/No" column could carry the confidence nuance the prose has (the "sometimes a guess from across the yard" caveat for the framed-wall precondition lives only in the text).

## Verdict
All seven critics at 8.5+: **8.7, 8.7, 8.8, 8.8, 8.8, 9.0, 9.0 — mean 8.83.** All hard gates pass. One revision made pre-score (full rhythm rewrite: variance 96.9 → 358.0, short 15.5% → 11.1%, "The"-starters held at 1.5%, zero em dashes; table cells merged to remove fragment inflation). No further revision required. → **phase=SHIP** (queued per 1/day rule; 2 publishes already logged 2026-10-06 PT).
