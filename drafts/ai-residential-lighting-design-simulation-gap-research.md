# Research: AI Residential Lighting Design — The Simulation Gap

## Angle
Builders install 30-50 recessed cans in a typical new home based on a rough "one every 4-6 feet" rule. No one runs a lighting simulation. No one calculates lux levels. No one models circadian impact. AI tools (DIALux, ElumTools, cove.tool) can simulate residential lighting placement in minutes — but residential construction doesn't use them. The result: over-lit hallways, under-lit kitchen counters, and homeowners spending $500-2,000 on floor and table lamps to fix what should have been designed right from the start.

## Kill Test
Does this help someone building or buying a home? **YES.** A homeowner or builder reading this can: (1) demand a lighting simulation before electrical rough-in, (2) use free tools like DIALux to check their plans, (3) understand what IES recommends vs. what they're getting, (4) save $500-2,000 in post-occupancy correction lamps.

## Primary Sources

### 1. EIA Residential Energy Consumption Survey (RECS)
- Average US household: 1,105 kWh/year on lighting (~10% of home electricity, 2015 data)
- Average home: 40+ light bulbs
- LED adoption has reduced per-fixture consumption but total fixture count is rising
- Source: https://www.eia.gov/todayinenergy/detail.php?id=38452

### 2. IES (Illuminating Engineering Society) Recommended Lighting Levels
- Kitchen task areas: 50-75 foot-candles (fc)
- Living room general: 20 fc
- Bedroom: 10-20 fc
- Bathroom vanity: 40 fc
- Home office: 50 fc
- Hallway: 5-10 fc
- IES RP-11 is the residential reference document
- Almost no residential builders reference IES standards; it's treated as a commercial concern

### 3. Builder-Grade Lighting Practice (Apartment Therapy / Industry Sources)
- Standard builder package: 6" recessed cans with white baffles, flush dome fixtures ("boob lights"), basic vanity bars
- Placed on a grid: every 4-6 feet, centered in room
- Zero simulation, zero lux calculation, zero circadian consideration
- Lighting designers are hired for <1% of new residential projects
- Real estate trend: builder-grade lighting now seen as a negative by buyers
- Source: https://www.apartmenttherapy.com/builder-grade-lighting-trend-over-replacing-it-37480407

### 4. DIALux (Free Lighting Simulation Software)
- Professional-grade lighting simulation, free
- Can model rooms, import fixture IES files, calculate lux distributions
- Used in commercial/industrial but almost never in residential
- Could simulate a residential floor plan in 30-60 minutes
- Source: https://www.dialux.com/

### 5. Circadian Rhythm & Lighting Research
- Blue-rich light (6500K) in morning stimulates circadian system
- Warm light (3000K) at night supports melatonin production
- WELL Building Standard includes circadian lighting requirements — but only for commercial
- Circadian Stimulus (CS) metric: CS ≥ 0.3 during day, CS < 0.15 at night
- Residential builders don't specify color temperature per room per time of day
- Source: https://www.eaton.com/cr/en-us/company/news-insights/lighting-resource/connected-lighting/how-lighting-can-improve-health-sleep-and-mood.html
- Source: MDPI Buildings journal papers on sleep-conducive workplace lighting

### 6. Harvard GSD / MIT Research on AI in Design
- AI amplifies/accelerates existing design values — including defaults
- Cultural/aesthetic biases embedded in AI training data
- Generative AI not culturally neutral (MIT Sloan, Nature Human Behaviour 2025)
- If AI is trained on builder-grade patterns, it reproduces builder-grade patterns
- Source: https://www.harvarddesignmagazine.org/articles/resistant-data-questioning-architectural-values-in-the-age-of-ai/
- Source: https://mitsloan.mit.edu/press/generative-ais-hidden-cultural-tendencies

## Novel Contribution: The Post-Occupancy Lamp Tax

**Original calculation nobody has done:**

A typical new 2,400 sq ft home:
- Builder installs ~40-47 recessed cans + ~8 flush mounts = ~55 fixtures
- Cost at rough-in: ~$15-25/fixture installed = $825-$1,375 total
- Grid placement: every 4-6 feet, centered per room
- No lux calculations performed

What happens after move-in:
- Kitchen under-cabinet: homeowner adds LED strips ($50-150)
- Reading areas: floor lamps ($100-300 each, typically 2-3)
- Home office: desk lamp ($50-200)
- Bedrooms: bedside table lamps ($60-200/pair × 3 bedrooms)
- Living room: floor lamp or arc lamp ($150-400)
- Bathroom vanity: often replaced entirely ($200-600)
- Entry/foyer: decorative pendant replacement ($200-500)

**Conservative post-occupancy lighting correction: $700-2,500**

This is the "lamp tax" — the cost of compensating for lighting nobody designed. A 30-minute DIALux simulation at the rough-in stage could optimize placement to deliver correct lux levels at task areas, reducing or eliminating most of this post-occupancy spend.

## Strongest Counterargument
Lighting is subjective and personal. No simulation can predict what a specific homeowner will want because preferences vary wildly. The builder-grade grid provides acceptable ambient light for most people, and the "lamp tax" is partly decorative choice, not correction. Additionally, running simulations adds cost/complexity to already constrained project timelines, and the electrician's rough-in changes are cheap but the design time isn't.

## Limitations
- IES foot-candle recommendations are guidelines, not evidence-based requirements for wellbeing
- The "lamp tax" calculation is our own estimate — no published study quantifies post-occupancy lighting correction spend
- DIALux is free but requires IES fixture files and some training; "zero cost" overstates it
- Circadian lighting impact in residential settings has limited long-term RCT evidence
- We couldn't find data on what percentage of custom homes (vs. spec/tract) hire lighting designers

## Journalist
**Elena Vasquez** — Architecture & Design. This is about spatial quality, the invisible design failure of bad light, and the tools that could fix it. Elena sees buildings as experiences. Lighting is the experience most people get wrong because they never thought to simulate it.
