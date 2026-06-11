# Research: Insurer AI Lowballing Rebuild Costs — Catherine Chen

## Angle
The AI arms race in home insurance: insurers deploy billion-dollar AI systems (Xactimate, CAPE Analytics, aerial imagery) to reduce claim payouts, while homeowners have almost nothing to fight back with. New regulatory actions and counter-tools are emerging, but the asymmetry is staggering. For someone building or buying a home, this is a hidden landmine.

## Kill Test
Does this help someone building or buying a home? YES — directly. If you're building new, your exact cost basis is known, but your insurer's algorithm will immediately start devaluing it. If you've just built or bought, you're probably underinsured and don't know it. This article tells you how to check, what tools exist, and what regulatory protections are emerging.

## Key Data & Sources

### The Underinsurance Crisis (Harvard/Wharton/Fed Research)
- **Harvard Business School Working Paper No. 25-054 (Sastry et al.):** Average US homeowner insures only 70% of rebuild cost. Coverage ratios fell from 70% (2011) to ~50% (2020). Linked ~100 million mortgage records to insurance policy data.
- **Federal Reserve Bank of Philadelphia Working Paper No. 25-09:** Marshall Fire (Boulder County, Dec 2021): 74% of affected homeowners underinsured. 36% severely underinsured (<75% coverage). Only 8% carried guaranteed replacement coverage.
- **Displacement data:** Every 10-percentage-point increase in underinsurance → 4-point drop in rebuilding permits within 1 year. Underinsurance lowered rebuilding permits by 25% within a year. More than half of destroyed homes sold within 18 months.
- **Premium spiral:** Every 1% premium increase → 0.3-0.8% coverage reduction (Sastry). Higher premiums = worse coverage, not better.

### Insurer AI Tools (The Arsenal)
- **Xactimate (Verisk):** Dominant estimating tool used by insurers for rebuild cost estimates. William May (Pacific Palisades wildfire) calls it a "reductive method" that lowballed his $1.7M home at $1.35M. Verisk says AI only handles "summarizing information or labeling photos" under human review. But the underlying cost database drives estimates.
- **CAPE Analytics:** AI-powered aerial/satellite property risk intelligence. Detects roof condition, trees near structures, pools, trampolines, "hundreds of property-specific risks." White paper frames tool as helping insurers avoid "excessive exposure when quotes are too low."
- **EagleView Horizon (launched May 2026):** New agentic GeoAI engine — aerial imagery + property intelligence + AI analytics. 20+ tools and MCP integrations. For roofing contractors + insurers.
- **Bain & Co policy paper:** GenAI expected to produce "30-50% decrease in total leakage" (leakage = difference between paid vs owed per contract). Framed as efficiency; critics say it's systematized underpayment.
- **AI projected to save insurers $35.77B annually by 2030** (storm law partners citing industry projections). Processing costs cut 50-65%, claims regulation expenses cut 20-30%.

### The Regulatory Response
- **NAIC 12-State Pilot (March 2026):** First formal government examination of insurer AI. States: CA, CO, CT, FL, IA, LA, MD, PA, RI, VT, VA, WI. Pilot runs through Sept 2026. Nationwide rollout vote: Nov 2026 fall meeting.
- **NAIC survey:** 88% of auto insurers use or plan to use AI for claims. Home insurance adoption likely similar.
- **NAIC AI Systems Evaluation Tool:** Covers four areas — extent of AI use, internal governance, high-risk system details, data dependencies.
- **Key provision:** Insurers must take full responsibility for AI from third-party vendors. Existing insurance laws apply to AI decisions same as human decisions.
- **Industry pushback:** Joint trade group letter (Dec 2025) objecting program is "voluntary for regulators while compulsory for companies."
- **Florida legislation:** State Rep. Hillary Cassel sponsored bill requiring human review in insurance claims decisions.
- **LA County probe:** County counsel sent document demand to State Farm re: AI tools in claims review process after Palisades fires.
- **Class-action lawsuits:** Illinois (State Farm algorithms disproportionately impact Black policyholders), California, Alabama.

### Homeowner Counter-Tools (The Response)
- **InsuranceClaim123:** Launched by two independent adjusters (Ben Mandell + Mark Vinson). $295 per report — "CarFax for insurance claims." Homeowners upload insurer's build-back estimate, get report in 3-5 days flagging missed damage, questionable depreciation, inconsistent scopes.
- **Public adjusters:** Represent policyholders, not insurers. Help organize documentation, translate policy language, present complete scope.
- **CoreLogic Marshall & Swift database:** Industry standard for replacement cost calculations. Available to insurers and agents but not directly to homeowners.
- **MoneyGeek home insurance calculator:** Measures coverage against current replacement cost by state/home size.
- **Parametric insurance:** Uses satellite imagery, IoT sensors, weather feeds to trigger automated payments when conditions met. No adjuster, no AI estimate dispute.

### State-by-State Coverage Data (Sastry et al. + MoneyGeek 2026)
| State | Median Coverage Ratio | Annual Premium | Coverage Gap |
|---|---|---|---|
| Mississippi | ~52% | $3,285 | ~48% |
| Alabama | 55.2% | $3,242 | 44.8% |
| Texas | 58.9% | $6,715 | 41.1% |
| Louisiana | 58.1% | $7,304 | 41.9% |
| Massachusetts | 84.3% | $1,647 | 15.7% |

### The New Construction Angle
- If you just built a $500K home, you know exactly what it cost. But your insurer's algorithm may immediately value it lower for rebuild purposes.
- Non-traditional construction (3D-printed, modular, CLT) gets even worse treatment — AI has no comps (ties to our article #39).
- Turner Building Cost Index: rose 8% (2022), 6% (2023), 3.9% (2024), 4.1% (2025) — construction costs still climbing.
- Coinsurance 80% rule: if your $500K home is insured at $300K (60%), a $100K kitchen fire pays $75K. Most homeowners don't know this clause exists.

### Voices
- Amy Bach, United Policyholders: "When people ask me, 'What benefits are consumers getting from AI?' I'm, like, in the insurance context, none."
- Monica Palmeira, Greenling Institute: AI enables "bluelining" — modern redlining where insurers withdraw from climate-vulnerable neighborhoods.
- Chip Merlin, FL policyholder attorney: "There is the potential for AI systems to make decisions based on incomplete or biased data, leading to unfair treatment."
- NAIC President Scott White: Regulators "don't want to stand in the way of innovation" but want AI used "transparently, fairly and in ways that hold up to scrutiny."
- William May, Pacific Palisades homeowner: "They use this reductive method... a phony way of calculating every screw, every bolt, and coming up with a profit for State Farm by undervaluing the house."

## Original Contribution
Cross-reference the Sastry/Harvard underinsurance data with new construction cost trends and the AI tool landscape to calculate the "AI information asymmetry" facing new homebuyers. If construction costs rose 25% since 2020 but coverage ratios dropped from 70% to 50%, the compounding gap is enormous. Show the math for a specific home price point.

## Strongest Counterargument
Insurers argue AI enables more accurate pricing, not systematically lower pricing. Verisk says Xactimate doesn't generate costs via AI — the database is "market-based, transparent, and rooted in human-validated data." CAPE Analytics says its tools help insurers avoid both overpricing AND underpricing. If AI makes risk assessment more accurate, premiums should better reflect actual risk, which could mean some homes get cheaper coverage and some get more expensive coverage — but all more fairly.

## Limitations
- Sastry study uses data through 2020; coverage ratios may have continued declining or stabilized
- Xactimate's specific algorithmic methods are proprietary — we can't verify claims about bias
- NAIC pilot is for auto insurance initially; home insurance examination timeline unclear
- InsuranceClaim123 is too new for independent evaluation of accuracy
- MoneyGeek's state-level data uses a standardized $250K dwelling / 2,500 sqft home — results vary by actual home size and coverage

## Journalist Assignment
Catherine "Code" Chen — this is pure policy/regulation territory. Insurance law, NAIC regulatory actions, class-action litigation, the intersection of building codes and insurance valuation.
