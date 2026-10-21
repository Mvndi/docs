# Religion Mechanics and Town Focus

Religious heads choose up to three distinct mechanics in an ordered queue through `/religion faith mechanics`. Town mayors then choose one queued mechanic as their town's focus.

These are the default values for the [religion system](./religion.md), which is being tested before release on Survival.

## Unlocking mechanics

Each 300 followers unlocks one slot, up to three:

| Followers | Available slots |
| --- | --- |
| Under 300 | 0 |
| 300–599 | 1 |
| 600–899 | 2 |
| 900 or more | 3 |

The count includes all non-NPC residents of affiliated towns, including offline residents. The first queued mechanic uses the first slot, the second uses the second slot, and the third uses the third slot.

Religious heads can queue choices before their slots unlock. Population loss locks slots again. Staff can grant a fixed slot allowance to a smaller religion. A mechanic disabled by the server provides no benefit and does not move later choices forward in the queue.

## Changing the queue and focus

Adding a choice to an empty queue slot or removing a choice is immediate and does not start a cooldown. Replacing choices or rearranging their order normally has a seven-day cooldown. Council approval still applies to queue decisions.

Mayors choose a focus through `/religion town focus`, or directly with `/religion town focus <mechanic>`. Use the IDs in the table below. `/religion town focus none` clears it.

A town's first focus is immediate; later focus changes normally have a seven-day cooldown. Focusing a locked mechanic provides no benefit until its slot unlocks. Removing a mechanic from the religion's queue clears towns focusing it and clears their focus cooldown.

## The nine mechanics

| Mechanic | Religion benefit | Town focus |
| --- | --- | --- |
| Work ethic (`work-ethic`) | +10% attribute XP. | +20% attribute XP. |
| Holy wars (`holy-wars`) | Each affiliated nation gets one extra siege declaration against another religion every three weeks. | Sieging the focused town costs twice as much. |
| Outsider tax (`outsider-tax`) | A nation collects 1% of each outsider town's bank for the religion bank each Towny day. | If the capital focuses it, collect an additional 1% for the capital town bank. |
| Stewardship (`stewardship`) | +50 town claim capacity. | +100 town claim capacity. |
| Shipwrights (`shipwrights`) | 25% less ship construction time in towns of the builder's religion. | 50% less time when the builder lives in, and builds in, the focused town. |
| Light burden (`light-burden`) | 10% less equipment load. | 20% less equipment load. |
| Hospitality (`hospitality`) | 25% cheaper waypoint travel. | 50% cheaper waypoint travel. |
| Trade patronage (`trade-patronage`) | Each follower can have five additional active market listings. | Each resident can have ten additional listings. |
| Providence (`providence`) | Eligible earnings have a 5% chance to create matching funds in the religion bank. | The same trigger also creates an equal bonus in the resident's town bank. |

Work ethic affects attribute XP, not profession XP. Light burden reduces the load of your equipment; it leaves your load limit unchanged. Stewardship increases capacity without claiming land for you; normal claiming and upkeep costs still apply. Market listing limits are per seller across all towns, and the market menu shows your current limit.

## Holy wars

A nation's capital must follow a religion with Holy wars unlocked and active. Each nation has its own three-week cooldown. A successful declaration beyond the normal siege limit spends the allowance; declarations within the normal limit leave it available.

For a target in a nation, the defending capital's religion determines eligibility. A nationless target uses its own town's religion. The target must have a different religion; an unaffiliated target does not qualify.

Normal enemy relationships, declaration times, costs, distance restrictions, immunity, and other siege requirements still apply. Focusing Holy wars doubles both the upfront fee and war chest for attacks against that town. See [Starting a siege](../war/starting_a_siege.md#holy-wars).

## Outsider tax

The capital's religion determines which towns are outsiders. Only towns in that nation with a different religion, including unaffiliated towns, pay the tax. Towns following the capital's religion are exempt.

Without capital focus, the religion bank receives the 1% tax. With capital focus, the religion still receives its base share and the capital receives the extra share: 2% total at defaults. The combined payment is capped at 10,000 ducats per town per Towny day and cannot reduce a town bank below 1,000 ducats. Ruined and bankrupt towns are skipped.

## Providence

Providence applies to successful job earnings. Market payments, transfers, withdrawals, refunds, and Providence's own bonuses do not trigger it. The player's original earning stays intact.

For example, if you earn 8 ducats and Providence triggers, the religion receives 8 ducats. If your town focuses Providence, your town bank receives another 8 ducats. Focus changes the payout, while the trigger chance stays at 5%.
