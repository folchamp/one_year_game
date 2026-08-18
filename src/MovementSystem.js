"use strict";

class MovementSystem {
    constructor(world, ECS) {
        this.world = world;
        this.ECS = ECS;
    }
    update() {
        this.ECS.Movement.forEach((value, key, map) => {
            let position = this.ECS.Position.get(key);
            if (position && value.path.length > 0) {
                let newHexPosition = value.path.shift();
                position.q = newHexPosition.q;
                position.r = newHexPosition.r;
            }
        });
    }
}