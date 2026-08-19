"use strict";

class Community {
    constructor() {
        this.population = Settings.startingPopulation;
        this.lastResourcesGiven = [];
    }
    feed_old(resourceName) {
        const basicGrowth = Data.resources[resourceName].popGrowth;
        const count = this.lastResourcesGiven.filter(element => element === resourceName).length;
        this.population += ((Settings.lengthOfFoodMemory + 1 - count) / Settings.lengthOfFoodMemory + 1) * basicGrowth;
        this.lastResourcesGiven.push(resourceName);
        this.lastResourcesGiven = this.lastResourcesGiven.slice(-Settings.lengthOfFoodMemory);
    }
    feed(resourceName) {
        const count = this.lastResourcesGiven.filter(element => element === resourceName).length;
        if (count === 0) {
            this.lastResourcesGiven.push(resourceName);
            this.population += 100;
        }
    }
}