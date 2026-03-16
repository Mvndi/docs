# Towny Guide

Read/Watch These (official & helpful resources):

- [How Towny Works](https://github.com/TownyAdvanced/Towny/wiki/How-Towny-Works)
- [Towny Commands](https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands)
- [Plot Permissions](https://www.youtube.com/watch?v=wvshFTv3l6A&list=PLvzvmyk0uI0WsLf4iyJZRhD_T2e-ANCmE&index=3)
- [Quarters/Apartments](https://github.com/jwkerr/Quarters/wiki)
- [War](https://mvndicraft.net/guides/war)

You get **12 chunks** per player in your town + extra bonus chunks from your nation (scales with nation size/level).

## Towny Prices & Costs

- **Town Creation Cost** — 1000 Ducats (`/t new`)
- **Nation Creation Cost** — 5000 Ducats (`/n new`)
- **Town Daily Upkeep** — 2 Ducats × (total chunks claimed in town)  
  (Minimum 100 Ducats — paid from town bank)
- **Nation Daily Upkeep** — 250 Ducats × (number of towns in the nation)  
  (Paid from nation capital's town bank)
- **Daily Conquered Tax** — 20 Ducats × (total chunks claimed in town)

Taxes & upkeep are collected **daily at 12:00 UTC**.  
Check current server time & next new day with `/towny time`.

## Towny Distances & Nation Joining

To create a town it must be at least *400 blocks** (~25 chunks) from an existing towns homeblock.

To join a nation, your town's **homeblock** must be within roughly **6000 blocks** (~375 chunks) of **at least one** existing town in that nation (not just the capital).  

This uses "chaining": a new town can join if it's close to any member town, allowing nations to spread out gradually as long as towns stay connected in range. Very spread-out nations are possible if players keep adding edge towns.

(Exact limit: 375 townblocks from nearest nation town homeblock.)

## Taxes Explained

Taxes are optional but common for towns/nations to generate income for upkeep, claiming, or wars.

### Resident -> Town Taxes (set by mayor with `/town set taxes`)

- **Flat tax** — Fixed amount per resident per day (default for new towns: **10 Ducats**).
- **Shop plots** — Extra tax for residents owning shop plots (default: **15 Ducats**).
- **Embassy plots** — Extra tax for embassy plots (default: **20 Ducats**).
- **Plot tax** — Daily charge per claimed plot (default: **5 Ducats** — can be overridden per plot type or exempted with `/plot toggle taxed`).

Mayors can switch to **percentage tax** (`/town toggle taxpercent`) — takes % of resident's balance instead of flat amount (server caps at 75%).

If a resident can't pay town/plot tax → they get kicked from the town (or lose the plot).

Mayors do **not** automatically pay town tax from their personal balance (they can withdraw from town bank anyway).

### Town -> Nation Taxes (set by king with `/nation set taxes`)

Towns pay nation tax daily (flat or % — nation cap 100%).  
If a town can't pay → it gets kicked from the nation.

Nation capitals do **not** auto-pay nation tax from personal balance.

### Other Tax Rules

- **Max flat town tax** — Capped server-wide (currently no hard cap enforced beyond economy plugin limits).
- **Max % town tax** — 75% of resident balance.
- **Max % nation tax** — 100% of town balance.
- Negative taxes are possible (town/nation pays residents/towns instead) if enabled.

If a town or nation can't pay **upkeep** after taxes → it risks deletion (town becomes "ruined" first in some setups, then fully deleted if not reclaimed).

Use `/res taxes` to see what you personally owe each day.  
Use `/town finances` or `/nation finances` to check town/nation balances & tax settings.

## Jail

Max bail is $5000, default bail is $1000 ($2000 if the prisoner is a mayor, $4000 if the prisoner is a king) you can `/t spawn` after paying bail with `/resident jail paybail` but you should be teleported

## Joining & Leaving

When you join a town a 24 hours cooldown starts where you cannot join other towns. If you have stayed more than 24 hours in a town, you will be able to join any other town without waiting.

## ChatPDF

This is a very helpful [ChatPDF document](https://www.chatpdf.com/share/PCoMCWTyW3wI2m03EE5DM) — ask it Towny questions like you're chatting with someone before pinging staff!
