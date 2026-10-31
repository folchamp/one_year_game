"use strict";

class Settings {
    static production = true;
    static appName = "one_year_game";
    static hexSize = 112;
    static tileWidth = 197;
    static tileHeight = 226;
    static resourceImageSize = 64;
    static categoryImageSize = 32;
    static startHexPositions = [
        { q: 0, r: -6 },
        { q: 6, r: -6 },
        { q: 6, r: 0 },
        { q: 0, r: 6 },
        { q: -6, r: 6 },
        { q: -6, r: 0 }
    ];
    // static startHexPositions = [
    //     { q: 0, r: -20 },
    //     { q: 20, r: -20 },
    //     { q: 20, r: 0 },
    //     { q: 0, r: 20 },
    //     { q: -20, r: 20 },
    //     { q: -20, r: 0 }
    // ];
    static playerColor = [
        "blue",
        "red",
        "green",
        "yellow",
        "purple",
        "orange"
    ]
    static amountOfPlayers = 3;
    static maxAmountOfPlayers = 6; // TODO make this bigger
    static playerColorArcRadius = 20;
    static playerColorArcOffset = 8;
    static maxFatigue = 13;
    static fatigueRecovery = 1;
    static mapRadius = 8;
    // static mapRadius = 20;
    static panSpeed = 256;
    static edgePanSpeed = 32;
    static cameraSpeed = 5;
    static initialZoom = 1;
    static maxResourcesPerHex = 1;
    static fatigueBarWidth = 100;
    static fatigueBarHeight = 8;
    static fatigueBarVerticalOffset = 58;
    static edgePanningWidth = 10;
    static startingResources = 10;
    static unitsPerTurn = 1;
    static damageAnimationDuration = 1800;
    static damageAnimationDelay = 600;
    static attackAnimationDuration = 800;
}