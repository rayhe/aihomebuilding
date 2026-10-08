# Research: AI Fireblocking Photo-QA — the concealed-space fire gap

**Slug:** ai-fireblocking-penetration-photo-qa-concealed-space-2026
**Journalist:** Jake Kowalski (construction tech, tools)
**Date:** 2026-10-08

## Angle
Fireblocking is the cheapest life-safety system in a house and the least inspected one. The code (IRC R302.11) is a performance section: it says *what* fireblocking must do, not exactly *where* every block goes, and the list of locations is explicitly non-exhaustive. That ambiguity plus the fact that it all gets buried behind drywall means missing fireblocking is the most common defect a remodeler finds. AI 360-photo capture (OpenSpace-style walkthroughs) before drywall creates a timestamped visual record; computer vision can now flag unsealed top-plate penetrations, open soffits, and unblocked chases. The honest story: no vendor sells a turnkey "fireblocking AI," but the capture + review workflow is real and cheap.

## Kill test
Does this help someone building or buying a home? Yes. A builder gets: the exact 7 locations inspectors flag, a per-house cost model (~$150–400 in caulk and labor), and a photo-QA workflow that catches misses before drywall hides them. A buyer/remodeler gets: why blower-door tests keep finding the same leaks, and what to demand at the pre-drywall walkthrough.

## Primary sources

1. **NFPA, "Home Structure Fires" supporting tables** — reported one- and two-family home structure fires by area of origin, estimated annual averages 2019–2023 (NFIRS + NFPA survey):
   - Wall assembly or concealed space: 4,659 fires/yr (2%), 20 deaths, 55 injuries, **$177M** damage
   - Attic or ceiling/roof assembly or concealed space: 7,551 fires/yr (3%), 14 deaths, 105 injuries, **$528M** damage
   - Ceiling/floor assembly or concealed space: 1,906 fires/yr (1%), 11 deaths, 35 injuries, **$85M** damage
   - Crawl space or substructure space: 3,849 fires/yr (2%), 35 deaths, 108 injuries, **$136M** damage
   - URL: https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Building-and-life-safety/oshomefirestables.pdf?hash=410D7C7FF691D6602C0DA02123E516CE&

2. **NFPA, "Home Structure Fires" report (oshomes.pdf)** — fires in attics/ceiling-roof assemblies and concealed spaces "caused a disproportionate amount of property damage. Fires in these spaces may be less likely to be discovered when the fire is small compared to fires in interior living spaces."
   - URL: https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Building-and-life-safety/oshomes.pdf?rev=7809c62e634445aa9e5b49a25ba65074

3. **NFPA, "Home Electrical Fires" supporting tables (2020–2024)** — electrical fires by area of origin: attic/ceiling concealed space 4,135/yr (9%, $229.9M); wall assembly/concealed space 2,660/yr (6%, $109.6M); ceiling/floor concealed 1,057/yr ($53.3M); crawl space 1,437/yr ($61M).
   - URL: https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Electrical/osHomeFiresCausedbyElectricalFailureMalfunction_Supporting-Tables.pdf?rev=808b98402d8f4faca2a588b9d1a683a1&hash=3F5D1794FCCF9509CA287EE7F930AE5B

4. **IRC R302.11 code text (via Emmet County, MI building dept, 2015 MRC)** — "Fireblocking shall be provided to cut off all concealed draft openings, both vertical and horizontal, and to form an effective fire barrier between stories, and between a top story and the roof space." Required: stud-wall concealed spaces vertically at ceiling/floor levels and horizontally at ≤10 ft intervals; interconnections at soffits, drop ceilings, cove ceilings; stair stringers top and bottom; openings around vents/pipes/ducts/cables at ceiling and floor level.
   - URL: https://cms2.revize.com/revize/emmetcountynew/Documents/Departments/Building/Department%20Info/BUILDING%20CONSTRUCTION%20FAQ/BASIC%20CODE%20REQUIREMENTS/2015-Fireblocking-Requirements.pdf

5. **Fine Homebuilding, "7 Common Fireblocking Locations" (Mike Guertin)** — trade-expert walkthrough: the 7 locations (ceiling/floor levels via wall plates; furred basement walls every 10 ft + top of gap; soffits/drop/cove ceilings; tub/shower drain cutouts; pipe/cable penetrations; chimney/fireplace gaps with ≥1 in. noncombustible; stair stringers top and bottom). Key quotes for paraphrase: fireblocking "gets the least attention from builders" because it can't be seen in a finished home; "missing in almost every house I remodel"; furring installed after inspections means "the inspectors would have never caught it"; annular space around penetrations needs approved material that resists free passage of flame and gases; chimney gaps need noncombustible, self-supporting material.
   - URL: https://www.finehomebuilding.com/project-guides/framing/7-common-fireblocking-locations

6. **Fire Engineering, "Concealed Spaces and Fire Spread"** — fire-service perspective: concealed spaces "serve as channels to spread fire and combustion products"; fire spreads rapidly room-to-room and floor-to-floor through them; they can contribute to early structural failure.
   - URL: https://www.fireengineering.com/firefighting/havel-concealed-spaces/

7. **ICC, 2012 IRC significant changes (R501.3)** — floor-protection context: gypsum/wood-panel protection under floor assemblies aimed at firefighter safety after floor-collapse injuries; solid-sawn 2x10+ exempt; sprinklers exempt.
   - URL: http://media.iccsafe.org/news/eNews/2013v10n4/2012_irc_sigchanges_p69-70.pdf

8. **Mike Holt forums (electrical trade)** — field cost anecdote: "For a big house, figure 6-9 tubes of fire caulk and 2-3 hours labor"; 2-story houses need top and bottom plates sealed; inspectors vary on annular fill.
   - URL: https://forums.mikeholt.com/threads/fire-sealing-residential-required.125144/

9. **Retail pricing, 3M Fire Barrier CP 25WB+ (10.1 oz)** — $12.99–$35.55/tube across suppliers (buyinsulationproductstore $12.99, Elliott Electric $17.59, DKHardware $23.13, Platt $35.55). UL classified, intumescent, up to 4-hr rating per ASTM E814/UL 1479.
   - URLs: https://www.buyinsulationproductstore.com/3m-fire-barrier-sealant-cp-25wb/ ; https://www.platt.com/p/0063319/3m/red-fire-barrier-caulk-101-fl-oz-cartridge-halogen-free/051115116384/mmmcp25wbtube

10. **OpenSpace / ENR on AI photo documentation** — 360° capture mapped to floor plans; OpenSpace's ClearSight AI classifies objects/structures in imagery and tracks trade progress; ENR notes computer-vision classification of reality-capture data is now standard practice. Repurposed for pre-drywall QA: the capture exists, the fireblocking-specific model does not (honest gap).
    - URLs: https://www.enr.com/articles/54591-openspace-builds-out-site-documentation-to-go-global ; https://aecmag.com/construction/openspace-field-launches-for-construction-teams/

## Original contribution (novel calculation)
Summing NFPA's own area-of-origin tables for one- and two-family homes (2019–2023 annual averages), fires that *originate in concealed spaces* total:
- **17,965 fires/year** (4,659 wall + 7,551 attic/ceiling-roof + 1,906 ceiling/floor + 3,849 crawl space)
- **~$926M/year** in direct property damage ($177M + $528M + $85M + $136M)
- **~80 civilian deaths/year** (20 + 14 + 11 + 35)
- The attic/ceiling-roof concealed-space category alone does $528M/yr — the single most damaging structural area of origin after exterior wall surface. NFPA's own framing: these fires cause disproportionate damage because they are discovered late.

Per-house fireblocking cost model (penetration sealing at top/bottom plates):
- 6–9 tubes of fire caulk × $13–24/tube ≈ **$80–215 materials**
- 2–3 hours labor (trade anecdote) ≈ $100–200 at typical handyman/GC rates
- **Total: roughly $150–400 per house** to seal every top/bottom plate penetration — against a national $926M/yr concealed-space fire loss. (Mineral wool batts and lumber blocking for chases/soffits add material cost but are mostly scrap-bin lumber.)

## The skepticism (to develop in article)
- No vendor sells a fireblocking-specific AI inspector. The article must not claim one exists. The real product is 360° capture + human/AI review; the fireblocking checklist is a workflow, not a SKU.
- Fireblocking ≠ firestopping ≠ draftstopping. Different materials, different code sections. Conflating them is the #1 trade-press error; the article must keep them straight (R302.11 fireblocking vs. R302.12 draftstopping; firestopping is an IBC/commercial term).
- Code is a performance section: "approved material to resist the free passage of flame" leaves judgment calls. An AI flagging "unsealed penetration" still needs a human who knows the local AHJ's interpretation.
- Insulation-filled cavities: mineral wool/fiberglass batts can serve as fireblocking; an AI that flags every penetration in an insulated wall would over-flag. Context matters.
- Sprinklered homes (IRC P2904 / NFPA 13D) change the calculus: where sprinklers protect the space below, some requirements ease. The article should note this rather than selling fireblocking as the only answer.

## Limitations (to state in article)
- NFPA figures are national estimates from NFIRS + survey; area-of-origin coding depends on fire investigator judgment; "concealed space" origin may be undercounted when the fire destroys evidence of where it started.
- Per-house cost model uses a trade-forum anecdote (6–9 tubes, 2–3 hrs) and retail caulk prices; actual penetration counts vary by plan; labor rates vary by market.
- No independent verification that AI photo-QA catches a specific percentage of fireblocking misses; vendor claims for progress-tracking AI (e.g., deviation detection) are cited as vendor claims.

## Counterargument (strongest, to state at full strength)
The strongest case against the thesis: fireblocking is already handled by the cheapest inspector on earth — the framing inspector with a flashlight, who walks the job before insulation. Adding AI photo review is gold-plating a solved problem; the real failures happen in remodels and owner-builder basements where no AI will ever be deployed because nobody is capturing 360° walkthroughs of a DIY basement finish. The technology serves production builders who already have the lowest miss rates, not the weekend warriors with the highest. If the goal is fewer concealed-space fires, the money is better spent on enforcement in the remodel market and on smoke alarms (which the data shows save lives at the point of discovery), not on software for builders who already pass inspection.

## Headline candidates
- "17,965 Fires a Year Start Inside Your Walls. A $200 Tube of Caulk Is the Fire Department."
- "Your Plumber Drilled 60 Holes in Your Top Plates. Each One Is a Chimney."
- "The Cheapest Life-Safety System in Your House Is the One Nobody Photographs."
