# Critique Round 0 — muse-agent-to-agent-mcp-a2a-2026 (Jake Kowalski)

**Date:** November 16, 2026
**Draft:** drafts/muse-agent-to-agent-mcp-a2a-2026.html (1,959 words body)
**Verdict:** SHIP (all 7 critics 8.5+, all hard gates green)

## Scores

1. **General Editor — 8.7.** Structure follows the template with discipline: cold open (grocery store line, one message, whole trip), capability (two protocols, plainly), evidence (adoption numbers, security record), skepticism (NSA, MCPInspect, Ars Technica), stakes (three-question test), actionable close. The four-layer stack framing holds the piece together. Weakness: 1,959 words runs long against the 800-1200 deep-dive guide, though in line with recent shipped articles (~2,200-2,555). The "Three hops" heading echoes the paragraph's "Three hops, three places" opening line; a minor repetition, kept for the parallel structure. No cut was forced; the density is earned, not padded.
2. **Voice Coach — 8.8.** Distinctly Jake Kowalski: punchy, hands-on, bar-talk cadence ("One is a plug. One is a phone call.", "Fast. Unreviewed.", "Smaller. Slower. Still just as exposed."). Sentence rhythm PASS (variance 226.7, short 15.0%, long 60.0%). Minor echo: the "careful way of saying" device is used twice, once for the NSA ("shipped the plumbing before it hired the plumbers") and once for MCPInspect ("somebody built traps on purpose", phrased as "the polite academic way of saying"). Same device, two different targets; borderline, kept because the targets differ.
3. **Ethics Reviewer — 8.8.** The "who vouches" test is the piece's sharpest ethical contribution: it names the exact gap (signed cards verify the address, not the behavior) without alarmism. Meta is treated fairly: built-in connectors get credit for the privilege-separated worker, custom connectors get an honest warning rather than a scolding, and the counterargument gets full strength. The "note taped to it that says good luck" line is vivid but slightly unfair to custom connectors, which Meta does document and which route keys through the Secure Credentials Store; the surrounding paragraph supplies the correction, so the line survives as color.
4. **Social/Shareability — 8.8.** Headline is specific and directly addressed to the reader. Pull quotes land: "One is a plug. One is a phone call." "Approve the errand, not the chain." "Four layers. One plug." The three-question test is the shareable artifact, and the three-hop trip is a concrete scene a reader can retell.
5. **Legal Accuracy — 8.6.** Dates and figures are cited to named sources: MCP Nov 2024 / AAIF Dec 2025, A2A Apr 2025 / Linux Foundation Jun 2025 / v1.0 Mar 2026, AP2 and UCP Jan 2026, CVE-2026-14540 CVSS 8.0, NSA guidance May 2026, Gartner Aug 2025 forecast. Two precision fixes applied during critique (see below): the launch-partner name conflation and the signed-cards version attribution.
6. **Research Rigor — 8.7.** Four original contributions: the four-layer stack with Muse's position marked (1 of 4 layers spoken), the trust-boundary count for one errand (3 hops, only the first approved by name), the three-question "who vouches" test, and the governance surprise (both protocols under the same Linux Foundation fund within a year). Limitations section is honest (no hands-on test, adoption numbers vendor-reported, Ars findings read secondhand, "no native support" is an absence in public docs). Strongest counterargument stated at full strength and answered, not strawmanned. Weakness: no hands-on test of the MCP custom-connector build, disclosed rather than hidden.
7. **Data Presentation — 8.7.** Numbers are specific and sourced: 10,000+ public MCP servers, ~400M monthly SDK downloads, 150+ supporting organizations, 50+ launch partners, 833 vulnerable servers, 18 misleading tool descriptions, up to 200,000 exposed SDK instances, CVSS 8.0, 40% project cancellation forecast. No table, but the four-layer stack is an enumerated, checkable structure and the three-hop trip is a countable procedure.

**Average: 8.73**

## Hard gates (verified post-critique)
- Em dashes: 1 (title only) — PASS (≤3)
- Banned phrases: 0 — PASS
- "The" sentence starters: 11.5% (10/87) — PASS (<15%)
- Sentence rhythm: PASS (variance 226.7 ≥ 200; short 15.0% ≤ 15%; long 60.0% ≥ 15%)

## Fixes applied during critique (round 0, pre-ship)
- Launch-partner conflation: "Google announced A2A in April 2025 with more than fifty launch partners, and the list read like a trade show floor, AWS, Microsoft, IBM, Salesforce, SAP, and Cisco..." attached the named companies (AWS, Microsoft, IBM, Salesforce, SAP, Cisco) to the April 2025 launch, but those names come from the 150+ supporting organizations counted a year later (April 2026). Rewrote so the names attach only to the 150+ figure in the following sentence.
- Signed-cards version attribution: "Version 1.0 shipped in March 2026 with signed agent cards" pinned the feature to v1.0, but sources disagree on which point release introduced signed cards (one attributes them to 1.0, another to 1.2, while a third reports 1.1 still at release-candidate stage in November 2026). Softened to "Version 1.0 shipped in March 2026, and signed agent cards now let..." so no version claim is made for the feature.
- Gates re-verified after both edits: unchanged (1 em dash, 0 banned, 11.5% The-starters, rhythm PASS variance 226.7).

## Notes for SHIP
- Hero already in images/ (real JPEG ffd8, 1920x1280, 342,237 bytes, hash 08df4c6b). Cache-bust ?v=08df4c6b to be applied at SHIP time to hero <img> and og:image refs. Next SHIP run: skip hero move; move draft to stories/ + update index.html/sitemap/article count.
- Daily cap: Publish #820 already published today (Nov 16, 01:03 PST). SHIP holds until tomorrow (Nov 17).
