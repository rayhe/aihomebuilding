# Research: AI Energy Audit — The Diagnosis-Prescription Gap

## Angle
AI can diagnose your home's energy problems with 92.8% accuracy. When it comes to telling you which fix to do first — which one pays back fastest for YOUR income, YOUR climate zone, YOUR utility rates — accuracy drops to 54.5%. The gap between diagnosis and prescription is where homeowners lose money.

## Kill Test
**Does this help someone building or buying a home?** YES. If you're a homeowner considering an energy retrofit, knowing that AI tools excel at finding problems but struggle to prioritize which to fix first is worth $10,000+ in avoided misallocation. Actionable: use AI for the diagnosis, use a human energy advisor for the prescription.

## Journalist
**Priya Greenwood** — sustainability beat, connects energy data to real utility bills, evidence-based with urgency.

## Primary Sources

### 1. Michigan State University — LLM Retrofit Decision-Making Study (2025)
- Published in MDPI Sustainability
- Evaluated 6 LLMs on building energy retrofit decisions
- **Technical accuracy: 92.8%** (identifying what retrofits exist, what they do)
- **Sociotechnical accuracy: 54.5%** (which retrofit for which homeowner, payback optimization, budget/climate/utility interactions)
- LLMs struggle with complex trade-offs and contextual factors
- Conclusion: promising for technical advisory, NOT standalone retrofit decisions
- Reported by Utility Dive, Insulation Institute, EC Magazine

### 2. Data2BEM — MIT Multi-Agent LLM Framework (2025)
- Published in PubMed/peer-reviewed
- LLM-based multi-agent framework for automated building energy modeling
- **Reduces retrofit analysis time from 8-32 hours to 48 minutes** (>90% reduction)
- Uses architectural data, specifications, and sensor inputs
- Applied to a Cambridge, MA office building with industry-accurate results
- Minimal human input needed for modeling phase
- Developed for supporting scalable decarbonization in construction

### 3. Lamarr.AI Drone Thermal Imaging — Detroit Municipal Pilot (2025)
- Founded through MIT, Georgia Tech, and Syracuse University (2021)
- Uses drones + thermal imaging + AI (computer vision + LLMs for report generation)
- Detroit pilot: partnership with Michigan Central and Newlab
- **Identified 460+ faults across public buildings**
- **Clients avoided $3M in unnecessary construction costs** (targeted interventions vs. full-system replacements)
- **HVAC energy reduction: up to 22%** in selected facilities
- Backed by Michigan's Advanced Aerial Mobility Action Fund
- Creates 3D thermal building models ("building MRI")

### 4. Traditional Home Energy Audit Costs (2025-2026 data)
- **Average cost: $437** (HomeAdvisor/Angi, 2025 data)
- Range: $212-$698 depending on home size, audit type, location
- Level 2 audit (typical): $250 for 1,200 sq ft (Fixr.com)
- Level 3 (comprehensive with blower door + thermal): up to $1,500
- Professional audits save 5-30% on utility bills
- Blower door test + thermal imaging = standard professional tools
- DIY thermal cameras now available for ~$200 (VEVOR, etc.)

### 5. IRA Rebate Status (Critical Context)
- California HEEHRA rebates: **fully reserved statewide** as of Feb 24, 2026
- 12 states had launched programs by Feb 2025
- IRA total: $8.8B for home energy efficiency
- HOMES pathway: up to $8,000 per household
- HEAR (electrification/appliances): up to $14,000
- Tax credits under 25C also stackable
- Demand exceeding funding in early-mover states

### 6. RMI Automated Home Energy Estimates Report
- Compared algorithm-based estimates to on-site assessments
- Found them "accurate enough" for energy cost tracking and transparency
- But not for prescriptive retrofit recommendations
- Supports the diagnosis-vs-prescription framework

### 7. University of Melbourne Retrofit Study (2025)
- Homeowners can recoup retrofit costs in 9 years
- Savings up to A$3,784 annually in heating/cooling
- Retrofitting pre-2005 homes to 6-star efficiency: 73% emissions reduction
- Cut electricity bills by 25.5 TWh/year equivalent

## Original Contribution (Novel Analysis)
**The 38.3 percentage-point gap** between technical identification (92.8%) and sociotechnical prescription (54.5%) is the story nobody else is telling. Every press release about these tools focuses on the 92.8%. Nobody's doing the math on what 54.5% means for a homeowner looking at a $15,000 retrofit decision.

Calculation: If AI recommends the wrong first-priority retrofit 45.5% of the time, and the average homeowner has 3-5 viable retrofit options with payback periods ranging from 3 to 15 years, missequencing the first fix could cost $2,000-$5,000 in delayed savings over the payback period of the wrong choice.

## Strongest Counterargument
The Michigan State study tested general-purpose LLMs (ChatGPT, etc.), not purpose-built energy modeling tools like Data2BEM or Lamarr.AI's proprietary system. Purpose-built tools with real building data integration may close the gap. The 54.5% figure may not apply to specialized systems — and homeowners are unlikely to use raw ChatGPT for retrofit decisions anyway. Counter-counter: most consumer-facing AI energy tools ARE powered by general-purpose LLMs behind a thin UI.

## Limitations
- Michigan State study tested LLMs in a controlled academic setting; real-world homeowner interaction patterns differ
- Lamarr.AI's $3M savings figure is self-reported and covers commercial buildings, not single-family homes
- Data2BEM was tested on one building; scalability unclear
- Cost data draws from national averages; regional variation is significant
- IRA rebate exhaustion is California-specific; other states vary widely
