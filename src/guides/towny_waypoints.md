# Towny Waypoints

Waypoints are the only feature that allow for instant public travel on Mvndicraft
There are two types of Waypoints: **sea ports** and **stables**.
Each town has access to creating one port and one stable. Stables can only be created in vegetated land biomes, while sea ports can only be created in an ocean biome.

## Commands

### Creating a Waypoint

1. Go to a claimed plot and type `/plot set <stable|sea_port>`. A stable costs 4.5k Ducats, while a seaport costs 2.5k Ducats. This Ducats need to be in the player bank account (not town or nation bank).
2. Build a structure and set your spawn using `/twp set spawn` while standing in the desired location.
3. Set a custom waypoint name using `/plot set name <name>`.
4. Choose who can travel to your waypoint using `/twp set open <all|allies|nation|town|none>`.

Only mayors and comayors can create waypoints.

### Traveling to a Waypoint

1. Go to a nearby waypoint plot.
2. Find a nearby waypoint of the same type.
3. Type `/twp travel <town-name> <stable|sea_port> <waypoint-name>`.

It costs 450 ducats to travel to a stable and 200 ducats to travel to a port (50% of this goes to the waypoint towns bank and the other 50% to the waypoints nations bank).

NOTE: You can only travel to waypoints that are 1000 blocks near the current one you are standing on.
