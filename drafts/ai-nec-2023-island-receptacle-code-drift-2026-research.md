# Research: NEC 2023 Killed the Mandatory Kitchen Island Outlet — and Your AI Plan-Checker Might Not Know

Slug: `ai-nec-2023-island-receptacle-code-drift-2026`
Article number: 1000
Journalist: Catherine "Code" Chen (Policy & Regulation)
Date: October 4, 2026

## Thesis

The 2023 NEC deleted the decades-old rule that every kitchen island and peninsula must have a receptacle, after CPSC injury data forced the code panel's hand. States adopt code editions years apart, so the same plan set is legal on one side of a state line and a violation on the other. AI plan-review tools (UpCodes Plan Review and its peers) analyze against a user-set code year — set the wrong year and the machine manufactures false violations or false passes on this exact rule. The homeowner stakes are a $200-500 wiring line item, a failed inspection over a now-optional outlet, and the cord-pull burn hazard the rule change was written to stop.

## Kill test

Does this help someone building or buying a home? Yes. Three actionable moves: (1) In 2023-NEC jurisdictions, skip the mandatory island outlet and rough in provisions only — saves the finished-outlet cost and you add a pop-up later if you want one. (2) In 2020-NEC (or earlier) jurisdictions, you still need the outlet — below the countertop is now a guaranteed inspection failure where 2023 applies. (3) If anyone runs your plans through an AI code checker, confirm the code year setting matches your AHJ's adopted edition or the review is fiction on this rule.

## Primary sources (7)

1. **NFPA 70, NEC 2023, 210.52(C)(2) and (C)(3)** — receptacles for island/peninsular countertops and work surfaces are no longer required, only permitted; below-countertop placement prohibited; if none is provided, "provisions" must be provided for future addition (raceway or NM cable to an accessible junction box). Via ECmag technical coverage.
   - https://www.ecmag.com/magazine/articles/article-detail/examining-adjustments-to-chapter-2-accepting-(nec)-change-part-6
2. **NEC 2023 ROP/ROC evidence base via ECmag** — CMP-2 weighed the CPSC data: 45 anecdotal reports of burns/other injuries Jan 1991 through 2020; an estimated 9,700 burns and other injuries treated in U.S. hospital emergency departments; many second- and third-degree burns; 10 resulted in death. Cause: tipping/spilling contents of countertop cooking appliances; children pulling power cords or cords snagged by passersby.
   - https://www.ecmag.com/magazine/articles/article-detail/kitchen-complications-peninsula-and-island-countertop-compliance-challenges
3. **NEC 2026 refinements, 210.52(C)** — "if installed" revised to "if provided"; receptacles beneath a countertop must be at least 24 in. below it (new 210.52(C)(4)); drawer-installed receptacles allowed but do not count as a required receptacle. Via EC&M and SYGFCI.
   - https://www.ecmweb.com/national-electrical-code/code-basics/article/55400217/key-revisions-to-chapter-2-of-the-2026-nec
   - https://sygfci.com/2026/04/24/nec-2026-kitchen-island-outlet-rules-210-52c/
4. **NAHB suggested amendments to the 2023 NEC** — the homebuilders' lobby wanted to reinstate the 2017 requirement (at least one receptacle per island/peninsula, with the below-countertop exception for accessibility). The industry fought the safety change. Shows where builder incentives and the code panel diverged.
   - https://www.nahb.org/-/media/NAHB/advocacy/docs/top-priorities/codes/code-adoption/nahb-suggested-amendments-2023-nec.pdf
5. **NEC adoption drift** — as of August 2026, 19 states had adopted the 2023 NEC in some form and 6 had adopted the 2026 NEC; Connecticut, Florida, Indiana, Maryland, Montana, South Carolina, Vermont, and Virginia were in the process of joining the 2023 group. Per NFPA via EC&M; state-by-state table via IAEI.
   - https://www.ecmweb.com/national-electrical-code/article/55403844/wisconsin-adopts-2023-national-electrical-code
   - http://www.iaei.org/page/nec-code-adoption
6. **UpCodes AI-native Plan Review** — launched ~June 2026; AI QA/QC that analyzes drawings against a library of 11 million locally adopted code sections across 6,000+ jurisdictions; the user sets jurisdiction, code year, and building type once per project, and every analysis runs against that setting. The edition-drift failure mode lives in that one setting.
   - https://www.buildingenclosureonline.com/articles/94966-upcodes-adds-ai-native-plan-review-to-its-aec-qa-qc-platform
7. **Costs** — listed pop-up countertop receptacles: Mockett PCS103A $350.90 (UL listed for countertop installations, meets NEC 406.5(E)); Kitchen Power Pop Ups outdoor/indoor unit $377. Conventional island outlet install: $200-500 per outlet including new line from panel (ShunShelter / Industry Standard Design ranges).
   - https://www.mockett.com/residential/pcs103a-ee.html
   - https://www.kitchenpowerpopups.com/products/lew_ob-2-ct-sp
   - https://shunshelter.com/article/how-to-add-an-outlet-to-a-kitchen-island

## Original contribution: the edition-drift audit

Nobody has mapped the island-receptacle rule against the live adoption map to show the working consequence: as of August 2026, roughly two-fifths of states enforce the no-mandatory-outlet rule while the rest still require the outlet (or have no statewide code and vary by city). A kitchen plan drawn to the old rule wastes $200-500 of outlet work in 2023 states; a plan drawn to the new rule fails inspection in 2020 states. The same PDF is both compliant and non-compliant depending on the jurisdiction field someone typed into an AI review tool. That is the article's novel finding: the drift itself is the hazard, and the AI tool's single "code year" dropdown is where the hazard enters the workflow.

Worked math for the article:
- Old-rule mandatory island receptacle: $200-500 installed (new homerun from panel, GFCI, cabinet cut, coordination with cabinet/countertop trades).
- New-rule provisions-only rough-in: the marginal cost during rough-in is a short raceway or NM cable to an accessible junction box inside the island cabinet — materially cheaper than a finished, listed countertop assembly; the $351-377 pop-up unit is a later, optional purchase rather than a permit-line item.
- CPSC numbers: ~9,700 ED burns over 30 years is small in absolute terms (roughly 320/year) but 10 deaths and a high share of pediatric second/third-degree burns — enough for CMP-2 to delete a requirement that had stood for decades. Worth stating the absolute scale honestly so the reader can calibrate.

## AI angle detail

UpCodes Plan Review (June 2026) and competitors run the whole analysis against one project-level code-year setting. For island receptacles, the rule's polarity flips between 2020 and 2023: "required, with permitted below-counter placement" versus "optional, below-counter prohibited, provisions required if omitted." A reviewer who leaves the default at the wrong edition gets either a false violation (flagging a compliant omission) or a false pass (blessing a below-counter outlet the AHJ will red-tag). This is a generalizable lesson about AI code checkers: they are jurisdiction-setting machines, and the setting is the review.

## Strongest counterargument

NAHB's own suggested amendment argues the new rule went too far: reinstating at least one required outlet (2017 language) with an accessibility exception for below-counter placement. The counterargument has two legs. First, convenience and resale: buyers expect island power; a provision-only island is a small daily annoyance that the homeowner pays to fix later at retrofit prices. Second, the CPSC data is thin in absolute terms — 45 anecdotal reports over 30 years — and the panel traded a documented convenience feature for a rare-event hazard, arguably punishing every kitchen for incidents that better cord management could have prevented. The article must state this at full strength: the code made kitchens slightly less useful to prevent injuries that mostly involved unsupervised small children near hot appliances, and reasonable people (including the homebuilders' association) think that trade was wrong.

## Limitations

- Adoption counts (19 on 2023, 6 on 2026) are from NFPA via EC&M as of August 2026 and move monthly; several states were mid-transition at press time. Local AHJs can amend or delay; always confirm with the local inspector.
- Provisions-cost savings are estimated from the nature of the work (raceway/junction box at rough-in vs. finished listed assembly), not from a published per-unit study; the $200-500 installed-outlet range comes from contractor-facing guides, not a bid database.
- No independent testing of UpCodes Plan Review's handling of 210.52(C) specifically; the failure mode is reasoned from the product's documented architecture (single project-level code-year setting driving all analyses), not from a measured false-positive rate. Say so.
- The CPSC figures cited (45 anecdotal, ~9,700 ED estimate, 10 deaths) are from the code panel record as reported by ECmag, not from a primary CPSC release reviewed directly.

## Actionable takeaways (for the article)

- Building in a 2023-NEC jurisdiction: you may skip the island outlet; insist the electrician roughs in provisions (raceway or NM to an accessible box) at the island so a pop-up can be added without opening finished cabinetry.
- Building in a 2020-or-earlier jurisdiction: the outlet is still required; if your plans show a below-counter cabinet-face outlet, ask for a redesign before the inspector asks.
- Anyone who runs your plans through an AI plan-review tool: verify the code-year setting matches your AHJ's adopted edition. A wrong setting manufactures violations on this rule.
- If you want the outlet anyway: listed pop-up countertop assemblies run ~$351-377 for hardware; the countertop cutout must be planned before fabrication.
