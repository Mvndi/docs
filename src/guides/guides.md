# Guides

<!-- The guides on this website are temporary, more complete but in progress guides can be found on <https://wiki.mvndicraft.net> -->

## Getting Started

- Upon joining the server (using a 1.21.11 or 26.3 client), the resource pack will be loaded automatically. If it does not, go back to the Multiplayer tab, edit the Mvndicraft server and set the `Server resource pack` to "Enable" or "Prompt", you may try both.
- You can locate yourself on the [live map](https://map.mvndicraft.net) with `/map show`. 
- You can use `/rtp` to teleport to a random location and hide yourself on the map with `/map hide`.
- To create a town, find a good spot and type `/town new <name>`. It will ask you to pay 1000 Ducats, the [currency](#money) of the server which can be obtained by killing animals, mining ores, and farming crops, etc.
- To check how much money you have, use `/money`. You can pay other players your money with `/money pay <name> <amount>`.
- After the town is created you can build, wage wars, or found a nation. Check the [Towny Wiki](https://github.com/TownyAdvanced/Towny/wiki/How-Towny-Works) for a full guide on Towny.
- To get weapons, armor, shields, etc; you need to type `/recipes` where you will find all custom recipes on the server. To start with, look at the cudgel, the studded mace, the shortbow.
## Summary of answers to FAQ 
- [Good to know](#good-to-know)
- [Money](#money)
- [Profession XP in short](#profession-xp-in-short)
- [Attribute XP in short](#attribute-xp-in-short)
- [I placed a BOAT and it's not moving](#i-placed-boat-and-its-not-moving)
- [How do I get MAGNETITE](#how-do-i-get-magnetite)
- [Repairing tools/weapons/armor](#repairing-toolsweaponsarmor)

### Good to know
#### Things that may be different from vanilla or other Towny servers:
- There is no `/tpa`
	- The typical towny command `/t spawn` exists
	- For long distance travel `/twp` commands exist, see [towny waypoints](./towny_waypoints.md) and [traveling to a waypoint](./towny_waypoints.md#traveling-to-a-waypoint)
- The crafting of most weapons and armor is done by someone with the [blacksmith](./professions/blacksmith.md) profession or at least with some of their involvement. As a rule of thumb, if you look in `/recipes` and the crafting table shows as a 3x4 table, that is a recipe for blacksmiths. Cast iron and steel ingots are also made by blacksmiths.
  
   Notable things that are done by blacksmiths:
	- Diamond-tier (steel) and netherite-tier (reinforced steel) tools
	- Almost any weapon besides the cudgel and shortbow
	- Medium and heavy armors
	- Siege weapons, like cannons, ballistas, trebuchets 
- Pay attention to your [equipment load](./combat.md#equip-load) and the armor you wear, it may drown you

### Money

To make money smelt, kill, fish, mine, farm crops etc.

Money gained from such actions is shown as an action bar message, which is a message above your hotbar.
### Profession XP in short

Read [professions guide](./professions/professions.md).

* [Farmer](./professions/farmer.md) gets it from farming
* [Herdsman](./professions/herdsman.md) gets it from breeding animals, killing animals, sheering sheep
* [Blacksmith](./professions/blacksmith.md) gets it from smelting (removing output from furnace), hammering metal on the anvil, hammering bloom on an anvil
* [Miner](./professions/miner.md) gets it from mining with a pickaxe (blast mining gives no XP)
* [Seaman](./professions/seaman.md) gets it from killing fish, fishing, swimming, and riding boats

In some instances XP gain is RNG-based, meaning that you may or may not get XP, or that the amount of XP gain varies randomly.

Profession XP gain is not explicitly shown anywhere, yet will update on the HUD element to the left of your hotbar: the icon represents the profession and the percentage next to it represents the percentage progress towards the next level.

The HUD element may not update immediately. If you want to check your precise incremental progress after any single action, you can use the command `/mu stats` where stats update instantly.

### Attribute XP in short 

Read the [leveling up](./combat.md#leveling-up) and [attributes](./combat.md#attributes) section of the [combat guide](./combat.md).

Attribute XP gained from slaying hostile mobs will show up in an action bar message.  

Attribute XP gained from consuming cheese or alcohol will show up as a message in chat.

You can upgrade or view your health/stamina/etc in the `/attributes` or `/stats` menu.

#### Attribute XP sources:
* [Hostile mobs](./hostile_mobs.md):
	* Rats
	* Wolves
	* Boars
	* Bears 
	* Brigands
* Eating cheese (see [herdsman](./professions/herdsman.md#cheese))
* Drinking alcohol (see [brewery](./brewery.md))
* PvP:
	* XP gain scales based off of the victim's level, more exp given for killing prestiged players 
	* there's a cooldown per person you kill 
		* there is no cooldown during a war/raid 
	* the killer gets 10% of the victims money

Passive mobs, like horses, frogs, cows don't give attribute XP, though they do give profession XP (see [herdsman](./professions/herdsman)).



### I placed boat and it's not moving

It's probably under construction do `/modifyship` while looking at it and you can see the initial construction timer, it will undock after this and be usable

### How do I get magnetite?

Magnetite is essentially reskined diamonds.
Look for them as though you were looking for diamonds in vanilla Minecraft. 

### Repairing tools/weapons/armor

With both hands holding no items, crouch and right click on an anvil. The vanilla anvil interface will show up.

Repairing costs nothing, but the vanilla limit for how many times you can work on an item still exists.

To find out what material you need to repair a particular piece of armor or tool, press `F3 + H`, which will enable you to see advanced tooltips. Then, hover over the armour/tool/weapon: if the tooltip says, for example, `iron_sword`, then logically, you repair it with iron, if the tooltip contains `leather`, you repair it with leather, if it contains `diamond`, you repair it with magnetite.

Netherite is unobtainable, thus, you cannot repair those items.