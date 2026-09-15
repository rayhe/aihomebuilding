# Research: AI Gas Range Ventilation CFM Gap — Recirculating Hoods & Induction Pre-Wire

**Slug:** ai-gas-range-ventilation-cfm-gap-recirculating-hood-induction-2026
**Journalist:** Priya Greenwood (sustainability & green building)
**Date:** 2026-09-15
**Kill test:** Does this help someone building or buying a home? YES — gives builders/buyers three spec decisions: (1) vented vs recirculating hood, (2) CFM sizing math vs builder defaults, (3) pre-wire 240V/50A induction circuit at rough-in vs $2k+ retrofit.

## Angle

New-build kitchens ship with gas ranges whose BTU totals demand 500-600 CFM of exhaust by the industry's own rule of thumb, but production builders install 160-250 CFM under-cabinet hoods, often recirculating (ductless), which exhaust nothing to the outside. Meanwhile peer-reviewed studies show gas stoves drive NO2, benzene, and methane exposure across the whole home. AI-powered IAQ/ventilation design tools can model this pre-construction; almost nobody runs the model before the spec sheet is locked.

## Primary sources

### 1. Kashtan et al. 2024, Science Advances (Stanford Doerr + Harvard T.H. Chan)
- DOI: 10.1126/sciadv.adm8680 — "Nitrogen dioxide exposure, health outcomes, and associated demographic disparities due to gas and propane combustion by U.S. stoves"
- Gas/propane stoves add ~4 ppb to household annual NO2 exposure = 75% of WHO long-term guideline. Quote from Kashtan: regular stove use "eats up three-quarters of that guideline."
- NO2 alone: ~50,000 current pediatric asthma cases. Including benzene + short-term NO2: up to ~200,000 cases. Up to ~19,000 premature adult deaths/yr (0.67% of all adult deaths; ~40% of secondhand-smoke deaths).
- Annual societal cost: ~$1B (asthma) / ~$250B (mortality); ~$4,500/yr per gas household.
- Author caveat: mortality number extrapolated from outdoor studies; applicability to indoor exposure unclear. (Honest limitation, use it.)
- ~38% of US households have gas stoves. Concentrations breach health benchmarks in bedrooms within an hour of use and persist for hours after burners are off. "It's the whole family's problem" — Rob Jackson.

### 2. Lebel et al. 2022, Environmental Science & Technology (Stanford)
- "Composition, Emissions, and Air Quality Impacts of Hazardous Air Pollutants in Unburned Natural Gas from Residential Stoves in California"
- Benzene forms in gas-stove flames. With one burner on high or oven at 350°F, indoor benzene can exceed secondhand-smoke benchmark levels; migrates to bedrooms.
- "Good ventilation helps reduce pollutant concentrations, but we found that exhaust fans were often ineffective at eliminating benzene exposure." — Rob Jackson.
- Pollution came from the gas, not the food (pan-fried salmon/bacon test). Implication for builders: you can't cook your way out of this; you must exhaust or electrify.

### 3. Gruenwald et al. 2023, Int. J. of Environmental Research and Public Health (RMI/Rewiring America)
- 12.7% of US childhood asthma attributed to gas stove use (~650,000 children), comparable to secondhand smoke. Based on Lin et al. 2013 meta-analysis of 41 studies (OR 1.32).
- Note critical reading (PMC10446003): brief 3-page PAF application; depends on the 2013 meta-analysis. Newer Kashtan 2024 paper gives lower central estimate (3.8% PAF) but statistically indistinguishable.
- Use both: the headline number is contested, the direction is not.

### 4. ASHRAE 62.2 + IRC/Title 24 ventilation code facts
- ASHRAE 62.2: recirculating (ductless) range hoods CANNOT satisfy the standard unless paired with an exhaust system delivering at least 5 air changes per hour of kitchen volume.
- Minimum for a vented kitchen range hood: 100 CFM (ASHRAE 62.2); CA Title 24 Part 6 requires HVI-verified ≥100 CFM at ≤3 sones.
- IRC: exhaust fans rated >400 CFM trigger makeup-air requirements. Industry sizing rule: ~100 CFM per 10,000 BTU of gas output (per multiple range-hood manufacturers and Green Building Advisor discussions).
- Green Building Advisor Q&A notes: rules of thumb lack analytic rigor; the code addresses makeup air, not fan capacity — sizing is left to rules of thumb.

### 5. AGA counter-response (use as strongest counterargument)
- American Gas Association review of Lebel 2022: called it "beyond worst case" modeling; indoor concentrations were modeled not measured; most median simulations were below CA OEHHA 8-hour REL of 0.94 ppbv; odorants would alert occupants.
- Fair use: AGA's core point — concentration modeling depends on assumptions — is legitimate. But the Kashtan 2024 paper answers it with 100+ real homes measured, not modeled.

### 6. Circuit cost economics (induction optionality)
- Angi: 240V outlet installation data; offthemrkt 2025 data: dedicated circuit materials $100-150, electrician $50-120/hr, drywall patching/paint $100-400 for retrofits.
- Bogleheads new-construction thread: running 240V/50A (NEMA 14-50, 6-3 NM) at rough-in is marginal incremental cost; upsizing wire after the fact is hard. "Go 50A. Incremental cost is marginal."
- AGA AGA document URL for counterargument: https://www.aga.org/wp-content/uploads/2022/12/american-gas-association-review-and-comments-lebel-et.-al-october-2022-10.26.22-1.pdf

## Original contribution (the calculation nobody did)

**The CFM gap worksheet** (a builder can run this in 60 seconds):

| Input | Value |
|---|---|
| Typical production-home 30" gas range total output | 50,000–60,000 BTU (4 burners ~7k-12k each; pro-style higher) |
| Industry rule of thumb (gas) | 100 CFM per 10,000 BTU |
| Required exhaust | 500–600 CFM minimum |
| Typical builder under-cabinet hood | 160–250 CFM |
| Gap | builder hood delivers ~30–50% of required exhaust |
| If recirculating (ductless) | 0% of combustion pollutants exhausted; grease filter only |

Kitchen-volume cross-check (ASHRAE 62.2 fallback): 12×12×9 ft kitchen = 1,296 cu ft → 5 ACH = 108 CFM. So code's fallback number (108 CFM) is 5× lower than the BTU rule (500+ CFM). **The code minimum and the physics disagree by a factor of five.** Builders spec to the code number, not the physics number. That disagreement IS the story.

**Induction optionality math:** rough-in 240V/50A at framing = breaker + wire + box, marginal (low hundreds). Retrofit through finished walls = $1,500–3,000+ with drywall repair and panel work. The option is worth ~10× its cost. Spec the circuit even if you install the gas range today.

**Ventilation design angle for the AI tie-in:** cove.tool, IES VE, and similar design tools run ventilation/airflow modeling; LBNL-derived pollutant models can predict room-by-room NO2 accumulation. The models exist and builders don't run them before locking the hood spec. (Attribute carefully: general capability claims, no fake product names.)

## Limitations
- CFM rule of thumb (100 CFM/10k BTU) is industry convention, not physics; Green Building Advisor notes analytic rigor is thin. Capture efficiency (hood geometry, height, cross-drafts) matters as much as CFM.
- Kashtan 2024 mortality estimate extrapolated from outdoor exposure studies; indoor applicability unclear (authors' own caveat).
- 12.7% asthma PAF (Gruenwald 2023) is contested; newer central estimate 3.8%. Present range, not one number.
- Recirculating hood prevalence in new production homes: widely reported as standard in tract builds but no national dataset; don't claim a specific %.
- Circuit cost ranges are national; local labor varies 2×+.

## Strongest counterargument
The AGA position at full strength: measured benzene studies modeled concentrations under worst-case assumptions; medians fell below California's 8-hour health screening level; gas stoves have cooked in homes for a century and NO2 exposure from cooking is episodic, not chronic like traffic pollution; the sensible intervention is proper vented exhaust, not ripping out gas infrastructure; electrification mandates punish households that can't afford panel upgrades. Then answer: the 2024 Stanford study measured 100+ real homes and still found bedroom-level exceedances; and the article's actual ask is the cheap one (vent it properly, wire for induction) — not a ban.

## Headline options
1. "Your Builder Hung a 200-CFM Hood Over a 60,000-BTU Gas Range. The Air Math Doesn't Work."
2. "Your New Kitchen's Range Hood Recirculates the Problem. The Benzene Stays."
3. "Your Gas Range Emits Benzene. Your Hood Exhausts Into the Kitchen."
