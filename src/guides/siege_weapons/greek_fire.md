# Greek Fire

The greek fire is a short-range anti-infantry turret which acts like a flamethrower. If fired at water it will create fire on the water’s surface that last for 60 seconds. Burns foliage like berry bushes. For ships it does 0.1 damage but there's some RNG because it shoots a lot of projectiles (without the RNG it was a death lazer that sawed ships in half). Also ship takes passive damage and passengers nearby where the greekfire. Breaks after 500 coal blocks of shooting (fireing 1 coal block worth of fuel consumes 1 durability of 500). Will  overheat if fired too much without letting it cooldown, if it overheats it can't be shot for 2 minutes.

<img src="../../assets/greek_fire.png" align="left" alt="greek fire" width="200"/>

## Mounting

The greek fire is mounted by right clicking it, and is aimed with the mouse. To dismount, walk away from the weapon.

## Loading

To load the greek fire, first mount it. Then, right click the weapon with blocks of coal to load it. The greek fire can hold up to 5 blocks of coal, each of which provides about 3 seconds of firing time.

## Firing

Once the greek fire is loaded, left click with a flint and steel to activate it.

## Greek Fire Grenades and Ships

Greek fire grenades deal 0.5 damage to the ship part they hit, ignite it for 60 seconds, and burn nearby players. The turret's random chance to damage a ship does not apply to grenades.

Ship hit registration now checks the grenade's travelled path, including its first movement after being thrown. Hits near the ends of long ships and between projectile updates should register more reliably. The first ship hit receives the impact, and native collision handling no longer consumes a registered ship hit a second time.

A grenade thrown from inside a ship's hull can leave that hull without immediately hitting it; if it returns, it can hit that ship. See [boats](../boats/boats.md) for ship damage and boarding mechanics.

<video controls src="https://github.com/Mvndi/docs/raw/refs/heads/main/src/assets/video/greek_fire.mp4" title="Greek Fire"></video>
