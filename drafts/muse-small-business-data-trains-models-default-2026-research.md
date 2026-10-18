# Research: Muse for Small Business runs on your books — and by default, your books run Muse's models

**Slug:** muse-small-business-data-trains-models-default-2026
**Journalist:** Catherine "Code" Chen (privacy, security, data practices, policy)
**Date:** October 18, 2026

## Self-critique gate
- **Angle:** Meta launched Muse for Small Business on Sep 29, 2026, asking owners to connect QuickBooks, Stripe, Shopify, Klaviyo, Slack. Its own privacy policy (effective Sep 17) says connector-derived information is training-eligible BY DEFAULT, scrubbed of only a named shortlist of PII, and that opting out later makes no promise about models already trained. Read it as a clause-by-clause policy audit.
- **Challenge:** Alternatives considered: Muse Wonder model release (Oct 12, model-news — not Catherine's beat), Muse Charm hardware (undisclosed specs, thin sourcing), glasses integration (no ship date). The small-business privacy angle is 2.5 weeks old and the coverage so far is all features/pricing — nobody did the policy cross-read. This is Catherine's beat and it's timely.
- **Verdict:** Proceed.
- **Kill test:** Helps a small-business owner decide whether to connect their customer/financial data to an agent. PASS.

## Core thesis
The Sep 29 business announcement expands what Muse can SEE (customer records, books, payment data). The Sep 17 privacy policy determines what Meta can USE. Nobody connected the two documents. The gap: third parties (your customers, employees, vendors) never consented, the scrub list doesn't cover business-confidential data, and the only architecture that would exclude Meta entirely (Confidential VM) is described in the future tense.

## Sourced facts

### The announcement (Sep 29, 2026)
- Muse for Small Business announced Sep 29, 2026 (Reuters via kwsn.com, 2026-09-29; TechCrunch/Axios coverage via ecommerceparadise.com summary).
- Connectors: Asana, Box, Canva, Dropbox, Figma, Granola, HighLevel, Intuit QuickBooks, Klaviyo, Lovable, Notion, Shopify, Slack, Stripe, Zoom + Facebook Pages, Instagram professional analytics, Meta ad accounts (Reuters).
- Meta's sample prompts: analyze the year's sales/campaigns/social and produce a growth plan; review the month's financial performance and find expenses that look off; triage inbox/calendar (TechCrunch via ecommerceparadise; Engadget).
- Meta VP Vishal Shah: "People are using Muse to run their business. We're going to make it easier to do so." (Axios, via ecommerceparadise).
- Approval control: "nothing publishes, sends or spends without the owner's approval" (Reuters, Yahoo Finance via ecommerceparadise).
- Pricing: free with usage limits; $20 and $100 monthly tiers reported by Axios per one outlet only — treat as unconfirmed (ecommerceparadise.com flags this).
- Consumer launch context: Muse launched Sep 8, 2026 (US), Canada later; ~2.8M downloads first two weeks (Sensor Tower via Reuters); #1 US free app since Sep 18 (TechCrunch via sanbi.ai).

### The policy (muse.ai/privacy, effective Sep 17, 2026) — primary, read in full Oct 18, 2026
- "You decide whether we can use your interactions with Muse to train and improve our AI models. **This setting is on when you first use Muse.**" Toggle: Settings → Data controls. "Changes to this setting also apply to previous interactions." — no statement about data already in trained models.
- "If you do allow this, we still remove **certain categories** of personally identifiable information **like** names, email addresses, phone numbers and Social Security Numbers. We also **disassociate** the interactions from your account." — "like" makes the list non-exhaustive, but named categories are only those four.
- "Your interactions with Muse can also include information from services Muse uses to perform tasks for you, **including Connectors**... **The same toggle** in your Settings controls whether that information can be used to improve AI at Meta." — connector data explicitly in scope.
- "Every Muse user's VM is isolated so no one else's agent can access it." — per-user Secure VM.
- Confidential VM: "In the future, Muse users will also have the choice to use a Muse Confidential VM: **an environment we're designing** to keep people's information private, even from Meta." — not shipped.
- Disconnect: "Data that Muse previously used to perform tasks with that Connector **may remain in Muse's memories** and your conversation history."
- Forget: "Muse will forget the information **to the best of its ability**."
- Delete: "After you delete something, Muse may still 'remember' information it learned from what you deleted."
- Ads wall: "Muse doesn't share your conversations or the data in your virtual machine with Meta ad systems. This applies even if your Accounts Center includes other Meta Products."
- Accounts Center: adding Muse to the same Accounts Center as other products allows combining info across profiles/devices; separate-email signup avoids it.
- Meta Wearables use pulls in the Supplemental MPT Privacy Policy too.

### Expert/secondary
- Tarek Sheasha (VP, Meta Superintelligence Labs), defending the training default, quoted in WIRED Sep 20, 2026 (via webpronews.com): "We think this is a good default — every Muse user gets a better personal agent as we all collectively use the product and help the model understand the intricacies of human life."
- Calli Schroeder (senior counsel, EPIC), to WIRED (via captaincompliance.com): default echoes Meta's history of testing user tolerance before walking features back; ad systems can still see actions Muse takes across the web and infer from them — the wall is between chat logs and ads, not between actions and the profile.
- PCWorld (Oct 5, 2026, pcworld.com): default trains on Muse data; deleting isn't a complete wipe; "Muse may still remember information it learned from what you deleted."
- sanbi.ai Meta Muse safety roundup: protections real (isolated VM, Sentinel approvals, no password/payment visibility, audit trail); early weeks had permission mix-ups, two patched vulnerabilities, silent task failures; Meta itself advises starting with low-risk tasks.
- Meta says Muse "has no visibility into people's passwords or payment methods"; purchases use single-use Link by Stripe cards (chatmaxima.com).
- Codersera guide: current Secure VM protections are policies Meta enforces, not user-held-key encryption; Confidential VM announced but not shipped.

## Original contribution (gap analysis, not in any source found)
The policy's named scrub list covers **names, email addresses, phone numbers, SSNs**. A QuickBooks/Stripe/Shopify connection exposes far more categories a small business actually holds: customer purchase histories, revenue and margin figures, vendor bank routing/account numbers (for payouts, not "payment methods" the user sees at checkout), employee payroll amounts and direct-deposit details, client addresses. Of these, the scrub list explicitly names **none** of: revenue figures, purchase histories, vendor account numbers, salary amounts. The business owner clicks one toggle that governs data belonging to people who were never in the room — customers, employees, vendors. That is the finding.

## Limitations
- Cannot independently verify Meta's sanitization process or what "certain categories... like" covers beyond the named four.
- Did not test the actual Data controls toggle in the app; OAuth scopes the QuickBooks connector requests are not published in sources found.
- User base is ~6 weeks old; no independent audits of the training pipeline exist.
- Pricing tiers ($20/$100) reported by one outlet, unconfirmed by Meta.
- Confidential VM ship date unknown ("later in 2026" per webpronews; "we're designing" per Meta).

## Counterargument (full strength)
Meta's scrub-and-disassociate approach is standard for AI training defaults; Sheasha's argument is real — every user, including that business owner, gets a better agent from collective data. The ad wall is a genuine structural separation, rare in Meta's history. Approval gates and Sentinel constrain what the agent can DO; read-only connector modes limit scope; the Confidential VM is on the roadmap; and the relevant comparison isn't a hypothetical perfectly-private agent — it's the status quo, where a 65-hour-week owner (Tom Mulholland, Meta's own example, per techceodaily) emails spreadsheets around and keeps passwords in a shared notebook. Meta also explicitly tells users to start with low-risk tasks.

## Actionable checklist (the article's required takeaways)
1. **Flip the training toggle BEFORE connecting anything.** Settings → Data controls → "Help improve our AI models" — it's on by default. Do this first, because connector data becomes training-eligible the moment it flows.
2. **Don't put Muse in your personal Accounts Center.** Sign up with a separate email so Meta can't combine Muse data with your other Meta profiles.
3. **Connect the narrowest scope.** Use read-only connector modes where offered; connect analytics and sales summaries before payroll and vendor banking.
4. **Treat it as a disclosure to a third party.** Your customers and employees didn't consent — assume connected business data is shared with Meta for your compliance purposes (contracts, state privacy laws, professional ethics rules).
5. **Audit memory and know the limits.** Ask Muse what it remembers; use the Forget skill; understand deletion is "to the best of its ability," not a guarantee.

## Sources (to hyperlink inline)
- https://muse.ai/privacy (Muse Privacy Policy, eff. Sep 17, 2026)
- https://kwsn.com/2026/09/29/meta-expands-muse-ai-agent-for-small-businesses/ (Reuters, Sep 29, 2026)
- https://ecommerceparadise.com/meta-muse-small-business/ (announcement coverage: TechCrunch/Axios/Engadget/Yahoo Finance)
- https://www.webpronews.com/metas-muse-sets-record-for-data-appetite-as-privacy-fears-mount/ (Sheasha WIRED quote, EPIC)
- https://captaincompliance.com/news/meta-is-selling-muse-on-an-opt-out-the-default-still-trains-the-model/ (EPIC Schroeder, ad-wall limit)
- https://www.pcworld.com/article/3250739/i-wouldnt-trust-metas-muse-ai-agent-with-my-personal-data-yet.html (PCWorld Oct 5, 2026)
- https://www.techceodaily.com/ai/meta-muse-for-small-business-ai-agent (announcement details, Mulholland quote)
- https://sanbi.ai/blog/meta-muse-controversy-privacy-security (safety roundup, download/rating figures)
