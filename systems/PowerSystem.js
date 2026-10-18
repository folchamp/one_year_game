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
            // const targetStats = this.ECS.CombatStats.get(power.targetEntity);
            // targetStats.hp -= power.powerData.damage;
        }
    }
    update(player) {
        this.ECS.Power.forEach((power, entity, map) => {
            const owner = this.ECS.Owner.get(entity);
            if (owner === player) {
                this.usePower(power);
            }
        });
    }
}