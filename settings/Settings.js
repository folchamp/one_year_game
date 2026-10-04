"use strict";

class Settings {
    static production = true;
    static appName = "one_year_game";
    static hexSize = 112;
    static basicHexSize = 115;
    static tileWidth = 197;
    static tileHeight = 226;
    static resourceImageSize = 64;
    static categoryImageSize = 32;
    static startHexPositions = [
        { q: 0, r: -20 },
        { q: 20, r: -20 },
        { q: 20, r: 0 },
        { q: 0, r: 20 },
        { q: -20, r: 20 },
        { q: -20, r: 0 }
    ];
    static playerColor = [
        "blue",
        "red",
        "green",
        "yellow",
        "purple",
        "orange"
    ]
    static amountOfPlayers = 6;
    static maxAmountOfPlayers = 6; // TODO make this bigger
    static playerColorArcRadius = 20;
    static playerColorArcOffset = 8;
    // static lengthOfFoodMemory = 10;
    static maxFatigue = 36;
    static fatigueRecovery = 1;
    static startingPopulation = 1;
    static bornPopulationCap = 1;
    static mapRadius = 20;
    static panSpeed = 256;
    static edgePanSpeed = 32;
    static initialZoom = 1;
    static maxResourcesPerHex = 3;
    static fatigueBarWidth = 100;
    static fatigueBarHeight = 8;
    static fatigueBarVerticalOffset = 80;
}