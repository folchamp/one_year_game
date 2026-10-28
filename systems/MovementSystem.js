"use strict";

class MovementSystem {
    constructor(world, ECS) {
        this.world = world;
        this.ECS = ECS;
    }
    isHexPositionOccupied(hexPosition) {
        let isOccupied = false;
        for (const [entity, position] of this.ECS.Position) {
            if (hexPosition === undefined || (position.q === hexPosition.q && position.r === hexPosition.r && !this.ECS.Passable.get(entity))) {
                isOccupied = true;
            }
        }
        return isOccupied;
    }
    update(entity) {
        const movement = this.ECS.Movement.get(entity);
        const actualActions = this.ECS.Available.get(entity);
        let position = this.ECS.Position.get(entity);
        if (position && movement.path.length > 0) {
            let newHexPosition = movement.path[0];
            if (!this.isHexPositionOccupied(newHexPosition) && actualActions > 0) {
                position.q = newHexPosition.q;
                position.r = newHexPosition.r;
                movement.path.shift();
                this.ECS.Available.set(entity, actualActions - 1);
            }
        }
    }
}