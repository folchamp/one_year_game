"use strict";

class MovementSystem {
    constructor(world, ECS) {
        this.world = world;
        this.ECS = ECS;
    }
    isHexPositionOccupied(hexPosition) {
        let isOccupied = false;
        for (const [entity, position] of this.ECS.Position) { // TODO movement ???
            if (hexPosition === undefined || (position.q === hexPosition.q && position.r === hexPosition.r && this.ECS.Name.get(entity) !== "campfire")) {
                isOccupied = true;
            }
        }
        return isOccupied;
    }
    update(entity) {
        const movement = this.ECS.Movement.get(entity);
        let position = this.ECS.Position.get(entity);
        if (position && movement.path.length > 0) {
            let newHexPosition = movement.path[0];
            if (!this.isHexPositionOccupied(newHexPosition) && this.ECS.Available.get(entity) === true) {
                position.q = newHexPosition.q;
                position.r = newHexPosition.r;
                movement.path.shift();
                this.ECS.Available.set(entity, false);
            }
        }
    }
}