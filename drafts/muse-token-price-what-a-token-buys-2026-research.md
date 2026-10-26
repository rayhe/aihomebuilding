# Research: Muse Charges You in Tokens. Nobody Will Tell You What a Token Buys.

Slug: muse-token-price-what-a-token-buys-2026
Journalist: Jake Kowalski (Agent Capabilities & Tools)
Date: October 26, 2026
Phase target: DRAFT

## Thesis (1-2 sentences)

Meta prices Muse in "Muse tokens," a unit it never translates into tasks, hours, or jobs, so the only honest way to pick a plan is to measure your own week against the meter in Settings. The price list is simple (free, $20, $100); the thing being priced is undefined, the middle of the ladder is missing, and the free tier is subsidized by a future cut of whatever your agent buys for you.

## Self-critique gate

Propose: Muse's token economics as a buyer's guide — what each plan buys, how to measure your week, and the transaction-fee conflict underneath the free tier.
Challenge: is this the best use of this cycle? The site covered supervision cost (muse-true-cost-supervision-tax-2026, muse-supervision-burden-regressive-2026) and mentioned pricing only as framing in the zombie-tasks article, which explicitly flagged its pricing figures as secondhand. No article on this site prices Muse itself, explains the token unit, or tells a reader which plan to buy. Adjacent coverage (connector census, skill files) is about capability, not cost. Proceed.

## Kill test

Passes. A reader deciding whether to pay, and which tier, learns (a) the actual price list with sourcing quality labeled, (b) a one-week measurement protocol using the meter Meta does provide, (c) the arithmetic that shows the $20-to-$100 gap has no middle, and (d) the transaction-fee model that pays for the free tier. That is a concrete decision about trusting an agent with real money and real work.

## Primary sources (3+ required)

1. Meta's subscription help page ("About Muse subscriptions"), as quoted by multiple independent summaries: free tier with a usage limit; Power $20/month for 500 million Muse tokens per week; Maximum $100/month for 3 billion Muse tokens per week; monthly renewal on subscribe date; no annual option listed; App Store / Google Play purchases cancelled in those stores; "subscription benefits and availability may vary by region and account"; plans in limited testing.
   Quoted in: https://www.toolcolumn.com/pricing/meta-muse-pricing ; https://www.toolcolumn.com/learn/meta-muse-usage-limits-by-plan ; https://musedirectory.ai/guides/meta-muse-pricing ; https://trendintech.com/meta-q3-2026-earnings-muse-ai-spending-preview/
2. Mark Zuckerberg's launch post (via CNET/Gizmodo reporting): free tier usable up to 100 million tokens per week. Note the sourcing split honestly: the 100M figure comes from Zuckerberg, not from Meta's help page, which publishes no free-tier size.
   Via: https://tech-insider.org/meta-muse-personal-ai-agent-launch-2026/ ; https://musedirectory.ai/guides/meta-muse-pricing
3. Zuckerberg at Meta Connect, September 23, 2026 (via TechCrunch): Muse is "free for a huge number of tokens, with the expectation that over time we will profit by taking a small fee from transactions." Commerce wiring announced alongside: Shopify's full catalog with Shop Pay, PayPal, Stripe, retail connectors (Best Buy, Gap, Sephora, Walmart, Wayfair), travel via Expedia.
   Via: https://www.thecollectionnews.com/signal/ai/2026-09-24/ai-signal-2026-09-24.pdf ; https://postfa.st/blog/meta-muse-ai-social-media-managers
4. Hands-on usage reporting (one reviewer's account, labeled anecdotal): Roborhythms' free-tier review reports building drawings, MIDI songs, small games, and animated websites used about 6% of a 100M weekly free allowance; regular daily use over two weeks took about 35%; job scans every few hours ate about 31% of a week.
   Via: https://itechnicallykan.com/blog/posts/what-is-meta-muse/
5. Rival metering for contrast: Manus sells credits ($20/month for 4,000) and publishes example task costs, so a buyer can translate credits into jobs; Meta publishes no equivalent translation for Muse tokens.
   Via: https://www.toolcolumn.com/pricing/meta-muse-pricing
6. Invite-code bonus (for the "what is a billion tokens worth" sidebar): a referral code adds 1 billion tokens once, to both parties; at Power's rate that is about $9 of allowance, at Maximum's about $8; roughly 10 weeks of free-tier allowance at 100M/week. Code pages exist because each redemption also pays the poster.
   Via: https://vandatateam.com/blog/muse-invite-code-1-billion-tokens ; https://top5apps.ai/news/muse-tokens-explained-free-vs-power-vs-maximum/
7. Name-confusion trap (same words, different products): Muse Code (the developer CLI agent) has its own plans — Everyday $5, High $15, Power $50, Maximum $200 — and the Meta Model API bills pay-as-you-go per token. A Muse Code plan does not raise a consumer Muse allowance. Buying the wrong "Power" is an easy, expensive mistake.
   Via: https://museaialternative.com/muse-pricing ; https://www.toolcolumn.com/pricing/meta-muse-pricing

## Numbers the article will use (with attribution)

- Free: $0, usage limit; Zuckerberg put it at up to 100M Muse tokens/week (launch post, not the help page).
- Power: $20/month, 500M Muse tokens/week (Meta subscription help page via independent summaries).
- Maximum: $100/month, 3B Muse tokens/week (same source).
- Ratios (my arithmetic, labeled as such): Maximum is 6x Power's allowance for 5x the price. Power works out to ~2.17B tokens/month, about $9.20 per billion; Maximum ~13B/month, about $7.70 per billion. The per-billion price barely moves; what you are buying at $100 is headroom, not a discount.
- The missing middle: nothing between $20 and $100, i.e., nothing between 500M and 3B tokens/week. A user who needs 800M/week pays for 3B or waits.
- At the limit, no top-up and no pay-per-use for the consumer agent: upgrade or wait for the weekly refresh.
- Anecdotal burn rates (one reviewer, labeled): creative projects ~6% of a free week; daily use over two weeks ~35%; job scans every few hours ~31% of a week.
- Invite bonus: 1B tokens once, ~$8-9 at paid rates, ~10 weeks of free allowance.
- Availability: US and Canada only at launch; limited testing; 18+; payment card reported required at signup by some launch coverage, later guides say the free tier works without one — flag the disagreement rather than resolving it.
- Adoption context (optional, one line): Sensor Tower estimated ~6.6M installs by October 7, 2026 (via TechCrunch reporting).

## Original contribution (not just synthesis)

1. The translation table Meta will not publish: weekly allowances converted to monthly token budgets and per-billion prices, showing the $100 tier is headroom, not value, and the ladder's missing middle.
2. The measure-your-week protocol: run one normal week on free, read the meter percentage in Settings next to Manage subscription, and extrapolate. Rule of thumb: under ~60% in a normal week, stay free; regularly over, Power; only if Power itself empties, Maximum. The key insight: scheduled background jobs, not chats, are what empty an allowance, so count your crons before you count your messages.
3. The unit problem, stated plainly: a "Muse token" is not a model token and Meta never defines the conversion. Two users can run the "same" task and burn wildly different amounts because browser work and large files cost more. Until Meta publishes a conversion, the meter is the only price signal and marketing numbers are decoration.
4. The transaction-fee conflict: the free tier is not charity, it is a loan against future transaction cuts. The agent that finds you the cheaper flight takes a cut of the flight it sells you. The question before delegating purchases: who gets paid when your agent picks the more expensive option, and does the approval screen say so?
5. The confusion tax: three Muse price lists share the words Power and Maximum with different numbers. Check which product you are paying for before you upgrade.

## Article structure (Jake Kowalski voice: punchy, hands-on, short paragraphs, bar-stool clarity)

1. Cold open: a user staring at a meter that says 73% used, with no idea what 73% of what means, and a $100 upgrade button next to it. That is the whole pricing page in one screen.
2. The price list, with sourcing quality labeled line by line: what Meta's help page says vs what only Zuckerberg said vs what nobody says.
3. The math: monthly budgets, per-billion prices, the missing middle, no top-up. Short, punchy, numbers first.
4. What a token buys, or rather what nobody will say it buys: browser work and big files cost more; the one reviewer's burn rates, labeled anecdotal; Manus contrast (credits with example costs).
5. The measure-your-week protocol: the actual steps, the 60% rule, count crons not chats.
6. The skepticism: the transaction-fee model and the conflict it creates; the name-confusion trap (three price lists, same words); availability limits and the card-at-signup disagreement.
7. The verdict: who should pay $0, who should pay $20, who should pay $100, and the one question to ask before letting the agent spend for you.
8. "What this does not prove" honesty section: no firsthand meter test, no Meta confirmation of free-tier size, anecdotal burn rates from one reviewer, per-billion math is mine.
