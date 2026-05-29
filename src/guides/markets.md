# Market Guide

To create a market chunk, your town must pay 50,000.

The market must be placed inside one of your town's claimed chunks with:

```mcfunction
/mt market set
```

Each town can only have 1 market chunk.

You must stand inside a market chunk to browse listings, sell items, and make offers.

## Selling Items

Hold the item you want to sell in your main hand, then use:

```mcfunction
/mt market sell <price>
```

Rules for listings:

- Prices must be between 1 and 1,000,000 ducats.
- Each player can have up to 5 active listings at once.
- Listings last 48 hours.
- When you list an item, it is removed from your hand and stored in the market until it is sold, cancelled, or expires.

To view and manage your own listings:

**The market you are in when you sell an item is the market a player has to stand in if they want to buy it.**

```mcfunction
/mt market mylistings
```

From that menu, you can cancel your own listings and get the item back if you have space in your inventory.

## Browsing and Buying

While standing in any market chunk, you can browse another player's active listings with:

```mcfunction
/mt market browse <player>
```

Inside the market GUI:

- Click the lime wool button to buy a listing instantly for its full price.
- You need enough ducats and enough empty inventory space to receive the item.
- You can only buy an item if you're standing in the same market chunk the item was put to sell in (you can browse all listings in any market)

## Making Offers

If you do not want to pay the full listed price, you can send an offer instead.

First, while browsing a player's market, click the blue wool button on the listing you want.

Then send the offer with:

```mcfunction
/mt market offer <amount>
```

Offer rules:

- You must be in a market chunk to send the offer command.
- Offers must also be between 1 and 1,000,000 ducats.
- You cannot make an offer on your own listing.
- If you send another offer on the same listing, your previous pending offer is replaced.

To view offers you have sent:

```mcfunction
/mt market outgoingoffers
```

From there, you can retract your pending offers.

## Receiving Offers

When somebody makes an offer on one of your listings, you will be notified in chat.

To review offers on your own items:

```mcfunction
/mt market incomingoffers
```

From that menu, you can:

- Accept the offer
- Decline the offer

If you accept an offer:

- The buyer must be online
- The buyer must still have enough ducats
- The buyer must have enough inventory space for the item

If any of those are not true, the sale will not go through.

## Important Notes

- `/mt market browse`, `/mt market sell`, and `/mt market offer` require you to be inside a market chunk.
- `/mt market mylistings`, `/mt market incomingoffers`, and `/mt market outgoingoffers` can be used from anywhere.
- Expired listings are only auto-returned if you are online and have room in your inventory.
- If a listing expires and your inventory is full, the item is lost.
