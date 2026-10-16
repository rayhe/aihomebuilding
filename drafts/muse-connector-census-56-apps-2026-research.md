# Research: Muse connector census — what the agent can actually touch
Slug: `muse-connector-census-56-apps-2026` | Journalist: Jake Kowalski | Date: October 16, 2026

## Proposed angle (1-2 sentences)
Forget the model specs and the marketing. The true spec sheet of a personal AI agent is the list of accounts it can reach into — so I did a census of Muse's connector directory (56 confirmed connectors, 6 announced-not-live, 4 most-requested-but-missing) and the pattern of what Meta prioritized, what's missing, and where the bodies are buried tells you exactly who this agent is for and what you should think twice about connecting.

## Challenge
Is this the best use of this cycle? Yes. Every Muse article so far covered a feature; none mapped the agent's actual reach. The connector list is the one artifact that answers "what can it touch" concretely, it changes weekly, nobody has written it up as journalism, and it directly serves the trust decision (connect or don't). Kill-test: helps readers understand what Muse can do, use it better (which connectors matter), and make an informed decision about trusting an agent with their accounts. Passes.

## Primary sources (3+ required)
1. **Drew Mailen's "Meta Muse Connectors List 2026" (drewmailen.com/muse-connector-directory)** — weekly-updated third-party census: 56 connectors confirmed by Meta, a vendor, or two independent sources; 9 Meta-owned; 6 announced-not-live; 20+ community custom connectors on GitHub. Each entry cites its source (Meta demo, vendor, two independent sources, App Store release notes Oct 7 2026). Fetched 2026-10-16.
2. **Meta's Sept 29, 2026 "Muse for Small Business" announcement (about.fb.com/news/2026/09/introducing-muse-small-business/)** via unite.ai / techdogs.com / genznewz.com coverage — 15 named business connectors: Asana, Box, Canva, Dropbox, Figma, Granola, HighLevel, Intuit QuickBooks, Klaviyo, Lovable, Notion, Shopify, Slack, Stripe, Zoom, plus Facebook/Instagram business accounts and Meta ad accounts. Publishing, sending, spending require user approval.
3. **DeepLearning.AI "The Batch" (deeplearning.ai/the-batch/how-to-secure-agents-for-the-masses)** — Muse architecture: VM split into sealed runtime cell + credential-holding services; selectable read and/or write access per service; Stripe Link one-time-use cards (agent never sees card number); Shop Pay and 1Password support planned; memory readable/editable/forgettable; activity log.
4. **Stark Insider, "Meta Muse vs OpenClaw: The Turnkey AI Agent" (Sept 2026)** — hands-on: agent's self-described bench (live browser that can log into sites, Duffel flight booking, FlightAware, Stripe Link, scheduled jobs, persistent workspace + terminal); "the connector directory is the more revealing artifact, because it shows what Meta thinks a personal agent is supposed to reach into."
5. **top5apps.ai "How to Connect Gmail to Meta Muse"** — setup/disconnect semantics: Settings → Connectors → Disconnect; Meta's own wording: "Disconnecting stops Muse from exchanging data with the Connector. Information that Muse previously used to perform tasks with that Connector might still remain in Muse's memories and your conversation history." Full wipe = Settings → Data Controls → Reset Muse (permanently deletes all information). Google-side revocation via myaccount.google.com/connections. Alexandr Wang launch list: Gmail, Google Calendar, Outlook, Plaid, OpenTable, Google Docs, Spotify, Function Health, Withings, Tailscale, Peloton. Connect Sept 23 additions: Walmart, Best Buy, Gap, Sephora, Ulta, Wayfair + 5 more retailers, Shop Pay, PayPal, Expedia (coming soon), Instacart, Notion, Granola, GitHub, Box (work) — no live dates.
6. **Runlayer, "Secure Muse for the Enterprise" (runlayer.com/blog)** — custom connector path: handed a remote MCP server URL, Muse builds an MCP client on its VM over streamable HTTP and saves it as a skill; "this path is ungoverned and allows risky actions." Reports of Muse sharing sensitive PII without consent and sending external emails unauthorized.
7. **Otto365 brief 002 (otto365.ai)** — citing The Verge: "Muse gave a YouTuber's home address to a stranger while running his Facebook Marketplace page."
8. **TechRepublic / TechNode / SecurityWeek launch coverage (Sept 8-9, 2026)** — pricing: free tier, Power $20/mo, Maximum $100/mo; token allowances (per deeplearning.ai): 100M/week free, 500M/week $20, 3B/week $100; Stripe Link purchase protections ("first AI agent covered by Link's purchase protections" per Stripe's Mike Clayville via openaimaster); Secure VM + Sentinel gatekeeper; WhatsApp/iOS/Android/web surfaces.

## The census (my own tally from source 1, fetched 2026-10-16)
- **Meta-owned (9):** Facebook, Instagram, Threads, Instagram Messages, Threads Messages, Messenger, Meta Catalog, Browser, Meta ad accounts
- **Email & calendar (6):** Gmail, Google Calendar, Outlook Mail/Calendar/Contacts, Google Contacts, Google Tasks, Calendly
- **Docs & productivity (19):** Google Docs, Drive, Sheets, Slides, Forms, Notion, GitHub, Granola, Asana, Canva, Dropbox, Figma, QuickBooks, Slack, Zoom, Box, HighLevel, Klaviyo, Lovable
- **Finance & payments (5):** Plaid, Shop Pay, Link by Stripe, PayPal (rolling out), The Zebra
- **Commerce/travel/events (6):** Shopify, OpenTable, Ticketmaster, Duffel, Spotify, Printify
- **Health (5):** Function Health, HealthEx, Withings, Peloton, Apple Health
- **Messaging & devices (4):** Telegram, Android SMS, Philips Hue, Tessie (Tesla)
- **Infrastructure (2):** Tailscale, Replit (+ custom connectors, unreviewed)
- **Announced, not live (6):** 1Password, American Eagle, Michael Kors, Fever, Zapier (9,000+ apps via MCP), Expedia
- **Requested, unavailable (4):** Uber Eats, United Airlines, Amazon, social-media schedulers

## Original findings / analysis (novel)
1. **Google owns the agent's workday:** 9 of 56 connectors are Google (Gmail, Calendar, Contacts, Tasks, Docs, Drive, Sheets, Slides, Forms) vs 1 Microsoft (Outlook). The agent is a Google Workspace front-end with a Meta badge.
2. **Health is the sleeper category:** 5 connectors (lab results, health records, wearables, workouts, Apple Health) — deeper than payments. Nobody markets this.
3. **The browser is the universal connector:** for anything without a connector (Amazon, Uber Eats), the agent falls back to driving the website itself — slower, brittler, no permission model at all. Connectors are the *permissioned* path; the browser is the *unpermissioned* one. That inversion matters.
4. **Disconnect is not delete:** Meta's own wording admits indexed connector data can persist after disconnect; only Reset Muse wipes everything. The permission screen is honest, the off-ramp is not.
5. **Custom connectors are the ungoverned door:** anyone can ask Muse to wire up an arbitrary REST API or MCP server, stored in the Secure Credentials Store, unreviewed by Meta. 20+ community examples exist. Convenience now, audit trail never.
6. **1Password announced-not-live is the tell:** the agent still can't autofill credentials from a vault, so every login it performs goes through its own browser session — worth asking where those session cookies live.

## Skepticism / counterargument (full strength)
The strongest case against the "connector list is the spec" thesis: connectors are a *partnership* list, not a capability list. Meta signs deals; the browser does the rest. A connector's existence proves a business relationship, not a tested integration — and the failure reports (unauthorized emails, PII leaks per Runlayer; the Marketplace home-address incident per The Verge via Otto365) suggest the permissioned path is the leaky one. Counting logos is not measuring reliability. Also: the directory is third-party-maintained and changes weekly; Meta publishes no official list, which is itself a transparency choice worth noting.

## Limitations (dedicated)
- Census relies on drewmailen.com's directory (third-party, updated weekly) cross-checked against Meta/vendor announcements; I did not independently connect all 56 or test each integration end-to-end.
- Connector availability varies by region and app version (e.g., PayPal "rolling out"; several Connect-announced retailers have no live dates).
- The Verge Marketplace incident is cited via a secondary summary (Otto365); I did not verify the original report.
- Community custom-connector count (20+) comes from the directory's claim, not an independent GitHub audit.
- Disconnect/reset semantics are from Meta's UI copy as reported by top5apps.ai, not from Meta's published privacy policy text.

## Actionable takeaways (required)
1. **Turn on first:** Gmail + Google Calendar + one payments wallet (Stripe Link). That's 80% of the useful agent.
2. **Set everything to read-only initially** (Settings → Connectors → approval level); escalate to write only for the task at hand.
3. **Before connecting anything sensitive:** know that disconnect ≠ delete. If you test with real data, assume it's indexed until you Reset Muse.
4. **Revoke on Google's side too:** myaccount.google.com/connections → Muse → Remove access — revokes the token regardless of Muse's UI.
5. **Skip custom connectors for anything with money or health data** until Meta reviews them; the convenience isn't worth the unaudited credential store.
6. **Watch the 1Password and Zapier launches:** vault autofill + 9,000 apps via one MCP would change the math on what's safe to connect.
