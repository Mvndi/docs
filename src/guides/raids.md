# Raids – Player Guide

Raids are a quick, for fun PvP mini-event that lets one party attack a town for a wager
It's like a a 10-minute deathmatch (land) or ship battle (naval)

## How to Start a Raid

1. You must be in a party (`/party invite <name>` to form one)
2. The party leader uses:  
   `/raid <town name> <wager>`  
   Example: `/raid Rome 25000`
3. You cannot be within the claim of the town you are trying to raid

### Requirements & Limits

- At least 50 % of the defending town’s residents must be online  
- The wager cannot exceed 10 % of the defending town’s current balance
- A town can only be raided once every 24 hours
- Only one raid can be active on a town at a time

### Land Raid (default)

- A beacon spawns in a random direction in the wilderness surrounding the defending town
- A glowing beacon (red for attackers, green for defenders) appears above the banner so everyone can find it instantly
- Attackers and Defenders get glowing (see through wall) potion effect applied for the duration of the raid
- Kills only count if both players are within the kill radius of the banner (default 16 blocks)
- Most player kills after 10 minutes wins

### Naval Raid (automatic)

- If the defending town owns or borders ocean chunks then the raid becomes naval.  
- No beacon, no kill counter
- Damage dealt to ships is tracked instead
- Attackers win if they deal at least 1 more damage to defending ships than the defenders do to attacking ships
- If the defending town has no ships within their town claim when the raid starts then attackers instantly win

### Visuals & Feedback

- All participants (attackers + defenders) glow during the entire raid.  
- Fireworks explode at the banner on every kill (red = attacker kill, green = defender kill).  
- Every minute every participant receives a private message:  
  `RAID AttackTown vs DefenseTown | Time left: 1m 42s | Attacker Kills: 5 | Defender Kills: 3`  
  (or damage dealt numbers for naval raids)

### Winning & Rewards

- Winner’s town receives the full wager.  
- Loser’s town loses the wager.  
- The final result is announced globally:  
  `AttackTown won the raid and received $50,000!`

### Summary Table

| Feature                  | Land Raid             | Naval Raid                 |
|--------------------------|-----------------------|----------------------------|
| Trigger                  | Default               | Town borders ocean         |
| Objective                | Most player kills     | Deal more ship damage      |
| Banner & Beacon          | Yes (with fake beacon)| No                         |
| Kill radius              | 16          | N/A                        |
| Win condition            | Higher kill count     | Damage dealt difference    |
| Instant win              | —                     | No ships in defender claim|
