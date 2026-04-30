# Research: AI Construction Documentation as Litigation Risk

## Angle
AI progress monitoring tools (OpenSpace, Buildots, Procore, drones, 360° cameras) create timestamped, irrefutable records of every defect and deviation on a job site. Builders adopt them for quality control. But every data point becomes potentially discoverable evidence in litigation. The tool that was supposed to prevent defects may become the prosecution's star witness.

## Journalist
Catherine "Code" Chen — policy, legal, building codes

## Kill Test
✅ Helps builders understand the legal exposure of AI monitoring before they deploy it
✅ Helps homeowners understand what documentation exists and whether they can demand it
✅ Actionable: specific steps builders should take (data retention policies, litigation holds, privilege strategies)

## Primary Sources

### 1. Arcadis Global Construction Disputes Report 2023
- Average value of construction litigation in North America rose **42% to $42.8 million** (historic high)
- Source: Arcadis 2023 report, cited by Everlaw

### 2. Burford Capital 2023 Construction Litigation Research
- **58%** of in-house construction lawyers spend **>$5 million/year** on litigation and arbitration
- **70%** expect increase in dispute volume over next two years
- Only **2%** report judgments paid voluntarily >75% of the time
- **32%** recover less than 50% of judgment value over 5 years
- Source: https://www.burfordcapital.com/insights-news-events/insights-research/2023-construction-research-insights/

### 3. Everlaw Construction Industry Innovation Forum
- E-discovery can account for **up to 70% of overall litigation costs**
- Construction custodians can number in thousands; data volumes easily run to terabytes
- "Mobile phone data is a treasure trove — what email was in 1999" — Tyler O'Halloran, Allensworth
- Source: https://www.everlaw.com/blog/ediscovery-best-practices/experts-3-ways-to-cut-construction-litigation-costs/

### 4. ABA Construction Lawyer — AI in Construction (Dec 2023)
- AI market in construction projected to hit ~$10B by 2028, 24% CAGR
- AI tools collect large amounts of data including personal info about workers
- CCPA: employees have rights over personal info (deletion, opt-out)
- Illinois BIPA: biometric data (facial geometry) requires written consent before collection
- Employment law: AI-collected data used for decisions (promotion/termination) triggers Local Law 144 in NYC
- IP law considerations for AI training data
- Source: https://www.americanbar.org/groups/litigation/resources/newsletters/construction/artificial-intelligence-construction/

### 5. ABA Construction Lawyer — Discovery Disputes in Digital Age (Jul 2024)
- FRCP Rule 26: anything relevant, nonprivileged, and proportional is discoverable
- Construction disputes "concern multiple years' worth of documents and data"
- Proportionality standard increasingly critical as ESI volumes grow
- Hosting costs for e-discovery platforms = significant monthly costs in larger cases
- Spoliation sanctions: courts can impose adverse inference for destroyed/altered ESI
- Technology-assisted review (TAR) increasingly used but adds cost layer
- Source: https://www.americanbar.org/groups/construction_industry/resources/construction-lawyer/2024-summer/revolution-evolution-discovery-disputes-digital-age/

### 6. BCG — The AI-First P&C Insurer (2026)
- P&C AI spending as share of revenue will **triple in 2026**
- Only **38%** of P&C insurers generating value at scale from AI
- Source: https://www.bcg.com/publications/2026/the-ai-first-property-and-casualty-insurer

### 7. Pinsent Masons — AI in Construction Arbitration (Jun 2023)
- AI tools can analyze vast quantities of project documents
- "Game changer" for document collation and review
- ICC 2018 guide recommends limiting document production in arbitration
- Source: https://www.pinsentmasons.com/out-law/analysis/ai-game-changer-document-production-construction-arbitration

## Novel Analysis: E-Discovery Cost Multiplier

Traditional residential project documentation:
- Change orders, RFIs, daily logs, photos = ~2,000-8,000 documents
- At $1-$3/document for review: $2K-$24K e-discovery cost

AI-monitored residential project:
- 360° captures: 50-200/day × 200 construction days = 10,000-40,000 images
- Deviation reports: automated flags, BIM comparisons = 500-2,000 reports
- Sensor data: concrete curing, moisture, thermal = continuous streams
- Total discoverable data points: 50,000-500,000+
- At $1-$3/document equivalent: $50K-$1.5M+ e-discovery cost
- **Cost multiplier: 25-60×** for AI-monitored vs. traditional projects

Plus: AI data is structured, timestamped, and geolocated — making it MORE searchable and harder to argue is irrelevant under proportionality standard.

## Key Legal Concepts

1. **Duty to preserve**: Once litigation is reasonably anticipated, all AI monitoring data must be preserved. Turning off cameras or deleting logs = spoliation.
2. **Adverse inference**: If AI data is destroyed, courts can instruct jury to assume it was unfavorable.
3. **Standard of care shift**: As AI monitoring becomes common, NOT using it could become evidence of negligence. "You could have known about the defect for $3K/month."
4. **Privilege**: Internal communications ABOUT AI findings may be privileged. The raw AI data almost certainly is not.
5. **Expert witness implications**: AI-generated defect reports create questions about whether AI output qualifies as expert testimony under Daubert.

## Strongest Counterargument
The same documentation that creates litigation risk also prevents defects. Projects using AI monitoring report fewer rework events and earlier defect detection. The net effect may be fewer total lawsuits — and the surviving ones involve genuine defects that SHOULD be caught. The documentation is doing exactly what the legal system wants: creating accountability.

## Limitations
- No published case law specifically about AI construction monitoring data being subpoenaed (this is emerging, not settled)
- E-discovery cost estimates are extrapolated from general e-discovery data applied to AI data volumes — no published study of AI-specific construction e-discovery costs exists
- Data volumes are estimates based on vendor specs (OpenSpace, Buildots) applied to typical residential timelines
- Most construction AI monitoring data comes from commercial projects; residential deployment is nascent

## Actionable Takeaways for Builders
1. Write a data retention policy BEFORE deploying AI monitoring
2. Establish litigation hold procedures that include AI data streams
3. Designate an AI data custodian with authority to preserve
4. Negotiate AI documentation clauses in construction contracts
5. Review insurance coverage for e-discovery costs
6. Consider cost: AI monitoring ($3-10K/month) could generate $50K+ in e-discovery costs if sued
