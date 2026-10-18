# Siege Camps

Siege camps provide a temporary base for the attacking nation & a temporary
teleport destination for the attacking nation. While the siege camp is active,
defenders can also use the `/sc tp` command to teleport to the defending town.

Siege camps can also be placed during revolt sieges. The occupying nation is the
attacker and can place a camp under the usual rules. The rebels and their
assisting nation are defenders and cannot place a camp for their side.

- **Setup**: On Thursdays & Fridays (UTC time), when wars are declared,
  attackers may set up a siege camp after the siege has started by placing a bed
  in the desired unclaimed chunk. The attacking nation pays 10,000 ducats from
  its bank. The camp grants a temporary one-chunk claim to the attacking
  nation's capital town and lasts up to 96 hours from placement unless captured.
- **Location**: A camp attaches to the closest eligible besieged town. The siege
  camp must be placed more than 2 chunks away from the defending town’s borders
  but no farther than 16 chunks.
- **Features**: The siege camp has a fake beacon visible to
  players in the siege zone. Particles display a 4-block radius around the
  bed to indicate the capture area. Allies and members of the attacking
  nation can access the siege camp and teleport to it using command `/sc tp
  <town besieged>` (assuming it's not an active battle session), with a
  10-second cooldown between teleports. During an active battle session, siege
  weapons can be used to destroy blocks in the claimed siege camp chunk.
  Defending allies and nation members can also `/sc tp <town besieged>` to
  teleport to the town spawn (not the siege camp) of the besieged town.
- **Respawn**: On death, attackers respawn at the nearest permitted siege camp.
  If the player’s town is closer than the siege camp, they will respawn at their
  town instead. Only happens during active battle session
- **Capture**: Soldiers on the defending side, including the defending nation's
  soldiers and allied soldiers, can capture the siege camp by staying alive
  within 4 blocks of its bed for 60 seconds. Leaving that range resets your
  progress. If the camp is captured, it is removed, and attackers
  can no longer reclaim it for that siege. Siege camps can only be captured
  during active battle session.
  - Capturing a siege camp does **NOT** cancel a siege, it just means the
    attackers don't spawn at the camp and can't `/sc tp` to the camp anymore,
    and can't place another. Defenders also cannot `/sc tp` to the besieged town
    if there's no camp.
- **Post-Siege**: If the attacking nation captures the defending town, the siege
  camp remains until its timer expires, and defenders can no longer capture it.
  This allows attackers to travel to the captured town for roleplay purposes.

## Camps and Holy wars

[Holy wars](../religion/mechanics.md#holy-wars) provides an extra siege declaration;
it does not provide a free camp or increase the time a camp lasts. Camp placement
still costs 10,000 ducats and happens after the siege begins. Camps are separate
from SiegeWar's siege assemblies, which are disabled on Mvndicraft.

Saturday battle sessions can proceed without a camp. Before a Sunday battle
session starts, an attacking side needs a standing camp or its siege ends as a
defender victory. Capturing a camp during a session does not immediately end
that siege.

## Admin Commands

- `/swa siege <town> start conquest <nation>` starts an individual conquest siege.
- `/swa siege <town> start revolt` starts a revolt siege.
- `/sc admin place <town>` places a camp for that siege where the admin stands.
- `/sc setspawn <town>` moves an existing camp's spawn to the admin's position.

`/swa battlesession start` starts a battle session, rather than an individual siege.
