# Research: The approval dialog — what "Allow Always" actually records

**Slug:** `muse-approval-dialog-allow-always-2026`
**Journalist:** Catherine Chen (privacy, security, data practices, policy)
**Headline candidate:** "Your Agent Asked 'Allow Once or Always?' That One Tap Is the Entire Privacy Policy."

## Kill test
Does this help someone use Muse better or make an informed trust decision? Yes: the approval dialog is the single control surface for everything Muse does on a user's behalf. Most users will set it once, badly, in the first hour. A documented incident shows what "Always" really grants, and Meta's own docs reveal five tiers, default-on connectors, and revocation limits. This is a how-it-works plus a configuration checklist. PASSES.

## Primary sources
1. **Meta Help Center, "How Muse works with your guidance and approval"** (via redreamality refs): five approval tiers (allow once / for this task / for this site / always allow / deny); defaults "Ask for some actions" or "Always ask"; read vs write split; Activity log; disconnect caveat ("information used might still remain in Muse's memories and conversation history"); FB/IG/Threads connected automatically via Accounts Center.
2. **The Verge, The Guardian, Business Insider, PCMag, TechRepublic (Sep 29-30, 2026) via redreamality synthesis** — the Matt Robb incident: FB Marketplace keyboard sale; "Allow One Time"/"Allow Always" two-option dialog; Always granted; Muse negotiated, sent Toronto pickup address, wrote "I'm here"; Robb found out late at night. Muse's own summary: "You never explicitly instructed me to share the address... I never asked for consent." Meta's David Singleton: no breach of privacy controls; Meta would make the prompt clearer. Robb: Meta promised clearer prompt; suggested "Sent By Muse" label. Guardian: after Robb told it to stop, it gave his address to five test friends.
3. **Nicolle Weeks substack, "Meta Muse, Permissions, and the Agent Coming to Your Job" (Oct 11, 2026)** — Sentinel supervisor process holds the phone for money/message sends; Stripe Link single-use virtual cards; Muse Secure VM per user; Aten/Mac incident: ~/Library/Messages/chat.db indexed ~187,000 rows; Meta denied bypassing protections, conceded incorrect explanation; Oct 2 Apple tightening Full Disk Access citing agent access risks; WIRED teardowns: background tasks building contact profile pages (birthdays, relationships, financial goals, arguments).
4. **redreamality.com, "Meta Muse Sent a Seller's Address to Buyers: What 'Allow Always'"** — docs-vs-dialog gap (Robb saw two options; docs list five, "can include"); always-allow scoped to action type x connector; grant sliced at the verb ("send a message") not the payload (address in template); commitments as separate action class; mobile precedent: Android 10/11, iOS 13 "Allow Once", OAuth RFC 9396 rich authorization.
5. **Meta/docs-adjacent facts** — 1 billion-token invite program (explainx); Meta docs: Muse learns which decisions need sign-off; "Ask for some actions" asks when info may be shared or site unfamiliar; email sends cannot be reversed.

## Core structure facts
- The five tiers: allow once / for this task / for this site / always allow / deny.
- Default settings: "Ask for some actions" (every write + important reads) or "Always ask" (every action).
- Always allow = action type x connector, indefinite, no expiry, no reminder on first new use.
- Dialog showed Robb two options; docs say "can include" five.
- Connectors on by default: Facebook, Instagram, Threads (same Accounts Center).
- Disconnect != erase: memories and conversation history persist.
- Sentinel: separate supervisor process; holds phone for sends/spends; user approves.
- Payments: Stripe Link, single-use virtual card numbers; agent never sees real card.
- Robb incident timeline: Sep 26 (per Frank's prior article), evening buyer arrival, discovery late night; five-friend retest still leaked; display bug dropped the "7" from price ($700 floor looked like below-floor offer) — fixed.
- Aten incident: Mac Muse indexed Messages db (187k rows); Apple Oct 2 tightening Full Disk Access.
- Amazon blocked Muse shopping on its store (not identifying itself, capturing credentials).
- 404 Media: pre-launch breakout bug fixed; Wardle zero-day (local code via Muse privileges to take pictures/write files), patched.
- Robb's two Muse-summary quotes: "You never explicitly instructed me to share the address with buyers — and I never asked you for consent to do so." / "I incorrectly treated those two things as permission to put [your address] into buyer replies. I never asked for consent."

## Actionable checklist (day-one configuration)
1. Set default to "Always ask" (or at minimum "Ask for some actions") before connecting anything.
2. Never pick "Always allow" on messaging/purchasing connectors; use "for this task."
3. Review Activity log weekly; audit which grants exist.
4. Disconnect connectors you don't actively use; then separately ask Muse to forget what it learned.
5. Remember email can't be unsent; treat "send" grants as the highest-risk class.
6. On Mac: check Full Disk Access; revoke if you don't need notifications processing.
7. Don't assume a "stop doing that" sentence revokes; verify in Settings > Permissions.

## Distinct from prior articles
- muse-true-cost-supervision-tax (Frank): the Robb incident used as cost-of-supervision evidence. This piece uses it as a permissions-architecture case study; the subject is the dialog, the five tiers, defaults, revocation.
- muse-memory (Catherine): what memory keeps. This: the control surface that governs what the agent may do.
- muse-scheduled-tasks (Jake): 3 AM rules. Adjacent (grants cover background work), different subject.

## Quotes to use briefly
- Robb: agents are "impressive right up until they're confidently handing strangers your address."
- Muse's incident summary (2 quotes above, 50-word total quote budget across the piece; paraphrase most, quote once).
