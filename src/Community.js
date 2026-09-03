"use strict";

class Community {
    constructor() {
        this.population = Settings.startingPopulation;
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
    feed(inventory, minPop) {
        const content = inventory.getContent();
        const consumed = [];
        let growth = 0;

        // Une ressource maximum par catégorie
        for (const category in content) {
            const resources = content[category];
            let bestResource = undefined;
            let bestGrowth = 0;
            for (const resourceName in resources) {
                const quantity = resources[resourceName];
                const resourceData = Data.resources[resourceName];
                if (resourceData.popGrowth > bestGrowth && quantity > 0) {
                    bestResource = resourceName;
                    bestGrowth = resourceData.popGrowth;
                }
            }
            if (bestResource !== undefined) {
                // Consomme une unité
                inventory.consume(bestResource);
                consumed.push(bestResource);
                growth += bestGrowth;
            }
        }
        if (growth > this.population) {
            this.population++;
        }
        if (growth <= 0) {
            this.population = Math.max(minPop, this.population - 1);
        }
    }
}