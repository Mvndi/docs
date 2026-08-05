# Admin/Moderator commands

This help page is for mod only commands.
It does not list every single command, use the tab completion to figure which command to use exactly. when you figure out the 1st world of the command.
Be carefull when using commands, some will have no rollback.

## Always usefull

`/fhfrn` or `/flagsh forceremovenear` in long form remove all the item display and interaction entities few blocks aroudn you.
This command is usefull to remove any bugged thing as furnace, siege weapons etc.

When a player lost a horse because of a bug, you can respawn a random one with:
`/summon horse ~ ~ ~ {Tame:1,equipment:{saddle:{id:"minecraft:saddle",count:1}},drop_chances:{saddle:1}}`
Or the best possible horse in vanilla:
`/summon horse ~ ~ ~ {Tame:1,equipment:{saddle:{id:"minecraft:saddle",count:1}},drop_chances:{saddle:1},Variant:4,attributes:[{id:max_health,base:30},{id:movement_speed,base:0.337},{id:jump_strength,base:1}]}`


## Towny

`ta ...` has all the command related to Town, Nation, plots and most thing related to Towny.
To delete a town use `/ta town <town-name> delete` twice, doing it just once will make the town fall into ruins.

`swa ...` has most the command related to sieges. Some are in `ta`.

`/twp reload` is the only admin command related to Towny Waypoints

`tra ...` has all the command related to Towny Roads

`/squaremap ...` has all the command related to squaremap
`/squaremap fullrender minecraft:overworld` make the map render the whole world again.

## MvndiUtils

Most mvndi plugins have help command in `/mu`.
The most usefull one is `/mu give <player_name> <item_name> <amount (1 if not specified)>`.
Ships command are included in `/mu`.
Stats command are in `/mu debug ...`.
To give a player stats levels: `/mu debug setlevel 99 <player_name>`.
To give a player profession levels: `/mp level <player_name> <PROFESSION> <level_number> 0`.

MvndiSeasons has admin command in `/season`.

To summon a custom Mvndi mob run `/mmu summon <mob_name>`.

## Restore

`fill x1 y1 z1 x2 y2 z2 <material>` to fill a box with a material, works with air.

Land griefing can be restored, item put back in chest etc with `/co ...`.
`/co ...` also have lots of usefull commands to know how players interacted with the world.

CoreProtect miss some update and leave floating blocks when send was placed or when an admin already edited the area.
If you which to revert an area to its original state, it's better not to use `/co` but to use `/twr`.
`/twr regeneratechunk` regenerates the chunk you are in.

## Other

`/opirc disable <ITEM_MATERIAL>` can disable an item. Player won't be able to have it in their inventory.
