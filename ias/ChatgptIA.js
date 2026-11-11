
"use strict";

class IA {
    constructor(ECS, world, actions) {
        this.ECS = ECS;
        this.world = world;
        this.actions = actions;
        this.owner = undefined;

        // Sécurité contre les boucles d'actions infinies.
        this.maxActionPasses = 12;
    }

    setOwner(owner) {
        this.owner = owner;
    }

    // --------------------------------------------------
    // OUTILS GÉNÉRAUX
    // --------------------------------------------------

    getUnitData(entity) {
        const name = this.ECS.Name.get(entity);
        return Data.units[name];
    }

    isEnemy(entity) {
        const entityOwner = this.ECS.Owner.get(entity);
        return entityOwner !== undefined && entityOwner !== this.owner;
    }

    isFriendly(entity) {
        return this.ECS.Owner.get(entity) === this.owner;
    }

    getActualHP(entity) {
        const stats = this.ECS.CombatStats.get(entity);
        if (!stats) return 0;
        return stats.actualHP ?? stats.hp;
    }

    getHexKey(position) {
        return `${position.q}, ${position.r}`;
    }

    isHexPositionOccupied(hexPosition, ignoredEntity = undefined) {
        if (hexPosition === undefined) return true;

        let occupied = false;

        this.ECS.Position.forEach((position, entity) => {
            if (
                entity !== ignoredEntity &&
                position.q === hexPosition.q &&
                position.r === hexPosition.r &&
                this.ECS.Passable.get(entity) !== true
            ) {
                occupied = true;
            }
        });

        return occupied;
    }

    getUnitsInHexes(hexes) {
        const keys = new Set(
            hexes.map(hex => this.getHexKey(hex))
        );

        const result = [];

        this.ECS.Position.forEach((position, entity) => {
            if (!keys.has(this.getHexKey(position))) return;

            const stats = this.ECS.CombatStats.get(entity);
            const owner = this.ECS.Owner.get(entity);

            if (stats === undefined || owner === undefined) return;
            if (this.getActualHP(entity) <= 0) return;

            result.push({
                entity,
                position,
                stats,
                owner
            });
        });

        return result;
    }

    getNearestEnemyDistance(position, ignoredEntity = undefined) {
        let nearestDistance = Infinity;

        this.ECS.Position.forEach((enemyPosition, entity) => {
            if (entity === ignoredEntity || !this.isEnemy(entity)) return;
            if (!this.ECS.CombatStats.get(entity)) return;
            if (this.getActualHP(entity) <= 0) return;

            const distance = World.getDistance(position, enemyPosition);
            nearestDistance = Math.min(nearestDistance, distance);
        });

        return nearestDistance;
    }

    // --------------------------------------------------
    // GÉOMÉTRIE DES POUVOIRS
    // --------------------------------------------------

    getAffectedHexes(center, powerData) {
        const zone = powerData.zone;

        if (
            zone &&
            zone.type === "circle" &&
            Number(zone.size) > 0
        ) {
            return this.world.getHexesWithinRange(
                center,
                Number(zone.size)
            ).filter(Boolean);
        }

        const hex = this.world.get(center.q, center.r);

        return hex ? [hex] : [];
    }

    getTargetEntities(entity, center, affectedUnits, powerData) {
        const effect = powerData.effect;
        const result = [];

        for (const unit of affectedUnits) {
            const isAtCenter =
                unit.position.q === center.q &&
                unit.position.r === center.r;

            // Heal : uniquement les alliés.
            if (effect === "heal") {
                if (unit.owner === this.owner) {
                    result.push(unit.entity);
                }
                continue;
            }

            // Boost PA : alliés, sauf le lanceur.
            if (effect === "boostPA") {
                if (unit.owner === this.owner && unit.entity !== entity) {
                    result.push(unit.entity);
                }
                continue;
            }

            // Ralentissement : ennemis uniquement.
            if (effect === "ral") {
                if (this.isEnemy(unit.entity) && unit.entity !== entity) {
                    result.push(unit.entity);
                }
                continue;
            }

            // Push et transposition : une cible centrale.
            if (effect === "push" || effect === "transposition") {
                if (
                    isAtCenter &&
                    unit.entity !== entity &&
                    this.isEnemy(unit.entity)
                ) {
                    result.push(unit.entity);
                }
                continue;
            }

            // Attaque classique : ennemis uniquement.
            if (
                powerData.damage > 0 &&
                unit.entity !== entity &&
                this.isEnemy(unit.entity)
            ) {
                result.push(unit.entity);
            }
        }

        return result;
    }

    // --------------------------------------------------
    // ÉVALUATION DES POUVOIRS
    // --------------------------------------------------

    getThreatValue(entity) {
        const stats = this.ECS.CombatStats.get(entity);

        if (!stats || !stats.powers) return 0;

        let maximumDamage = 0;

        for (const powerName in stats.powers) {
            const power = stats.powers[powerName];
            maximumDamage = Math.max(
                maximumDamage,
                Number(power.damage) || 0
            );
        }

        return maximumDamage * 0.8 + (stats.actions || 0) * 0.4;
    }

    getPushTravel(attackerPosition, target, powerData) {
        if (typeof this.world.findDirection !== "function") return 0;

        const direction = this.world.findDirection(
            attackerPosition,
            target.position
        );

        if (!direction) return 0;

        const distance = Number(powerData.pushDistance) || 0;
        let travel = 0;

        for (let i = 1; i <= distance; i++) {
            const nextPosition = {
                q: target.position.q + direction.q * i,
                r: target.position.r + direction.r * i
            };

            if (!this.world.get(nextPosition.q, nextPosition.r)) break;

            if (this.isHexPositionOccupied(nextPosition, target.entity)) {
                break;
            }

            travel++;
        }

        return travel;
    }

    evaluatePower(entity, attackerPosition, center, units, powerData) {
        const effect = powerData.effect;
        const damage = Math.max(0, Number(powerData.damage) || 0);

        let score = 0;

        // ------------------------------
        // DÉGÂTS
        // ------------------------------

        if (damage > 0) {
            for (const unit of units) {
                if (unit.entity === entity) continue;

                const currentHP = this.getActualHP(unit.entity);
                const effectiveDamage = Math.min(damage, currentHP);

                if (this.isEnemy(unit.entity)) {
                    score += effectiveDamage * 2.5;

                    // Bonus important pour une élimination.
                    if (damage >= currentHP) {
                        score += 12 + this.getThreatValue(unit.entity);
                    }

                    // Priorité légère aux ennemis déjà blessés.
                    score += (1 - currentHP / unit.stats.hp) * 2;
                } else {
                    // Éviter absolument les dégâts alliés.
                    score -= effectiveDamage * 6;
                }
            }
        }

        // ------------------------------
        // PUSH
        // ------------------------------

        if (effect === "push") {
            for (const unit of units) {
                if (unit.entity === entity) continue;

                if (unit.owner !== this.owner) {
                    score += 5 + this.getThreatValue(unit) * 0.5;
                } else {
                    score -= 8;
                }
            }
        }

        // ------------------------------
        // LIFESTEAL
        // ------------------------------

        if (effect === "lifesteal") {
            for (const unit of units) {
                if (unit.entity === entity) continue;

                if (unit.owner !== this.owner) {
                    score += 5 + this.getThreatValue(unit) * 0.5;
                } else {
                    score -= 8;
                }
            }
        }

        // ------------------------------
        // SOIN
        // ------------------------------

        if (effect === "heal") {
            const healAmount = Number(powerData.healAmount) || 0;

            for (const unit of units) {
                const missingHP = Math.max(
                    0,
                    unit.stats.hp - this.getActualHP(unit.entity)
                );

                const effectiveHeal = Math.min(healAmount, missingHP);

                if (unit.owner === this.owner) {
                    const healthRatio = this.getActualHP(unit.entity) / unit.stats.hp;

                    score += effectiveHeal * 2.5;

                    if (healthRatio <= 0.35 && effectiveHeal > 0) {
                        score += 7;
                    }
                } else {
                    // Ne jamais soigner volontairement un ennemi.
                    score -= effectiveHeal * 4;
                }
            }
        }

        // ------------------------------
        // BOOST PA
        // ------------------------------

        if (effect === "boostPA") {
            for (const unit of units) {
                if (unit.entity === entity) continue;

                if (unit.owner === this.owner) {
                    score += 5 + this.getThreatValue(unit.entity) * 0.5;
                } else {
                    score -= 8;
                }
            }
        }

        // ------------------------------
        // RALENTISSEMENT
        // ------------------------------

        if (effect === "ral") {
            for (const unit of units) {
                if (unit.entity === entity) continue;

                if (this.isEnemy(unit.entity)) {
                    score += 5 + this.getThreatValue(unit.entity);
                } else {
                    score -= 9;
                }
            }
        }

        // ------------------------------
        // PUSH
        // ------------------------------

        if (effect === "push") {
            const target = units.find(unit =>
                unit.position.q === center.q &&
                unit.position.r === center.r
            );

            if (target && target.entity !== entity) {
                if (this.isEnemy(target.entity)) {
                    const travel = this.getPushTravel(
                        attackerPosition,
                        target,
                        powerData
                    );

                    score += 3 + travel * 2;
                } else {
                    score -= 10;
                }
            }
        }

        // ------------------------------
        // INVOCATION
        // ------------------------------

        if (effect === "summon") {
            const stats = this.ECS.CombatStats.get(entity);
            const summons = this.ECS.Summons?.get(entity) ?? [];
            const maxSummons = stats.amountOfSummons ?? 0;
            const price = powerData.price;

            if (
                summons.length < maxSummons &&
                !this.isHexPositionOccupied(center) &&
                this.owner.inventory.has(price)
            ) {
                const enemyDistance = this.getNearestEnemyDistance(center);

                score += 6;

                if (Number.isFinite(enemyDistance)) {
                    score += Math.max(0, 3 - enemyDistance) * 2;
                }
            }
        }

        // ------------------------------
        // BOND
        // ------------------------------

        if (effect === "jump") {
            if (!this.isHexPositionOccupied(center, entity)) {
                const oldDistance = this.getNearestEnemyDistance(attackerPosition);
                const newDistance = this.getNearestEnemyDistance(center);

                if (Number.isFinite(oldDistance) && Number.isFinite(newDistance)) {
                    const improvement = oldDistance - newDistance;

                    score += Math.max(0, improvement) * 3;

                    if (newDistance <= 1 && improvement > 0) {
                        score += 5;
                    }
                }
            }
        }

        // La vision et la transposition pourront recevoir
        // leurs propres heuristiques quand leurs règles tactiques
        // seront définies plus précisément.

        return score;
    }

    getTargetting(entity, positionOverride = undefined) {
        const attackerPosition =
            positionOverride ?? this.ECS.Position.get(entity);

        const stats = this.ECS.CombatStats.get(entity);

        if (!attackerPosition || !stats || !stats.powers) {
            return undefined;
        }

        let bestTargetting = undefined;
        let bestScore = 0;

        for (const powerName in stats.powers) {
            const powerData = stats.powers[powerName];

            const targetableHexes = this.world.getTargettableHexes(
                attackerPosition,
                powerData
            ) ?? [];

            for (const targetHex of targetableHexes) {
                const center = {
                    q: targetHex.q,
                    r: targetHex.r
                };

                if (!this.world.get(center.q, center.r)) continue;

                const affectedHexes = this.getAffectedHexes(
                    center,
                    powerData
                );

                const units = this.getUnitsInHexes(affectedHexes);

                const score = this.evaluatePower(
                    entity,
                    attackerPosition,
                    center,
                    units,
                    powerData
                );

                if (score <= bestScore) continue;

                const targetEntities = this.getTargetEntities(
                    entity,
                    center,
                    units,
                    powerData
                );

                const targetEntity = units.find(unit =>
                    unit.position.q === center.q &&
                    unit.position.r === center.r &&
                    unit.entity !== entity &&
                    this.isEnemy(unit.entity)
                )?.entity;

                bestScore = score;

                bestTargetting = {
                    attackerPosition,
                    attacker: entity,
                    powerData,

                    // On conserve tes champs existants.
                    targetableHexes,
                    targetHexPosition: center,

                    // Informations supplémentaires pour Actions.
                    targetHex: this.world.get(center.q, center.r),
                    targetEntity,
                    targetEntities,
                    affectedHexes,
                    score
                };
            }
        }

        return bestTargetting;
    }

    // --------------------------------------------------
    // RÉCOLTE
    // --------------------------------------------------

    getHarvestOption(hex, harvester) {
        if (!hex || !hex.resources) return undefined;

        const community = this.owner.community;

        for (const resource of hex.resources) {
            const actions = resource.resourceData.actions;

            for (const actionName in actions) {
                const action = actions[actionName];
                const resourceData = Data.resources[action.get];

                if (!resourceData) continue;

                const category = resourceData.category;

                const requirementsMet =
                    !action.requiresOneOf ||
                    community.fillsConditions(action.requiresOneOf);

                if (
                    requirementsMet &&
                    (category === "food" || category === "tool")
                ) {
                    return {
                        resource,
                        actionName
                    };
                }
            }
        }

        return undefined;
    }

    harvest(harvester) {
        const position = this.ECS.Position.get(harvester);
        const hex = this.world.get(position.q, position.r);

        const option = this.getHarvestOption(hex, harvester);

        if (!option) return false;

        this.actions.setOrder(
            hex,
            option.resource,
            option.actionName,
            harvester
        );

        return true;
    }

    getNearestHarvestDistance(position) {
        let nearestDistance = Infinity;

        for (const hex of this.world.hexesArray) {
            if (!this.getHarvestOption(hex)) continue;

            const distance = World.getDistance(position, hex);
            nearestDistance = Math.min(nearestDistance, distance);
        }

        return nearestDistance;
    }

    // --------------------------------------------------
    // DÉPLACEMENT
    // --------------------------------------------------

    getReachableHexes(entity) {
        const position = this.ECS.Position.get(entity);
        const unitData = this.getUnitData(entity);

        // Hypothèse : le range de Data.units correspond
        // à la portée maximale de déplacement.
        const maxDistance = Math.max(1, Number(unitData?.range) || 1);

        const queue = [{
            position,
            distance: 0
        }];

        const visited = new Set([
            this.getHexKey(position)
        ]);

        const result = [];

        let index = 0;

        while (index < queue.length) {
            const current = queue[index++];

            if (current.distance > 0) {
                const hex = this.world.get(
                    current.position.q,
                    current.position.r
                );

                if (hex) {
                    result.push({
                        hex,
                        distance: current.distance
                    });
                }
            }

            if (current.distance >= maxDistance) continue;

            const neighbors = World.getNeighbors(
                current.position.q,
                current.position.r
            );

            for (const neighbor of neighbors) {
                const key = this.getHexKey(neighbor);

                if (visited.has(key)) continue;
                if (!this.world.get(neighbor.q, neighbor.r)) continue;
                if (this.isHexPositionOccupied(neighbor, entity)) continue;

                visited.add(key);

                queue.push({
                    position: neighbor,
                    distance: current.distance + 1
                });
            }
        }

        return result;
    }

    getBestMove(entity) {
        const position = this.ECS.Position.get(entity);
        const reachableHexes = this.getReachableHexes(entity);
        const unitData = this.getUnitData(entity);

        if (!reachableHexes.length) return undefined;

        let bestHex = undefined;
        let bestScore = -Infinity;

        const isHarvester =
            unitData?.isHarvester === true;

        const currentHarvestDistance =
            isHarvester
                ? this.getNearestHarvestDistance(position)
                : Infinity;

        const currentEnemyDistance =
            this.getNearestEnemyDistance(position);

        for (const candidate of reachableHexes) {
            const candidatePosition = {
                q: candidate.hex.q,
                r: candidate.hex.r
            };

            let score = 0;

            if (isHarvester && Number.isFinite(currentHarvestDistance)) {
                const harvestDistance = this.getNearestHarvestDistance(
                    candidatePosition
                );

                score =
                    (currentHarvestDistance - harvestDistance) * 3 -
                    candidate.distance * 0.2;
            } else {
                const enemyDistance = this.getNearestEnemyDistance(
                    candidatePosition
                );

                const attackPotential =
                    this.getTargetting(entity, candidatePosition)?.score ?? 0;

                const advance =
                    Number.isFinite(currentEnemyDistance) &&
                        Number.isFinite(enemyDistance)
                        ? currentEnemyDistance - enemyDistance
                        : 0;

                score =
                    attackPotential * 1.2 +
                    advance * 2 -
                    candidate.distance * 0.2;
            }

            if (score > bestScore) {
                bestScore = score;
                bestHex = candidate.hex;
            }
        }

        // En l'absence d'objectif, petit déplacement exploratoire.
        if (bestScore <= 0 && !Number.isFinite(currentHarvestDistance)) {
            return Random.fromArray(reachableHexes)?.hex;
        }

        return bestHex;
    }

    roam(entity) {
        const destinationHex = this.getBestMove(entity);

        if (!destinationHex) return false;

        this.actions.setMove(entity, destinationHex);

        return true;
    }

    // --------------------------------------------------
    // PRODUCTION
    // --------------------------------------------------

    createUnits() {
        const createdUnits = [];
        if (!this.owner.startHexPosition) return createdUnits;

        if (
            this.isHexPositionOccupied(this.owner.startHexPosition)
        ) {
            return createdUnits;
        }

        // L'ordre de Data.creatableUnits définit ici
        // la priorité de production.
        this.ECS.UnitsCreated.forEach((unitsCreated, campfire) => {
            if (unitsCreated < Settings.unitsPerTurn && this.ECS.Owner.get(campfire) === this.owner) {
                for (const unitName of Data.creatableUnits) {
                    const unit = Data.units[unitName];
                    if (!unit) continue;

                    if (this.owner.inventory.has(unit.unitPrice)) {
                        const newUnit = this.actions.createUnit(
                            unitName,
                            this.owner,
                            campfire
                        );

                        if (newUnit !== undefined) {
                            createdUnits.push(newUnit);
                        }

                        // Une unité par emplacement de production.
                        break;
                    }
                }
            }
        });

        return createdUnits;
    }

    // --------------------------------------------------
    // PRISE DE DÉCISION
    // --------------------------------------------------

    takeAction(entity) {
        // 1. Chercher le meilleur pouvoir disponible.
        const targetting = this.getTargetting(entity);

        if (targetting && targetting.score > 0) {
            this.actions.setPower(
                targetting.targetHexPosition,
                targetting
            );
            return true;
        }

        // 2. Récolter si possible.
        const unitData = this.getUnitData(entity);

        if (
            unitData?.isHarvester &&
            this.harvest(entity)

        ) {
            return true;
        }

        // 3. Sinon, chercher une meilleure position.
        return this.roam(entity);
    }

    act(entities) {
        const activeEntities = [
            ...new Set([
                ...entities,
                ...this.createUnits()
            ])
        ];

        console.log(activeEntities);

        // On utilise une boucle bornée plutôt qu'une récursion.
        for (let pass = 0; pass < this.maxActionPasses; pass++) {
            let actionConsumed = false;

            for (const entity of activeEntities) {
                const before =
                    this.ECS.Available.get(entity) ?? 0;

                if (before <= 0) continue;

                this.takeAction(entity);

                const after =
                    this.ECS.Available.get(entity) ?? before;

                if (after < before) {
                    actionConsumed = true;
                }
            }

            // Si les actions ne sont pas consommées immédiatement,
            // on attend la prochaine actualisation de l'IA.
            if (!actionConsumed) break;
        }
    }

    clean() {
        // À utiliser plus tard pour supprimer les ordres
        // devenus invalides entre deux tours.
    }
}
