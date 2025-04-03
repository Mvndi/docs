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

You can check each plants temperatures values with `/temperature details PLANT_NAME`.

Plants that aren't exposed to sunlight will grow slower (exept for mushrooms).

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
