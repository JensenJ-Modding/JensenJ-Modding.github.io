# Technical Details

The best place to see how the mod works is by looking at the [source code](https://github.com/JensenJ-Modding/YouShallNotTick). For those who don't want to go through with that here is a general overview of the behaviour of the mod.

## A note on profilers

Some profilers may flag You Shall Not Tick as the cause of significant lag, especially when looking at the surface level. This is due to the way we wrap the game's ticking code. So all of the default entity logic is wrapped within You Shall Not Tick in the event that an entity is allowed to tick. Delving deeper into a profile should reveal the actual cause of lag. You can also always test by removing the mod and seeing the difference. If the performance is the same or worse with the mod, please report this as an issue.

## The Ticking Check

The mod essentially works by wrapping various parts of the tick logic of only Living Entities, and processing the living entity if **any** of the following conditions are met (checked in this order):

-   If the logic is being executed on the client side. This allows animations etc to still work as normal.
-   There is not enough players for the mod to be active. This is a configurable value.
-   The entity is dead or dying.
-   The entity is a player.
-   The entity is a raid participant and the config to allow them to tick normally is enabled.
-   The entity is tamed and has an owner.
-   The entity is within range of a player. The range of this is configurable and is in the shape of a cylinder.
-   The totem of ticking is enabled and the entity is within range of a totem of ticking. The range of a totem of ticking is configurable and is in the shape of a cylinder.

If none of the above conditions are met, the entity is skipped in the server tick loop.

These check are currently performed at the following points

-   Handling AI movement
-   Handling collisions
-   Handling entity travelling, falling, jumping and swimming.

For further efficiency in future we should cache whether an entity should tick for each entity and recalculate it every now and then, rather than every tick.
It should be made clear the mod's checks are much cheaper than performing AI, collisions etc.
