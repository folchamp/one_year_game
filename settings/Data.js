"use strict";

class Data {
    static tileImages = Util.loadImages("tiles/", [
        "plains",
        "island",
        "swamp",
        "mountain",
        "forest",
        "city"
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
        "oil"
    ]);

    static resources = {
        "concrete": {
            resourceName: "concrete",
            imageName: "concrete",
            harvest: {
                fatigue: 1
            },
            regeneration: 10
        },
        "electronics": {
            resourceName: "electronics",
            imageName: "electronics",
            harvest: {
                fatigue: 1
            },
            regeneration: 10
        },
        "iron": {
            resourceName: "iron",
            imageName: "iron",
            harvest: {
                fatigue: 8
            },
            regeneration: 10
        },
        "metal": {
            resourceName: "metal",
            imageName: "metal",
            harvest: {
                fatigue: 1
            },
            regeneration: 10
        },
        "plastic": {
            resourceName: "plastic",
            imageName: "plastic",
            harvest: {
                fatigue: 1
            },
            regeneration: 10
        },
        "water": {
            resourceName: "water",
            imageName: "water",
            harvest: {
                fatigue: 2
            },
            regeneration: 2
        },
        "wood": {
            resourceName: "wood",
            imageName: "wood",
            harvest: {
                fatigue: 4
            },
            regeneration: 2
        },
        "oil": {
            resourceName: "oil",
            imageName: "oil",
            harvest: {
                fatigue: 5
            },
            regeneration: 3
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