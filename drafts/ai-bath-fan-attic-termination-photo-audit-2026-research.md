# Research: AI Bath Fan Attic Termination Photo Audit
**Slug:** ai-bath-fan-attic-termination-photo-audit-2026
**Journalist:** Frank "The Foreman" DeLuca (project management & operations)
**Date:** 2026-09-24

## Thesis
The bath exhaust fan that terminates in the attic (instead of outdoors) is one of the most common residential defects, explicitly banned by IRC M1501.1. AI plan-review tools (UpCodes Plan Review, PlanAId) analyze drawings, but the defect happens in the field: the drawing shows a fan symbol, the installer just never runs the duct. The only reliable catch is a photo at rough-in/pre-drywall or an attic traverse. Original contribution: the Termination Ledger (rough-in vs retrofit vs remediation math) plus the annual moisture-pump calculation (~44 gallons/year per bathroom).

## Kill test
Does this help someone building or buying a home? Yes. Builder: add duct-termination photos to the pre-drywall checklist ($150/fan marginal). Buyer: check the attic for where the bath ducts actually end before closing; a $4,000 mold job hides above the ceiling.

## Primary sources (6)
1. **IRC 2021, Section M1501.1 (ICC, via codes.iccsafe.org):** "The air removed by every mechanical exhaust system shall be discharged to the outdoors... Air shall not be exhausted into an attic, soffit, ridge vent or crawl space." https://codes.iccsafe.org/content/UTRC2021P1/chapter-15-exhaust-systems
2. **InterNACHI inspector community (inspectionnews.net, forum.nachi.org):** Colorado inspector: "75% of the bath fans do not even discharge to a roof vent at all." Multiple certified inspectors describe attic termination as a routine finding; InterNACHI training materials note visible moisture/mold on sheathing in "almost all cases." http://www.inspectionnews.net/home_inspection/attic-areas-home-inspection-and-commercial-inspection/17541-bath-exhaust-fan-attic.html
3. **ASHRAE 62.2 (via USGBC handout / ASHRAE addenda):** bathroom exhaust minimum 50 CFM intermittent, 20 CFM continuous. https://www.usgbc.org/sites/default/files/2020-10/Ventilation%20&%20ASHRAE%2062.2%20Handout.pdf
4. **Angi 2026 cost data:** new bath fan install $200-$800 total including duct and vent; roof vent installation $350-$950; attic mold remediation $1,000-$4,000 (up to $7,000 for large/undetected). https://www.angi.com/articles/how-much-does-it-cost-install-bathroom-fan.htm?CID=SocialRemodel_Kitchen_012716 and https://www.angi.com/articles/how-much-does-mold-remediation-service-cost.htm
5. **UpCodes Plan Review launch (PR Newswire, June 2026):** AI-native plan review against 11M locally adopted code sections across 6,000+ jurisdictions; discipline-specific analyses include architecture, structural, MEP, fire protection, life safety, accessibility, energy; 800,000 AEC professionals on platform. https://www.morningstar.com/news/pr-newswire/20260603da74841/upcodes-adds-ai-native-plan-review-to-its-aec-qaqc-platform
6. **OFA Group PlanAId launch (GlobeNewswire, Sept 2026):** AI blueprint analysis/validation (egress, travel distance, dead-end corridors, occupancy egress capacity); beta Oct 2025, commercial Sept 2026. https://rss.globenewswire.com/news-release/2026/09/08/3357589/0/en/ofa-group-launches-planaid-bringing-ai-assisted-building-code-intelligence-earlier-into-the-design-process.html

## Supporting data
- Shower moisture: ~0.5 lbm water vapor per person per shower (Cengel, Heat and Mass Transfer, via Vaia); Westminster City Council guidance: a shower/bath produces ~2 pints of moisture.
- Attic mold remediation 2025: $3.60/sq ft national average; small attics $900-$2,200, mid $2,000-$5,000, large $4,500-$10,000+ (bukrestoration.com); plus batt insulation replacement $1-$2/sq ft.
- EPA: mold problems >10 sq ft should be handled professionally, not DIY (via nushoeinspectandcorrect.com citing EPA).
- AEANET proper-venting guide: venting into attic/crawl space is "a major no-no that leads to mold and structural damage"; use insulated rigid/semi-rigid duct, foil tape, insulate in unconditioned spaces. https://www.aeanet.org/where-to-vent-a-bathroom-exhaust-fan/

## Original contribution: the Termination Ledger
- **Moisture pump math:** 0.5 lbm/shower x 2 showers/day x 365 days = 365 lbm/year = ~44 gallons of water per year pumped into the attic per bathroom (water at 8.34 lb/gal). A three-bath house with attic-terminated fans injects ~130 gallons/year into the roof assembly.
- **Rough-in cost:** marginal cost of running insulated duct to a roof jack/wall cap while the attic is open and the roofer is on site: ~$150-$300/fan (Angi new-install range $200-$800 includes fan + electrical; the duct run alone at rough-in is the cheap part).
- **Retrofit cost:** $350-$950 for the roof/wall vent (Angi) plus fishing duct through a finished attic, drywall repair, and a roof penetration on a finished roof: realistic $800-$1,800/fan.
- **Failure cost:** attic mold remediation $1,000-$4,000 typical (Angi), up to $7,000-$10,000+ (bukrestoration), plus insulation replacement and possible sheathing repair. Ratio: roughly 20:1 between the rough-in fix and the median remediation.
- **The invisibility insight:** AI plan review reads drawings; the drawing is compliant (it shows a fan). The defect is a field shortcut, invisible on paper, invisible after drywall, and often invisible to the buyer's inspector (limited attic traverse, duct buried in insulation). The only reliable verification is a dated photo at rough-in/pre-drywall showing the duct connected to an exterior termination, or a full attic traverse tracing each duct. This is the honest limit of the AI plan-review wave: it audits intent, not execution.

## Strongest counterargument
In arid climates, attic-vented bath fans often run for decades with no visible damage; attic ventilation dilutes the moisture and the sheathing never stays wet long enough to grow mold. The Colorado inspector's own take ("I would say it is good, but could be better") concedes the point. Code enforcement is uneven, and some builders argue a roof penetration is itself a leak risk they would rather avoid. The 75% figure is one inspector's field estimate, not a national study. Also: a photo audit only works at rough-in; for the ~140M existing homes, the practical check remains the attic traverse, which no AI product performs today.

## Limitations
- The 75% prevalence figure is anecdotal (single Colorado inspector); no national study quantifies attic-terminated bath fans. Stated as field estimate, not fact.
- The 44-gallon figure assumes 2 showers/day, 0.5 lbm/shower, and 100% of moisture reaching the attic; real attics vent some of it. It is an upper-bound illustration, labeled as such.
- Cost ranges are national averages (Angi 2026); regional labor swings are wide.
- UpCodes Plan Review and PlanAId capabilities described from launch announcements (June/Sept 2026); independent accuracy audits of their MEP/field-defect detection do not exist yet.
