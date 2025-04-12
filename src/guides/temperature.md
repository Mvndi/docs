# Temperature

Explanation of the temperature system:

<video controls src="https://github.com/Mvndi/docs/raw/refs/heads/main/src/assets/video/temperature.mp4" title="Temperature"></video>

## Plants

All plants grow faster or slower depending on the temperature.
All plants have an ideal range of temperature where they grow the fastest (2 time faster than vanilla).
They also have a minimum and maximum temperature where they can grow at all.
Between the minimal value to grow and the minimal ideal value, it grow between 0 and 2 times faster than vanilla.
Under or over the maximum value, the plants can't grow at all.
And if temperatures are too extreme, the plants can die (Item will drop on the ground).

If plants can't survive in the current temperature, you won't be able to place them.
If plants can't grow in the current temperature, you will be warned when you place them.

You can check each plant's temperatures in-game with `/temperature info PLANT_NAME` or refer to the table below.

Plants that aren't exposed to sunlight will grow slower (except for mushrooms).

### Plant Temperature Configurations

Note: All temperatures are in Celsius. A dash (-) indicates that the value uses the default

| Plant              | Min Survive | Min Grow | Min Ideal | Max Ideal | Max Grow | Max Survive | Grow Speed |
|--------------------|-------------|----------|-----------|-----------|----------|-------------|------------|
| Default            | -100        | 0        | 10        | 20        | 30       | 100         | 1          |
| WHEAT              | -20         | 3        | 10        | 30        | 45       | 70          | 2          |
| POTATOES           | -20         | 7        | 15        | 25        | 30       | 35          | 2          |
| CARROTS            | -15         | 4        | 15        | 25        | 35       | 40          | 2          |
| BEETROOTS          | -20         | 1        | 15        | 26        | 35       | 40          | 2          |
| MELON_STEM         | 0           | 20       | 25        | 40        | 60       | 100         | 2          |
| PUMPKIN_STEM       | -10         | 5        | 8         | 20        | 30       | 34          | 2          |
| SUGAR_CANE         | 10          | 28       | 32        | 38        | 50       | 100         | 2          |
| CACTUS             | -10         | 25       | 35        | 50        | 70       | 100         | 2          |
| BAMBOO             | -10         | 20       | 25        | 35        | 70       | 100         | 2          |
| COCOA_BEANS        | 10          | 30       | 35        | 35        | 60       | 100         | 2          |
| SMALL_DRIPLEAF     | 0           | 5        | 35        | 40        | 80       | 100         | 2          |
| VINE               | -100        | -5       | 0         | 60        | 70       | 100         | 1          |
| BROWN_MUSHROOM     | -10         | 5        | 10        | 25        | 30       | 35          | 1.5        |
| RED_MUSHROOM       | -10         | 5        | 10        | 25        | 30       | 35          | 1.5        |
| SWEET_BERRY_BUSH   | -20         | 10       | 25        | 30        | 40       | 45          | 2          |
| OAK_SAPLING        | -10         | 5        | 15        | 25        | 35       | 50          | 2          |
| DARK_OAK_SAPLING   | -10         | 5        | 15        | 25        | 40       | 50          | 2          |
| PALE_OAK_SAPLING   | -10         | 5        | 15        | 25        | 40       | 50          | -          |
| BIRCH_SAPLING      | -2          | 5        | 15        | 25        | 32       | 40          | 2          |
| SPRUCE_SAPLING     | -50         | -15      | -5        | 10        | 25       | 30          | 2          |
| JUNGLE_SAPLING     | 10          | 25       | 30        | 40        | 70       | 100         | 3          |
| ACACIA_SAPLING     | 10          | 25       | 30        | 40        | 70       | 100         | 2          |
| CHERRY_SAPLING     | -10         | 2        | 20        | 25        | 32       | 40          | 2          |
| MANGROVE_PROPAGULE | 0           | 5        | 25        | 30        | 50       | 100         | 2          |
| CAVE_VINES_PLANT   | -           | -        | -         | -         | -        | -           | 0.5        |

## Modifiers

Temperatures work by combining modifiers together. Each modifiers can be check with `/temperature details`.

- block temperature (biome temperature as defined in the [Minecraft wiki](https://minecraft.wiki/w/Biome) and the height of the block)
- a random temperature variation (Some day are hotter some are cooler with a variation between -5 and +5)
- day night temperature (for most biome it's -5 at midnight and +5 at noon (or +10 under greenhouse). It follow a sinusoidal function)
- weather temperature (if it rains -2, if its' thunder -5)
- north south temperature (Based on z coordinates. At z=0 -> -5 At z = 30 000 +5)
- Under block temperature (If bloc under the farmland is SNOW_BLOCK-> -10, FIRE -> 10, HAY_BLOCK -> 5, LAVA -> 20)

## Players

If a player is too hot or too cold, they will be slower than usual. Same for a horse or a camel.
At extreme temperature, player will take damage over time by freezing or overheating.

Armor can protect from temperature. Leather armors protect from cold and bronze armors protect from heat.
