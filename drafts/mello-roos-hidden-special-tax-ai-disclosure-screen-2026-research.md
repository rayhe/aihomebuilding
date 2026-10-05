# RESEARCH: Mello-Roos special tax — the hidden second tax bill (Article #1005)

Slug: `mello-roos-hidden-special-tax-ai-disclosure-screen-2026`
Journalist: Catherine Chen (policy/legal)
Started: 2026-10-05T02:25:00-07:00

## Kill test
Does this help someone building or buying a home? YES. A California buyer comparing two $850,000 new-construction listings can face a $0 vs $68,000 lifetime cost difference hidden on page 47 of the disclosure packet. This article gives them the math and a concrete pre-offer screen.

## Thesis
California finances new-subdivision infrastructure with Mello-Roos Community Facilities District bonds, repaid by homeowners as a fixed-dollar special tax for 20-40 years. It never says "Mello-Roos" on the tax bill (it reads "CFD"), it is generally not deductible, and the bond principal is never reflected in the purchase price. Texas (MUDs) and Florida (CDDs) run the same playbook under different names. AI document screening can surface the obligation before contingencies are waived, but the tools miss handwriting and the disclosure packets themselves disclaim completeness.

## Primary sources
1. CalcLogix, "California Property Tax Guide 2026" (verified Feb 1, 2026): Mello-Roos $360-$10,000+/yr in newer communities; effective rates 1.10%-1.55%+ with bonds/Mello-Roos; not based on property value. https://calclogix.com/library/california-property-tax-guide
2. Kasama Lee, RE/MAX Gold (DRE #01408667), May 24, 2026: Watson Ranch / Enclave at Canyon Estates, American Canyon: Mello-Roos typically $1,200-$4,000+/yr ($100-$350+/mo); counts against DTI, reduces purchasing power $40,000-$60,000. https://kasamasells.com/blog/what-is-mello-roos-how-it-affects-your-monthly-payment-in-american-canyon
3. Sell My Home Real Estate, Jun 12, 2026: OC newer developments $1,200-$5,400/yr; Inland Empire $2,000-$6,000/yr; $4,000/yr reduces loan qualification $50,000-$60,000; on the bill it appears as "CFD," never "Mello-Roos." https://sellmyhomerealestate.com/blog/2026/06/12/mello-roos-the-hidden-tax-that-costs-oc-ie-buyers-500-a-month
4. Danielle Short (realtor), Santaluz analysis from bond documents: City of San Diego FY2025-26 admin report, Improvement Area No. 1: $2,924,262 special tax requirement across 988 parcels = ~$2,961/parcel avg. Apportionment by residential floor area, NOT sale price. IA No. 1 bonds: $56.02M (2000) + $5M (2004), refunded to $51.68M (2011, refinanced again 2021). https://danielleshort.com/blog/what-santaluzs-mello-roos-tax-actually-costs-according-to-the-bond-documents
5. Cal. Civil Code § 1102.6b (FindLaw): seller must make "good faith effort" to obtain the Govt Code §53340.2 special-tax disclosure notice from each levying agency and deliver it to the buyer. https://codes.findlaw.com/ca/civil-code/civ-sect-1102-6b/
6. firsttuesday Journal, Form 137: purchase agreements typically prorate only the current installment, never the bond principal; buyer may require the bond amount credited toward price; right to renegotiate on receipt of notice. https://journal.firsttuesday.us/form137/82636/
7. MyNHD sample NHD report (2025): "estimates are not comprehensive... Assessment districts are subject to change... not a replacement for a title report." Satisfies Civ Code §§1103.2, 1102.6b, etc. https://images1.cityfeet.com/d2/ZvFwWbqdiq2TeqSxeXHQh6eEd8PeS7Opc9o2qqBZz1o/document.pdf
8. CDIAC yearly fiscal status report structure (Natomas Central CFD No. 2006-02, FY2021): $20.03M bonds issued 10/18/2016, $17.875M outstanding 6/30/2021, $1,014,232.62 special taxes due annually. Salida CFD 1988-1: $2,536,620.42/yr. Every district files one; the data is public. http://cityofsacramento.gov/content/dam/portal/treasurer/DebtManagement/ContinuingDisclosureFilings/CDIAC/FY2021/CDIAC_FY2021_Mello-Roos_Natomas_Central_CFD.pdf
9. Inman, Oct 29, 2025: agent workflow feeding full disclosure package to Gemini for cross-document analysis; gap analysis finds AI blind spots, esp. handwriting (cursive seller letters, margin notes). https://www.inman.com/2025/10/29/practical-magic-how-to-use-ai-for-real-estate-disclosures/
10. TrueRoll, Apr 7, 2026 (BusinessWire): AI-native OCR + document clustering for tax assessment offices; 11 assessment offices signed pre-launch; serves 150+ offices. https://businesswire.com/news/home/20260407035711/en/TrueRoll-Emerges-as-the-First-AI-Powered-System-of-Action-for-Tax-Assessment-Offices
11. UPDF, Sep 15, 2026: AI PDF workspace for real estate disclosure review, offer analysis, risk-clause highlighting. https://sse.einnews.com/pr_news/942355289/updf-helps-real-estate-teams-move-from-property-review-to-closing-faster
12. Texas MUDs: texasrealestatesource (MUD up to $1.40/$100 assessed, ~$4,200/yr on $300K home; declines over 20-30 yrs as bonds retire); Texas United Mortgage 2025 rates (Harris MUD 383: $0.5250/$100 = $1,837.50/yr on $350K; Brazoria MUD 21: $0.8250/$100 = $2,887.50/yr). Deductible as property tax (unlike CA Mello-Roos). https://www.texasrealestatesource.com/blog/what-do-property-taxes-pay-for/ ; https://www.texasunitedmortgage.com/resources/mud-tax-calculator-texas
13. Florida CDDs: dwellingwell (debt service is finite, O&M continues; payoff early possible; two identical houses can carry different CDD obligations); medium.com Kering Group ($2,000-$3,000 November tax-bill surprise for buyers without escrow). https://www.dwellingwell.com/blog/sarasota-hoa-cdd-deed-restrictions-buyers-guide/

## Original contribution
Present-value math on the hidden levy (computed, not quoted):
- $4,000/yr x 30 yrs at 6% discount, flat: PV = $55,059
- Same with 2%/yr escalation (common cap): PV = $68,462
- $5,000/yr (mid Inland Empire), flat: PV = $68,824
- DTI cross-check: $333/mo at 6.5%/30yr = $52,684 of borrowing power, confirming realtor $50-60K qualification-hit claims independently.
- Framing: the §1102.6b disclosure tells you the annual amount but the bond principal never enters the purchase price (firsttuesday) — the buyer inherits a lien whose principal was priced at $0 in the negotiation.

## AI angle
- Buyer-side: feed the NHD + tax bill + §1102.6b notice into an LLM before removing contingencies; ask for (a) annual special tax, (b) remaining term, (c) escalation cap, (d) PV at 6%. Inman documents this as real 2025 agent practice.
- Assessor-side: TrueRoll's AI OCR/clustering now processes transfer docs for 150+ assessment offices — the same document messiness, attacked from the government side.
- Skepticism: Inman author's gap analysis shows AI misses handwriting and non-contiguous addenda; NHD reports disclaim completeness; disclosure arrives mid-escrow when exit costs real money; no public accuracy dataset for any "special tax finder" product.

## Counterargument (full strength)
The tax buys real things: schools, roads, sewers, fire stations that support the home's value — the alternative was higher home prices or no infrastructure at all. Districts near bond payoff are bargains (the tax vanishes while the amenities stay). Some districts allow early lump-sum payoff. Older neighborhoods avoid it entirely. And in Texas, MUD taxes are deductible, softening the blow California buyers take.

## Limitations
- PV math assumes a fixed 30-year remaining term and 6% discount; actual terms run 20-40 years and many levies escalate up to 2%/yr (shown both ways).
- Santaluz IA-1 is one district; averages mask parcel-level apportionment by floor area.
- Deductibility: Mello-Roos generally not deductible as it is a local-benefit assessment, but fact patterns vary; buyers should confirm with a CPA (per improta.com note).
- AI screening accuracy: no independent verification dataset exists; handwriting remains a known failure mode.
- Not legal or tax advice.

## Headline
"The $68,000 Tax Buried on Page 47 of Your Closing Packet"
Alt: "Your New Home Has a Second Mortgage. It Is Called a CFD."
