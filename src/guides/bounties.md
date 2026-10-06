# Bounties

Bounties put a reward in ducats on a player's head. Contributions from multiple
players combine into one reward. A hunter takes the contract, pays a wager, and
receives a wanted poster to carry while hunting.

## Post a bounty

Stand in a [market](./markets.md) chunk and type:

```mcfunction
/bounty set <player> <amount>
```

The target can be offline, but their name must be known to the server. You cannot
post a bounty on yourself. You need the full amount upfront; it is deducted when
you click **[Confirm]** in chat. The confirmation expires after 60 seconds, and
you must still be in a market chunk when you confirm. Confirmed contributions
cannot be cancelled by the player who posted them.

The minimum contribution is 5,000 ducats and the maximum is 1,000,000 ducats.
You can have active bounties on up to 5 different targets at once.
Use the same command to add money to an existing bounty, including one whose
contract has already been taken. You can still add money to those targets when
you have reached the limit.

An online target is notified when money is added to their bounty. Wanted players
also receive a reminder when they join. Contributions of at least 1,000 ducats
trigger a public announcement by default.

## Browse and take a contract

Open the Wanted board from anywhere:

```mcfunction
/bounty
```

You can also use `/bounties` or `/wanted`. The board lists targets by reward and
shows their town, online status, expiry, and whether a hunter has taken the
contract. The **My bounties** filter shows targets you have contributed money to.

- Left-click a target, then click **[Confirm]** in chat to take an available
  contract, just like confirming a market purchase.
- Right-click a target to start adding money to their reward. Posting still
  requires a market chunk.

Taking a contract requires a free inventory slot and enough money for the wager.
The wager is currently 5% of the reward when you accept, and the contract lasts
7 hours. Only one hunter can take a target's
contract from the board at a time. The target is notified if they are online.

You cannot take or claim a contract on yourself, on someone in your town or
nation, or on someone in an allied nation. You also cannot take or claim a bounty
you have contributed money to. A hunter whose failed wager has joined the reward
cannot take or claim that bounty again while that contribution remains.

## Hunt with the wanted poster

Kill the target while carrying their valid wanted poster in your inventory to
claim the remaining reward plus the wager. You receive the money and a trophy
head, the poster is removed, and the claim is announced publicly. Killing a
target without their poster, or while ineligible to claim, leaves the bounty up.

Wanted posters can be transferred or stolen. An eligible player who gets the
poster can claim the reward, including the original hunter's wager. Transferring
the poster does not restart the contract timer. Posters cannot be copied through
crafting or a cartography table.

If the target gets their own valid poster, they can right-click while holding it
to tear it up. This ends the bounty, refunds the remaining contributions in full,
and pays the active hunter's wager to the target.

If the contract runs out, the hunter's wager joins the reward and the contract
becomes available on the board again. The old poster becomes invalid; the next
hunter receives a new one.

## Expiry and refunds

Each contribution expires separately, 72 hours after it was posted by default.
Adding money does not extend earlier contributions. A failed hunter's wager also
gets its own expiry when it joins the reward. The board shows the latest expiry
for the target, so parts of the reward can expire sooner.

When a contribution expires unclaimed, its contributor receives a full refund if
the contract was never taken. If a hunter has taken the contract at any point,
the default expiry fee is 20%, leaving an 80% refund. If all contributions expire
before an active contract ends, that
hunter's wager is returned in full and the poster becomes invalid.

## Hunter rankings

Use `/bounty top` to see the top 10 hunters by total claims, with total ducats
earned breaking ties. Weekly rankings count distinct targets claimed over the
last 7 days, with total claims breaking ties.

Players who finish in the weekly Top 5 bounty hunter rankings will receive an Attribute XP bonus.

## Market chunks

To create a [market](./markets.md)  chunk, your town must pay 10,000.

The market is created inside one of your town’s claimed chunks with the command:

```mcfunction
/market set
```
