# Research: The Green Appraisal Gap Meets UAD 3.6 — ai-green-home-appraisal-gap-uad36-2026

## Thesis
On November 2, 2026, every appraisal sold to Fannie Mae or Freddie Mac must use UAD 3.6, which for the first time captures green features, solar ownership, building certifications, and efficiency ratings as structured, machine-readable data. This fixes the reporting half of the green appraisal gap — but the history half survives: AVMs train on 30 years of legacy appraisals that never recorded green features, and Fannie's own rules still zero out leased solar. Two identical houses with identical solar output can appraise $10,000 apart purely on financing paperwork.

## Journalist
Priya Greenwood — sustainability, green building. Rotation: last Priya article was #898 (Sept 18, 2026); recent run was Catherine (#1000), Jake (#1001), Marcus (#1002), Jake (#1003).

## Kill Test
Does this help someone building or buying a home? **YES.** Decides how to finance solar (own vs. lease has appraisal consequences under UAD 3.6), what documents to hand the appraiser (HERS rating, DOE Home Energy Score, Appraisal Institute Green Addendum), and what to write into the listing (the premium shows up where features are mentioned). Timing matters: UAD 3.6 goes mandatory in 28 days.

## Primary Sources

### 1. UAD 3.6 mandate — Fannie Mae / Freddie Mac (Nov 2, 2026)
- Uniform Appraisal Dataset 3.6 becomes mandatory for all new appraisal reports submitted to UCDP starting **November 2, 2026**; legacy forms retired. Deadline keys off the appraisal's initial submission date, not closing date.
- Lenders permitted to submit UAD 3.6 reports since **January 26, 2026** (limited production began with a small lender group Sept 8, 2025).
- New format: one dynamic Uniform Residential Appraisal Report (URAR) replacing separate forms per property type; separate interior/exterior/overall condition ratings; room-level condition ratings; ADU fields; renovation history and materials.
- **Dedicated structured fields for energy-efficient and green features: renewable energy components, building certifications, efficiency ratings, solar panel ownership, disaster-resiliency features, broadband.**
- FHA, USDA, VA moving toward the same standard on a similar timeline.
- Fannie Mae states the goal is "a more complete, structured appraisal report" — reporting change, not a change to valuation math itself.
- Sources: Atlantic Coast Mortgage (updated ~Sept 2026), Delaware Association of Realtors (Sept 21, 2026), Borg Group, Audra Law (audrabythesea.com).

### 2. Owned-solar-only rule — Fannie Selling Guide via QuiqNest (Aug 7, 2026)
- Under UAD 3.6, solar ownership status is captured as structured, machine-readable data that travels with the loan file. **Only owned solar contributes to appraised value.**
- Fannie Mae's Selling Guide is explicit: solar panels leased from or owned by a third party under a power purchase agreement **cannot** be included in the appraised value. No documentation path around it.
- Solar financed through a solar company and secured by a **UCC-1 filing** on the equipment is excluded from appraised value unless the loan documents state the panels cannot be repossessed — a term the retail solar channel does not offer.
- Quote: "The mandate does not change what solar is. It changes what an appraiser is allowed to say it is worth." — Patrick Blanchet, Founder/CEO, QuiqNest (EIN Presswire, Aug 7, 2026).
- Source: https://energy.einnews.com/pr_news/932530515/uad-3-6-mandate-arrives-november-2-clear-title-solar-is-the-only-solar-that-counts

### 3. GREEN Appraisals Act — reintroduced, still in committee
- **H.R. 2413** (Rep. Sean Casten, D-IL-6, introduced March 27, 2025) — referred to House Financial Services and Veterans' Affairs. Status: Introduced.
- **S. 1178** (Sen. Michael Bennet, D-CO, introduced March 27, 2025) — referred to Senate Banking, Housing, and Urban Affairs. Status: Introduced.
- Prior version: S. 4340 (118th Congress, 2024). Neither version enacted.
- Bill text (118th version, congress.gov): starting March 1, 2026, covered agencies must require that when a borrower consents, the creditor provides the appraiser with an energy report (HERS rating, DOE Home Energy Score, or similar) at assignment; a qualified appraiser must take the information into consideration; consideration of the energy report may not be used as a basis to reject an appraisal or loan application; appraiser's final opinion "may be higher, lower, or no different."
- "Qualified appraiser" concept includes specific continuing education on energy reports (7-hour course per bill summaries).
- **Caution:** advocacy summaries (policybrief.co) present the March 1, 2026 date as effective law; congress.gov shows both bills as Introduced only. The date is aspirational, not enacted.
- Sources: https://www.congress.gov/bill/119th-congress/house-bill/2413, https://www.congress.gov/bill/119th-congress/senate-bill/1178, https://www.congress.gov/bill/118th-congress/senate-bill/4340/text

### 4. ATTOM AI-powered AVM (May 2026)
- Ground-up AI-first rebuild replacing comp-based models; leverages 30+ years of time-adjusted transaction history across **98 million U.S. properties**.
- Iterative out-of-sample testing over the past decade of residential sales: **median absolute percentage error 2.9%**, >80% of valuations within 10% of actual sale price. Each valuation includes a confidence score.
- Built for mortgage, insurance, investment, proptech; delivered via APIs, bulk data, Snowflake/Databricks.
- CEO Rob Barber: "We've moved beyond static, comp-based approaches." VP Data Science Aaron Wagner: models how each neighborhood evolved over 30 years.
- Source: PR Newswire via thebesttimes.com, https://www.thebesttimes.com/financial/attom-launches-ai-powered-avm-built-on-30-years-of-property-intelligence/article_391e707d-ce2f-5174-b69f-4de7bbe6e138.html

### 5. Green premiums — 257/SECC (June 2026) + Freddie Mac/RESNET
- **257 / Smart Energy Consumer Collaborative** (June 2026, reported by pv magazine USA): listings explicitly mentioning rooftop solar sold for **2% higher** than comparable homes — about **$10,000** on the $557,000 median sale price. Listings mentioning heat pumps sold **0.6–1% higher** ($2,300–$3,900 on $399K median).
- **Only 8.3% of 2025 listings mentioned energy-efficient assets**; the share nearly tripled between 2015 and 2025. Analysis covered 143 million listings (1995–2025), narrowed to solar/heat-pump homes sold 2024–2025, comparing explicit-mention vs. non-mention.
- **Freddie Mac (2019, via RESNET):** HERS-rated homes sold for **2.7% more** than comparable unrated homes; homes with lower HERS Index scores sold 3–5% more than higher-scored homes. HERS-rated homeowners also had lower delinquency rates.
- Zillow (2019): solar homes sold 4% more. UC Berkeley study of 1.6M California homes (2007–2012): green certification added ~9%. Premiums vary by market (CA solar premium smaller where solar is ubiquitous).
- Source: https://pv-magazine-usa.com/2026/06/18/new-research-highlights-the-value-of-solar-and-energy-efficiency-in-the-home-buying-process/, https://www.resnet.us/articles/freddie-mac-study-hers-homes-sell-for-more-than-comparable-unrated-homes/

### 6. Freddie Mac Energy-Efficient Appraisal pilot (June 3, 2025)
- Rolled out across **38 states**: borrower's projected annual energy savings — verified by a third-party home-energy report — can be added to qualifying income for DTI. Documented savings of ≥$100/month; up to 15% of gross monthly income "derived" from verified savings.
- Freddie Mac pays an extra **$500 appraisal fee credit** to attract certified appraisers into the niche.
- Buyers choosing tighter envelopes, heat pumps, or rooftop solar can afford roughly 5–10% more house on the same paycheck.
- Source: usawire.com, https://usawire.com/counting-kilowatts-cutting-payments-how-freddie-macs-new-energy-efficient-appraisal-can-stretch-your-mortgage-budget/

### 7. Federal AVM quality-control rule (effective Oct 1, 2025)
- Six agencies (CFPB, OCC, FRB, FDIC, NCUA, FHFA); implements Dodd-Frank §1473(q) amendment to FIRREA.
- Five standards: high confidence in estimates; protect against data manipulation; avoid conflicts of interest; random sample testing and reviews; **comply with nondiscrimination laws** (discretionary fifth, beyond the four statutory).
- Applies to mortgage originators and secondary market issuers; covers open- and closed-ended credit including HELOCs.
- Source: https://www.creditandcollectionnews.com/blogposts/use-automated-valuation-models-dont-forget-about-this-new-avm-interagency-rule-that-just-took-effect-on-october-1-2025/, ABA Banking Journal.

## Original Contribution (Novel Analysis)

### The noise floor swallows the signal
ATTOM's 2.9% median error sounds precise. On the 257/SECC study's $557,000 median sale price, 2.9% is **$16,153** — larger than the entire $10,000 solar premium. The model's noise floor is bigger than the green signal it would need to detect. An AVM can be "accurate" (2.9% error) while structurally blind to a $10K feature, because the error band exceeds the premium.

### The ownership paradox
Two identical houses, identical roofs, identical solar output. One system owned outright; one leased. Under Fannie's rules, the owned system can contribute to appraised value; the leased system contributes **$0** — and UAD 3.6 now reports that distinction as structured data traveling with the loan file. The appraised value of your solar panels depends on your loan documents, not your roof. This is the first time the ownership distinction becomes machine-readable at scale.

### The training-data lag outlives the form fix
UAD 3.6 fixes *reporting* going forward — appraisers will have structured green fields. But AVMs like ATTOM's train on **30 years of time-adjusted transaction history captured on legacy forms that had no green fields**. The dataset problem outlives the form fix by years: the new structured green data has to accumulate before models can learn from it. The format changed in 2026; the training data is still the 1990s–2020s.

### The premium lives in the listing, not the physics
The 257/SECC finding's sharpest edge: the premium appears where listings **explicitly mention** the upgrades. Same heat pump, mentioned vs. not mentioned, differs by up to $3,900. The market prices what it can see. That reframes the whole gap as a data-entry problem — MLS fields, listing copy, the Green Addendum — not an algorithm problem.

### Appraiser education math
Old research (Green Builder Media, Sandra Adomatis): fewer than 5% of ~43,000 licensed residential appraisers have meaningful green-valuation education. UAD 3.6 gives every appraiser green fields to fill; the question is whether they can fill them competently. The GREEN Act's 7-hour course requirement has not become law.

## Strongest Counterargument
AVM providers would argue they model **market value** — what buyers actually pay — not replacement cost or feature cost. If buyers don't pay a premium for features they can't see in listings, the AVM is correctly mirroring reality; a model assigning value the market doesn't recognize would be less accurate and would inflate collateral risk for lenders. The 257 data supports this reading: premiums materialize where listings disclose features. The fix may be MLS data standards and seller disclosure, not the algorithm. On leased solar, lenders have a legitimate reason: they cannot foreclose on panels owned by a third party, so excluding them from collateral value is risk management, not bias. And UAD 3.6 itself changes reporting, not valuation math — Fannie says so explicitly.

## Limitations
- Green premium studies are correlational; none establish that features *cause* price increases (authors say "associated"/"correlated"). Buyers who install solar may also renovate kitchens.
- Premiums vary sharply by market: CA solar premiums are smaller where solar is ubiquitous; the 9% Berkeley figure is from 2007–2012 data.
- GREEN Appraisals Act has not been enacted; its March 2026 dates are aspirational. Freddie Mac's pilot results have not been published.
- ATTOM's methodology beyond the press release is unavailable; we cannot verify whether its feature set includes any green variables.
- The Adomatis <5% appraiser-education figure comes from one expert, no government source.
- UAD 3.6 does not change how value is calculated — only how it is reported. Structured fields with no competent appraiser behind them are empty checkboxes.

## Actionable Takeaways (for the article)
1. **Financing solar?** Owned outright with no UCC-1 fixture filing counts toward appraised value. Leased, PPA, or dealer-financed with a UCC-1 = $0. Ask the installer, in writing, whether the loan files a UCC-1 on the equipment. This now has appraisal consequences.
2. **Selling a green home?** Get a HERS rating ($300–500) or DOE Home Energy Score *before* listing; the premium shows up where features are documented and mentioned. Use the Appraisal Institute's Residential Green and Energy Efficient Addendum and hand it to the appraiser at the door.
3. **Hiring an appraiser?** Ask whether they have green valuation education (the <5% problem is real). For new construction, write a qualified-appraiser requirement into the sales contract (Hibbs Homes precedent: 14+ hours green valuation education).
4. **Timing:** UAD 3.6 is mandatory for Fannie/Freddie appraisals submitted on/after Nov 2, 2026. If your appraisal lands before the cutoff, the appraiser is on legacy forms with no green fields — bring your own documentation regardless.
5. **Buying?** Freddie Mac's energy-efficient appraisal pilot (38 states) lets verified energy savings count toward qualifying income — up to 15% of gross monthly income. Ask your lender if they participate.
