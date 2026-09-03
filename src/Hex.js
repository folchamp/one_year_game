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
        // ecology attributes
        this.isDegraded = false;

        // visibility attributes
        this.isExplored = false;
        this.isSeenThroughFog = false;

        // fatigue
        this.fatigue = 0;

        this.resources = [];

        this.lastResourceTaken;
    }
    setBiome(biome) {
        // évite que biome ait accès aux Data.biomes
        this.biome = {
            biomeName: biome.biomeName,
            degradation: biome.degradation,
            imageName: biome.imageName
        }
    }
    evolveBiome() {
        if (this.fatigue > Settings.maxFatigue) {
            // quand le biome actuel est trop dégradé, il change de nature et recommence son cycle
            // this.isDegraded = false;
            this.fatigue = 0;
            if (this.biome.degradation) {
                if (this.biome.degradation === "desert") {
                    // quand on atteint le dernier stade de dégradation (le désert), toutes les ressources disparaissent
                    this.resources = [];
                }
                this.setBiome(Data.biomes[this.biome.degradation]);
                // if (this.resources.length < 1) {
                // this.setBiome(Data.biomes["desert"]);
                // }
            } else if (this.biome.biomeName === "city") {
                this.resources = this.resources.filter((resource, index, array) => {
                    return resource.resourceData.resourceName !== this.lastResourceTaken;
                });
            }
        }
    }
    cleanResources() {
        // this.resources = this.resources.filter((resource) => {
        //     // TODO effondrement 
        //     let isHealthy = resource.fatigue <= Settings.maxFatigue;
        //     if (!isHealthy) {
        //         this.isDegraded = true;
        //     }
        //     return isHealthy;
        // });
    }
    update() {
        if (this.fatigue > 0) {
            this.fatigue = Math.max(this.fatigue - Settings.fatigueRecovery, 0);
        }
        this.resources.forEach((resource) => {
            if (resource.regeneratesIn > 0) {
                resource.regeneratesIn--;
            }
            if (resource.regeneratesIn <= 0) {
                resource.isAvailable = true;
            }
        });
        this.cleanResources();
        this.evolveBiome();
    }
    harvest(resourceName, actionName) {
        this.resources.forEach((resource) => {
            if (resource.isAvailable && resource.resourceData.resourceName === resourceName) {
                this.fatigue += resource.resourceData.actions[actionName].fatigue;
                resource.isAvailable = false;
                resource.regeneratesIn = resource.resourceData.regeneration;
                this.lastResourceTaken = resourceName;
            }
        });
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
        if (resourceData !== undefined && !this.hasResource(resourceData.resourceName) && this.resources.length < Settings.maxResourcesPerHex) {
            let resource = {
                resourceData: resourceData,
                // fatigue: 0,
                regeneratesIn: 0,
                isAvailable: true
            }
            this.resources.push(resource);
        }
    }
}