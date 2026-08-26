"use strict";

class Data {
    static defaultPopGrowth = 5;
    static defaultFatigue = 5;
    static defaultFatigueRecovery = 2;
    static defaultRegeneration = 1;
    static resources = {
        water: "eau",
        wood: "bois"
    };
    static knowledges = {
        "lumberjacking": "bucheronnage",
        "hydrology": "hydrologie"
    };
    static actions = {
        cut: "couper",
        fetch: "puiser"
    };
}