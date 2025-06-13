# Configuration Guide

You Shall Not Patrol only makes use of a server side configuration file.

On Forge/NeoForge, this can be located within the `world/serverconfig` directory.

On Fabric, this is just within your `config` directory. On 1.21.1+ this can be overridden per world by placing it in `world/serverconfig` like NeoForge.

# Specification

## Debug / Dev Settings

#### shouldLog

This controls whether debug logging should be enabled. This will show things such as spawn chances per attempt and the targeted player of spawn events. Useful for debugging if another mod is interfering with You Shall Not Patrol.

## Pillager Patrol Settings

#### pillagerSpawnOnDifferentPlayer

This controls whether the mod should try to avoid spawning a pillager patrol on the same player as last time.

#### pillagerSpawnChance

This is the chance of a pillager patrol successfully spawning on a targeted player. This is rolled whenever the vanilla game (or mods altering behaviour) would attempt to spawn a patrol.

## Wandering Trader Settings

#### traderSpawnOnDifferentPlayer

This controls whether the mod should try to avoid spawning a wandering trader on the same player as last time.

#### traderSpawnChance

This is the chance of a wandering trader successfully spawning on a targeted player. This is rolled whenever the vanilla game (or mods altering behaviour) would attempt to spawn a trader.