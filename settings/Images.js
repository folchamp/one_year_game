"use strict";

class Images {
    constructor() {

    }

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
        "unknownResource",
        "fruit"
    ]);
}