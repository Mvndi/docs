# Boats

<video controls src="https://github.com/Mvndi/docs/raw/refs/heads/main/src/assets/video/boats.mp4" title="Boats"></video>

## Building Boats

uhhh something something drydock idk uhhh specific towny plot and profession or something maybe we dont know yet

Boats can be repaired with the repair patch item in /recipes.
Boats a miniscule amount of damage when sailing and need to be repaired after (weeks of) sailing.
Some boats are not meant for deep oceans and will take a large amount of damage when sailing in deep oceans and will sink eventually unless the boat returns to coastal waters.

### Interactive Entities (Press `F3+B` to see hitboxes)

- **Anchor**  
  - **Function**: Controls whether the boat is docked or undocked.
  - **Docking**: If the boat is undocked, interacting with the anchor will dock it, but only if:
    - The boat is aligned within 5 degrees of a cardinal axis (-180, -90, 0, 90, 180).
    - All sails (if present) are fully stowed.
    - The boat is stationary.
    - There is enough room (empty/water blocks) to dock.
  - **Undocking**: If the boat is docked, interacting with the anchor will undock it, allowing movement.

- **Inventory**  
  - **Access**: Only interactable when the boat is docked.
  - **Function**: Opens a chest interface with multiple pages (if available).
    - If a player has a horse (or donkey/mule) on a lead and there’s an empty page, interacting with the inventory stores the horse, locking that page from being used as a chest.
    - If all pages contain horses, nothing will happen when interacting while not sneaking.
    - Sneaking while interacting removes the first horse found, freeing the page for chest use.  
  - **Destruction**: If the boat is sunk, chests containing the inventory’s contents spawn on the seafloor.

- **Sail**  
  - **Function**: Controls boat speed via sail positioning.
  - **Interactions**:
    - **Left-click**: Lowers the sails (increases speed).
    - **Right-click**: Raises the sails (reduces speed or stows them).
  - **States**: Sails can be fully stowed (no movement), half (partial speed), or full (maximum speed contribution).

- **Seat**  
  - **Types**:  
    - **Controller Seat**: Located near the rudder (usually at the back), this seat allows the player to steer the boat using standard movement keys (e.g., A/D for left/right).
    - **Rowing Seats**: Found on rowing boats, these contribute to the boat’s speed based on the number of occupied seats and the boat’s rowing factor.
    - **Drumming**: If the ship has the drum upgrade installed and the seat for the drum is occupied, if the person in the controller seat presses the sprint key (ctrl) the boat will activate a speed boost that takes 20 seconds to reach it peak 2x multiplier which lasts for 10 seconds, this ability has a 10 minute cool down.
    - **Bells**: If the ship has the bells upgrade installed and the seat for the bells is occupied, if the person in the controller seat presses the jump key (space) the boat will activate a 10 second triple turning-speed boost, this ability has a 10 minute cool down.
  - **Rowing Mechanics**:
    - The rowing factor determines the percentage of max speed achievable through rowing alone (e.g., a 60% rowing factor means 60% max speed with all rowing seats filled and sails stowed).
    - Full sails with all rowing seats filled achieve 100% max speed. Partial rowing seat occupancy scales speed accordingly (e.g., half rowing seats + full sails = 70% max speed for a 60% rowing factor boat).  
    - Holding the backward key (`S` default) in the controller seat cancels all rowing allowing a rowing ship to come to a stop (if any sails are stowed).
    - Holding the backward key and the spring key (`CTRL+S` default) in the controller seat starts to gradually make the ship go backwards (if any sails are stowed), the maximum speed a ship can go backwards is 20% of it's maxiumum speed times it's rowing factor.

- **Siege Weapon Slot**  
  - **Function**: When the boat is docked, specific siege weapons (e.g., ballista for cogs, galleys, and dromons; Greek fire for galleys) can be installed.
  - **Operation**: A dedicated seat next to the slot allows a player to control the weapon.

- **Shield Slot**  
  - **Function**: When the boat is docked, shields can be installed.
  - **Damage Reduction**: Whenever a ship takes damage, the damage is divided by `1 + 0.15 * shields_percentage` where shields_percentage is how many shields are installed divided by how many shields slots a ship has.

### Movement and Physics

- **Docked State**: Players can walk on the boat through barrier blocks that spawn, and it remains stationary.
- **Undocked State**:
  - Players pass through the boat (no walking on it).
  - The boat only collides with the world (blocks) and other boats.
- **Ramming**:  
  - When one boat collides with another, the boat with higher speed is the “rammer.”
  - The rammed boat takes significant damage; the rammer takes less damage.
  - Boats with a ram upgrade deal increased damage to the rammed boat and take even less damage themselves.
- **Foliage Interaction**: Boats break foliage like kelp and leaves when moving through them.

### Combat and Damage

- **Damage Sources**:
  - **Ramming**: As described above.  
  - **Siege Weapons**: Both land-based and ship-based siege weapons can damage boats.
  - **Greek Fire**: Creates fire on the water’s surface. Boat parts passing through fire take damage, and passengers in nearby seats catch fire and take damage.
- **Destruction**:  
  - Damage is visually represented by the model looking more destroyed or normal.
  - When fully destroyed, the boat sinks, and any inventory contents spawn as chests on the seafloor.

### Alignment and Navigation

- **Chunk Alignment**: Boats must be aligned with chunk boundaries for docking. Use `F3` to check coordinates.  
- **Turning**: Boats have slow turning mechanics, so plan your direction early to avoid long turnarounds.
- **Speed Control**:
  - Adjust sails (full, half, or stowed) to control speed.
  - Rowing boats rely on occupied rowing seats and the rowing factor for speed, with sails providing additional speed.
