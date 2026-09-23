# Critique: Your 80-Gallon Heat Pump Water Heater Is Sized for a Household You Don't Have
Slug: `hpwh-first-hour-rating-right-size-2026` | Article #948 | Priya Greenwood
Round 1 (revision pass driven by hard-gate failures on first draft: "The" starters 20.9%, rhythm variance 114). Self-assessed per pipeline convention.

## Hard gates (post-revision, regex/script are source of truth)
- Em dashes: `grep -o '—' | wc -l` = **0** (limit 3) — PASS
- "The" sentence starters: **7.9%** (limit 15%) — PASS
- Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack): **0** — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **208.9** (>=200), short **13.8%** (<=15%), long **51.7%** (>=15%) — PASS

## Critic scores (/10)
1. **General Editor — 8.8.** Cold open lands (installer dialogue, then the rule date as the turn). Arc is clean: habit, metric, audit, federal context, software, steelman, limitations, takeaways. The 72-gallon demand model paragraph is the densest stretch; the method box rescues it. Close ("Size the morning, not the tank") earns its punch.
2. **Voice Coach — 9.0.** Priya register holds: energy data tied to utility bills ($550/yr, $5,600 lifetime), comparisons over preaching, urgency without scolding. No banned phrases, no "inflection point" throat-clearing. Rhythm passes with real spread (2-word punches to 48-word builds).
3. **Ethics Reviewer — 8.8.** The installer-steelman paragraph is genuinely fair (callback economics, physics of slow recovery). No vendor favoritism beyond citing Rheem specs as data. Limitations are explicit, not buried.
4. **Social/Shareability — 8.7.** Headline is specific and accusatory in the good way ("sized for a household you don't have"). Quotables: "Seventeen gallons. Cast in steel. Billed forever." / "An oversized heat pump water heater cannot save energy. It can only lose more of it while waiting." Loses half a point: the DOE-rule section is necessarily dense for skimmers.
5. **Legal Accuracy — 8.8.** DOE rule facts (May 6, 2024 final rule; May 6, 2029 compliance; >35-120 gal HPWH mandate; 20-35 gal FHR cap at 50 gal / 135F max; 40-gal re-rating; gas instantaneous excluded) sourced to DOE press release + manufacturer regulatory notification, both linked. No legal claims beyond the rule's text.
6. **Research Rigor — 9.1.** Original contribution is real: the 17-gallon upsell audit (84-67 GPH within the same 3-5 person band) and the 37% standby-loss geometry are calculations nobody else ran. Methodology box states assumptions. Limitations name what's missing (street-price premium unverified, test-condition FHR, DOE savings assumptions). Counterargument at full strength (slow recovery physics, installer callback economics, unconnected smart units).
7. **Data Presentation — 8.8.** FEMP kWh ladder (826/984/3,437), Energy Star household table, FHR figures all woven into prose with units attached. Half-point off: the 50-vs-80 comparison would read even cleaner as a small table; prose carries it adequately.

**Average: 8.86. All 7 >= 8.5. All hard gates pass. -> SHIP_READY.**

## Revision notes (round 1)
- Rewrote 16 "The"-starting sentences/headings ("Your installer leaned...", "Put plainly, the canonical...", "DOE projects...", "In defense of the 80-gallon tank", etc.)
- Merged short fragments into long builds (dialogue merge, stakes merge, takeaway bullets restructured to colon-led single sentences)
- Added variance spread: 3 ultra-short punches ("Seventeen gallons. Cast in steel. Billed forever."), 2 40+ word sentences (steelman physics, closing)
- Variance 114 -> 208.9, short 16.8% -> 13.8%, The-starters 20.9% -> 7.9%
