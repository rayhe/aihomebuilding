# Research: Construction Closeout Data Handoff Gap

## Core Thesis
Construction management platforms (Procore, Buildertrend, CoConstruct) generate massive digital records during a home's construction — thousands of photos, daily logs, inspection reports, material specs, subcontractor invoices, as-built drawings. This data is invaluable for insurance, maintenance, warranty claims, renovations, and resale. Almost none of it transfers to the homeowner at closing. The data often gets archived or deleted within 90 days to 2 years after project completion. No AI tool bridges this gap for residential construction.

## Key Data Points

### What builders generate during construction
- Average residential project on Procore: 2,000-8,000+ photos, 100-300+ daily logs, dozens of inspection reports
- Buildertrend/CoConstruct typical project: material selections, change orders, subcontractor schedules, payment records
- Oxland Builders (Stratham, NH) — rare exception that provides digital closeout: paint colors/brands/sheens, flooring manufacturers, fixture model numbers, appliance serial numbers, warranty docs, care instructions
- Autodesk Forma: "Generate accurate, comprehensive turnover documentation with a single click" — but designed for commercial, not residential
- Procore + Buildr integration: creates turnover packages for GCs, but for commercial/multifamily

### What homeowners actually receive
- Typically: a binder with appliance manuals, a warranty card, garage door opener
- Some builders: paint colors on a piece of paper, maybe a USB drive
- Best case: a PDF closeout package with material selections
- Worst case: nothing beyond the keys

### The data gap costs homeowners real money
1. **Insurance underinsurance:** Verisk 360Value (dominant replacement cost estimator) prefill data for foundation shape was wrong 50% of the time (internal Verisk 2019 report, cited by SF Chronicle/United Policyholders). Homes insured at $400/sqft faced $850/sqft rebuild costs (Amy Bach, United Policyholders co-founder). If the homeowner had actual construction cost data, they'd know their real replacement cost.
2. **Lost warranty claims:** Without subcontractor contacts and material specs, homeowners can't trace defects to the responsible party. Average warranty claim on new home: $2,348 (builder's warranty reserve, from article #578).
3. **Renovation overspend:** Renovators estimate 15-25% of budget goes to "discovery" — figuring out what's behind the walls. With as-built data, this drops dramatically.
4. **Resale value:** Documented construction history adds value. No standard format exists for residential "building provenance."

### Industry data on data-centric practices
- NIBS study (BusinessWire, Jul 2025): Only 23% of construction owners are "highly engaged" in data-centric approaches
- 18% use digital twins
- 28% already use AI, with nearly half as many expecting adoption in next 2 years
- 86% of highly data-centric owners experience project benefits vs 74% general
- UK Building Safety Act requires digital safety records for higher-risk buildings — no equivalent in US residential

### Who owns the data?
- This is the crux: the builder's contract typically doesn't address data ownership
- Most construction management platforms' ToS: data belongs to the account holder (the builder), not the project owner (the homebuyer)
- AIA A101-2017: requires as-built drawings but doesn't address digital project data
- No state requires builders to transfer digital construction records to homeowners

### What would a solution look like?
- A "digital birth certificate" for new homes: structured data package containing materials, specs, photos, inspection results, subcontractor contacts, warranty info
- Cost to produce: negligible — the data already exists in the builder's platform
- Procore API, Buildertrend API could theoretically export this data
- Startups attempting this: Buildr (commercial focus), some proptech companies
- No residential-focused product exists at scale

### Strongest counterargument
Builders don't want to hand over data that could be used against them in warranty disputes or construction defect litigation. Every photo, every daily log, every inspection report is potential evidence. The incentive structure actively discourages transparency.

## Sources
- NIBS/FMI study via BusinessWire (Jul 2025): construction owner data practices
- United Policyholders / SF Chronicle: Verisk 360Value accuracy issues
- Procore/Buildr integration documentation
- Autodesk Forma closeout workflows
- Oxland Builders blog: example of residential closeout documentation
- IJSAT paper: "From Construction Closeout to Homeowner Handover" (luxury high-rise framework)
- Trimble: digital twin handover for asset management
- AIA Contract Documents: builder's risk and closeout requirements
- MoneyGeek: underinsurance data (most US homeowners cover only 70% of rebuild cost)

## Journalist
**Frank "The Foreman" DeLuca** — project management & operations beat. This is about process failure at the closeout phase, which is his wheelhouse. His world-weary voice works perfectly for a story about a problem everyone in construction knows about but nobody fixes.

## Slug
`construction-closeout-data-handoff-homeowner-gap`

## Headline Direction
"Your Builder Logged 4,200 Photos During Construction. You Got a Binder."
