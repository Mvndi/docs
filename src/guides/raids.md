# Raids

Raids are a quick, for fun PvP mini-event that lets one party attack a town for a wager
It's like a a 20-minute deathmatch (land) or ship battle (naval)

## How to Start a Raid

1. You must be in a party (`/party invite <name>` to form one)
2. The party leader uses:  
   `/raid <town name> <wager>`  
   Example: `/raid Rome 25000`
3. You cannot be within the claim of the town you are trying to raid

The server will automatically decide whether the raid becomes **Land** or **Naval** based on the defending town's claims (see Naval Raid section below)

### Requirements & Limits

- At least 5 residents of defending town’s residents must be online  
- The wager cannot exceed 10 % of the defending town’s current balance
- A town can only be raided once every 24 hours
- Only one raid can be active on a town at a time

### Land Raid (default)

- Triggered when the defending town **does not** border ocean chunks
- A beacon spawns 1 chunk outside of the wilderness surrounding the defending town in a random direction
- A glowing beacon (red for attackers, green for defenders) appears above the banner so everyone can find it instantly
- Attackers and Defenders get glowing (see through wall) potion effect applied for the duration of the raid
- Kills only count if both players are within the kill radius of the banner (default 16 blocks)
- Most player kills after 10 minutes wins (Attackers win if defenders have 0 kills at the end)
- If a defender logs off in the middle of a raid the attackers get a point as if they killed that person, if an attack logs off in the middle of a raid the defenders get a point as if they killed that person

### Naval Raid (automatic)

- Triggered if the defending town **owns or borders ocean chunks**  
  → This happens automatically for coastal towns — even if players expect a land raid, it will become naval if the town touches ocean biome chunks.
- **No beacon, no kill counter**
- Only **valid ships** count toward defense:
  - Rowboats, boats, or any vessels **with pending upgrades/installs** (e.g. initial construction) **do not count** as ships in the town’s claim
  - Only fully completed, no-pending-install ships are considered
- Damage dealt to ships is tracked instead of player kills
- Attackers win if they deal **at least 1 more damage** to defending ships than defenders deal to attacking ships
- **Important:** If the defending town has **0 valid ships** (no completed ships without pending installs) in their town claim when the raid starts, **attackers instantly win**

### Visuals & Feedback

- All participants (attackers + defenders) glow during the entire raid.  
- Fireworks explode at the banner on every kill (red = attacker kill, green = defender kill).  
- Every minute every participant receives a private message:  
  `RAID AttackTown vs DefenseTown | Time left: 1m 42s | Attacker Kills: 5 | Defender Kills: 3`  
  (or damage dealt numbers for naval raids, e.g. `Attacker Ship Damage: 1240 | Defender Ship Damage: 980`)

### Winning & Rewards

- Winner’s town receives the full wager.  
- Loser’s town loses the wager.  
- The final result is announced globally:  
  `AttackTown won the raid and received $50,000!`

### Restarts

- Raids don't persist across restarts. If the server restarts in the middle of a raid the wager is refunded and the raided town doesn't get a cooldown applied (admins can also do this by command)

### Summary Table

| Feature                     | Land Raid                      | Naval Raid                                          |
|-----------------------------|--------------------------------|-----------------------------------------------------|
| Trigger                     | Default (no ocean border)      | Town owns or borders ocean chunks                   |
| Objective                   | Most player kills              | Deal more ship damage                               |
| Banner & Beacon             | Yes (with fake beacon)         | No                                                  |
| Kill radius                 | 16 blocks                      | N/A                                                 |
| Valid counting units        | Player kills in radius         | Damage to fully completed ships only                |
| Pending Ship Upgrades       | N/A                            | Do **not** count as defending ships                 |
| Instant win                 | —                              | Defending town has 0 valid defending ships at start |
| Win condition               | Higher kill count              | Damage dealt difference ≥ +1                        |
