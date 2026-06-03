# Research: AI Zoning Code Readability Gap

## Slug: ai-zoning-code-readability-gap
## Journalist: Catherine Chen (Policy & Regulation)
## Angle: AI can check a handrail height in seconds. It can't reliably tell you if your ADU is legal. The gap between prescriptive code checks and discretionary zoning interpretation is the real bottleneck — and the codes themselves are the problem, not the models.

## Kill Test
Does this help someone building or buying a home? YES — if your city is adopting AI plan review, you need to know what it can and can't catch. If you're building an ADU or navigating zoning, AI tools may give you confidently wrong answers about what's allowed on your lot. Understanding this gap prevents costly mistakes.

## Differentiator from Existing Articles
- #321 (Denver permit review, Frank DeLuca) — focused on permit backlogs and $4.6M spend
- ai-permit-review-plan-checker-shortage — focused on staffing shortages
- ai-permit-review-liability-gap — focused on liability when AI misses fire separation
- THIS article: focuses on WHY AI fails at zoning (code structure, cross-references, discretionary language) and what cities/homeowners should know

## Primary Sources

### 1. Urban Institute AI Zoning Benchmarking Study (2026)
- **Source:** urban.org/urban-wire/how-can-local-governments-use-ai-answer-community-members-questions-about-zoning-and
- Tested multiple AI models (Mistral, Llama, GPT 5-mini, ChatGPT 5.1 with web search) against Minneapolis's 467-page zoning code
- Used RAG framework with Minneapolis zoning document
- **Key findings:**
  - AI tools "often provided unhelpful answers" due to poor information retrieval
  - RAG framework struggled with questions requiring cross-referencing different sections of the code
  - Even when correct text was retrieved, irrelevant text was also pulled, reducing accuracy
  - ChatGPT 5.1 with web search (most advanced tested) "could not easily navigate Minneapolis's dynamic, interactive zoning websites, which are optimized for human readers"
  - The tools DID succeed at confidence calibration — they said "I don't know" when uncertain (didn't hallucinate)
  - Uploading the entire 467-page code directly to ChatGPT 5.1 (bypassing RAG) did NOT yield better answers — "information overload"
  - Researchers concluded even more iteration wouldn't dramatically improve results "without changes to zoning code documentation itself to make information retrieval easier for AI"
- **Recommendations:** machine-readable text, metadata tagging, restructured tables, symbol-free formats
- **Tested personas:** Professional developer (multifamily) and homeowner (ADU)
- GitHub repo with full questions and AI responses available

### 2. AutoReview.AI — University of Florida (2026)
- **Source:** warrington.ufl.edu/news/ai-review-construction-plans/
- First US AI-based full building code compliance review system
- Based on 10+ years of UF research in AI + NLP + VR for construction
- Developed against entire Florida Building Code (800+ pages)
- Customers: City of Gainesville, Pasco County, Altamonte Springs
- **Key distinction:** Focuses on BUILDING code (prescriptive, measurable — handrail height, concrete thickness, fire egress) NOT zoning code (discretionary, interpretive)
- Pasco County: "turnaround time improved and backlog shortened" (Jack Mariano, County Commission chairman)
- Altamonte Springs: "staff employee a few weeks... AI can do it in as little as 30 minutes" (City Manager Frank Martz)
- Handles ambiguous code language via NLP
- Survey of FL professionals: top delay factors = high volume, lack of staff, complex plans, many corrections
- Most frequently violated: means of egress, fire resistance, glazing, roof ventilation
- UF Invention of the Year 2022

### 3. Hernando County, FL / SwiftBuild.ai Pilot
- **Source:** conduitstreet.mdcounties.org (Conduit Street / Smart Cities Dive)
- Using SwiftGov platform from SwiftBuild.ai
- Automated zoning and building review for single-family homes and subdivisions
- Cross-checks plans against local zoning codes
- **Results:** Review times from ~30 days to as little as 2 days
- Estimated ~$1 million saved in administrative costs
- Final approvals remain with human staff reviewers
- Focused on single-family — the simplest zoning case

### 4. Blitz AI / City of Naples, FL (April 2026)
- **Source:** housingwire.com
- Strategic partnership with CityView (permitting software provider)
- Platform trained on Florida Building Code + local ordinances
- Evaluates plans in minutes, flags noncompliance, generates red-lined review reports
- Integrated with existing CityView permitting system

### 5. Florida HB 803 (2026)
- **Source:** flsenate.gov (982191.docx)
- Explicitly authorizes "automated or software-based plans review system" for single-trade plan reviews
- Can determine compliance with National Electrical Code and Florida Building Code
- Legislative framework for AI plan review already exists in Florida

### 6. City of Tampa RFI
- **Source:** procurement.opengov.com
- Seeking AI-Based Plan Review Software for Development and Growth Management
- Scope: "basic prescriptive code requirements" from Building, Residential, and Accessibility volumes
- Key qualifier: "prescriptive (exact) requirements" — explicitly acknowledges limit to rule-based checks
- Examples of prescriptive requirements: square footage, code references, building elevations, product approval list, engineer stamp

### 7. International Code Council AI Navigator
- **Source:** Referenced in Fire Engineering article (fireengineering.com)
- Custom LLM for model building codes
- Answers questions about ICC model codes
- Officials could ask: "What are the gaps in our high-rise fire safety rules vs. latest IBC?"

### 8. Fire Engineering / LLMs for Code Enforcement (2026)
- **Source:** fireengineering.com
- Chelsea, MA: Machine learning "nearly doubled" hazardous conditions found per inspection
- FDNY FireCast: Risk-based inspection scoring (building age, occupancy, violations, 311 complaints)
- Key insight: 311 complaints (noise, illegal trash dumping) correlate with fire hazards — text analysis via LLM
- Limitations acknowledged: LLMs "can hallucinate, make errors, suggest outdated provisions, or overlook subtle legal constraints"

## Novel Contribution / Original Analysis

**The prescriptive vs. discretionary divide:**
- Building codes are primarily prescriptive: "Handrails shall be 34-38 inches high" (IRC R311.7.8.1). Binary. Measurable. AI can check this.
- Zoning codes are heavily discretionary: "Compatible with the character of the surrounding neighborhood." Subjective. Context-dependent. AI fails here.
- The success stories (AutoReview.AI, SwiftBuild.ai, Blitz AI) are overwhelmingly on the prescriptive side
- The failure story (Urban Institute) was on the discretionary/cross-reference side
- Tampa's RFI explicitly limits scope to "prescriptive (exact) requirements" — they already know the boundary

**Cross-reference problem:**
- Urban Institute found RAG failed specifically on "questions that required bringing together different sections across the zoning code"
- Building codes layer: IRC → local amendments → overlay districts → variance history → conditional use permits
- A single ADU question might require synthesizing: base zoning district rules + ADU-specific provisions + overlay district modifications + state preemption (like CA ADU law) + local implementing ordinance
- That's 4-5 documents, each cross-referencing the others

**The denominator problem:**
- Florida's successes are measured in time savings (30 days → 2 days)
- Nobody is publishing accuracy rates on the zoning/discretionary side
- The Urban Institute study is the closest thing to a benchmark — and the results are sobering

## Strongest Counterargument
The technology is improving rapidly. The Urban Institute tested earlier models, and agentic approaches may solve the cross-reference problem. AutoReview.AI's 10+ years of domain-specific training on the Florida Building Code shows that deep vertical investment does work for prescriptive codes. The question is whether the same approach will work for discretionary zoning.

## Limitations
- Urban Institute tested only Minneapolis's code — other cities with simpler/newer codes may perform better
- Florida's pilots haven't published accuracy rates, only time savings
- We don't have head-to-head comparison of AI vs. human reviewer accuracy on zoning questions
- The prescriptive/discretionary divide is a spectrum, not a binary — many code provisions fall in between
