# Starting a Siege

Siege banners can only be placed on Thursdays & Fridays (UTC time), right before bi-weekly [Battle Sessions](./battle_sessions.md).

- You **need a nation** to attack a town. It does not matter if the defending town has a nation, but if they do, your nation must be enemies with the defending town's nation before you can start the siege.
- You need to be able to annex the town to siege it. So you need to be less than 6k blocks away. Use Pytagore to test distances if you're not sure: `sqrt((x1-x2)^2 + (z1-z2)^2)`.
- Your nation bank needs enough money to pay both:
  1. A declaration fee of **100 Ducats per plot claimed by the defending town** from your nation bank.
  2. A war chest worth **100 Ducats per plot claimed by the defending town** from your nation bank.
- To start the siege, go right outside the defending town's border in unclaimed lands and **place a non-white banner on the ground**.

**Once the war chest is paid, the banner is _MOVED TO THE DEFENDING TOWN'S SPAWN_ and the siege begins.**

- Siege weapons can be placed and destroyed in the defending town's claims, but other blocks cannot be placed or destroyed (by attackers).
- Defenders have a 60-second block place and destroy cooldown, which also applies to attackers in the surrounding wilderness chunks of the defending town (attackers cannot build/destroy inside the defending town; only siege weapons can break blocks in the defending town).
- Siege weapons only break blocks during active battle sessions to prevent griefing when no fights are happening.

Check with **`/sw siegeinfo`**. It tells you if this is a siege week + some more info. 

## Sieging a capital

Enemy **towns** can be sieged any siege week. Enemy **capitals** are locked until you've defeated enough of their towns **in the previous siege week**.

| Defending nation level | Town siege wins required |
| Their nation level | Town wins needed |
|:---:|:---:|
| 1–3 | 0 (capital always siegeable) |
| 4–5 | 1 |
| 6 | 2 |
| 7+ | 3 |

Nation level rules can be seen in [Towny](../towny.md).