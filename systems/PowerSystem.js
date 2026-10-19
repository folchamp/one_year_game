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
        console.log(power);
        if (power.powerData.damage !== undefined) {
            this.hit(power.targetEntity, power.powerData.damage);
        }
        if (power.powerData.effect === "transposition" && power.targetEntity !== undefined) {
            const attackerPosition = this.ECS.Position.get(power.attacker);
            const targetPosition = this.ECS.Position.get(power.targetEntity);
            this.ECS.Position.set(power.attacker, { q: targetPosition.q, r: targetPosition.r });
            this.ECS.Position.set(power.targetEntity, { q: attackerPosition.q, r: attackerPosition.r });
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