# Mvndicraft IV dev log 3 Map

Since Mvndi III, the map have been redone from 0.
The previous map was good, but it had obvious issue that we couldn't resolve easily as: part of Iceland missing, low height mountains, unexpected moutains in IRL flatland, old minecraft caves, to small rivers for ships, etc.
We are now using new tools : EarthToMc (2025), Underilla (2024) & MvndiSeasons (2024) which allow to have a much better map.

**TL:DR** If you just want to see what the map looks like, check the [previews](#Previews) section.

## EarthToMc

Our custom version of EarthToMc allow us to extract IRL data as:
- land elevation (Nasa)
- sea ground elevation (Bathymetry gebco)
- land cover (GLC_FCS)
- biomes (Koppen Geiger 1900)
- sea surface temperature (Nasa)
- rivers (OpenStreetMap)
- lakes (OpenStreetMap)
- wetland (OpenStreetMap)
- mangrove (OpenStreetMap)
- glacier (OpenStreetMap)
- beach (OpenStreetMap)
- coral reefs (OpenStreetMap)
- deserts (Global Aridity Index)

All this data are processed by Bash & Python scripts to create a realistic map of 1:200 ratio.
Our scripts does most of the works and provide a better map than we can expect a humain hand to do in a life time. But they also have some limitation as what to do when some data is missing.

### Rivers
The most noticable issue was major rivers flowing into sea. We have enlarged some rivers to allow ships to sail over it. If we have kept the 1:200 racio, most rivers will be less than 2 blocks wide.
This was done pretty decently by scripts, but some rivers where joining sea at a location where sea was 1 block deep, making it de facto not sailable.
To adress that issue, a new script was added to extend the river to the neaest deep ocean. It was working great in most of the case, but sometime, it make river cross montains to reach sea by the nearest point instead of following the IRL path of the rivers.
We had to edit major rivers shapes by hand to fix all those cases and made then smoothly start in mountains. (Thanks to Nildrif for that)

### Worldpainter

Once the data are collected and processed, we use [WorldPainter](https://github.com/Captain-Chaos/WorldPainter) (Thanks Captain-Chaos) to generate the map. It works a bit like a multi layer painting. We add biomes, rivers and all other stuff by painting area (with scripts ofcourse) and then we export it to a Minecraft map. Worldpainter does the major part of the job by placing each blocks and biomes into the world.

## Underilla

At this steps we have a perfect world surface, but there is still nothing inside the surface, no caves, no ores.
[Underilla](https://github.com/HydrolienF/Underilla) merge our custom map with a minecraft world. It keep the 6 top solid blocks of our custom world and under it 1.18+ vanilla caves.

## Datapacks & Seasons

### Caves

In facts, caves are not exaclty the vanilla caves.
As nether is disabled and we still want builder to access as much block type as possible, we added quartz ore to overworld caves.
We also make some ore regional, lapis Lazuli for example can't be found anywhere, you have to go to Persia to find some. Coal is more common near France, Belguim & England coal mines. Please note that for balance purposes, diamonds and irons are still the same all over the map.

There is no caves and no ores under ocean. Anyways, your not able to build in deep ocean, we don't want faction bases in the middle of the Atlantic ocean.

### Structures

To fit the medieval theme, we disabled most vanilla structures as deepdark, mob spawners, etc.
You can still find shipwreck with custom loots on beaches and in not deep oceans.
2 new structures have been added: Brigants camps & mines. Be prepare to explore this 2 structures, bandits spawn more often there.
Brigant camps are adapted for the region they spawn in: Nomad yurt in steppes and Eastern Europe, Viking longhouses & houses in Scandinavia, Runins and tents in Europe & arabian tents in Middle East and Africa.

### Seasons

Each area of the map have a custom biomes with a specific grass & foliage color and specific mob spawns to make them unique.
Every week, the server will switch to a new season. This affect the biomes. Some mob spawns more or less often depending of the seasons. Season also affect temperature and most of Europe will be snowy at winter. Make sure to have enough food before winter to survive.

See [seasons](https://mvndicraft.net/guides/seasons.html) & [temperature](https://mvndicraft.net/guides/temperature.html) to learn more.

## Previews

TODO


Thank you for reading and supporting us, if you like getting news about the serversubscribe to our patreon in order to get sneak peaks for upcoming features make sure to make a ticket in the discord when you subscribe to our [patreon](https://www.patreon.com/Mvndicraft). We have set up this patreon to help us cover server costs which are not cheap at all.
