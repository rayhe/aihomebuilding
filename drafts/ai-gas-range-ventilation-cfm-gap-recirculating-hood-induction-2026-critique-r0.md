# Critique — Round 0 → Round 1 (revision applied)

**Article:** Your Builder Hung a 200-CFM Hood Over a 60,000-BTU Gas Range. The Air Math Doesn't Work.
**Journalist:** Priya Greenwood
**Round:** 0 initial draft → revised once for hard-gate compliance → scored as Round 1

## Hard gates (final, all PASS)
- Em dash count (regex `grep -o '—'`): **0** (limit 3) — PASS
- "The" sentence starters: **8.5%** (limit 15%) — PASS
- Banned phrases: **0** — PASS
- Sentence rhythm: variance **216.5** (≥200), short **10.8%** (≤15%), long **60.0%** (≥15%) — PASS

Revision history: initial draft failed rhythm (variance 150.6, short 26.2%) and "The" starters (25.6%). Two revision passes: (1) merged choppy fragments, rewrote The-starters, killed "deep dive"; (2) added punches (Read that twice. Simple division. Ugly answer. Five to one. The code loses. Ever.) and extended mediums into 45-57w sprawlers. Round-trip edits verified against the file.

## Critic scores (/10)

### 1. General Editor — 8.8
Cold open lands (the 200-CFM hum vs 58,000 BTU). The worksheet section is the spine of the piece and earns its place early. Actionability is concrete, not vibes: vented hood sized to BTU, rough-in 240V/50A, use the hood. Deduction: the AGA counterargument section runs long relative to the rest, and the closing limitations paragraph is dense. Structure holds.

### 2. Voice Coach — 8.7
Priya's register is right: evidence-based urgency, health data tied to the home, comparisons that bite (five to one, the code loses). No banned phrases, no AI reveal formula, no throat-clearing opener. Rhythm gate passes with real variance. Minor: "Read that twice" after the second paragraph is a slightly cute device, but it earns its emphasis.

### 3. Ethics Reviewer — 9.0
The AGA position is stated at full strength and conceded where fair (modeling assumptions, older epidemiology), then answered with the stronger 2024 evidence. No health claim is made without attribution and a caveat. The article's actual ask (vent properly, wire for induction) is modest relative to its evidence — it does not call for bans. Limitations section is a genuine accounting, not hedging.

### 4. Social/Shareability — 8.8
Headline is specific, second-person, and confrontational in the house style. Shareable stat nuggets: 600 CFM needed vs 200 installed; benzene above secondhand-smoke benchmarks; recirculating hoods exhaust 0%; $1,500-3,000 retrofit vs low hundreds at rough-in. Pull-quote ready.

### 5. Legal Accuracy — 8.9
Code claims are carefully scoped: ASHRAE 62.2 recirculating-hood rule and 5 ACH fallback cited via the Building Code Forum thread quoting the standard; IRC makeup-air trigger above 400 CFM stated as "codes generally require"; Title 24 HVI requirement cited. AGA rebuttal document linked directly. No claim about what code "requires" that the sources don't support. The 100 CFM/10k BTU rule is explicitly labeled industry convention, not code.

### 6. Research Rigor — 9.0
Original contribution is real: the CFM worksheet (50-60k BTU → 500-600 CFM vs 160-250 builder hoods), the code-vs-physics 5× disagreement (108 CFM fallback vs 500+ CFM rule), and the induction optionality economics (rough-in vs retrofit). Methodology is shown with inputs. Limitations section names what wasn't proven (rule-of-thumb rigor, mortality extrapolation, contested PAF, no national recirculating-hood dataset, regional cost variance). 7+ primary sources inline: Kashtan 2024 (Science Advances), Lebel 2022 (ES&T), Gruenwald 2023 (IJERPH), PMC critical review, ASHRAE 62.2, Angi cost data, AGA rebuttal.

### 7. Data Presentation — 8.6
Numbers are specific and sourced ($4,500/yr societal cost per gas household, 19,000 deaths with author caveat, 12.7% vs 3.8% PAF range presented honestly). The worksheet reads as prose rather than a visual table — acceptable for the story template but slightly less scannable than a table would be. No misleading precision.

## Verdict
All 7 critics at 8.5+. All hard gates pass. **→ SHIP.** Average: 8.83.

Queue note: one article already published 2026-09-15 PT (one-per-day rule); queue tail is 2027-01-06. → SHIP_READY with ship_after 2027-01-07, article number 866.
