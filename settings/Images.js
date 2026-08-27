"use strict";

class Images {
    constructor() { }

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
        "iron_ore",
        "ancient_metal",
        "ancient_plastic",
        "ancient_glass",
        "water",
        "wood",
        "oil",
        "unknownResource",
        "fruits",
        "mushrooms",
        "clay",
        "sandstone",
        "plants",
        "sand",
        "copper_ore",
        "limestone",
        "lumber"
    ]);
}