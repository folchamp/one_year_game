"use strict";

class RacValidator {
    constructor() {
        // console.log(JSON.stringify(Data.resources));
        let countResources = 0;
        let knowledgesChecker = {};
        for (let resourceName in Data.resources) {
            let countDuplicateGets = 0;
            const resourceData = Data.resources[resourceName];
            countResources++;
            if (Images.resourceImages[resourceName] === undefined) {
                console.warn(`[R] no image for ${resourceName}`);
            }
            for (let actionName in resourceData.actions) {
                const requiresOneOf = resourceData.actions[actionName].requiresOneOf;
                const learn = resourceData.actions[actionName].learn;
                const get = resourceData.actions[actionName].get;
                if (get === resourceName) {
                    countDuplicateGets++;
                }
                if (get === undefined) {
                    console.warn(`${resourceName} ${actionName} n'a pas de get.`)
                }
                if (Data.resources[get] === undefined) {
                    console.warn(`resource ${get} doesn't exist`);
                }
                if (Images.resourceImages[get] === undefined) {
                    console.warn(`[G] no image for ${get}`);
                }
                if (resourceData.resourceName !== get) {
                    let newResourceData = Data.resources[get];
                    if (newResourceData === undefined) {
                        console.warn(`ressource inexistante ${get}`);
                    }
                }
                requiresOneOf.forEach((knowledge) => {
                    knowledgesChecker[knowledge] ??= { name: resourceName, requires: 0, learns: 0 };
                    knowledgesChecker[knowledge].requires++;

                    if (learn.includes(knowledge)) {
                        console.warn(`check knowledge loop ${resourceName} -> ${actionName} -> ${knowledge}`);
                    }
                });
                learn.forEach((knowledge) => {
                    knowledgesChecker[knowledge] ??= { name: resourceName, requires: 0, learns: 0 };
                    knowledgesChecker[knowledge].learns++;
                });
            }
            if (countDuplicateGets > 1) {
                console.warn(`${resourceName} has duplicate gets`);
            }
        }
        // console.log(knowledgesChecker);
        for (const knowledgeName in knowledgesChecker) {
            const check = knowledgesChecker[knowledgeName];
            if (check.learns === 0 || check.requires === 0) {
                console.warn(`${check.name} : ${knowledgeName} is useless, look :`);
                console.log(check);
            }
        }

        for (const resourceImageName in Images.resourceImages) {
            if (Data.resources[resourceImageName] === undefined && resourceImageName !== "unknownResource") {
                console.log(`We have an image for ${resourceImageName} but no resource`);
            }
        }

        // ressources accessibles par défaut dans les biomes
        const accessibleResources = new Set();
        for (const biomeName in Data.biomes) {
            const biome = Data.biomes[biomeName];
            if (biome.resources !== undefined) {
                biome.resources.forEach((resourceName) => {
                    if (resourceName !== "nothing") {
                        accessibleResources.add(resourceName);
                    }
                });
            }
        }

        const accessibleKnowledges = new Set();
        let changed = true;
        while (changed) {
            changed = false;
            for (const resourceName of accessibleResources) {
                const resourceData = Data.resources[resourceName];
                for (const actionName in resourceData.actions) {
                    const action = resourceData.actions[actionName];
                    // une action sans prérequis est toujours faisable.
                    // sinon, il faut connaître AU MOINS UNE des connaissances.
                    const canDo = action.requiresOneOf.length === 0 ||
                        action.requiresOneOf.some(knowledge => accessibleKnowledges.has(knowledge));
                    if (canDo) {
                        // on apprend les connaissances de l'action.
                        for (const knowledge of action.learn) {
                            if (!accessibleKnowledges.has(knowledge)) {
                                accessibleKnowledges.add(knowledge);
                                changed = true; // on a progressé
                            }
                        }
                        // et on rend accessible la ressource produite.
                        if (!accessibleResources.has(action.get)) {
                            accessibleResources.add(action.get);
                            changed = true; // on a progressé
                        }
                    }
                }
            }
        }

        // rapport
        console.log(`${accessibleResources.size} / ${Object.keys(Data.resources).length} resources are accessible`);
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

        console.log(`${countResources} resources have been checked`);
    }
}