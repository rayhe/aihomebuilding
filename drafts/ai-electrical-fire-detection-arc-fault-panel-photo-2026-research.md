# Research: AI Electrical Fire Detection — Arc-Fault Sensing, Panel Photo Triage, and the Panels That Never Got Recalled

## Core Thesis
Home electrical fires kill ~527 Americans a year and cause $2.2B in damage, and the largest share starts with arcing in wiring no inspector can see. Two AI-driven shifts are changing who finds these hazards first: (1) whole-home arc signature monitoring (Ting) that samples voltage 30M times/second and flags arcing weeks before ignition, now distributed free through insurers; (2) photo-based panel triage — agents and buyers feeding panel photos to vision models to identify FPE Stab-Lok and Zinsco panels at showings. The skepticism: AI identification is not an inspection, nuisance/noise data exists, and a sensor in one outlet cannot see every branch circuit equally.

## Kill Test
Does this help someone building or buying a home? Yes. Buyers: photograph the panel at a showing, run it through a vision model with a disciplined prompt, and know whether to budget a $3,500–$5,000 panel replacement before the offer. Owners: a $49/yr (or free via State Farm) outlet sensor monitors for the arcing that precedes most electrical fires, with a human fire-safety team on the other end.

## Primary Sources

### 1. NFPA — Home Electrical Fires, May 2026 (2020–2024 annual averages)
- 46,652 home electrical fires/year; 527 civilian deaths; 1,580 injuries; $2.234B direct property damage.
- 77% from electrical failure/malfunction; unspecified short-circuit arc = 17% (7,823 fires); arc from faulty contact/broken conductor = 3%.
- Source: NFPA Research, NFIRS 5.0 + fire experience survey.
- URL: https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Electrical/osHomeFiresCausedbyElectricalFailureMalfunction_Supporting-Tables.pdf?rev=808b98402d8f4faca2a588b9d1a683a1&hash=3F5D1794FCCF9509CA287EE7F930AE5B

### 2. NFPA — Electrical Distribution & Lighting Equipment (Feb 2022, 2015–2019)
- 32,620 home fires/yr involving electrical distribution and lighting equipment; 430 deaths; $1.3B damage.
- Arcing was the heat source in 73% (23,760 fires).
- Wiring and related equipment = 68% of these fires; aluminum wire connections prone to deterioration (CPSC recommends replacement/repair by qualified electrician).
- URL: https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Electrical/osElectricalDistLighting.pdf?rev=8f3f516e17784846a65e17fce791f844The

### 3. Whisker Labs — 2023 Data Analysis Update (Ting whitepaper, NFPA Conference 2023)
- 1 in 68 homes each year experiences an electrical fire hazard (infrastructure, devices, appliances, or utility faults).
- Ting "predicts and prevents 80% of electrical fires"; analysis over 4,100 documented hazard cases across 265,000 homes.
- Homes 40–60 years old are 25% of the base but 33% of wiring-infrastructure hazards.
- ~60% of detected hazards from faulty wiring, ~40% from plugged-in devices (CEO Bob Marshall via Tom's Guide).
- URL: https://www.businesswire.com/news/home/20230619216780/en/Whisker-Labs-Releases-and-Analyzes-Exclusive-Electrical-Fire-Data

### 4. State Farm + Ting program (newsroom.statefarm.com)
- State Farm has offered 1M+ free Ting sensors; 200K+ insured homes monitored; ~250 fire hazards/month identified and mitigated.
- 3 years of service fees paid by State Farm; $1,000 labor credit toward hazard remediation from Whisker Labs.
- PCWorld review: sensor samples voltage 30M measurements/sec, identifies arc source (switch, outlet, device), human team calls homeowner to isolate circuit, arranges electrician.
- URL: https://newsroom.statefarm.com/state-farm-offers-customers-more-than-one-million-free-ting-sensors?CMPID=SOC:JXOJ_facebook_63ee8e796fc96705432620d6_0

### 5. USFA / IAEI Magazine — 25 years of AFCIs
- 2021: 24,200 electrical malfunction fires, 295 deaths, 900 injuries, $1.2B property damage; up 11% 2012–2023 while fatalities fell 17%.
- Leading ignition equipment: wiring, outlets/receptacles, branch circuits; panel (fuse) boards 4%; aluminum wiring deterioration produces hazardous overheating.
- URL: https://iaeimagazine.org/electrical-safety/a-quarter-century-of-protecting-homes-occupants/

### 6. Federal Pacific Stab-Lok / Zinsco — the panels that never got recalled
- CPSC testing confirmed FPE Stab-Lok breakers failed UL calibration requirements; NJ Superior Court (2002) found FPE "knowingly and purposefully" distributed breakers not tested to UL standards as labeled; CPSC closed investigation citing budget, urged vigilance.
- Installed in millions of homes (1950s–1980s); Zinsco breakers melt/fuse to bus bar. Inspectors routinely flag; many insurers refuse coverage or charge higher premiums.
- Panel replacement: $3,500–$5,000, typically one day (licensed electrician, Denver market data).
- URL: https://en.wikipedia.org/wiki/Stab-Lok

### 7. AI photo triage at showings (KyleRenke.ai — AI Showing Toolkit)
- Agents now photograph panels at showings (door closed, breakers open, label legible) and run ChatGPT/Claude prompts to identify FPE/Zinsco panels and estimate replacement cost before offers.
- Their own disclaimer: identifying a panel brand "does not by itself confirm a defect" and "is not a substitute for a licensed electrician's in-person inspection."
- URL: http://kylerenke.ai/resources/ai-showing-toolkit/ai-showing-toolkit.pdf

## Angles / Structure
1. Open with the arc you cannot hear: arcing is the heat source in 73% of distribution-equipment fires; it happens inside walls, months before ignition.
2. The outlet that listens: Ting's 30M measurements/sec, 1-in-68 stat, 80% prevention claim, State Farm distribution. What the AI actually detects (arc signatures vs. appliance noise).
3. The panels with a rap sheet: FPE Stab-Lok, Zinsco, aluminum branch wiring — installed in millions of homes, never formally recalled, flagged at every inspection, priced into insurance.
4. The showing-table trick: photo the panel, ask the vision model, get the replacement number before you write the offer. The disciplined prompt and its limits.
5. The skepticism section (required by voice): 80% is a company whitepaper number, not a peer-reviewed trial; one outlet cannot sense every branch circuit equally; AI brand ID is triage, not inspection; AFCI breakers already exist and code requires them in new construction — the gap is the 140M existing homes.
6. Actionable box: what to do this week (check panel brand, ask insurer about Ting, $3.5–5K budget line, get an electrician not a chatbot for the final call).

## Numbers to use carefully
- 46,652 / 527 / $2.234B (NFPA 2020–2024). 1 in 68 homes/yr hazard (Whisker). 80% prevention (company claim — attribute). $3,500–$5,000 panel swap. 30M measurements/sec. 200K State Farm homes, 250 hazards/month. Aluminum wiring: CPSC says replace/repair.
