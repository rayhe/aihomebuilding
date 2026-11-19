# Research: Muse Can Finally Dim Your Lights. It Just Has to Borrow Someone Else's Key to Do It.

**Slug:** muse-smart-home-tuya-skill-2026
**Journalist:** Jake Kowalski (agent capabilities, tools, hands-on how-tos)
**Date:** November 19, 2026
**Status:** Research complete, ready for DRAFT

## Kill test

Does this help someone understand what Muse can do, use Muse better, or make an informed decision about trusting an AI agent with real work? Yes on all three. A reader with a house full of smart devices wants one answer: can Muse touch them yet, and if so, how, and what can go wrong. As of this week the answer changed, and the honest version of the new answer is more useful than the press release version. It also teaches the difference between a native capability and a community skill, which is the distinction that decides whether a feature survives contact with your actual living room.

## The story in one paragraph

For its first six weeks, Muse could book your flights, shop at Walmart, and read your email, but it could not turn off your living room lights. Apple shipped Siri AI with full HomeKit control on September 14, 2026, and Google launched its Google Home MCP two days later, letting any MCP-compatible agent reach smart home devices. Muse was the odd one out. Meta answered with hardware first: Muse Gadgets on October 2, open-source SDKs plus a small Home Link dongle, 5,000 units, waitlist only. Then, on November 12, Tuya Smart released Tuya Cloud Devices, an open-source skill that lets Muse query and control Tuya-connected devices through Tuya's cloud with a single free API key. The gap is closing. It is closing through a third party's skill file and a trial-phase API, not through anything Meta built into Muse itself, and that difference is the whole story.

## Verified facts

### The gap (September 2026)
- As of September 27, 2026, Muse had no smart home device control features at all. (Forkast, "Muse's Smart Home Silence," Sept 2026.)
- Apple shipped Siri AI with iOS 27 on September 14, 2026, including full HomeKit device control. (Forkast, citing Apple.)
- Google launched Google Home MCP on September 16, 2026, allowing any MCP-compatible AI agent (Claude, ChatGPT, Hermes, OpenClaw) to control smart home devices. (Forkast.)
- Muse Power tier costs $20/month. Siri AI is bundled free with Apple devices. (Forkast.)
- Amazon has blocked Muse from shopping on Amazon.com. (Forkast.)

### Meta's hardware answer: Muse Gadgets and Home Link (October 2, 2026)
- On October 2, 2026, Meta published Muse Gadgets: open-source ESP32 and Linux device SDKs (Apache 2.0) at gadgets.muse.ai, repo facebookincubator/muse-gadget-sdk. (The Verge, via Yowox; badsignal.ai.)
- A builder needs an SDK token, and each gadget must pair through the Muse app. The code is provided as-is, without warranty. (gadgets.muse.ai, via badsignal.ai.)
- Supported paths: ESP32 boards (round AMOLED, M5Stack, color e-ink) and Linux devices (Raspberry Pi, Home Assistant Voice Preview Edition). The Linux SDK lets a Raspberry Pi run custom commands and a Home Assistant setup. (gadgets.muse.ai, via Yowox.)
- Muse Home Link is Meta's own device: a small USB-C-powered dongle that connects Muse to home Wi-Fi so it can reach compatible devices or anything exposing a local HTTP API. The Verge reports Meta manufactured 5,000 units and opened a waitlist ahead of shipping that month. (The Verge, via Yowox and badsignal.ai.)
- Home Link terms, per gadgets.muse.ai: free with an active Muse subscription in the United States only, limit one per subscriber, ships in October, first come, first served. (badsignal.ai.)
- Meta's own examples of what community-built skills can do through Home Link: turn on a light, control a TV, send a document to a printer. Availability depends on skills, network access, and what the target device exposes. (gadgets.muse.ai, via Yowox.)

### Tuya's skill: Tuya Cloud Devices (November 12, 2026)
- Tuya Smart (NYSE: TUYA; HKEX: 2391) announced Tuya Cloud Devices on November 12, 2026, via PR Newswire (also filed as an 8-K). Skill name: gadget-tuya-cloud-devices. (PR Newswire, Nov 12, 2026, 5:17 AM ET.)
- The skill is a plain Markdown file following the Muse Gadgets specification, adapted from tuya-smart-control, Tuya's official open-source AI skill. It was originally built for OpenClaw and adapted to Muse. (PR Newswire.)
- Setup: get the skill from Tuya's official GitHub repository, apply for a free API key at tuya.ai, give both to Muse. No local device keys, no same-network connection, no firmware changes. (PR Newswire.)
- The key starts with "sk-"; the two characters after it identify the data center, so the skill auto-selects the correct API endpoint from seven data centers with no manual configuration. (PR Newswire.)
- How it works: the skill reads each device's standardized Thing Model before generating commands, so one skill covers many product categories without per-model adaptation. Commands stay within the Thing Model's read/write permissions, value ranges, and increments. (PR Newswire.)
- Example requests: "Dim the living room lights a little," "Is the bedroom light on right now?", "Take a picture at the entrance and show it to me" (returns a photo or a video up to 60 seconds). It can list devices in a room, rename a sensor, and answer questions such as how much electricity an air conditioner used yesterday. (PR Newswire.)
- Automations: "Turn on the hallway light as soon as the door opens" sets up a trigger-action automation. Real-time events and event-triggered notifications require an always-on Linux device (e.g., a Raspberry Pi connected via the Muse Gadgets Linux SDK) to receive event subscriptions. (PR Newswire.)
- Safety design: when multiple devices match a request, the skill lists the rooms and asks the user to confirm. When a device is offline, it reports status without issuing commands. It does not write to read-only properties. After issuing a command, it reads back device status one to two seconds later and confirms the change only after verifying it took effect. Event-triggered notifications are sent at least 30 minutes apart to prevent alert fatigue. (PR Newswire.)
- Hard exclusions: the skill does not expose door lock control, live video, firmware upgrades, network configuration, or device removal. Those requests are redirected to the Tuya app. (PR Newswire.)
- The API key is treated as a credential: used only in request headers, never echoed in the conversation, and it can access only devices under the user's own account. Notifications go only to the user. (PR Newswire.)
- Scale claims: the Tuya platform covers 3,000+ smart hardware categories and serves 200+ countries and regions. As of June 30, 2026, Tuya had more than 2.09 million registered AI developers. (PR Newswire.)
- Muse is currently available to users in the United States and Canada. (PR Newswire.)

### The caveats the press release does not lead with
- Tuya's repository is MIT-licensed, but every currently available API endpoint is labeled trial-phase, subject to rate limits, call quotas, and other usage restrictions. (Unite.AI, via tradepoint.io.)
- The Muse adaptation was submitted to Meta's muse-gadget-sdk repository as pull request #61 and remains in review. Until it is merged, the Muse Gadgets repository does not hold the authoritative copy; Tuya's own repository is canonical. (Unite.AI, via tradepoint.io.)
- The "3,000+ categories" figure describes Tuya's platform, not devices verified to work with Muse. The verified set is whatever is already in your Tuya account and readable through its Thing Model. (Unite.AI analysis; PR Newswire wording.)

### Context: what Muse already does
- Muse launched September 2026 as a personal AI agent running on a cloud-based virtual machine dedicated to each user, continuing tasks in the background after the app is closed. (PR Newswire.)
- Meta announced at Connect 2026 that Muse can book flights and shop at Walmart, Best Buy, and Sephora. (Forkast.)
- Muse plans start at $20/month for 500 million Muse tokens per week, with a $100/month plan for 3 billion tokens. Muse has more than 10 million users as of October 2026. (TechCrunch, via PowerAds, Nov 12, 2026.)
- On November 12, 2026, Meta also rolled out outbound phone calls to US businesses for paid subscribers. (TechCrunch, via PowerAds.)

## Original contribution

Three things this article does that the coverage so far does not:

1. **Count the doors.** There are exactly three ways Muse gets into your house today, and none of them is native. Door one: buy nothing, use nothing, because Muse has no built-in smart home support. Door two: Home Link, free with a subscription, but 5,000 units on a waitlist, US only, one per subscriber. Door three: the Tuya skill, a free API key and a Markdown file, but trial-phase APIs and a pull request that Meta has not merged. Counting the doors, with their prices and their queues, is the honest version of "Muse can control your home now."

2. **Deflate the 3,000.** Every story about the Tuya skill repeats "3,000+ categories" as if it were the number of devices Muse can now control. It is the size of Tuya's platform. The number that matters to a reader is smaller and unglamorous: the devices already in their own Tuya account, which the skill can see through their Thing Models. A reader with zero Tuya devices gains zero controllable devices from this announcement.

3. **Name the read-back as the standard.** The skill's most interesting design choice is not that it dims a light. It is that after dimming the light, it reads the device state back one to two seconds later and only then tells you it worked. An agent that verifies its own physical actions before claiming success is doing something most agent skills do not do, and it is the behavior every skill that touches the physical world should be required to have. That is a standard worth stating, not a feature worth praising in passing.

## Setup a reader can actually follow

1. Check whether your devices are Tuya devices (Smart Life app, or any brand that runs on Tuya's cloud: check the app your device already uses).
2. Get a free API key at tuya.ai.
3. Get the gadget-tuya-cloud-devices skill from Tuya's GitHub repository and give it plus the key to Muse.
4. Start with one read-only question ("Is the bedroom light on right now?") before issuing any command.
5. If you want automations that fire the moment a door opens, you also need an always-on Linux device, such as a Raspberry Pi, running the Muse Gadgets Linux SDK. Without it, you get commands on demand, not triggers.
6. Do not expect door locks, live video, firmware updates, network settings, or device removal. Those stay in the Tuya app by design.

## Strongest counterargument

The honest case against this whole development: a skill file from a third-party vendor, running against trial-phase APIs, with its upstream pull request unmerged, is not "Muse can control your home." It is a demo with a press release. Siri controls HomeKit natively, Google's MCP is a platform-level integration, and both shipped in September. Muse's route requires the user to find a GitHub repo, obtain an API key, hand a credential to an agent, and accept that the API underneath can change or throttle at any time. For most people, the practical answer is still: no, your agent cannot turn off your lights, and the week this changed, it changed only for people willing to do homework. The counterargument is correct about the present. The article's claim is narrower: the homework is now short, free, and documented, and that is a real change from September, when there was no homework at all because there was no path.

## Limitations

- No hands-on test was run for this article. The skill's behavior is reported from Tuya's own release and from Unite.AI's reading of the repository, not from a live dimming of a light. The read-back timing (one to two seconds) and the 30-minute notification spacing are vendor claims.
- The status of pull request #61 (in review as of November 12) was not re-verified against the live repository at publication time.
- Tuya's platform numbers (3,000+ categories, 2.09 million developers) are company figures; the 2.09 million figure is as of June 30, 2026.
- The Forkast account of Siri AI and Google Home MCP dates (September 14 and 16) is taken from that publication; Apple and Google announcements were not independently re-read for this piece.
- Home Link shipping status beyond "ships in October" was not verified; the 5,000-unit figure comes from The Verge's reporting.

## Sources

1. Tuya Smart, "Tuya Releases Open-Source Skill Enabling Meta Muse to Control Smart Devices Across 3,000+ Categories," PR Newswire, November 12, 2026. https://www.prnewswire.com/news-releases/tuya-releases-open-source-skill-enabling-meta-muse-to-control-smart-devices-across-3-000-categories-302937689.html (also carried by Morningstar: https://www.morningstar.com/news/pr-newswire/20261112cn96254/tuya-releases-open-source-skill-enabling-meta-muse-to-control-smart-devices-across-3000-categories)
2. Meta, Muse Gadgets, gadgets.muse.ai (open-source ESP32 and Linux device SDKs; Muse Home Link). Covered in The Verge, October 2, 2026; summarized at https://yowox.com/posts/meta-muse-gadgets-diy-hardware/ and https://badsignal.ai/stories/meta-muse-gadgets
3. Forkast, "Muse's Smart Home Silence: The Agent That Controls Your Email But Not Your Lights," September 2026. https://forkast.news/muses-smart-home-silence-the-agent-that-controls-your-email-but-not-your-lights/
4. Unite.AI, "Tuya Connects Meta's Muse to Smart Home Devices Through Cloud APIs," November 2026. https://tradepoint.io/tuya-connects-metas-muse-to-smart-home-devices-through-cloud-apis-unite-ai/
5. TechCrunch (via PowerAds), "Meta's Muse Can Now Phone US Businesses for Paid Subscribers," November 12, 2026. https://powerads.group/news/meta-muse-places-calls-to-us-businesses-paid-subscribers/ (pricing and user count context)
