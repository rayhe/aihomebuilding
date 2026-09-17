# Research: AI Deck Ledger Fastener Vision Audit (Article #887)

**Topic:** AI-assisted visual audit of deck ledger board connections (fastener count/spacing, flashing, rot) from under-deck phone photos, cross-referenced against InterNACHI's ledger fastener spacing rule and IRC R507.
**Journalist:** Jake "Jackhammer" Kowalski (construction tech)
**Date:** September 17, 2026
**Kill test:** PASS. Helps a homebuyer demand a real ledger inspection before closing, and helps a builder/retrofitter price the fix. Decks are the #1 structural failure mode in residential.

## Primary sources

1. **InterNACHI "How to Perform Deck Inspections" course** (education.nachi.org): "The most common cause of deck collapse is when a ledger pulls away from the band joists of homes and buildings." Ledger fastener spacing rule of thumb: on-center spacing (inches) = 100 / joist length (feet). Lag screws/bolts staggered vertically, min 2" from top/bottom, 5" from ledger ends. If positive connection cannot be verified, deck must be freestanding.
   - https://education.nachi.org/coursemedia/course-61/documents/InterNACHI%20How%20to%20Perform%20Deck%20Inspections%20Course.pdf
2. **Dave Kile / HomeImprovementAndRepairs guest post** (citing InterNACHI): estimated 90% of deck collapses result from ledger board connection failures; vast majority from improper fastening (16d nails instead of lag screws/through-bolts).
   - https://www.homeimprovementandrepairs.com/post/deck-ledger-installation-mistakes
3. **CPSC via AAA** (magazine.northeast.aaa.com, 2025): collapses and failures of decks, porches, balconies caused ~2,900 injuries 2016-2019 per most recent CPSC research; average deck lifespan ~15 years.
   - https://magazine.northeast.aaa.com/daily/insurance/homeowners-insurance/backyard-deck-safety-hazard/
4. **InterNACHI / calljed.com**: 45 million decks in North America, less than half safe.
   - https://www.calljed.com/deck-or-porch-collapse.html
5. **ProBuilder "Getting Deck Ledgers Right"** (ICC survey context): decks named 2nd biggest offender for flashing violations; even a well-bolted deck pulls away if the ledger rots. Flashing must integrate with WRB; Z-flashing atop ledger; peel-and-stick membrane behind ledger seals around fasteners.
   - https://www.ProBuilder.com/construction/quality-matters/article/55210575/getting-deck-ledgers-right
6. **Spectora AI tools** (Business Wire, June 2026): AI Report Assist matches spoken observations + snapped photos to inspector-approved comment templates; early-access inspectors saving ~25% time per inspection, finishing reports on site.
   - https://www.businesswire.com/news/home/20260609736918/en/Spectora-Introduces-New-AI-Tools-Reimagining-How-a-Home-Inspection-Get-Done
7. **Paraspot AI** (Inman tech review, Nov 2025): mobile-first inspection app; AI transcribes audio narration, identifies common defects, categorizes images/video by room; reports in minutes.
   - https://www.inman.com/2025/11/17/paraspot-ai-sees-the-future-of-property-inspection-tech-review/
8. **Hover interior/exterior claims platform** (Business Wire, Apr 2025): phone-scan guided capture producing photo-realistic 3D models with spatially-tagged photos; 22B sq ft digitized; used by carriers/adjusters for consistent remote documentation.
   - https://www.businesswire.com/news/home/20250402052052/en/Hover-Expands-Claims-Automation-Platform-with-Comprehensive-Interior-Solution-Including-Virtual-Walkthrough-Technology
9. **InterNACHI forum (nachi.org) inspector discussions**: 16d nails + no flashing repeatedly observed in the field; ledger separation accounts for ~90% of deck collapses; through-bolts with washers preferred over lag screws when rim-joist backside is accessible.
   - https://forum.nachi.org/t/deck-inspections-course/61627?page=231

## Original contribution (novel calculation)

**The 100-rule fastener deficit.** InterNACHI's rule: fastener spacing (in) = 100 / joist length (ft).
Worked example: a 16-ft-wide deck with 12-ft joists needs fasteners every 100/12 = 8.3" on center, staggered top/bottom. Ledger length 192" / 8.3" = 23 fasteners minimum. A typical field photo of an older deck shows 6-8 lag screws (or worse, nails). Deficit: ~65-75% under-fastened. This turns "looks fine" into a number a buyer can put in an inspection objection.

**Retrofit cost math.** Simpson Strong-Drive SDWS structural screws (~$1.50-2.50 each in boxes of 50) or 1/2" through-bolts; DIY material for a 23-fastener ledger correction ~$60-120 + peel-and-stick membrane behind the ledger (~$40/roll). Pro retrofit: ledger re-flash + structural screw re-fastening runs $1,200-2,800 on an accessible deck (one day of carpentry). A full ledger replacement with rot repair: $4,000-9,000. A deck collapse lawsuit: six figures. The inspection costs $0 extra if you crawl under with a phone flashlight.

## AI two-sided

- **Builder/buyer side:** Spectora AI Report Assist auto-generates ledger-defect narratives from photos + voice notes; Paraspot flags visible defects and categorizes by component; Hover lets a remote structural reviewer walk the under-deck model and count fasteners without crawling. General vision models can run the 100-rule on a photo: count visible fasteners, measure spacing against a reference (ledger is 1.5" thick known dimension), flag nail-only attachment, missing flashing, end-distance violations (<5" from ends).
- **Limits:** vision cannot confirm what it cannot see. Sheathing, siding, or a finished basement ceiling hides the rim-joist backside; through-bolt verification needs interior access. Wood species, moisture content, and band-joist integrity (all inputs to real fastener capacity) are invisible to a camera. AI counts what is visible; a PE still signs the repair. Also: rot behind flashing is the failure nobody's photo catches until the ledger is pulled.

## Counterargument (full strength)

Deck collapses are rare per-deck events: 2,900 injuries over four years across 45M decks is ~1.6 injuries per 100,000 decks per year. Most decks never collapse. Mandatory re-inspection regimes would cost billions to chase a risk that, per deck, is small. And AI photo audits create false positives: an inspector counting 8 screws on a 12-ft joist deck may not know the house side is a freestanding double-beam (no ledger at all), or that the visible screws are supplements to hidden through-bolts. A vision model that cries wolf on safe decks burns trust with sellers and agents fast.

## Limitations

- Fastener counts from the field photo are illustrative; no third-party audit of "typical 6-8 screws" exists (drawn from inspector forum reports, which skew toward problem decks).
- Retrofit cost ranges are 2026 US national estimates from contractor pricing guides, not quotes; union/coastal markets run 30-60% higher.
- CPSC's 2,900 figure (2016-2019) is the most recent published collapse/failure injury research cited; newer national figures not located.
- AI fastener-counting accuracy claims are prospective, not benchmarked; no published precision/recall study for ledger fasteners in under-deck photos exists.

## Costs / actionable takeaways

- Buyer: at inspection, ask the inspector to photograph the ledger from underneath, count fasteners, apply the 100-rule (100 / joist length in ft = required spacing in inches), and check for flashing + nail-only attachment. Costs nothing.
- Owner of a 15+ year old deck: NADRA recommends inspection every 3 years (annually for rentals). Retrofit re-fastening: $1,200-2,800 pro.
- Builder: structural screws (SDWS-class) + Z-flashing + membrane behind the ledger is ~$150 in materials on a new deck and eliminates the #1 failure mode.
