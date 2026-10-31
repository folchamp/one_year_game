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
        }
    }
    usePower(power) {
        const attackerOwner = this.ECS.Owner.get(power.attacker);
        const attackerPosition = this.ECS.Position.get(power.attacker);
        const targetPosition = this.ECS.Position.get(power.targetEntity);
        if (power.powerData.damage !== undefined) {
            this.hit(power.targetEntity, power.powerData.damage);
        }
        if (power.powerData.effect === "transposition" && power.targetEntity !== undefined) {
            this.ECS.Position.set(power.attacker, { q: targetPosition.q, r: targetPosition.r });
            this.ECS.Position.set(power.targetEntity, { q: attackerPosition.q, r: attackerPosition.r });
        }
        if (power.powerData.effect === "ral") {
            if (power.targetEntity !== undefined) {
                let availableActions = this.ECS.Available.get(power.targetEntity);
                availableActions = Math.max(availableActions - 1, 0);
                this.ECS.Available.set(power.targetEntity, availableActions);
            }
        }
        if (power.powerData.effect === "summon") {
            if (this.ECS.Summons.get(power.attacker).length < this.ECS.CombatStats.get(power.attacker).amountOfSummons) {
                this.unitCreator.createSummon(power.powerData.summonName, power.targetHex, this.ECS.Owner.get(power.attacker), power.attacker);
            }
        }
        if (power.powerData.effect === "jump" && power.targetEntity === undefined) {
            console.log(power);
            this.ECS.Position.set(power.attacker, { q: power.targetHex.q, r: power.targetHex.r });
        }
        if (power.powerData.effect === "vision") {
            this.world.seeNeighbours(power.targetHex, 0, attackerOwner);
            this.world.exploreTile(power.targetHex, attackerOwner);
        }
    }
    update(entity) {
        const power = this.ECS.Power.get(entity);
        const actualActions = this.ECS.Available.get(entity);
        if (actualActions > 0) {
            this.usePower(power);
            this.ECS.Available.set(entity, actualActions - 1);
        }
    }
}