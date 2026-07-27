# Research: Residential Duct Design Rule-of-Thumb vs. AI-Optimized Design

## Angle
Most residential HVAC ductwork is "designed" on the fly by installers using rule-of-thumb sizing. ACCA Manual D is the ANSI-recognized national standard, but most contractors skip Steps 1-3 and jump straight to Step 4. Meanwhile, ML-based duct sizing tools and computational fluid dynamics (CFD) exist for commercial buildings. The result: the average home's return grilles are undersized by 30%+, and 20-30% of conditioned air is lost before it reaches the room. An algorithm could properly design every duct run in a residential home. Nobody sells it to the contractor standing in the attic.

## Primary Sources

### ENERGY STAR (DOE)
- "In a typical house, about 20 to 30 percent of the air that moves through the duct system is lost due to leaks, holes, and poorly connected ducts."
- Source: energystar.gov/saveathome/heating-cooling/duct-sealing

### Lawrence Berkeley National Lab (LBNL)
- "Even after a new heating and air conditioning system is installed, 10-30% of thermal cooling and heating is often lost to duct leakage."
- "Estimated annual savings potential = 0.7 Quads = $10B" for residential alone
- 10% upstream + 10% downstream leakage increases supply fan power 30%
- For ducts in attics: 10/10% duct leakage yields only ~70% system efficiency in hot climates (Miami, Phoenix)
- Iain Walker 2001 paper: even 5/5% leakage yields only 80-86% efficiency
- Source: ipo.lbl.gov; energy.gov/sites/prod/files/2015/08/f25/LBNL_Duct_Sealings.pdf

### Florida Solar Energy Center (FSEC)
- Study of 21 new Florida homes: return leakage 13.4% of system airflow, supply leakage 13.2%
- "A 6% return leak from a hot attic can produce a 23% reduction in cooling output and 31% increase in cooling energy use" (Cummings and Tooley, 1989)
- Source: fsec.ucf.edu/en/publications/html/FSEC-RR-138-03/

### COMSOL / University Research
- "30-40% of the thermal energy can be lost due to conduction" in residential ducts
- "Air ducts can be responsible for up to 12% of the air leakage or 30% of the air leakage area of residential houses"
- Loss of thermal energy can reduce HVAC efficiency by up to 18%
- Source: comsol.com paper on attic duct model

### California Title 24 (2005 Residential Compliance Manual)
- Code requires duct leakage < 6% of supply air flow for new construction
- HERS rater must provide independent diagnostic testing and verification
- Source: nachi.org/documents2012/HVAC-Duct-Standards.pdf

### Duct Design Myths (Paul Wiebolt / Tradewinds Appropriate Technologies)
- "The average system return is undersized by 30% or more" when using the 144 sq.in. per ton rule of thumb
- Correct sizing should use 2 CFM per sq.in. of gross grille area
- Manual D systems are NOT self-balancing; installed ducts rarely perform like they do on paper
- Source: scribd.com/document/85099762/Ductwork-Myth-Buster

### ACCA Manual D (Industry Standard)
- "Most field teams are executing Step 4 without fully completing Steps 1 through 3"
- Manual D requires: Manual J load calc → equipment selection → airflow requirements → duct sizing
- 3rd Edition includes updated flex duct guidance, VAV examples
- Source: tacca.org; medium.com/@bhargavihalthore (industry overview)

### MaxSeal / San Jose Data (Jan 2026)
- "95% of San Jose homes" have duct leakage issues
- "25-40% of heated and cooled air" lost through unsealed ductwork in older housing stock
- "While many homeowners are replacing HVAC equipment, installing heat pumps, or pursuing electrification incentives... efficiency gains can be significantly reduced if air distribution systems are leaking"
- Source: tpp.einnews.com

### ML Duct Sizing Tools
- Medium article (Muhammad Zaid Awais): ML pipeline for HVAC duct sizing classification using Random Forest, classifying runs as "Undersized," "Optimal," or "Oversized" based on airflow rate, velocity, pressure loss
- HouseCallPro: online calculator "working within 5-10% of full ACCA Manual D results for standard residential layouts"
- Commercial: Autodesk Revit MEP, Wrightsoft Right-D, Elite RHVAC all do full Manual D calculations
- Gap: These tools exist but residential contractors overwhelmingly don't use them

### Aeroseal (LBNL spinout)
- Commercialized 1997 from LBNL research
- Uses airborne adhesive particles to seal leaks from inside pressurized ducts
- "Proven to seal from 70 to 90% of duct leaks"
- Envelope sealing tech licensed 2016, used by 50+ companies
- Source: ipo.lbl.gov

## Kill Test
Does this help someone building or buying a home?
**YES.** A homeowner can ask their HVAC contractor: "Did you do a Manual D calculation for this duct layout?" Most will admit they didn't. The article tells them what to ask for and why it matters to their energy bill.

## Journalist
Jake "Jackhammer" Kowalski — hands-on, punchy, construction tech. He'd crawl through the attic to check.
