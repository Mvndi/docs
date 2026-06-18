# Towny Roads

TownyRoads adds roads to the world that can be seen on the [dynmap](https://map.mvndicraft.net).

## Creating a road

Roads need to be created between 2 towns first.
`/tr create <town>` creates a road between your town and the one you specify.
The other town needs to accept your road invite: `/tr accept <road>`.

You then need to claim the area of the road by moving into each chunk between the 2 towns and claiming it: `/tr claim <road>`.

Once you have connected both towns and the other town has accepted to join the road, you can validate the road: `/tr validate <road>`.
If something is wrong with the road, you will have an explanation of what is wrong in chat and will be able to validate again once the road is fixed.

Until then, the road has no effect. Once the road is validated, it starts having effects.

Roads need to have a large part of them built before being validated.
Sea roads need to have some sort of port when they reach land.
If a road is claimed over a non-built area, staff will remove the road.

### Limits

Roads can't be more than 1000 chunks long.
Roads can't be longer than 3 times the distance of the shortest path between the 2 towns.

## Road effects

### Claim protection

Players who are not part of the road towns won't be able to break or build much on the road chunks. Once they have placed or broken 10 blocks, they need to wait 1 minute for each new block they want to place or break.
This makes ambushes still possible but makes major grief too time-consuming.
Chests or doors can be opened without limitation; do not use roads as an extension of a town.

Make sure to give the `comayor` or `roadbuilder` rank to your residents who are supposed to build the roads.

### Upkeep

A town connected to its capital pays 50% less upkeep.
A capital connected to other nation towns pays less upkeep, up to 50% if all nation towns are connected. It also makes the nation pay up to 50% less upkeep.

### TownyWaypoints

Soon, stables will only work if both towns are connected by roads (this does not need to be a direct connection; having several roads between both towns will work).

### RoadSpeedMounts

Horses, donkeys, mules, camels and players are faster on roads than in wilderness.
See [Horses & Mounts](./horses.md) for exact speed values.

### Bonus chunks

Each connected town provides some bonus chunks to the road.
It provides 1 chunk per town level of each town connected to the road.
Same-nation towns provide 2 times more bonus chunks.
Ally nation towns provide 1.5 times more bonus chunks.
Enemy nation towns provide 0.5 times more bonus chunks.

A town can't have more than 1000 bonus chunks from all connected towns.
A town can't have more bonus chunks than regular chunks.

## Extending a road

To extend a road, you need to create a new road between the road and the town you want to be included in the road.
They need to accept joining the road.
Then you can merge both roads with `/tr merge <road1> <road2>`. To merge 2 roads, your town needs to be part of both roads.
`<road1>` must be validated while `<road2>` doesn't need to.
By merging several new roads, you can add several towns to the road.

The final road needs to be validated once again with `/tr validate <road>`.

## Towns falling into ruins

If one of the towns of a road falls into ruins (or gets removed), the town will be removed from the road, and the part of the road that was going to that town will be removed.
When a town is removed from a valid road, it tries to validate it again once the town has been removed, but it might not work if the road does not match the requirements.
Claim or unclaim (`/tr unclaim`) new areas to validate it again.

If one of the 2 last towns of the road falls into ruins, the road will be deleted. A road going from your town to your town isn't that useful.

## Town leaving the road

When a town leaves a road, it has the same effect on the road as if the town fell into ruins.
