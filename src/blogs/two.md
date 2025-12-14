# Mvndicraft IV dev log 2

We've had our siege war fork for a long time at this point and for the most part it works well. The banner is moved to the besieged towns spawn and the attackers have to break in using siege weapons. On the Italian wars beta there was a [Siege war bug](https://github.com/TownyAdvanced/SiegeWar/pull/970) that led to some issues on the beta. Not our fault but our setup of the attackers winning as soon as they capture the banner even once made this a bigger problem than it was for most servers.

Another issue we had was that sometimes the besieged towns spawn just sucks to get to for attackers, sometimes impossible

> If any of these are discovered by admins the changes shall be reverted.
tldr your town spawn has to be accessible with siege weapons. walls are okay, no dumb water elevator larp putting ur spawn far underground far above ground blah blah blah

We have this in the rules before all the building and war rules but it's not the most enforceable thing.  We're still going to keep this and enforce it but in order to mitigate the issue we've made it so that:

Attackers can place scaffolding in the towns theyre sieging, they have 1 minute cooldown and whoever places the scaffolding gets glow effect (can be seen through walls) for 1 minute

The newly added greek fire grenades (shown in the previous blog) destroy scaffolding and so do siege weapons. Im sure you guys know how scaffolding works where if the bottom block breaks all the scaffolding above it falls down.

We also fixed several bugs related to siege weapons and made it so foliage (leaves, bushes, flowers, etc) are ignored by them. Cannonballs and such will go straight through leaves. Trebuchets were also buffed. Also now siege weapons can be broken by right clicking them with a pickaxe.

<video controls src="https://files.catbox.moe/j8dxxq.mp4" title="cannon ball leaves"></video>

The greek fire has been updated to arc properly instead of shooting in a straight line

<video controls src="https://files.catbox.moe/6zhe2v.mp4" title="greek fire"></video>

the greek fire grenades also burn ships (normal greek fire has same effect but less damage because there's more projectiles)

<video controls src="https://files.catbox.moe/xmg256.mp4" title="greek fire grenade ship"></video>

## [siege camps](../guides/war/siege_camps.md)

These were added for the attackers to make sieges more fair and fun. Instead of the commanders system used during the beta attackers CAN choose to setup a siege camp outside of the town they're attacking where attackers will respawn at. It works like the banner in that if the defenders capture the siege camp it gets removed and they can't reclaim it. There's more info on the [siege camps](../guides/war/siege_camps.md) guide. Also we're thinking about adding a defender respawn cooldown but we don't know yet

## [raids](../guides/raids.md)

Raids are for chipping away at your enemies resources during the weekday before wars and to mitigate people getting bored but it's also so people use ships. They're what we turned the popularly requested field battle suggestion into. The tldr is a town can be raided, the raiding party puts up a wager. If the town doesn't border coastal chunks it's a land raid which means a banner with a beacon is spawned outside the wilderness of the town and whoever gets most amount of kills in certain amount of time wins. If the town does border coastal chunks then it's a sea raid and it tracks the damage done to ships, whoever does the most damage to the other sides ships wins the money. Coastal towns can't be land raided only sea raided, it's a tradeoff to think about when you make your town, normally ships in a towns claims can't be damaged but they can be during raids. There's more details on the page itself (like often a raid can be, what happens if someone logs off mid raid or if a costal town has no ships etc). There's more information on the [raids](../guides/raids.md) guide.

The release date is Feburary 20th 2026. We chose this to

- create a healthy hype buildup period, we feel the server is ready for December release but we feel like this is too short of a notice and we don't want to waste the opportunity, we want a long lasting server
- we want to do events before release and get feedback on changes we've made since the beta. the full changelog since the beta is being released through these blogs

next blog will probably be about the map, mobs, and seasons from Hydrolien

![steamhappy](https://cdn.discordapp.com/emojis/1167965708865519736.webp?size=48&name=steamhappy)
