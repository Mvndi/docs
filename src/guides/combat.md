# Combat

Mvndicraft's combat system focuses around 4 main features:

- Crafting
- Stamina
- Weight
- Attack/Defence Types

Each of these features will be briefly explained on this page.

## Attribute Requirements

Some weapons will show an attribute requirement (like strength or dexterity).
If you use a weapon without the attribute requirement you deal significantly less damage
You can check your attributes in /stats

## Defence Types

When you hover over a weapon (before or after crafting it), you will notice it
mentions 4 defence types: `THRUST` , `REGULAR/NORMAL` , `STRIKE` & `SLASH`.

When you are attacked with a weapon, the only defence type that will matter is
the one of the weapon used (attack types are the same). If you were to be hit with a
mace that deals 10 Damage in `STRIKE` , and your armor would overall provide little to no
`STRIKE` defence, you would die after two hits. A player starts with 5 hearts and raise it in `/stats`.

When not knowing your enemy's weapon and armor supply, it is best to wear an armor type that
protects you from any attack type EQUALLY.

## Weight

Each armor and weapon piece has a specific weight. The more armor you wear and the more weapons
you carry, the slower you walk on foot. Weight can be read on the equipment piece's lore text, just like
every information about the equipment.
If you weigh too much (more than the max weight/equipload in `/stats` or shown on the HUD) you can't swim.

## Stamina

Stamina is only active while in combat with another player. This stops you from endlessly spam jumping
during PvP, aswell as other actions, since everything you do (including sprinting) during combat depletes
your stamina.

To regenerate stamina, you need to either stand still, or walk without sprinting or jumping.

## Crafting

Each equipment piece has a custom recipe. Use `/recipes` ingame to view all the recipes,
and click on the category your weapon falls into.
some weapons need to be assemlbed in smithing table not crafting table

## Throwing weapons

For throwing weapons like the francisca axe you can throw by holding right click

## Defense

![defense](https://files.catbox.moe/tkqi0t.png)

## Damage Formula (Piecewise)

1. **If Attack (Atk) ≤ 1/8 × Defense (Def)**:  
   `DMG = Atk × 0.1`

2. **If Attack (Atk) ≤ 1 × Defense (Def)**:  
   `DMG = Atk × ((19.2 / 49) × ((Atk / Def) - 0.125)^2 + 0.1)`

3. **If Attack (Atk) ≤ 2.5 × Defense (Def)**:  
   `DMG = Atk × ((-0.4 / 3) × ((Atk / Def) - 2.5)^2 + 0.7)`

4. **If Attack (Atk) < 8 × Defense (Def)**:  
   `DMG = Atk × ((-0.8 / 121) × ((Atk / Def) - 8)^2 + 0.9)`

5. **If Attack (Atk) ≥ 8 × Defense (Def)**:  
   `DMG = Atk × 0.9`

## Attack Weight vs Deflection Level Table

```txt
| ↓ Deflection Level / → Attack Weight| NONE  | LIGHT | MEDIUM | HEAVY  |
|-------------------------------------|-------|-------|--------|--------|
| NONE                                | MEDIUM| HEAVY | HEAVY  | HEAVY  |
| LIGHT                               | NONE  | MEDIUM| HEAVY  | HEAVY  |
| MEDIUM                              | NONE  | LIGHT | MEDIUM | HEAVY  |
| HEAVY                               | NONE  | LIGHT | LIGHT  | MEDIUM |
```
