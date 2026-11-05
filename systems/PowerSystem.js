"use strict";

class PowerSystem {
    constructor(world, ECS, unitCreator, eventDispatcher) {
        this.world = world;
        this.ECS = ECS;
        this.unitCreator = unitCreator;
        this.eventDispatcher = eventDispatcher;
    }
    hit(entity, damage) {
        const targetStats = this.ECS.CombatStats.get(entity);
        if (targetStats !== undefined) {
            targetStats.actualHP ??= targetStats.hp // n'assigner les points de vie actuels que s'il n'en a pas déjà
            targetStats.actualHP -= damage;
            this.eventDispatcher.emit("damage", { entity, damage });
            this.eventDispatcher.emit("attack", { entity });
        }
    }
    usePower(power) {
        const attackerOwner = this.ECS.Owner.get(power.attacker);
        const attackerPosition = this.ECS.Position.get(power.attacker);
        const targetPosition = this.ECS.Position.get(power.targetEntity);
        power.targetEntities.forEach((targetEntity) => {
            // ----
            // damage (multiple targets)
            // ----
            if (power.powerData.damage !== undefined && power.powerData.damage > 0 && targetEntity !== power.attacker) {
                this.hit(targetEntity, power.powerData.damage);
            }
            // ----
            // heal
            // ----
            if (power.powerData.effect === "heal" && targetEntity !== undefined) {
                const combatStats = this.ECS.CombatStats.get(targetEntity);
                combatStats.actualHP = Math.min(combatStats.hp, combatStats.actualHP + power.powerData.healAmount);
                this.eventDispatcher.emit("boostPA", { entity: targetEntity });
            }
            // ----
            // ral (multiple targets)
            // ----
            if (power.powerData.effect === "ral") {
                if (targetEntity !== undefined && targetEntity !== power.attacker) {
                    let availableActions = this.ECS.Available.get(targetEntity);
                    availableActions = Math.max(availableActions - 1, 0);
                    this.ECS.Available.set(targetEntity, availableActions);
                    this.eventDispatcher.emit("ralPA", { entity: targetEntity });
                }
            }
            // ----
            // boost PA (multiple targets)
            // ----
            if (power.powerData.effect === "boostPA") {
                if (targetEntity !== undefined && targetEntity !== power.attacker) {
                    let availableActions = this.ECS.Available.get(targetEntity);
                    availableActions = availableActions + 1;
                    this.ECS.Available.set(targetEntity, availableActions);
                    this.eventDispatcher.emit("boostPA", { entity: targetEntity });
                }
            }
        });
        // ----
        // push (single target)
        // ----
        if (power.powerData.effect === "push" && power.targetEntity !== undefined) {
            const direction = this.world.findDirection(attackerPosition, targetPosition);
            if (direction !== undefined) {
                const pushDistance = power.powerData.pushDistance;
                for (let distance = 1; distance <= pushDistance; distance++) {
                    let newPosition = {
                        q: targetPosition.q + direction.q * distance,
                        r: targetPosition.r + direction.r * distance
                    };
                    let movementIsPossible = true;
                    this.ECS.Position.forEach((position, entity) => {
                        if (position.q === newPosition.q && position.r === newPosition.r && !this.ECS.Passable.get(entity)) {
                            movementIsPossible = false;
                        }
                    });
                    if (movementIsPossible) {
                        this.ECS.Position.set(power.targetEntity, { q: newPosition.q, r: newPosition.r });
                    }
                }
            }
        }
        // ----
        // transposition (single target)
        // ----
        if (power.powerData.effect === "transposition" && power.targetEntity !== undefined) {
            this.ECS.Position.set(power.attacker, { q: targetPosition.q, r: targetPosition.r });
            this.ECS.Position.set(power.targetEntity, { q: attackerPosition.q, r: attackerPosition.r });
            this.eventDispatcher.emit("boostPA", { entity: power.targetEntity });
            this.eventDispatcher.emit("boostPA", { entity: power.attacker });
        }
        // ----
        // summon (single hex target)
        // ----
        if (power.powerData.effect === "summon") {
            if (this.ECS.Summons.get(power.attacker).length < this.ECS.CombatStats.get(power.attacker).amountOfSummons && attackerOwner.inventory.has(power.powerData.price)) {
                attackerOwner.inventory.consume(power.powerData.price);
                this.unitCreator.createSummon(power.powerData.summonName, power.targetHex, attackerOwner, power.attacker);
            }
        }
        // ----
        // jump (single hex target)
        // ----
        if (power.powerData.effect === "jump" && power.targetEntity === undefined) {
            this.ECS.Position.set(power.attacker, { q: power.targetHex.q, r: power.targetHex.r });
        }
        // ----
        // vision (single hex target)
        // ----
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