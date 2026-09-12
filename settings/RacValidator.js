"use strict";

class RacValidator {
    constructor() {

        // console.log(JSON.stringify(Data.resources));

        let countcount = 0;
        let knowledgesChecker = {};
        for (let resourceName in Data.resources) {
            countcount++;
            const resourceData = Data.resources[resourceName];
            if (Images.resourceImages[resourceName] === undefined) {
                console.log(`[R] no image for ${resourceName}`);
            }
            for (let actionName in resourceData.actions) {
                const requiresOneOf = resourceData.actions[actionName].requiresOneOf;
                const learn = resourceData.actions[actionName].learn;
                const get = resourceData.actions[actionName].get;
                if (Data.resources[get] === undefined) {
                    console.warn(`resource ${get} doesn't exist`);
                }
                if (Images.resourceImages[get] === undefined) {
                    console.log(`[G] no image for ${get}`);
                }

                requiresOneOf.forEach((knowledge) => {
                    knowledgesChecker[knowledge] ??= { name: resourceName, requires: 0, learns: 0 };
                    knowledgesChecker[knowledge].requires++;

                    if (learn.includes(knowledge)) {
                        console.log(`check knowledge loop ${resourceName} -> ${actionName} -> ${knowledge}`);
                    }
                });
                learn.forEach((knowledge) => {
                    knowledgesChecker[knowledge] ??= { name: resourceName, requires: 0, learns: 0 };
                    knowledgesChecker[knowledge].learns++;
                });
            }
        }
        // console.log(knowledgesChecker);
        for (const knowledgeName in knowledgesChecker) {
            const check = knowledgesChecker[knowledgeName];
            if (check.learns === 0 || check.requires === 0) {
                console.log(`${check.name} : ${knowledgeName} is useless, look :`);
                console.log(check);
            }
        }

        for (const resourceImageName in Images.resourceImages) {
            if (Data.resources[resourceImageName] === undefined && resourceImageName !== "unknownResource") {
                console.log(`We have an image for ${resourceImageName} but no resource`);
            }
        }

        // Ressources accessibles naturellement au début.
        // À adapter à ton modèle : ici je pars des ressources présentes dans les biomes.
        const accessibleResources = new Set();

        for (const biomeName in Data.biomes) {
            const biome = Data.biomes[biomeName];
            // console.log(biome);
            if (biome.resources !== undefined) {
                biome.resources.forEach((resourceName) => {
                    if (resourceName !== "nothing") {
                        accessibleResources.add(resourceName);
                    }
                });
            }
        }

        // Connaissances disponibles au début du jeu.
        // À adapter si tu as une vraie liste de connaissances initiales.
        const accessibleKnowledges = new Set();

        let changed = true;

        while (changed) {
            changed = false;

            for (const resourceName of accessibleResources) {
                const resourceData = Data.resources[resourceName];
                // console.log(resourceName);
                // console.log(resourceData);
                for (const actionName in resourceData.actions) {
                    const action = resourceData.actions[actionName];

                    // Une action sans prérequis est toujours faisable.
                    // Sinon, il faut connaître AU MOINS UNE des connaissances.
                    const canDo =
                        action.requiresOneOf.length === 0 ||
                        action.requiresOneOf.some(
                            knowledge => accessibleKnowledges.has(knowledge)
                        );

                    if (!canDo) {
                        continue;
                    }

                    // On apprend les connaissances de l'action.
                    for (const knowledge of action.learn) {
                        if (!accessibleKnowledges.has(knowledge)) {
                            accessibleKnowledges.add(knowledge);
                            changed = true;
                        }
                    }

                    // Et on rend accessible la ressource produite.
                    if (!accessibleResources.has(action.get)) {
                        accessibleResources.add(action.get);
                        changed = true;
                    }
                }
            }
        }

        // Rapport
        console.log(
            `${accessibleResources.size} / ${Object.keys(Data.resources).length} resources are accessible`
        );
        for (const resourceName in Data.resources) {
            if (!accessibleResources.has(resourceName)) {
                console.warn(`[R] inaccessible resource: ${resourceName}`);
            }
        }

        for (const knowledgeName in knowledgesChecker) {
            if (!accessibleKnowledges.has(knowledgeName)) {
                console.warn(`[K] inaccessible knowledge: ${knowledgeName}`);
            }
        }

        console.log(`${countcount} resources have been checked`);
    }
}