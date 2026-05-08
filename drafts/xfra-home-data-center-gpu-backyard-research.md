# Research: XFRA Home Data Center Nodes — SPAN + Nvidia + PulteGroup

## Topic
PulteGroup (America's 3rd largest homebuilder) is installing mini AI data centers on new homes. SPAN's XFRA nodes use unused grid capacity to run AI inference workloads. Homeowners pay $150/month flat for electricity + internet (vs ~$300 average). The equipment is fanless, liquid-cooled, the size of an HVAC condenser.

## Journalist: Jake Kowalski (construction tech, tools, hardware)

## Primary Sources

### 1. Latitude Media (original reporting, April 2026)
- SPAN CEO Arch Rao: "The existing distribution network operates at only 40 to 45% utilization"
- Traditional 100 MW data center: 3-5 years to build, $15M+/MW
- SPAN XFRA equivalent: 8,000 homes, ~6 months, $3M/MW
- 100-home pilot in 2026: 1.25 MW compute across 1,600 direct liquid-cooled inference GPUs
- PulteGroup already installing SPAN smart panels
- SPAN raised $163M Series C (Feb 2026)
- Uses: AI inference (chatbots, autonomous driving, medical diagnostics) — NOT training
- Commercial XFRA Node for businesses/offices planned early 2027
- Orchestration software schedules workloads based on latency + available energy

### 2. Realtor.com / CNBC (May 2026)
- Physical: "About the size of an HVAC condenser"
- Design: Compact white boxes, blend with exterior
- Nvidia component: Liquid-cooled, FANLESS (eliminates noise concern)
- Marc Spieler (Nvidia SVP Global Energy): "The ability to leverage existing locations that have access to power makes a lot of sense"
- Installation: During construction, at no cost to homeowner
- Homeowner pays: $150/month flat fee for electricity + internet (~half typical cost)
- Some cases: no fee at all
- "Already rolled out in a small number of communities"
- Typical setup: smart panel + outdoor XFRA unit + backup battery + sometimes solar

### 3. Redfin-Ipsos Survey (May 2026)
- 47% of US residents oppose AI data centers in their neighborhoods
- 38% support them
- Concerns: energy costs, environmental impact, community disruption
- Younger Americans and Republicans show stronger support

### 4. Briefs.co / Additional reporting
- Nvidia Blackwell GPUs used
- Fanless design specifically addresses #1 community complaint about data centers
- 8,000 XFRA units = ~6x faster and 5x lower cost than 100 MW centralized facility
- Average American home uses only 40% of electrical capacity

### 5. Conservative Playbook / Criticism angle
- Framed as "sidestepping local resistance"
- Revenue model: Span sells compute to hyperscalers, keeps the profit
- Question: What happens to the equipment when compute demand shifts?
- Privacy implications of AI workloads running in residential areas
- HOA concerns
- Dell servers + 24-port switches mentioned in some configurations

## Original Analysis (Novel Contribution)

### The Builder's Math
- 1,600 GPUs ÷ 100 homes = 16 GPUs per home
- At $3M/MW and 1.25 MW for 100 homes = $37,500 in compute infrastructure per home
- If homeowner saves $150/month ($1,800/year) vs typical bills:
  - Payback on $37.5K infrastructure = ~21 years (Span pays, not homeowner)
  - But Span earns revenue selling compute — that's the real economics
- Builder's incentive: differentiation + lower operating costs for buyers + potential revenue share?

### What Changes in the Build
- Electrical: SPAN panel replaces standard panel (stays at 200 amps — key: NO electrical upgrade needed)
- Physical: Outdoor pad for XFRA unit (like HVAC condenser pad)
- Plumbing: Liquid cooling loop (new requirement — not standard residential)
- Networking: Enterprise-grade connectivity (fiber? dedicated line?)
- HVAC implications: 16 GPUs produce heat. Liquid-cooled, but still — where does rejected heat go?

### Unanswered Questions for Builders
1. What are the zoning/permitting implications?
2. Does the XFRA unit affect home insurance premiums?
3. What happens to resale value? Is the $150/month agreement transferable?
4. What's the maintenance responsibility? Who fixes a failed GPU at 2 AM?
5. How does this affect home appraisal (unusual equipment)?
6. What's the noise level? "Fanless" doesn't mean silent — liquid cooling pumps make noise
7. Lifecycle: GPUs depreciate. When Nvidia launches next-gen, who swaps them?

### Kill Test
Does this help someone building or buying a home? YES.
- Builders: Should you partner with Span? What changes in your build process?
- Buyers: Is the $150/month deal real? What are the catches?
- Both: This is coming whether you like it or not — PulteGroup builds 30,000+ homes/year

## Counter-narrative
- Up to half of data centers worldwide delayed this year (Sightline Climate)
- Data center demand is so intense they're now colonizing backyards
- The "distributed" framing is marketing — this is still corporate infrastructure on residential property
- Solar PPA analogy is imperfect: solar doesn't run 24/7 GPU workloads generating heat
- What if AI inference demand plateaus? Homeowner has a stranded asset
