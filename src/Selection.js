"use strict";

class Selection {
    constructor() {
        this.reset();
    }
    selectEntity(entity, selectedEntityData, hex) {
        this.reset();
        this.selectedEntity = entity;
        this.selectedEntityData = selectedEntityData;
        this.selectedHex = hex;
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
        this.isCommunity = false;
    }
}