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
            harvestResource: (hex, resourceName) => this.harvestResource(hex, resourceName) // { description: "The player harvests a resource from a tile", f: (hex, resourceName) => this.harvestResource(hex, resourceName) }
        }
        this.inventory = new Map();

        // parts
        this.log = new Log();
        this.world = new World();
        this.display = new Display();
        this.selection = new Selection();
        this.hotkeys = new Hotkeys();
        this.camera = new Camera(this.display.getCanvas());
        this.context = this.display.getContext();
        this.ECS = {};
        this.ui = new UI(this.selection, this.uiActions, this.inventory);

        this.movementSystem = new MovementSystem(this.world, this.ECS);
        this.render = new Render(this.context, this.display, this.camera, this.world, this.ECS, this.selection);


        // components (entity-components system)
        this.ECS.Harvester = new Map();
        this.ECS.Name = new Map();
        this.ECS.Position = new Map();
        this.ECS.Sprite = new Map();
        this.ECS.Hitbox = new Map();
        this.ECS.Movement = new Map();
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
        this.loop();
    }
    harvestResource(hex, resourceName) {
        this.ECS.Harvester.forEach((value, index, map) => {
            let harvesterPosition = this.ECS.Position.get(index);
            if (hex.q === harvesterPosition.q && hex.r === harvesterPosition.r) {
                let amount = this.inventory.get(resourceName) ?? 0;
                this.inventory.set(resourceName, amount + 1);
                hex.harvest(resourceName);
                this.ui.update();
            }
        });
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
        this.ECS.Hitbox.set(entity, { type: "circle", radius: 100 });

    }
    createExplorer(q, r) {
        let entity = this.newEntity();
        this.ECS.Harvester.set(entity, true);
        this.ECS.Name.set(entity, "explorer");
        this.ECS.Position.set(entity, { q: q, r: r });
        this.ECS.Movement.set(entity, { path: [] });
        this.ECS.Sprite.set(entity, { imageName: "explorer", width: 64, height: 64, radius: 48 });
        this.ECS.Hitbox.set(entity, { type: "circle", radius: 48 });
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
        console.log("tick");
        this.movementSystem.update();
        this.world.update();
        this.ui.update();
    }
    loop() {
        this.render.render(this.world, this.ECS, this.selection);

        window.requestAnimationFrame(() => { this.loop(); });
    }
}