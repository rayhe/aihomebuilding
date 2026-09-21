# Research: AI Builder Track-Record Scoring From Public Records

**Slug:** `ai-builder-track-record-public-records-score-2026`
**Article #:** 925
**Journalist:** Catherine Chen (Policy & Regulation)
**Date:** September 21, 2026

## Angle
Before a buyer signs a production-builder purchase agreement or wires a deposit to a contractor, an algorithm can now fuse public records — 300M building permits, license status, complaint histories, court filings, owner reviews — into a readable track record in about ten minutes. The data was always public. The synthesis is new. Kill test: PASS. A $500K purchase decision with a 10-minute, free background check is exactly the help this site exists for.

## Primary sources

1. **BuildZoom contractor methodology + dataset scale** — BuildZoom combines license information on 3.5 million contractors with 300 million building permits and over 135,000 reviews from property owners. Its score weighs license status, insurance status, verified work history, standing with local consumer interest groups, verified reviews, and self-reported contractor feedback. Primary: buildzoom.com contractor pages (e.g. https://www.buildzoom.com/contractor/wolff-contracting).

2. **CSLB Enforcement Committee, April 11, 2025 minutes** — FY 2024-25: 9,317 total complaints received; intake/mediation settled 31% and recovered $11,743,932 in restitution; 4,245 complaints assigned to investigators; 1,493 referred for legal action; 398 for criminal prosecution. Multiple Offender Unit (created late 2023) routes contractors with 10+ open complaints to a single investigator; handled ~1,359 complaints to date, 772 closed, 587 pending; accusations against 22 licensees covering 84 consumer complaints; ~23% of those licenses revoked. Primary: https://web.cslb.ca.gov/Resources/BoardMinutes/2025/D1b2_-_April_11_Enforcement_Committee_Minutes.pdf

3. **CSLB 2025 Accomplishments and Activities Report** — MOU completed 585 investigations against contractors with 10+ complaints in 2025; disciplinary action against 10 contractors; 125 complaints referred for criminal prosecution. Solar complaints running ~177/month in 2025 (down from 182 in 2024); 381 solar cases settled for $3.5M+ restitution; 131 investigations led to administrative action. Primary: https://web.cslb.ca.gov/Resources/Reports/AccomplishmentsActivities/Accomplishments2025.pdf

4. **CSLB enforcement report (Jan–Oct 2024) via CitizenPortal** — staff projected 20,000+ consumer complaints for calendar 2024; named ADU-market firms under scrutiny: Anchored Tiny Homes (license revoked Nov. 8, 2024), Next Generation Builders and Multitasker Construction (dozens of complaints each); an Oceanside family paid over $193,000 to Multitasker for an ADU that had not begun nearly two years later. Licensed contractors carry a $25,000 bond; no general fund makes consumers whole when a contractor folds. Primary: https://citizenportal.ai/articles/7166415/California/CSLB-enforcement-report-details-license-revocation-criminal-conviction-and-surge-in-ADU-and-solar-complaints

5. **CSLB Aug. 4, 2026 committee packet** — 242,847 active licensed contractors as of Dec. 1, 2025; 2024 complaints: 15,748 involving licensed contractors, 4,646 involving unlicensed. Primary: https://www.cslb.ca.gov/Resources/BoardPackets/2026/Aug._4_Committee_Meeting.pdf

## Original contribution (the math nobody did)
- **Complaint incidence:** 15,748 licensed-contractor complaints / 242,847 active licensees = 6.5% of California licensees drew a complaint in 2024. Average: 0.065 complaints per licensee.
- **The 10-complaint threshold:** a contractor with 10 open complaints (the MOU routing threshold) carries ~154x the complaint volume of the average licensee (10 / 0.065). The state itself treats this as a different species of contractor — and as of April 2025 only 22 such licensees had faced accusations. That is the enforcement gap the background check has to cover.
- **Bond math:** the $25,000 CA contractor bond covers 13% of the Oceanside family's $193,000 ADU loss. One year's CSLB-recovered restitution ($11.7M) equals the bonds of 470 contractors — the bond is paperwork, not protection.
- **Review-coverage thinness:** BuildZoom's 135,000 owner reviews across 3.5M contractors = under 4% of contractors have any owner review at all. The score leans on permits and license data, not star ratings. Reviews are garnish; the permit record is the meal.

## Structure
1. Cold open: the Oceanside family, $193,000, ADU never started.
2. The problem: complaint data is public but scattered across license boards, permit portals, courts; buyers never connect it before signing.
3. The technology: BuildZoom-style fusion (permits + licenses + complaints + reviews), BZ score inputs; what AI synthesis adds over manual lookup.
4. The evidence: CSLB numbers (9,317 complaints, $11.7M restitution, MOU stats); the 154x stat; Anchored Tiny Homes revocation as proof the signal was visible.
5. The skepticism: scores are only as good as the records; unlicensed work is invisible; review coverage is 4%; a clean record can mean a new license, not a clean history; CSLB complaint disclosure rules; no regulator recognizes a score as a license action — you still have to verify.
6. Actionable protocol: the 10-minute builder background check (license lookup, complaint disclosure, BuildZoom/permit pull, bond check, court search, warranty questions).
7. Limitations + counterargument (full strength): public records lag; scores can be gamed or stale; the best builders for YOUR project may be too small to have a data trail; a bad score on one license entity can follow a name change.

## What it does NOT prove
- That any specific builder is good or bad; this is about the method, not a verdict on a company.
- Permit counts are company-reported to BuildZoom; no third-party audit of the 300M figure exists.
- CSLB complaint counts are California-only; other states' boards publish less.
