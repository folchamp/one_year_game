"use strict";

class Community {
    constructor() {
        this.population = Settings.startingPopulation;
        this.knowledge = ["starter"];
    }
    learn(knowledge) {
        // lors d'un apprentissage, on n'apprend en réalité qu'une seule connaissance parmi une liste 
        const unknownKnowledge = knowledge.filter((item) => !this.knowledge.includes(item)); // et on favorise les connaissances nouvelles
        let chosenKnowledge = Random.fromArray(unknownKnowledge);
        if (chosenKnowledge !== undefined && !this.knowledge.includes(chosenKnowledge)) {
            // on gère les listes vides et on évite d'ajouter une connaissance déjà présente
            this.knowledge.push(chosenKnowledge);
        }

        if (!Settings.production) {
            // en mode développeur, on affiche les actions débloquées
            for (let resourceName in Data.resources) {
                let resourceData = Data.resources[resourceName];
                for (let actionName in resourceData.actions) {
                    let actionData = resourceData.actions[actionName];
                    if (actionData.requiresOneOf.includes(chosenKnowledge)) {
                        console.log(`unlock ${resourceName} -> ${actionName}`);
                    }
                }
            }
        }
    }
    fillsConditions(conditions) {
        let fills = false;
        if (conditions.length <= 0) {
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