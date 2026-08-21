"use strict";

class Game {
    constructor() {
        // actions
        this.actions = {
            resetCamera: { description: "Resets the camera to the center of the map", f: () => this.camera.resetCamera() },
            resetZoom: { description: "Resets the zoom of the camera", f: () => this.camera.resetZoom() },
            openHotkeysMenu: { description: "TODO : Open the hotkeys menu", f: () => { this.log.log(JSON.stringify(this.hotkeys.getHotkeys(), null, 4)); } },
            toggleDev: { description: "TODO : Toggle dev mode", f: () => this.toggleDev() },
            nextTick: { description: "Run a tick, advance the game by one time unit", f: () => this.tick() },
            zoomOut: { description: "Zoom out to see everything", f: () => this.camera.zoomOut() }
        };
        this.uiActions = {
            actionButtonClick: (hex, resource, actionName) => this.actionButtonClick(hex, resource, actionName), // { description: "The player harvests a resource from a tile", f: (hex, resourceName) => this.harvestResource(hex, resourceName) }
            feedCommunityClick: (resourceName) => this.feedCommunityClick(resourceName)
        }
        this.inventory = new Map();

        // parts
        this.log = new Log();
        this.world = new World();
        this.display = new Display();
        this.selection = new Selection();
        this.hotkeys = new Hotkeys();
        this.community = new Community();
        this.camera = new Camera(this.display.getCanvas());
        this.context = this.display.getContext();
        this.ECS = {};
        this.ui = new UI(this.selection, this.uiActions, this.inventory, this.community);

        this.movementSystem = new MovementSystem(this.world, this.ECS);
        this.render = new Render(this.context, this.display, this.camera, this.world, this.ECS, this.selection, this.community);


        // components (entity-components system)
        this.ECS.Explorer = new Map();
        this.ECS.Harvester = new Map();
        this.ECS.Name = new Map();
        this.ECS.Position = new Map();
        this.ECS.Sprite = new Map();
        this.ECS.Hitbox = new Map();
        this.ECS.Movement = new Map();
        this.ECS.Order = new Map();
        // hotkeys
        this.hotkeys.bind("KeyR", this.actions.resetCamera);
        this.hotkeys.bind("KeyW", this.actions.resetZoom);
        this.hotkeys.bind("KeyH", this.actions.openHotkeysMenu);
        this.hotkeys.bind("KeyD", this.actions.toggleDev);
        this.hotkeys.bind("Space", this.actions.nextTick);
        this.hotkeys.bind("KeyQ", this.actions.zoomOut);
        this.display.getCanvas().addEventListener("mousemove", (event) => { this.mousemove(event); });
        this.display.getCanvas().addEventListener("click", (event) => { this.click(event); });
        this.display.getCanvas().addEventListener("contextmenu", (event) => { this.rightclick(event); });

        // init game
        this.createCampfire(Settings.startHexPosition.q, Settings.startHexPosition.r);
        this.createExplorer(Settings.startHexPosition.q, Settings.startHexPosition.r);

        // start
        this.tick();
        this.loop();
    }
    isHexPositionOccupied(hexPosition) {
        let isOccupied = false;
        for (const [entity, position] of this.ECS.Movement) {
            if (position.q === hexPosition.q && position.r === hexPosition.r) {
                isOccupied = true;
            }
        }
        return isOccupied;
    }
    born() {
        if (!this.isHexPositionOccupied({ q: Settings.startHexPosition.q, r: Settings.startHexPosition.r })) {
            this.createExplorer(Settings.startHexPosition.q, Settings.startHexPosition.r);
        }
    }
    feedCommunityClick(resourceName) {
        let amount = this.inventory.get(resourceName);
        if (amount > 0) { // check a priori inutile parce que le bouton disparaît dans l'UI quand l'inventaire est vide mais... you never know
            this.community.feed(resourceName);
            this.inventory.set(resourceName, amount - 1);
        }
        this.ui.update();
    }
    cleanOrders() {
        this.ECS.Order.forEach((order, entity) => {
            const stillThere = order.hex.resources.some((resource) => {
                return resource.resourceData.resourceName === order.resource.resourceData.resourceName;
            });
            if (!stillThere) {
                // la ressource a été supprimée de la tuile, l'ordre ne peut plus être exécuté
                this.ECS.Order.delete(entity);
            }
        });
    }
    actionButtonClick(hex, resource, actionName) {
        this.ECS.Harvester.forEach((value, entity, map) => {
            let harvesterPosition = this.ECS.Position.get(entity);
            if (hex.q === harvesterPosition.q && hex.r === harvesterPosition.r) {
                this.ECS.Order.set(entity, { hex: hex, resource: resource, actionName: actionName });
                this.ECS.Movement.set(entity, { path: [] });
            }
        });
    }
    action(hex, resource, actionName) {
        let resourceName = resource.resourceData.resourceName;
        this.ECS.Harvester.forEach((value, entity, map) => {
            let harvesterPosition = this.ECS.Position.get(entity);
            if (hex.q === harvesterPosition.q && hex.r === harvesterPosition.r && resource.isAvailable) {
                let get = resource.resourceData.actions[actionName].get; // which resource does the action "get" (harvest)
                let knowledge = resource.resourceData.actions[actionName].learn;
                if (get !== undefined) {
                    let amount = this.inventory.get(get) ?? 0;
                    this.inventory.set(get, amount + 1);
                }
                if (knowledge !== undefined) {
                    this.community.learn(knowledge);
                }
                hex.harvest(resourceName, actionName);
            }
        });
        this.ui.update();
    }
    toggleDev() {
        this.log.toggle();
        Settings.production = !Settings.production;
    }
    createCampfire(q, r) {
        let entity = this.newEntity();
        this.ECS.Name.set(entity, "campfire");
        this.ECS.Position.set(entity, { q: q, r: r });
        this.ECS.Sprite.set(entity, { imageName: "campfire", width: 170, height: 170, radius: 100 });
        // this.ECS.Hitbox.set(entity, { type: "circle", radius: 100 });
        return entity;
    }
    createExplorer(q, r) {
        let entity = this.newEntity();
        this.ECS.Harvester.set(entity, {});
        this.ECS.Explorer.set(entity, true);
        this.ECS.Name.set(entity, "explorer");
        this.ECS.Position.set(entity, { q: q, r: r });
        this.ECS.Movement.set(entity, { path: [] });
        this.ECS.Sprite.set(entity, { imageName: "explorer", width: 64, height: 64, radius: 48 });
        this.ECS.Hitbox.set(entity, { type: "circle", radius: 48 });
        return entity;
    }
    getMouseWorldPosition(event) {
        let mousePosition = Util.getMousePosition(this.display.getCanvas(), event);
        let worldPosition = this.camera.screenToWorld(mousePosition);
        return worldPosition;
    }
    rightclick(event) {
        event.preventDefault();
        if (this.selection.selectedEntity !== undefined) {
            let entity = this.selection.selectedEntity;
            let worldPosition = this.getMouseWorldPosition(event);
            let hex = this.world.getHexFromWorldPosition(worldPosition);
            let movement = this.ECS.Movement.get(entity);
            if (movement !== undefined) {
                let position = this.ECS.Position.get(entity);
                movement.path = Pathfinding.find(position, hex);
                this.ECS.Order.delete(entity);
            }
        }
    }
    mousemove(event) {
        let worldPosition = this.getMouseWorldPosition(event);
        let hex = this.world.getHexFromWorldPosition(worldPosition);
        this.selection.hoveredHex = hex;
    }
    click(event) {
        let worldPosition = this.getMouseWorldPosition(event);
        let hex = this.world.getHexFromWorldPosition(worldPosition);
        let entity = this.getEntityFromWorldPosition(worldPosition);
        if (entity !== undefined) {
            this.selection.selectedEntity = entity;
            this.selection.selectedEntityData = this.ECS.Sprite.get(entity);
            this.selection.selectedHex = undefined;
        } else {
            this.selection.selectedEntity = undefined;
            this.selection.selectedHex = hex;
            this.log.log(JSON.stringify(hex, null, 4));
        }
        this.ui.update();
    }
    getEntityFromWorldPosition(worldPosition) {
        let entity;
        this.ECS.Hitbox.forEach((value, key, map) => {
            let position = this.ECS.Position.get(key);
            if (value.type === "circle" && Util.isPointInCircle(worldPosition, World.hexToWorld(position), value.radius)) {
                entity = key;
            }
        });
        return entity;
    }
    newEntity() {
        if (this.nextID === undefined) {
            this.nextID = 0;
        }
        return this.nextID++;
    }
    tick() {
        this.movementSystem.update();
        this.ECS.Order.forEach((order, entity, map) => {
            this.action(order.hex, order.resource, order.actionName);
        });
        this.ECS.Explorer.forEach((value, entity, map) => {
            this.world.exploreTile(this.ECS.Position.get(entity));
            this.world.seeNeightbours(this.ECS.Position.get(entity));
        });
        if (this.ECS.Explorer.size <= Math.floor(this.community.population / 100)) {
            this.born();
        }
        this.world.update();

        // au cas où des ressources ont disparu, les explorateurs doivent arrêter de travailler
        this.cleanOrders()

        // toujours en dernier
        this.ui.update();
    }
    loop() {
        this.render.render(this.world, this.ECS, this.selection);

        window.requestAnimationFrame(() => { this.loop(); });
    }
}