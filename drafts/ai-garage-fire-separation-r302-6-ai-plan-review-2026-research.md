# Research: AI garage fire-separation inspection (IRC R302.5/R302.6) — #942

**Slug:** `ai-garage-fire-separation-r302-6-ai-plan-review-2026`
**Journalist:** Catherine Chen (policy, legal, building codes)
**Date:** September 22, 2026

## Thesis
The wall between an attached garage and the living space is governed by one of the oldest, most specific fire provisions in the residential code (IRC R302.5/R302.6) — and it is also one of the most routinely violated, mostly by homeowners *after* final inspection. AI plan review (UpCodes, June 2026) can catch the paper violations pre-permit, but the violations that kill happen post-occupancy, where no AI is looking.

## Kill test
Passes. A buyer can use this as an inspection-negotiation checklist with dollar figures; a builder/remodeler gets a retrofit scope with real costs. Both can act this week.

## Primary sources

1. **USFA Topical Fire Report Series v14i12, "Residential Building Garage Fires (2009–2011)"** — U.S. Fire Administration / NFIRS.
   - ~6,600 residential garage fires/year → 30 deaths, 400 injuries, $457M property damage.
   - ~2% of all residential building fires; 93% in 1- and 2-family homes.
   - "Garage fires tend to spread farther and cause more injuries and dollar loss than fires that start in all other areas of the home."
   - Leading cause: electrical malfunction. Detection delayed because smoke alarms are not installed in garages (false alarms); heat detectors preferred.
   - URL: https://www.USFA.FEMA.gov/downloads/pdf/statistics/v14i12.pdf

2. **IRC 2021, Sections R302.5 and R302.6 (via multiple jurisdiction tip sheets reproducing Table R302.6 verbatim).**
   - Table R302.6: from residence and attics → ≥1/2" gypsum on garage side; from habitable rooms above → ≥5/8" Type X; supporting structures → ≥1/2"; garages <3 ft from dwelling on same lot → ≥1/2" on interior side of exterior walls.
   - R302.5.1: connecting doors must be 1-3/8" solid wood, solid/honeycomb-core steel, or 20-minute fire-rated, **with a self-closing device**. No pet doors, no windows unless rated.
   - R302.5.2: ducts penetrating the separation → minimum 26-gauge sheet steel, no openings into garage.
   - R302.5.3 / R302.11: other penetrations protected.
   - Note: this is a *separation*, not a rated assembly. A single layer of 5/8" Type X on a ceiling buys time; it is not a 1-hour assembly.
   - URLs: https://mybuildingpermit.com/sites/default/files/TS_06_Residential_Garage_Separation_2021_IRC_Final_0.pdf ; https://cdn.mediavalet.com/usva/boisecascade/jkz6m2K_nkG8Jw9AUu6RrA/qk3XDt4jyk-bndW7Iju4tA/Large/GE-5%20Reqd%20Separation%20Garage%20and%20Dwelling%20IRC.pdf

3. **NFPA "Home Structure Fires" supporting tables (Aug 2025), Table 12** — context scale.
   - 328,589 home structure fires/year (2019–2023 avg), 2,601 deaths, $8.915B property damage.
   - 17% of fires spread beyond room of origin account for 59% of property damage — the spread story, which is exactly the garage-fire story.
   - URL: https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Building-and-life-safety/oshomefirestables.pdf

4. **UpCodes PRNewswire launch (June 2026): "UpCodes Adds AI-Native Plan Review to Its AEC QA/QC Platform."**
   - AI analyzes project drawings against 11M locally adopted code sections; 800,000 AEC professionals on platform; 6,000+ jurisdictions.
   - Discipline-specific analyses include **fire protection and life safety** — the category R302.5/R302.6 lives in.
   - Positioned as pre-permit QA/QC: catches compliance issues before RFIs/change orders.
   - URL: https://www.buildingenclosureonline.com/articles/94966-upcodes-adds-ai-native-plan-review-to-its-aec-qa-qc-platform

5. **InterNACHI training + inspector forums (field evidence of violation patterns).**
   - InterNACHI "Attached Garage Fire Containment" course: 1/2" gypsum on shared walls, 5/8" Type X under habitable rooms; inspectors check adequacy of the barrier.
   - Inspector forums: non-fire-rated **pull-down attic stairs** in garage ceilings called "the biggest single problem... in 98% of the houses"; pet doors cut into fire doors; missing self-closers; homeowner-punched penetrations; attic separation missing between garage and house attics.
   - URLs: https://forum.nachi.org/t/fire-seperation/3853 ; https://irp-cdn.multiscreensite.com/d1eb000c/files/uploaded/Attached%20Garage%20Fire%20Hazards.pdf

## Original calculation — the fire-separation retrofit model (my analysis, not a cited fact)

**Per-fire expected loss (from USFA primary data):** $457,000,000 ÷ 6,600 fires = **$69,242 average property loss per garage fire.** Deaths: 30 ÷ 6,600 = 1 death per 220 garage fires. Injuries: 400 ÷ 6,600 = 1 injury per 16.5 fires.

**Remediation cost model** — typical 2-car attached garage (ceiling 20×22 = 440 sq ft; one man-door to house), violations = the 4 most common per inspector forums. Inputs are modeled ranges, stated as estimates:
| Violation | Fix | Modeled cost |
|---|---|---|
| Hollow-core / non-rated man door | 20-min rated prehung + self-closing hinge, installed | $450–$700 |
| 1/2" ceiling under bedroom above | Remove + install 5/8" Type X, tape/finish (440 sq ft @ ~$3.50 installed) | ~$1,540 |
| Pull-down attic stairs, unrated | Replace with fire-rated access or cover w/ 5/8" Type X | $300–$600 |
| Unsealed penetrations (DIY wiring, old duct) | Firestop/26-ga drywall patches | $150–$300 |
| **Total** | | **~$2,440–$3,140** |

**The ratio:** full remediation of all four (~$2,800 midpoint) vs. $69,242 expected loss per garage fire. Even at a 1-in-1,000 lifetime fire probability for a given garage, expected avoided loss (~$69) is small — so the honest frame is insurance-style: the retrofit is cheap relative to the *tail* (total loss + life safety), not a positive-EV bet on the average. Say this explicitly.

## Skepticism / counterarguments
- R302.6 is a separation, not a rated assembly. "Compliant" still means one layer of drywall. The code's own standard is modest; it buys minutes, not immunity.
- In sprinklered homes (CA requires sprinklers in new 1-2 family dwellings; some jurisdictions waive the separation with sprinkler protection per IRC footnote a), the barrier matters less. The article's urgency should be scoped to the ~most of the existing stock, which is unsprinklered.
- AI plan review reads *drawings*. The dominant violation class (pet doors, disabled closers, pull-down stairs, post-occupancy penetrations) is created by homeowners years after the AI ever sees the plans. An AI that only reviews permit PDFs structurally cannot see the actual risk. This is the article's central tension, not a footnote.
- USFA garage-fire data is 2009–2011. Current NFPA reporting folds garage fires into area-of-origin tables; the $457M/6,600 figures are the last dedicated national estimates and are aging.
- No independent audit of UpCodes Plan Review's detection rate for R302.5/R302.6-class issues exists; vendor claims only.

## Limitations
- Retrofit costs are modeled from national retail/labor ranges; union/coastal markets run 30–60% higher.
- Cannot verify drywall thickness behind paint without destructive testing or ultrasound — visual AI inspection has a hard physical limit here; the article must say so.
- 93%-of-fires-in-1-and-2-family figure is USFA 2009–2011; housing stock mix has shifted.
- No per-jurisdiction adoption data: some AHJs amend R302.6 (e.g., Georgia footnote adding sprinkler alternative).

## Actionable takeaways (for the article)
- Buyer checklist: door rating stamp on the hinge edge + self-closer present and working; ceiling drywall thickness under rooms above (check at an unfinished edge or attic side); no pet doors; no pull-down stairs unless fire-rated; penetrations sealed.
- The 90-second test: open the man door, let go — if it doesn't self-close, that's a $12 hinge away from compliance.
- When to call a contractor vs. DIY: door swap and closer = DIY; ceiling re-rock = contractor.
- If building new in a sprinkler-mandate jurisdiction, verify with the AHJ what the separation requirement actually is — some allow trade-offs.
