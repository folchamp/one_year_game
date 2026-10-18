"use strict";

class Community {
    constructor() {
        this.population = Settings.startingPopulation;
        this.knowledge = ["starter"];
        this.consumed = [];
    }
    learn(knowledge) {
        let chosenKnowledge = Random.fromArray(knowledge);
        if (chosenKnowledge !== undefined && !this.knowledge.includes(chosenKnowledge)) {
            // console.log(`- learned ${chosenKnowledge}`);
            this.knowledge.push(chosenKnowledge);
        }

        // for testing purposes
        for (let resourceName in Data.resources) {
            let resourceData = Data.resources[resourceName];
            for (let actionName in resourceData.actions) {
                let actionData = resourceData.actions[actionName];
                if (actionData.requiresOneOf.includes(chosenKnowledge)) {
                    // console.log(`unlock ${resourceName} -> ${actionName}`);
                }
            }
        }

        // console.log(this.knowledge);
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
}