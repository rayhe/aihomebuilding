# Research: AI Foundation Crack Triage — Vision Models vs. the Homeowner's Decision Ladder

**Article #864 | Journalist: Jake Kowalski | Date: September 15, 2026**

## Working headline
"AI Can Spot Your Foundation Crack From a Photo. It Can't Tell You Whether to Panic."

## Kill test
Homeowner finds a crack in the foundation wall and has to decide between three things tonight: ignore it, seal it, or spend $500 on a structural engineer before a contractor sells them $16,000 in piers. This article gives them the triage ladder and explains why the AI apps won't do it for them yet. PASS.

## The AI side: what the research actually shows

**Source 1 (primary, peer-reviewed):** Comprehensive survey on concrete crack detection (Wiley, 2026). Establishes the academic severity ladder used to train virtually all crack-detection models:
- Hairline: <0.1 mm — cosmetic
- Fine: 0.1–0.3 mm — acceptable, monitor
- Medium: 0.3–1.0 mm — moisture ingress risk
- Wide: >1.0 mm — "urgent structural concern"
URL: https://onlinelibrary.wiley.com/doi/10.1155/vib/4950659

**Source 2 (primary, peer-reviewed):** YOLO26n model for concrete surface deterioration detection, Scientific Reports (Sept 2026). 6,806 manually annotated images, 80/10/10 split. Results: precision 95.8%, recall 97.7%, F1 0.967, mAP@50 98.9%. Detects cracks, spalling, exposed rebar, efflorescence, rust stains. Outperforms YOLOv5n/v8n/v11n/v12n. But: labels are detection-classification ("crack present"), not structural prognosis.
URL: https://www.nature.com/articles/s41598-026-68706-0

**Source 3 (primary, peer-reviewed):** YOLOv8n multi-stage crack detection and classification, The Journal of Engineering / IET (2026). 4,000 concrete images. Recall 92.5%, precision 91.8%, overall accuracy 93%. Again detection-focused: finds cracked regions in complex backgrounds.
URL: https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/tje2.70208

Key observation: the entire academic literature optimizes for DETECTION (find the crack) and occasionally CLASSIFICATION (crack type: longitudinal, transverse, shear). Almost none of it answers the homeowner's actual question: is THIS crack, on THIS house, worth paying for?

## The homeowner side: the decision ladder

**Source 4 (primary, industry data):** Angi 2026 underpinning cost guide. $1,000–$3,000 per pier depending on type; average total project ~$8,000, typical range $2,000–$20,000. Segmented/concrete piers ~$1,000 each; steel push piers ~$2,000; helical ~$3,000.
URL: https://www.angi.com/articles/how-much-underpinning-foundation-cost.htm?intcmp=NoOff_thedrive_blog_body-blog-post_ext&entry_point_id=33797117

**Source 5 (primary, industry data):** Foundation piering cost guide (wvcjournal, 2026). Most residential jobs: 7–10 piers. National average project: ~$16,000, range $7,000–$30,000.
URL: https://pr.wvcjournal.com/article/Foundation-Piering-Cost-Guide-Push-Piers-vs-Helical-Piers-Price/6a5a745d5bfb640002370cd8

**Source 6 (primary, industry data):** Foundation Repair Cost 2026 (Lewis Jackson, Foundation Repair Finder via Medium, Feb 2026). Minor crack seal: $250–$800. Major structural shifts with piers: $10,000+. Average foundation repair: $2,000–$15,000, most homeowners $4,500–$8,000. Wall anchors $500–$1,000 each; carbon fiber straps $400–$800 per strap.
URL: https://medium.com/@lewis_35028/how-much-does-foundation-repair-cost-in-2026-complete-price-guide-76abe3f76025

**Source 7 (primary, professional guidance):** Angi 2026 foundation crack guide. The 1/4-inch rule: cracks wider than 1/4 inch = sign of serious structural damage, handle by a pro. Cracks wider than 1/8 inch = seal against water, monitor. Horizontal cracks = most serious (hydrostatic pressure, wall buckling). Stair-step = differential settlement. Pencil-mark monitoring: mark crack ends, recheck every couple months.
URL: https://www.angi.com/articles/quarter-inch-crack-my-foundation-major-concern.htm?cid=ssabadge&page=16&entry_point_id=33797117

**Source 8 (primary, professional guidance):** HAR.com (Houston Association of Realtors) foundation warning signs guide. Ordered severity: hairline mortar cracks (ignore) → L-section shrinkage cracks (monitor) → stair-step >1/4" or bulging (concern) → horizontal cracks (most serious; may need new foundation). Drainage spec: soil should slope 6 inches per 10 horizontal feet.
URL: https://www.har.com/ri/553/identifying-house-foundation-problems?cid=JAD

**Source 9 (primary, product data):** Avongard/tell-tale crack monitors. Two overlapping plates, mm-calibrated, measure opening/closing and shear to nearest mm. Available in 3-packs for DIY use (Amazon listing confirms consumer availability). Hoskin "Home Monitoring Kit" includes crack width gauge + tell-tales + crack record sheets + homeowner guide book — the analog monitoring stack exists and costs ~tens of dollars.
URL: http://hmagrp.com/wp-content/uploads/2017/02/GEO-DS-0013-Tell-Tale-Crack-Monitors.pdf

## ORIGINAL CONTRIBUTION: the mm-to-inch mismatch calculation

This is the novel analysis: map the academic AI severity ladder onto the residential decision ladder.

Academic AI training labels (Wiley survey): >1.0 mm = "urgent structural concern."
1.0 mm = 0.039 inches. The residential "call a professional" threshold (Angi/HAR): 1/4 inch = 6.35 mm.

So the AI models that score 95%+ on "severity classification" were trained on labels where a 6.35 mm crack would be **six severity classes past urgent** — while every structural engineer and realtor guide in the country tells homeowners that cracks under 1/4 inch (6.35 mm) are generally monitor-and-seal territory. A model trained on bridge-inspection labels applied to a homeowner's basement photo would flag essentially every visible crack as catastrophic.

Calculation: visible residential cracks that prompt a photo range from ~1 mm (clearly visible to naked eye) to ~6 mm. On the academic ladder, ALL of these are "medium" to "wide/urgent." On the residential ladder, ALL are below the 1/4-inch professional threshold. The models and the homeowner are speaking different severity languages. That's the gap no vendor mentions.

The second novel point: what the AI can't see. The HAR/Angi guides agree the decisive variable isn't width at a single moment — it's MOVEMENT OVER TIME (active vs. dormant), direction relative to structure, and accompaniments (bowing, displacement, water). A single photo, however accurately classified, cannot distinguish a 20-year-old dormant shrinkage crack from one that grew 3 mm this winter. The pencil mark / tell-tale method (two pencil lines across the crack, dated) answers the only question the engineer actually cares about first: is it moving? No current consumer vision tool does time-series crack monitoring; the wireless sensor systems (Montec, etc.) are infrastructure-grade, $300–$2,000/unit.

## The skepticism section (real)

1. **Perverse incentives:** The "free AI foundation inspection" is often a lead-generation tool for the repair company. The company that classifies your crack also sells the piers. Get the engineer's letter first ($400–$800 for a stamped evaluation) — the engineer sells nothing but the opinion.
2. **Dataset mismatch:** Models trained on 6,806 images of bridges and dams don't generalize to finished-basement drywall cracks or 1970s block walls with efflorescence. The MDPI 2018 paper flagged this explicitly: performance under real outdoor/field conditions remains limited.
3. **The "wide crack = urgent" oversimplification:** A 1.5 mm vertical shrinkage crack in a poured wall is fine; a 1.5 mm horizontal crack with wall bowing is an emergency. Width alone decides almost nothing. Any AI that scores severity from a width measurement is answering the wrong question.

## Strongest counterargument (full strength)

The honest case FOR AI crack tools: human inspectors miss things too, and the current alternative for most homeowners is either panic-Googling at midnight or a free inspection from someone selling piers. A vision model that flags cracks a homeowner would have walked past, paired with honest severity framing, beats both. And time-series is coming: the same phone you used for the first photo can take the second photo in 90 days, and change-detection between two photos is computationally easy. The infrastructure exists; the residential product just hasn't been built with the right labels. When it is — trained on engineer-verified outcomes, not bridge-inspection severity classes — it could genuinely reduce both unnecessary panic and unnecessary piers.

## Limitations (to state explicitly in article)

- Cost figures are national averages; union-market and high-cost coastal labor rates run higher. Texas expansive-clay pricing (Perma Pier data) skews toward piers.
- The academic mm-scale ladder comes from civil-infrastructure literature (bridges, dams), not residential foundations — that IS the point, but it means the comparison is cross-domain.
- No third-party audit exists of any consumer "AI foundation crack" app's accuracy claims; this analysis uses published academic benchmarks, not vendor marketing.
- Tell-tale monitor pricing from Amazon listing and Hoskin kit docs; consumer availability confirmed but prices not independently verified at write time.

## Actionable takeaways (the triage ladder)

1. Hairline/vertical, <1/8": seal it ($250–$800 pro, or DIY epoxy), date a pencil mark across it.
2. 1/8"–1/4": seal + monitor with a $15 tell-tale gauge or pencil marks; recheck in 90 days.
3. >1/4", horizontal, stair-step with bulging, or any water intrusion: structural engineer first ($400–$800), NOT the repair company's free inspection.
4. If the engineer says piers: get 3 bids, expect 7–10 piers at $1,000–$3,000 each ($7K–$30K, avg ~$16K).
5. The AI photo apps are fine as a second opinion on DETECTION. They are not a diagnosis. A photo can't tell you if it's moving.
