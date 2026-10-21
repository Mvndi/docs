# Color codes

Color codes change the color or style of text. You can use them in nicknames, anvil item names, and other Mvndi features that accept formatted text. The codes disappear from the displayed name, leaving the colored text.

There are two ways to write them: legacy codes such as `&c` and MiniMessage tags such as `<red>`. Both examples below make the word Sword red:

```text
&cSword
<red>Sword</red>
```

Copy the text inside a code box, without the box itself. Each feature controls which codes you can use and who can use them. Support for color in a nickname does not mean every chat message or text field accepts it.

## Legacy codes

Put an ampersand (`&`) and a code before the text you want to change. The code affects the text after it.

```text
&6Golden Sword
&cRed &9Blue
&6&lGolden Sword
```

These produce a gold name, two differently colored words, and a bold gold name. Put the color before the formatting: a legacy color code resets earlier formatting, so `&l&6Sword` loses the bold effect.

### Colors

| Color | Legacy | MiniMessage |
| --- | --- | --- |
| Black | `&0` | `<black>` |
| Dark blue | `&1` | `<dark_blue>` |
| Dark green | `&2` | `<dark_green>` |
| Dark aqua | `&3` | `<dark_aqua>` |
| Dark red | `&4` | `<dark_red>` |
| Dark purple | `&5` | `<dark_purple>` |
| Gold | `&6` | `<gold>` |
| Gray | `&7` | `<gray>` |
| Dark gray | `&8` | `<dark_gray>` |
| Blue | `&9` | `<blue>` |
| Green | `&a` | `<green>` |
| Aqua | `&b` | `<aqua>` |
| Red | `&c` | `<red>` |
| Light purple | `&d` | `<light_purple>` |
| Yellow | `&e` | `<yellow>` |
| White | `&f` | `<white>` |

### Formatting

| Effect | Legacy | MiniMessage |
| --- | --- | --- |
| Bold | `&l` | `<bold>` |
| Italic | `&o` | `<italic>` |
| Underlined | `&n` | `<underlined>` |
| Strikethrough | `&m` | `<strikethrough>` |
| Scrambled characters | `&k` | `<obfuscated>` |
| Reset color and formatting | `&r` | `<reset>` |

For example, `&cRed&r Normal` resets the style before Normal. Reset returns to the feature's default appearance.

## MiniMessage

MiniMessage uses tags inside angle brackets. An opening tag starts an effect; a closing tag with `/` ends it.

```text
<gold>Golden Sword</gold>
<red>Red</red> <blue>Blue</blue>
<gold><bold>Golden Sword</bold></gold>
```

When you put tags inside other tags, close the inner tag first. In the last example, close `</bold>` before `</gold>`. Closing a tag returns to the surrounding style.

### Custom colors

For a custom color, use a six-digit hex color after `#`. For example, `#55ffff` is aqua:

```text
<#55ffff>Sword</#55ffff>
```

Anvil names also accept the legacy hex form `&#55ffffSword`.

### Gradients and rainbow text

A gradient changes color across the letters. Put the starting and ending colors in the opening tag:

```text
<gradient:gold:red>Sword</gradient>
<rainbow>Sword</rainbow>
```

The first example fades from gold to red. The second uses rainbow colors. These effects work in anvil names; other features may allow a smaller set of tags.

## Renaming an item in an anvil

If you have access to item renaming and colored names, put the item in an anvil and enter a formatted name in the rename field. Check the result preview, then take the item.

```text
&6&lKingsguard
<gold><bold>Kingsguard</bold></gold>
```

Both examples give the item a bold gold name. New anvil names have no default italic effect. Add `&o` or `<italic>` if you want italics.

Anvil names support colors and formatting only. Clickable links, click commands, hover text, and other actions are unavailable. Without access to colored names, codes remain visible as ordinary text.

## If the codes stay visible

Check that you typed the code exactly, including `&` or the angle brackets. Use underscores in names such as `<dark_red>`. Try a simple example like `&cSword` or `<red>Sword</red>` first.

If that still shows the codes, the feature may not accept that format, or you may not have access to colored text there. Keep each name in one format while learning; mixing legacy resets with MiniMessage tags can make the result harder to follow.

The [MiniMessage format reference](https://docs.papermc.io/adventure/minimessage/format/) explains the syntax in more detail. It also lists tags that Mvndi features may disable.
