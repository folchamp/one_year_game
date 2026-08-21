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

    static resources = {
        "concrete": {
            resourceName: "concrete",
            imageName: "concrete",
            popGrowth: 3,
            seeResourceConditions: [{ knwoledge: "concrete" }],
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "concrete",
                    unlockConditions: [{ knowledge: "salvage_concrete" }]
                },
                destroy: {
                    fatigue: 20,
                    get: "concrete",
                    unlockConditions: [{ knowledge: "destroy_concrete" }]
                },
                recycle: {
                    fatigue: 5,
                    get: "concrete",
                    unlockConditions: [{ knowledge: "recycle_concrete" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "electronics": {
            resourceName: "electronics",
            imageName: "electronics",
            popGrowth: 3,
            seeResourceConditions: [{ knowledge: "electronics" }],
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "electronics",
                    unlockConditions: [{ knowledge: "salvage_electronics" }]
                },
                destroy: {
                    fatigue: 20,
                    get: "metal",
                    unlockConditions: [{ knowledge: "destroy_electronics" }]
                },
                recycle: {
                    fatigue: 5,
                    get: "metal",
                    unlockConditions: [{ knowledge: "recycle_electronics" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "iron": {
            resourceName: "iron",
            imageName: "iron",
            popGrowth: 3,
            seeResourceConditions: [{ knowledge: "iron" }],
            actions: {
                mine: {
                    fatigue: 8,
                    get: "iron",
                    unlockConditions: [{ knowledge: "mine_iron" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 1
        },
        "metal": {
            resourceName: "metal",
            imageName: "metal",
            popGrowth: 3,
            seeResourceConditions: [{ knowledge: "metal" }],
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "metal",
                    unlockConditions: [{ knowledge: "salvage_metal" }]
                },
                destroy: {
                    fatigue: 20,
                    get: "metal",
                    unlockConditions: [{ knowledge: "destroy_metal" }]
                },
                recycle: {
                    fatigue: 5,
                    get: "metal",
                    unlockConditions: [{ knowledge: "recycle_metal" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "plastic": {
            resourceName: "plastic",
            imageName: "plastic",
            popGrowth: 3,
            seeResourceConditions: [{ knowledge: "plastic" }],
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "plastic",
                    unlockConditions: [{ knowledge: "salvage_plastic" }]
                },
                destroy: {
                    fatigue: 20,
                    get: "plastic",
                    unlockConditions: [{ knowledge: "destroy_plastic" }]
                },
                recycle: {
                    fatigue: 5,
                    get: "plastic",
                    unlockConditions: [{ knowledge: "recycle_plastic" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "clean_water": {
            resourceName: "clean_water",
            imageName: "water",
            popGrowth: 5,
            seeResourceConditions: [],
            actions: {
            },
            regeneration: 1,
            fatigueRecovery: 2
        },
        "water": {
            resourceName: "water",
            imageName: "water",
            popGrowth: 3,
            seeResourceConditions: [{ knowledge: "starter" }],
            actions: {
                fetch: {
                    fatigue: 2,
                    get: "water",
                    unlockConditions: [{ knowledge: "starter" }],
                    learn: ["water_collection"]
                },
                observation: {
                    fatigue: 0,
                    unlockConditions: [{ knowledge: "water_collection" }],
                    learn: ["hydrology"]
                },
                filtration: {
                    fatigue: 1,
                    get: "clean_water",
                    unlockConditions: [{ knowledge: "hydrology" }],
                }
            },
            regeneration: 1,
            fatigueRecovery: 2
        },
        "wood": {
            resourceName: "wood",
            imageName: "wood",
            popGrowth: 3,
            seeResourceConditions: [{ knowledge: "starter" }],
            actions: {
                cut: {
                    fatigue: 2,
                    get: "wood",
                    unlockConditions: [{ knowledge: "starter" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 1
        },
        "oil": {
            resourceName: "oil",
            imageName: "oil",
            popGrowth: 3,
            seeResourceConditions: [{ knowledge: "oil" }],
            actions: {
                drill: {
                    fatigue: 5,
                    get: "oil",
                    unlockConditions: [{ knowledge: "drill_oil" }]
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
            degradation: "butte",
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