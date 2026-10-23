# LLMNPCs

LLMNPCs are AI characters you can create, dress, and talk to in the world. Each character has a persona and its own conversations.

## Rank access and limits

Donator and higher ranks can talk to NPCs. Sponsor and higher ranks can also create characters and place them in the world.

| Rank | Talk to NPCs | Create characters | NPCs placed at once |
| --- | --- | --- | --- |
| Default | No | No | 0 |
| Donator | Yes | No | 0 |
| Sponsor | Yes | Yes | 3 |
| Benefactor | Yes | Yes | 5 |

You can own up to 10 characters. Your placement limit applies across all your characters, with one mannequin per character. Remove a mannequin to free a placement slot without deleting its character.

## Create a character

1. Run `/npc` (or `/llmnpcs`) and choose **Create character**.
2. Enter a name and skin. Skins accept a Minecraft username, UUID, or skin image URL.
3. Write the character persona, example dialogue, and greeting. These describe who the character is and how they speak.
4. Choose the visibility and save.
5. Open the character's **Spawn & movement** menu and choose **Spawn here**.

Use **View my characters** in `/npc` to return to a character's settings. Creating or remixing a character requires Sponsor or higher.

A character can have one mannequin in the world at a time. Use **Move here** to relocate an existing mannequin. **Follow me** makes it follow you; **Stay here** stops it. **Remove mannequin** removes its body, while **Delete character** deletes the character after confirmation.

## Talk to a character

Stand nearby, look at the NPC, and speak in local chat. Normal chat stays local even when you have a whisper chat selected. Local replies appear in chat and above the NPC for nearby players who can access the conversation.

Right-click the NPC with an empty hand to open its menu, then choose **Conversation** and **Chats**. Open a chat and use **Send message** to send text through the menu. You still need to be near the NPC.

To whisper, look at the NPC and run `/npc whisper <message>`. For example, `/npc whisper What do you know about this town?` sends a private message. You can also create or select a conversation under **My whisper chats** and use its **Send message** button.

Whisper replies are sent only to you and do not appear above the NPC. They do not trigger its public actions or expression changes. Other players, including the character's owner, cannot browse your whisper history through the NPC menus.

If the NPC is busy, your message may be queued. If the queue is full or the character cannot respond, wait and try again.

## Local chats and memory

Each character starts with a shared **Default chat**. This temporary conversation expires after inactivity and is lost when the server restarts.

Character owners can choose **Create local chat** to make a named, saved conversation. In that chat, **Use this chat** makes it the character's active local conversation for everyone. Each saved chat keeps separate history and sticky context. Visitors can access the active local chat when its access rules allow them.

Use **Sticky context** for facts the character should keep, such as a town's founders or a shopkeeper's stock. Older conversation may be summarized as the chat fills up; sticky context is retained. **View history** shows recorded dialogue and compacted memory, subject to the server's history limits.

Local chat editors can set an inactivity period and enable **Reset after inactivity and greet approaching players**. This clears the conversation after it has been idle and allows the NPC to greet an approaching player. Saved local chats retain their conversation across restarts unless reset or deleted.

Your whisper chats have their own history and sticky context. You can name, edit, and delete your own whisper chats. Deleting a chat also deletes its history after confirmation.

## Your persona

In `/npc`, choose **Edit my persona** to set the nickname and short description characters use for you. A character's **Conversation** menu also has **Edit my persona for this NPC** for a separate identity with that character. Leave those fields blank to use your default persona.

Character personas, example dialogue, and sticky context support `{{char}}` and `{{user}}`. `{{char}}` is the character's name. `{{user}}` normally refers to the owner's persona; the character editor can make it refer to the speaker in whispers. Use **Available placeholders** in the editor to see supported substitutions.

## Appearance and equipment

Open **Appearance & equipment** to manage outfits and equipment. An outfit contains expression skins, such as neutral or angry. Use **Wear this outfit** to choose one. During local conversations, the character can change expressions or perform actions such as jumping and crouching.

Drop equippable items onto your NPC to equip them. The **Equipment** menu's **Drop** buttons return individual items; **Drop all equipment** returns everything. When **Hold dropped items** is enabled, other dropped items can fill the off hand, then the main hand.

NPCs have health, shown in their menu. Right-click with food to heal an injured NPC; feeding consumes food in survival. If a character dies, spawning it again is blocked until its death cooldown ends. The menu reports the remaining wait.

## Sharing and access

Private characters are accessible only to their owner. Public and unlisted characters can be accessed by other players when encountered in the world, subject to their username rules.

Owners can set **Blacklist / whitelist** rules for the whole character. A blacklist blocks listed usernames; enabling whitelist mode restricts access to listed usernames. Separate rules on a local chat apply to that local conversation. Character-wide rules also apply to whispers.

Enable **Allow others to read persona and example dialogue** if visitors should be able to inspect the character's definition. **Allow others to remix** also reveals the definition and lets players with creation access make their own copy. A remix starts as a private character.
