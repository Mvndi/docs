# War

## Introduction

[SiegeWar](https://github.com/TownyAdvanced/SiegeWar/wiki/Siege-War-User-Guide) is the plugin used on Mvndicraft for player to start war/diplomacy.
Even if you are familiar with this system, it is recommended you read this whole page to understand how it works on Mvndi,
as it has been highly modified for the server's needs.
There's a [video](https://www.youtube.com/watch?v=raiAhk2Ru5Y) here that showcases some siegewar concepts, many of these are changed on the server so still read this page.

## Starting a Siege

Siege banners can only be placed on Fridays, right before Battle Sessions.

- You **need a nation** to attack a town. It does not matter if the defending town has a nation or not, but if they do you will need your nation to be enemies with the defending towns nation before you can start the siege.
- Your nation bank needs enough money to pay both
    1. A declaration fee of **5 Ducats per plot claimed by the defending town** from your nation bank
    2. A war chest worth **25 Ducats per plot claimed by the defending town** from your nation bank.
- To start the Siege, go right outside the defending town's border in unclaimed lands and **place a non-white banner on the ground**.

**Once the war chest is paid the banner is _MOVED TO THE DEFENDING TOWNS SPAWN_ and the siege begins.**

- Siege weapons can be placed and destroyed in the defending towns claims but other blocks cannot placed or destroyed (by attackers).
- Defenders have a 60 second block place and destroy cooldown, it also applies to attackers too in the surrounding wilderness chunks of the defending town (attackers cannot build/destroy inside the defending town only siege weapons can break blocks in the defending town)
- Siege weapons only break blocks during active battle sessions to prevent griefing while there are no fights happening

## Upfront price / War chest

When you start a siege, an upfront price of **5 Ducats per chunks claimed** is paid to the server in order to avoid Nations sieging their allies to provide them with immunity.
Additionally, a war chest worth **25 Ducats per chunk claimed** is deposited into the siege. The winner gets the war chest at the end of the siege.

## Battle Sessions

A Siege is split in 2 2 hour-long battle sessions each.
A battle session starts every Saturday/Sunday at 6:30 PM UTC.

You can see when the next battle session is with the `/sw nextsession` command.

## Holding/Capturing the Banner

To hold the banner for your team, you or more soldiers on the same side need to stay within 8 blocks of the banner on the same y-level for 7 minutes without dying (you will see a timer and messages in chat). If you succeed, you will get added to the banner control list. People who are standing close enough to the banner to be eligible for banner control will have a glowing effect making them see through from walls. After someone is added to banner control they can leave, they don't have to stay there. If you do `/t <besieged town>` and hover over where it says `[Sieged]` you can see who's in the banner control list. When more soldiers hold the banner, points are obtained faster. Since the banner is in their spawn, defenders should always capture the banner and will always get passive points during the siege.

## War Sickness

If you are not allied or apart of the participating towns/nations and you enter a siege zone during a battle session you will get a war sickness. This is to prevent third partying. You also need a military rank in order to NOT get siege sickness. If you only have a town then a mayor/comayor/assistant then they should give `Guard` rank. If you're in a nation then your king/coking/assistant should give `private`

Town Military Ranks:

- guard

Nation Military Ranks:

- private
- sergeant
- lieutenant
- captain
- colonel
- general

You can also pay your soldiers with `/sw nation paysoldiers <amount>`
Read more at the [SiegeWar Guide](https://github.com/TownyAdvanced/SiegeWar/wiki/Siege-War-User-Guide#shield-assign-military-ranks)

## Outcome of a siege

A siege has points. Actions by defenders make the siege lose points and actions by the attackers make the siege gain points. At the end of the last battle session (this means the attackers have never captured the banner) if the siege has negative or zero points the defenders win, if the siege has positive points the attackers win (if the attackers have never captured the banner it's a near 0% chance they have more points than the defenders. For all intents and purposes if the siege ends because it's the end of the last battle session the defenders win).
If the attackers ever capture the banner before the end of the 2rd session the siege ends in an attacker victory.
A siege's points can be modified by:

- Banner control. Every 20 seconds the defenders get 8 points if they have banner control. Stand within 8 blocks of the banner and be on the same y-level for 7 minutes to be added to banne control (you will see a timer and messages in chat etc)
- Killing enemies in the siege zone. Attackers get 60 points for killing an enemy. Defenders get 120 points for killing an enemy. (attackers should not win a siege unless they take the defending towns spawn)

## [Post-War Actions](https://github.com/TownyAdvanced/SiegeWar/wiki/Siege-War-User-Guide#trophy-win-siege)

Losing the Siege as the Attacker means your war chest goes to the defenders for reparation.
Winning the war as the Attacker results in receiving the war chest back and being able to choose how to annex the losing town:

- Invade it (Place it under occupation status, you are able to tax the town up to 12 Ducats per plot daily)
  To do this, place another non-white banner at the town's borders right after the siege ends.
- Plunder it (One time fee worth 50*PLOTS-CLAIMED Ducats)
  To do this, place a chest at the town's borders right after the siege ends.

## Misc

- [Cannons](./siege_weapons/cannon.md) are better for precise strikes while [Trebuchets](./siege_weapons/trebuchet.md) are better at breaking lots blocks
- Greek fire burns berry bushes
