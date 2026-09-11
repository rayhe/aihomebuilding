# Research: Geothermal heat pumps, the dead 25D credit, and the TPO lease workaround — September 11, 2026

## Angle
The 30% residential geothermal tax credit (IRC 25D) died December 31, 2025, killed by the One Big Beautiful Bill Act (P.L. 119-21, signed July 4, 2025). Most homeowners and builders think geothermal is now unaffordable. But the commercial Investment Tax Credit (48 ITC) survived — and Dandelion Energy's March 2026 Geo-as-a-Service program (with Diverso Energy, majority-owned by CVC DIF) lets builders install geothermal at zero upfront cost, at or below the price of conventional HVAC, by monetizing the 48 ITC through third-party ownership. Meanwhile, AI-assisted loop-field design tools (open-source Geoloop, COMSOL modeling, ML-based field planning) are attacking the drilling cost that makes up 35-50% of a system. The story: the credit didn't die, it moved — and the builder who doesn't know this is speccing 2026 homes with 1990s economics.

**Kill test: does this help someone building or buying a home?** Yes. Anyone building in 2026 needs to know: (1) 25D is gone for new installs, don't promise it; (2) TPO leasing exists and can make geothermal cheaper than conventional HVAC for the builder; (3) loop-field sizing is where the money is won or lost; (4) ask for loop design modeling, not just a contractor's rule of thumb.

## Primary sources

1. **IRS FAQ: Modifications of 25C, 25D, 25E, 30C, 30D, 45L, 45W, 179D under P.L. 119-21 (OBBB)** — irs.gov. Table: 25D "will not be allowed for any expenditures made after December 31, 2025." (https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb)

2. **Congressional Research Service, IN12611** — "Expiration and Carryforward Rules for the Residential Clean Energy Credit" (congress.gov). 119-21 terminates the RCEC at end of 2025; "expenditure made" = when original installation is completed (25D(e)(8)(A)); a 2025-started/2026-completed install does NOT qualify. Carryforward of unused 2025 credit unaffected. (https://www.congress.gov/crs-product/IN12611)

3. **DOE: Tax Credits, Incentives, and Technical Assistance for Geothermal Heat Pumps** — energy.gov (updated ~Aug 2026). Post-OBBBA: commercial 48 ITC base 6%, scaling to 5.2% in 2033, 4.4% in 2034; bonus credits up to 30% total with prevailing wage/domestic content/energy community. Notes OBBBA enacted July 4, 2025. (https://www.energy.gov/hgeo/geothermal/tax-credits-incentives-and-technical-assistance-geothermal-heat-pumps)

4. **Dandelion Energy Geo-as-a-Service announcement, March 10, 2026** (PR Newswire via Morningstar). Strategic partnership with Diverso Energy (majority-owned by CVC DIF, 200bn+ EUR AUM); financing + 30-50% tax credit access for residential developments nationwide; fall 2025 leasing program let builders install geothermal "for less than a standard HVAC system"; lease expanded from 14 states to national; TPO structures remove upfront capex. (https://www.morningstar.com/news/pr-newswire/20260310ny05924/dandelion-energy-grows-nationwide-financing-capacity-with-launch-of-geo-as-a-service-offering)

5. **Canary Media: "The loophole that could give clean heat a boost under Trump"** — details the TPO mechanism: Dandelion's leasing structure captures baseline 30% credit + 10% domestic-content adder (U.S.-built systems); OBBBA fixed the "limited-use property" problem that blocked leased geothermal from credits; leasing partner Upstream Lease (Carbon Solutions Group); GEO (Geothermal Exchange Organization) lobbied the language change; Norton Rose Fulbright's Keith Martin confirms firms are packaging heat pumps for tax-equity monetization like rooftop solar. (https://www.canarymedia.com/articles/heat-pumps/the-loophole-that-could-give-clean-heat-a-boost-under-trump-thermal-energy-storage-heat-pump)

6. **DOE Consumer Guide to Geothermal Heat Pumps** (govinfo.gov PDF) — efficiencies 300%-600% even on coldest nights; installing geothermal costs more than air-source of same capacity but "you can recoup the additional costs in energy savings in 5 to 10 years"; average system ~$2,500/ton capacity (equipment basis); best suited to new construction or major renovation. (https://www.govinfo.gov/content/pkg/GOVPUB-E-PURL-gpo224539/pdf/GOVPUB-E-PURL-gpo224539.pdf)

7. **Industry cost data 2026** — Fixr: vertical loops $20,000-$70,000; per-ton total installed $4,000-$8,000 (PICKHVAC: 2-ton $8-16K, 3-ton $12-24K, 4-ton $16-32K, 5-ton $20-40K; heat pump unit itself only 20-40% of total). Bryant: horizontal loop $10-20K, vertical loop $20-35K (loop only). Carrier: total $12-45K. Breakdown source: ground loop excavation/drilling = 35-50% of total ($6-18K); thermal conductivity testing $600-$2,000.

8. **Geoloop (v1.0) — MDPI Energies 2026** — open-source Python package for borehole heat exchanger modeling; semi-analytical depth-dependent model balancing computational cost and subsurface heterogeneity; stochastic sensitivity analysis + design optimization. Shows the design-software layer is moving to open, auditable tools. (https://www.mdpi.com/1996-1073/19/11/2697)

9. **AI-centric low-enthalpy geothermal field development planning — MDPI Energies 2025** — ML-supported model conditioning, POMDP agents for data acquisition; Austria case: AI-centric approach increased expected reward 27% and cut acquisition costs 35% vs conventional. (https://www.mdpi.com/1996-1073/17/8/1887)

10. **COMSOL blog: angled boreholes for geothermal heating/cooling** — simulation lets engineers "appropriately size up a borehole field, lower costs"; vertical fields preferred for new construction; angled fields better for retrofits/imbalanced loads. (https://www.comsol.com/blogs/improving-the-future-of-geothermal-heating-and-cooling-with-angled-boreholes)

11. **Energy Center of Wisconsin / UW Solar Energy Lab hybrid geothermal** (via Consulting-Specifying Engineer) — DOE-funded; hybrid systems reduce peak ground-loop capacity, letting builders install smaller, cheaper ground heat exchangers; free modeling tool for designers. (https://www.csemag.com/hybrid-geothermal-system-considerations/)

12. **Dandelion background** — TechCrunch (2021): Google X spinout, $30M Breakthrough Energy Ventures; goal to drive install cost from $50K+ to ~$18-20K; Lennar as investor (new-construction angle); thin-drill rig, 2-3 day installs. Fast Company: $20K system saves 60%+ on annual heating/cooling vs conventional; standardized (not custom) system. (https://techcrunch.com/2021/02/17/geothermal-home-heating-gets-a-30-million-boost-from-bill-gates-breakthrough-energy-ventures/596, https://www.fastcompany.com/40578291/dandelions-new-system-is-designed-to-popularize-geothermal-heat)

## Original calculation: the 2026 new-build geothermal breakeven

Scenario: 2,400 sq ft new build, mixed climate, 4-ton system.

- Conventional high-efficiency air-source HVAC + furnace install: ~$12,000-$15,000 (builder cost).
- Geothermal 4-ton installed: $16,000-$32,000 (PICKHVAC midpoint ~$24,000; assume $28,000 with vertical loop on a tight lot).
- OLD math (2025): 25D 30% of $28,000 = $8,400 credit → net $19,600 vs $13,500 conventional. Premium ~$6,100. At ~$1,500/yr energy savings (DOE: 300-600% efficiency; Dandelion: 60%+ lower heating/cooling bills on a ~$2,500/yr HVAC spend), payback ~4 years, then pure savings. Easy sell.
- NEW math (2026, direct homeowner purchase): no 25D → $28,000 vs $13,500. Premium $14,500, payback ~9.7 years. Much harder sell. This is why builders stopped offering it.
- NEW math (2026, TPO lease via Dandelion Geo-as-a-Service): Dandelion claims builders install "for less than a standard HVAC system" — i.e., builder capex at or below ~$13,500. The 48 ITC (30% + 10% domestic content = ~40% of system cost) is monetized by the tax-equity owner (Diverso/Upstream Lease), not the homeowner. Homeowner gets: most efficient heating/cooling available + 60% lower bills, via a lease payment designed to sit under the old utility bill.
- Loop-design leverage: drilling/excavation is 35-50% of system cost (~$10,000-$14,000 of the $28,000). A 20% oversize in loop length from rule-of-thumb sizing wastes ~$2,000-$2,800 in drilling on every home; across a 50-home development that's $100,000-$140,000. Thermal conductivity testing costs $600-$2,000 per site — the test pays for itself if it trims even one borehole. This is the AI/modeling wedge: Geoloop-class tools + hybrid-system modeling let designers right-size the field instead of padding it.

## Skepticism / counterarguments (for the article)
- Geothermal only pencils where geology cooperates: rock drilling costs explode; horizontal loops need land most infill lots don't have. No model fixes bad geology.
- The TPO lease is not ownership: the homeowner doesn't own the system, doesn't get the credit, and lease escalators can eat the bill savings. Read the escalator clause.
- Dandelion's "less than standard HVAC" claim is a builder-capex claim under their financing structure, not a universal price; independent verification of per-home economics is thin.
- 48 ITC bonus stacking (wage + domestic content + energy community) has real compliance paperwork; small builders may find the transaction costs exceed the benefit — this is a production-builder game (Lennar-scale), not a custom-home game.
- AI loop-design tools (Geoloop, COMSOL) are engineering tools, not magic: garbage geological inputs still produce garbage fields. The $600-$2,000 conductivity test remains the cheapest accuracy money can buy.

## Limitations
- Cost figures are industry-guide midpoints (Fixr, PICKHVAC, Bryant, Carrier), not bid data; regional drilling rates vary 2-3x.
- Dandelion's per-home lease economics are company claims (PR, March 2026); no independent audit found.
- Energy savings assume mixed-climate home with ~$2,500/yr HVAC spend; mild-climate savings are smaller, cold-climate larger.
- Tax discussion is informational; 48 ITC eligibility turns on project specifics — consult a tax professional.

## Headline candidates
- "The 30% Geothermal Tax Credit Died on New Year's Eve. The Lease That Replaced It Costs Builders Nothing."
- "Your Builder Can Put Geothermal in Your New Home for Less Than a Furnace. Here's the Tax Paperwork That Makes It Work."
- "Washington Killed the Geothermal Credit. A Google X Spinout Found the Loophole."

## Journalist: Priya Greenwood (sustainability/green building)
## Slug: ai-geothermal-lease-25d-dead-geo-as-a-service-2026
## Article number: 823
## Next open ship slot: 2026-11-20
