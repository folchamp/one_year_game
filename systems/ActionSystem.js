"use strict";

class ActionSystem {
    constructor(world, ECS) {
        this.world = world;
        this.ECS = ECS;
    }

    action(hex, resource, actionName) {
        let resourceName = resource.resourceData.resourceName;
        this.ECS.Harvester.forEach((value, entity, map) => {
            let harvesterPosition = this.ECS.Position.get(entity);
            let owner = this.ECS.Owner.get(entity);
            if (hex.q === harvesterPosition.q && hex.r === harvesterPosition.r && resource.isAvailable) {
                let get = resource.resourceData.actions[actionName].get; // which resource does the action "get" (harvest)
                let knowledges = resource.resourceData.actions[actionName].learn;
                if (get !== undefined) {
                    if (Data.resources[get] !== undefined) {
                        owner.inventory.add(Data.resources[get]); // on ajoute la ressource à l'inventaire
                    }
                    if (resource.resourceData.resourceName !== get) {
                        let newResourceData = Data.resources[get];
                        hex.addResource(newResourceData); // si la ressource get n'est pas sur la tuile, on l'ajoute
                    }
                }
                if (knowledges !== undefined) {
                    owner.community.learn(knowledges);
                }
                hex.harvest(resourceName, actionName); // on ajoute la fatigue à la tuile
            }
        });
        // this.ui.update();
    }
    update(player) {
        this.ECS.Order.forEach((order, entity, map) => {
            const owner = this.ECS.Owner.get(entity);
            if (owner === player) {
                this.action(order.hex, order.resource, order.actionName);
            }
        });
    }
}