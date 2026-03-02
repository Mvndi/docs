# Blacksmith

**Important note: You need to have the blacksmith profession to do anything in this guide. You can select a profession by using the `/mp` command.**

## XP Gain

There are a couple of ways to gain XP for the blacksmith profession:

1. **Smelting ores**, specifically picking up smelted ingots from a furnace
2. Hammering **bloom**, after picking it up from a bloomery
3. Hammering items crafted from **hot cast iron** and **hot steel** (shown below)

## Creating weapons/armor

### Requirements

- 1 x Anvil (for hammering)
- 1 x Cauldron (for quenching)
- 1 x Smithing Table (for assembling weapons)
- 1 x Hammer
- Raw Iron
- Coal

### Bloomery

#### Bloomery-specific requirements

- 2 x **Hard Clay** (for bloomery)
- 1 x Bellows
- 1 x Tongs

#### Guide

- Craft and place a bloomery (place two hard clay blocks on top of each other and right click with a hammer).
- Take raw iron (only raw iron works, not ingots) and put it in the bloomery with coal or charcoal.
- Once hot, take it out by right clicking with the tongs item.
- Place the bloom on an anvil and start hitting it with a hammer item.
- Enable fire in your plot `/plot toggle fire on`
- Make a fire with a flint and steel, and throw the new hot ingots in the fire.
- Pick up the ingots with the tongs by right clicking, then with the tongs that have the steel/iron right click the anvil with the tongs.
- In the GUI, select what item to craft.
- Take a hammer and hit it in the circled points on the anvil (play osu).
- Take out the crafted item with the tongs, and put it in a cauldron of water.
- Assemble in smithing table. Smithing table recipes can be found in `/recipes`

Highest grade you can get is 4 stars highest quality you can get is Excellent

Video guide:

<video controls src="https://github.com/Mvndi/docs/raw/refs/heads/main/src/assets/video/blacksmithing.mp4" title="Blacksmithing"></video>

#### Bloomery Temperatures

To change the chance of gaining either steel, slag, or cast iron, you need to set the temperature of your bloomery to one that maximises either slag, cast iron or steel gain. The graph below shows the temperature to chance ratio, directly correlated to the temperature displayed above the bloomery when using the bellows.

- X axis: **temperature set on bloomery**
- Y axis: **chance to gain item**

![bloomery temperatures](../../assets/bloomery_temperatures.png)

### Steel Wire Video

<video controls src="https://github.com/Mvndi/docs/raw/refs/heads/main/src/assets/video/steel_wire.mp4" title="Steel Wire"></video>

### Smithing Table Bonus/Debuff (Number after the +/-)

- `quality` is between 0 and 1 — how well you did the hammer minigame  
  - quality > 0.95 → **excellent**  
  - quality > 0.85 → **good**  
  - quality > 0.7  → **fine**  
  - quality > 0.5  → **poor**  
  - otherwise      → **terrible**

- `grade` is an integer between 0 and 3, based on difficulty  
  (highest difficulty = grade 3 / 4 stars, lowest = grade 0 / 1 star)

- The **multiplier** is calculated as:

$$
\text{multiplier} = \text{quality} \times (1 + \text{grade} \times 0.1)
$$

- a perfect hammer minigame (quality = 1) on highest difficulty (grade = 3) gives:

$$
1 \times (1 + 3 \times 0.1) = 1 \times 1.3 = 1.3
$$

- the number shown after the **+** is the **bonus damage**:

$$
\text{bonus} = (\text{baseDamage} \times \text{multiplier}) - \text{baseDamage}
$$

or equivalently:

$$
\text{bonus} = \text{baseDamage} \times (\text{multiplier} - 1)
$$

so with a perfect 1.3× multiplier you get +30% of base damage

for armor it takes the average of this calculation for each of the armor plates used to craft the armor

### Reworking

If you got a bad minigame result, you can throw the weapon head/blade or armor plate back into a fire (like an ingot) pick it up in your tongs, place it back on an anvil to reattempt the minigame first time for -75% XP, and second time for -100% XP

### Quenching

You can quench any "hot" item you have in Tongs, i.e. ingots, weapon heads, etc.

#### Weapon/Armor Upgrading

- Make sure you have the skill for what you're trying to quench
- Fill a cauldron with water
- Right click cauldron with the weapon/armor you want to quench (you can do this more than once)

### FAQ

#### How do I remove steel/cast iron from tongs?

Quench it, and when you want to use it again, reheat it with fire
