# Research: AI Stair Geometry Photo-Audit — Riser/Tread Uniformity (2026)

**Slug:** `ai-stair-geometry-photo-audit-riser-tread-2026`
**Article #:** 968
**Journalist:** Elena Vasquez (architecture & design beat)
**Date:** September 25, 2026
**Status:** Research complete → DRAFT

## Working headline
"Your Staircase Is the Most Beautiful Thing Your Architect Drew. It Might Also Be Illegal."

Backup: "One Stair in Your Flight Is 3/4 Inch Taller Than the Rest. Your Foot Won't Notice Until It Does."

## Angle (1-2 sentences)
Residential staircases are the #1 injury-producing product category in American homes by NEISS data, yet nobody audits the one thing the biomechanics research says matters most: dimensional uniformity of risers and treads. An AI photo-audit (side photo + reference object + phone LiDAR) can measure every riser against the IRC 3/8-inch uniformity tolerance in minutes, and the fix for the worst offender is usually a $200 stair-nosing retrofit, not a rebuild.

## Kill test
Does this help someone building or buying a home? **Yes.** A buyer can photograph the stairs during a showing and flag non-uniform risers before closing; a remodeler can verify a staircase subcontractor's work against R311.7.5.1/5.2 tolerances without a tape measure on every tread; a designer can check whether their floating-stair concept passes the 4-inch sphere rule before it becomes a punch-list fight.

## Primary sources

### 1. IRC stair code (2018/2021), R311.7
- R311.7.5.1: max riser height 7-3/4" (196 mm), measured vertically between leading edges of adjacent treads. **Greatest riser height within any flight shall not exceed the smallest by more than 3/8" (9.5 mm).**
- R311.7.5.2: min tread depth 10" (254 mm), measured horizontally between vertical planes of foremost projection of adjacent treads. Same 3/8" uniformity rule.
- R311.7.5.3: nosing 3/4"–1-1/4" required on solid-riser stairs with tread < 11"; bevel ≤ 1/2".
- Open risers permitted only if the opening does not pass a 4" (102 mm) diameter sphere (applies to openings > 30" above floor/grade).
- R311.7.2: min headroom 6'-8". R311.7.1: min width 36".
- Sources: SMA Visual Interpretation of 2018 IRC (stairways.org via inspectapedia.com PDF); Knox County residential stair code sheet.
- URL: https://inspectapedia.com/Stairs/2018-IRC-Stair-Code-WA.pdf
- URL: https://knoxcounty.org/codes/pdfs/construction_info/Stairs.pdf

### 2. Blazewick et al. 2018 — "Stair-related injuries treated in United States emergency departments"
- Am J Emerg Med, PMID 28947224, DOI 10.1016/j.ajem.2017.09.034.
- NEISS 1990–2012: **24,760,843 ED patients**, average **1,076,558/yr**, 37.8 injuries/10,000 residents.
- Rate fell 12.6% (1990–1996), then **rose 24.0%** (1996–2012).
- 62.4% female (rate 46.5 vs 29.1 per 10,000); sprains/strains 32.3%, soft tissue 23.8%, fractures 19.3%; lower extremities 42.1%, head/neck 21.6%; 67.2% of visits by ages 11–60.
- Direct medical + indirect costs of nonfatal stair injuries: **$92B/yr** (cited cost studies).
- ~50% of US homes contain stairs (Census); ~60% of stair injuries occur at home (study secondary coverage).
- Senior author Dr. Gary Smith (Nationwide Children's): "This underscores the need for increased prevention efforts, particularly those related to stair design and construction."
- URLs: https://pubmed.ncbi.nlm.nih.gov/28947224/ ; https://www.reuters.com/article/us-health-injuries-stairs/injuries-on-stairs-occur-in-all-age-groups-and-abilities-idINKBN1CE1Z4/

### 3. John Templer — stair dimension research (Virginia Tech, NSF-funded, 1992)
- Collapsible-stair trip experiments (harnessed volunteers, video analysis of would-be landings).
- Proposed code revision: **11" treads × 7" risers** (vs common 9" × 8.5").
- Finding: modern feet are larger; 9" treads don't fit adult feet, shifting balance forward.
- NAHB counterclaim (1993): larger stairs add ≥150 sq ft and **$1,500** to a typical house. Never adopted; code still permits 10" × 7-3/4".
- 2R+T check: code max geometry = 2(7.75)+10 = 25.5"; Templer ideal = 2(7)+11 = 25"; Blondel comfort range 24–25".
- URL: https://scholar.lib.vt.edu/VA-news/ROA-Times/issues/1993/rt9311/931109/11090055.htm

### 4. Francksen et al. 2020 — "Negotiating stairs with an inconsistent riser"
- Applied Ergonomics 87, DOI 10.1016/j.apergo.2020.103131 (LSBU).
- Experimental, n=26 young + 33 older adults: inconsistent riser → **~9 mm reduced foot clearance in ascent** (toe-catch → trip), **3% reduced foot contact length in descent** (overstep → fall).
- Participants did NOT alter foot trajectories — they neither detected nor adjusted to the inconsistency.
- Conclusion: "Consistent stair construction is vital, and existing inconsistencies should be identified."
- URL: https://openresearch.lsbu.ac.uk/item/89z4z

### 5. CDC/NIOSH — "Stairway Step Dimensions: Replication of a Measurement System Study"
- Summarizes Templer (1992), Johnson & Pauls (2010), Archea–Collins–Stahl (1978) expectation model: users calibrate their stepping pattern on the first 1–2 steps, then run on unconscious assumption of uniformity — a non-uniform step mid-flight breaks the pattern.
- ANSI A1264.1: adjacent riser/tread difference ≤ 4.8 mm (3/16"); whole-flight spread ≤ 9.5 mm (3/8") — the same 3/8" as IRC.
- URL: https://stacks.cdc.gov/view/cdc/200973/cdc_200973_DS1.pdf

### 6. EHS Today — stair descent/ascent trip attribution
- Pedestrians view only the **first and last three steps**; the middle is negotiated blind.
- Ascent trips attributed to riser variation; descent trips to inadequate tread depth (ball of foot must land without overhanging).
- URL: https://www.ehstoday.com/archive/article/21903857/reducing-slips-trips-and-falls-in-stairways

### 7. StairNet (arxiv 2201.05275) + MR staircase inspection research
- StairNet: deep-learning stair line detection from single images (2,670-image training set, convex/concave endpoint classification) — proves CV detection of stair nosing geometry from photos is feasible.
- Mixed Reality Application for Staircase Inspection (ResearchGate): MR headset + native sensors → hologram stair features → distance measurements vs code standards; feasibility demonstrated.
- iGUIDE forum: Planix laser camera used in vertical orientation to extract stair rise/run via DXF point cloud.
- URLs: http://arxiv.org/pdf/2201.05275v2 ; https://www.researchgate.net/publication/374390085_MIXED_REALITY_APPLICATION_FOR_STAIRCASE_INSPECTION ; https://forum.goiguide.com/t/the-rise-run-for-stairs/4828

## Original contribution (the novel analysis)
**The Templer economics, updated:** NAHB's 1993 claim was $1,500 to build Templer's safer 11×7 stair. CPI 1993 (≈144.5) → 2026 (≈320) = ratio ≈ 2.2×, so that claim is ≈ **$3,300** in today's dollars. Expected injury cost per stair-household: $92B × ~60% at-home ÷ ~73M stair-households (50% of ~146M US housing units) ≈ **$750–800/yr**. At that rate, the safer stair pays for itself in ≈ 4 years on injury-cost math alone. (Inputs shown; assumptions labeled; commercial vs residential injury mix is the main uncertainty.)

**The 6-step audit protocol:** research says users only look at the top and bottom 3 steps — so a phone-based audit that measures just those 6 risers plus the 4" sphere test on open risers captures the steps that matter. Phone LiDAR (±1–2 mm) is ~5× finer than the 9.5 mm (3/8") IRC tolerance, so the measurement is not the hard part — finding someone who bothers is.

## Strongest counterargument
Most stair falls are behavioral (footwear, distraction, carrying objects, lighting, loose carpet), not dimensional — Templer's own NAHB critics said lighting and clutter dominate. A code-compliant stair still kills if you're carrying laundry in socks at 11pm. The audit doesn't fix that; it fixes the fraction attributable to geometry, which the biomechanics papers bound at meaningful but minority. Also: $92B is an aggregate; attributing per-household expected cost assumes uniform distribution, which is false (elderly and toddlers carry the risk).

## Limitations
- NEISS captures ED visits only, not falls treated elsewhere; commercial vs residential mix unseparated in the $92B figure.
- $92B cost figure is from cited cost studies (not computed in this article); per-household division is illustrative, not actuarial.
- Templer's experiments were small-n, lab-based, with harnessed volunteers.
- Francksen 2020 used a single inconsistent riser, lab setting; real-world multi-variable falls not modeled.
- Photo-audit accuracy claims for phone LiDAR (±1–2 mm) are vendor-adjacent; no independent field study of stair-audit-by-phone exists.

## Actionable takeaways
1. **Buyers:** during a showing, photograph the stairs from the side; place a dollar bill (6.14" long) on a tread as a scale reference and check whether any two risers differ visibly — a 3/4"+ difference is both visible and a trip mechanism.
2. **Remodelers:** specify in the sub contract "all risers within 3/8" per IRC R311.7.5.1" — it is the most-litigated stair dimension in forensic engineering casework.
3. **Designers:** floating stairs must pass the 4" sphere test at >30" elevation; gap creep from tread deflection counts.
4. **Fix cost:** the common failure (one rogue tall riser at the top or bottom of a flight) is usually fixable with a nosing rebuild or new tread, ~$200–$400 — not a stair replacement.
5. **The 6-step audit:** measure the top 3 and bottom 3 risers first; that is where people look, and where the Archea model says missteps start.
