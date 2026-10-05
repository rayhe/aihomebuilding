# Research: Humanoids Took the Insulation Job First — The Dual-Filter Analysis

## Topic
On September 21, 2026, Korean automation integrator Bigwave Robotics announced it will deploy humanoid robots at Space Factory's modular housing production sites, starting with insulation installation. This article asks why insulation — of all construction tasks — went first, and answers with a dual-filter analysis nobody has published: the physics filter (humanoid payload limits vs. material weights) and the labor-economics filter (wages, health hazards, recruitability) converge on the same task.

## Journalist
Jake Kowalski — construction tech, tools, robotics. Punchy, hands-on, spec-heavy, skeptical of hype.

## Kill Test
Does this help someone building or buying a home? YES. Factory-built modular homes are a live option for ADUs, custom builds, and wildfire rebuilds; automation is the mechanism that could make them cheaper and faster. This tells a buyer or GC exactly which tasks robots can actually take (and which they can't), with the payload math to prove it, instead of another "robots will build your house" press release rewrite.

## Primary Sources

### 1. Bigwave Robotics × Space Factory announcement (Sept 21, 2026)
- Source: EIN Presswire release, dateline Troy, MI
- URL: https://conferences.einnews.com/pr_news/943256494/bigwave-robotics-deploys-humanoids-in-modular-housing-production-igniting-construction-automation
- Strategic partnership; humanoids deployed "across its production and construction sites in phases starting in 2026"
- First targeted process: insulation installation. Quote: fiberglass is "a high-risk material harmful to workers' respiratory and skin health" and its "flexible and irregular 'unstructured' nature" made it "notoriously difficult" with "clear limitations for automation using conventional legacy robots"
- Stated goal: accumulate unstructured-task data from real sites; "fully unmanned 'Dark Factory'"
- Company claim: humanoid-related business ≈ 20% of Bigwave's total revenue this year; delivery track records with heavy industry affiliates, cosmetics companies, automotive parts manufacturers (unverified)
- CEOs quoted: Jungjin Park (Space Factory), Minkyo Kim (Bigwave)

### 2. DigitalToday — Bigwave to deploy humanoids at modular housing plant (Sept 8, 2026)
- Source: digitaltoday.co.kr (English edition)
- URL: https://www.digitaltoday.co.kr/en/view/101075/bigwave-robotics-to-deploy-humanoids-at-modular-housing-plant
- Earlier report of the same deal; confirms insulation-first rationale and phased rollout plan

### 3. Seoul Economic Daily — Samsung/Space Factory modular homes (Aug 2026)
- Source: en.sedaily.com
- URL: https://en.sedaily.com/finance/2026/08/02/samsung-lg-build-homes-modular-houses-completed-in-three
- Samsung AI Modular Home launched June 2026 with Space Factory (wooden modular specialist)
- Hwaseong, Gyeonggi Province factory: one housing module per hour off the automated line; two single-family homes per day on an 8-hour shift; 80%+ of the home prefabricated in factory
- ~90 days groundbreaking-to-completion vs ~180 for conventional reinforced concrete
- ~150 million won (≈ $110,000) for a 99 m² (30-pyeong) home including basic AI appliances
- Modular housing market projected to reach 23,000 units by 2034 (Korea)

### 4. DigitalToday — Samsung AI Modular Home at Korea Build Week (Feb 2026)
- Source: digitaltoday.co.kr (English edition)
- URL: https://www.digitaltoday.co.kr/en/view/2956/samsung-electronics-unveils-modular-housing-solution-with-ai-home
- Space Factory produces 1,700 modular housing units/year at a smart factory combining AI-based architectural design with robot automation

### 5. Bigwave Robotics company background (Aug/Sept 2026)
- Source: EIN Presswire releases via syndication
- URL: https://lifestyle.inspiredn.com/story/822438/bigwave-robotics-joins-forces-with-leading-robotics-automation-suppliers-to-scale-industrial-physical-ai-in-the-u-s/
- Korean automation integrator: 100+ annual projects, 640+ customers, 400+ supplier partners (company claims)
- Clients include Samsung, SK, Hyundai Motor Group (company claim)
- MOUs with Rainbow Robotics (RB-Y1 mobile dual-arm robot integration) and Omron (humanoid safety standards per ISO 12100 / ISO 13849-1)
- US expansion operating out of Troy, Michigan

### 6. BLS Occupational Outlook Handbook — Insulation Workers (May 2025)
- Source: U.S. Bureau of Labor Statistics
- URL: http://www.bls.gov/ooh/construction-and-extraction/insulation-workers.htm
- Median annual wage, insulation workers floor/ceiling/wall: $49,120; lowest 10% $37,030; highest 10% $78,190
- Top industries: drywall and insulation contractors $48,880; foundation/structure/exterior contractors $50,960
- 2025 comparisons (same handbook): carpenters $60,580; drywall installers $59,780; construction laborers $46,680; painters $48,660 — insulation ranks near the bottom of paid construction trades

### 7. CDC/NIOSH — Fibrous Glass (2024)
- Source: CDC / National Institute for Occupational Safety and Health
- URL: https://www.cdc.gov/niosh/fibrous-glass/about/
- Fibrous glass "can harm the eyes, skin, and the lungs"; workers at risk include "workers who install fiberglass insulation"
- OSHA PEL: 5 mg/m³ (respirable fraction), 15 mg/m³ (total particulate), 8-hr TWA

### 8. Fiberglass batt weight — retail product specs
- Source: superarbor.io product pages (Johns Manville R-19 kraft-faced batts)
- URL: https://superarbor.io/products/johns-manville-r-19-kraft-faced-fiberglass-batt-wall-insulation-133-68-sq-ft-coverage-23-in-x-93-in-for-2x6-wood-stud-walls
- 9-batt package (23" × 93" R-19): 32.8–36.8 lbs → ≈ 3.6–4.1 lbs per batt

### 9. Humanoid payload/battery limits (site's own prior research, June 2026)
- Source: drafts/humanoid-robot-construction-laborer-math-research.md (citing NVIDIA/Unitree H2+ Computex 2026, Scientific Reports Dec 2025, Gartner Feb 2026, McKinsey Oct 2025)
- NVIDIA/Unitree H2+: rated arm payload 7 kg (15.4 lbs), peak 15 kg (33 lbs); ~3 hr battery
- Scientific Reports: most commercial humanoids 1–2 hrs per charge; effective payloads rarely exceed 20–25 kg; "energy efficiency is a critical bottleneck"
- Gartner (Feb 2026): fewer than 100 companies will push humanoids beyond experimentation through 2028; fewer than 20 in production deployment
- McKinsey (Oct 2025): humanoids "not yet a fixture at construction sites"; only single-task nonhumanoid robots piloted
- Residential material weights: 4×8 drywall sheet 50–60 lbs; ¾" plywood ~70 lbs; shingle bundle 70–80 lbs; 80-lb concrete bag 36 kg

## Original Contribution: The Dual-Filter Task-Selection Analysis

Nobody has published why insulation went first. Two independent filters converge:

**Filter 1 — Physics (payload):** Rank residential material-handling tasks by unit lift weight against a humanoid's rated arm payload (~15 lbs):
- Drywall sheet 50–60 lbs: FAIL | Plywood 70 lbs: FAIL | Shingle bundle 70–80 lbs: FAIL | Concrete bag 80 lbs: FAIL | Fiberglass batt ~4 lbs: PASS
- Insulation is nearly the only structural task a current humanoid can physically lift all day.

**Filter 2 — Labor economics:** BLS wage rank puts insulation ($49,120) near the bottom of construction trades — the hardest roles to recruit and retain. NIOSH documents the respiratory/skin hazard. The press release itself confirms the "unstructured" material defeated legacy robots. Low pay + documented hazard + automation-resistant material = maximum staffing pain per dollar of output.

**Convergence:** insulation passes both filters; framing, drywall, and roofing fail at least one. The robot's arm dictated the task list as much as the labor market did. That is the article's novel finding.

## Skepticism (required — do not soften)
- Announcement ≠ deployment: no unit counts, no per-site timeline beyond "phases starting in 2026", no cost figures, no throughput claims. The 20%-of-revenue figure is a company claim, unverified.
- The central technical bet is unproven: floppy fiberglass batts are exactly what today's clumsy humanoid grippers handle worst. The release claims humanoids solve what legacy robots couldn't — but dexterous manipulation of deformable material at production speed has no public demo behind it.
- Battery vs. shift: 1–3 hr humanoid runtime against Space Factory's 8-hour shifts producing 2 homes/day. Either the robots hot-swap batteries or they cover a fraction of the shift; neither is disclosed.
- Katerra precedent: the most heavily automated modular housing factory in US history burned $2B. Automation alone doesn't fix modular's economics.
- Geography: the deployment is in Hwaseong, Korea. US residential labor implications are indirect; Korean construction wage structures differ from BLS figures used in Filter 2 (stated in Limitations).

## Limitations (required — dedicated section in article)
- No independent verification of deployment status beyond company announcements; Bigwave's customer and revenue claims are company statements.
- Batt weight from US retail product specs (Johns Manville via superarbor.io), not Space Factory's actual insulation spec.
- Wage/hazard economics use US BLS/NIOSH data; the deployment is Korean — the labor-market filter is illustrative for US readers, not a description of Korean site economics.
- Humanoid spec figures (payload, battery) are from reference designs and analyst reports, not Bigwave's specific hardware, which is undisclosed.
- Space Factory's name renders differently across English-language sources (Space Factory / Space Manufacturing Lab / Space Production Company / Spacemaker) — treated as the same company per context; using "Space Factory" per the primary announcement.

## Candidate Headlines
1. "The Worst Job on the Housing Line Pays $49,120. The Humanoids Want It."
2. "A Humanoid Can Lift 15 Pounds. That's Why It Got the Insulation Job."
3. "Nobody Applies to Install Insulation Anymore. The Humanoids Noticed."

## Notes for Draft
- Open on the factory floor in Hwaseong: 1 module/hour, 2 homes/day, and the one station still staffed by humans in respirators.
- Jake voice: spec-forward, bar-stool explainer, short paragraphs, real numbers, no mercy for press-release language ("dark factory" gets the raised eyebrow it deserves).
- Structure: cold open (Hwaseong line) → the announcement, plainly → Filter 1: the payload math → Filter 2: the labor math → why both filters pick insulation → skepticism (battery, dexterity, Katerra, announcement-vs-deployment) → limitations → what it means for US buyers/GCs (modular cost curve, which tasks are next: the light-and-nasty list).
- Actionable takeaway: if you're a GC or buyer evaluating modular/factory-built, ask vendors which tasks are actually automated vs. press-released; the payload filter is a 30-second BS detector for any "robots build homes" claim.
