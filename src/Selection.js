"use strict";

class Selection {
    constructor() {
        this.reset();
    }
    selectEntity(entity, selectedEntityData, hex) {
        this.selectedEntity = entity;
        this.selectedEntityData = selectedEntityData;
        this.selectedHex = undefined;
        this.selectedEntityHex = hex;
        this.isCommunity = false;
    }
    selectHex(hex) {
        this.selectedEntityHex = undefined;
        this.selectedEntity = undefined;
        this.selectedHex = hex;
        this.isCommunity = false;
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