# Research: Invoice Diversion Fraud (BEC) Targeting Homebuilders

## Journalist: Frank "The Foreman" DeLuca

## Angle
Construction is the #1 sector for invoice diversion fraud: criminals spoof a supplier's or subcontractor's email, swap the bank details on a pixel-perfect invoice, and the payment vanishes. Generative AI now writes the spoof emails and can clone a vendor's voice on a confirmation call. Meanwhile the same AI is the best defense: anomaly detection on invoices, bank-account verification before wires. Frank's operations beat — this is about process discipline on the job site office, not gadgets.

## Kill Test
Does this help someone building or buying a home? **YES.** A GC who pays one spoofed $47,000 invoice eats the loss and still owes the real sub. A homeowner wiring a $120,000 renovation progress payment to a spoofed contractor address loses it permanently (the Tasmania case: not recoverable). The fix is a 90-second phone call to a known number — the cheapest insurance in construction.

## Primary Sources

### 1. FBI IC3 2025 Internet Crime Report (published April 2026)
- Real estate fraud: **$275.1M in losses from 12,368 complaints (2025)**, up 59% from ~$173M/9,359 (2024); $145M/9,521 (2023); peak 2022: $397M/11,727 complaints.
- BEC overall: **$3.04B across 24,768 complaints** — second-costliest crime type.
- 22,364 AI-referencing complaints, losses >$893M.
- IC3: "Chat generators can quickly create official-sounding emails mimicking a company's CEO or other officials. These emails can contain phishing links or directions to wire funds. Voice cloning can also be used to request wire payment."
- "AI technology enables the creation of convincing synthetic content, such as social media profiles and personalized conversations, often in mass quantities."
- Reported via ALTA press release (Apr 10, 2026), NAR, Inman, HousingWire, American Banker.
- Source: https://www.alta.org/news-and-publications/press-release/Latest-FBI-Cybercrime-Report-Shows-Real-Estate-Fraud-Losses-Rising-Reinforcing-Need-for-Strong-Consumer-Safeguards

### 2. Australian Federal Police — BEC targeting construction (media release)
- "The construction sector, with its high-value transactions and complex subcontracting chains, has become an attractive target for organised cybercrime groups operating both domestically and offshore." — Asst Commissioner Richard Chin, AFP Cyber Command.
- Australians lost **$152.6M to BEC in 2024, up 66% from $91.6M in 2023** (National Anti-Scams Centre).
- BEC = 13% of all business cybercrime reports (ReportCyber), top 3 self-reported.
- **NSW case:** construction company paid $41,800 on spoofed supplier invoices; victim texted remittance to supplier's KNOWN mobile number, got told details were wrong, reported immediately — full amount recovered.
- **Tasmania case:** woman renovating her home lost **$120,000** to spoofed email mimicking her contractor; "the invoice was an exact replica of the original — except the payment details had been replaced." Delayed reporting = not recoverable.
- **Queensland case:** scammers impersonated a construction company with detailed knowledge of its client relationship; offshore syndicate links; total losses >$1M.
- AFP advice: "always confirm payment instructions through a secondary communication channel, such as a trusted contact you've previously engaged with."
- Source: https://www.afp.gov.au/news-centre/media-release/criminals-target-construction-sector-business-email-compromise-scams

### 3. UK NCA + National Federation of Builders invoice fraud campaign (Sept 2025)
- September 2025 alone: **83 cases, £3,908,086 lost — average ~£47,000 per case** (Report Fraud).
- Invoice fraud = **85% of all Payment Diversion Fraud losses**.
- **Construction + manufacturing = 25% of invoice fraud cases in 2024/25 — the largest of any sector pair.**
- NCA: construction exposed because of "complex web of contractors, sub-contractors, consultants," frequent high-value payments, and "relatively insecure email channels."
- Typical method: criminal contacts company posing as supplier, asks for payments to a new bank account; spoofed domains identical except one letter (lawfirm.com vs lawflrm.com).
- Source: https://www.pbctoday.co.uk/news/planning-construction-news/national-federation-builders-nca-launch-campaign-against-invoice-fraud-in-construction/160479/

### 4. CertifID — wire fraud protection data
- Protected 1.4M+ real estate transactions; **blocked $283M in attempted fraud; recovered $118M** in partnership with the US Secret Service.
- 2022 State of Wire Fraud report: **$1.4B in suspected fraud identified** (145% YoY increase in reported instances); suspected fraud targeted 83% of customers; average recovery case $165,000.
- Rules-based engine + AI model trained on internally vetted data and expert decisions; evaluates "150 different markers of fraud."
- Source: https://www.alta.org/blog/post/report-14b-in-suspected-wire-fraud-identified-by-certifid-in-2022 and https://www.businesswire.com/news/home/20260224406488/en/CertifID-Expands-Platform-to-Simplify-and-Secure-the-Closing-Experience

### 5. ALTA 2021 Wire Fraud & Cyber Crime Survey
- Fraudsters attempted to trick title professionals into wiring funds in **~1/3 of all real estate/mortgage transactions**.
- Funds actually wired to a fraudulent account in a little over 8% of attempts.
- Full recovery possible in only 29% of cases; in 40% of cases, less than 10% recovered.
- ALTA Best Practices (Pillar 2) updated: wire procedures must include MFA and wire verification services.
- Source: https://www.alta.org/blog/post/survey-title-professionals-targeted-for-wire-fraud-in-a-third-of-all-transactions

### 6. ACFE / K2 Integrity on construction fraud (via CMAA)
- Construction ranks in top five industries for median fraud loss: **median $250,000** (ACFE 2024 report).
- Median scheme duration: **12 months** before detection.
- Most common US construction frauds: billing schemes, corruption, expense reimbursements, noncash misappropriation.
- Only 37% of construction firms surveyed (KPMG) use generative AI — the defensive side lags.
- Source: https://www.cmaanet.org/sites/default/files/resource/Generative%20AI.pdf

### 7. AI defense: AP automation anomaly detection
- **Medius** (AP automation): AI anomaly detection + behavioral monitoring claims **90–95% reduction in payment fraud and error rates**; 96.3% touchless PO-invoice processing vs 23.4% market average.
- **Routable** (Feb 2025): added AI agent to AP platform detecting invoice anomalies, duplicates, and data-entry errors pre-payment — "impossible for humans to keep up" as fraudsters get more creative (PYMNTS).
- **Ramp**: fraud-prevention agent flags unexpected banking-detail changes, unverified vendor accounts, questionable email domains before payment.
- Source: https://www.medius.com/solutions/medius-accounts-payable-automation/invoice-automation/ ; https://www.pymnts.com/fraud-prevention/2025/routable-adds-fraud-detecting-ai-agent-to-ap-automation-platform/

## Original Contribution
Average loss per complaint, computed from IC3 real-estate-fraud series (2022–2025):
- 2022: $397M / 11,727 = **$33,851** avg (refi-boom peak)
- 2023: $145M / 9,521 = **$15,231** avg (trough)
- 2024: $173M / 9,359 = **$18,485** avg
- 2025: $275.1M / 12,368 = **$22,245** avg — **up 46% from the 2023 trough**
- BEC overall 2025: $3.04B / 24,768 = **$122,744 avg per complaint** — ~5.5x the real-estate average.

Novel reading: the per-victim loss collapsed after the 2022 refi boom, but it is climbing back fast — up 46% in two years — consistent with AI making each attempt more convincing (voice cloning, flawless spoof emails per IC3). Complaints in 2025 (12,368) exceeded the 2022 peak count (11,727) even though dollar losses did not. More victims, each losing more than in 2023–2024.

Methodology: simple division of published IC3 figures as reported by ALTA/NAR/Inman/HousingWire (April 2026 coverage of the 2025 report). Assumes consistent crime-type definitions across years; IC3 notes underreporting (FBI: only ~12–15% of wire fraud reported historically).

## Limitations
- IC3 figures are US-only reported losses; actual losses higher (underreporting).
- UK/Australia data used for sector-specific invoice fraud (US lacks a construction-specific public dataset); currency and legal contexts differ.
- Vendor claims (Medius 90–95%, CertifID 150 markers) are self-reported, not independently audited.
- No public dataset isolates residential homebuilding invoice fraud from commercial construction.

## Strongest Counterargument
The best defense is free and low-tech: call a known number before changing any payment details. AI anomaly detection is a nice-to-have for firms processing thousands of invoices; a three-person custom home builder gets 90% of the protection from a written rule (no bank-detail changes accepted by email, ever) that costs nothing. The AFP's own guidance leads with "stop and verify," not "buy software." Software vendors have every incentive to overstate the threat to sell subscriptions — the UK's £47K average case size is real, but it reflects reported cases, and reporting skews toward the spectacular.
