# Combat

Mvndicraft's combat system focuses around 3 main features:

- Stamina
- Weight
- Attack/Defence Types

Each of these features will be briefly explained on this page.

## Stamina

Stamina is only active while in combat with another player. This stops you from endlessly spam jumping
during PvP, aswell as other actions, since everything you do (including sprinting) during combat depletes
your stamina.

To regenerate stamina, you need to either stand still, or walk without sprinting or jumping.

## Weight

Each armor and weapon piece has a specific weight. The more armor you wear and the more weapons
you carry, the slower you walk on foot. Weight can be read on the equipment piece's lore text, just like
every information about the equipment.
If you weigh too much (more than the max weight/equipload in `/stats` or shown on the HUD) you can't swim.

## Attack/Defence Types

When you hover over a weapon (before or after crafting it), you will notice it
mentions 4 defence types: `THRUST` , `REGULAR/NORMAL` , `STRIKE` & `SLASH`.

When you are attacked with a weapon, the only defence type that will matter is
the one of the weapon you were hit with. If you were to be hit with a
mace that deals 10 Damage in `STRIKE` , and your armor would overall provide little to no
`STRIKE` defence, you would die after two hits.

When not knowing your enemy's weapon and armor supply, it is best to wear an armor type that
protects you from any attack type EQUALLY.

## Attributes and Stats

Players have several attributes such as strength, dexterity, vitality, and endurance.
Stats can be viewed and upgraded with the `/stats` command.
It costs XP to upgrade stats and each one gives different bonuses.
Some weapons will show an attribute requirement (like strength or dexterity).
If you use a weapon without the attribute requirement you deal significantly less damage.
Each player has stats that can be see with `/mu stats`. As seen here players have a base attack of 1 (fist).
Attributes such as strength and dexterity upgrade the strength and dexterity bonus of a player.
Some weapons have strength and dexterity multipliers.

So for example a zweihander has a base damage of 12 and strength multiplier of 70% and dexterity 35%
If a player has strength bonus of 10% and dexterity bonus of 5%.
The Atk in the formula below will be `(12+1)*(1+(0.7*0.1)+(0.35*0.05))`=`14.1375`.
The Def for the formula below would be the sum of all the slash defence of whatever armor the person being attacked is wearing

## Damage Formula (Piecewise)

|                                                         Damage                                                         |                                 Condition                                 |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
|                                             \\( \text{Atk} \times 0.1 \\)                                              |           \\( \text{Atk} \leq \frac{1}{8} \times \text{Def} \\)           |
|\\( \text{Atk} \times \left(\frac{19.2}{49} \times \left(\frac{\text{Atk}}{\text{Def}} - 0.125\right)^2 + 0.1\right) \\)|\\( \frac{1}{8} \times \text{Def} < \text{Atk} \leq 1 \times \text{Def} \\)|
| \\( \text{Atk} \times \left(-\frac{0.4}{3} \times \left(\frac{\text{Atk}}{\text{Def}} - 2.5\right)^2 + 0.7\right) \\)  |    \\( 1 \times \text{Def} < \text{Atk} \leq 2.5 \times \text{Def} \\)    |
| \\( \text{Atk} \times \left(-\frac{0.8}{121} \times \left(\frac{\text{Atk}}{\text{Def}} - 8\right)^2 + 0.9\right) \\)  |     \\( 2.5 \times \text{Def} < \text{Atk} < 8 \times \text{Def} \\)      |
|                                             \\( \text{Atk} \times 0.9 \\)                                              |                \\( \text{Atk} \geq 8 \times \text{Def} \\)                |

## Attack Weight vs Deflection Level Table

| ↓ Deflection Level / → Attack Weight| NONE  | LIGHT | MEDIUM | HEAVY  |
|-------------------------------------|-------|-------|--------|--------|
| NONE                                | MEDIUM| HEAVY | HEAVY  | HEAVY  |
| LIGHT                               | NONE  | MEDIUM| HEAVY  | HEAVY  |
| MEDIUM                              | NONE  | LIGHT | MEDIUM | HEAVY  |
| HEAVY                               | NONE  | LIGHT | LIGHT  | MEDIUM |

## Crafting

Each equipment piece has a custom recipe. Use `/recipes` ingame to view all the recipes,
and click on the category your weapon falls into.
some weapons need to be assemlbed in smithing table not crafting table

## Throwing weapons

For throwing weapons like the francisca axe you can throw by holding right click
