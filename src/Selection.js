"use strict";

class Selection {
    constructor() {
        this.reset();
    }
    selectEntity(entity, selectedEntityData, hex) {
        this.reset();
        this.selectedEntity = entity;
        this.selectedEntityData = selectedEntityData;
        this.selectedEntityHex = hex;
    }
    selectHex(hex) {
        this.reset();
        this.selectedHex = hex;
    }
    selectCommunity() {
        this.isCommunity = true;
    }
    reset() {
        this.hoveredHex = undefined;
        this.selectedHex = undefined;
        this.selectedEntity = undefined;
        this.selectedEntityHex = undefined; // la tuile sur laquelle se trouve l'entité sélectionnée
        this.isCommunity = false;
    }
}