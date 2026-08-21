"use strict";

class Community {
    constructor() {
        this.population = Settings.startingPopulation;
        this.lastResourcesGiven = [];
        // this.actionsToUnlock = Data.getActionsToUnlock();
        this.knowledge = ["starter"];
    }
    learn(knowledge) {
        this.knowledge.push(...knowledge);
    }
    fillsConditions(conditions) {
        let fills = true;
        conditions.forEach((condition) => {
            if (condition.knowledge !== undefined && !this.knowledge.includes(condition.knowledge)) {
                fills = false;
            }
            if (condition.population !== undefined && this.population < condition.population) {
                fills = false;
            }
        })
        return fills;
    }
    feed(resourceName) {
        const basicGrowth = Data.resources[resourceName].popGrowth;
        const count = this.lastResourcesGiven.filter(element => element === resourceName).length;
        this.population += ((Settings.lengthOfFoodMemory + 1 - count) / Settings.lengthOfFoodMemory + 1) * basicGrowth;
        this.lastResourcesGiven.push(resourceName);
        this.lastResourcesGiven = this.lastResourcesGiven.slice(-Settings.lengthOfFoodMemory);
    }
    feed_alternative(resourceName) {
        const count = this.lastResourcesGiven.filter(element => element === resourceName).length;
        if (count === 0) {
            this.lastResourcesGiven.push(resourceName);
            this.population += 100;
        }
    }
}