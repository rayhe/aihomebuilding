# Research: AI delivery dispatch and the idle-crew cost of late material deliveries (Frank DeLuca)

**Article #771 — queued ship 2026-09-29 — journalist: Frank DeLuca (Project Management & Operations)**

## Thesis
The most expensive line on a residential build is the one nobody invoices: crew time burned waiting on late material deliveries. Work-sampling research says ~15% of construction worker time goes to waiting on materials and equipment. A new layer of AI logistics software (order entry, AI dispatch, delivery tracking, jobsite coordination) is attacking exactly this waste. The homeowner angle: you can now demand delivery windows and live tracking in writing, and price the cost of a missed window into the contract.

## Kill test
Does this help someone building or buying a home? Yes. It gives a GC/owner a dollar figure for a late delivery (idle crew math), three things to demand from suppliers (written delivery windows, live ETA tracking, a missed-window remedy), and a read on which AI logistics tools are real versus vapor.

## Primary sources

1. **Khanh et al. via MDPI Buildings 2026 review** — workers spend approximately 15% of their time waiting for materials and equipment due to poor supply chain management. Review: "Life Cycle Risk Management for Improving Labor Productivity in Construction Projects in Türkiye."
   https://www.mdpi.com/2075-5309/15/3/484

2. **Serpell et al. (1997), via Virginia Tech thesis on residential construction productivity** — work sampling on 17 building projects: ~53% of total working time on non-productive activities; waiting 9%, idle 7%, transporting 14%; of waiting behaviors, lack of materials accounted for 12%. Horman & Kenley (2005) meta-analysis: 49.6% of construction operative time devoted to wasteful activity.
   https://vtechworks.lib.vt.edu/server/api/core/bitstreams/73cc1c02-4497-45e7-ae8c-032e04b7c1c5/content

3. **Delay-factor study (SciELO, Brazil)** — "delay in delivery of materials (inefficiency of the purchasing sector)" loaded at 0.866 on the supply-management factor, which explained 21.4% of total variance in construction delays. Serna et al. (2018): lack of materials in the scheduled period is one of the most influential factors on cost variance.
   https://www.scielo.Br/j/ac/a/LyYDctLTVmgPDRr9xjNGYCp/?lang=en

4. **Toolbx AI Order Entry (Distribution Strategy Group, Sep 2026)** — AI that converts contractor material lists, quotes, and takeoffs into draft dealer orders in under a minute; extracts customer, job site, requested date, delivery/will-call instructions; matches line items to SKUs with expected 95%+ match rates; integrates with Epicor BisTrack, Epicor Eagle, ECI Spruce, DMSi Agility ERPs. Sixth-generation dealer Swift Supply (5 locations, AL/FL) testing in early access.
   https://distributionstrategy.com/2026/09/toolbx-launches-ai-order-entry-for-building-supply-distributors/

5. **Dispatch / DispatchOne (dispatchit.com)** — AI-powered last-mile orchestration for building product distributors: intelligent routing on live traffic/driver location/delivery windows/order priority, flexible vehicle matching, real-time tracking with live ETAs and photo proof of delivery, driver network across 80+ markets, reporting on on-time rates and cost per stop.
   https://www.dispatchit.com/blog/last-mile-delivery-that-supports-hvac-electrical-plumbing-and-more

6. **DispatchTrack / Veyor (Toro TMS roundup)** — DispatchTrack: delivery management for non-bulk construction materials (lumber, drywall), real-time GPS tracking, ETA updates, automated customer alerts, delivery analytics, "Driver AI" giving jobsite access instructions per stop. Veyor: on-site logistics and delivery coordination for high-density jobsites, delivery scheduling/booking for suppliers, gate coordination, real-time updates.
   https://www.torotms.com/blog/construction-dispatch-software

## Original analysis (to be computed in the article)
- **Idle-crew math:** a 4-person residential framing crew at a fully loaded ~$65/hr each = $260/hr. A delivery that slips 4 hours burns ~$1,040 in wages for zero production. Nobody invoices this; the GC eats it or buries it in the next bid.
- **15% waiting applied to a build:** on a 6-month (~1,040-hour) framing-to-close labor span, 15% waiting = ~156 hours per worker of dead time attributable to material/equipment logistics. At $65/hr loaded, ~$10,000 per worker per build in waiting cost. (Flag: the 15% figure covers materials AND equipment waiting across commercial studies; residential share is inferred, stated as a range.)
- **The order-entry error link:** Toolbx's pitch is that mis-keyed orders are a root cause of wrong/late deliveries. The article's skepticism: AI order entry fixes the dealer's keystroke problem, not the driver's traffic problem; the two companies solve different halves.
- **What to demand (actionable):** (1) delivery windows in writing with a start AND end time, not "Tuesday"; (2) live tracking link shared with the super; (3) a missed-window remedy in the supply agreement (discount or priority re-dispatch). Cost to the homeowner of asking: zero.

## Skepticism / limitations
- The 15% waiting figure and 49.6% waste figure come from commercial/international studies, not US residential specifically; residential is likely worse (less professionalized logistics), but that is an inference, not a measured fact.
- Vendor claims (95% match rates, on-time improvements) are vendor claims; no independent audit of DispatchOne/Toolbx field results found.
- AI dispatch optimizes the route; it does not fix the lumberyard being out of stock, the wrong SKU being picked, or the gate code being wrong. Veyor's jobsite-coordination angle is arguably the more important half for residential.
- Loaded labor rate of $65/hr is a national-ish blended assumption; union coastal markets run far higher, rural markets lower. The article will present it as an assumption with a range.
- No per-delivery pricing found for these platforms (dealer-side SaaS); the article will not invent pricing.

## Competitor / adjacent coverage in our queue
- #751 change-order fee erosion (Frank), #757 pay-app front-loading (Frank), #765 draw agent (Frank), #758 takeoff shootout (Jake). No direct overlap with delivery logistics.
