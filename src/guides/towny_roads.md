# Towny Roads

TownyRoads add roads to the world that can be seen in the [dynmap](https://map.mvndicraft.net).

## Creating a road

Roads need to be created between 2 town first.
`/tr create <town>` create a town between your town and the one you specify.
The other town need to accept your road invite: `/tr accept <road>`.

You then need to claim the area of the road by moving in each chunk between the 2 towns and then claim it: `/tr claim <road>`.

Once you have connected both town and the other town have accepted to join the town, you can validate the road `/tr validate <road>`.
If something is wrong with the road, you will have an explanation of what is wrong in chat and will be able to validate again once the road is fixed.

Until then the road had no effect, once the road is validated, it start having effects.

Roads need to have a large part of it builded before being validated.
Sea roads need to have some sort of ports when it reach land.
If a road is claimed over a non builded area, staff will remove the road.

### Limits

Roads can't be more than 1000 chunk long.
Roads can't be longer than 3 times the distance of the shortest path between the 2 towns.

## Roads effects

### Claim protection

The player that are not part of the road towns won't be able to break or build much on the road chunks. Once they have placed or break 10 blocks, they need to wait 1 minutes for each new blocks they want to place or to break.
This make ambush still possible but make major grief to time consuming.
Chest or doors can be open without limitation, do not use roads as an extension of a town.

Make sure to give `comayor` or `roadbuilder` rank to your resident that are supposed to build the roads.

### Upkeep

A town connected to it's captial pay 50% upkeep less.
A capital connected to other nation towns pay less upkeep, up to 50% if all nation towns are connected. It also make the nation pay up to 50% less upkeep.

### TownyWaypoints

Soon stable will only work if both towns are connected by roads (Does not need a direct connection, having several roads between both town will work).

### RoadSpeedMounts

Horse, donkey, mule, camel and player are faster on roads than in wilderness.
Mounts are 60% faster on supicious gravel in roads & in towns (30% in wilderness). And 20% faster on gravel in roads & in towns (10% in wilderness).
Player is 10% faster on gravel & supicious gravel in roads & in towns (0% in wilderness).

### Bonus chunks

Each connected town provide some bonus chunk to the road.
It provide 1 chunks per town level of each town connected to the road.
Same nation towns provide 2 times more bonus chunks.
Ally nation towns provide 1.5 times more bonus chunks.
Enemy nation towns provide 0.5 times more bonus chunks.

A town can't have more than 1000 bonus chunks from all connected towns.
A town can't have more bonus chunks than regular chunks.

## Extending a road

To extend a road, you need to create a new road between the road and the town you want to be included in the road.
They need to accept to join the road.
Then you can merge both roads with `/tr merge <road1> <road2>`. To merge 2 roads, your town need to be part of both roads.
By merging several new roads, you can add several towns to the road.

The final road need to be validated once again with `/tr validate <road>`

## Town fall into ruins

If one of the town of a road fall into ruins (or get removed), the town will be removed from the road & the part of the road that was going to that town will be removed.
When a town is removed from a valid road, it try to validate it again once the town have been removed, but it might not work if the road does not match the requirements.
Claim or unclaim (`/tr unclaim`) new area to validate it again.

If one of the 2 last town of the road fall into ruins, the road will be deleted. A road going from your town to your town isn't that usefull.

## Town leaving the road

When a town leave a road, it has the same effect on the road as if the town fall into ruins.
