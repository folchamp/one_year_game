"use strict";

class Hex {
    constructor(q, r, biome) {
        this.q = q;
        this.r = r;
        this.biome = biome;
        // biomeAttributes
        this.elevation = 0.1;
        this.humidity = 0.5
        this.life = 0;
        this.humans = 0.1;
        // ecology attributes
        // this.health = 100;
        this.isExplored = false;
        this.isSeenThroughFog = false;

        this.resources = [];
        // this.size = Settings.hexSize;
    }
    update() {
        this.resources.forEach((resource) => {
            if (resource.regeneratesIn > 0) {
                resource.regeneratesIn--;
            } else if (resource.fatigue > 0) {
                resource.fatigue--;
            }
            if (resource.regeneratesIn <= 0) {
                resource.isAvailable = true;
                // this.health--;
            }
        });
    }
    harvest(resourceName, actionName) {
        this.resources.forEach((resource) => {
            if (resource.resourceData.resourceName === resourceName) {
                resource.fatigue += resource.resourceData.actions[actionName].fatigue;
                resource.isAvailable = false;
                resource.regeneratesIn = resource.resourceData.regeneration;
            }
        });
        // retirer la ressource du hex
        // augmenter la fatigue du hex
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
        if (!this.hasResource(resourceData.resourceName)) {
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