# Bounties and Market Chunks

To place a bounty, you must provide the money upfront. The target player must also be online at the moment the bounty is created.

Paper bounties can only be accepted while standing in a [market](./markets.md) chunk. Their advantage is secrecy: fewer people are involved, and the hunted player is not notified that a bounty has been placed on them.

Bounties placed through the market GUI, which can also only be accessed in a [market](./markets.md)  chunk, are public and available for everyone to accept.

Players who finish in the weekly Top 5 bounty hunter rankings will receive an Attribute XP bonus.

## Commands

While standing in a market chunk, you can start a bounty draft with:

```mcfunction
/mt bounty create
```

Once your draft is finished, confirm and post it with:

```mcfunction
/mt bounty confirm
```

To browse the list of active bounties, you must stand in a market chunk and type:

```mcfunction
/mt bounty list
```

To check the bounties you have accepted from anywhere:

```mcfunction
/mt bounty myacceptedbounties
```

More details and additional commands will be posted on the wiki.

To create a [market](./markets.md)  chunk, your town must pay 50,000.

The market is created inside one of your town’s claimed chunks with the command:

```mcfunction
/mt market set
```
