# Research: AI Punch Lists — Walkthrough Video to Trade-Sorted Defect List

**Slug:** ai-punch-list-video-defect-detection-2026
**Journalist:** Jake Kowalski (Construction Technology)
**Article #:** 766
**Date:** 2026-09-03

## Angle
The final walkthrough is the most expensive 45 minutes of a residential build: whatever gets written down gets fixed on the builder's dime, whatever gets missed becomes a warranty callback. New tools turn a narrated smartphone video into a trade-sorted punch list automatically, and computer-vision research shows 90%+ precision on defect detection. The question for builders: does the AI catch what tired human eyes walk past, or does it just generate a longer list of scuffs nobody will fix?

## Kill test
Does this help someone building or buying a home? Yes. Punch lists gate final payment and the 1-year warranty clock. A buyer who documents 40 defects instead of 12 has leverage; a builder who catches them pre-closing avoids callbacks that cost 1-2% of sales.

## Primary sources

### 1. WalkPunch launch (EIN News press release, ~Apr 2026)
- URL: https://tech.einnews.com/pr_news/906507117/walkpunch-launches-ai-powered-punch-list-tool-that-converts-job-site-videos-into-trade-sorted-action-items
- Company: Archieboy Holdings, LLC. Product converts job-site walkthrough videos into AI-generated, trade-sorted punch lists.
- How it works: user uploads smartphone video; platform transcribes narration, extracts punch items, assigns trades, captures supporting frames, generates vendor-ready PDFs.
- Pricing: Free (1 project, 1 walkthrough, 10 punch items); Starter $29/mo (unlimited projects/walkthroughs/items, email punch-item PDFs to vendors); Pro $79/mo (adds PDF ZIP grouped by trade). Stripe billing, 5-day grace period.
- Also positioned for warranty follow-up visits: "a quick video walkthrough can replace the need for a formal site visit report."
- Note: vendor press release, no independent verification of extraction accuracy.

### 2. WarrantyWeek — New Home Builder Warranty Report (Apr 2025)
- URL: https://www.warrantyweek.com/archive/ww20250417.html
- 27 US-based homebuilders paid $1.071 billion in warranty claims in 2024 (-2% vs 2023), per SEC filings/annual reports.
- 2024 movers: Hovnanian claims +45% ($22M to $32M); Meritage +22% ($21M to $25M); Toll Brothers -33% ($75M to $50M); Dream Finders -27%; Cavco -24%.
- Methodology: claims paid, accruals, and reserve balances extracted from company financial statements; sales metrics are homes sold and home-sale revenue only.

### 3. BuilderOnline — "Callbacks Revisited" by Joe Stoddard
- URL: https://www.builderonline.com/article/callbacks-revisited_o
- Informal survey of large builders who track callbacks: average annual hard cost 1-2% of sales; typical soft (administrative) cost ~$500 per home.
- Arvida (Florida) case: $415M sales, $3.7M warranty service budget; ~20,000 warranty requests / ~40,000 line items in one year; average line-item cost $98.05 (down from a decade prior via in-house warranty technicians).
- Consultant quote: warranty responsibility "usually passed on to trade partners, or swept under the rug by the construction division and not tracked."

### 4. SafetyCulture — Top 7 Punch List Software of 2026
- URL: https://safetyculture.com/apps/punch-list-software
- Market pricing for incumbent (non-AI) punch list tools: SafetyCulture $24/seat/mo, Fieldwire $54/user/mo, Bluebeam $260/user (annual billing), Autodesk Construction Cloud / Raken / Trimble contact-for-pricing.
- Puts WalkPunch's $29/mo flat unlimited in context: priced like a single Fieldwire seat.

### 5. Sityos AI whitepaper — "Cut Construction Punch List Time 70% With AI Defect Detection" (Jul 2026)
- URL: https://www.sityos.com/sites/default/files/documents/2026-07/ai-punch-list-defect-tracking-spacecapture-procore-n8n_en.pdf
- Vendor whitepaper (Sityos AI, "AI on Autopilot"): SpaceCapture AI defect detection feeding Procore punch items via n8n, Slack/email sub notifications with annotated photos.
- Claims 70% punch-list time cut. VENDOR CLAIM, no independent verification.
- Useful honest detail: recommends batching minor defects into a single weekly punch item per trade "to prevent notification fatigue that causes subs to start ignoring the channel" — an admission that AI detection over-flags.

### 6. dev.to — "How I built an AI bot for electrical inspection" (Aug 2026)
- URL: https://dev.to/sergius_tech/-how-i-built-an-ai-bot-for-electrical-inspection-5eeg
- Practitioner account: 15-year electrical construction veteran built a Telegram bot with YOLOv8 + FAISS on 500+ labeled violation photos; detects missing cable tags, improper earthing, unsealed penetrations, untrimmed tray studs, rust, missing single-line diagrams.
- Cost: $7-25/mo cloud hosting. No app to install, no training needed.
- Grassroots evidence that phone-photo defect detection works for specific, repeatable defect classes.

### 7. Academic: vision-based defect detection accuracy
- MDPI Sensors 2018 (Cha et al.), https://www.mdpi.com/1424-8220/18/10/3452/xml : CNN crack classifier on 40 on-site concrete images: 92.35% precision, 89.28% recall (pixel level); UAV video: 88% precision, 81% recall at 3 fps.
- MDPI Applied Sciences 2024 (improved Mask R-CNN), https://www.mdpi.com/2076-3417/14/10/4148/xml : precision 95.6%, recall 95.8% across cracks, spalling, exposed bars, efflorescence, voids.
- Springer Advances in Bridge Engineering 2026 (YOLOv8 on prestressed beams), https://link.springer.com/article/10.1186/s43251-025-00194-0 : precision 94.8%, recall 92.3%, 32.7 fps.
- CAVEAT for the article: these are structural-concrete defect datasets. Residential finish defects (paint holidays, caulk gaps, misaligned tile, drywall seams) are a different visual domain with far less labeled training data. Accuracy does not transfer automatically.

## Skepticism file
- WalkPunch's extraction accuracy is unverified; press release gives no precision/recall numbers.
- Sityos's "70%" is a vendor whitepaper number.
- Academic 90%+ numbers are on concrete cracks, not finish carpentry. A model trained on spalling will not flag a proud nail pop.
- False positives have a real cost: sub notification fatigue (Sityos's own whitepaper admits it), and disputed items slow closeout.
- Liability gap: if the AI misses the leaking shower pan that becomes a $30K warranty claim, who owns it? The builder signed the walkthrough, not the model.
- Punch lists are negotiation documents, not just defect lists. Buyers use them as leverage; builders triage them by cost. Automating generation does not automate the negotiation.
- Incumbent tools (Fieldwire, Procore) already do photo punch lists manually; the AI delta is extraction + trade-sorting, not documentation itself.

## Actionable takeaways (for the article)
- Custom builder (10-25 homes/yr): WalkPunch Starter at $29/mo is priced like half a Fieldwire seat. Break-even is one avoided callback trip per quarter (Arvida's $98/line-item math says a single avoided truck roll covers months).
- Do a narrated 10-minute video walkthrough, not silent: the transcription is what assigns trades correctly.
- Batch cosmetic items per trade weekly; send structural/MEP items immediately and separately.
- Keep a human sign-off: AI generates, superintendent approves. Never let the punch list go straight to subs unreviewed.
- Buyers: bring your own video walkthrough before closing. The builder's list and your list will differ, and yours is leverage.
- Do not use AI punch tools as a substitute for the 1-year warranty inspection; use them to make that inspection shorter.
