"use strict";

class UnitCreator {
    constructor(ECS) {
        this.ECS = ECS;

        this.nextID = 0;
    }
    newEntity() {
        return this.nextID++;
    }
    createSummon(name, position, owner, summoner) {
        let entity = this.create(name, position, owner);
        this.ECS.Summons.get(summoner).push(entity); // l'invocateur a des invocations
        this.ECS.Summoner.set(entity, summoner); // l'invocation a un invocateur
    }
    create(name, position, owner) {
        let entity;
        if (name === "campfire") {
            // TODO généraliser ceci en "entités sans hitbox"
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
        this.ECS.CombatStats.set(entity, structuredClone(unitData.combatStats));
        this.ECS.Available.set(entity, unitData.combatStats.actions);
        this.ECS.Summons.set(entity, []);
        this.ECS.Passable.set(entity, false);
        return entity;
    }
    createCampfire(pos) {
        let entity = this.newEntity();
        this.ECS.Name.set(entity, "campfire");
        this.ECS.Position.set(entity, { q: pos.q, r: pos.r });
        this.ECS.Sprite.set(entity, structuredClone(Data.units["campfire"].sprite));
        this.ECS.CombatStats.set(entity, structuredClone(Data.units["campfire"].combatStats));
        this.ECS.Passable.set(entity, true);
        return entity;
    }
    killUnit(entity) {
        this.ECS.Harvester.delete(entity);
        this.ECS.Explorer.delete(entity);
        this.ECS.Name.delete(entity);
        this.ECS.Position.delete(entity);
        this.ECS.Movement.delete(entity);
        this.ECS.Sprite.delete(entity);
        this.ECS.Hitbox.delete(entity);
        this.ECS.CombatStats.delete(entity);
        this.ECS.Owner.delete(entity);
        this.ECS.Available.delete(entity);
        if (this.ECS.Summoner.get(entity)) {
            const summoner = this.ECS.Summoner.get(entity);
            const summons = this.ECS.Summons.get(summoner);
            const filteredSummons = summons.filter((summon) => { return summon !== entity }); // on ne garde dans la liste que les autres invocations
            // retirer l'entité décédée de la liste des invocations de l'invocateur
            this.ECS.Summons.set(summoner, filteredSummons);
        }
        if (this.ECS.Summons.get(entity).length > 0) {
            // tuer les invocations de l'invocateur
            this.ECS.Summons.get(entity).forEach((summon) => {
                this.killUnit(summon);
            });
        }
        this.ECS.Summons.delete(entity);
        this.ECS.Summoner.delete(entity);
    }
}