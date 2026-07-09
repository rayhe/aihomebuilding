# Research: AI-Powered HVAC Sizing vs. Contractor Rules of Thumb

## Angle
Your HVAC contractor glanced at your house and quoted a system 40-70% larger than what you need. A phone with LiDAR and AI could have told you the real number in 15 minutes. The tools exist; the incentives don't.

## Journalist
Jake "Jackhammer" Kowalski — construction technology beat

## Kill Test
Does this help someone building or buying a home? YES — tells them to demand Manual J, names the tools, explains the financial incentive misalignment, and gives them specific dollar amounts for what oversizing costs.

## Primary Sources

### 1. HVAC Oversizing Statistics
- **~70% of residential HVAC systems in the US are the wrong size** (ACCA community data, cited by Medium/FieldProMax Apr 2026)
- **FSEC survey of 489 Florida AC contractors**: Only 33% use Manual J for sizing; 34.4% use software; **24.2% use square-footage rules of thumb** alone. Over a third intentionally oversize to "avoid complaints" or "accommodate future expansions." (Klongerbo et al., FSEC-PF-289-95)
- **Energy Vanguard analysis of batch of real Manual J jobs**: Actual sizing comes out to **856 sqft/ton**. Contractors using rules of thumb (500 sqft/ton) are installing systems **40-70% oversized**. High-performance homes can be 1,500-2,500 sqft/ton, meaning a rule-of-thumb contractor would install a system **2-5x larger** than needed. (Allison A. Bailes III, PhD, Energy Vanguard)
- **Rewiring America / MassCEC data**: Rules of thumb oversized heat pumps by an average of **31,000 BTUs** (over 2.5 tons). Not a single homeowner would have installed the right unit using the "30 BTU per sqft" rule. Even the better "divide by 400" rule left **30% oversized by 1+ ton** and **32% undersized** dangerously.

### 2. Energy & Cost Impact
- **Heating and cooling = 43% of home energy use** (~$860 of avg $2,000 annual bill). DOE/Energy.gov.
- Springer study: HVAC accounts for ~48% of total residential energy use.
- **Right-sizing saves 10-30% on HVAC bills** = $86-$258/yr for average home. (TheFurnaceOutlet data)
- **Upfront cost difference**: A 2-ton heat pump costs ~$1,200 less than a 3-ton. Raleigh case study: right-sizing cut initial quote by 15%, saved additional 10% on bills on top of insulation upgrades.
- **NIST study**: Improper installation (including oversizing) increases household HVAC energy use by ~30%. (Domanski et al., NIST)
- **NREL fact sheet (TP-5500-60801)**: Oversizing energy penalty comes primarily from **off-cycle parasitic power consumption** (controls, crankcase heaters), not cycling inefficiency per se. Oversized units spend more time off, so parasitic loads are proportionally larger.
- **ENERGY STAR**: Requires no more than 15% oversizing for new homes certification.

### 3. The Comfort Problem (Not Just Energy)
- Short cycling prevents adequate dehumidification — air feels clammy even at cool temperatures
- Uneven room temperatures, noisy starts/stops
- Shorter equipment lifespan from compressor stress
- In humid climates (FL, TX, Gulf Coast): especially problematic — system never runs long enough to pull moisture
- Richard Trethewey (This Old House): "Oversizing is one of the biggest issues in air conditioning because if you're too big, it just doesn't work, it'll freeze up."

### 4. AI/LiDAR Tools
- **Conduit Tech (acquired by ServiceTitan)**: LiDAR-powered iPhone/iPad scanning creates 3D model of home in minutes. Generates **ACCA-certified Manual J load calculation in 15 minutes** on-site. Overlays property data, orientation, degree days, building materials. Used by HVAC contractors as sales + design tool. Co-founder Shelby Breger. HVAC School Podcast (Mar 2024). 
- **Basnett Plumbing testimonial** (HVAC Today): Refused to adopt until accuracy matched Wrightsoft Manual J. "In May 2025, I did my first scan with Conduit Tech, and I haven't looked back since."
- **ServiceTitan HVAC Load Calculator**: Free online, integrates Conduit Tech LiDAR
- **FieldCamp.ai**: Free HVAC load calculator, 50,000+ users. Denver contractor testimonial: calculated 3.5 tons for ranch house, previous contractor quoted 5 tons — $2,000 unnecessary spend.
- **Traditional Manual J software**: Wrightsoft Right-J, Elite Software Rhvac, Cool Calc — all ACCA-approved but require manual data entry (tedious, error-prone)

### 5. The Incentive Problem
- Bigger system = more expensive equipment = higher contractor revenue
- FSEC survey: over 1/3 intentionally oversize
- Some respondents "chided others that size on square footage" while others protested undersizing is done "to achieve the low bid"
- Manual J takes time and effort (money) — explains why contractors developed rules of thumb
- Even contractors who DO Manual J often oversize by using inflated design temperatures or wrong window specs (GreenBuildingAdvisor "How to Cheat on Manual J")

### 6. Counterarguments
- **ACEEE 2008 study**: Found only small energy differences between "resized" systems and systems **50-100% oversized** when ducts are in unconditioned attics. Energy penalty from cycling not as dramatic as commonly claimed. (However: comfort and humidity impacts ARE real)
- **Variable-speed equipment**: Mitigates oversizing problems because it can ramp down to match actual load. Turndown ratio matters. If you're going to oversize, variable-speed is the least-bad way to do it.
- **Climate change concern**: Some argue past 30-year design temperatures are getting outdated as extreme heat events increase. Counter-counter: ASHRAE updates design data; the answer is to use current data, not add a gut-feel buffer.

## Original Contribution (Required)
**National cost calculation nobody's published:**
- ~130M occupied US housing units (Census)
- If ~50% have oversized HVAC (conservative per 70% "wrong-sized" stat): 65M homes
- Average oversizing penalty: ~15% of HVAC costs
- Average annual HVAC cost: 43% of $2,000 = $860
- 15% of $860 = $129/yr per oversized home
- **65M × $129 = ~$8.4 billion/yr wasted nationally on HVAC oversizing**

Also: AHRI reports ~7-8M residential HVAC units sold annually. If ~50% are oversized by 1 ton on average, each excess ton costs ~$1,200:
- **3.5M units × $1,200 = $4.2B/yr in unnecessary equipment spending**

**Combined: roughly $12-13B/yr in wasted equipment + energy costs from residential HVAC oversizing.**

## Limitations
- FSEC survey is old (1995), though the practice hasn't changed dramatically
- 70% "wrong size" figure is widely cited but primary methodology unclear
- NREL parasitic power finding applies mainly to older single-speed equipment
- Variable-speed adoption is growing and reduces oversizing penalty
- National cost calculation uses rough averages; regional variation is enormous

## Headline Candidates
1. "Your Contractor Looked at Your House for 10 Minutes and Sold You a 5-Ton AC. The Math Says 3."
2. "A $1,200 Phone App Does What Your HVAC Contractor Won't: The Actual Math."
3. "70% of Home AC Systems Are the Wrong Size. A Phone With LiDAR Fixes That in 15 Minutes."
