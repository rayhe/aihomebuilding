# Research: Gas Appliance Combustion Air Closet Math (IFGC 304)

**Article #972 | Journalist: Frank "The Foreman" DeLuca | Started: 2026-09-26**

## Kill test
Does this help someone building or buying a home? **Pass.** Millions of gas furnaces and water heaters sit in interior closets and laundry rooms. The code has an exact number for how much air they need, almost nobody has run it, and getting it wrong means CO spillage, flame rollout, and failed combustion-safety tests. A homeowner or inspector can audit any closet in ten minutes with a tape measure and this math.

## Thesis
The code doesn't just want your furnace vented — it wants the *room* big enough (or ventilated enough) to feed the fire. The standard method: 50 cubic feet of space per 1,000 BTU/hr of appliance input. The archetype math shows a typical utility closet supplies ~6% of what the code requires, and the "louvered door" most people think covers them fails the free-area math by 3-13x.

## Original contribution (the worked math nobody published)
Archetype: 80,000 BTU/hr furnace + 40,000 BTU/hr water heater in an 8×6×8 ft closet (384 ft³).

1. **Volume test (IFGC 304.5.1 standard method):** 120,000 BTU/hr ÷ 1,000 × 50 ft³ = **6,000 ft³ required**. Closet provides 384 ft³. Shortfall: 5,616 ft³ — the closet holds 6.4% of the requirement.
2. **Indoor-opening fix (IFGC 304.5.3.1):** combine the closet with the rest of the house via two openings, each ≥ 1 sq in free per 1,000 BTU/hr = **120 sq in free each** (100 sq in minimum does not control), one within 12" of the top of the enclosure, one within 12" of the bottom, each opening's smallest dimension ≥ 3".
3. **Louver reality check (IFGC 304.10):** code assumes wood louvers = 25% free area, metal = 75% unless the manufacturer stamps a number. A 120 sq in free requirement becomes:
   - metal louvers: 120 ÷ 0.75 = **160 sq in gross** per opening (a 10"×16" grille),
   - wood louvers: 120 ÷ 0.25 = **480 sq in gross** per opening (a 20"×24" louver, per opening, top AND bottom).
4. **The door-louver myth:** a typical 12"×12" wood door louver = 144 sq in × 25% = **36 sq in free** — less than a third of one required opening, and it sits mid-door, not within 12" of top or bottom. Most "vented" closet doors are decorative from the code's perspective.
5. **The tight-home trap (IFGC 304.5.2):** if the house's infiltration is known to be below 0.40 ACH — common in new blower-door-tested builds — the standard method is OFF the table and the known-infiltration-rate method must be used, which demands *more* volume. The tighter the house, the hungrier the rule.
6. **Alternative fix:** mechanical combustion air at 0.35 CFM per 1,000 BTU/hr (IFGC 304.9) = 42 CFM for the archetype, interlocked so the burner can't fire without it.

## Strongest counterarguments (state at full strength)
- New construction is increasingly all-electric (heat-pump water heaters, heat pumps), making gas combustion-air rules a legacy problem; the fastest fix is electrification, not bigger louvers. Many jurisdictions are phasing out gas in new builds.
- Direct-vent/sealed-combustion appliances take combustion air from outdoors through a dedicated pipe — exempt from the volume math entirely (IFGC 304.1 scope; 303.3 exception 1). A sealed-combustion furnace in a closet doesn't need any of this.
- The BPI worst-case test data doesn't cleanly isolate "closet too small" as the driver of spillage incidents; depressurization from exhaust fans and blocked vents are bigger measured contributors. The math is a code gate, not a field fatality count.

## Limitations (dedicated accounting)
- Archetype math assumes standard residential input ratings (80k furnace, 40k WH); actual nameplates vary. Verify your own ratings.
- The 304.5.2 KAIR equations are described qualitatively; exact formula not quoted (Equation 3-1/3-2 in the code). Article says "must use the infiltration method" without printing equations.
- No survey data exists on how many closets actually fail the 50 ft³ rule — the "most closets fail" claim is reasoned from the archetype math, not measured.
- BPI action-level figures (CO ppm bands, spillage ≤60s) come from field-guide summaries of the BPI Building Analyst Professional standard, not the paywalled standard itself.
- The AI-vision framing (room-volume-from-photo, free-area measurement) is a direction, not a shipped product: no vendor found advertising automated combustion-air opening sizing.
- Local AHJ amendments may tighten or relax these numbers; permit applications follow the adopted code.

## Primary sources (8)
1. IFGC 2021 §304.5.1 — 50 ft³ per 1,000 BTU/hr standard method; §304.5.2 KAIR trigger at <0.40 ACH — https://codes.iccsafe.org/content/IFGC2021P1/chapter-3-general-regulations
2. IFGC 2021 §304.5.3.1 — indoor openings: 1 sq in/1,000 BTU, min 100 sq in, within 12" top and bottom, min 3" dimension — https://codes.iccsafe.org/content/IFGC2021P1/chapter-3-general-regulations
3. IFGC 2021 §304.10 — louvers: wood 25% / metal 75% free area default; motorized louvers interlocked — https://codes.iccsafe.org/content/IFGC2021P1/chapter-3-general-regulations
4. IFGC 2021 §304.9 — mechanical combustion air 0.35 CFM/1,000 BTU; interlock requirement — https://codes.iccsafe.org/content/IFGC2021P1/chapter-3-general-regulations
5. IFGC 2021 §303.3 — prohibited locations: sleeping rooms, bathrooms, toilet rooms, storage closets — https://codes.iccsafe.org/content/IFGC2021P1/chapter-3-general-regulations
6. ICC PMG CodeNotes, Indoor Combustion Air (IRC G2407.5/IFGC 304.5) — worked example: 50,000 BTU water heater, 20×16×8 room — https://www.iccsafe.org/wp-content/uploads/24-23669_PMG_CodeNotes_2021_IRC-IFGC_Combustion_Air-Indoors_Part2_FINAL2_HIRES.pdf
7. State GS6-40 YBFS water heater installation manual — outdoor opening sizing table; louver free-area guidance (wood 20-25%, metal 60-75%) — https://www.manualsdir.com/manuals/407968/state-gs6-40-ybfs-gs6-50-ybft-gs6-40-ybft.html?page=12
8. Chicago Building Code §18-28-709.1 (amlegal) — net free area deeming: metal 75%, wood 25% — https://codelibrary.amlegal.com/codes/chicago/c7209359-81de-4059-a679-f6a211f04dea/chicagobuilding_il/0-0-0-353005
9. County AHJ combustion-air worksheet (fillable permit form) — "combustion air cannot be drawn from bathrooms, bedrooms, & garages"; total BTU ÷ 1000 × 50 ft³ calculation — https://core-docs.s3.amazonaws.com/documents/asset/uploaded_file/988102/Combustion_Air_Calculations_Worksheet_fillable.pdf
10. BPI Building Analyst Professional combustion safety test procedure — worst-case depressurization setup, spillage ≤60 seconds, draft minimums (Tout/40 − 2.75 Pa), CO action levels (0-25 ppm proceed / 26-100 recommend repair / 100-400 no weatherization until repaired / >400 emergency) — via BPI field documentation: https://www.northernbuilt.pro/considerations-when-adding-exhausting-equipment-to-an-existing-home/ and http://www.kansasbuildingscience.com/pdfs/EERA/FG_KBSI Combustion Field Guide.pdf
11. CDC surveillance 2005-2018 (stacks.cdc.gov/view/cdc/113585) — ~430 unintentional non-fire CO deaths, 14,365 hospitalizations, 100,000+ ED visits/year; Virginia DOH page (~400 deaths/yr): https://www.vdh.virginia.gov/environmental-health/public-health-toxicology/carbon-monoxide/

## Headline
"Your Furnace Is Suffocating in a 384-Cubic-Foot Closet. The Code Requires 6,000."

## Actionable takeaways (Frank's audit list)
1. Read the nameplate BTU of every gas appliance in the space; add them up.
2. Measure the room L×W×H in feet; divide required volume by 50 ft³/1,000 BTU — if room < required, the space is confined per code.
3. Size two indoor openings at 1 sq in free per 1,000 BTU (min 100 sq in each), top + bottom of the enclosure; de-rate wood louvers to 25%, metal to 75%.
4. If the home is tight (<0.40 ACH known infiltration), the standard method doesn't apply — call the infiltration method.
5. Stop storing paint cans, fertilizer, and laundry chemicals in the furnace room (IFGC 304.12 fumes; 303.3 storage-closet prohibition).
