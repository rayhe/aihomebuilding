# Research: Satellite InSAR Foundation Settlement — The Orbit Is Watching Your Slab

**Article #967 | Journalist: Jake Kowalski | Date: 2026-09-25**

## Kill test
Does this help someone building or buying a home? Yes. Anyone buying or owning a home in a subsidence zone (Houston-Galveston, California Central Valley, New Orleans, parts of Florida and Arizona) faces foundation damage that averages $5,400 per repair and $16,000 for piering. A free NASA data portal now lets anyone check whether the ground under a specific address is moving, with millimeter precision, from a decade of satellite radar. The article gives readers the portal, the damage threshold numbers, and the cost math.

## The story (Jake angle: the machine in orbit that does the site walk for you)
- Brownwood, Baytown, TX: a waterfront neighborhood of 400+ families that sank more than nine feet from groundwater pumping, got hit by Hurricane Carla (1961) and Hurricane Alicia (1983), and was eventually bought out and abandoned. Today it is the Baytown Nature Center. The ground moved for decades before anyone with authority acted.
- The tech: InSAR (interferometric synthetic aperture radar). Satellites compare radar echoes over months and years and measure ground movement at millimeter precision, day or night, through clouds.
- NISAR (NASA-ISRO) launched July 30, 2025. First science results (Mexico City, Oct 2025-Jan 2026 data): parts of the city sinking up to 2 cm per month; historically up to 14 inches per year in the 1990s-2000s. NISAR detects shifts as small as 1 cm, revisits every 12 days.
- NASA OPERA Displacement Portal: free, open-access InSAR time series over North America from Sentinel-1 (2016-present), 60m x 60m pixels, click any pixel for a cumulative-movement graph. ASF chief scientist Franz Meyer: built for "users wondering, 'What's going on around my house?'"
- Commercial side: SkyGeo (mm accuracy, satellite archive back to 1992, civil-engineering monitoring), SatSense (Tom Ingleby: subsidence "more often a slow process, where ground movements occur over a longer period of time, typically months or years"; pixels typically 3m x 3m), CATALYST (decade-long histories, no site equipment, automated alerts).
- Validation: MDPI Sensors paper (Tianjin building study) compared InSAR against precision ground leveling point by point; agreement within ~2 mm on most points.
- NASA UAVSAR (Jones et al., 2016): InSAR map of a New Orleans suburb showing the newest-developed blocks (yellow-orange) subsiding faster than older adjacent blocks. Residential-scale subsidence mapping is real, not theoretical.

## Primary sources

### 1. NASA NISAR first subsidence results (nasa.gov, 2026)
- NISAR launched July 30, 2025 from Satish Dhawan Space Centre, India (ISRO GSLV).
- L-band dual-frequency radar; detects vertical shifts as small as 1 cm (0.4 in); passes overhead multiple times per month; 12-day repeat.
- Mexico City: up to a few cm per month Oct 2025-Jan 2026; ~14 in/yr (35 cm/yr) in the 1990s-2000s; Angel of Independence monument needed 14 added steps as land dropped.
- Craig Ferguson (NASA HQ): NISAR's long-wavelength L-band will track subsidence in "densely vegetated regions such as coastal communities where they may have the compounding effects of both land subsidence and sea level rise."
- Source: https://www.nasa.gov/missions/nisar/us-indian-space-mission-maps-extreme-subsidence-in-mexico-city/

### 2. NASA OPERA Displacement Portal (nasa.gov / NASA Earthdata, 2025-2026)
- OPERA (Observational Products for End-Users from Remote Sensing Analysis), JPL-managed, funded by NASA's Satellite Needs Working Group.
- Level-3 surface displacement from Sentinel-1, free and openly available at the ASF DAAC (Alaska Satellite Facility), 2016-07-01 to present, 208,222 granules.
- Portal: click any 200-ft x 200-ft pixel for a cumulative movement time-series graph. Initially US Southwest, northern Mexico, NYC metro; CONUS-wide expansion by end of 2025.
- David Bekaert (OPERA project manager, JPL): "You can zoom in to your country, your state, your city block, and look at how the land there is moving over time... by a simple mouse click."
- Franz Meyer (ASF chief scientist): the portal serves "users wondering, 'What's going on around my house?'"
- Source: https://nasa.gov/science-research/earth-science/nasas-ready-to-use-dataset-details-land-motion-across-north-america/

### 3. USGS Houston-Galveston subsidence (usgs.gov / pubs.usgs.gov)
- Groundwater withdrawals from the Chicot, Evangeline, and Jasper aquifers since the early 1900s.
- USGS monitoring: over 38 years, subsidence at stations ranged from 0.1 ft (Texas City-Moses Lake) to 3.654 ft (Addicks station, Harris County).
- HAGM model: as much as 10 ft of subsidence in southeastern Harris County; a large area of central-to-southeastern Harris County subsided at least 6 ft.
- Historical: Pasadena center saw 7.5 ft (1943-1973); the 1-ft-or-more area grew from ~350 sq mi (1954) to ~2,500 sq mi (1973).
- Quote: USGS scientist Mark Kasmarek: "Subsidence, or the loss of land-surface elevation, can become a public safety concern during a flood, high-intensity rain event, or hurricane."
- Sources: https://www.Usgs.Gov/news/state-news-release/groundwater-level-declines-continue-cause-land-elevation-loss-houston, https://pubs.usgs.gov/publication/ofr74123

### 4. Century of Houston subsidence review (Turco, Groundwater/Wiley, 2025)
- 1906-2024: ~12 km3 of groundwater storage capacity permanently lost to aquifer compaction.
- Equivalent to ~60x the storage of Lake Houston; ~8 years of Harris + Galveston county water use.
- Uneven subsidence overwhelms drainage systems and worsens flood risk; wetlands degraded.
- Source: https://ngwa.onlinelibrary.wiley.com/doi/10.1111/gwat.70003

### 5. Brownwood, Baytown: the neighborhood that sank (local news, Sep 2026, citing Harris-Galveston Subsidence District)
- 400+ families; more than 9 ft of subsidence from groundwater pumping; Hurricane Carla (Cat 4, Sep 11, 1961) then Hurricane Alicia (1983); residents bought out; now the 500-acre Baytown Nature Center.
- Source: https://www.baytownlocalnewsevents.com/p/issue446

### 6. Expansive soils damage scale (HUD User Cityscape, citing Jones & Jefferson 2012 / ASCE)
- 1 in 4 residences in the continental US affected by expansive soils; yearly damage >$15 billion, more than twice all other natural disasters combined (earthquakes, hurricanes, tornadoes, floods).
- Dallas listed 120+ foundation repair companies in the phonebook (Witherspoon 2000).
- Source: https://www.huduser.gov/Portal/periodicals/cityscape/vol25num1/ch10.pdf

### 7. Foundation repair costs (2025-2026 industry guides)
- National average all foundation repairs: ~$5,400 (range $2,250-$8,600).
- Piering/underpinning: $7,000-$30,000 total, national average ~$16,000; $1,500-$3,500 per pier; typical job 7-10 piers.
- Crack repair: $500-$2,000; house leveling: $4,000-$15,000.
- Sources: https://drainagefirst.com/how-much-does-foundation-repair-cost/, https://crackedslab.com/blog/cost-to-fix-a-foundation-in-2025-what-homeowners-need-to-know/, https://lifestyle.longislandreport.org/story/752973/foundation-piering-cost-guide-push-piers-vs-helical-piers-price/

### 8. Commercial InSAR for civil engineering (SkyGeo, SatSense via Construction Management, CATALYST, Murphy Geospatial)
- SkyGeo: mm accuracy, up to 100,000 measurements per km2, archive back to 1992, "fraction of the cost of traditional monitoring," no capital expenditure.
- SatSense (Tom Ingleby, via Construction Management): pixels typically 3m x 3m to 4m x 14m; automated threshold alerting on acceleration/range/absolute movement.
- CATALYST (PCI Geomatics): mm-level, decade-long movement histories, no equipment on site, custom out-of-tolerance alerting.
- Sources: https://skygeo.com/, https://constructionmanagement.co.uk/monitoring-movements-mega-projects-space/, https://catalyst.earth/solutions/catalyst-insights/ground-displacement-monitoring/

### 9. InSAR vs. ground leveling validation (MDPI Sensors 16(12):2182)
- Two buildings in Tianjin; InSAR displacements vs precision leveling at 8 points each; agreement within ~2 mm on most points (e.g., -5.12 mm leveled vs -5.04 mm InSAR).
- Deformation monitoring accuracy tiers: 0.2 mm (heritage), 0.7 mm, 2.1 mm by foundation class.
- Source: https://www.mdpi.com/1424-8220/16/12/2182/xml

### 10. Damage thresholds (foundationrepairs.com / ACI 318; soilstructure.com; Terzaghi)
- Acceptable deflection ratio 1/240 (ACI 318-89 Table 9.5(b) lineage): over 20 ft (240 in), max acceptable vertical difference = 1 inch.
- Residential differential settlement design guide: 1/4 inch per 20 ft (1/960).
- Terzaghi (1938, European buildings): differential settlement above 25 mm (1 in) produced cracking; at or below 20 mm, buildings 40-100 ft long did not crack.
- Source: https://foundationrepairs.com/slab-foundation-repair/need-foundation-repairs/acceptable-foundation-deflections/

## Original contribution (novel calculation)
The Addicks signal-to-noise: USGS measured 3.654 ft of subsidence at its Addicks station over 38 years. That is 44 inches / 38 years = 1.157 in/yr = 29.4 mm/yr. InSAR resolves 1-2 mm/yr (validated against ground leveling). So one year of Houston-hotspot movement is 15-30x the measurement noise floor. The structural damage threshold is 1 inch (25.4 mm) of differential settlement over 20 ft. Divide: 25.4 / 29.4 = 0.86 years. A house on Addicks-rate ground crosses the damage threshold in under a year of differential movement, and the satellite sees each year's movement at 15:1 signal-to-noise or better. NISAR's coarser 1 cm precision still resolves ~4 months of that rate. The drywall cracks years later. The piers get installed a decade later. The satellite knew in year one.

## Strongest counterargument
InSAR measures radar scatterers (roofs, pavement, bare ground), not your foundation. A 3m pixel cannot isolate one house from its neighbor; what it sees is ground motion, and your slab may ride it uniformly (harmless) or differentially (damaging). Expansive clay heaves up in wet months and drops in dry ones, which confounds the long-term trend unless the time series is long. No consumer product exists: OPERA's portal is built for agencies, the pixels are 60m, and reading a displacement graph is not the same as a structural diagnosis. And the satellite cannot tell you where to put the piers. Anyone selling "satellite foundation monitoring for homeowners" as a replacement for a geotechnical engineer is selling a horoscope.

## Limitations
- Houston subsidence rates are regional hotspots, not lot-level; your block may differ by an order of magnitude.
- The Addicks calculation assumes the measured ground motion is differential across the structure; uniform settlement is mostly harmless.
- OPERA pixel size (60m) averages over many homes; single-lot conclusions require commercial processing.
- Cost comparison uses national repair averages; Houston clay-market pricing runs higher.
- NISAR-derived products were still being integrated into OPERA as of early 2026; the free record is Sentinel-1 (C-band), which decorrelates faster in vegetation than L-band.

## Actionable takeaways (for the article)
1. Check the OPERA Displacement Portal for your address (free, NASA/ASF). Look at the cumulative displacement graph for your block: a steady downward slope of several mm/yr deserves attention.
2. The 25 mm rule: 1 inch of differential settlement over 20 feet is the engineering action threshold. A marble rolling across the kitchen floor is the low-tech version.
3. Buying in Houston-Galveston, Central Valley, New Orleans, or Florida sinkhole country: ask your inspector or a geotechnical engineer for an InSAR desk study. The satellite archive goes back to 1992 (commercial) and 2016 (free); it costs a fraction of a drilling program.
4. In expansive-clay country, the cheap fix is moisture control: consistent perimeter watering in drought, working gutters and drainage in rain. Most heave damage is a water-management failure, not a structural one.
5. If the portal shows movement and you see stair-step brick cracks or binding doors, get a structural engineer, not a pier salesman, first.
