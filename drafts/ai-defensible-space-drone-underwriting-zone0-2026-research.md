# Research Notes — ai-defensible-space-drone-underwriting-zone0-2026
**Journalist:** Elena Vasquez (Architecture & Design)
**Started:** 2026-09-19T20:05:00-07:00
**Kill test:** Does this help someone building or buying a home? YES — in California wildfire country, an AI-analyzed aerial photo of the 5 feet around your house can now decide whether you keep your insurance. A homeowner who understands how the drone sees their property can fix violations before the non-renewal letter arrives, and can document mitigation to claim the discounts California law requires insurers to offer.

## Thesis
Your insurer sees your home the way a fire hawk does: from above, scored against ignition-zone geometry by machine vision. The landscaping design discipline and the underwriting department have merged. The juniper under the window, the bark mulch against the stucco, the trash bin by the garage — these are now line items in an algorithmic risk score. Homeowners can use the same assessment frameworks (IBHS Wildfire Prepared Home, Cal Fire PRC 4291 zones) to pre-audit themselves before the flyover.

## Primary sources (7)

1. **IBHS Wildfire Prepared Home program page (ibhs.org/wildfire-policy/)** — Base designation requires Class A roof, 0-5 ft noncombustible zone, upgraded vulnerable features, defensible space to 30 ft. 1,300+ designations issued in CA and OR; now also NM and NV. Base being renamed Essential, Plus becoming Enhanced (labels only, requirements unchanged).
2. **IBHS 2025 Wildfire Prepared Home Technical Standard (insurance.wa.gov PDF)** — 5-30 ft zone: tree limbs pruned to 6 ft vertical clearance, 10 ft horizontal crown spacing, no privacy hedges, shrubs spaced 2x their height apart (max 10 ft), grass under 4 inches.
3. **Insurance Business Mag (Jan 2026): CA AB 1559** — bill would require insurers to disclose aerial images used in underwriting decisions. Commissioner Ricardo Lara supports: "My department's own investigations of consumer complaints have found serious flaws with companies' practices," including images that contained errors or were no longer current.
4. **United Policyholders / Axios (Sep 2026): insurers deploying AI against wildfires** — insurers now use satellite photos and aerial imagery from drones and aircraft for structure-by-structure scoring; MetLife working with Zesty.ai. Property-specific factors: distance of vegetation from house, flammability of brush, roof material.
5. **LA Public Press (Feb 2026): insurer AI use in LA wildfire claims** — State Farm non-renewed ~72,000 California property policies through 2025; LA County counsel probed State Farm's AI tools in claims review; class actions allege AI-washing in underwriting and claims.
6. **SlashGear / CBS Sacramento (Jan 2026): drone images and policy cancellation** — CSAA (AAA-affiliated) declined to renew Modesto homeowner Joan Van Kuren's policy after aerial flyover flagged "substantial increase in hazards"; homeowner said images did not reflect current condition.
7. **BlazeBlocker (2026): IBHS in Colorado** — $125 application fee, 3-year designation validity with annual reviews, Colorado HB 25-1182 took effect Jul 2026 requiring insurers to credit documented mitigation. Base = achievable retrofit target protecting against wind-blown embers, "the leading cause of home ignition."

Supporting framework: California PRC 4291 + 14 CCR 1299.03 define the zones (0-5 ft ember-resistant zone, 5-30 ft Zone 1, 30-100 ft Zone 2); also referenced in Ray's defensive publication (github.com/rayhe/prior-art, 2026-07-04 drone defensible-space compliance disclosure). Cape Analytics announced an AI-driven wildfire defensible-space product for carriers (Reinsurance News).

## Original contribution (novel analysis)
**The verification gap ratio.** State Farm alone non-renewed ~72,000 California policies (Mar 2024 announcement, through 2025) while IBHS has issued ~1,300 Wildfire Prepared Home designations total across CA and OR. That is roughly 55 non-renewed policies for every 1 certified home, i.e., certified mitigation covers less than 2% of the scale of insurer withdrawal. The industry can score risk from orbit at machine speed but can only verify fixes at human speed. Methodology: 72,000 / 1,300 = 55.4; 1,300 / 72,000 = 1.8%. Caveat: the 72,000 are State Farm non-renewals only (not all insurers), and the 1,300 span CA+OR (not CA alone), so the true CA ratio is worse than 55:1, not better. This is a juxtaposition of two public figures, not a causal claim.

## Zone-by-zone violation inventory (for the article's actionable section)
Common Zone 0 (0-5 ft) violations visible from a flyover:
- Bark mulch or wood chips against the foundation
- Juniper, cypress, or rosemary shrubs within 5 ft of walls (volatile oils)
- Wood or vinyl fence attaching to the house
- Firewood stacked against the structure
- Plastic trash/recycle bins within 5 ft (metal OK)
- Patio furniture with combustible cushions left against siding
- Doormats of coir/fiber material at the door
Zone 1 (5-30 ft) flags: ladder fuels (shrubs under trees), tree crowns touching, dead material accumulation, unpruned limbs below 6 ft.

## Numbers for the article
- 100 ft: defensible space distance required by CA law (PRC 4291)
- 5 ft: ember-resistant zone — zero combustibles
- 72,000: State Farm CA policies non-renewed through 2025
- 1,300: IBHS Wildfire Prepared Home designations (CA + OR)
- $125: IBHS application fee; 3-year designation with annual reviews
- 1/8 inch: metal mesh size for ember-resistant vents
- 6 ft: vertical limb clearance above ground (IBHS 5-30 ft zone)
- 10 ft: horizontal spacing between tree crowns
- 55:1: non-renewed policies per certified home (verification gap)

## Counterargument (strongest, full strength)
Aerial assessment is arguably *better* than the alternative. In-person inspections were infrequent, inconsistent, and subjective — one inspector's "maintained" was another's "overgrown." Satellite and drone imagery with ML scoring is consistent, auditable, and scalable; it lets insurers keep writing policies in high-risk zones instead of withdrawing entirely (the stated goal of the Zesty.ai/MetLife approach). And AB 1559's disclosure requirement addresses the transparency complaint. The homeowner who gets a non-renewal notice with annotated imagery showing the juniper against the house arguably has *more* actionable information than one dropped on the basis of a ZIP code fire map.

## Limitations (what this article does NOT prove)
- Does not measure whether AI-assessed defensible space actually reduces structure loss; no outcome study links flyover scoring to lower claims.
- The 55:1 ratio compares one carrier's non-renewals to a multi-state certification count; it quantifies a scale mismatch, not a policy failure.
- IBHS designation cost beyond the $125 fee (the actual mitigation work) is not included in the ROI framing; Zone 0 re-landscaping runs $2,000-$8,000 for a typical suburban lot (industry range, not verified against contractor quotes in this piece).
- Whether a specific homeowner's insurer offers mitigation discounts under CA's Safer from Wildfires regulation is not verified per-carrier here.
