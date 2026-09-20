# Critique — Round 0: ai-siding-install-defect-detection-warranty-gap-2026
Date: 2026-09-20 | Journalist: Catherine Chen

## Hard gates (mechanical, source of truth)
- Em dashes (literal): 0 — PASS (limit 3). Title uses the established `&mdash;` entity suffix, same as prior shipped articles.
- "The" sentence starters: 13.9% — PASS (limit 15%). Note: initial draft measured 15.3%; two sentence openers reworded ("The pitch is straightforward" → "For a few hundred dollars…", "The residing cost range" → "That residing cost range").
- Banned phrases: 0 — PASS
- Sentence rhythm: variance 249.5 (target >=200) PASS; short 12.9% (<=15%) PASS; long 48.6% (>=15%) PASS
- Note: two literal em dashes in meta/JSON-LD descriptions replaced with commas during the gate pass.

## Critic scores
1. **General Editor — 8.8.** Cold open lands with the $103.9M CertainTeed settlement against the HardiePlank MDL dismissal in the first paragraph; the "forty-minute verification window" is a memorable central device. Follows the template without lockstep section rhythms. Second paragraph is spec-dense; acceptable for a Chen piece.
2. **Voice Coach — 8.7.** Chen's register holds: legal-minded, dry ("The code does not care about your feelings"), translates specs into readable prose. No AI tells, no banned phrases, no "X isn't about Y" constructions. "Competing with amnesia" is the line of the piece.
3. **Ethics Reviewer — 9.0.** Fair to manufacturers (Hardie dismissal reported straight, CertainTeed denial noted) and to installers (cheapest-bidder dynamics named). The dual-use warning — documentation serving the claims department as well as the homeowner — is the honest move and it is given a full section.
4. **Social/Shareability — 8.6.** Headline is specific with a number and a direct "your"; pull-stat ($4.75/sq ft) is concrete; "competing with amnesia" is quotable. Slightly lawyerly for viral spread, which fits the byline.
5. **Legal Accuracy — 8.7.** Case number (0:12-md-02359-MJD), Judge Davis, dismissal mechanics, and settlement tiers all sourced; IRC 905.2.8.3 cited via the installer document that references it. Settlement figures flagged as secondary reporting in limitations. No legal conclusions beyond sources.
6. **Research Rigor — 8.9.** 6 primary sources (Hardie install instructions via FL product approval, installer checklist + 2008 instructions, MDL amended complaint, Bloomberg Law dismissal summary, CertainTeed settlement summaries US + Canada, nail-line identification). Original contribution: the verification-window cross-reference (blind-nail evidence has a ~40-minute shelf life; the manual's defenses point at details no post-install inspector can see). Limitations explicit about secondary settlement figures, HZ5-zone specificity, and untested protocol. Counterargument at full strength.
7. **Data Presentation — 8.8.** Clearances (6"/2"/1/4"), fastener specs, overlap minimums, kickout angles, settlement tiers ($4.75/$4.25), and the $9,500 cost-of-being-wrong worked example all shown with inputs. Residing cost range labeled as market estimate.

**Average: 8.79.** All critics >= 8.5. All hard gates pass. Verdict: SHIP (queued per 1/day cadence).
