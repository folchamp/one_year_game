"use strict";

class UnitCreator {
    constructor(ECS) {
        this.ECS = ECS;
    }
    newEntity() {
        if (this.nextID === undefined) {
            this.nextID = 0;
        }
        return this.nextID++;
    }
    create(name, position, owner) {
        let entity;
        if (name === "campfire") {
            entity = this.createCampfire(position);
        } else {
            entity = this.createGenericUnit(name, position);
        }
        if (owner === undefined) {
            throw "owner undefined";
        }
        this.ECS.Owner.set(entity, owner);
        return entity;
    }
    createGenericUnit(name, pos) {
        const unitData = Data.units[name];
        const entity = this.newEntity();
        if (unitData.isHarvester) {
            this.ECS.Harvester.set(entity, {});
        }
        this.ECS.Explorer.set(entity, { range: unitData.range });
        this.ECS.Name.set(entity, name);
        this.ECS.Position.set(entity, { q: pos.q, r: pos.r });
        this.ECS.Movement.set(entity, { path: [] });
        this.ECS.Sprite.set(entity, structuredClone(unitData.sprite));
        this.ECS.Hitbox.set(entity, structuredClone(unitData.hitbox));
        return entity;
    }
    // createHarvester(pos) {
    //     let entity = this.newEntity();
    //     this.ECS.Harvester.set(entity, {});
    //     this.ECS.Explorer.set(entity, { range: 1 });
    //     this.ECS.Name.set(entity, "harvester");
    //     this.ECS.Position.set(entity, { q: pos.q, r: pos.r });
    //     this.ECS.Movement.set(entity, { path: [] });
    //     this.ECS.Sprite.set(entity, { imageName: "harvester", width: 64, height: 64, radius: 48 });
    //     this.ECS.Hitbox.set(entity, { type: "circle", radius: 48 });
    //     return entity;
    // }
    // createExplorer(pos) {
    //     let entity = this.newEntity();
    //     // this.ECS.Harvester.set(entity, {});
    //     this.ECS.Explorer.set(entity, { range: 2 });
    //     this.ECS.Name.set(entity, "explorer");
    //     this.ECS.Position.set(entity, { q: pos.q, r: pos.r });
    //     this.ECS.Movement.set(entity, { path: [] });
    //     this.ECS.Sprite.set(entity, { imageName: "explorer", width: 64, height: 64, radius: 48 });
    //     this.ECS.Hitbox.set(entity, { type: "circle", radius: 48 });
    //     return entity;
    // }
    createCampfire(pos) {
        let entity = this.newEntity();
        this.ECS.Name.set(entity, "campfire");
        this.ECS.Position.set(entity, { q: pos.q, r: pos.r });
        this.ECS.Sprite.set(entity, { imageName: "campfire", width: 170, height: 170, radius: 100 });
        // this.ECS.Hitbox.set(entity, { type: "circle", radius: 100 });
        return entity;
    }
}