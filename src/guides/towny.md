# Town & Nation Starter Guide

> Everything you need to found, run, and grow a town — and eventually a nation · mc.mvndicraft.net

---

## 1. Before You Start

Mvndicraft is set in the **medieval period (476–1550 AD)**. Everything you build, name, and do should reflect that. Your town must correspond to a real historical settlement and be built in the architectural style of its region.

Before founding a town, ask yourself:

- Do you have enough funds to cover the founding cost and ongoing daily upkeep?
- Do you have a location in mind that corresponds to a real medieval settlement?
- Have you read the server rules — especially Sections 7 and 8?

> ⚠ Founding a throwaway town for siege purposes or abandoning a town shortly after founding it is against the rules.

To create a town it must be at least *320 blocks** (20 chunks) from an existing towns claim.

To join a nation, your town's **homeblock** must be within roughly **6000 blocks** (~375 chunks) of the capital of the nation.

<!-- To join a nation, your town's **homeblock** must be within roughly **6000 blocks** (~375 chunks) of **at least one** existing town in that nation (not just the capital).  
---

### 1.1 — Town Naming Rules

- Your town must be named after a real place that existed between **476–1550 AD**.
- The town must have at least one chunk over the area where that settlement historically existed on the map.
- No modern names, fictional names, or joke names.

(Exact limit: 375 townblocks from nearest nation town homeblock.) -->
| Valid | Invalid |
|-------|---------|
| Paris, Toledo, Dubrovnik, Krakow, Antioch | NewYork, Gondor, CoolTown |

---

## 2. Founding a Town

### 2.1 — Requirements

| Requirement | Details |
|-------------|---------|
| Founding cost | Use `/towny prices` to see the current cost |
| Location | Must correspond to a real historical settlement |
| Name | Must follow naming rules (Section 1.1) |
| Daily upkeep | Towns cost money every day — check `/towny prices` |

---

### 2.2 — Core Town Commands

| Command | Description |
|---------|-------------|
| `/town new <name>` | Found a new town at your current location |
| `/town set spawn` | Set your town spawn. Must be accessible via siege weapons. |
| `/town set board <message>` | Message players see when entering town |
| `/town set mayor <player>` | Transfer mayorhood |
| `/town deposit <amount>` | Deposit money into the town bank |
| `/town withdraw <amount>` | Withdraw money from the bank |
| `/town delete` | Permanently delete your town. Cannot be undone. |

---

### 2.3 — Managing Residents

| Command | Description |
|---------|-------------|
| `/town add <player>` | Invite a player to join your town |
| `/town kick <player>` | Remove a resident |
| `/town rank add <player> <rank>` | Give a resident a rank |
| `/town rank remove <player> <rank>` | Remove a rank from a resident |
| `/town` | View your own town info, bank balance, and residents |
| `/town <name>` | View info about another town |
| `/res <player>` | View a player's town membership info |

---

## 3. Claiming Land

Towns expand by claiming **16x16 block chunks**. Claims must be sensible — no snake claiming, no blocking other towns, no claiming empty land you have no intention of building on.

### 3.1 — Claim Commands

| Command | Description |
|---------|-------------|
| `/town claim` | Claim the chunk you are currently standing in |
| `/town unclaim` | Unclaim the chunk you are standing in |
| `/town unclaim all` | Unclaim all chunks. Use with extreme caution. |
| `/towny map` | Show a map of nearby chunks and their ownership |
| `/plot claim` | Claim a specific plot within your town for personal use |
| `/plot set <type>` | Set a plot type (shop, arena, embassy, etc.) |

> 💡 **Tip:** Use `/towny map` before claiming to see exactly what you're about to claim.

> ⚠ Snake claiming — thin lines of claims to reach resources or cut off other towns — is against the rules. Claims will be deleted.

> ⚠ Claiming land specifically to prevent another town from expanding is against the rules.

---

### 3.2 — Claim Limits

Your maximum claims scale with the number of residents in your town. More residents = more claims. Check `/town` to see your current limit and usage.

---

## 4. Town Settings & Permissions

### 4.1 — Permissions

| Command | Description |
|---------|-------------|
| `/town set perm resident build on` | Allow residents to build in town claims |
| `/town set perm outsider build off` | Prevent outsiders from building |
| `/plot set perm <on/off>` | Set permissions for a specific individual plot |

---

### 4.2 — Town Toggles

| Command | Description |
|---------|-------------|
| `/town toggle open` | Toggle whether anyone can join without an invite |
| `/town toggle public` | Toggle whether non-residents can use your town spawn |
| `/town toggle explosion` | Toggle explosion damage in your claims |
| `/town toggle fire` | Toggle fire spread in your claims |

---

### 4.3 — Useful Info Commands

| Command | Description |
|---------|-------------|
| `/towny prices` | See all Towny costs — founding, upkeep, claims |
| `/towny time` | See when the next Towny tax cycle runs |
| `/town here` | See info about the town you're currently standing in |

---

## 5. [Upkeep & the Town Bank](./towny_upkeep.md)

Towns charge daily upkeep based on your number of claims. If the town bank runs dry, the town falls into ruin and is eventually deleted automatically.

### 5.1 — Keeping Your Town Alive

- Deposit money regularly — `/town deposit <amount>`
- Check `/town` to see your balance and how many days of upkeep you can cover
- Encourage residents to contribute — it's their town too
- Unclaim land you aren't using to reduce your daily cost

> ⚠ You may not deliberately drain your town bank during an occupation to force it into ruin. This is a **T4 violation** and the town will be returned to the occupying nation.

> 💡 **Tip:** Set up a chest shop to earn income passively from other players.

---

## 6. Nations

Nations are groups of towns operating under a shared banner. Joining a nation gives access to shared diplomacy, nation bonuses, and the ability to participate in larger wars.

---

### 6.1 — Joining a Nation

| Command | Description |
|---------|-------------|
| `/nation list` | See all nations on the server |
| `/nation <name>` | View info about a specific nation |

Most nations require a direct invite from the leader rather than an open join. Contact the nation leader in-game or on Discord.

---

### 6.2 — Founding a Nation

You must already have a town. Check `/towny prices` — nations are expensive to found and maintain.

| Command | Description |
|---------|-------------|
| `/nation new <name>` | Found a nation with your town as the capital |
| `/nation set capital <town>` | Change the nation capital |
| `/nation add <town>` | Invite a town to join |
| `/nation remove <town>` | Remove a town from your nation |
| `/nation deposit <amount>` | Deposit into the nation bank |
| `/nation set king <player>` | Transfer nation leadership |
| `/nation delete` | Delete your nation. Towns become independent. |

> ⚠ Nation names must reflect a real or plausible alternate-history medieval nation. No modern states or fictional empires. See Rules Section 8.0.

---

### 6.3 — Diplomacy Commands

| Command | Description |
|---------|-------------|
| `/nation ally add <nation>` | Send or accept an ally request |
| `/nation ally remove <nation>` | Remove an ally |
| `/nation enemy add <nation>` | Declare a nation as an enemy |
| `/nation enemy remove <nation>` | Remove enemy status |

> 💡 **Tip:** Alliances are public and affect how sieges treat your towns. Manage them deliberately.

---

## 7. Rules Quick Reference

| Rule | Summary | Tier |
|------|---------|------|
| 7.0 | No snake claiming | T2 |
| 7.0.1 | Cannot claim to block another town from expanding | T2 |
| 7.1 | Cannot join a town to spawn-kill residents | T2 |
| 7.2 | Town name must be a real historical place (476–1550 AD) | T1 |
| 7.3 | Town must have a chunk over the historical location | T1 |
| 7.5 | No founding towns on Wednesdays during siege week | T2 |
| 7.5.1 | No alt towns used to bypass rules | T2 |
| 7.7 | Cannot drain town bank to avoid occupation | T4 |
| Siege Towns | Towns created as siege outposts are not allowed | T3–T4 |
| 8.0 | Nations must be historically plausible in 476–1550 AD | T3 |
| 8.0.1 | Nations that only existed outside the timeframe are not permitted | T3 |
| 8.2 | Cannot recreate the same nation in an unrealistically distant region | T3 |

---

## 8. Tips for New Mayors

- **Build before you claim** — establish your footprint first, then claim around it.
- **Keep 2–3 weeks of upkeep** in the bank at all times.
- **Set your town spawn** somewhere safe and accessible — it must be reachable via siege weapons.
- **Set a welcome board** with `/town set board` so new residents know basic info on arrival.
- **Talk to neighbouring towns early** — diplomacy is core to this server.
- **Join a nation sooner rather than later** — the community and protection are worth it.
- **When in doubt, open a ticket** and ask before you build it.