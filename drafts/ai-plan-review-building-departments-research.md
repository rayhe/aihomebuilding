# Research Notes: AI Plan Review in Building Departments

## Topic
AI-powered automated plan review tools are emerging just as the nation's building departments face a mass retirement crisis. The mismatch between the tools' capabilities and their adoption is the story.

## Journalist
Catherine "Code" Chen — Policy & Regulation

## Key Data Points

### Permit Review Timelines (PermitPlace 2026 study, 741 cities, 44 states)
- National average initial review: 22.9 days, median 14 days
- Chicago slowest major metro: 92 days
- San Francisco: 60 days, Portland: 51 days
- 18 cities have 180-day published timelines
- Actual commercial timelines: 2-5x published guidelines
- California avg: 21.1 days across 160 cities (extreme variance: 1 to 180 days)
- Texas fastest major state: 17.4 days across 81 cities
- Source: PermitPlace "2026 State of Building Permits Across America" (permitplace.com)

### Code Official Workforce Crisis (ICC/NIBS Survey)
- 30% of code officials plan to retire within 5 years
- 80% plan to retire within 15 years
- Only 15.6% of code officials are under age 45
- 57% work in departments with 9 or fewer employees
- Most hold multiple job functions (plan review + inspection + enforcement)
- Post-recession layoffs created permanent talent drain
- Source: ICC/NIBS survey via Builder Online ("Mass Retirement of Code Officials Looming")

### Denver Case Study (CivCheck / Clariti)
- City approved $4.6M, 5-year contract with CivCheck (March 2026)
- AI flags missing docs, incomplete fields, application errors BEFORE human reviewers see plans
- Denver's 180-day "shot clock" — refunds developers up to $10K if missed
- Already cut single-family/duplex possession time by ~45% since 2023
- Denver CPD cut 59 budgeted positions for 2026 (down to 251)
- Pre-submission approval rate was ~50%, goal is 80%
- Source: PYMNTS (May 2026), Denver7, Route Fifty, Denver Gazette

### AI Plan Review Tool Landscape
- **UpCodes Plan Review** (Jun 2026): $25-100/mo, 800K users, 11M code sections, 6K+ jurisdictions. AI-native QA/QC. Architecture, structural, MEP, fire protection, life safety, accessibility, energy. Founded 2016.
- **CodeComply.Ai** (CivicPlus partner, Mar 2026): IBC/IRC/ADA/NFPA/UFC. AI compliance assessments, automated version comparison, VersionVue change detection. Positions as "assistant not replacement."
- **CivCheck** (Clariti): Denver's pick. Pre-submission error catching. Focus on reducing incomplete submissions.
- **AutoReview.AI** (UF spinoff): Patent-pending. Based on decade of academic research. Florida customers. VR inspection overlay feature. Partnership with Carter + Clark.
- **PlanCheckPro.AI**: Florida-focused (FBC/NEC/ADA). "Hours not weeks." 5 employees. Founded 2023.
- **Permitify** (Y Combinator): Claims "10x productivity" for code officials.
- **Windover APRS-BIM** (patent pending): 2D→3D BIM conversion + AI code check. 70% review time reduction claim. UAE deployment.

### Housing Impact
- 83% of developers cite permitting delays as major barrier to housing development (CivicPlus/CodeComply press release)
- NAHB estimates regulatory costs add $93,870 to the price of an average new single-family home (2021 data, likely higher now)

### The Tension
Every AI plan review tool explicitly positions itself as "decision support" — not replacing the code official's final authority. Legal liability stays with the human reviewer. But:
- If the AI can check 11M code sections in minutes, and the human reviewer takes 8 weeks to do it manually...
- And 30% of those human reviewers are retiring in 5 years...
- And 83% of developers say permitting delays are a major barrier...
- What happens when there's nobody left to rubber-stamp the AI's work?

### Original Contribution
Calculate the adoption gap: number of jurisdictions with AI plan review tools (handful) vs. total jurisdictions (over 30,000 in the US). Also: cross-reference retirement timeline with adoption curve.

### Strongest Counterargument
Code review isn't just pattern-matching against a rulebook. Good plan reviewers understand local conditions, contractor histories, unusual site constraints, and the judgment calls that no AI has been trained on. A missed egress calculation is one thing; a misunderstood site drainage pattern near a flood zone is a life-safety judgment. The AI tools themselves say "final compliance determinations remain the responsibility of qualified reviewers." What if the qualified reviewers aren't there?

### Limitations
- No independent audit of any AI plan review tool's accuracy
- PermitPlace data is published timelines, not actual observed review times (actual can be 2-5x longer)
- 83% stat comes from vendor press material — may have selection bias
- No data on how many jurisdictions have actually adopted AI plan review (likely very few)
- Cost estimates for carrying delays are extrapolated, not directly measured
