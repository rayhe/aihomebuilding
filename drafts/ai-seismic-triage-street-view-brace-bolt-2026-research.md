# Research: AI Seismic Triage vs. the Brace + Bolt Backlog

**Slug:** `ai-seismic-triage-street-view-brace-bolt-2026`
**Article #:** 747
**Journalist:** Catherine "Code" Chen (policy & regulation)
**Date:** September 2, 2026
**Ship after:** 2026-09-05 (queue: #745 ships 09-03, #746 ships 09-04)

## Angle
California's Earthquake Brace + Bolt program pays homeowners up to $3,000 to bolt pre-1980 wood-frame houses to their foundations. CRMP says as many as 1.2 million homes are vulnerable. The program has reached ~28,500 in 12 years. Meanwhile, researchers have shown AI can classify seismic vulnerability from street-view photos at city scale. The thesis: the bottleneck isn't just money, it's triage — grant dollars go first-come-first-served while the riskiest homes wait in line behind the merely old. AI screening could aim the money; instead we ration by luck of the registration window.

## Kill test
Does this help someone building or buying a home? Yes. Anyone buying or owning a pre-1980 California home with a raised foundation gets: eligibility rules, real cost numbers, the grant math, the "don't pull a permit before acceptance" trap, the supplemental grant for incomes under $94,480, and the property-tax exclusion. Actionable this week.

## Primary sources

1. **CRMP press release, Feb 12, 2025** — 2025 EBB window: 1,118 eligible ZIP codes (303 added), $20M+ in grant funding, "more than 28,500 California homeowners have received grant assistance" since 2013 launch. https://www.crmp.org/press-room/press-releases/2025/earthquake-brace-bolt-grants-now-available-to-more-eligible-california-homeowners
2. **CRMP press release, 2021** — "more than 15,000 California homeowners have completed a seismic retrofit"; "as many as 1.2 million vulnerable homes"; grants up to $3,000; qualifying houses typically built before 1980 with raised foundation and wood-framed crawl-space walls. https://www.crmp.org/press-room/press-releases/2021/more-than-15000-california-homes-protected-from-catastrophic-earthquake-damage-with-seismic-retrofit-program
3. **CRMP FAQ** — typical EBB retrofit cost $3,000–$7,000; no initial inspection required; FEMA-trained contractors in directory typically give free estimates; supplemental grants up to 100% of cost for households ≤$94,480 income. https://www.crmp.org/resources/faqs
4. **CRMP retrofit types page** — stem-wall/raised-foundation retrofit average $3,000–$7,000; EBB covers bolting + cripple-wall plywood bracing. https://www.crmp.org/resources/blog/types-of-seismic-retrofit-techniques
5. **FEMA release, Jan 15, 2020** — $20M HMGP grant to California EBB; retrofit bolts house to foundation + braces cripple walls with plywood; "$33.3 million project" with state/homeowner balance. https://www.fema.gov/fr/news-release/20200220/fema-grants-20m-california-increase-earthquake-protection
6. **Santa Monica Daily Press (via CEA's Janiele Maffei)** — average retrofit cost $5,300 statewide, ~$3,000 for bolt-only homes, $6,000–$8,000 in Bay Area; 2–3 day project; DIY under $3,000; no need to move out. https://www.smdp.com/grants-available-for-residents-to-make-homes-earthquake-safe/
7. **GEM Foundation / Earthquake Spectra (Aug 2025, Editor's Choice)** — deep learning + Google Street View to automatically classify building typology (storeys, structural system, pre-code vs code) for seismic exposure models; automates what used to require in-person surveys. https://www.globalquakemodel.org/GEMNews/deep-learning-speeds-up-building-classification
8. **GEM webinar / Vitor Silva, Earthquake Spectra May 2024** — building-imagery database to calibrate ML vulnerability classification; 3,000 buildings in Lisbon classified by vulnerability from photos. https://www.globalquakemodel.org/GEMNews/silva-earthquake-spectra-webinar-exposure-modelling-ai
9. **MDPI Smart Cities review (2026)** — Yu et al. (2020): CNN-based soft-story detection from street-view imagery for pre-disaster vulnerability screening; transfer learning makes it work on small datasets. https://www.mdpi.com/2571-5577/9/9/172

## Original contribution (the pace math)
- 28,500 grants over ~12 years (2013 to early 2025) = ~2,375 homes/year.
- 1,200,000 vulnerable homes / 2,375 per year = **~505 years** to cover the backlog at the historical pace.
- Even at the 2025 funding level ($20M+/yr ÷ $3,000/grant ≈ 6,600 grants/yr): 1.2M / 6,600 = **~180 years**.
- Nobody in the program's press material divides these two numbers. The program is a good deal for the lucky and a rounding error against the risk pool.
- Second calculation: at the $5,300 average retrofit cost, the $3,000 grant covers ~57% of a typical job, ~100% of a bolt-only job (~$3,000), and only ~38–50% of a Bay Area job ($6,000–$8,000). The grant is calibrated to the cheapest version of the work.

## Key facts for the draft
- EBB = bolts (anchor bolts tying sill plate to foundation) + plywood bracing of cripple walls (short wood-framed walls in crawl space).
- Eligibility: pre-1980, wood-frame, raised foundation, level or slight slope, in an eligible ZIP (1,118 as of 2025). Registration opens in a limited window each year (2025: Jan 15–Mar 26).
- Trap: do NOT pull a permit or start work before acceptance — disqualifies you.
- Supplemental grants: income ≤$94,480 → up to 100% of cost covered.
- CA Revenue & Taxation Code §74.5: seismic retrofits excluded from property-tax reassessment; file BOE-64 with county assessor within 30 days.
- What EBB does not cover: chimneys/masonry (FAQ lists it as a question — program scope is the foundation connection), hillside homes on steep slopes, homes already retrofitted.
- AI screening state of play: research-grade, city-scale, validated on thousands of buildings (Lisbon 3,000). No consumer-facing "photo your house, get your vulnerability score" product identified. Insurers (not homeowners) are the likely first buyers of this capability.

## Strongest counterargument
Triage is not the binding constraint; money is. Even perfect AI prioritization doesn't change the 180-year funding math — it just reorders the queue. And street-view AI has a structural blind spot for exactly this program: cripple walls live inside the crawl space, behind skirting and vents. A facade photo can guess vintage and structural system, but the thing being funded (bolts + cripple-wall plywood) is invisible from the curb. The honest version of the AI story is portfolio screening for cities and insurers, not a homeowner gadget. Also: a retrofit doesn't make a house earthquake-proof — contents damage, chimney collapse, and hillside failure modes remain, and EBB money doesn't touch them.

## Limitations
- The 1.2M figure is CRMP's upper-bound estimate ("as many as"), not a surveyed count; the 505-year figure assumes linear pace and constant funding, both heroic assumptions.
- Retrofit cost figures mix sources and years (Maffei's $5,300 statewide average is from a ~2024 interview; CRMP's $3,000–$7,000 range is current FAQ).
- AI vulnerability classification is validated on urban building stocks (Lisbon), not California single-family crawl-space homes specifically.
- 2026 EBB registration window details not confirmed at research time; 2025 window (Jan 15–Mar 26) cited as most recent confirmed.
- No independent audit of EBB retrofit quality outcomes found; completion counts are program-reported.

## Actionable takeaways (for the article)
1. Check your ZIP at EarthquakeBraceBolt.com during the annual registration window; 1,118 ZIPs were eligible in 2025.
2. Get a free estimate from a FEMA-trained contractor on the EBB directory before deciding — no inspection required to apply.
3. Do not pull a permit or start work before formal acceptance.
4. If household income is ≤$94,480, apply for the supplemental grant — it can cover 100%.
5. After completion, file Form BOE-64 with your county assessor so the retrofit doesn't trigger reassessment.
6. Bolt-only homes (~$3,000) can come out near zero out-of-pocket with the grant; budget the gap honestly if you're in the Bay Area.
