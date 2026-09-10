"use strict";

class MovementSystem {
    constructor(world, ECS) {
        this.world = world;
        this.ECS = ECS;
    }
    isHexPositionOccupied(hexPosition) {
        let isOccupied = false;
        for (const [entity, position] of this.ECS.Position) { // TODO movement ???
            if (position.q === hexPosition.q && position.r === hexPosition.r && this.ECS.Name.get(entity) !== "campfire") {
                isOccupied = true;
            }
        }
        return isOccupied;
    }
    update() {
        this.ECS.Movement.forEach((value, key, map) => {
            let position = this.ECS.Position.get(key);
            if (position && value.path.length > 0) {
                let newHexPosition = value.path[0];
                if (!this.isHexPositionOccupied(newHexPosition)) {
                    position.q = newHexPosition.q;
                    position.r = newHexPosition.r;
                    value.path.shift();
                }
            }
        });
    }
}