"use strict";

class Community {
    constructor() {
        this.population = Settings.startingPopulation;
        this.lastResourcesGiven = [];
        this.knowledge = ["starter"];

    }
    learn(knowledge) {
        let chosenKnowledge = Random.fromArray(knowledge);
        console.log(`learned ${chosenKnowledge}`);
        if (chosenKnowledge !== undefined && !this.knowledge.includes(chosenKnowledge)) {
            this.knowledge.push(chosenKnowledge);
        }

        // for testing purposes
        for (let resourceName in Data.resources) {
            let resourceData = Data.resources[resourceName];
            for (let actionName in resourceData.actions) {
                let actionData = resourceData.actions[actionName];
                if (actionData.requiresOneOf.includes(chosenKnowledge)) {
                    console.log(`unlock ${resourceName} -> ${actionName}`);
                }
            }
        }

        console.log(this.knowledge);
    }
    fillsConditions(conditions) {
        let fills = false;
        if (conditions.length < 1) {
            fills = true;
        } else {
            conditions.forEach((condition) => {
                if (this.knowledge.includes(condition)) {
                    fills = true;
                }
            });
        }
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