# Research: AI rebar cover verification before the foundation pour
## Article #961 — Frank "The Foreman" DeLuca

### Thesis
Concrete cover over rebar in residential footings is the most consequential measurement nobody takes. ACI 318 and the IRC demand 3 inches of concrete between steel and earth. Commercial jobs verify it with special inspectors and cover meters. Homes are explicitly exempt (IBC 1704.2), and the building official's pre-pour look-see is a visual glance that can't measure cover and can't see what the concrete displaces during placement. Depth-camera + segmentation models now measure cover to sub-millimeter accuracy for free. The fix costs nothing; the failure costs $7,600-$100,000.

### Kill test
Does this help someone building or buying a home? Yes. A homeowner building can require dobies (concrete chairs) in the contract, demand pre-pour photos with a tape measure at bar level, and ask the inspector to check cover explicitly. A buyer can request pour-day photo documentation before closing. Concrete repair contractors confirm this is a top-3 cause of premature foundation spalling in residential stem walls.

### Primary sources (7)
1. **ACI 318-19, Table 20.6.1.3.1** — minimum concrete cover: 3" for concrete cast against and permanently exposed to earth (all bar sizes); 2" for No. 6+ exposed to earth/weather in formed work; 1.5" for No. 5 and smaller in formed work; 0.75" for slabs not exposed. (via concretecalculate.com calculator page; github.com/asv-digital/agents-us-engineers ACI 318 reference; thebuildingcodeforum.com thread 4239)
2. **2021 IRC R403.1.3.5 / 2022 California Residential Code** — reinforcement "installed with support and cover"; No. 4 horizontal bar 3-4" from bottom of footing in SDC D0-D2; verticals at 48" o.c. (codes.iccsafe.org chapter 4, INRC2020P1 and CARC2022P1; Wisdom & Associates 2021 IRC Part 3 handout: "Minimum 3" cover for cast against earth (footings); 1.5" for removable forms #5 and smaller; 0.75" for ICF")
3. **IBC Section 1704.2, Exception 2** — special inspections and verifications for foundation concrete are NOT required for Group R-3 (one- and two-family dwellings). Residential footings are exempt from the cover-verification regime that commercial work gets. (codelibrary.amlegal.com, San Francisco Building Code excerpt)
4. **Wang et al., Buildings 14(11):3693 (MDPI, Nov 2024)** — depth camera + RANSAC point-cloud extraction + semantic segmentation for rebar QA: max deviation 0.41 mm for cover thickness, 1.32 mm for upper/lower lattice distance, 5 mm for spacing; nominal bar diameter accuracy 98.4%. Conclusion: replaces "inefficient manual inspection" in construction-stage QA. (mdpi.com/2075-5309/14/11/3693)
5. **ISARC 2024, Paper 235 (iaarc.org)** — vision-based rebar spacing inspection with RGBD camera: average error 2.65 mm vs manual measurement; end-to-end image-to-result pipeline; small-diameter bars noted as the hard case.
6. **Sanei et al., arXiv:2604.26112 (Apr 2026)** — AR-assisted rebar inspection on HoloLens 2, n=30 within-subjects: trunk flexion -30.8%, task completion time -67.7%, NASA-TLX workload -45.6%, SUS 76.1, inspection accuracy maintained. The inspection itself is being productized.
7. **Pennsylvania UCC inspection procedures + building-code forum practitioner threads** — PA UCC requires footing inspection "after footing is dug with chairs and rods in place and before concrete is poured"; forum inspectors report ordering removals when rebar placement is improper and requiring $300-$500 engineer certification letters for after-the-fact pours. The inspection exists but is visual and pre-pour only. (pa.gov UCC-9; thebuildingcodeforum.com threads 9299, 3916)

### Repair economics (primary)
- Stem-wall spall repair: **$28-$48 per linear foot** (Concrete Repairman, concreterepairman.com)
- Foundation spalling repair range: **$1,500-$30,000** depending on severity (9to5civil.com)
- Full structural rebuild (advanced damage): **$40,000-$100,000+** (Camrock Foundations, Florida cost breakdown)
- After-the-fact engineer certification letter: **$300-$500** (building code forum practitioner)
- Commercial special-inspection cover verification: $150-$300/hr inspector rates, typically a few hundred per visit

### The original calculation (nobody published this)
Typical new home: ~200 linear feet of footing perimeter. Code requires 3" cover where cast against earth (ACI 318-19 Table 20.6.1.3.1). The classic residential shortcut: rebar laid directly on soil with no chairs ("ground-hugging steel") or plastic chairs that creep under concrete weight — saving roughly $40-$60 in dobies and 30 minutes of labor.

Failure math:
- 200 lf x $38/lf (midpoint of $28-$48 stem-wall spall repair) = **$7,600** for one spalling cycle at 15-25 years.
- If deterioration reaches structural level: $40,000-$100,000+ for rebuild.
- Verification math: the same photo audit that Wang et al. validated at 0.41 mm cover accuracy runs on a phone camera. Marginal cost: ~$0. Inspector cover check (commercial equivalent): a few hundred dollars per visit.
- Ratio: $7,600 : $0 (phone photo) is undefined; $7,600 : $200 (single cover-verification pass) is **38:1**. Against full rebuild: $100,000 : $200 = **500:1**.

What the inspector sees vs what matters: the pre-pour inspection checks that steel is present and roughly placed. It cannot verify 3" of cover at every point (that needs measurement), and it is over before the pour displaces steel — concrete placement is when tied bars shift, chairs kick over, and cover vanishes. The one residential inspection happens at the one moment the defect is least visible.

### Counterargument (steel)
Excessive cover has its own failure modes: Eng-Tips thread notes that more cover can mean wider surface cracks, and ACI treats specified cover as minimum with tolerance, not a target to maximize. Cover meters on fresh pours only work pre-pour. Residential codes deliberately keep inspection light to hold housing costs down; a special-inspection regime for every footing would add real cost to entry-level homes. And most residential foundations never fail — soil conditions, water table, and deicing-salt exposure matter more than cover in mild climates. The article must grant all of this.

### Limitations
- No dataset found on residential footing cover-defect prevalence (nobody measures it, so nobody can report it — say so).
- Spall repair $28-$48/lf is Arizona stem-wall pricing (Concrete Repairman); national costs vary.
- Wang et al. validated on slabs with depth cameras, not muddy residential footing trenches; field performance in a trench with standing water is unproven.
- Corrosion timeline (15-25 years for spalling) is a practitioner's range, not a study result.
