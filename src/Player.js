"use strict";

class Player {
    constructor(id, community, inventory, startHexPosition, IA) {
        this.id = id;
        this.community = community;
        this.inventory = inventory;
        this.startHexPosition = startHexPosition;
        this.IA = IA;

        this.IA.setOwner(this);
    }
}