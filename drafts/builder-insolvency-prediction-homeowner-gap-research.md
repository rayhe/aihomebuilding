# Research: Builder Insolvency Prediction — Homeowner Gap

## Core Thesis
More than half of US residential builders are operating unprofitably, but homeowners have no tool to assess contractor financial health before signing a contract. ML models can predict construction firm insolvency with 90-97.5% accuracy using just 5-6 financial ratios. These tools exist for banks and surety companies — not for the person writing the $300K check.

## Primary Sources

### 1. 2026 SORCI Report (Association of Professional Builders)
- **51.4% of U.S. residential builders are operating unprofitably** once accounting accuracy is applied
- Only 17.1% self-reported making a loss — gap is due to accounting errors
- Only 12% of builders correctly understand all four critical financial metrics (WIP adjustments, markup vs margin, fixed expense ratios, net profit margins)
- 79.2% of builders who claimed to know WIP calculations couldn't correctly explain them
- 6th annual report; 8,462 participants since 2020; data collected late 2025
- Source: PR Newswire, Feb 18 2026

### 2. NAHB Cost of Doing Business Study, 2025 Edition
- Average single-family builder net profit margin: 8.7% (2023) — highest in 30+ years, second only to 10% peak in 1991
- Gross profit margin: 20.7% (2023), up from 18.2% (2020)
- BUT: these averages mask huge variation; profitable builders cross-subsidize the unprofitable majority
- Source: NAHB BuilderBooks, Apr 2025

### 3. ML Insolvency Prediction Models (Academic Literature)
- **Polish study (2021):** Logit regression (ZLR) = 95% accuracy, regression tree (ZRT) = 97.5-100% accuracy on test sample of 80 companies. Used just 6 financial ratios. (MDPI Risk Journal)
- **South Korean ensemble models (2018):** AUC 0.940 for 2-year ahead prediction, 0.910 for 3-year ahead. Used voting-based ensemble (SVM + Random Forest + Neural Net). Could predict from early construction stages. (Expert Systems with Applications, Elsevier)
- **Scientometric review (2024, U of Utah):** 93 journal articles on predicting construction company failure. Four gaps identified: broader data samples needed, more heterogeneous variables, balance predictability vs interpretability, quantify variable intercorrelation. (MDPI Sustainability)
- **Australian sector analysis (2025):** Micro/small construction firms = 92-96% of insolvency cases each year. Key risk signals: firm size, cash flow risks, governance breaches, capital adequacy. Recommends "digital self-assessment tools" for small contractors.
- **Lithuanian model:** Bankruptcy correlates with: construction cost price indices, unemployment level, real estate price changes. Formula: Z = -3.18 + 0.04(cost index) - 0.061(unemployment) + 0.010(RE price change)

### 4. UK/Australia Contractor Failure Rates
- **UK (PBC Today, Jan 2026):** 40%+ of construction businesses have failed in last half decade. Domestic building construction: 43.4% failure rate.
- **Australia (YouTube/various):** 3,490 construction firms collapsed in single year — one every 2.5 hours. Construction = ~25% of all company failures.
- Cash flow is #1 pressure point. Contractors waiting 90+ days for payment.

### 5. Insurance/Surety Industry Tools
- **Shepherd Insurance:** Uses Procore/Samsara data to price construction risk. "Shepherd Savings" converts software usage into premium credits. Built proprietary underwriting platform.
- **Construction Executive (2024):** Predictive analytics now evaluating subcontractor default probability, construction timelines, material sourcing, weather patterns. Tools "score subcontractor default probability." But these are B2B tools for commercial projects.
- **Surety bonds:** Required for public projects >$100K (Miller Act). NOT required for residential. Homeowners get no equivalent financial vetting.

### 6. What Homeowners Actually Get
- State licensing boards: vary wildly, often just verify license exists (not financial health)
- BBB: voluntary, pay-to-play complaints
- Yelp/Angi/HomeAdvisor: review fraud rate 15-25% (FTC estimates)
- Lien filings: scattered across thousands of county courthouses
- Court records: require knowing where to look
- NO aggregated, AI-powered financial health score for residential contractors

## The Gap
- Banks use Altman Z-scores and proprietary models to decide whether to lend to builders
- Surety companies use detailed financial analysis to decide whether to bond them
- Insurance companies use EMR, TRIR, and increasingly AI to price their risk
- Homeowners get... a Google search and maybe checking if the license is current

## Actionable Takeaways
1. Check your state contractor licensing board — but understand what it doesn't tell you
2. Look up mechanics liens filed against the contractor (county recorder's office)
3. Ask for their surety bond info (if bonded, someone did the financial analysis for you)
4. Request references from projects completed 2+ years ago (warranty period reveals staying power)
5. Consider escrow/progress-based payment structures that limit exposure
6. The AI tool that would do all of this automatically doesn't exist yet for homeowners

## Journalist
Frank DeLuca — project management, financial risk, methodical analysis. This is about protecting your project from the builder who looks healthy but isn't.
