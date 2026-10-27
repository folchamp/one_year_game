"use strict";

class ActionSystem {
    constructor(world, ECS) {
        this.world = world;
        this.ECS = ECS;
    }

    action(hex, resource, actionName, entity) {
        let resourceName = resource.resourceData.resourceName;
        let harvesterPosition = this.ECS.Position.get(entity);
        let owner = this.ECS.Owner.get(entity);
        if (hex.q === harvesterPosition.q && hex.r === harvesterPosition.r && resource.isAvailable) {
            let get = resource.resourceData.actions[actionName].get; // which resource does the action "get" (harvest)
            let knowledges = resource.resourceData.actions[actionName].learn;
            owner.inventory.add(Data.resources[get]); // on ajoute la ressource à l'inventaire
            hex.harvest(resourceName); // on ajoute la fatigue à la tuile
            if (resource.resourceData.resourceName !== get) {
                let newResourceData = Data.resources[get];
                hex.addResource(newResourceData); // si la ressource get n'est pas sur la tuile, on l'ajoute
            }
            if (knowledges !== undefined) {
                owner.community.learn(knowledges);
            }
        }
    }
    update(entity) {
        const order = this.ECS.Order.get(entity);
        if (this.ECS.Available.get(entity) === true) {
            this.action(order.hex, order.resource, order.actionName, entity);
            this.ECS.Available.set(entity, false);
        }
    }
}