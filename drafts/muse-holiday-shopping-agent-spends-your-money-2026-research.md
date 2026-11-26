# Research: Muse's First Holiday Shopping Season — Your Agent Can Now Spend Your Money

**Slug:** muse-holiday-shopping-agent-spends-your-money-2026
**Journalist:** Priya Greenwood (everyday life, family use, accessibility)
**Date:** November 26, 2026 (Thanksgiving Day)
**Status:** RESEARCH complete — ready for DRAFT

## Angle

On November 6, Muse learned to *track* your holiday gifts (Spaces gift tracker). Eighteen days later, on November 24, Walmart let Muse *buy* them. Between those two dates Meta also shipped outbound phone calling (November 12) and Uber Courier plus Expedia bookings (November 10). Thanksgiving week is the first real stress test of Muse as a household spending agent: the tracker, the shopper, and the caller all arrived in the same month, and the controls that are supposed to keep them honest — Agent Profiles, spending limits, purchase approval — have never been tested at holiday volume by real families.

This is NOT a rehash of the November 14 Spaces article (Elena Vasquez, "Describe It Once, and Muse Keeps It"). That piece covered Spaces as persistent mini-apps and priced the lock-in. This piece is about the money-moving half: what changes when the agent stops organizing your list and starts charging your card.

## Kill test

Passes. A reader deciding how much holiday spending to hand to an agent needs: what Muse can buy, what controls exist, what happens when it buys the wrong thing, and what Meta and Walmart have NOT said. This is a trust decision with real dollars, not a feature tour.

## Primary sources (verified November 26, 2026)

1. **Meta Newsroom, "Design the Muse App, Just for You," November 6, 2026** — Spaces launch. "A space is a custom experience you create inside Muse by describing your idea, like a holiday gift tracker, a daily word game, or a planning board for your next DIY project." Shopping hub example: "brings holiday and birthday gift ideas, wishlists from Instagram saves, and your Marketplace listings and buyer messages into one view." Spaces "keep themselves up to date in the background" when apps are connected. Sharing with others is "exploring," not shipped.
   https://about.fb.com/news/2026/11/introducing-spaces-customize-muse-app/

2. **Walmart Corporate News, "Walmart's Black Friday Deals Continue. Meta's Muse Can Now Shop Them, Too," November 24, 2026** (page metadata lists November 23) — Walmart Agent Gateway. "Customers can shop Walmart's Black Friday deals directly through Muse... which can help them find items, build a basket and complete their purchase." Agent Profiles: "You can set spending limits, approve purchases and check your purchase history to see which purchases were made by your agent." Gateway "helping agents find relevant Walmart products without sharing customers' broader purchase history with others." Checkout uses "a card saved in your Walmart account, with the same Walmart prices you'd find on Walmart.com. And if something isn't quite right, Walmart's return policy still applies." First-time setup: Muse takes you to Walmart to sign in, then back; the Agent Profile (including spending limit) is set the first time an item is added to the cart.
   https://corporate.walmart.com/news/2026/11/black-friday-deals-with-meta-muse

3. **TechCrunch, "Meta introduces Spaces, a new way to collaborate with your Muse agent," November 6, 2026** — Spaces live in the sidebar; Meta's own examples include "a holiday gift tracker, a wedding planner, or a space for DIY projects." Zuckerberg posted he built "a BBQ game, an event tracker, and a home control dashboard." Notes Spaces was the second Muse feature that week after Muse Voice (November 5).
   https://techcrunch.com/2026/11/06/meta-introduces-spaces-a-new-way-to-collaborate-with-your-muse-agent/

4. **TechWyse, "Meta Muse AI Can Now Call Businesses for Users," November 2026** — Outbound calling generally available to paid US subscribers November 12, 2026, after a September beta. Meta Chief AI Officer Alexandr Wang confirmed. Examples: insurance providers, cable companies, DMV offices, restaurants. Handles hold times and phone menus. Muse Power plan $20/month, Maximum $100/month. Not available in Canada or other markets yet.
   https://www.techwyse.com/news/ai-search/meta-muse-ai-outbound-phone-calls-local-businesses

5. **AI Setups That Work, "Holiday gift budget with Meta Muse," updated November 6, 2026** — Hands-on prompt setup: total budget, per-person limits, spreadsheet in Muse Library, weekly check-ins, "Do not buy anything, add anything to a cart, or contact anyone." Recommends Permissions set to "Always ask" while shopping. Notes recurring tasks continue until cancelled; gift-list memory can be deleted after the holidays (Assistant icon, Identity, Memory).
   https://www.aisetupsthatwork.com/setups/holiday-gift-budget-with-meta-muse/

6. **Muse Skills, "Holiday Gift Tracker" Space, published November 12, 2026** — Tested Space spec: gift list grouped by person with budget, actual price, store, status (idea, bought, wrapped, given); budget bar; summary counts. Worked example: nine people, $600 total budget; by December 10, $412 spent, three gifts still at idea stage, two bought gifts waiting to be wrapped, one person flagged at $95 spent against a $75 budget. "The Space never buys a gift, places an order, or shares the list."
   https://museskills.dev/entry/holiday-gift-tracker/

7. **AgentStackList, Muse news tracker, updated November 12, 2026** — November 10: Muse can "send a package with Uber and book you an Expedia hotel, all from one chat" (Uber Courier price shown, user approves; Expedia hotel search and booking in plain language in the US; changes/cancellations via Expedia support). November 9: Muse Ember model, $0.10 per million input tokens. November 5: Muse on Apple Watch and Wear OS. November 5: Muse launches in Mexico.
   https://agentstacklist.com/trending/muse/

## Original contribution (novel analysis for this article)

**The 18-day flip.** November 6: Muse tracks gifts. November 24: Muse buys them. That is 18 days from "organize the list" to "charge the card," and the shopping control (Agent Profile spending limit) is configured at the moment of first purchase, not before. The reader's first real decision about agent spending happens inside a checkout flow, not in settings.

**The three-doors trust ladder (original framing).** This holiday season Muse offers three different kinds of money-adjacent power, and they carry three different risk levels that Meta and Walmart present as one smooth experience:
- Door 1, the tracker: a Space that never buys anything. Worst case is a wrong number in a spreadsheet.
- Door 2, the shopper: the Walmart gateway, where a spending limit and per-purchase approval are the only things between a misunderstood request and a charged card.
- Door 3, the caller: outbound calling, where Muse can commit you verbally to a store (a return, a hold, a reservation) with no receipt until after the fact.
The article prices each door separately instead of treating "Muse does holidays" as one feature.

**The worked budget math.** Using the Muse Skills tested example: nine people, $600 total, $412 spent by December 10 leaves $188 for three un-bought gifts, or about $62.67 each, against an original per-person average of $66.67. The flagged overspend ($95 against a $75 limit) is 27% over that person's cap, and it consumed 10% of the remaining budget headroom on its own. Small overspends compound: two more like it and the list is underwater before the last gift is bought.

**The November capability count.** In 19 days (November 5-24), Muse gained: voice calls with the agent, Spaces, specialized Wonder-trained models, Uber Courier, Expedia booking, outbound business calling, Apple Watch/Wear OS, Mexico launch, Muse Ember, and Walmart shopping. Ten moves in 19 days. The holiday season is not one feature launch; it is a pile-up, and nobody has tested how they interact (e.g., a Space that tracks a gift, a gateway that buys it, and a phone call that returns it).

## What Meta and Walmart have NOT said (limitations)

- No stated policy on who pays when Muse buys the wrong item, the wrong size, or a duplicate: Walmart says its return policy "still applies," which covers returns, not the cost of the mistake (time, restocking, shipping, or a Black Friday price that is gone by the time the replacement is ordered).
- No detail on whether the spending limit is per purchase, per day, or per season, or what happens mid-basket when a limit is hit.
- No detail on price drift: the price Muse shows when it builds the basket vs. the price at checkout minutes later during a flash sale.
- Spaces sharing is "exploring," so a family cannot yet share one gift tracker; each person keeps a separate list, which is exactly how duplicate gifts happen.
- Outbound calling is paid subscribers in the US only; the free tier cannot call the store about the order Muse just placed.
- All capability claims are vendor announcements from November 2026; no independent testing of the Walmart gateway at Black Friday volume exists yet, and this article's hands-on sources are setup guides, not purchase receipts.

## Strongest counterargument (to state at full strength)

The skeptical case is that this is a solution in search of a problem: most people enjoy choosing gifts, Black Friday deal-hunting is half the fun for many shoppers, and handing the list to an agent saves perhaps 40 minutes across a season while introducing a new failure mode (wrong item, missed deal, duplicate gift) that costs more time to fix than the agent saved. The tracker is genuinely useful; the shopper is a demo that happens to charge your card. The article must not dismiss this; it is the most likely correct reading for most households, and the spending-limit advice only matters for the households that choose to use the gateway anyway.

## Facts to use in the draft

- Muse launched September 8, 2026 (US). Spaces launched November 6, 2026. Walmart gateway announced November 24, 2026. Outbound calling GA November 12, 2026 (paid US subscribers). Muse Voice November 5, 2026.
- Walmart: same prices as Walmart.com; checkout with a card saved in the Walmart account; Agent Profile set at first add-to-cart; spending limits, purchase approval, purchase history review.
- Muse Power $20/month; Maximum $100/month (outbound calling is a paid-subscriber feature).
- Muse Skills gift-tracker example: 9 people, $600 budget, $412 spent by Dec 10, $95 vs $75 flagged overspend.
- Meta's shopping-hub Space pulls Instagram saves and Facebook Marketplace listings and buyer messages into one view.
- AI Setups That Work recommends Permissions "Always ask" and a prompt that explicitly forbids buying.

## Sources list for the article footer

Meta Newsroom (Spaces, Nov 6, 2026); Walmart Corporate News (Agent Gateway, Nov 24, 2026); TechCrunch (Spaces, Nov 6, 2026); TechWyse (outbound calling, Nov 2026); AI Setups That Work (holiday gift budget setup, Nov 6, 2026); Muse Skills (Holiday Gift Tracker Space, Nov 12, 2026); AgentStackList (Muse news tracker, Nov 12, 2026).
