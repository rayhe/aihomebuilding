# Research: The Conservatism Tax — AI Reads Your Geotech Report So Your Engineer Doesn't Default to 34 Piers
**Slug:** `geotech-report-conservative-pier-tax-2026`
**Journalist:** Frank "The Foreman" DeLuca (project management/operations)
**Article #:** 784
**Date:** 2026-09-05

## Angle (1-2 sentences)
Builders wait 3-4 weeks for a geotechnical report, then the engineer picks the most conservative foundation in the report because nobody has time to model the middle option. AI tools that read boring logs in minutes make the expensive default answerable — the spread between foundation types on identical soil is a five-figure "conservatism tax."

## Self-challenge
Is this the best use of the cycle? Recent runs covered foundations from other angles (#781 concrete maturity sensors, #728 foundation carbon). This one is different: it's about the *decision process* — geotech reports as a schedule bottleneck and liability shield — not the material. The operations angle fits DeLuca. The Austin video (#784-adjacent) shows foundation bids ranging $25K to $130K, which is exactly the conservatism-tax phenomenon. **Verdict: proceed.**

## Kill test
Does this help someone building or buying a home? Yes. Foundation is 11% of construction cost (NAHB) and the type decision happens once, on one report, early in the project — exactly where a builder or owner can intervene with questions and save five figures.

## Primary sources (7)

1. **HUD Cityscape 25(1), ch.10 — "Residential House Foundations on Expansive Soils in Changing Climates"** (https://www.huduser.gov/Portal/periodicals/cityscape/vol25num1/ch10.pdf). Cites ASCE: one in four residences in the continental US has experienced disturbance from expansive soils; yearly damages to buildings and infrastructure exceed $15 billion, more than twice all other natural disasters combined (Jones and Jefferson, 2012). Dallas example: 120 foundation repair companies listed in the phonebook vs 15 firms doing residential foundation design.
2. **Nature Scientific Reports (2022), sea-level-rise foundation study** (https://www.nature.com/articles/s41598-022-18467-3). Independent confirmation: expansive soils cause ~$2.3B in building damages and ~$15B in building+infrastructure damage yearly in the US.
3. **NAHB Cost of Construction Survey** (https://www.nahb.org/blog/2023/03/60-percent-of-home-sales-price-goes-to-construction-costs). Foundations = 11.0% of construction costs; total construction $392,241 of average $644,750 sale price (2022). Foundation share of a $450K home ≈ $29,700.
4. **Aldoa AI — AI co-pilot for geotechnical teams** (https://www.aldoa.com/aldoa-ai-ai-co-pilot-for-geotechnical-engineering-and-materials-testing-teams). Trusted by 100+ organizations; generates boring logs, compaction reports from field data up to 10x faster; AI chat retrieval across field reports and lab results.
5. **RSLog OCR (Geoengineer.org)** (https://www.geoengineer.org/news/using-ai-rslogs-new-optical-character-recognition-ocr-feature-digitizes-paper-borehole-logs). AI OCR turns paper borehole log PDFs into database records — SPT data, strata descriptions, sample depths — learning templates as the user verifies them.
6. **UT Austin / T&UC Magazine: LLMs in geotechnical engineering** (https://tucmagazine.org/ai-knows-everything-but-understands-nothing-integrating-the-human-element-of-tunneling/). ChatGPT-4 read DIGGS files (geotechnical data interchange standard), interpreted CPT/SPT data; bearing-capacity math needed step-by-step guidance; good at interpreting structured data, shaky on unsupervised calculation.
7. **ORNL FLAT tool (Newswise)** (https://www.newswise.com/doescience/using-ai-to-construct-on-the-level). Machine-learning analysis of 360° laser scans locates uneven areas on concrete slabs; cut foundation measurement time by 90%+ at two housing developments.
8. **EVstudio: slab-on-grade with imported soils vs drilled piers, Texas** (https://evstudio.com/concrete-foundation-cost-savings-slab-on-grade-foundation-with-imported-soils-vs-drilled-pier-foundation/). Structural engineer's field note: three Texas PEMB sites with expansive soils; drilled piers go through the active zone into stable soil; slab-on-grade with imported fill is the cost-competitive middle option — "half of contractors believe piers are cheaper, the other half believe the opposite."
9. **Geotechnical report costs** (https://www.angi.com/articles/geotechnical-report-cost.htm, https://engineerfix.com/how-much-does-soil-testing-for-construction-cost/). Residential borings + report: $1,000–$3,500 typical; full geotech report $1,000–$5,000.
10. **Fine Homebuilding: Texas foundation ladder** (https://www.finehomebuilding.com/forum/foundation-types). Good (cheapest): structural/reinforced monolithic slab with moisture-maintenance instructions. Better: post-tension slab. Best/most expensive: structural slab with piers — 12/36 drilled-and-belled piers to 8–10 ft bearing soil, 4–5 #5 rebar each.
11. **Austin builder video, 2026 planning ranges** (https://www.youtube.com/watch?v=Dcfcba-W25U). Real bids: monolithic slab → post-tension → stem wall (one $130K reveal) → pier and beam → deep piers → basement. Texas slabs $5.50–$8.00/sq ft (CountBricks, https://www.countbricks.com/post/texas-concrete-slabs-guide).
12. **US Forest Service FPL-RP-664, "Cost and Time Study for Constructing Raised Wood Floor Systems"** (https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo82783/pdf/GOVPUB-A13-PURL-gpo82783.pdf). Government cost study noting that in parts of Texas, post-tension slab foundations are required to resist expansive-soil damage.

## The core data (for the conservatism-tax calculation)

Typical Texas single-family home, 2,000 sq ft footprint:
- Post-tension slab: $5.50–$8.00/sq ft → **$11,000–$16,000** (midpoint ~$13,500)
- Structural slab with drilled piers: add 25–35 piers × $500–$1,000/pier → **$12,500–$35,000 extra** (midpoint ~$23,750)
- Middle option (slab-on-grade with imported/select fill, per EVstudio): roughly **$5,000–$10,000 above base slab** (midpoint ~$7,500)

Conservatism tax = pier option minus middle option ≈ $23,750 − $7,500 ≈ **$16,250** on the midpoint case. Against a $3,500 geotech report, the report pays for itself ~4.6x if it unlocks the middle option. All inputs disclosed; midpoints are illustrative, regional bids vary widely.

Timeline context: geotech study 2–4 weeks mobilization + lab; engineers pick conservative options partly to avoid the delay of redesign. Aldoa claims 10x faster report generation; RSLog OCR digitizes legacy logs.

## Counterargument (strongest)
The conservative foundation is not a tax, it's insurance. Expansive soils damage 1 in 4 homes and cost the country $15B a year; the engineer who specs 34 piers carries the liability, and one $40K foundation repair erases any upfront savings. Builders are not over-insured — homeowners are just under-informed about the actual risk the engineer's conservatism is pricing in. Additionally: AI reading a report is not the same as AI warranting the soil. Liability stays with the stamped engineer, and no tool currently takes that on.

## Skepticism notes
- Aldoa/RSLog automate the *report-writing* step, not the foundation *selection*. The gap between "reads the report fast" and "prices the middle option" is a human engineer, and the AI tools don't change who holds the stamp.
- RSLog OCR handles alphanumeric extraction; graph-data extraction is a future version.
- UT Austin testing shows LLMs still need step-by-step guidance for bearing-capacity math — they're interpreters, not calculators.
- No published case study shows an AI-read geotech report changing a foundation type selection and saving money on a specific home. The mechanism is plausible but unverified at the individual-project level.

## Limitations (for the article)
- The conservatism-tax number is built from contractor-reported ranges, not a controlled sample; it is a bounding exercise, not a finding.
- No third-party verification of Aldoa's "10x faster" claim.
- Foundation costs vary wildly by market (Austin bids vs. Houston bids vs. Oklahoma bids).

## What the reader does with this (actionable)
1. Order the geotech study *before* the plan review is done, not after — it's the critical path nobody manages. Two borings + lab = $1,500–$3,500.
2. When the engineer recommends the most expensive of the report's options, ask for the middle option priced. The report almost always contains 2–3 options; most owners only ever see one price.
3. If your lot has USDA Web Soil Survey data showing moderate shrink-swell, say so at the first structural meeting — it reframes the conversation from "worst case" to "which case."
4. Get the engineer's foundation options in writing with per-option pricing. No comparison, no signature.

## Headline candidates
- "Your Geotech Report Sat Unread for 19 Days. You Paid for 34 Piers You Didn't Need."
- "The Engineer Spec'd 34 Piers. The Soil Needed 12."
- "Your Foundation Costs $43,000. The Middle Option Was $27,000."
