"use strict";

class Player {
    constructor(id, community, inventory, IA) {
        this.id = id;
        this.community = community;
        this.inventory = inventory;
        this.IA = IA;

        if (this.IA.setId) {
            this.IA.setId(this.id);
        }
    }
}