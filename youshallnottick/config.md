# Configuration Guide

You Shall Not Tick only makes use of a server side configuration file.

On Forge/NeoForge, this can be located within the `world/serverconfig` directory.

On Fabric, this is just within your `config` directory. On 1.21.1+ this can be overridden per world by placing it in `world/serverconfig` like NeoForge.

# Specification

## General Settings

#### minPlayers

This controls how many players need to be online before the mod even activates, if the number of players online is below this number, the game will behave like vanilla.

#### spectatorsAllowTicking

This controls whether a player in spectator mode will allow nearby living entities to processs.

## Ticking Settings

#### entityIgnoreList

This is a list of entities, namespaces or tags that should be ignored by the mod, i.e. they will function normally. The default list is pretty good for allowing the vanilla game to function as expected. The list also contains a few modded entities for basic compatibility. It is important to note you only need to add **living** entities to the list as other entity types are ignored. You can put tags here, or entire mod's by using the `modid:*` pattern.

My recommendation is that you add any bosses added by mods to this list, or living entities which perform complex tasks around your base you might want to always have enabled without worrying about putting a Totem of Ticking down. An example for this would be the packages from Create as _for some reason_ they are technically a living entity.

#### playerMaxEntityTickDistanceHorizontal

This is the horizontal range that a player will allow the ticking of living entities nearby. It should be noted the shape of the range check is a cylinder, with the flat edges in the up and down directions. This controls the radius of that cylinder, the center of which is the player.

#### playerMaxEntityTickDistanceVertical

This is the vertical range that a player will allow the ticking of living entities nearby. It should be noted the shape of the range check is a cylinder, with the flat edges in the up and down directions. This controls the height of that cylinder, the center of which is the player.

#### shouldRaidParticipantsTick

This determines whether any participants of an ongoing raid should tick as normal regardless of the distance from a player or totem. This applies to both pillagers, and villagers / golems.

## Totem

#### enableTotemOfTicking

This determines whether the totem of ticking is enabled and functional. When disabled it will do nothing.

#### tickingTotemMaxEntityTickDistanceHorizontal

This is the horizontal range that a ticking totem will allow the ticking of living entities nearby. It should be noted the shape of the range check is a cylinder, with the flat edges in the up and down directions. This controls the radius of that cylinder, the center of which is the totem.

#### tickingTotemMaxEntityTickDistanceVertical

This is the vertical range that a ticking totem will allow the ticking of living entities nearby. It should be noted the shape of the range check is a cylinder, with the flat edges in the up and down directions. This controls the height of that cylinder, the center of which is the totem.
