"use strict";

class IA {
    constructor(actions) {
        this.actions = actions;
    }
    setOwner(owner) {
        this.owner = owner;
    }
    isHexPositionOccupied(ECS, hexPosition) {
        let isOccupied = false;
        for (const [entity, position] of ECS.Position) { // TODO movement ???
            if (position.q === hexPosition.q && position.r === hexPosition.r && ECS.Name.get(entity) !== "campfire") {
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
    act(world, ECS) {
        for (let unitName in Data.units) {
            const unit = Data.units[unitName];
            if (unitName === "harvester" &&
                this.owner.inventory.has(unit.unitPrice) &&
                !this.isHexPositionOccupied(ECS, { q: this.owner.startHexPosition.q, r: this.owner.startHexPosition.r })) {
                this.actions.createUnit(unitName, this.owner);
            }
        }
        ECS.Harvester.forEach((value, harvester, map) => {
            if (ECS.Owner.get(harvester) === this.owner &&
                ECS.Order.get(harvester) === undefined &&
                ECS.Movement.get(harvester).path.length === 0) {
                let orderGiven = false;
                const position = ECS.Position.get(harvester);
                const actualHex = world.get(position.q, position.r);
                actualHex.resources.forEach((resource) => {
                    const resourceData = resource.resourceData;
                    const actions = resourceData.actions;
                    for (const actionName in actions) {
                        const action = actions[actionName];
                        if (this.owner.community.fillsConditions(action.requiresOneOf)) {
                            // console.log(`${resourceData.displayName} -> ${action.displayName}`);
                            this.actions.setOrder(actualHex, resource, actionName, harvester);
                            orderGiven = true;
                        }
                    }
                });
                if (!orderGiven) {
                    const neighbors = World.getNeighbors(position.q, position.r);
                    const destinationPosition = Random.fromArray(neighbors);
                    const destinationHex = world.get(destinationPosition.q, destinationPosition.r);
                    if (!this.isHexPositionOccupied(ECS, destinationHex)) {
                        this.actions.setMove(harvester, destinationHex);
                    }
                }
            }
        });
    }
}