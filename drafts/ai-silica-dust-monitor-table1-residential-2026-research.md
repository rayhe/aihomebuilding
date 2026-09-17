# Research Notes: AI Silica Dust Monitoring & OSHA Table 1 on Residential Jobsites
**Slug:** ai-silica-dust-monitor-table1-residential-2026
**Journalist:** Marcus "Steel" Washington (workforce & labor beat)
**Thread:** #85 (new)
**Date researched:** 2026-09-17

## Kill test
A residential GC running a framing/siding crew needs: the citation math that makes compliance cheaper than fines, the written exposure control plan requirement most small shops have never heard of, and which wet-cut / monitoring options actually fit a $600K custom build. A homeowner hiring that crew needs: why "the siding crew cuts dry" is a health and liability red flag. Passes.

## Core facts (all verifiable, sources inline in draft)

**The standard:**
- OSHA 29 CFR 1926.1153, Respirable Crystalline Silica for construction (effective Sept 23, 2017).
- PEL: 50 µg/m³, 8-hour TWA. Action level: 25 µg/m³.
- Table 1: specified exposure control methods per task (stationary masonry saws = water delivery; handheld power saws incl. fiber-cement cutting = dust collection + HEPA vacuum; tuckpointing/grinding = dust collection; jackhammers = water spray or vacuum). Employers who follow Table 1 fully are deemed in compliance with exposure-control requirements.
- Written exposure control plan required (g)(1); competent person required (g)(4); exposure assessment, medical surveillance, training.

**Scale of exposure:**
- DOL/OSHA (2016 final rule announcement): ~2.3M workers exposed total, incl. ~2M construction workers; rule estimated to save 600+ lives/yr and prevent 900+ new silicosis cases/yr; net benefits ~$7.7B/yr. (https://www.dol.gov/newsroom/releases/osha/osha20160324)
- IARC + NTP: crystalline silica = known human carcinogen.
- NIOSH 2015: silicosis deaths declining but ~100/yr still.
- Silica lives in concrete, fiber-cement board, brick, block, tile, grout, mortar, stone - the entire residential material palette.

**Enforcement:**
- OSHA penalties effective Jan 15, 2026: serious $16,550/violation; willful/repeated $165,514/violation; failure to abate $16,550/day. (http://www.osha.gov/penalties/)

**The monitoring tech:**
- Trolex Air XS: real-time respirable crystalline silica area monitor; patented Optical Refraction Technology + light-scatter photometry; classifies particles by size/symmetry/optical markers unique to silica; reports actual RCS concentration, not total dust proxy; typically ±25% RCS accuracy. Purchase ~£10,000-£16,062 (Frontline Safety £16,062 incl VAT; Shawcity £12,995 ex VAT; Australia AU$18,500); hire £250-410/week (Inlec £410/week; Shawcity £250/week).
- Trolex XD1+ personal dust monitor hire: £185/week (5-kit + dock).
- RAECO Rents (US): Air XS available for rent; explicitly notes OSHA's standard references gravimetric sampling as the compliance method - real-time monitors are for process control and early warning, not formal compliance documentation.
- NIOSH Helmet-CAM + EVADE software (free): helmet-mounted camera synced to real-time dust monitor, time-synchronized task-exposure video; EVADE public software from NIOSH Mining Program. (https://www.cdc.gov/niosh/bulletin/2018/dust-monitors.html)
- AI-powered breath test for silicosis (Mar 2025, The Conversation via medicalxpress): 31 silicosis patients + 60 controls, >90% accuracy, <5 min/sample; lab-bound, needs larger validation. (https://medicalxpress.com/news/2025-03-silicosis-lungs-workers-ai-powered.html)
- EarthCam visual AI: jobsite camera AI for materials tracking + safety detection (ENR).

**Original contributions (novel calculations):**
1. The 90-minute dry-cut: allowable daily dose = 50 µg/m³ x 8 h = 400 µg·h/m³. 90 min dry cutting fiber-cement at 800 µg/m³ (illustrative exposure level, stated assumption) = 1,200 µg·h/m³ = 3.0 days of legal dose in one shift.
2. Citation stack for a 4-person siding crew cutting dry: no written exposure control plan + no competent person + engineering controls not used (water/dust collection) + no exposure assessment + no respirators where Table 1 requires = 5 serious violations x $16,550 = $82,750 theoretical max exposure, vs. one Air XS unit (~$13-20K) or a rental at ~$500/week, or a water-fed saw kit at a few hundred dollars.
3. Air XS is not a compliance instrument under the current standard (gravimetric is) - the honest framing is process control + behavioral evidence (Helmet-CAM-style task sync), not a citation shield.

**Strongest counterargument:**
Wet cutting and dust-collection saws already achieve Table 1 compliance for a few hundred dollars; the expensive real-time silica monitor solves a problem OSHA's own Table 1 already solved cheaply. The Air XS is an area monitor, not personal; ±25% accuracy; not accepted for compliance sampling. The breath test is lab-bound. The realistic residential play is water + vacuum + a written plan + a competent person - the monitor is a luxury overlay, and for a small GC the cheapest compliance is a $40 hose adapter, not a $15,000 box. Also: helmet cameras raise worker privacy/surveillance concerns.

**Limitations (for "What We Did Not Prove"):**
- The 800 µg/m³ dry-cut exposure figure is an illustrative assumption; NIOSH/OSHA task-exposure profiles show dry circular-saw cutting of fiber cement exceeding the PEL by an order of magnitude, but specific task levels vary with blade, material, wind, enclosure.
- Citation stacking is a theoretical maximum; actual penalties are negotiated down, and small-employer reductions apply.
- No published study ties real-time silica monitors to reduced silicosis incidence in residential construction specifically; the exposure-reduction evidence is process-level (task identification), not outcome-level.
- Monitor pricing is UK/Australia list; US rental via RAECO is quote-based.
- OSHA penalty minimums for serious violations start at $1,221; max is rarely assessed per violation.

**Angle in one line:**
OSHA wrote a cheap compliance path (Table 1: water + vacuum) that most residential crews ignore, and a $15,000 box can now show them, in real time, exactly how expensive that ignorance is - but the hose adapter is still the smarter buy.

**Journalist fit:**
Marcus "Steel" Washington: investigative, worker-centered, labor statistics, uncomfortable conclusions, union-family background. Breath-test and Helmet-CAM material humanizes the exposure story.
