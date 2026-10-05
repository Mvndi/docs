# Raids

Raids are a short wagered fight. A party attacks one town for 15 minutes. Inland towns are fought on land. Coastal towns are fought at sea.

A town that owns or borders ocean chunks is coastal, and a raid on it is naval.

## Party

The attackers fight as a party.

1. Invite with `/party invite <player>`.
2. They accept with `/party join <inviter>`.

Other party commands are in the [Parties](./parties.md) guide.

Only an independent town's mayor, or a nation's leader, can put up the raid wager. The party leader is the one who starts the raid. Once the raid starts, the party size is locked.

## Starting a raid

The party leader uses:

`/raid <town> <wager>`

Example: `/raid Rome 25000`

All of these must be true:

- The leader is outside the target town's claims. For a naval raid, the leader is also on a ship. `/raid` fails if a naval raid is started from land.
- Every party member is online, alive, and within 128 blocks of the target town's claims.
- The target town has at least 2 residents online.
- Your party includes at least 2 online residents of the attacking town, matching the minimum needed for that town to be raided back. Party members from other towns do not count toward this requirement.
- The target is not your own town, a town in your nation, a town in an allied nation, or a town already in a raid.

## Raid area

**Land.** The raid covers every claim of the defending town, plus 100 blocks outside those borders. The beacon is only a marker.

**Naval.** The buffer around the defending town is 128 blocks. An attacker counts as present on land or aboard a ship. The leader still has to be on a ship to start the raid.

## Time, presence, and leaving

A raid lasts 15 minutes.

To win, the attackers need both of these, on top of the land or naval score:

- At least 5 minutes of total team presence. The team is present while at least one raider is in the area.
- At least one attacker still present when the timer ends.

There is a 2 minute arrival grace at the start. After that, 3 minutes with no eligible attacker is a forfeit. An eligible attacker is online, alive, and inside the raid area. An attacker returning to the area resets that countdown. You are notified when you leave the area. One raider can leave, as long as at least one raiding teammate stays in the area.

A forfeit is a defender win. The wager is paid out the same way as any other defender victory.

## Winning a land raid

Attackers win a land raid when they have **3 counted defender kills** in total and they **lead the kill score**, and they have met the presence rules above.

The same defender can count again 30 seconds after their last counted death. A kill during that cooldown gives the attackers no raid point, and it does not restart the 30 seconds.

If a defender logs off during the raid, the attackers receive a point as if they had killed that player. If an attacker logs off, the defenders receive a point.

If the timer ends and the attackers do not meet the kill and presence rules, the defenders win.

## Winning a naval raid

Attackers win a naval raid when they lead the ship damage score by **at least 100 points**, and they have met the same presence rules as a land raid.

Ship damage uses [completed ships](./boats/boats.md). Rowboats, and any vessel that still has a pending upgrade or install, do not count as ships in the town claim. Only finished ships with nothing pending are valid.

- **Attacker score** counts naval damage only: ship siege weapons and ramming. Land siege weapons do not add attacker raid score.
- **Defender score** counts ship weapons, ramming, and land siege weapons.

If the defending town has no valid ships in its claims when the raid starts, the attackers win immediately.

If the timer ends and the attackers are not ahead by at least 100 points, or they miss the presence rules, the defenders win.

## Messages and effects

- Attackers and defenders glow for the whole raid.
- On a land raid, fireworks go off at the banner on each kill. Red is an attacker kill. Green is a defender kill.
- Every minute, each participant gets a private status message, for example:  
  `RAID AttackTown vs DefenseTown | Time left: 1m 42s | Attacker Kills: 5 | Defender Kills: 3`  
  Naval raids show ship damage instead, for example `Attacker Ship Damage: 1240 | Defender Ship Damage: 980`.

## Money

Both sides reserve the wager when the raid starts.

- The maximum wager is **5% of the defending town's bank**, and never more than **200,000 ducats**.
- Attackers pay from their nation's bank when they have a nation. Otherwise they pay from their town's bank.
- Defenders pay from the defending town's bank.

The winner receives their own stake back, plus the losing stake. The result is announced globally, for example:

`AttackTown won the raid and received $50,000!`

## Protection

Towns and individual attackers each receive a 24 hour cooldown.

You cannot raid your own town, a town in your nation, a town in an allied nation, or a town that is already in a raid.

## Restarts

Raids do not continue through a restart. If the server restarts during a raid, both reserved stakes are refunded to the banks they came from, and the raided town does not receive a cooldown. Staff can refund a raid the same way.

## Summary

| | Land raid | Naval raid |
| --- | --- | --- |
| When | The town does not own or border ocean chunks | The town owns or borders ocean chunks |
| Leader at the start | Outside the target claims | On a ship, outside the target claims |
| Area | All defending claims, plus 100 blocks | 128 block buffer; present on land or on a ship |
| Beacon | Marker only | None |
| Score | Counted defender kills | Ship damage |
| Attacker win | 3 counted defender kills, and a kill lead | Ship-damage lead of at least 100 |
| Also required | 5 minutes of team presence, and someone present at the end | Same |
| Extra | A defender can count again 30 seconds after their last counted death | No valid defending ships at the start is an instant attacker win |
