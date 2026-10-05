# Market Guide

## Market chunks

To create a market chunk, your town must pay 10,000 for each market chunk. Stand in one of your town's claimed chunks and use:

```mcfunction
/market set
```

Each town can have 5 market chunks. Browsing works from anywhere. Selling requires a market chunk in your own town; buying locally also requires a market chunk in the listing town.

The mayor can remove a market chunk and refund its purchase cost to the town with:

```mcfunction
/market remove
```

## Browsing and buying

Open a town's market with:

```mcfunction
/market <town>
```

Town names autocomplete for towns with items for sale. If you use `/market` without a town name while standing in a market chunk, it opens that town's market. Elsewhere, it opens the town directory, where you can select a market.

Click an item, then click `[Confirm]` in chat to buy it at the listed price. The confirmation expires after one minute. You need enough ducats, and the payment goes directly to the seller, even if they are offline. You can browse every town's listings, but where you stand determines which purchases are available:

- For remote buying, stand in a claimed chunk of a town connected to the listing town through the [road network](./towny_roads.md). You do not need to belong to the town you are standing in.
- Connections can pass through several towns. Only valid, unblocked routes count. Sharing a nation or an alliance does not establish a route by itself.
- To buy from a disconnected town, visit one of that town's market chunks and buy locally.
- You cannot buy from wilderness or buy your own listings.

The route and your location are checked again when you confirm. If a route closes before confirmation, no payment is taken; reopen the listing after reaching a valid purchase location. Successful purchases deliver immediately, so a later route closure does not affect items you have already bought.

The purchased item goes into your inventory. If there is not enough room, the remainder drops at your feet, so make space before buying.

## Selling items

Stand in a market chunk belonging to your own town, hold the item or stack in your main hand, and use:

```mcfunction
/market sell <price>
```

The price is for the entire held stack, not each item. Prices must be between 1 and 1,000,000 ducats. Listing removes the stack from your hand and places it in that town's market, with you recorded as the seller.

## Taking items back

Click your own listing to take it off the market and receive the item. The `My items` button shows your listings across all towns and can be used from anywhere. Returned items also drop at your feet if your inventory is full.

Leaving a town keeps your items listed in its market. You still receive payment when they sell and can still take them back.

If the town is deleted, its listings are returned to their sellers. Online sellers receive them immediately; offline sellers receive them on their next login.
