"use strict";

class PowerSystem {
    constructor(world, ECS, unitCreator) {
        this.world = world;
        this.ECS = ECS;
        this.unitCreator = unitCreator;
    }
    hit(entity, damage) {
        const targetStats = this.ECS.CombatStats.get(entity);
        if (targetStats !== undefined) {
            targetStats.actualHP ??= targetStats.hp // n'assigner les points de vie actuels que s'il n'en a pas déjà
            targetStats.actualHP -= damage;
        } else {
            console.log("no entity there bro lol");
        }
    }
    usePower(power) {
        const attackerPosition = this.ECS.Position.get(power.attacker);
        const targetPosition = this.ECS.Position.get(power.targetEntity);
        console.log(power);
        if (power.powerData.damage !== undefined) {
            this.hit(power.targetEntity, power.powerData.damage);
        }
        if (power.powerData.effect === "transposition" && power.targetEntity !== undefined) {
            this.ECS.Position.set(power.attacker, { q: targetPosition.q, r: targetPosition.r });
            this.ECS.Position.set(power.targetEntity, { q: attackerPosition.q, r: attackerPosition.r });
        }
        if (power.powerData.effect === "summon") {
            if (this.ECS.Summons.get(power.attacker).length < this.ECS.CombatStats.get(power.attacker).amountOfSummons) {
                this.unitCreator.createSummon(power.powerData.summonName, power.targetHex, this.ECS.Owner.get(power.attacker), power.attacker);
            }
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