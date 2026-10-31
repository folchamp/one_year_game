"use strict";

class Player {
    constructor(id, community, inventory, IA) {
        this.id = id;
        this.community = community;
        this.inventory = inventory;
        this.IA = IA;

        this.startHexPosition = Settings.startHexPositions[id];
        this.playerColor = Settings.playerColor[id];

        this.unitsCreated = 0;

        this.IA.setOwner(this);
    }
    newTurn() {
        this.unitsCreated = 0;
    }
}