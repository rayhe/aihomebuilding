# RESEARCH: Yellow-Jacket CSST — Lightning, Bonding, and the Jacket-Color Loophole

**Slug:** `yellow-csst-gas-line-lightning-bonding-gap-2026`
**Journalist:** Catherine Chen (Policy & Regulation)
**Date:** September 11, 2026
**Kill test:** Does this help someone building or buying a home? Yes. A homebuyer in a lightning-prone state can identify yellow CSST in the attic during inspection and demand bonding verification or a retrofit; a builder specifying black arc-resistant CSST instead of yellow avoids the bonding requirement and the liability trail entirely.

## The Core Facts

### What CSST is
- Corrugated stainless steel tubing: flexible stainless pipe (wall thickness ~0.01 in) used to run natural gas/propane inside homes since the 1990s. Yellow plastic jacket = first generation; black jacket = arc-resistant generation (CounterStrike, FlashShield+).
- Introduced in the US in the 1990s; approximately one billion feet installed (Nebraska PSC).
- S.Res. 483 (112th Congress, 2012): "since 1990, yellow CSST has been installed in more than 6,000,000 homes and businesses in the United States."
- Fewer fittings = fewer leak paths (the selling point). Much cheaper/faster to install than black iron pipe.

### The failure mode
- A nearby lightning strike (not even a direct hit) energizes the structure. Current travels along the thin stainless wall; where it arcs to another metal component, the arc perforates the tubing wall. Gas escapes, ignites. Attic fires, explosions.
- Cranford, NJ / IFGC guidance: indirect strikes energize piping by conduction or inductive coupling; "the jumping-off point will experience an arc that has enough energy to burn through a pipe, tube or connector wall."
- IAFC position statement: in lightning-prone areas, CSST "may increase the likelihood of fires by 10 times compared with other dwellings not equipped with CSST." IAFC says bonding requirements introduced in 2009 "have not significantly reduced the occurrence of fires."

### The code response (patchwork)
- NFPA 54 National Fuel Gas Code: bonding requirement for CSST. IFGC 2015 Section 310.1.1: bond to the electrical service grounding electrode system at gas entry point; bonding jumper minimum 6 AWG copper, max 75 ft length; devices listed to UL 467 (per NFPA 70).
- Jurisdiction patchwork: Massachusetts Board of Fire Prevention Regulations policy — plumbers can't be held responsible for bonding (it's electricians' jurisdiction), arc-resistant products get different treatment; manufacturers must clarify whether direct bonding is required for their product. Some AHJs only permit arc-resistant CSST in new construction.
- IAFC pushes model codes to recognize the LC1027 arc-resistant standard in new construction.

### The product fix: black jacket
- OmegaFlex TracPipe CounterStrike (black jacket, electrically conductive, introduced 2004): "up to 400 times more resistant to damage from electrical arcing than traditional CSST." Listed to ANSI LC 1-2016 including arc-resistant jacket requirements; ICC-ES PMG 1058; IAPMO ER 0227 for lightning resistance "without additional bonding (unless required by local codes)." OmegaFlex stopped selling yellow-jacketed TracPipe in the US in 2011 — everything is black-jacket CounterStrike now.
- Gastite FlashShield+: metallic shield layer + insulative outer jacket, listed to ANSI LC1 and ICC-ES PMG LC1027, marketed as "the only CSST proven to resist electrical system fault current arcs, as well as lightning strikes."
- The jacket color is the tell: yellow = legacy product that must be bonded per NFPA 54/IFGC; black = arc-resistant generation.

### The litigation trail (primary sources)
1. **$29M class action settlement (Supply House Times):** 2004 class action against OmegaFlex, Parker Hannifin, Titeflex, Ward — settled. Qualifying property owners got vouchers of $75–$160 for bonding-jumper installation or $200–$2,000 for lightning protection systems. Manufacturers denied wrongdoing. Claims deadline Sept. 5, 2007. Coverage: CSST installed after Sept. 5, 2006.
2. **State Farm Fire & Casualty v. Omega Flex (E.D. Ark. 2016, No. 4:16CV00387):** subrogation after the Crocketts' home caught fire following a lightning strike on May 9, 2015; yellow-jacketed TracPipe alleged defectively designed.
3. **Oklahoma Farm Bureau v. Omega Flex (W.D. Okla., CIV-22-18-D):** lightning struck the Diels' home July 11, 2020; attic fire; insurer paid for full rebuild and sued for subrogation.
4. **Celeste Flynn v. Omega Flex (Phila. Ct. Common Pleas, filed June 19, 2020; settlement approved 2022):** widow of Howard County (MD) firefighter Nathan Flynn, who died July 23, 2018 after a floor collapsed in a house fire that the complaint says began when lightning perforated TracPipe and released propane. Alleged Omega Flex knew of ~75 lightning-induced fires per year.
5. **W.D. Mo. MDL-adjacent ruling (2020, govinfo):** confirms the 2004 class action settlement and notes homeowners like Brian Immekus "didn't know in advance that TracPipe was going to be installed" — the product choice was the builder's, invisible to the buyer.

### The AI angle (the "gap")
- Nobody verifies the bonding at scale. The fix for legacy yellow CSST is a ~$75–160 bonding jumper retrofit (per the settlement voucher range), but there is no registry of which homes have yellow CSST and no routine verification. Home inspectors photograph attics/crawlspaces routinely.
- AI computer-vision on pre-drywall and home-inspection photos can: (a) detect yellow vs. black CSST jacket from photos, (b) flag missing bonding clamps, (c) cross-reference with lightning flash-density data (Vaisala NLDN annual reports) to risk-rank. This is the same inspection-photo automation pipeline already shipping in home inspection software — the jacket-color classification is a trivially trainable CV task (two classes, high contrast).
- The novel contribution: **cross-reference the jacket color + bonding status (from inspection photos) against county-level lightning flash density and the AHJ's code edition** to produce a per-home lightning-fire risk score. No one publishes this combination; insurers price the risk blind (note the subrogation suits: insurers pay, then sue).

### Original contribution for the article
1. **Jacket-color decision rule:** If the CSST in your attic/crawlspace is yellow, NFPA 54/IFGC requires a 6 AWG bonding jumper to the service grounding electrode (max 75 ft run). If black, verify it's actually arc-resistant (LC1027/ICC-ES PMG listed) — color alone isn't a code determination.
2. **The patchwork math:** Manufacturer claims "compliant in all 50 states" for arc-resistant product; legacy yellow CSST bonding depends on the locally adopted code edition and the AHJ — a 2004-built Florida home may have unbonded yellow CSST with zero code violation on the books at build time, but still carries the fire risk today.
3. **The retrofit economics:** bonding retrofit = an electrician + a listed clamp + up to 75 ft of 6 AWG wire; the settlement priced it at $75–$160 in 2007 dollars. Compare against the subrogation record: insurers rebuilding entire homes (Diel case) after attic fires. The asymmetry is the story.

## Sources (primary)
1. Nebraska Public Service Commission, "Proper Grounding of Corrugated Stainless Steel Tubing" — http://psc.nebraska.gov/sites/default/files/doc/CSST%20Piping%20PSA_0.pdf
2. S.Res. 483, 112th Congress — https://www.govinfo.gov/content/pkg/BILLS-112sres483ats/pdf/BILLS-112sres483ats.pdf (yellow CSST in 6M+ homes)
3. IAFC Position: Protection of CSST from Lightning Strikes — https://www.iafc.org/about-iafc/positions/position/protection-of-corrugated-stainless-steel-tubing-(csst)-from-lightning-strikes (10x fire likelihood claim; 2009 bonding "has not significantly reduced" fires)
4. Mass. Board of Fire Prevention Regulations CSST policy (via 1st Circuit) — https://www.ca1.uscourts.gov/sites/ca1/files/citations/Regarding%20Corrugated%20Stainless%20Steel%20Tubing%20%28CSST%29.pdf
5. OmegaFlex TracPipe CounterStrike 2025 catalog — https://tracpipe.com/wp-content/uploads/FGP-745-Rev-0425-USA_Catalog-2025.pdf (400x arc resistance; bonding mandate history 1999; yellow discontinued 2011; PMG 1058 / IAPMO ER 0227)
6. Ferguson FlashShield+ listing — https://www.ferguson.com/product/flashshield%2B-125-ft.-x-3%2F4-in.-csst-stainless-steel-tubing-tfs11125/4138647.html (LC1027, metallic shield)
7. Supply House Times, "CSST Lawsuit Settled" — https://www.supplyht.com/articles/90655-csst-lawsuit-settled ($29M; voucher amounts)
8. State Farm v. Omega Flex, E.D. Ark. 4:16CV00387 — https://law.justia.com/cases/federal/district-courts/arkansas/aredce/4:2016cv00387/104076/30/ (May 9, 2015 lightning fire)
9. Okla. Farm Bureau v. Omega Flex, W.D. Okla. CIV-22-18-D — https://www.casemine.com/judgement/us/6549bd733abc740c270dfdf8 (July 11, 2020 attic fire, full rebuild)
10. Fire Law Blog, "Court Approves Settlement in LODD Suit" (Celeste Flynn v. Omega Flex) — https://www.firelawblog.com/2022/06/12/court-approves-settlement-in-lodd-suit-brought-by-widow-of-maryland-firefighter/ (Nathan Flynn, July 23, 2018; ~75 lightning fires/yr allegation)
11. W.D. Mo. ruling, Case 6:17-cv-03114 — https://www.govinfo.gov/content/pkg/USCOURTS-mowd-6_17-cv-03114/pdf/USCOURTS-mowd-6_17-cv-03114-1.pdf (2004 class action background; buyer unawareness)

## Headline candidates
- "Your Gas Line Is Yellow. A Lightning Strike Miles Away Can Set It on Fire."
- "The Yellow Pipe in Your Attic Doesn't Meet Today's Lightning Rules. Nothing Requires You to Fix It."
- "6 Million Homes Have Yellow Gas Pipe. An AI Can Spot It From an Inspection Photo."

## What the article must NOT do
- Don't claim black CSST needs no bonding anywhere — it's "unless required by local codes" everywhere.
- Don't present the 10x figure as settled science — it's IAFC's position based on anecdotal state/local fire-official reports, stated as such.
- Don't tell readers to DIY the bonding — it's electrician jurisdiction (per Mass policy); electrical permit may be required.
