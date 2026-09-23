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
    create(name, q, r) {
        let entity;
        if (name === "explorer") {
            entity = this.createExplorer(q, r);
        }
        if (name === "harvester") {
            entity = this.createHarvester(q, r);
        }
        if (name === "campfire") {
            entity = this.createCampfire(q, r);
        }
        return entity;
    }
    createHarvester(q, r) {
        let entity = this.newEntity();
        this.ECS.Harvester.set(entity, {});
        this.ECS.Explorer.set(entity, { range: 1 });
        this.ECS.Name.set(entity, "harvester");
        this.ECS.Position.set(entity, { q: q, r: r });
        this.ECS.Movement.set(entity, { path: [] });
        this.ECS.Sprite.set(entity, { imageName: "harvester", width: 64, height: 64, radius: 48 });
        this.ECS.Hitbox.set(entity, { type: "circle", radius: 48 });
        return entity;
    }
    createExplorer(q, r) {
        let entity = this.newEntity();
        this.ECS.Harvester.set(entity, {});
        this.ECS.Explorer.set(entity, { range: 1 });
        this.ECS.Name.set(entity, "explorer");
        this.ECS.Position.set(entity, { q: q, r: r });
        this.ECS.Movement.set(entity, { path: [] });
        this.ECS.Sprite.set(entity, { imageName: "explorer", width: 64, height: 64, radius: 48 });
        this.ECS.Hitbox.set(entity, { type: "circle", radius: 48 });
        return entity;
    }
    createCampfire(q, r) {
        let entity = this.newEntity();
        this.ECS.Name.set(entity, "campfire");
        this.ECS.Position.set(entity, { q: q, r: r });
        this.ECS.Sprite.set(entity, { imageName: "campfire", width: 170, height: 170, radius: 100 });
        // this.ECS.Hitbox.set(entity, { type: "circle", radius: 100 });
        return entity;
    }
}