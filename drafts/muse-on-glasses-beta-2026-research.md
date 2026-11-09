# Research: Muse on Your Glasses — What the Beta Gives You and What It Takes Away

**Slug:** muse-on-glasses-beta-2026
**Journalist:** Jake Kowalski (agent capabilities, hands-on how-tos)
**Headline (working):** Muse Moved Onto Your Face. The Beta Gives You Hands-Free Help and Takes Away Your Old Assistant.
**Date:** November 9, 2026

## Kill test
Does this help someone understand what Muse can do, use Muse better, or decide whether to trust an agent with real work? Yes. Switching your glasses from Meta AI to Muse is a one-tap decision with real tradeoffs: you gain an agent that can run multi-step tasks hands-free, and you lose music, calling, messaging, and navigation until you switch back. Nobody has laid out the full ledger in one place.

## Primary sources (3+)
1. **Meta Help Center, "How to use Muse on your AI glasses (Beta)"** — https://www.meta.com/help/ai-glasses/1391796469223757/ — read in full Nov 9, 2026. The authoritative source for beta scope, switching, naming, location, subscriptions, voice-data handling.
2. **Meta Q3 2026 earnings call transcript (Oct 21, 2026), via Motley Fool** — https://www.fool.com/earnings/call-transcripts/2026/10/21/meta-meta-q3-2026-earnings-call-transcript/ — Zuckerberg: more than 10 million people in the US and Canada set up Muse personal agents in about six weeks; about 25% use it on any given day; shopping is the most common use case, over 25% of weekly actives, average purchase over $200. Cross-checked against Zacks and Eric Seufert's MDM analysis (mdm.co), which notes 10M is lifetime setups, not actives, and 25% implies roughly 2.5M daily users.
3. **October 13, 2026 unprompted-recording reports** — Android Authority via dig.watch (https://dig.watch/updates/meta-says-has-resolved-smart-glasses-issue), Tech Times, and vr.org (https://vr.org/articles/meta-glasses-recording-bug-us-uk-voice-storage-privacy-notice-2026). A Ray-Ban Meta owner reported three pairs of glasses (2nd and 3rd gen) saving audio recordings and transcripts of ordinary conversation without the "Hey Meta" wake phrase, with "Respond without Hey Meta" disabled. Meta told Android Authority on Oct 13: "This issue has been resolved. People can manage, review and delete voice logs of their interactions with Meta AI via settings at any time." Meta named no cause, no firmware version, no count of affected devices. A later reply in the original Reddit thread said a further update had not stopped the behavior on that owner's glasses — disputed, not independently verified.
4. **Ray-Ban Meta Audio mic-indicator gap** — supercrzy.com (https://supercrzy.com/news/meta-put-muse-on-your-face-the-mic-has-no-light), citing MediaNama and IDC analyst Jitesh Ubrani. Ray-Ban Meta Audio ($349, launched at Connect 2026, ships Oct 13) has no camera and no display, a six-microphone array, and no indicator light for audio recording. Camera glasses carry an LED; microphones have no equivalent signal.

## Verified facts
- **Beta went live Nov 6, 2026** (Meta help page updated ~Oct 27, 2026; beta announced at Connect 2026, Sep 23-24, as "coming months").
- **What Muse on glasses does:** hand off tasks hands-free, ask about what's in front of you using the camera, call the agent by a name you choose.
- **Two apps required:** Meta AI app (pairing, settings, firmware, photos/videos) AND the Muse app (conversations with Muse).
- **Only one assistant active at a time.** Switching: Meta AI app > Glasses > Device settings > AI assistant > Muse or Meta AI.
- **Connectors do not carry over:** "Muse and Meta AI apps are separate products. Connecting an app or service in one doesn't connect it in the other — each one asks for its own permission."
- **Beta gaps:** some music, calling and messaging, and navigation experiences aren't supported yet. Switch back to Meta AI to use them.
- **Custom name:** you can name your Muse and record the name; also "Hey Meta" or "Hey Muse" work. Custom name and "Hey Muse" aren't available on all glasses models during beta.
- **False wakes:** "A voice interaction can be misactivated even if you don't say your custom name. False wakes may be more frequent if your custom name sounds like another commonly used word." Meta labels detected misactivations as false wakes and deletes them within 90 days of detection.
- **Location:** Muse uses location for things like "find a good coffee shop near me." If location is allowed on either app, Muse can access and store it. You can ask Muse to delete it anytime; turn off location per app in phone settings.
- **Pricing:** free with a usage limit; subscription plans for more. Beta participants get more usage during the beta; details in the Muse app after setup. Maximum plan subject to Meta Subscription Terms.
- **Voice data:** handled under the Muse Privacy Policy on Muse; under the Supplemental MPT Privacy Policy and AI Glasses Voice Privacy Notice if you switch back to Meta AI.
- **US vs UK voice-storage asymmetry (vr.org, Oct 16, 2026):** US AI Glasses Voice Privacy Notice (effective July 22, 2025): "Text transcripts and audio recordings of your voice interactions are stored by default to help improve Meta's products." No setting turns this off in the US. UK version: "You can choose to store your voice recordings to help improve other Meta products." US notice: "We will store voice recordings even if you unintentionally activate a voice interaction." False wakes deleted within 90 days of detection; other transcripts/audio kept up to one year.
- **Hardware split:** Ray-Ban Meta Gen 3 ($449) has a 12 MP camera; Ray-Ban Meta Audio ($349) is camera-free, 43g, 12-hour battery; Meta Ray-Ban Display ($1,299.99) adds a display. Camera-free glasses get voice/audio only, no first-person scene.
- **Muse launch:** Sep 8, 2026, US on iOS, Android, web. Paid plans: Power $20/month (500M Muse tokens/week), Maximum $100/month (3B/week), in limited testing.
- **Connect 2026 demo use cases for glasses Muse:** guided workouts, meal logging, appointment booking, shopping help for items in front of you.

## Original contribution (novel analysis)
1. **The switch ledger:** a counted inventory of what changes when you flip the one toggle. Gains: hands-free multi-step task handoff, camera context, a named agent. Losses: some music, calling, messaging, navigation. Hidden costs: every connected service must be re-permissioned in the Muse app because connectors don't carry over; two apps to maintain; two privacy policies depending on which assistant is active. Nobody has published this as a single decision checklist.
2. **The two-privacy-regime finding:** the same pair of glasses stores your voice by default with no off switch in the US, and optionally in the UK. A US wearer who switches to Muse gets the Muse Privacy Policy; switch back and a different policy applies to the same microphone. The policy follows the assistant, not the hardware.
3. **The false-wake clock math:** Meta deletes detected false wakes within 90 days, but keeps other voice transcripts and audio up to one year. A misactivation that Meta's systems fail to detect as a false wake is therefore stored up to four times longer than a detected one, and the wearer has no way to know which bucket a given recording fell into.
4. **The 2.5M daily-user derivation:** 10M setups x ~25% daily = roughly 2.5M people using Muse on a given day (per MDM's arithmetic on Zuckerberg's rounded figures). The glasses beta lands on an agent that already has a daily audience larger than most cities.

## Strongest counterargument
The beta is genuinely the right shape for a personal agent: the glasses remove the phone-unlock-describe loop that makes delegation feel like work, and the gaps (music, calls, navigation) are exactly the features Meta AI already does well, one toggle away. For most people the switch costs thirty seconds and is reversible in the same menu. Treating beta limitations as permanent defects would be unfair to a product that is explicitly labeled unfinished and that ships extra usage to beta participants.

## Limitations / what I could not verify
- I have not tested the beta on hardware; all capability claims come from Meta's help page and Connect demos, not hands-on use.
- Meta has not published which music, calling, messaging, or navigation features specifically are missing; the help page says only "a few features, including some."
- The October 13 recording issue: Meta says resolved; the original reporter's later claim that it persisted is unverified and disputed; Android Authority could not reproduce it. No cause, firmware version, or affected-device count has been published.
- The US/UK voice-storage comparison comes from vr.org's Oct 16 comparison of the regional notice pages, not from Meta's own statement about the difference.
- Beta availability by glasses model (which models support custom names / "Hey Muse") is not published in detail.
- No independent data exists yet on how often Muse on glasses misactivates versus Meta AI.

## Actionable takeaways (for the article)
- Before switching: list the services you use through Meta AI on your glasses; expect to reconnect each one in the Muse app.
- Pick a custom name that doesn't sound like a common word, or false wakes get worse.
- Check your voice activity log in the Meta AI app after the first week; delete anything you didn't intend.
- If you need navigation or calls on a drive, switch back to Meta AI first; don't discover the gap mid-trip.
- Keep usage low-stakes during beta: errands and lookups, not anything where a misheard instruction costs money.
