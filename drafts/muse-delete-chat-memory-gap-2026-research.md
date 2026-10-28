# Research: Deleting a Chat Does Not Delete What Muse Learned

**Slug:** muse-delete-chat-memory-gap-2026
**Journalist:** Catherine Chen (privacy, security, data practices)
**Date:** October 28, 2026
**Angle:** Muse gives you six different ways to delete things, and none of them, alone or combined short of nuking your Meta account, guarantees that what the agent learned from the deleted material is gone. Deleting the record is not deleting the lesson.

## Kill test
Passes. A reader deciding how much of their life to hand to an agent needs to know, before they share anything sensitive, that "delete" in Muse means at least three different things depending on which button they press, and that Meta's own help page concedes the gap in one sentence. The article gives them the exact control sequence for a real cleanup and names what no control covers.

## Primary sources (verified October 28, 2026)

1. **Meta Help Center, "How to manage your Muse data"** (meta.com/help/superintelligence/2225571704857152/, crawled 2026-10-28 07:19 UTC). The core document. Key lines, verbatim:
   - "After you delete something from Muse, Muse may still remember information it learned from what you deleted."
   - Reset (Settings, Data Controls, Reset) "permanently delete[s] all information including chat history, files and active tasks" — but the memory caveat sits in the same document, and reset is framed as "start from scratch," not as account deletion.
   - Forgetting: "ask Muse to look for information about a specific person, topic or matter in its memories and supporting files and remove it to the best of its ability." Note the qualifier: "to the best of its ability," not "completely."
   - Training toggle: "This setting is on when you first use Muse." Turning it off "also appl[ies] to previous interactions," and Meta strips names, emails, phone numbers, SSNs and disassociates interactions from the account before training. No company can un-train a checkpoint already built.
   - Memory is user-editable: Assistant icon, Identity, Memory — "edit and delete information in the Memory.md file directly."
   - Deleting the Meta account (Accounts Center) deletes "all information associated with your account, including Muse." This is the only documented path that covers everything, and it costs the whole account.
2. **Meta Help Center, "How Muse handles your privacy, safety and security"** (meta.com/en-gb/help/superintelligence/1047255454427887/). Confirms the same deletion/forgetting section and that approval checks for important actions are enforced outside the model. Also: conversations and VM data are not shared with Meta ad systems, but actions Muse takes on the open web on your behalf appear as your activity to those sites.
3. **TIME investigation, October 6, 2026 (reported by Forkast, October 19, and WIRED/Tom's Guide coverage).** TIME obtained Muse's internal instructions. Two findings: (a) asking Muse to forget a detail can change the stored conclusion without deleting the original message; (b) the instructions tell the agent not to volunteer that original messages may remain visible in the chat, and not to frame that as a failure to erase. Meta did not dispute the findings when TIME asked.
4. **Muse's own forget workflow (skill documentation, verified in-product October 28, 2026).** The forget procedure is genuinely thorough on its own terms: it plans cleanup across conversation history, other notes, preferences, goals, scheduled work, created items, search results, and active work that could write the information back; it requires explicit user confirmation before irreversible removal; it verifies from fresh state and reports the cleanup incomplete if verification fails. It also states plainly that visible conversation text is not a cleanup target, and that outside services, shared publications, logs, and backups remain. This corroborates, from the inside, that "forget" and "delete the chat" are different operations with different scopes.
5. **WIRED reporting (October 2026, via Gizbot/Komando summaries).** Muse's internal instructions direct it to keep a running page for every person in the user's life, updated hourly — family, partners, friends, colleagues — including people who never signed up for Muse. The pages can hold where people live, jobs, birthdays, anniversaries, shared trips, promises made. A non-user has no opt-out from someone else's agent; the only controls belong to the Muse owner.
6. **PCWorld, October 5, 2026, "I wouldn't trust Meta's Muse AI agent with my personal data yet."** Independent confirmation of the training-on-by-default setting and the delete-vs-remember gap, plus the practical advice to ask Muse what it remembers and inspect the files.
7. **Meta launch announcement, September 8, 2026 (via PYMNTS/Reuters coverage).** Muse runs on a dedicated Muse Secure VM per user; Muse Confidential VM (keys held only by the user) announced as coming later in 2026, not yet shipped as of this writing. Current isolation is policy-constrained staff access, not cryptographic exclusion of Meta itself.

## Original analysis: the coverage matrix

Six controls Meta documents, mapped against the three places your data actually lives. Built by cross-referencing Meta's own help page against the forget workflow and the TIME/WIRED findings. No single control clears all three columns; that is the article's novel finding, stated as a table the reader can use.

| Control | Chat record | Learned memory | Training trajectory |
|---|---|---|---|
| Delete a message / side chat | Yes | No — "may still remember" | No |
| Forget skill (ask Muse to forget X) | No — transcript is not a cleanup target | Best-effort, verified from fresh state | No |
| Edit Memory.md directly | No | Yes, for that file | No |
| Disconnect a Connector | No — past use remains | No — past use remains | No — past use remains |
| Reset Muse | Yes | Yes, with the same memory caveat | No — opt-out covers past interactions only as a policy statement; trained checkpoints cannot be un-trained |
| Delete Meta account | Yes | Yes | Policy says no further use; already-trained checkpoints still unrecoverable |
| Training opt-out toggle | No | No | Stops future use; applies to previous interactions per Meta, but cannot extract data from a finished checkpoint |

Additional gaps found in the documents:
- **No published retention period.** Meta's general privacy policy describes retention case by case (service operation, legal obligations, safety). No Muse-specific deadline for purging backups or retained records after a deletion appears in any reviewed document. A user is trusting process, not paperwork.
- **No "delete just Muse" path.** Between Reset (start over, same account) and Delete Meta account (everything) there is no labeled middle option. At least one user complaint to the California Privacy Protection Agency has reportedly been filed over this gap (reported by memeburn via museexplained.com; complaint status unverified — say so).
- **Third-party exposure has no control at all.** If your friend's Muse reads your texts to them, your details can land in their agent's people pages. No opt-out exists for the non-user. The only mitigation is social: ask, or keep sensitive things off text.
- **Deletion is not the same as non-creation.** Muse's browsing, purchases, and form-fills on your behalf create activity at third-party sites that no Muse control recalls.

## What a real cleanup sequence looks like (actionable, from Meta's own docs)
1. Turn off training first: Settings, Data controls, "Help improve our AI models" off. (On by default.)
2. Ask Muse to forget the specific topic, then ask "What do you remember about me?" and check Identity, Memory yourself.
3. Delete the messages/side chats/files that carried the sensitive material.
4. Disconnect any Connector that supplied it, so nothing re-feeds it.
5. Cancel or delete scheduled tasks and goals that reference it — the forget workflow flags these as write-back risks.
6. If leaving for real: Reset, then decide separately whether the Meta account goes too. Deleting the app from your phone deletes nothing.

## Skepticism / counterargument (to be stated at full strength)
- The other side of this story is real: Muse's memory is inspectable in a way no rival agent's is. You can open MEMORY.md, read it, edit it, delete lines. That transparency is genuinely ahead of the field, and the forget workflow's verification step (report incomplete unless fresh state confirms removal) is more honest than a silent success message.
- Meta's position, fairly stated: deletion of a record and erasure of a learned fact are technically different operations for any learning system; "best-effort" may be the honest description rather than a dodge; and the company does publish the caveat instead of hiding it — the sentence is right there on the help page.
- What undercuts that defense: the TIME finding that the agent is instructed not to volunteer the caveat unprompted, and the absence of any retention deadline or delete-just-Muse path. Transparency you have to go looking for, plus no middle option, is a weaker offer than it first appears.

## Limitations (for the article's dedicated section)
- This analysis rests on Meta's published help pages (crawled October 28, 2026), TIME/WIRED reporting of internal documents, and the in-product forget workflow documentation. We did not independently test deletion against a live Muse account's backend, and we cannot verify what happens inside Meta's servers after a reset.
- The California Privacy Protection Agency complaint is secondhand (memeburn via museexplained.com); its status is unverified.
- Muse Confidential VM may change the Meta-access picture when it ships; as of this writing Meta's help pages still describe it as a future option.
- Retention and backup behavior after deletion is undocumented; the article states the absence of documentation as a finding, not as proof of indefinite retention.

## Numbers to use (all sourced above)
- 3: the number of separate systems your data lives in (stored record, learned memory, training trajectory).
- 6: documented deletion controls, none of which clears all three systems.
- 0: published Muse-specific retention deadlines.
- 1 hour: the reported cadence at which people-pages refresh (WIRED via researchers).
- September 8, 2026: Muse US launch. October 6, 2026: TIME investigation. October 5, 2026: PCWorld piece.
