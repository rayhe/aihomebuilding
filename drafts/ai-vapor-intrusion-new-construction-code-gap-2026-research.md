# Research: Vapor Intrusion in New Residential Construction — the Code Gap

Slug: `ai-vapor-intrusion-new-construction-code-gap-2026`
Journalist: Jake Kowalski (construction tech, tools)
Date: September 21, 2026

## Angle (propose → challenge)
Propose: The IRC's Appendix F mandates radon-resistant construction in Zone 1 counties, but no model code provision requires vapor intrusion (VI) screening or mitigation for new homes — even though EPA's 2015 VI technical guide, ASTM E2600-15, and the VI screening-level calculator exist, and the fix is the same sub-slab hardware builders already know from radon. A passive sub-slab loop installed at construction (~$900–1,400) converts to a bolt-on active system later; retrofitting after occupancy costs $2,000–3,500+ and tears up finished interiors.

Challenge: Is this the best use of the cycle? Yes. Zero overlap with the 194 queued articles (radon articles cover radon prediction; seismic covers retrofit; nothing on vapor intrusion, 0 hits). The IRC-vs-EPA cross-reference is a novel gap analysis nobody on the site has done. Kill test: helps a builder on infill/brownfield-adjacent lots decide whether to pre-install a sub-slab loop, and helps a buyer near a shuttered dry cleaner or gas station know to demand a Phase I VI screen (ASTM E2600-15 Tier 1) before close. Verdict: proceed.

## Primary sources (7)

1. **EPA — "Technical Guide for Assessing and Mitigating the Vapor Intrusion Pathway from Subsurface Vapor Sources to Indoor Air" (OSWER 9200.2-154, June 2015).** The governing federal guidance. Screens in buildings "near" the subsurface vapor source; operationalized by EPA regions as a ~100-foot lateral/vertical screening distance — buildings within 100 ft of the plume get investigated first. Covers preferential pathways (sewer laterals, utility conduits, sumps, elevator pits) that defeat clean soil-gas readings.
   - https://www.epa.gov/vaporintrusion (guidance hub; VISL calculator at http://www.epa.gov/vaporintrusion/vapor-intrusion-screening-levels-visls)

2. **EPA Region 7 — Vapor Intrusion Screening Levels for Vapor Sources.** Documents the attenuation factor 0.03 (indoor air = soil gas × 0.03), target cancer risk 1e-5 for residents, hazard quotient 0.1. Follow-up protocol: sample nearby buildings, prioritizing occupied structures within 100 feet of the plume.
   - https://semspub.epa.gov/work/07/30353270.pdf

3. **EPA Vapor Intrusion Screening Level (VISL) User's Guide / Calculator.** VISLs built on 10^-6 target cancer risk and HQ 0.1 for non-cancer; default residential exposure. Chemistry criteria: vapor pressure > 1 mm Hg or Henry's Law constant > 1e-5 atm-m3/mol. Chemicals of concern: PCE (dry cleaners), TCE, vinyl chloride, benzene (gas stations).
   - https://www.epa.gov/vaporintrusion/vapor-intrusion-screening-level-users-guide-0

4. **EPA Brownfields Technology Primer: Vapor Intrusion Considerations for Redevelopment (EPA 542-R-08-001).** Key lines: ITRC rule of thumb — if sub-slab concentrations are 1,000–10,000× target indoor levels, warrant proactive mitigation without further characterization. Indoor air varies seasonally (higher in heating season, windows shut). Indoor background sources (cleaners, paints, solvents) confound indoor-air sampling — hence sub-slab sampling matters.
   - https://www.epa.gov/sites/default/files/2015-08/documents/bf_tech_primer_vi_542-r-08-001.pdf

5. **ASTM E2600-15, "Standard Guide for Vapor Encroachment Screening on Property Involved in Real Estate Transactions" (via Mondaq summary + SCS Engineers bulletin).** Tier 1 screen uses minimum search distances: petroleum releases within 1/10 mile of target property, hazardous-material releases up to 1/3 mile. Tier 4 mitigation section expressly notes pre-emptive mitigation may be more economical than investigation where no reporting duty is triggered and the system can be incorporated into new-construction design. Mitigation design itself is beyond the standard's scope. Note: E2600-08 assessed vapor intrusion into structures; the 2010/2015 revisions refocused on vapor *encroachment*.
   - https://www.mondaq.com/unitedstates/environmental-law/62304/new-astm-standard-provides-limited-tool-for-assessing-vapor-intrusion-risks
   - https://www.scsengineers.com/wp-content/uploads/2015/03/Technical_Bulletin_ASTM_Vapor_Intrusion_2008.pdf

6. **New Jersey DEP radon mitigation guidance (nj.gov/dep/rpp/radon/download/mitbas.pdf).** Average sub-slab depressurization system: $1,300; range $500–$2,500 depending on home and soil. Passive new-construction system cost $500–1,500; active fan system $1,200–$2,800 (dsmradon.com contractor breakdown). Establishes the cost anchor for identical hardware.

7. **NEREJ / Norfolk Ram Group (environmental contractor, Mass.).** SSD systems are the technology of choice for VI: reduce up to 99.9% of volatile contamination in indoor air; a $2,000 system usually suffices for a residence; fans last ~15 years; range $1,800–$8,000 for commercial-scale multi-point systems. Nevada DEP (Maryland Square PCE site): residential SSD $2,000–$20,000 per home for PCE mitigation, up to 99% reduction.
   - https://nerej.com/print/25877
   - https://ndep.nv.gov/uploads/documents/home_mitigation_ssd_systems.pdf

## The code gap (original cross-reference)
- IRC Appendix F (Radon Control Methods) requires passive radon-resistant new construction in Zone 1 (high radon) counties: sub-slab gas-permeable layer + perforated pipe loop + sealed riser. This is the SAME hardware a VI mitigation needs. But VI is not radon: Appendix F does nothing for PCE/TCE/benzene plumes, and most jurisdictions have no VI trigger for new residential permits.
- EPA's 2015 technical guide is guidance, not code. ASTM E2600-15 is a transaction screen, not a building standard.
- New Jersey, Massachusetts, New York have state VI guidance requiring shutdown/rebound monitoring protocols for mitigation systems, but those are remediation rules for existing contaminated sites, not new-construction code for homes near (not on) plumes.

## Original calculation: preemptive passive loop vs. retrofit active SSD
New-construction passive sub-slab venting loop (installed before slab pour):
- 60–80 ft of 4" perforated SDR-35 pipe: ~$120–160
- Gas-permeable aggregate layer or mat (already used for drainage in many builds): ~$150–250 marginal
- 3–4" PVC riser through roof + cap + junction box rough-in for future fan: ~$120–200
- Labor: one plumber or laborer, ~4–5 hours during slab prep at $75–95/hr: ~$340–475
- Sub-slab sampling ports (2, stubbed): ~$80–120
- TOTAL: **$810–$1,205** (round: $900–$1,400 with contingency)

Retrofit active SSD after occupancy:
- Core drilling through slab + finished interior: $300–600
- PVC routing + fan + electrical: $600–1,200
- Interior patch/paint, furniture disruption: $400–800
- Soil-gas diagnostic testing (blower door / suction-field extension): $300–500
- TOTAL: **$1,600–$3,100**; NEREJ cites $2,000 typical residential; NDEP cites up to $20,000 at hot sites.

Savings from preemptive install: roughly **$1,100–$1,700** (50–60%) plus avoided disruption. And the passive loop also satisfies radon Appendix F where required — dual purpose.

Methodology caveats: contractor figures are marketing-range, not a bid; labor rates assume $75–95/hr residential; excludes engineering design fee ($1,500–3,000) if a state VI guidance triggers a licensed design.

## Actionable takeaways
- Builder (infill, near commercial corridors): during due diligence, run an ASTM E2600-15 Tier 1 vapor encroachment screen — costs ~$500–1,000 as an add-on to a Phase I ESA, flags petroleum within 1/10 mile and hazmat within 1/3 mile. If a VEC cannot be ruled out, pour the passive loop. $1,200 now beats $3,000 later.
- Buyer: a Phase I without a VI screen is incomplete if the lot sits within a few blocks of a dry cleaner, gas station, auto shop, or former industrial use. Ask for sub-slab + indoor air sampling before close, in heating season if possible (worst-case concentrations).
- The trigger rule: if sub-slab gas reads 1,000× the target indoor level (ITRC rule of thumb via EPA primer), mitigate rather than characterize further — mitigation is cheaper than another round of sampling.

## Limitations (to include in article)
- Cost figures come from contractor marketing and state guidance ranges, not a bid sample; real bids vary by slab size, soil type, and fan spec.
- The 100-foot screening distance is a regulatory screening heuristic, not a safety radius — plumes migrate, and preferential pathways (sewer laterals) can carry vapors hundreds of feet.
- No third-party dataset counts how many new homes get preemptive VI systems; the article can't verify adoption rates.
- VISLs use a 10^-6 cancer-risk target — ultra-conservative by design; critics argue this drives over-mitigation. The counterargument gets full-strength treatment.
- Passive loop effectiveness for VI specifically (vs. radon) has thin independent verification; the physics are identical but the field data is radon-centric.

## Strongest counterargument
VISLs target 10^-6 cancer risk and HQ 0.1 — levels so conservative that a compliant mitigation program can spend six figures chasing risk invisible at any realistic exposure. Industry critics argue preemptive systems on unconfirmed VECs manufacture stigma (a recorded mitigation system can flag the property in future transactions) without a confirmed pathway. The article must state this at full strength: the screening machine is designed to over-call, and the right move on a borderline Tier 1 screen is sometimes more sampling, not a pipe.
