# Technical Details

The best place to see how the mod works is by looking at the [source code](https://github.com/JensenJ-Modding/YouShallNotPatrol). For those who don't want to go through with that here is a general overview of the behaviour of the mod.

## How Spawning Works

Depending on configuration, the mod may behave slightly differently. The mod performs injections as precisely as possible to maximise mod compatibility.

When a spawn attempt is made for either traders or pillagers, the following occurs:
1. If the configured spawn rate is zero, the spawn is skipped completely. Essentially the same as disabling the spawn gamerule.
2. If the config option for targeting the same player is enabled, the last targeted player is removed from the list of spawn targets.
3. The spawn chance calculation is replaced with one which uses the spawn chance from the config.
4. The entities are spawned on the targeted player.
5. The targeted player of this spawn is recorded for the next spawn attempt.

## Compatibility

I've tried to make the mixins the mod uses as compatible as possible, this may come with side effects however. For example, depending on mixin priority order of other mods, the spawn rate of mobs may get overriden completely or modified. You Shall Not Patrol modifies the calculation of the spawn chance with no regard for the original value or the values used by other mods. This is done in a way which should not crash the game if another mod is modifying this chance value. 

In future, I may add a config option to allow the original (or modded) chance to be multiplied together with the spawn chance from this mod's config. The priority of the mixins used here is `100` if other mods want to override this behaviour. 

You can enable the debug logging config option to see what the mod is doing if you suspect another mod is interfering with You Shall Not Patrol. If there is a compatibility issue with another mod, please report it on the [issues page](https://github.com/JensenJ-Modding/YouShallNotPatrol/issues).