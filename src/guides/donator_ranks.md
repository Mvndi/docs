# Donator ranks

The [Mvndicraft store](https://store.mvndicraft.net) offers three supporter ranks: Donator, Sponsor, and Benefactor. Their in-game chat prefixes are VIP, VIP+, and VIP++ respectively.

## Quick command reference

Replace `<nickname>` with the name you want, without the angle brackets.

| Command or action | What it does | Rank |
| --- | --- | --- |
| `/skin` | Opens the cosmetic menu for the armor piece in your main hand. | Donator: helmet cosmetics. Sponsor and Benefactor: all cosmetics. Town residents can also use shared Benefactor cosmetics. |
| `/mu skin` or `/mvndiskin` | Alternative commands for the same armor cosmetic menu. | Same access as `/skin`. |
| Use an anvil's rename field | Renames an item, with optional color codes. | Donator, Sponsor, Benefactor. |
| `/nick <nickname>` | Sets your nickname, with optional color codes. | Sponsor, Benefactor. |
| `/nonick` | Removes your nickname and restores your Minecraft username as your display name. | Sponsor, Benefactor. |
| `/emojis list` | Opens a book showing the available emojis and the text to type for each one. | Sponsor and Benefactor have the chat emoji perk. |

Chat prefixes, white chat text, the chat cooldown perk, and priority queue access apply automatically. They do not need an activation command.

## Compare the ranks

| Perk | Donator | Sponsor | Benefactor |
| --- | --- | --- | --- |
| Chat prefix | VIP | VIP+ | VIP++ |
| No chat cooldown | Yes | Yes | Yes |
| White chat text | Yes | Yes | Yes |
| Helmet cosmetics | Yes | Yes | Yes |
| Item renaming, including color codes | Yes | Yes | Yes |
| Discord sneak peeks | Yes | Yes | Yes |
| Priority queue | No | Yes | Yes |
| Chat emojis | No | Yes | Yes |
| Nicknames, including color codes | No | Yes | Yes |
| All other cosmetics | No | Yes | Yes |
| Cosmetic access for other residents of your town | No | No | Yes |

## Donator (VIP)

Donator gives you the VIP chat prefix, white chat text, and no chat cooldown. It also includes helmet cosmetics, item renaming with color codes, and Discord sneak peeks.

To change a helmet's appearance, hold it in your main hand and run `/skin`. Choose an available skin in the menu. The helmet must have alternate skins; the command cannot add skins to an item that has none.

To rename an item, place it in an anvil, enter the new name in the rename field, check the preview, and take the result. For a gold name, enter `&6Kingsguard` or `<gold>Kingsguard</gold>`. See [Color codes](color_codes.md) for colors, formatting, and gradients. Item renaming uses the anvil rather than a `/rename` command.

## Sponsor (VIP+)

Sponsor includes all Donator perks, changes your prefix to VIP+, and adds priority queue access, chat emojis, nicknames with color codes, and all other cosmetics.

Use `/skin` while holding an armor piece to choose from its alternate appearances. Sponsor expands your cosmetic access beyond helmets. Some skins have an in-game ducat cost; having access to a skin does not remove that cost.

### Set or remove a nickname

Run `/nick <nickname>` to change your displayed name. For example:

```text
/nick Kingsguard
/nick &6Kingsguard
/nick <gold>Kingsguard</gold>
```

The last two examples give the nickname a gold color. Use `/nonick` to remove the nickname. See [Color codes](color_codes.md) for formatting syntax.

Nicknames must follow the server's name restrictions. If the server rejects a nickname, use the reason in its response to adjust it.

### Use chat emojis

Run `/emojis list` to open the emoji book. Find an emoji and type its listed text into your chat message. Use the spelling shown in the book; the server replaces that text with the emoji.

### Priority queue and Discord sneak peeks

Priority queue access gives you priority when joining through a queue. It requires no in-game command.

Discord sneak peeks are a Discord perk, included with all three ranks. View them in the server's Discord rather than through an in-game command.

## Benefactor (VIP++)

Benefactor includes all Sponsor perks, changes your prefix to VIP++, and gives all other residents in your town access to all cosmetics.

Town residents can hold an armor piece and run `/skin` to use the shared cosmetic access. They must belong to the same town as the Benefactor. Available appearances still depend on the armor piece, and any in-game skin costs still apply.

Town sharing covers cosmetics. It does not give other residents the VIP++ prefix, nicknames, chat emojis, priority queue, or the other personal rank perks. Shared access depends on having a Benefactor in the town; it is not a separate rank granted permanently to each resident.

Check the [store](https://store.mvndicraft.net) for current prices and purchase terms.
