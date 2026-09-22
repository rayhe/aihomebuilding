# Research: AI Roof Underlayment Lap Photo QA (article #940)

## Working thesis
Roof underlayment is the roof's actual waterproofing layer, and it gets buried under shingles within hours or days, usually with zero photographic record. Lap errors, missing ice barrier, wrong fasteners, and reversed courses are invisible forever once shingles go down. A drone or phone-photo AI vision pass between underlayment and shingle installation is the cheapest inspection on the whole job (Checkatrade: AI drone workmanship surveys under £100, ~75% cheaper than manual inspection).

## Kill test
Does this help someone building or buying a home? Yes. A re-roof runs $9,500-$31,871 depending on source; botched underlayment voids the shingle warranty and produces leaks that surface years later when the evidence is entombed. A mid-job photo QA gives the homeowner a code-compliance record for insurance/warranty fights. Passes.

## Primary sources (7)

1. **IRC 2021, Chapter 9 (codes.iccsafe.org)** — R905.1.1: underlayment per manufacturer's instructions. R905.1.2: ice barrier required in ice-dam areas: two cemented layers OR self-adhering polymer-modified bitumen, from eaves to >=24" inside the exterior wall line; on slopes >=8:12, 36" measured along the slope. R905.2.2: shingles only >=2:12; double underlayment required 2:12-4:12. URL: https://codes.iccsafe.org/content/MDHCRC2021P1/chapter-9-roof-assemblies
2. **Owens Corning installation instructions** — synthetic underlayment: 6" horizontal overlap, 4" end lap, cap nails/staples; felt 15lb: 2" overlap, fasteners every 6"; felt 30lb: 4" overlap; low slope 2:12-4:12: each course overlapped minimum half the width plus 1 inch; self-adhered ice & water barrier standard overlap 3". URL: https://manuals.plus/owens-corning/corning-supreme-driftwood-manual
3. **Loveland Innovations / IMGING** — IMGING Detect (deep learning) auto-detects roof damage including *exposed underlayment* from drone imagery; on-site measurements shortly after flight. URL: https://eijournal.com/news/products-2/imging-becomes-first-drone-platform-with-on-site-roof-measurements-adds-ai-damage-detection-for-commercial-roofs
4. **SiteAware (formerly Dronomy)** — AI deviation detection for construction/roofing, cm-accuracy reality capture, documents full process installation-through-maintenance. URL: https://blog.dronedesk.io/drone-roof-inspection-software/
5. **EagleView Assess** — autonomous drone, AI anomaly detection + measurement; product explicitly used for "validating quality of work following completion of a job." URL: https://dronelife.com/2022/10/20/drone-tools-for-the-roofing-industry-eagleview-assess/amp/
6. **Checkatrade Labs** — drone + AI workmanship verification, surveys under £100, ~75% cheaper than manual; AI double-checked until proven reliable. URL: https://rcimag.co.uk/news/checktrade-drones-and-ai-tipped-to-improve-roofing-standards
7. **RoofersCoffeeShop: Roofing revolution part 3 (AI)** — AI image recognition identifies shingle types/damage; remote measurement; robots for installation. URL: https://www.rooferscoffeeshop.com/post/roofing-revolution-part-3-robotics-and-ai

## Key numbers
- 2025 Cost vs. Value Report: asphalt re-roof avg $31,871, 67.5% recouped (Redfin: https://www.redfin.com/blog/does-a-new-roof-increase-home-value/)
- RubyHome roofing stats: avg roof replacement $9,526; asphalt ~80% of projects; ~5M roofs/yr installed. URL: https://www.rubyhome.com/blog/roofing-stats/
- ~5 million roofs installed per year (RubyHome)
- Drone workmanship surveys: <$100 (Checkatrade), 75% cost reduction
- 4,041 OSHA fall-protection citations FY2026 (from prior article #939 research; verify if reused)
- Ice barrier: 24" inside wall line; >=8:12: 36" along slope (IRC R905.1.2)
- Synthetic laps: 6" horizontal / 4" end; felt 15lb: 2"; low slope: half-width + 1" (OC instructions)

## Original contribution (novel analysis)
The **buried-evidence hold-point checklist**: cross-referencing IRC 2021 R905 against Owens Corning install instructions to produce a 6-point drone-verifiable underlayment checklist (lap width, lap direction/shingling, ice barrier extent, fastener spacing, double coverage on low slopes, valley lining). Nobody publishes a unified "what a photo can prove before the shingles bury it" checklist combining code + manufacturer spec. Plus break-even math: QA pass cost vs. re-roof value at stake.

## Methodology (for break-even)
QA pass $100-$400 (Checkatrade <£100 consumer; $150-$400 drone tiers from #939 research). Value at stake: leak remediation on a failed re-roof — deck repair + partial shingle removal. Conservative: one warranty-denied leak repair $2,000-$5,000. Break-even: QA pays for itself if it catches one defect per 10-50 jobs. (State as decision tool, not promise.)

## Counterargument (strongest, at full strength)
Roofers will say: (1) the underlayment inspection already exists — it's called the foreman, and a good crew self-inspects; (2) weather windows are brutal — underlayment goes down in the morning, shingles in the afternoon; inserting a QA hold delays production roofing crews that live on piece rates; (3) a photo can show lap width but cannot verify self-adhered membrane adhesion, or what is under the lap it can see; (4) AI models are trained on finished-roof damage, not in-progress install defects — nobody has published accuracy numbers for lap-error detection. Also: drone flights require Part 107 commercial pilot in the US.

## Limitations
- No published study of AI accuracy on installation defects (vs. damage detection on finished roofs).
- Cannot verify adhesion of self-adhered membranes or laps hidden under subsequent courses.
- FAA Part 107 required for commercial drone ops; residential timelines often don't allow a hold.
- Lap spec varies by manufacturer/product; the checklist uses OC synthetic as reference, felt specs differ.
- Warranty void language varies by manufacturer tier (GAF/OC tiered warranties); article must not claim "any lap error voids all warranties."

## Skepticism notes
Katerra-style failures don't apply directly, but the construction-tech graveyard rule applies: drone-vision startups (e.g., earlier drone roofing plays) have pivoted to insurance claims; installation-QA AI is largely vendor marketing today. Say so.

## Journalist
Jake Kowalski (Construction Technology beat). Frank DeLuca considered for the hold-point process angle; Jake wins on tech beat match.
