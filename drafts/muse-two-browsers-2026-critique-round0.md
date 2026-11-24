# Critique Round 0 — muse-two-browsers-2026 (Jake Kowalski)

**Date:** November 24, 2026, 03:15 PST
**Draft:** 2,361 words, hero JPEG verified (ffd8, 1920x1280)

## Hard gates (all verified by script, not by eye)
- **Em dashes:** 0 (gate: ≤3) — PASS
- **"The" sentence starters:** 6 of 92 sentences, 6.5% (gate: <15%) — PASS
- **Banned phrases:** 0 occurrences of "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "And it's not even close", "inflection point" — PASS
- **Sentence rhythm:** variance 235.4 (target ≥200), short sentences 10.6% (target ≤15%), long sentences 60.6% (target ≥15%) — PASS. Round-0 draft failed variance at 125.1; revision merged mid-length sentences into 30–52-word constructions and consolidated fragments. Fixed and re-verified.
- **Markup:** article-hero / article-container / article-body, bootstrap.min.css + print.css, no legacy story-page/story.css — PASS

## Critic scores

### 1. General Editor — 8.7/10
Cold open lands: 200,000 users before Meta said a word is the strongest fact in the piece and it opens the article. Structure is clean (remote browser, extension, what it sees, three numbers, which job, lookalikes, Poppy, checklist, accounting). Weakness: the rhythm revision pushed long sentences to 60.6% of the total, and two of the merged 50-word sentences (the controls paragraph, the data-disclosure paragraph) are heavy enough to slow a reader down. Acceptable for a deep dive, but the next revision should not merge further. The "Four steps" list is genuinely useful, not decorative.

### 2. Voice Coach — 8.8/10
Jake's voice is present throughout: short punches ("Sites block it.", "That is the news."), bar-talk directness ("Read that list again, slowly"), and no throat-clearing. No banned phrases, no "The" overuse, rhythm gate passes. Deduction: the rhythm fix cost some punchiness; several merged sentences now read like a policy memo inside a bar conversation ("which means your saved credentials and your history are not part of what Muse can see, even when it is working inside your browser"). The voice survives it, but barely in two spots.

### 3. Ethics Reviewer — 9.0/10
No hype, no self-congratulation, no vendor stenography. The piece states the extension's risk as plainly as its benefit, warns about lookalikes by name, and tells readers to log out of accounts before installing, which is advice that costs the product a signup. The counterargument (the extension is the riskier browser) is given full strength, not strawmanned. No ethical issues.

### 4. Social/Shareability — 8.6/10
Headline is specific and carries the article's thesis. "200,000 people were already using it before Meta said a word" is a pull quote that travels. The three numbers (1,587x growth, 2% adoption, 0.12% raters) are shareable on their own. Deduction: no single anecdote of a real person burned by either browser; the piece is analytical rather than human, which fits Jake's beat but costs some shareability.

### 5. Legal Accuracy — 9.0/10
Every factual claim traces to a cited source with a link. Dates are handled with explicit care (November 13 first sighting vs November 20 announcement; the November 12 wrinkle flagged, not resolved). No legal claims are made beyond what sources support. The data-disclosure list is quoted from the store listing, not paraphrased into something broader. No overstatements found.

### 6. Research Rigor — 8.8/10
Original contribution is real and shown with its math: 126 to 200,000 in 7 days is 1,587x (~28,550/day); 200,000 of 10M+ is ~2%; 237 raters of 200,000 users is 0.12%. Limitations are stated in a dedicated section, including the honest admission that the extension was not tested hands-on. Counterargument is full-strength. Deduction: the 10 million user figure is Meta's own claim, flagged as unaudited but still load-bearing for the 2% calculation; if Meta's number is inflated, the adoption share is understated, and the piece could say that in one sentence.

### 7. Data Presentation — 8.9/10
Numbers are presented with inputs and arithmetic visible, not dropped as bare claims. The rating-sample critique (one rater per 844 users) is the kind of check most coverage skipped. The comparison structure (remote vs extension, job by job) makes the data actionable. Deduction: no table; the which-browser-for-which-job guidance is prose, and a two-column comparison would scan faster. Minor.

## Verdict
All 7 critics at 8.5 or above. All hard gates pass. **Phase → SHIP.**
