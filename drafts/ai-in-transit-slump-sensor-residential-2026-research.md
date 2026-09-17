# Research: AI In-Transit Concrete Slump Management (VERIFI / Load Assurance) — Thread #82

**Article #882** | Journalist: Jake Kowalski (construction tech) | Started: 2026-09-17

## Angle
State DOTs now accept AI sensor data from inside the mixer drum as the official record of what went into a load of concrete. Your home's foundation gets poured under none of that scrutiny: the driver's eyeball, a garden hose, and no record at all. In-transit slump management systems (VERIFI, Command Alkon Load Assurance) already exist — they just almost never get specified on residential jobs.

## Kill test
Helps someone building or buying a home: YES. Concrete water-cement ratio is the single biggest lever on foundation strength and durability, and it is decided in the driveway, off the record. Actionable spec language a homeowner can copy into a purchase order.

## Key facts

### The retempering problem (water added at the jobsite)
- ASTM C94 permits jobsite water addition ONLY if slump is below required AND the maximum w/cm from the mix design is not exceeded. Every addition must be documented on the delivery ticket. After any addition: minimum 30 revolutions at mixing speed (NRMCA acceptance-testing FAQ).
- NRMCA CIP 26 (Adding Water on the Jobsite): "Upon obtaining the desired slump and/or maximum water-cementitious materials ratio, no further addition of water on the jobsite is permitted." Recommends a pre-placement conference establishing who is authorized to request water and how it is documented.
- Alhozaimy 2006 (hot-dry environments): retempering with water to restore slump within spec limits (100±25 mm): strength reduction below 10%. Water added beyond spec limits: reduction up to 35%. Strong correlation between slump change and strength reduction (R > 0.892).
- Abo Mustafa & Zregh (University Bulletin 16(3), 2014): water retempering reduced compressive strength by -19% to -29% at design w/c of 0.45–0.55.
- Retempering with superplasticizer instead of water: smaller w/c increase, smaller strength loss (multiple studies).
- Rule of thumb used in VERIFI validation research: ~1 gallon of water per cubic yard raises slump ~1 inch.

### The AI systems
- VERIFI (GCP Applied Technologies, now Saint-Gobain): in-drum sensor suite measures slump continuously, meters water and admixture additions in transit, doses HRWR (e.g., ITM750 superplasticizer) automatically. Sample specification: slump accuracy ±25 mm, water metering ±3% or ±1 liter, admixture metering ±3%.
- MoDOT research (Iowa State InTrans, SP14-3): (1) VERIFI accurately measures slump and temperature in the truck; (2) adjusts slump automatically to target by adding water and admixture; (3) adding water in transit instead of at the jobsite does not negatively affect concrete performance. Data complete enough to use for acceptance.
- ASTM C94 was revised in 2013 specifically to allow water additions during transit for trucks equipped with automated slump and water management systems.
- Command Alkon Load Assurance (announced May 16, 2024, GlobeNewswire): in-drum direct-contact sensors transmit slump, temperature, volume, water additions, w/c ratio, drum rotation, and (new in 2024) real-time air content to Command Cloud. Company claims tighter water control → reduced cement usage per yard and lower standard deviation of compressive strength.
- TxDOT special provision (2020): mixer trucks with automated water/admixture measurement and slump monitoring meet ASTM C94 — VERIFI-equipped loads can be adjusted in transit on highway and bridge projects. Florida, Illinois, Missouri DOTs took similar action.

### The residential gap
- A residential foundation pour typically has: no inspector, no slump cone test, no cylinders cast, no pre-placement conference, and no record of water added. The delivery ticket exists but water-addition lines go unfilled.
- Typical residential mix: 6-sack (564 lb cement per cubic yard), design w/c ~0.50, target strength 4,000 psi.

## Original contribution: the slump tax
Using Abrams' law (f'c ≈ 14,000 / 7^(w/c) psi):
- Baseline 6-sack mix, w/c 0.50 → ~5,291 psi (design margin above 4,000 psi nominal).
- One typical unrecorded hose addition: ~2 gal/yd³ = 16.7 lb water → w/c 0.530 → ~4,995 psi. Loss: ~5.6% (296 psi gone, margin shrunk).
- A heavier second round (4 gal/yd³ total, common when a stiff load sits in a hot driveway): w/c 0.559 → ~4,716 psi. Loss: ~10.9% (575 psi).
- This matches Alhozaimy's "below 10%" for within-limits retempering — i.e., even "legal" additions erase a meaningful slice of the design margin, and beyond-limits additions (up to 35% loss in his data) can push a nominally 4,000-psi pour toward the edge of the safety factor.

## Actionable takeaways (for the article)
1. Ask your ready-mix supplier if any fleet trucks carry in-transit slump management (VERIFI, Load Assurance, or equivalent) — then request those trucks for your pour.
2. Put the maximum w/cm on the purchase order; require the driver to record water additions on the delivery ticket (NRMCA calls this good practice; ASTM C94 requires it when additions occur).
3. Specify admixture-based slump adjustment (HRWR) instead of water — the research says it costs far less strength.

## Strongest counterargument
The systems are built for DOT and commercial work: sensor hardware, calibration, and cloud subscriptions cost money producers won't spend to serve $8,000 foundation pours. One residential pour doesn't justify the economics, and a competent crew that batches with trim water held back (NRMCA's recommended practice) can achieve the same result without any AI. The tech is real; the residential business case isn't — yet.

## Limitations
- Strength math uses Abrams' law approximation, not a tested cylinder series on the specific mixes; cement content and aggregate assumptions are typical, not measured.
- No public deployment numbers found for VERIFI/Load Assurance on residential jobs — the "almost never specified residentially" claim rests on the systems' DOT/commercial marketing and absence of residential case studies, not a survey.
- Could not verify current pricing for Load Assurance per-truck hardware or VERIFI subscription cost (vendor quotes, not published).
- Alhozaimy 2006 data is hot-dry environment; temperate-climate losses may differ.

## Sources
1. ASTM C94 water-addition rules and 2013 transit amendment — NRMCA FAQ "Acceptance Testing": https://www.nrmca.org/wp-content/uploads/FAQ_Concrete_Materials2024.pdf
2. NRMCA CIP 26, "Adding Water to Concrete at the Jobsite" (jobsite addition rules, pre-placement conference): https://Smithreadymix.com/wp-content/uploads/2018/01/26p.pdf
3. MoDOT VERIFI research conclusions (Iowa State InTrans SP14-3): https://www.intrans.iastate.edu/wp-content/uploads/2018/08/SP14-3-Koehler-Verify-sec.pdf
4. VERIFI sample specification (slump ±25mm, water ±3%): https://gcpat.com.au/sites/default/files/pdf/current/resource/GCPAT_verifi_sample_specification_au_14408.pdf
5. Command Alkon Load Assurance with real-time air content (May 16, 2024): https://www.globenewswire.com/en/news-release/2024/05/16/2883681/0/en/Command-Alkon-s-Load-Assurance-Offers-Unparalleled-Visibility-into-Concrete-Properties-with-Real-Time-Air-Content-Measurement.html
6. TxDOT special provision accepting in-transit automation: https://www.forconstructionpros.com/concrete/press-release/21136406/gcp-applied-technologies-inc-new-texas-dot-rule-allows-for-concrete-automation
7. Abo Mustafa & Zregh, "Retempering of fresh concrete and its affect on concrete strength," University Bulletin 16(3), 2014 (-19% to -29% with water retempering): https://zu.edu.ly/Bulletin/issue_n16_3/Contents/E_06.pdf
8. Retempering review citing Alhozaimy 2006 (within-limits <10% loss, beyond-limits up to 35%, R > 0.892 slump/strength correlation): https://www.scribd.com/document/395790913/Re-of-Concrete-1
9. 1 gal/yd³ ≈ 1 in. slump rule of thumb, VERIFI validation context: https://www.researchgate.net/figure/Typical-Documentation-of-Concrete-Delivery-with-VERIFI_fig2_260516795
