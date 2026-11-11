# Research: Muse Read a Whole Ballot — Agent-Assisted Voting Research

**Slug:** muse-read-my-ballot-2026
**Journalist:** Marcus Washington (real people, real workflows, human impact)
**Date:** November 11, 2026
**Article #:** 816 (next after #815, published Nov 11)

## Angle (1-2 sentences)
A voter handed his entire California ballot to Muse and asked for personalized recommendations and a one-page cheat sheet. The agent did the reading, surfaced a real conflict of interest in one race, and produced a sheet he could actually vote from — but the research on chatbot election accuracy says the only safe way to do this is to force the agent to cite the official voter guide, because roughly a third of chatbot election answers contain errors.

## Self-critique gate
- **Is this the best use of this cycle?** Yes. It is the first ballot cycle since Muse launched (Sep 8, 2026), the count is still open (certification Dec 11), and no prior article covers civic use. It is timely, human, and the verification protocol is a genuine original contribution.
- **Challenge:** The story leans on one voter's experience. Mitigation: anchor every general claim in published studies (ISD, Forum AI/AFP, Pew, AAPC, Young People's Alliance/CITED) and official sources (CA Secretary of State, court complaint), and keep the personal case as the narrative spine, not the evidence.

## Kill test
Does this help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an AI agent with real work? Yes on all three: it documents a real civic workflow, gives a copyable verification protocol, and quantifies the error risk of trusting an agent with a ballot.

## What happened (the case)
- A California voter gave Muse his full November 3, 2026 ballot and asked for personalized recommendations plus a one-page cheat sheet he could take to the polls.
- Muse researched the 14 statewide propositions, 12 statewide races, and local measures, and returned recommendations tied to the voter's stated positions plus a one-page sheet.
- The sheet's most useful moment was not a recommendation but a conflict the agent surfaced in the Attorney General race: the incumbent's office had backed the voter's own project through a July 29 AB 712 notice, while the same office sued on October 27 to restore beneficial-ownership reporting that would apply to that voter's project company itself. A cold chatbot would never have found that tension; an agent with memory of the voter's life did.
- The voter kept the tension in the pick rather than resolving it away. That is the honest version of the story.

## Primary sources (verified Nov 11, 2026)

### 1. California Secretary of State — election timeline and count
- Polls closed 8:00 p.m. Nov 3, 2026. Counties have 30 days to count and must certify by Dec 3; the Secretary of State certifies the statewide Statement of Vote on Dec 11, 2026.
- As of the Nov 5 unprocessed-ballot report: 8,906,017 ballots processed and counted; an estimated 4,816,722 outstanding ballots remained.
- Source: https://www.sos.ca.gov/administration/news-releases-and-advisories/2026-news-releases-and-advisories/office-california-secretary-state-announces-polls-november-3-2026-general-election-are-officially-closed
- Source: https://www.sos.ca.gov/administration/news-releases-and-advisories/2026-news-releases-and-advisories/office-california-secretary-state-issues-unprocessed-ballot-report
- Results: https://voterguide.sos.ca.gov/voter-info/election-results.htm

### 2. Proposition 40 result (verified, supersedes earlier estimates)
- Prop 40 (one-time 5% tax on residents worth over $1 billion, mostly for healthcare) was defeated. AP called it for No on Nov 9. SoS tally as of Nov 10: 5,789,026 No (52.9%) vs 5,159,356 Yes (47.1%); EdSource reports 52.8% to 47.2% with ~83% counted and the Yes vote more than 600,000 behind.
- Opposition raised roughly $378 million; supporters about $33.5 million. Gov. Newsom and both gubernatorial candidates opposed; the state Democratic Party supported. Backers vow to try again in 2028.
- Source: https://edsource.org/updates/california-prop-40-billionaire-tax-has-failed-backers-vow-to-try-again
- Source: https://www.lemonde.fr/en/international/article/2026/11/10/california-voters-reject-billionaire-tax-designed-by-french-american-economists_6776662_4.html

### 3. Measure P, Menlo Park (local measure, count still open)
- Early results (Palo Alto Daily Post, Nov 3): No 2,886; Yes 2,668. The count continues; next update expected Nov 12. The measure concerns Menlo Park parking lots.
- Source: https://padailypost.com/2026/11/03/early-election-results-in-local-races/

### 4. Oregon v. Bessent — the AG-race tension (verified from the filed complaint)
- Filed Oct 27, 2026, U.S. District Court for the District of Oregon, No. 6:26-cv-2359-MTK. Plaintiffs: 20 states and the District of Columbia, led by Oregon and Illinois; California is a plaintiff, represented by AG Rob Bonta.
- The suit challenges FinCEN's March 2025 interim rule and August 14, 2026 final rule exempting domestic companies and U.S. persons from beneficial-ownership reporting, and seeks to block FinCEN's announced purge of already-collected ownership data by February 10, 2027.
- Source (complaint PDF, CA AG): https://oag.ca.gov/system/files/attachments/press-docs/1-fincen-rule-xxxx-complaint-1-102726.pdf
- Source: https://disputeindex.com/cases/states-sue-treasury-beneficial-ownership-reporting-exemption
- Note: some secondary coverage says "21 states plus DC"; the complaint itself lists 20 states plus DC. Use 20.

### 5. Institute for Strategic Dialogue — "Chatbots and the Ballot Box" (Sep 2026)
- 2,400 prompts (400 per model) across six chatbots (OpenAI, Anthropic, Google, Meta, xAI, DeepSeek), 10 states. 29% of English-language responses about voting were incomplete, inaccurate, or outdated; Spanish-language responses were 16% less likely to be accurate than English ones. Weak spots were logistics questions voters most need answered precisely; some systems drew on outdated 2024 state government pages.
- Source via TIME coverage, summarized at: https://www.metirai.com/blog/voters-ai-chatbots-2026-midterms-chatgpt-election-research

### 6. Forum AI study via AFP (reported Nov 1, 2026)
- Eight chatbots tested; almost 40% of answers to election questions contained at least one factual error. Errors ran heaviest on voting logistics. Example: Google's Gemini 3.6 Flash gave Nov 3 (Election Day) as Pennsylvania's mail-ballot request deadline; the real deadline was Oct 27. A voter following that answer would have asked for a ballot too late to use it.
- Source: https://theainextwave.com/editions/2026-11-02/

### 7. Young People's Alliance / CITED — "Chatbots and the Ballot" (Sep 2026)
- Five chatbots (Claude, ChatGPT, Grok, Gemini, DeepSeek) tested on 72 questions about California's 2026 governor race, LA mayoral race, and six statewide propositions. DeepSeek described the wrong or prior-cycle ballot measure in roughly half its responses to two of six propositions. Claude fabricated that an active LA mayoral candidate had already lost her primary and misattributed a measure's supporters and opponents. When models cited ideologically identifiable sources, 26 of 27 responses cited only one side of the spectrum.
- Source (PDF): https://static1.squarespace.com/static/652047ddd2a355779b811a91/t/6ada83f638f66260d6801d5e/1792705526357/Chatbots+and+the+Ballot.pdf

### 8. Usage and trust surveys
- Pew Research Center, Feb 17–23, 2026 (n=5,119 US adults): 49% use AI chatbots, up from 33% in 2024.
- AAPC Foundation, Sep 2026: about 1 in 5 voters consult AI chatbots for election news and voting.
- National Conference on Citizenship: 2 in 5 Americans used AI tools to search for election information; only 40% trust the tools with logistical information; 60% trust them only a little or not at all to be unbiased about candidates.
- Qlik/Censuswide, Sep 11–15, 2026 (n=2,000 registered voters): 11% use AI chatbots for election information; 13% name AI as a trusted source.
- Source: https://www.metirai.com/blog/voters-ai-chatbots-2026-midterms-chatgpt-election-research

### 9. Muse capabilities (Meta)
- Muse is Meta's personal AI agent (launched Sep 8, 2026), running on its own secure cloud computer with a live browser, connectors to Gmail/Calendar, durable memory, and an approval system that pauses before consequential actions. Meta warns Muse may be inaccurate or take unexpected actions and tells users to review activity regularly. Free tier with a usage limit; Power $20/mo; Maximum $100/mo.
- Source: https://agentcomparison.net/agents/muse/
- Source: https://www.tosheo.ai/ai-tools/meta-muse

## Original contribution
1. **The verification protocol, quantified.** Take the ISD 29% error rate and the Forum AI ~40% figure seriously: on a 14-proposition ballot, a voter who asks a chatbot to summarize every measure cold should expect several wrong or incomplete answers. The fix is not to avoid the agent but to change the job: point it at the official voter guide (voterguide.sos.ca.gov) and require a citation to the guide for every recommendation. Muse's advantage over a bare chatbot is that it can be given that source, told to read it, and made to show its work in a file the voter can check.
2. **The time math (stated assumptions).** Reading the official analysis for 14 propositions at a careful 200 words per minute, plus candidate statements, runs roughly 70–90 minutes for the propositions alone. The agent did the first pass in minutes; the voter spent about 15 minutes checking the cheat sheet against the guide. That is a real saving, but only because the 15 minutes of verification happened. Skip the check and the saving is an illusion.
3. **The tension only a personal agent finds.** The AG-race conflict (Bonta's office backed the voter's project via the AB 712 notice, then sued to restore ownership reporting that would cover the voter's own company) is not in any voter guide. It exists only in the voter's own history, which the agent knows. That is the strongest case for a personal agent over a generic chatbot — and the strongest warning, because the same memory that finds the tension is the memory a voter must trust to be complete.

## Strongest counterargument (to carry at full strength)
An agent should not be anywhere near a ballot. The error rates are not edge cases: 29% incomplete or wrong (ISD), ~40% with at least one factual error (Forum AI), and the errors cluster on logistics, the exact questions that decide whether a vote counts. Worse, the failure modes are invisible: a confident summary of the wrong year's proposition, a fabricated candidate loss, a citation list that quietly draws from one side. A voter who delegates the reading delegates the thinking, and a one-page cheat sheet is a filter that hides everything the agent chose not to mention. The verification protocol in this article is a mitigation, not a cure, and most voters will not run it.

## Limitations (to state in the article)
- Single-voter case study; the workflow has not been tested across voters, states, or ballot lengths.
- The error-rate studies tested bare chatbots, not Muse with a specified source document; Muse's error rate under the verification protocol is unmeasured.
- Prop 40 and Measure P figures are semi-official as of Nov 10–11; certification is Dec 11, 2026.
- The AB 712 notice detail comes from the voter's own records; the Oregon v. Bessent facts are verified from the filed complaint.
- No claim is made about how Muse would handle a ballot in a state with different voter-guide formats.

## Structure plan (Marcus Washington)
1. Cold open: the ballot arrives, 14 propositions, and a voter who does not have a free evening.
2. The job: hand the whole ballot to the agent, ask for recommendations and a one-page sheet.
3. What the agent did, step by step, and the sheet it produced.
4. The tension it surfaced in the AG race — the part no voter guide contains.
5. The numbers that should scare you: ISD 29%, Forum AI ~40%, the Pennsylvania deadline that would have cost a vote.
6. The verification protocol: how to use an agent on a ballot without getting burned.
7. Limitations and the counterargument at full strength.
8. Stakes: the count is still open until Dec 11; the next election is already coming.

## Headline options
- "I Handed Muse My Whole Ballot. It Read It Back With One Conflict I Had Missed."
- "Your Agent Can Read Your Ballot. The Question Is Whether You Should Let It."
- "Muse Read 14 Propositions and Found the One Race Where I Was Voting Against Myself."
