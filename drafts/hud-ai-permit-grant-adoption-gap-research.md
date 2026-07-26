# Research: HUD AI Permit Grant Adoption Gap

## Core Story
HUD announced a $3M grant (end of May 2026) for cities to deploy automated building code permitting systems. Applications closed July 13, 2026. Early adopter cities show dramatic improvements — Edmonton gets same-day residential permits (vs 20-day wait), Honolulu cut processing time 70%. But most of the ~19,000+ building departments in the US haven't touched AI permitting.

## Primary Sources

### Federal / HUD Grant
- HUD grant: up to $3M for jurisdictions to deploy automated building code permitting
- Named platforms: PermitFlow, Blitz Permits, CivCheck, Permitify
- Applications open until July 13, 2026
- Source: StateScoop (statescoop.com)

### Edmonton, Alberta — Same-Day Permits
- Bloomberg What Works Cities: Edmonton's "auto-review" feature gives same-day residential permits for single and semi-detached homes in certain areas
- Typical wait without AI: 20 days
- Source: whatworkscities.bloomberg.org

### Honolulu — 70% Time Reduction
- DPP launched CivCheck in December 2025 for residential permits
- Commercial to follow by mid-2026
- Residential permit processing time cut by 70%
- Dawn Takeuchi Apuna, Director of DPP: "the time a reviewer typically took to process a residential permit application was quite substantial"
- Approach: CivCheck works like TurboTax — ensures applications meet requirements before formal submission
- Source: GovTech (govtech.com)

### Denver
- CivCheck deployed for residential permits
- Julia Richman (VP Clariti/CivCheck) — personal story: permit delays cost her family nearly $100,000 during home renovation in 2022
- Denver changed zoning regulations, causing rush of applications
- Source: StateScoop

### Seattle
- Mayor Bruce Harrell signed executive order directing all development applications through AI pilot
- Dedicated Permitting and Customer Trust team
- Full public rollout expected 2026
- Source: GeekWire

### Austin
- AI tool in partnership with Archistar for zoning review for residential developers
- Source: HousingWire

### Florida — AutoReview.AI
- AutoReview.AI (UF Warrington spin-off): AI reviews site/building plans against ALL land development and building codes
- Based on entire Florida Building Code (800+ pages)
- Pasco County: "turnaround time improved and backlog shortened in early-stage period"
- Altamonte Springs: "first city to launch automated AI-powered site plan review in Florida"
- City Manager Frank Martz: "it might take a staff employee a few weeks to get through one plan, while AI can do it in as little as 30 minutes"
- Gainesville also a customer
- Source: warrington.ufl.edu

### NYC DOB
- Processes roughly 275,000 applications per year
- Borough-based structure "changed little in more than a century"
- Source: NY Commission on Government Efficiency report (July 2026)

## Key Insight
PYMNTS article: "Permitting delays stem less from the complexity of technical reviews than from application quality at intake. Catching errors before formal submission costs less than cycling incomplete applications through the review queue multiple times."

## Novel Contribution — Carrying Cost Calculation
- Median new single-family home price: ~$420K (NAHB/Census)
- Average construction loan rate: ~7-8% (2026)
- If permit review adds 30 extra days beyond baseline:
  - On $300K in draws at 7.5%: $300K × 7.5% × (30/365) = $1,849 per home
  - At 1.2M single-family starts annually: ~$2.2B in aggregate carrying costs from avoidable permit delays
- If AI cuts 70% of that time (Honolulu result): $1.5B in annual savings

## Barriers to Adoption
1. Building departments understaffed — can't manage software deployment
2. Liability concerns — who's responsible if AI approves faulty plan?
3. Job displacement fears — Denver considered cutting 59 permit review positions
4. ICC building code copyright — digitizing codes for AI is legally complex
5. Local amendments — national AI tools inaccurate for specific jurisdictions
6. ~19,000+ building departments, mostly small/rural — tech capacity is minimal

## Strongest Counterargument
AI permit review catches formatting and completeness errors, not structural engineering judgment. The hard part of plan review isn't checking whether a hallway is 36 inches wide — it's evaluating whether a non-standard structural detail is safe. AI handles the former; humans still do the latter. The 70% time reduction is mostly eliminating wasted cycles on incomplete applications, not replacing expert judgment. Cities that oversell AI permitting as a replacement for trained plan reviewers risk approving dangerous designs.

## Journalist: Frank DeLuca
Process-obsessed, world-weary, 20 years of projects going sideways. He'd approach this as: "I've submitted thousands of permits. Half get kicked back for missing a checkbox. The federal government finally wrote a check to fix that. Most cities couldn't be bothered to cash it."
