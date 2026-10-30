# Research: Muse and the Great Website Blockade

**Slug:** muse-where-sites-block-your-agent-2026
**Journalist:** Jake Kowalski (Agent Capabilities & Tools)
**Researched:** 2026-10-30
**Angle:** Your personal agent's shopping list is getting shorter every week. Amazon, banks, airlines, and now luxury resale are shutting the door. What the blocklist looks like, why sites do it, and what it means for whether Muse is actually useful.

## Kill test
Does this help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an AI agent with real work? YES. The single most useful thing a prospective Muse user can know is where the agent actually works and where it is refused. A price comparison that silently skips Amazon is worse than useless if you don't know it skipped Amazon.

## Headline candidates
- "Your Agent Shops Everywhere. Except Where It Matters."
- "The Blocklist Nobody Gave Muse"
- "Amazon Said No. Then Delta. Then the Banks."

## Key facts (attributed)

1. **The RealReal vs Muse (The Verge, Mia Sato, Oct 26, 2026, 10:30 AM PDT)**
   - The RealReal is updating its bot defense system, making it harder for AI agents to shop on its site.
   - The Verge got Muse to continuously re-add The RealReal listings to a shopping cart as soon as each 20-minute hold expired, "effectively blocking other shoppers from purchasing products for hours or longer." Verge's line: "An agent in contrast does not care."
   - CTO Luke Friang (email): The RealReal "addressed the Muse use case"; bot defense now makes it "much more difficult for all agents to log in, add items to cart, and check out." Agents can still surface listings and direct users to product pages.
   - Meta didn't immediately respond to a request for comment.
   - Meta Q3 earnings: shopping is the most common Muse use case; purchases average over $200; 10 million US downloads in 40 days.
   - Retailers "most notably Amazon" have blocked agents, per the article's ad-revenue analysis.
   - URL: https://www.theverge.com/news/1018713/meta-muse-agentic-shopping-ai-the-realreal

2. **The Oct 17 Verge story: Amazon, Yelp, Delta, banks (via aiweekly.co, notebookcheck.net)**
   - Amazon blocked Muse since September 20, 2026 (12 days after launch); Amazon told reporters Meta hadn't disclosed the agent would access its site and Muse didn't identify itself as AI while browsing.
   - Yelp admits only agents enrolled in its paid data-licensing program; Delta refuses third-party agents for booking; JPMorgan Chase and Charles Schwab block agents from customer accounts.
   - Schwab CEO Rick Wurster (Bloomberg TV, Oct 16): bank stops dozens of attempts by major AI agents to reach client money every week; named Muse.
   - JPMorgan CEO Jamie Dimon (Q3 earnings call, Oct 13): same line.
   - Meta's position: "Turning away a personal agent means turning away the customer behind it"; Muse "cannot see passwords or payment methods"; points to Walmart, Best Buy, Gap, Sephora, Wayfair partnerships + Shopify default Meta checkout.
   - URL: https://aiweekly.co/alerts/amazon-yelp-delta-join-banks-blocking-third-party-ai-agents

3. **Jefferies test + hands-on evidence (firstfrost.news, "Your AI Shopping Agent Isn't Searching the Whole Web")**
   - Jefferies tested Muse on several hundred leading US shopping, airline, travel, hotel, and reservation sites: about one-third blocked access, one-third challenged or restricted, one-third easy to navigate. "New restrictions were appearing almost daily."
   - Jefferies' conclusion: "website access, rather than model quality," is what holds agents back.
   - Tom's Guide: asked Muse for cheapest Batman hardcover; got $74.99 winner; Amazon missing ("Amazon wouldn't cooperate with the automated check"), disclosed in the last eight words after the winner was named.
   - Author's own test: Muse and ChatGPT asked for lowest US price on Sony WH-1000XM6 (black); neither checked Amazon; neither said so until asked.
   - Asked Muse for the list of blocked stores: "I don't have a list of other blocked stores to share."
   - Amazon's robots.txt (Oct 10) named 99 AI bots to stay off the whole site; WSJ (via firm verifying bots) reports Amazon blocks agents from OpenAI, Google, Anthropic, Perplexity; Muse isn't in the file (browses like an ordinary visitor), blocked by other means.
   - URL: https://firstfrost.news/p/lowest-price-some-exclusions-apply

4. **Metamuseai.site hands-on: 11 tests, Sep 30-Oct 5, 2026, real free-plan account**
   - Amazon price check: Muse said Amazon blocked its browsing, refused to solve a bot check, offered other retailers.
   - Email approval test: Muse showed exact wording, waited; deny worked cleanly.
   - Research task: 3 coffee shop picks in ~2.5 min; one listed opening time (4:30 AM) looked wrong.
   - Two days of light testing used ~12% of weekly free allowance.
   - URL: https://metamuseai.site/muse/review/

5. **More retailers join (kaupr.io, Oct 28, 2026; bitcomme.com, Oct 27)**
   - WSJ: Tapestry (Coach, Kate Spade) and Kohl's refuse AI-agent purchases; Chewy and Neiman Marcus block some agents.
   - Delta (via TechCrunch): does not yet allow AI agents to buy tickets for flyers.
   - Adidas sites: users report inability to shop via Muse.
   - Muse expanded to Japan (Oct) and Singapore (Oct 28); local connectors: Shopee, Lazada, Grab, ShopBack, Singapore Airlines, Agoda, Trip.com.
   - URL: https://www.kaupr.io/en/news/online-stores-are-shutting-the-door-on-metas-shopping-agent

## Structural tensions for the article
- Amazon's revenue model: sponsored listings only pay when a human scrolls. An agent that goes straight to the best match skips the ad. (SureBright analysis via kaupr.io)
- The disclosure problem: Amazon says Meta didn't disclose; agent didn't identify as AI. Meanwhile Amazon's own robots.txt names 99 AI bots, but Muse isn't in it.
- Meta's counter: turning away the agent = turning away the customer; live integrations with Walmart/Best Buy/Gap/Sephora/Wayfair; Shopify default.
- The honest-dealer angle: Muse discloses Amazon's absence only when pressed. Jefferies says access, not model quality, is the bottleneck.
- Banks frame it as a credentials problem ("we don't want someone just giving their password to Muse"). Schwab stops dozens of attempts weekly.

## What NOT to claim
- Do not claim Muse was "hacked" — the @IntCyberDigest Muse-for-Mac zero-day allegation is uncorroborated.
- Do not claim a specific bank lost money to agents — blocks are preventive.
- Keep "40 days, 10 million US downloads" attributed to Meta's Q3 earnings via The Verge.

## Sources list (3+ primary satisfied)
1. The Verge (Mia Sato, Oct 26, 2026) — RealReal story, read directly
2. The Verge (Oct 17, 2026, via aiweekly.co + notebookcheck.net summaries) — Amazon/Yelp/Delta/banks
3. firstfrost.news — Jefferies stats + own hands-on tests
4. metamuseai.site — 11 hands-on tests on a real free account
5. kaupr.io (Oct 28, 2026) — WSJ-cited retailer blocks + Singapore expansion
