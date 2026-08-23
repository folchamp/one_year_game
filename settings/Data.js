"use strict";

class Data {
    static resources = JSON.parse(
        `{"water":{"resourceImage":"water","actions":{"draw":{"unlockConditions":[],"learn":["water_collection","rivers","water_detection","water_filtration","hydrology","nutrition","water_storage"],"fatigue":5,"get":"water"}},"popGrowth":5,"seeResourceConditions":[{"knowledge":"starter"}],"regeneration":1,"fatigueRecovery":2},"wood":{"resourceImage":"wood","actions":{"cut":{"unlockConditions":[],"learn":["agroforestry","biodiversity","botany","forest_ecology","horticulture","plant_breeding"],"fatigue":5,"get":"wood"}},"popGrowth":5,"seeResourceConditions":[{"knowledge":"starter"}],"regeneration":1,"fatigueRecovery":2}}`
    )

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
            amountOfResources: 1,
            resources: [
                "water",
                "nothing"
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
                "nothing"
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
            amountOfResources: 2,
            resources: [
                "water",
                "wood",
                "nothing"
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
                "nothing"
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
                "nothing"
            ]
        }
    };

}