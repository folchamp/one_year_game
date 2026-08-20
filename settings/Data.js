"use strict";

class Data {
    static tileImages = Util.loadImages("tiles/", [
        "plains",
        "island",
        "swamp",
        "mountain",
        "forest",
        "city",
        "fog_of_war",
        "broussailles",
        "butte",
        "friche",
        "greve",
        "landes",
        "desert"
    ]);

    static unitImages = Util.loadImages("units/", [
        "explorer",
        "campfire"
    ]);

    static resourceImages = Util.loadImages("resources/", [
        "concrete",
        "electronics",
        "iron",
        "metal",
        "plastic",
        "water",
        "wood",
        "oil",
        "unknownResource"
    ]);

    // static getActionsToUnlock() {
    //     const actionsToUnlock = {};
    //     for (let resourceName in Data.resources) {
    //         let resourceData = Data.resources[resourceName];
    //         let actions = resourceData.actions;
    //         actionsToUnlock[resourceName] = {};
    //         for (let actionName in actions) {
    //             if (actions[actionName].starterAction !== true) {
    //                 actionsToUnlock[resourceName][actionName] = "locked";
    //             }
    //         }
    //     }
    //     console.log(actionsToUnlock);
    //     return actionsToUnlock;
    // }

    static resources = {
        "concrete": {
            resourceName: "concrete",
            imageName: "concrete",
            popGrowth: 3,
            seeResourceCondition: "concrete",
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "concrete",
                    unlockCondition: "salvage_concrete"
                },
                destroy: {
                    fatigue: 20,
                    get: "concrete",
                    unlockCondition: "destroy_concrete"
                },
                recycle: {
                    fatigue: 5,
                    get: "concrete",
                    unlockCondition: "recycle_concrete"
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "electronics": {
            resourceName: "electronics",
            imageName: "electronics",
            popGrowth: 3,
            seeResourceCondition: "electronics",
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "electronics",
                    unlockCondition: "salvage_electronics"
                },
                destroy: {
                    fatigue: 20,
                    get: "metal",
                    unlockCondition: "destroy_electronics"
                },
                recycle: {
                    fatigue: 5,
                    get: "metal",
                    unlockCondition: "recycle_electronics"
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "iron": {
            resourceName: "iron",
            imageName: "iron",
            popGrowth: 3,
            seeResourceCondition: "iron",
            actions: {
                mine: {
                    fatigue: 8,
                    get: "iron",
                    unlockCondition: "mine_iron"
                }
            },
            regeneration: 1,
            fatigueRecovery: 1
        },
        "metal": {
            resourceName: "metal",
            imageName: "metal",
            popGrowth: 3,
            seeResourceCondition: "metal",
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "metal",
                    unlockCondition: "salvage_metal"
                },
                destroy: {
                    fatigue: 20,
                    get: "metal",
                    unlockCondition: "destroy_metal"
                },
                recycle: {
                    fatigue: 5,
                    get: "metal",
                    unlockCondition: "recycle_metal"
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "plastic": {
            resourceName: "plastic",
            imageName: "plastic",
            popGrowth: 3,
            seeResourceCondition: "plastic",
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "plastic",
                    unlockCondition: "salvage_plastic"
                },
                destroy: {
                    fatigue: 20,
                    get: "plastic",
                    unlockCondition: "destroy_plastic"
                },
                recycle: {
                    fatigue: 5,
                    get: "plastic",
                    unlockCondition: "recycle_plastic"
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "water": {
            resourceName: "water",
            imageName: "water",
            popGrowth: 3,
            seeResourceCondition: "starter",
            actions: {
                fetch: {
                    fatigue: 2,
                    get: "water",
                    unlockCondition: "starter"
                }
            },
            regeneration: 1,
            fatigueRecovery: 2
        },
        "wood": {
            resourceName: "wood",
            imageName: "wood",
            popGrowth: 3,
            seeResourceCondition: "starter",
            actions: {
                cut: {
                    fatigue: 2,
                    get: "wood",
                    unlockCondition: "starter"
                }
            },
            regeneration: 1,
            fatigueRecovery: 1
        },
        "oil": {
            resourceName: "oil",
            imageName: "oil",
            popGrowth: 3,
            seeResourceCondition: "oil",
            actions: {
                drill: {
                    fatigue: 5,
                    get: "oil",
                    unlockCondition: "drill_oil"
                }
            },
            regeneration: 1,
            fatigueRecovery: 1
        }
    }

    static biomeNamesForGeneration = [
        "city", "island", "swamp", "mountain", "forest"
    ];

    static biomes = {
        desert: {
            degradation: "desert",
            imageName: "desert"
        },

        broussailles: {
            degradation: "desert",
            imageName: "broussailles",
        },
        butte: {
            degradation: "desert",
            imageName: "butte",
        },
        friche: {
            degradation: "desert",
            imageName: "friche",
        },
        greve: {
            degradation: "desert",
            imageName: "greve",
        },
        landes: {
            degradation: "desert",
            imageName: "landes",
        },

        plains: {
            degradation: "landes",
            imageName: "plains",
            attribute: "elevation",
            amount: 0,
            propagation: { min: 1, max: 1 },
            minimum: 0,
            treshold: 0.0,
            amountOfResources: 1,
            resources: [
                "nothing"
            ]
        },
        swamp: {
            degradation: "broussailles",
            imageName: "swamp",
            attribute: "humidity",
            amount: 2,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.5,
            amountOfResources: 2,
            resources: [
                "water",
                "water",
                "oil",
                "water",
                "water",
                "water",
                "water",
                "water",
                "water",
            ]
        },
        island: {
            degradation: "greve",
            imageName: "island",
            attribute: "humidity",
            amount: 2,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.75,
            amountOfResources: 1,
            resources: [
                "water",
            ]
        },
        forest: {
            degradation: "friche",
            imageName: "forest",
            attribute: "life",
            amount: 10,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.4,
            amountOfResources: 3,
            resources: [
                "water",
                "wood",
                "wood",
                "wood",
                "wood",
                "wood",
            ]
        },
        mountain: {
            degradation: "moutain",
            imageName: "mountain",
            attribute: "elevation",
            amount: 3,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.45,
            amountOfResources: 1,
            resources: [
                "water",
                "nothing",
                "nothing",
                "wood",
                "iron",
            ]
        },
        city: {
            degradation: "desert",
            imageName: "city",
            attribute: "humanInfluence",
            amount: 10,
            propagation: { min: 0.99, max: 0.99 },
            minimum: 0,
            treshold: 0.99,
            amountOfResources: 3,
            resources: [
                "concrete",
                "electronics",
                "metal",
                "plastic",
                "oil",
            ]
        }
    };

}