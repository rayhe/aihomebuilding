# Research: Muse Has Two Browsers Now. One of Them Is Yours.

**Slug:** muse-two-browsers-2026
**Journalist:** Jake Kowalski (agent capabilities, tools, hands-on how-tos)
**Date:** November 24, 2026
**Angle (1-2 sentences):** Until last week Muse had one browser, a remote Chromium window running in Meta's cloud that sites increasingly block. On November 20 Meta officially announced a second one, a Chrome extension that runs Muse inside your own browser, on your own logins, and the choice between them is now the single most important decision in how you use the agent.
**Challenge:** Is this the best use of this cycle? Yes. The extension is four days old, adoption is exploding, and no Muse coverage on this site has explained the two-browser split or when to use which. A reader who picks the wrong browser wastes logins on one side and hands over their whole signed-in identity on the other.
**Verdict:** Proceed.

## Kill test
Does this help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an AI agent with real work? Yes on all three. It tells readers which browser does which job, what each one can see, and what each one costs in privacy.

## Facts (verified November 24, 2026)

### The remote browser (inside a Muse chat)
- Muse runs a real Chromium-based browser on Muse Secure VM, a persistent, isolated Linux computer per user. Meta calls it "a web browser inside your chat" that "works similarly to browsers you're familiar with like Chrome and Safari."
- What it is for, per Meta's Help Center: booking appointments, making purchases, filling out online forms, watching for price drops.
- Controls: tap Open browser to watch, Take control of the browser to pause Muse and do a step yourself, Stop the task to end it.
- Logins live in a Secure Credentials Store the AI model cannot read. Muse may accept essential cookies on third-party sites. It asks before important actions such as purchases. At checkout it uses a one-time card number, so the site never sees the real card.
- The weakness: it belongs to Meta, and sites that block agents block it. Amazon blocked Muse outright on September 20, 2026. Other sites block agents the same way because they cannot tell a personal agent from a bot. Muse does not sign its requests or identify itself as an agent, so to most security tools it looks like a person browsing, and still gets blocked.
- Approval cards expire after about 30 minutes, which can silently kill a card-gated browser task mid-run.

### The Chrome extension ("Muse from Meta")
- Official extension, offered by Meta Platforms, Inc., 1 Meta Way, Menlo Park, CA, contact extensions@fb.com. Live on the Chrome Web Store. 2.37 MiB, 42 languages.
- Puts Muse in Chrome's side panel. Open it from any page or press Alt+Shift+C. Requires Chrome 137 or later.
- Announced officially November 20, 2026, when chief AI officer Alexandr Wang posted on X that the extension was available now and 200,000 people were already using it. Wang called the announcement belated: TestingCatalog first spotted the listing on November 13, when it showed 126 users. Version 2.1.9, updated November 19 (2.1.3 on November 18). The listing showed a 4.6 rating from 237 ratings on November 20.
- What it does: navigate websites, control pages, help with shopping, book cinema tickets, fill out forms, compare prices, follow up on refunds, sell a car, negotiate a bill, plan and book a trip, track price drops, small business work, money and health features.
- Scope: Muse opens its own tabs in a group and can only act inside those tabs. Your other tabs are untouched.
- What it cannot see, per Meta's Help Center: saved passwords, browsing history, Chrome settings. Passwords on a webpage are removed from the text before Muse reads it.
- What it can use: every site you are already logged into, without asking for login details again. If there is an account you do not want Muse to use, log out of it before connecting.
- Controls: approve actions before they happen; full activity log; revoke any connector at any time; uninstall any time. To pause mid-task, click the page, press Esc, or move the tab out of the Muse group. When Muse finishes, it hands Chrome back.
- The tradeoff, stated plainly by Meta's Help Center: websites Muse visits may collect information based on Muse's activity and attribute it to you. Activity may show up in your Google account and browsing history, and may affect ads, recommendations and content on and off Meta products.
- Store data disclosure: personally identifiable information, health information, financial and payment information, authentication information, personal communications, location, web history, user activity, website content. Declared not sold to third parties, not used for unrelated purposes, not used for creditworthiness.
- Lookalikes already exist: Muse AI Companion (by Yahor Besarab) and Muse AI Assistant are third-party products, not Meta's. Official means Meta Platforms, Inc. in the developer line.
- Unknowns: country availability not stated; no price or plan requirement stated; support for other Chromium browsers (Edge, Brave) not confirmed.

### Poppy (the third way, for context)
- Poppy standardizes how Muse identifies itself to a site, so the site can tell the agent from a bot and let it through. The extension borrows your identity; Poppy introduces the agent. Opposite solutions to the same blocking problem. The extension works today on sites that block agents; Poppy works on sites that adopt the standard tomorrow.

### Muse scale
- Muse launched September 8, 2026 in the US; Canada September 18. Meta reports 10 million-plus users since launch.

## Original contribution (novel calculations)
1. **Growth rate:** 126 users on November 13 to 200,000 on November 20 is a 1,587x increase in 7 days, an average of about 28,550 new users per day. No source we found computed the rate; the raw numbers are from the Chrome Web Store listing as reported by Built with Muse and All Things Muse.
2. **Adoption share:** 200,000 extension users against 10 million-plus Muse users is about 2 percent. The desktop browser is not yet a main use case; it is an early-adopter surface.
3. **Rating sample thinness:** 237 ratings out of 200,000 users is 0.12 percent. The 4.6-star score rests on roughly one rater per 844 users, so treat it as a weak signal, not a verdict.
4. **Login-step comparison:** a remote-browser task on a site you are not logged into costs a full sign-in inside the remote browser (credentials from the Secure Credentials Store, plus a possible approval card and a possible phone code). An extension task on a site you are already logged into costs zero login steps. The difference is the whole pitch, and it is also the whole risk: zero login steps means zero friction between Muse and every account open in your Chrome.

## Strongest counterargument
The extension is the riskier browser, not the safer one. The remote browser keeps your identity at arm's length: separate machine, separate logins, credentials the model never sees, and sites that block it. The extension hands Muse your live sessions, your bank, your email, your work accounts, all at once, with no per-site login to slow it down, and every mistake it makes happens as you, in your history, shaping your ads. Convenience is the sales pitch; the price is attribution. A reader who installs it without logging out of accounts they do not want Muse to touch has already made the decision that matters most, before the first task.

## Limitations
- We did not install the extension or test it hands-on; the extension facts come from the store listing and Meta's Help Center as read by the cited guides on November 20, 2026. Version numbers move daily (2.1.3 to 2.1.9 in one day).
- The 10 million user figure is Meta's own claim as reported by The Outpost, not an audited number.
- Country availability and pricing are unstated; the article must not claim either.
- The November 12 vs November 13 date wrinkle: one report dates its story November 12 while the listing was first spotted November 13. Treat November 13 as first sighting, November 20 as official announcement.

## Sources (3+ primary)
1. Meta Help Center, "How your Muse agent browses the web" and "How Muse works with your guidance and approval" — https://www.meta.com/help/superintelligence/1385290430137537/ (permissions, approvals, browser controls; read via search results November 24, 2026)
2. Built with Muse, "Muse Chrome Extension: How to Use Muse in Your Own Browser (2026)" — https://builtwithmuse.com/blog/muse-chrome-extension (read in full November 24, 2026; store listing details, timeline, privacy limits, Poppy contrast, Amazon block September 20, 2026)
3. Muse Explained, "Muse's Chrome Extension Is Live With 200,000 Users Already" — https://museexplained.com/guide/muse-chrome-extension/ (store listing read in full November 20, 2026)
4. All Things Muse, "Wang Officially Announces Muse Chrome Extension After It Reaches 200,000 Users" — https://www.allthingsmuse.com/articles/muse-chrome-extension-official-announcement/ (November 20, 2026 announcement, 126-user first sighting)
5. i10X News, "Meta Muse Chrome Extension: AI Agent in Your Sidebar" — https://i10x.ai/news/meta-muse-chrome-extension-ai-agent-sidebar (Wang announcement, 200,000 users, 4.6 rating)
6. The Outpost, "Meta's Muse AI agent moves into Chrome's sidebar" — https://theoutpost.ai/news-story/meta-s-muse-ai-agent-is-now-living-in-chrome-s-sidebar-and-200-000-people-are-already-using-it-33944/ (10 million Muse users since September launch)
7. Meta Muse security write-up via AIModelWaddle / AgentComparison — https://www.aimodelwaddle.com/meta-muse and https://agentcomparison.net/agents/muse/ (Secure VM, Chromium browser, Secure Credentials Store, approvals)
