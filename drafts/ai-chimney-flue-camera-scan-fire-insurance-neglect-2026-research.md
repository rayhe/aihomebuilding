# Research: AI Chimney Flue Camera Scans vs. the Insurance Neglect Trap

**Article #827 | Journalist: Catherine Chen | Date: 2026-09-11**

## Kill test
PASS. A buyer or owner with a fireplace faces a concrete fork: pay ~$300-450 for a Level 2 video scan, or risk a flue-liner crack turning a contained creosote burn into a structural fire the insurer can deny as neglect. This article tells them exactly which inspection to order, what it costs, and which claim language denies them.

## Core thesis
NFPA data shows chimney fires are mostly cheap when contained ($5M total across 13,120 confined flue fires, 2016-2020 average) and catastrophic when they escape the flue ($234M across just 3,010 non-confined fireplace/chimney fires = ~$77,700 each). The difference between those two numbers is the flue liner: a cracked or missing liner is what lets a $380 contained event become a $77k house fire. AI-assisted camera inspection (video scan + computer-vision defect flagging, drone radar in research) is the only inspection method that sees the liner. Yet standard home inspections and even Level 1 chimney inspections never look at it, and insurers can deny fire claims when creosote buildup shows neglect.

## Primary sources

1. **NFPA Home Heating Fires report, tables 2016-2020 (NFPA No. USS09ST):** 44,210 heating equipment fires/yr avg; confined chimney or flue fires 13,120 (30%) with $5M direct damage; fireplace or chimney (non-confined) 3,010 (7%) with $234M damage, 30 deaths. https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/US-Fire-Problem/Fire-causes/osHeatingTables.pdf?hash=AEF7B2252056320B43D0AF324C832526
2. **NFPA via Neighborhood Chimney Services (2026 press, citing NFPA):** fire departments responded to avg 37,365 heating equipment fires/yr 2020-2024; 417 deaths, 1,260 injuries, $1.2B property damage. https://lifestyle.thedam.fm/story/231116/damaged-chimney-flue-liner-issues-can-increase-hidden-fire-risks/
3. **NFPA Home Heating Fires exec summary (2011, figures still cited):** failure to clean = leading factor (26%); creosote fire best estimate 14,190/yr (22% of heating fires), $35M damage; "chimneys and chimney connectors accounted for the largest share of home heating fires." https://cms2.revize.com/revize/parkersburgfire/Document Center/Fire Safety/Home Heating Docs/HeatingExecutiveSummary.pdf
4. **NFPA 211 via ChimneySweeper.com:** "Chimneys, fireplaces, and vents shall be inspected at least once a year for soundness, freedom from deposits, and correct clearances." Three inspection levels: L1 visual ($100-250), L2 video scan ($200-500, required on property sale/transfer), L3 destructive. https://chimneysweeper.com/inspection-diagnostics-standard-procedures/
5. **CSIA via Chimney Insight (2026):** L1/L2/L3 cost table ($80-200 / $200-500 / $1,000-5,000+); video scanner is the defining L2 tool; always request written report with video stills (verbal findings have no legal standing for insurance claims). https://chimneyinsight.com/chimney-inspection-levels-1-2-3-explained/
6. **Redfin (2025):** NFPA recommends annual inspection regardless of use; Level 2 "highly recommended when buying or selling"; home inspectors do NOT do detailed chimney checks. https://www.redfin.com/blog/fireplace-chimney-inspection/
7. **Square One Insurance (2026):** if you did not regularly sweep and creosote caused the fire, "the resulting damages to your home would generally not be covered"; undeclared fireplace = voided policy. https://www.squareone.ca/resource-centres/homeowner/chimney-maintenance
8. **Osaka University / Phys.org (2021):** drone-mounted ultra-wideband millimeter-wave radar inspected lining thickness inside a 150m industrial chimney; material-penetration at frequencies commercial radars can't achieve. https://phys.org/news/2021-06-drone-mounted-millimeter-wave-radar-walls-chimneys.html
9. **ChimneySpector, University of Bonn (ICUAS 2017):** autonomous MAV with 3D laser SLAM + textured surface reconstruction for indoor chimney inspection, first autonomous system of its kind. https://sup1rpplvrlfol-wqoorlg9.vcmarry.top/papers/ICUAS_2017_Nieuwenhuisen_ChimneySpector.pdf
10. **Hadek (industrial):** autonomous inspection drone for industrial chimney linings with Avular, service-ready. https://www.hadek.com/chimney-technology/self-navigating-inspection-drone-for-industrial-chimneys/
11. **The Chimney Guys / Ohio (2026):** "if the damage could reasonably have been prevented by the homeowner, most insurance carriers will deny the claim." Annual sweep + inspection + timely repairs = the three keys. https://therealchimneyguys.com/will-a-homeowners-insurance-policy-cover-chimney-damage/

## Original contribution: the $380 vs $77,700 calculation
Nobody in the trade press has divided NFPA's damage figures this way. From the 2016-2020 table:
- Confined chimney/flue fires: $5M / 13,120 fires = ~$381 average. These are the fires that stayed inside the flue.
- Non-confined fireplace/chimney fires: $234M / 3,010 fires = ~$77,700 average. These are the ones that escaped.
The 204x multiplier between the two is the cost of a breached liner or creosote-fueled spread. And creosote estimate: $35M / 14,190 = ~$2,466 average per creosote fire — modest, because most stay contained; the catastrophe tail is the 3,010.
- ROI math: Level 2 video scan ~$350 (midpoint of $200-500). Average heating-fire loss $1.2B/37,365 = ~$32,100. One scan that catches a cracked liner before it matters pays for itself 92x against the average event.

## Technology state
- Residential: camera-on-a-pole video scans are standard L2 practice; sweeps record video, some annotate stills. True AI computer-vision crack/creosote classification is emerging in industrial chimney drones (Hadek, ChimneySpector research) but NOT standard in residential sweeps yet. Be honest: the "AI" in this article is (a) industrial drone inspection research trickling down, (b) the coming computer-vision assist on flue-scan footage. Do not overclaim an AI residential chimney product that doesn't exist.
- Drones for exterior chimney scans are already used by residential inspectors (masonry crown/mortar assessment) alongside video; thermal cameras spot heat escaping through liner cracks.

## Actionable takeaways (for the article)
1. Buying a house with a fireplace: order a Level 2 video scan yourself ($200-500), don't trust the general home inspection. Standard inspectors explicitly don't do this.
2. Owning: NFPA 211 says annually. CSIA says sweep at 1/8" sooty buildup. Burn only seasoned wood (creosote's feedstock is unseasoned/green wood).
3. Keep the written report + video. It's your insurance evidence; verbal findings are legally worthless per chimneyinsight.
4. Declare the fireplace to your insurer; if you never swept and creosote ignites, expect a neglect denial.
5. Red flags needing L3 ($1k-5k) immediately: smoke backing into room, soot falling into firebox, white efflorescence on exterior, rust at damper.

## Limitations
- NFPA 2016-2020 figures are the most recent tabulated; 2020-2024 top-line (37,365/yr, $1.2B) from a 2026 press release citing NFPA, not the full report.
- Averages ($77,700) hide skew: a few total-loss fires dominate; median non-confined loss is lower.
- Insurance denial is carrier- and state-specific; "generally not covered" is insurer guidance, not case law surveyed.
- Could not verify any residential AI chimney-scan product with published accuracy claims; the article must state this gap explicitly.

## Counterargument
The strongest case against: annual L2 video scans for every fireplace owner would cost homeowners billions against a problem (37k fires) that is already declining with gas/electric fireplace adoption. Most confined flue fires are self-limiting $381 events, and sweeping alone (cheap, L1 bundled) prevents the creosote ignitions that matter. The AI camera is arguably overkill where a $200 sweep does 90% of the prevention.

## Angle choice
Headline: "Your Chimney's Fire Costs $381. Your Flue Liner's Failure Costs $77,700. The Camera Knows the Difference."
Catherine Chen: codes (NFPA 211, IRC R1001-R1005), inspection levels, insurance exclusion language, the documented-evidence requirement. Dry humor allowed.
