# Combat

Mvndicraft's combat is very much different than that of vanilla Minecraft. There are many facets to it, and as such it has been broken down into different sections.

## Quick Navigation
* [Commands](#commands)
* [Leveling Up](#leveling-up)
    * [Experience Points](#experience-points)
    * [Respec](#respec)
[Attributes](#attributes)
    * [Vitality](#vitality)
    * [Endurance](#endurance)
        * [Stamina](#stamina)
        * [Equip Load](#equip-load)
    * [Strength and Dexterity](#strength-and-dexterity)
* [Attack Effects](#attack-effects)
* [Attack Modes](#attack-modes)
* [Attack Range](#attack-range)
* [Attack Speed](#attack-speed)
* [Damage Types](#damage-types)
* [Attack Weight and Deflection Level](#attack-weight-and-deflection-level)
* [Poise](#poise)
* [Ranged Combat](#ranged-combat)
* [Mounted Combat](#mounted-combat)
* [Damage Formula](#damage-formula)

## Commands:
* `/stats` or `/attributes` opens the GUI to allow the player to view and modify their stats.
* `/mu stats` view player stats.
* `/mu spec` allocate attribute points.
* `/mu respec` reallocate attribute points.

Running `/mu spec` and `/mu respec` without any additional arguments, show the player how to use the command.

## Leveling Up
When the player gains enough experience points they will gain a level and an [attribute](#attributes) point. The player can spend their available attribute by using the GUI or `/mu spec`.

* Spend available points: `/mu spec <attribute> [amount]`.
* Check the spec status: `/mu spec status`
* Confirm changes: `/mu spec confirm`
* Cancel changes: `/mu spec cancel`

### Experience Points
Combat experience points are gained by killing hostile mobs.
* Bandits
* Bears
* Boars
* Rats
* Wolves

### Respec
If the player is not satisfied with their attributes, they can reallocate them by using the GUI or `/mu respec`. In order to respec, the player must gain enough combat experience in order to satisfy the respec experience requirement. The amount of combat experience points in order to reallocate their attributes can be checked with the GUI or `/mu stats`.

* Reallocate attribute points: `/mu respec <attribute> [+-amount]`.
    * Example: `/mu respec vitality -1` will remove one point from vitality and it will become an availale point.
        * The player can then spec this point into another attribute. i.e. `/mu respec dexterity 1` 
* Check the respec status: `/mu respec status`
* Confirm changes: `/mu respec confirm`
    * Once changes have been confirmed, respec experience will be reset to 0.
* Cancel changes: `/mu respec cancel`

## Attributes

The player has four main **Attributes**:
* **Vitality**
* **Endurance**
* **Strength**
* **Dexterity**

Each of these attributes affects the value of the player's stats. When the player levels up and gains an attribute point, it can be spent on an attribute. The player starts at 1 point in each attribute. Attributes have a maximum of 99.

## Vitality
Spending attribute points on vitality increases the player's maximum health stat.

### Health
The player starts with 40HP, and each point increases their health by 0.5 points up to a maximum of 89HP at 99 Vitality.

## Endurance
Spending attribute points on endurance increases the player's maximum stamina and equip load stats.

### Stamina
Stamina is activated in combat. It is the orange bar above the hunger meter.

The player starts with 20 Stamina, and each point increases their stamina by 0.6 points up to a maximum of 80 Stamina at 99 Endurance.

The following actions consume stamina:
* Melee attacks
    * The player's [attack cooldown](https://minecraft.wiki/w/Melee_attack#Attack_cooldown) affects how much stamina is consumed.
* Ranged weapon attacks (i.e, Short Bow and Longbow)
    * How long the player pulls charges a ranged weapon can affect how much stamina is consumed.
    * Weapons like crossbows and firearms do not consume stamina.
* Throwing weapons
    * The player's [attack cooldown](https://minecraft.wiki/w/Melee_attack#Attack_cooldown) affects how much stamina is consumed.
* Blocking an attack
* Sprinting
* Sprint jumping
* Swimming

Stamina regenerates at a fixed rate however some actions or equipment can reduce the rate at which stamina regenerates.
* Holding up a shield to block an attack.
* Drawing a bow. (i.e. Short Bow and Longbow)
* Climbing (i.e ladders and vines)
* Being over-encumbered (See [Equip Load](#equip-load))
* Wearing heavier pieces of armor.

Jumping normally without sprinting does not consume stamina, however it pauses stamina regeneration until the player touches the ground again. Simply walking off ledges does not do this.

When stamina is depleted there are some things to note.
* If the player depletes their stamina by sprinting, sprint jumping or swimming the player must wait longer than normal before their stamina starts to regenerate.
* As long as the player has stamina in their stamina bar, they may attack. However, if they delpete their stamina bar it will take longer for the player to use their stamina again.
* The player cannot do any actions that require stamina when their stamina is depleted.

### Equip Load
Equip load is the maximum amount of weight the player can carry, affects movement speed and if the player will drown. Equipment such as weapons, armors and shields have weight. Encumbrance is the percentage of the maximum equip load currently being used.

The player starts with a maximum equip load of 50, and each point increases their maximum equip load by 1 point up to a maximum of 148 at 99 Endurance.

| Encumbrance | Movement Speed | Drown |
| --- | --- | --- |
| 0% | 110% | No |
| >0% | 100% | No |
| >25% | 90% | No |
| >50% | 70% | No |
| >75% | 70% | Yes |
| >=100% | 50% | Yes |

**NOTE** that some of the heavier armors will cause the player to drown regardless of their encumbrance.

### Strength and Dexterity
Spending attribute points on strength/dexterity increases the bonus damage of weapons with a strength/dexterity multiplier.

An example:
    * The shortsword has a base attack damage of 11.2 and both a strength and dexterity multiplier of 51%.
        * 51% of 11.2 is 5.712.
    * At level 10 strength and dexterity, the player has 5% multiplier bonus.
    * The damage bonus of the shortsword would be 5% of the 51%
        * 5% of the 51% is 0.2856.
        * Therefore the strength bonus and dexterity bonus is 0.2856
    * The resulting attack damage, before any damage calculations, is: `base attack damage + strength bonus + dexterity bonus`
        * 11.2 + 0.2856 + 0.2856 = 11.7712

Some weapons have attribute requirements in order to effectively use them. If the player does not meet the attribute requirements for the weapon, they cannot do full damage with that weapon.

## Attack Effects
There are two types of attack effects that melee attacks can have. Some weapons do not have them.
* [Sweep](https://minecraft.wiki/w/Melee_attack#Sweep_attack)
* [Piercing](https://minecraft.wiki/w/Melee_attack#Jab_attack)

## Attack Modes
Melee weapons can have two attack modes. Attack modes can be swapped by sneaking and right clicking while the weapon is in the player's hand. Attack modes can have completely different attack data. For example the Longsword's primary attack is a regular sweep attack, but its secondary is a slower thrusting attack that has the pierce effect. 

## Attack Range
Melee weapons have varying attack reaches. Some weapons have a minimum attack reach to be effective. For example the Winged Spear has a minimum reach of 1m and a maximum reach of 4.5m.

## Attack Speed
Melee attacks can be anywhere from slow but heavy hitting to fast lower damage. The attack speed of a weapon is the time it takes for the player's attack cooldown to completely reset. Attacking when the attack cooldown has not finished will result in reduced damage and stamina cost.

## Damage Types
There are four main damage types.
* Regular
* Slash
* Strike
* Thrust

The damage type of weapons and ammunition can be found on the its description.

When a player takes damage, for example strike damage from a mace, the player's strike defense from their armor is used in the calculation. Armor may be stronger or weaker to some damage types. Some armors may be better at defending against slash damage than others, while others are better at defending against thrust damage. Knowing damage types can help inform the player on whether or not it is worth it to engage the enemy.  

## Attack Weight and Deflection Level

Attacks by weapons and projectiles have an impact weight. They can be influenced by the player's [attack cooldown](https://minecraft.wiki/w/Melee_attack#Attack_cooldown) or how long the player charges their bow or throwing weapon.

Shields have deflection levels that correspond to attack weights.

Below is a table for how long blocking cooldowns last.
**NOTE** Blocking cooldowns are in seconds.


| ↓ Deflection Level / → Attack Weight| NONE  | LIGHT | MEDIUM | HEAVY  |
|-------------------------------------|-------|-------|--------|--------|
| NONE                                | 1.00  | 2.00  | 2.00   | 2.00   |
| LIGHT                               | 0.25  | 1.00  | 2.00   | 2.00   |
| MEDIUM                              | 0.25  | 0.50  | 1.00   | 2.00   |
| HEAVY                               | 0.25  | 0.50  | 0.50   | 1.00   |

## Poise

Poise is the meter above the stamina meter. Taking successive hits will cause the player to stagger. Wearing armor increases the player's poise as well as reduces the player's poise timer. 

* Without any armor the player's poise will reset after 5 seconds of not taking any damage. Every piece of armor reduces the timer by 10%.

| Number of Armor Pieces Equipped | Poise Timer (seconds) |
| --- | --- |
| 0 | 5 |
| 1 | 4.5 |
| 2 | 4.05 |
| 3 | 3.645 |
| 4 | 3.2805 |

Heavier armors will give more poise, but sacrifice mobility.

## Ranged Combat
Ranged weapons have require specific ammuntion. i.e. A bow like the Short Bow uses a Standard Arrow, where as a Crossbow uses a Standard Bolt and the Arquebus needs to be loaded first with gunpowder, then a bullet. The player's movement affects the accuracy of the weapon. Walking, running, jumping, falling and climbing have an effect on accuracy. The player is most accurate when not moving. Sneaking when standing still is the most accurate that the player can be when using a ranged weapon.

## Mounted Combat
When holding out a lance on a horse, the player charges a couched attack as long as they maintain a constant speed for a period of time. Once the charging completes, all the player needs to do is hit the target with the couched lance by charging into them. Horses can also trample targets by maintaining a constant speed for a period of time.

**NOTE** In order to couch attack or trample, the horse needs to move decently fast.

## Damage Formula

Damage is calculated differently than vanilla Minecraft. For players that are curious how, refer to the table below.

|                                                         Damage                                                         |                                 Condition                                 |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
|                                             \\( \text{Atk} \times 0.1 \\)                                              |           \\( \text{Atk} \leq \frac{1}{8} \times \text{Def} \\)           |
|\\( \text{Atk} \times \left(\frac{19.2}{49} \times \left(\frac{\text{Atk}}{\text{Def}} - 0.125\right)^2 + 0.1\right) \\)|\\( \frac{1}{8} \times \text{Def} < \text{Atk} \leq 1 \times \text{Def} \\)|
| \\( \text{Atk} \times \left(-\frac{0.4}{3} \times \left(\frac{\text{Atk}}{\text{Def}} - 2.5\right)^2 + 0.7\right) \\)  |    \\( 1 \times \text{Def} < \text{Atk} \leq 2.5 \times \text{Def} \\)    |
| \\( \text{Atk} \times \left(-\frac{0.8}{121} \times \left(\frac{\text{Atk}}{\text{Def}} - 8\right)^2 + 0.9\right) \\)  |     \\( 2.5 \times \text{Def} < \text{Atk} < 8 \times \text{Def} \\)      |
|                                             \\( \text{Atk} \times 0.9 \\)                                              |                \\( \text{Atk} \geq 8 \times \text{Def} \\)                |
