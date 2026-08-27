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

        this.resources = [];
    }
    setBiome(biome) {
        // évite que biome ait accès aux Data.biomes
        this.biome = {
            degradation: biome.degradation,
            imageName: biome.imageName
        }
    }
    evolveBiome() {
        if (this.isDegraded) {
            // quand le biome original est trop dégradé, il change de nature et recommence son cycle
            this.isDegraded = false;
            this.fatigue = 0;
            if (this.biome.degradation) {
                this.setBiome(Data.biomes[this.biome.degradation]);
                if (this.resources.length < 1) {
                    this.setBiome(Data.biomes["desert"]);
                }
            }
        }
    }
    cleanResources() {
        this.resources = this.resources.filter((resource) => {
            // TODO effondrement 
            let isHealthy = resource.fatigue <= Settings.maxFatigue;
            if (!isHealthy) {
                this.isDegraded = true;
            }
            return isHealthy;
        });
    }
    update() {
        this.resources.forEach((resource) => {
            if (resource.regeneratesIn > 0) {
                resource.regeneratesIn--;
            } else if (resource.fatigue > 0) {
                resource.fatigue = Math.max(resource.fatigue - resource.resourceData.fatigueRecovery, 0);
            }
            if (resource.regeneratesIn <= 0) {
                resource.isAvailable = true;
                // this.health--;
            }
        });
        this.cleanResources();
        this.evolveBiome();
    }
    harvest(resourceName, actionName) {
        this.resources.forEach((resource) => {
            if (resource.resourceData.resourceName === resourceName) {
                resource.fatigue += resource.resourceData.actions[actionName].fatigue;
                resource.isAvailable = false;
                resource.regeneratesIn = resource.resourceData.regeneration;
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
        if (resourceData !== undefined && !this.hasResource(resourceData.resourceName)) {
            let resource = {
                resourceData: resourceData,
                fatigue: 0,
                regeneratesIn: 0,
                isAvailable: true
            }
            this.resources.push(resource);
        }
    }
}