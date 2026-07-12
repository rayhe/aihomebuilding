# Research Notes: AI-Designed Metamaterial Radiative Cooling Paint

## Source Paper
- **Title:** "Ultrabroadband and band-selective thermal meta-emitters by machine learning"
- **Journal:** Nature, published July 2, 2025
- **DOI:** 10.1038/s41586-025-09102-y
- **Authors:** Chengyu Xiao (first author, SJTU), Han Zhou, Di Zhang (SJTU); Cheng-Wei Qiu (NUS); Yuebing Zheng, Kan Yao (UT Austin Cockrell School); Max Yan (Umeå University, Sweden)
- **Institutions:** Shanghai Jiao Tong University (lead), UT Austin, National University of Singapore, Umeå University

## Key Findings
- ML framework generated 1,500+ thermal meta-emitter designs
- 32 basic 3D structural building blocks (spheres, cylinders, ridges, triangular prisms) + 30 different materials
- System produces 2,500 candidate designs per second (vs months of trial-and-error)
- 7 classes of meta-emitters: broadband, band-selective, dual-band, thermal camouflage, etc.
- Band-selective material achieved: 96% solar reflectivity, 92% emissivity in atmospheric window (8-13μm)
- Broadband emitter: >96% solar reflectance, 92% heat emission across full IR spectrum

## Real-World Test Results
- Coated model building roof vs white paint vs grey paint
- After 4 hours midday sun: meta-emitter 5°C cooler than white paint, 20°C cooler than grey paint
- Below-ambient cooling: 5.9°C drop at midday under clear skies
- In urban environments (heat from surrounding buildings), band-selective outperformed broadband AND commercial white paint
- Can be applied like conventional paint: brushed, sprayed, spin-coated at room temperature

## Energy Savings Claim (from paper)
- Simulated 4-story apartment building in Rio de Janeiro (tropical climate)
- Annual savings: 75 MJ/m² roof area → ~15,800 kWh for entire building
- For context: typical AC unit uses ~1,500 kWh/year

## NREL Study — US Residential Reality (2022, Journal of Cleaner Production)
- Authors: Wijesuriya, Kishore, Bianchi, Booten (NREL)
- 68 US locations analyzed for residential radiative cooling coatings
- **Phoenix (best case):** 426 kWh savings (6.2%) per year
- Climate zones 1A, 2A, 2B: net savings >5%
- Climate zones 5B, 6B, 7: net PENALTY >3% (heating cost increase exceeds cooling savings)
- Critical finding: net savings positive ONLY when avg cooling degree days >5.5 or heating degree days <10

## Conventional Cool Roof Coating Market Pricing
- Henry Tropi-Cool 100% Silicone: $460 for 4.75 gal, covers 320 sq ft (~$1.44/sq ft)
- Henry Dura-Bright Elastomeric: $40 for 0.9 gal at 100 sq ft/gal (~$0.44/sq ft)
- Typical US single-family home roof: ~1,700-2,000 sq ft
- Material cost: ~$750-$2,900+ depending on product

## Original Contribution: Single-Family US Translation
The paper's 15,800 kWh figure is for a 4-story apartment building in Rio. Translating to US single-family:
- 75 MJ/m² × ~175 m² typical single-family roof = 13,125 MJ = ~3,646 kWh (if in tropical climate)
- US reality per NREL: even Phoenix only saves 426 kWh (6.2%)
- At avg US residential rate $0.17/kWh: Phoenix = ~$72/year savings
- ROI on even cheap elastomeric: $750 / $72 = ~10.4 years
- For premium silicone: $2,450 / $72 = ~34 years (longer than coating lifespan)

The headline number is real for tropical apartment buildings. But for US homeowners: the savings are 37× smaller than the headline suggests, the ROI is measured in decades, and in cold climates you'll actually pay MORE in heating. The technology is genuinely impressive. The residential economics aren't there yet for most American homeowners.

## Kill Test
Pass — directly helps homeowners/builders evaluate a technology that headlines will oversell.

## Journalist: Priya Greenwood
Beat: Sustainability & Green Building. Evidence-based urgency. Connects energy data to utility bills.
