# Research Notes: AI Title Search × County Record Gap

## Angle
AI title search tools can process decades of property records in minutes. But public records across 3,600+ US county jurisdictions were never designed to be machine-readable — different indexing systems, naming conventions, handwritten entries, and incomplete digitization. A 1% data accuracy variance across 5 million annual home sales could produce 50,000 clouded titles over 5-10 years. The homebuyer closing on their biggest purchase has no visibility into which kind of search was performed.

## Journalist: Catherine Chen (Policy & Regulation)

## Kill Test
YES — directly helps homebuyers understand what their title search actually covers, what AI can and can't catch, and what questions to ask at closing.

## Primary Sources (5)

### 1. DataTrace White Paper (April 2026)
"Title Search Automation: Reality, Risk, and Responsibility of AI"
- 1% data accuracy variance × 5M transactions = up to 50,000 instances of inaccurate title
- Issues surface over 5-10 year period (refinance, sale, litigation)
- "There is no mechanism for AI alone to deliver complete, accurate and insurable title from public records, because the record itself is not complete or verified" — Cotton, DataTrace
- DataTrace maintains 8.5 billion recorded document images across 1,850+ US jurisdictions
- Source: BusinessWire, April 6 2026

### 2. ALTA / ndp|analytics Study (2026)
American Land Title Association study with ndp|analytics:
- 80%+ of purchase transactions require reviewing 11+ documents tied to property ownership history
- 20%+ require examining 50+ records
- 59% of refinance transactions require review of 11+ documents
- Records include deeds, mortgages, tax liens, probate filings, easements, court judgments — often spanning decades
- Source: HousingWire, "AI can accelerate real estate transactions"

### 3. Capitol Lien — Real-World AI Failures (July 2026)
"The Impact of AI on Public Records: Why Human-Verified Research Still Matters in 2026"
Specific failure patterns:
- AI missed a federal tax lien because debtor's name included a hyphen in one filing and not in another
- UCC filing overlooked because county's indexing system didn't match AI's search logic
- Bankruptcy case missed because debtor used a trade name in one jurisdiction
- Fixture filing in Minnesota indexed under non-standard conventions
- AI cannot pull physical records, contact county offices, review microfilm, or compare across multiple data sources
- Source: capitollien.com, July 2026

### 4. Milliman Independent Analysis (2025)
- Fraud and forgery account for ~40% of title claim costs on refinance transactions
- Average refinance fraud and forgery claim exceeds $206,000
- Source: cited in Washington Examiner, July 2026

### 5. Cotality AI in Housing 2026 Report
- 75% of homebuyers expect AI is embedded somewhere in the transaction
- 86% assume AI used by property websites
- 82% by insurers
- 80% by lenders and real estate agents
- Source: HousingWire, April 2026

## Additional Context
- First American analysis: technology + competition reduced real cost of title coverage by 32%
- Qualia Clear (agentic AI): The Title Group (Nashville) uses it to automate audits and error detection in closing packages — catches missing signatures, notary dates, payoff shortages
- US has ~3,600 county-level recording jurisdictions, each with own indexing standards
- Title insurance industry processes ~5M existing home sales annually (long-run average)

## Strongest Counterargument
DataTrace itself argues that AI + structured validated data + human expertise is the path forward — not AI alone OR humans alone. The hybrid model catches more defects than either approach in isolation. First American's data shows technology has already reduced title costs 32%. The risk isn't AI adoption — it's premature full automation without the validation layer.

## Limitations
- DataTrace's 1% figure is illustrative, not measured from a controlled study
- Capitol Lien's examples are anonymized patterns, not named cases
- No published peer-reviewed study directly measures AI vs. human title search error rates head-to-head
- Title insurance claim rates are extremely low (~4-5% of premiums paid in claims) — the question is whether AI increases that rate at scale

## Original Contribution
Cross-reference the DataTrace 1% error math with the ALTA document-count data and Capitol Lien's failure taxonomy to show WHERE in the chain AI breaks: name normalization, cross-jurisdiction indexing, and physical record access. These aren't edge cases — they're structural features of how US property records work.
