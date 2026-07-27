# Towny Waypoints

Waypoints are the only feature that allow for instant public travel on Mvndicraft
There is 2 type of waypoint and it is the **stable** & the **seaport**
Each town has access to creating 3 stables and 3 seaports. Stables can only be created in land biomes. Ports can only be created in ocean biomes, beach biomes and island biomes.

## Commands

### Creating a Waypoint

1. Go to a claimed plot and type `/plot set <stable/seaport>`. A stable or a seaport costs 4.5k Ducats. This Ducats need to be in the player bank account (not town or nation bank).
2. Build a structure and set your spawn using `/twp set spawn` while standing in the desired location.
3. Set a custom waypoint name using `/plot set name <name>`. This is optional.
4. Choose who can travel to your waypoint using `/twp set open <all|non_enemies|neutral|allies|nation|town|none>`. By default `non_enemies`, everyone exept the enemies can tp. This is optional.

Only mayors and comayors can create waypoints.

### Traveling to a Waypoint

1. Go to a nearby waypoint plot.
2. Find a nearby waypoint of the same type connected by [road](./towny_roads.md).
3. Type `/twp travel <town-name> <stable> <waypoint-name>`.

It costs 450 ducats to travel to a stable/seaport (50% of this goes to the waypoint towns bank and the other 50% to the waypoints nations bank).

## Extra Information

You can only travel to waypoints that are near the current one you are standing on.
Max travel distance are:
- 6000 for stables
- 8000 for seaports

You can travel to a stable with your mounts (horse, camel etc).

Each travel has a few minutes cooldown. Stable have a short cooldown if connected to more roads directly.