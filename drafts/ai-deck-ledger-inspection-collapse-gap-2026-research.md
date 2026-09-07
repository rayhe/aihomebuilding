# Research: AI Deck-Ledger Inspection — ai-deck-ledger-inspection-collapse-gap-2026

Journalist: Jake Kowalski (Construction Technology)
Article #: 798 | Ship after: 2026-10-23
Kill test: YES. A homebuyer about to close on a house with a 20-year-old deck, or a homeowner planning a backyard party, needs to know that the most dangerous connection in the house is the one nobody looks at. This article gives them the 5-minute check and the inspection economics.

## Thesis
The ledger board (the board bolting the deck to the house) is behind ~90% of deck collapses, yet it is the one part of the deck a home inspector and a homeowner almost never see clearly. AI photo/drone inspection tools are making the hidden connection legible: flagging nailed-instead-of-bolted ledgers, missing flashing, and moisture signatures from images a homeowner or inspector snaps with a phone. The tech does not replace an engineer; it turns a $400 inspection into something a buyer can pre-screen for free before making an offer.

## Verified facts (primary sources)

1. **CPSC injury scale**: ~6,000 people/year injured from structural failure or collapse of decks, porches, railings, staircases (U.S. Consumer Product Safety Commission, via Murphy Bros summary https://mbros.com/blog/what-causes-decks-to-fail and Beach Painting https://www.beachpainting.com/blog/deck-safety-awareness/).
2. **InterNACHI estimates**: ~45 million decks in the U.S.; ~60% have safety issues; 90% of deck collapses occur from failure of the ledger (connection to the building), causing the deck to swing away from the house (via Killino Firm https://www.killinofirm.com/news/injuries-resulting-from-porch-deck-collapse and Morgan & Morgan https://www.forthepeople.com/blog/injuries-collapsed-deck-or-balcony-join-lawsuit/?amp=).
3. **NADRA Deck Safety Month 2026**: roughly 30 million decks across North America have outlived their practical service life; many built before bolted ledger connections were standard and before corrosion-resistant hardware was required; over 75% of people involved in a deck collapse sustain significant harm (Decksforlife/NADRA, via Barchart https://www.barchart.com/story/news/1343158/decksforlife-and-nadra-sound-the-alarm-on-aging-decks-as-deck-safety-month-2026-kicks-off).
4. **Frank Woeste (Virginia Tech, prof. emeritus) deck-collapse research**: 2007 Morse Technologies study, deck collapses increasing ~21%/year; 2001-2006 CPSC estimate of 4,600 ER visits tied to deck collapses + 1,900 porch failures; 239 major collapses in news reports; every collapse examined was preventable (via Killino Firm link above).
5. **PE forensic case studies**: collapsed decks attached with one row of 10d common nails, or two rows of 2.5-inch deck screws at 18" spacing, both with missing/incorrect flashing letting moisture rot concealed structural members; owners cannot see the defects (Johann F. Szautner, PE, via Pennsylvania Society of Professional Engineers https://www.pspe.org/deck-failures/).
6. **IRC 2021 Section R507 ledger rules**: ledgers must be minimum 2x8 pressure-treated; fastened with 1/2" lag screws or through-bolts on a prescribed spacing schedule (Table R507.9.1.3(1)); ledgers must be flashed per R703.4; lateral-load resistance requires hold-down tension devices at 2+ locations at 1,500 lb capacity each (or 4+ at 750 lb) (NADRA R507 rewrite document https://www.nadra.org/wp-content/uploads/2018/09/R507_Rewrite_with_technical_changes_10-30-2015_CLEAN.pdf; WA SBCC IRC PDF https://sbcc.wa.gov/sites/default/files/2019-12/16-11irc.pdf).
7. **AWC DCA-6 Prescriptive Residential Wood Deck Construction Guide** (American Wood Council): the prescriptive bible for ledger attachment, flashing, and lateral loads (https://resources.finalsite.net/images/v1592936414/westhartfordctgov/xx4ghzk3ffare3pxbjlr/DeckConstructionGuide-AWC-DCA-62015.pdf).
8. **NADRA Deck Evaluation Guide**: free consumer checklist covering ledger boards, fasteners/bolts, flashing, railings, steps (https://www.nadra.org/deck-safety/deck-evaluation-guide — referenced at beachpainting.com link above).

## AI inspection angle (verified)

9. **Spectora AI tools (June 2026)**: home inspection software company launched AI Report Assist (voice + photo matched to approved narratives), AI Scheduling Agent; early-access inspectors saving ~25% of inspection time, finishing reports on site (BusinessWire https://www.businesswire.com/news/home/20260609736918/en/Spectora-Introduces-New-AI-Tools-Reimagining-How-a-Home-Inspection-Gets-Done).
10. **Alpine Intelligence (Alpine Building Performance, Colorado, March 2026)**: free AI inspection forecaster predicting likely home issues before an inspector visit, aimed at buyers/agents during fast transactions (5280 https://5280.com/this-colorado-born-ai-tool-can-spot-problems-with-houses-before-your-inspector-does/).
11. **Loveland IMGING**: drone + handheld iOS inspection platform with automated AI damage detection from photos (https://www.lovelandinnovations.com/news/handheld-inspections/).
12. **DefectSpotter (open source)**: Gemini-based real-time visual defect detection (cracks, water damage, structural) with bounding boxes and severity scoring; shows how cheap the underlying tech has become (https://github.com/karthiknagpuri/defect-spotter).

## The honest limits (for the "case against" section)
- AI vision can flag visible symptoms (staining, missing flashing, visible nail heads) but cannot see inside the ledger-to-band-joist sandwich; concealed rot is exactly what killed the decks in the PE case studies. A photo cannot confirm lag-screw penetration depth or the 1,500-lb hold-down.
- Model hallucinations: a confidently wrong "this looks fine" is worse than no opinion. No AI inspection tool is a substitute for a licensed engineer or the NADRA checklist.
- False positives cost real money: flagging every weathered board as a hazard creates inspection theater.
- The 90% figure comes from InterNACHI estimates widely repeated by secondary sources; treat as industry estimate, not a peer-reviewed number. The CPSC ~6,000/year covers decks+porches+railings+staircases, not ledger failures alone.

## Actionable takeaways (required)
- For buyers: before you waive inspection on a house with an elevated deck, get under it with a phone. Photo the ledger. Nails or screws instead of half-inch bolts = walk-away leverage or a $3,000-8,000 retrofit credit. NADRA's free evaluation guide is the checklist.
- The 30-second test: if you can see nail heads (not bolt heads with washers) on the ledger, or no metal flashing tucked above it, the deck predates modern code and needs a structural look.
- For owners: a structural engineer deck evaluation runs roughly $300-600; a ledger retrofit with proper through-bolts and flashing runs low thousands vs. $15,000-40,000+ for a collapse rebuild, not counting injuries.
- For inspectors/builders: AI report tools (Spectora-style) cut report time ~25%; the win is spending that time under the deck instead of at the kitchen table.

## Headline candidates
- "90% of Deck Collapses Start at One Board. AI Can See Whether Yours Is Bolted or Just Nailed."
- "Your Deck Is Probably Attached Wrong. The Photo on Your Phone Knows."
- "30 Million Decks Are Past Their Expiration Date. The Ledger Is the Reason."
