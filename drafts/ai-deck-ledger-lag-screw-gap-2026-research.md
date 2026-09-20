# Research: AI Deck Inspection & the Ledger-Board Fastener Gap
**Article #920 | Slug:** ai-deck-ledger-lag-screw-gap-2026 | **Journalist:** Jake Kowalski | **Date:** 2026-09-20

## Kill test
Does this help someone building or buying a home? YES. A buyer can demand a deck-specific inspection addendum; a builder/remodeler learns the exact code-required fastener schedule (IRC 2021 R507) and the cheapest AI-assisted tools that flag ledger defects. One $225 inspection avoids a $15K rebuild and a collapse that injures 75%+ of occupants (NADRA).

## The problem
- NADRA (2025): >60M decks in the US (50M residential, 10M commercial); ~30M are past their useful life and need replacement or repair. Older NADRA estimate: >40M decks 20+ years old, built before bolted-ledger codes.
- InterNACHI: ~45M existing decks, only 40% completely safe; ~90% of deck collapses occur from separation of the house and the deck ledger board. 2M decks built/replaced annually in North America.
- McCray Lumber (citing NADRA): >40M decks 20+ years old; improper attachment to the house is the most common cause of collapse; collapses happen fast with no warning; >75% of people on a collapsing deck are injured or killed.
- Archadeck of Charlotte: ~6,000 people injured in deck collapses each year; average wood deck lifespan is 10 years with regular maintenance; Sept 2019 Jersey Shore collapse injured 22 people.
- 3 Brothers Decking (citing InterNACHI): 60% of all decks need repairs; 90% of collapses start when the deck disconnects from its mounting point. Don Bender (WSU Composite Materials and Engineering Center): "Many decks collapse before they reach their code-required design load... we're lucky that we don't load the decks to their capacity."
- InterNACHI detail: NO correlation between deck failure and (a) whether a building permit was issued, (b) whether built by homeowner or pro. Slight correlation with age. Many more injuries from rail failure than from full collapse.

## The code (primary source: IRC 2021, Tables R507.9.1.3(1) and (2))
- Ledger must be fastened with 1/2"-diameter lag screws or through-bolts, staggered vertically, 2" minimum from top edge, 3/4" minimum from bottom edge, 2" minimum from ends (R507.9.1.3(2)).
- On-center spacing per R507.9.1.3(1) (older R507.2 values, still widely adopted): for 14'1"-16' joist span, 1/2" lag screws at 11" on-center; 16'1"-18' span at 10". Hot-dip galvanized or stainless steel required.
- Flashing mandatory per R703.4: ledgers shall be flashed to prevent water from contacting the house band joist. No flashing = guaranteed rot path.
- Nails are NOT a listed ledger-to-band-joist connection. A nail-only ledger has zero code-compliant fasteners regardless of count.

## Original contribution: the fastener audit
Take a typical 16-ft-long ledger board with a 14-16-ft joist span (the most common residential deck dimension band).
- Code requirement: 192 inches / 11 inches on-center = 17.45 -> **18 lag screws minimum**, 1/2" diameter, staggered rows, hot-dip galvanized, plus flashing.
- Typical pre-code reality (InterNACHI inspector reports): the ledger is held on by a row of 16d nails, no flashing. Code-compliant fasteners present: **zero**.
- The audit math: 18 code-required bolts vs 0 present. Each missing bolt is one more piece of pull-out capacity the deck never had. A 2,500-lb crowd of 16 adults at a summer cookout (~ the rated 40 psf live load on a 16x12 deck = 7,680 lbs total) hangs entirely off the ledger connection. With nails, failure is not a matter of if but of when the withdrawal resistance of a rusted 16d nail gives out.
- Inspection-backlog math: 30M past-useful-life decks (NADRA 2025) vs ~2M built/replaced per year (InterNACHI) = a 15-year replacement cycle, roughly matching the 10-15 year wood deck lifespan. The industry is exactly one deck lifetime behind.
- Economics: basic deck inspection $150-300, detailed $300-800 (DrBalcony). Structural engineer $200-1,500. New deck $4,500-18,000 at $30-60/sqft (Angi). Repair materials $3-45/sqft. Ledger retrofit (add through-bolts + flashing to an existing deck) runs a few hundred dollars in hardware and half a day of labor - the cheapest structural insurance in residential construction.

## The AI tools
- Palmtech 11 (Porch Group, Feb 2026): AI Image Defect Detector automatically identifies potential defects in inspection photos and generates report comments. 25+ years in inspection software.
- Spectora (June 2026): AI Report Assist - voice + photo to template matching, early-access inspectors saving ~25% of time per inspection; AI Scheduling Agent for missed calls.
- Drone + thermal: drone roof/deck add-ons from $200 (Inspection Services of Central Virginia fee schedule). Thermal can spot moisture intrusion behind ledger/flashing before rot is visible.
- What AI can actually do for decks: rust-streak pattern recognition on ledger photos, nail-vs-bolt head identification from close-up shots, railing baluster spacing measurement from photos, moisture/thermal anomaly flagging.
- What it cannot do: the NADRA preliminary ledger check requires spotting "ledger board attached with approved screws and bolts vs nails only" - but on most decks the ledger is hidden behind siding, decking, or skirting. No camera sees through a skirt board. The pick/probe rot test (ice pick or flat screwdriver, 1/4" penetration = decay) is a physical test. AI flags photos; it does not probe wood.

## Strongest counterargument
Photo AI detects what it can see, and the most dangerous deck defects are the ones you cannot see. The ledger hides behind the house's siding and the deck's own framing. An AI that auto-labels "ledger looks OK" from a photo of skirting is worse than no AI at all - it manufactures confidence. The InterNACHI data also undercuts the easy fix: there is NO correlation between deck failure and whether a permit was issued, so "just get it inspected by the city" does not solve this. Rail failures injure more people than full collapses, and rail posts held by surface-mounted brackets (not through-bolted) fail under a 200-lb lateral load the code requires. The technology story here is narrower than the marketing: AI is a good triage camera, not a structural engineer.

## Limitations
- The "90% of collapses from ledger separation" figure is an InterNACHI industry estimate, not a peer-reviewed study; there is no federal NEISS product-code-specific count for ledger-separation collapses published by CPSC.
- Injury counts vary by source: ~6,000/yr (Archadeck citing NADRA) vs 33,000 over four years (~8,250/yr) from industry data cited via activerain/thebaerfirm. Methodology differs; presented as reported ranges.
- Palmtech/Spectora defect-detection accuracy claims are vendor-reported; no independent audit of AI image defect detection on decks exists.
- Fastener spacing values quoted from IRC 2021 Table R507.9.1.3(1)/R507.2 as adopted by reference documents (SBCC Washington, mybuildingpermit.com); local amendments vary.
- Drone add-on pricing ($200+) from a single inspector's fee schedule; thermal drone deck services not yet standardized.
- InterNACHI's 45M vs NADRA's 60M deck-count estimates differ; both cited with attribution. Newest NADRA (2025) used as the lead figure.

## Actionable takeaways (for the article)
1. Buying a home with a deck: demand a deck-specific inspection ($150-300 basic). Ask the inspector to photograph the ledger fasteners from underneath - if they see nail heads instead of hex-head lag screws or bolt heads with washers, walk away or price a ledger retrofit.
2. Building new: verify 1/2" lag screws at 11" on-center (14-16 ft span), staggered rows, flashing per R703.4. Photograph it before the decking goes down - the ledger becomes uninspectable afterward.
3. Existing deck: run the NADRA checklist annually (bolt heads vs nails, rust streaks, spongy feel at the ledger, flashing present). $300 in hardware + half a day retrofits the most common failure point in residential structures.
4. AI tools: Palmtech 11 defect detector and Spectora Report Assist speed up documentation but do not replace the probe test. Use them for photo triage, not verdicts.

## Sources
1. NADRA "Build Safer Decks in 2025" - https://www.nadra.org/blog/build-safer-decks-in-2025 (60M decks, 30M past useful life)
2. McCray Lumber "May is National Deck Safety Month" (NADRA data) - https://www.mccraylumber.com/may-is-national-deck-safety-month-how-safe-is-your-deck/ (40M decks 20+ yrs, >75% injured/killed)
3. InterNACHI deck inspection course materials - https://www.slideshare.net/slideshow/internachi-home-inspector-presentation-deck-safety/36653714 (45M decks, 40% safe, 90% ledger separation)
4. InterNACHI forum threads - https://forum.nachi.org/t/deck-inspections-course/61627?page=532 (90% ledger stat, permit/no correlation)
5. 2021 IRC Insert Pages, SBCC Washington - https://sbcc.wa.gov/sites/default/files/2023-05/2021%20IRC%20Insert%20Pages%201st%20Printing_0.pdf (Table R507.9.1.3(1))
6. mybuildingpermit.com Tip Sheet 5 Basic Decks - https://mybuildingpermit.com/sites/default/files/documentation/Tip%20Sheet%205%20Basic%20Decks_0.pdf (Table R507.2, 11" spacing)
7. Palmtech 11 launch (EIN Presswire, Feb 2026) - https://uspolitics.einnews.com/pr_news/892128565/palmtech-11-launches-smarter-ai-deeper-automation-and-personalization-for-home-inspectors
8. Spectora AI tools (Morningstar/Business Wire, June 2026) - https://www.morningstar.com/news/business-wire/20260609736918/spectora-introduces-new-ai-tools-reimagining-how-a-home-inspection-gets-done
9. Archadeck of Charlotte deck safety - https://www.archadeck.com/charlotte/resources/blog/2020/may/time-to-inspect-your-deck-may-is-deck-safety-mon/ (6,000 injuries/yr, 10-yr lifespan, 22 injured Jersey Shore 2019)
10. DrBalcony deck inspection cost - https://drbalcony.com/how-much-does-a-deck-inspection-cost/ ($150-300 basic, $300-800 detailed)
11. Angi deck repair/replacement cost 2026 - https://www.angi.com/articles/how-much-does-it-cost-repair-deck.htm?entry_point_id=33797117 ($4,500-18,000 new deck)
12. 3 Brothers Decking deck safety statistics - https://3brothersdecking.com/resources/deck-safety-statistics/ (60% need repairs, Don Bender WSU quote)
