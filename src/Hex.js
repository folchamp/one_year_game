"use strict";

class Hex {
    constructor(q, r, biome) {
        this.q = q;
        this.r = r;
        this.setBiome(biome);

        // biomeAttributes
        this.elevation = 0.1;
        this.humidity = 0.5
        this.life = 0;
        this.humans = 0.1;

        // visibility attributes
        this.isExploredBy = [];
        this.isSeenThroughFogBy = [];

        // fatigue
        this.fatigue = 0;

        this.resources = [];

        // flag qui indique si le hex fait partie des hex dans la portée d'un sort
        // TODO ce n'est pas le bon endroit pour stocker cet info, ça ne fait pas vraiment partie du hex
        // mais plutôt du système de targetting
        this.isTargetted = false;
    }
    hasSeen(player) {
        return this.isSeenThroughFogBy.includes(player);
    }
    see(player) {
        if (!this.isSeenThroughFogBy.includes(player)) {
            this.isSeenThroughFogBy.push(player);
        }
    }
    hasExplored(player) {
        return this.isExploredBy.includes(player);
    }
    explore(player) {
        if (!this.isExploredBy.includes(player)) {
            this.isExploredBy.push(player);
        }
    }
    setBiome(biome) {
        this.biome = {
            biomeName: biome.biomeName,
            degradation: biome.degradation,
            imageName: biome.imageName
        }
    }
    evolveBiome() {
        if (this.fatigue >= Settings.maxFatigue) {
            // quand le biome actuel est trop dégradé, il change de nature et recommence son cycle
            if (this.biome.degradation) {
                if (this.biome.degradation === "desert" || this.biome.degradation === "city") {
                    // quand on atteint le dernier stade de dégradation (le désert), toutes les ressources disparaissent
                    this.resources = [];
                } else {
                    this.fatigue = 0;
                }
                this.setBiome(Data.biomes[this.biome.degradation]);
            }
        }
    }
    update() {
        if (this.fatigue > 0 && this.biome.biomeName !== "city") {
            const fatigueToRecover = Settings.fatigueRecovery / Settings.amountOfPlayers; // combien de fatigue on perd par tour
            this.fatigue = Math.min(this.fatigue, Settings.maxFatigue);
            this.fatigue = Math.max(0, this.fatigue - fatigueToRecover); // ne pas descendre en dessous de 0 de fatigue
        }
        this.resources.forEach((resource) => {
            if (resource.regeneratesIn > 0) {
                resource.regeneratesIn--;
            }
            if (resource.regeneratesIn <= 0) {
                resource.isAvailable = true;
            }
        });
        this.evolveBiome();
    }
    harvest(resourceName) {
        this.resources.forEach((resource) => {
            if (resource.isAvailable && resource.resourceData.resourceName === resourceName) {
                let fatigueIncrease = Data.categories[Data.resources[resourceName].category].fatigue;
                this.fatigue += fatigueIncrease;
                // test sans le concept 
                // resource.isAvailable = false; 
                resource.regeneratesIn = resource.resourceData.regeneration;
            }
        });
        this.evolveBiome();
    }
    isSame(hex) {
        return this.q === hex.q && this.r === hex.r;
    }
    hasResource(resourceName) {
        return this.resources.some((resource) => {
            return resource.resourceData.resourceName === resourceName
        });
    }
    addResource(resourceData) {
        let resource = {
            resourceData: resourceData,
            regeneratesIn: 0,
            isAvailable: true
        }
        if (resourceData !== undefined && !this.hasResource(resourceData.resourceName)) {
            this.resources.push(resource);
        }
        if (this.resources.length > Settings.maxResourcesPerHex) {
            this.resources.shift();
        }
    }
}