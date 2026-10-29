"use strict";

class IA {
    constructor(ECS, world, actions) {
        this.ECS = ECS;
        this.world = world;
        this.actions = actions;
    }
    setOwner(owner) {
        this.owner = owner;
    }
    isHexPositionOccupied(hexPosition) {
        let isOccupied = false;
        for (const [entity, position] of this.ECS.Position) { // TODO movement ???
            if (hexPosition === undefined || (position.q === hexPosition.q && position.r === hexPosition.r && !this.ECS.Passable.get(entity))) {
                isOccupied = true;
            }
        }
        return isOccupied;
    }
    clean(world, ECS) {
        // TODO
        // on nettoie les ordres de l'IA chaque tour pour éviter 
        // les "lock" où l'IA ne prend plus de décision parce que 
        // l'unité a une action impossible (genre aller vers une tuile)
        // ECS.Order.delete(entity);
        // ECS.Movement.set(entity, { path: [] });
    }
    findHexWith(categoryName) {

    }
    roam(entity) {
        const position = this.ECS.Position.get(entity);
        const neighbors = World.getNeighbors(position.q, position.r);
        const destinationPosition = Random.fromArray(neighbors); //findHexWith...
        const destinationHex = this.world.get(destinationPosition.q, destinationPosition.r);
        if (!this.isHexPositionOccupied(destinationHex)) {
            this.actions.setMove(entity, destinationHex);
        }
    }
    harvest(harvester) {
        let orderGiven = false;
        const position = this.ECS.Position.get(harvester);
        const actualHex = this.world.get(position.q, position.r);
        actualHex.resources.forEach((resource) => {
            const resourceData = resource.resourceData;
            const actions = resourceData.actions;
            for (const actionName in actions) {
                const action = actions[actionName];
                const getCategory = Data.resources[action.get].category;
                if (this.owner.community.fillsConditions(action.requiresOneOf) && getCategory === "food" || getCategory === "tool") {
                    this.actions.setOrder(actualHex, resource, actionName, harvester);
                    orderGiven = true;
                }
            }
        });
        if (!orderGiven) {
            this.roam(harvester);
        }
    }
    createUnits() {
        let units = [];
        Data.creatableUnits.forEach((unitName) => {
            const unit = Data.units[unitName];
            if (this.owner.inventory.has(unit.unitPrice) &&
                !this.isHexPositionOccupied({ q: this.owner.startHexPosition.q, r: this.owner.startHexPosition.r })) {
                units.push(this.actions.createUnit(unitName, this.owner));
            }
        });
        return units;
    }
    getTargetting(entity) {
        let targetting;
        let damage = 0;
        // const entityName = this.ECS.Name.get(entity);
        const powers = this.ECS.CombatStats.get(entity).powers;
        const owner = this.ECS.Owner.get(entity);
        const hexPosition = this.ECS.Position.get(entity);
        for (const powerName in powers) {
            const powerData = powers[powerName];
            const targetableHexes = this.world.getHexesWithinRange(hexPosition, powerData.range);
            this.ECS.Position.forEach((position, target, map) => {
                targetableHexes.forEach((targetableHex) => {
                    if (position.q === targetableHex.q &&
                        position.r === targetableHex.r &&
                        this.ECS.Owner.get(target) !== owner &&
                        powerData.damage > damage) {

                        damage = powerData.damage;
                        targetting = {
                            attackerPosition: hexPosition,
                            attacker: entity,
                            powerData: powerData,
                            targetableHexes: targetableHexes,
                            targetHexPosition: position
                        }
                    }
                });
            });
        }
        return targetting;
    }
    act(entitites) {
        let isDone = true;
        entitites.push(...this.createUnits());
        entitites.forEach((entity) => {
            let position = this.ECS.Position.get(entity);
            let actionsCount = this.ECS.Available.get(entity);
            let targetting = this.getTargetting(entity);
            if ((this.owner.startHexPosition.q === position.q && this.owner.startHexPosition.r === position.r)) {
                this.roam(entity);
            } else if (targetting !== undefined) {
                // kick his ass
                this.actions.setPower(targetting.targetHexPosition, targetting);
                // console.log(this.ECS.Name.get(nearbyEnemy));
            } else if (this.ECS.Name.get(entity) === "harvester") {
                this.harvest(entity)
            } else {
                this.roam(entity);
            }
            if (actionsCount !== this.ECS.Available.get(entity)) {
                isDone = false;
            }
        });
        if (!isDone) {
            this.act(entitites);
        }
    }
}