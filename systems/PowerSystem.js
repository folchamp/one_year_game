"use strict";

class PowerSystem {
    constructor(world, ECS) {
        this.world = world;
        this.ECS = ECS;
    }
    hit(entity, damage) {
        const targetStats = this.ECS.CombatStats.get(entity);
        if (targetStats !== undefined) {
            targetStats.actualHP ??= targetStats.hp // n'assigner les points de vie actuels que s'il n'en a pas déjà
            targetStats.actualHP -= damage;
        } else {
            console.log("no entity there bro lol")
        }
    }
    usePower(power) {
        if (power.powerData.damage !== undefined) {
            this.hit(power.targetEntity, power.powerData.damage);
        }
    }
    update(entity) {
        const power = this.ECS.Power.get(entity);
        if (this.ECS.Available.get(entity) === true) {
            this.usePower(power);
            this.ECS.Available.set(entity, false);
        }
    }
}