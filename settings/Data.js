"use strict";

class Data {
    static tileImages = Util.loadImages("tiles/", [
        "plains",
        "island",
        "swamp",
        "mountain",
        "forest",
        "city",
        "fog_of_war"
    ]);

    static unitImages = Util.loadImages("units/", [
        "caravan",
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
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "concrete"
                },
                destroy: {
                    fatigue: 20,
                    get: "concrete"
                },
                recycle: {
                    fatigue: 5,
                    get: "concrete"
                }
            },
            regeneration: 1
        },
        "electronics": {
            resourceName: "electronics",
            imageName: "electronics",
            popGrowth: 3,
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "electronics"
                },
                destroy: {
                    fatigue: 20,
                    get: "metal"
                },
                recycle: {
                    fatigue: 5,
                    get: "metal"
                }
            },
            regeneration: 1
        },
        "iron": {
            resourceName: "iron",
            imageName: "iron",
            popGrowth: 3,
            actions: {
                mine: {
                    fatigue: 8,
                    get: "iron"
                }
            },
            regeneration: 10
        },
        "metal": {
            resourceName: "metal",
            imageName: "metal",
            popGrowth: 3,
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "metal"
                },
                destroy: {
                    fatigue: 20,
                    get: "metal"
                },
                recycle: {
                    fatigue: 5,
                    get: "metal"
                }
            },
            regeneration: 1
        },
        "plastic": {
            resourceName: "plastic",
            imageName: "plastic",
            popGrowth: 3,
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "plastic"
                },
                destroy: {
                    fatigue: 20,
                    get: "plastic"
                },
                recycle: {
                    fatigue: 5,
                    get: "plastic"
                }
            },
            regeneration: 1
        },
        "water": {
            resourceName: "water",
            imageName: "water",
            popGrowth: 3,
            actions: {
                fetch: {
                    fatigue: 2,
                    get: "water"
                }
            },
            regeneration: 2
        },
        "wood": {
            resourceName: "wood",
            imageName: "wood",
            popGrowth: 3,
            actions: {
                cut: {
                    fatigue: 2,
                    get: "wood"
                }
            },
            regeneration: 2
        },
        "oil": {
            resourceName: "oil",
            imageName: "oil",
            popGrowth: 3,
            actions: {
                drill: {
                    fatigue: 5,
                    get: "oil"
                }
            },
            regeneration: 4
        }
    }

    static biomeNames = [
        "city", "plains", "island", "swamp", "mountain", "forest"
    ];

    static biomes = {
        plains: {
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
            imageName: "mountain",
            attribute: "elevation",
            amount: 3,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.35,
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