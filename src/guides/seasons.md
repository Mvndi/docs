# Seasons

Seasons and temperatures affect plants grow and will affect animals and player in the future.
As in real world cactus can't grow in the field of Norway.

## Temperature

Explanation of the temperature system:
<iframe width="735" height="315" src="https://www.youtube.com/embed/VOPPiE_yuns?si=Bn3Uk5Z5qv0ebZTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Plants

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

### Modifiers

Temperatures work by combining modifiers together. Each modifiers can be check with `/temperature details`.

- block temperature (biome temperature as define in Minecraft (cf [Minecraft wiki](https://discord.com/channels/1095458951606321212/1118108411926679572/1233391427313074187) and height of the block))
- a random temperature variation (Some day are hotter some are cooler with a variation between -5 and +5)
- day night temperature (for most biome it's -5 at midnight and +5 at noon (or +10 under greenhouse). It follow a sinusoidal function)
- weather temperature (if it rains -2, if its' thunder -5)
- north south temperature (Based on z coordinates. At z=0 -> -5 At z = 30 000 +5)
- Under block temperature (If bloc under the farmland is SNOW_BLOCK-> -10, FIRE -> 10, HAY_BLOCK -> 5, LAVA -> 20)

### Players (Work in progress)

If a player is too hot or too cold, they will be slower than usual. Same for a horse or a camel.
At extreme temperature, player will take damage over time by freezing or overheating.

Armor can protect from temperature. Leather armors protect from cold and bronze armors protect from heat.

## Seasons (Work in progress)

Seasons cycle affect temperatures (witch affect plants), animals and players.
Each season last 7 days.

### Spring (Work in progress)

During spring, animals have more babies.

### Summer (Work in progress)

During summer, temperature are higher than usual, crops grow faster, day are longer and nights are shorter & it snow or rain less often.

### Autumn (Work in progress)

During autumn, harvest are more abundant, it rain more often, leaves fall from trees and changes color.

### Winter (Work in progress)

During winter, temperature are lower than usual, crops grow slower, day are shorter and nights are longer, it snow in biome that usualy have rain and nothen Europe rivers freeze.
