# Religions

Religions connect towns across national borders through clergy, shared funds, land, and common policies. Followers can organize a community alongside their town and nation.

> Religions are being tested before release on Survival. The values in these guides are the default settings; test servers may use different values.

## Using the menus

Run `/religion` to open the main menu. Hover over items for requirements, balances, and explanations. Text entry uses private chat prompts, and consequential actions ask for confirmation.

| Command | Opens or does |
| --- | --- |
| `/religion browse` | Browse religions. |
| `/religion browse <religion>` | Open a religion's profile. |
| `/religion town` | View your town's affiliation and focus. |
| `/religion town invitations` | Review invitations to your town. |
| `/religion faith` | Open your religion's profile. |
| `/religion faith bank` | View the shared bank and transfer funds. |
| `/religion faith mechanics` | View the religion's mechanic queue. |
| `/religion faith constitution` | View religious identity and leadership rules. |
| `/religion faith succession` | View an election, stand as a candidate, or vote. |
| `/religion faith chat <message>` | Send a message to followers across towns and nations. |

Use `/religion help`, `/religion town help`, or `/religion faith help` for command help. Leadership, ranks, notices, land, and other settings are available through the menus.

## Joining a religion

Religion belongs to your town. All residents follow their town's religion automatically. Moving towns changes your religion with it. A nation's religion is its capital's religion; its other towns can choose a different religion or remain unaffiliated.

As mayor, open a religion's profile and apply to join. You can also use `/religion town apply <religion>`. A religious head or officer with invitation authority must approve the application.

Religious officers can invite a town instead. Its mayor receives a notification and can accept through the invitations menu or `/religion town accept <religion>`. Applications and invitations expire after 72 hours, with reminders on login. They become invalid if the mayor or the town's affiliation changes before acceptance.

Mayors can leave through the town menu. Changing a town's religion normally has a seven-day cooldown. Leaving affects every resident; residents do not make separate personal faith choices.

## Founding a religion

Only a mayor can found a religion. Select Create religion in `/religion`, enter an ID and display name, and choose a single religious head or a council, then select a family and one of its traditions.

Religion names and identities must follow the [historical-accuracy rules](../../rules.md#section-8--nations): they must be plausible within 476–1550 AD. Plausible alternate-history branches are allowed; joke religions and sect names are not.

Founding costs 1,000,000 ducats from the mayor's personal balance. The founder becomes religious head and their town joins automatically. Religions can recruit towns from different nations.

Religious heads manage [ranks, funds, and religious land](./governance.md), and select the religion's [mechanics](./mechanics.md). Dissolving a religion clears its towns' affiliations and releases its plots. Withdraw shared funds before dissolution. A dissolved religion's ID can be used again.

## Families and traditions

A religion chooses one family and one tradition within that family. These describe its roleplay identity. Gameplay bonuses come from the separate [mechanic queue](./mechanics.md).

| Family | Traditions |
| --- | --- |
| Christianity | Latin Catholic, Eastern Orthodox, Oriental Orthodox, Church of the East, Protestant |
| Islam | Sunni, Shia, Ibadi |
| Judaism | Rabbinic, Karaite |
| Zoroastrianism | Mazdean |
| Pagan | Germanic, Slavic, Baltic, Steppe |

Open a religion's profile and select Religious constitution to view its family, tradition, and leadership rules. Religious heads can change its family and tradition there, subject to council approval. Religions showing Unassigned can choose a profile through the same menu.

## Finding your focus

The town menu shows your current focus. You can also hover over the religion on `/town`, or over a town in the religion's affiliated towns list, to see its focus.

Each town can focus one of its religion's queued mechanics. See [Mechanics and town focus](./mechanics.md) for unlocking slots and choosing a focus.
