# Starting a Siege

Siege banners can only be placed on Thursdays & Fridays (UTC time), right before
bi-weekly [Battle Sessions](./battle_sessions.md).

- You **need a nation** to attack a town. It does not matter if the defending
  town has a nation, but if they do, your nation must be enemies with the
  defending town's nation before you can start the siege.
- You need to be able to annex the town to siege it. So you need to be less than
  6k blocks away. Use Pytagore to test distances if you're not sure:
  `sqrt((x1-x2)^2 + (z1-z2)^2)`.
- Your nation bank needs enough money to pay both:
  1. A declaration fee of **100 Ducats per plot claimed by the defending town**
     from your nation bank.
  2. A war chest worth **100 Ducats per plot claimed by the defending town**
     from your nation bank.
- To start the siege, go right outside the defending town's border in unclaimed
  lands and **place a non-white banner on the ground**.
- Newly established towns have 2 weeks of siege immunity
- New nations that are protected by siege immunity can forfeit the immunity by
  placing a siege on another nation, the defending nation will then get an
  additional 2 hours past the siege war declaration period for an admin to place
  a counter siege so long as that nation has not reached its siege limit for the
  session.

**Once the war chest is paid, the banner is _MOVED TO THE DEFENDING TOWN'S
SPAWN_ and the siege begins.**

- Siege weapons can be placed and destroyed in the defending town's claims, but
  other blocks cannot be placed or destroyed (by attackers).
- During battle sessions, the existing 60-second block place and destroy
  cooldown applies per player, including liquid placement and collection.
  Attackers cannot build or destroy ordinary blocks inside defending claims.
- Outside battle sessions, the besieged town's residents, its nation, allied
  nations, and any revolt-assist nation share a 30-second cooldown for placing
  solid blocks or liquids in the warzone. This allows at most 120 placements per
  hour across that defending side.
- Siege weapons only break blocks during active battle sessions to prevent
  griefing when no fights are happening.

Check with **`/sw siegeinfo`**. It tells you if this is a siege week + some more
info.

An occupied town cannot be attacked in a conquest siege by its former home
nation; it must revolt against its occupier instead.

## Siege Limits

Your nation's level sets its maximum number of active offensive sieges.
Each lost attacking conquest siege, including completed abandonment, removes one
slot for the next scheduled siege week.
Losses stack down to zero slots; administrative siege removal does not count.
The normal limit returns the following siege week unless further losses apply.
Use `/nation <name>` to see the current limit and the next week's penalty.

## Sieging a capital

Enemy **towns** can be sieged any siege week. Enemy **capitals** are locked
until you've defeated enough of their towns **in the previous siege week**.

- The defeated towns must all be from the attacking nations sieges for it to
  count towards the capital requirement. (alliance victories do not stack)

| Defending nation level | Town siege wins required     |
| :---:                  | :---:                        |
| 1–3                    | 0 (capital always siegeable) |
| 4–5                    | 1                            |
| 6                      | 2                            |
| 7+                     | 3                            |

Nation level rules can be seen in [Towny](../towny.md).
