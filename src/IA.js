"use strict";

class IA {
    constructor() {

    }
    act(world, ECS) {
        console.log(`computer ${this.id} acts`);
    }
    setId(id) {
        this.id = id;
    }
}