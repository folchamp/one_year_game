"use strict";

class IA {
    constructor(actions) {
        this.actions = actions;
    }
    setOwner(owner) {
        this.owner = owner;
    }
    act(world, ECS) {
        ECS.Harvester.forEach((value, harvester, map) => {
            if (ECS.Owner.get(harvester) === this.owner) {
                let orderGiven = false;
                const position = ECS.Position.get(harvester);
                const actualHex = world.get(position.q, position.r);
                actualHex.resources.forEach((resource) => {
                    const resourceData = resource.resourceData;
                    const actions = resourceData.actions;
                    for (const actionName in actions) {
                        const action = actions[actionName];
                        if (this.owner.community.fillsConditions(action.requiresOneOf)) {
                            console.log(`${resourceData.displayName} -> ${action.displayName}`);
                            this.actions.setOrder(actualHex, resource, actionName, harvester);
                            orderGiven = true;
                        }
                    }
                });
                if (!orderGiven) {
                    const neighbors = World.getNeighbors(position.q, position.r);
                    const destinationPosition = Random.fromArray(neighbors);
                    const destinationHex = world.get(destinationPosition.q, destinationPosition.r);
                    this.actions.setMove(harvester, destinationHex);
                }
            }
        });
    }
}