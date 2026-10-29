"use strict";

class Game {
    constructor() {
        // actions
        this.actions = {
            selectNextIdle: { description: "Selects the next idle entity", f: () => this.selectNextIdle(this.humanPlayer) },
            resetCamera: { description: "Resets the camera to the center of the map", f: () => this.camera.resetCamera() },
            resetZoom: { description: "Resets the zoom of the camera", f: () => this.camera.resetZoom() },
            openHotkeysMenu: { description: "Open the hotkeys menu", f: () => { this.log.log(JSON.stringify(this.hotkeys.getHotkeys(), null, 4)); } },
            toggleDev: { description: "Toggle dev mode", f: () => this.toggleDev() },
            nextTick: { description: "Run a tick, advance the game by one time unit", f: () => this.tick() },
            zoomOut: { description: "Zoom out to see everything", f: () => this.camera.zoomOut() },
            downloadResources: { description: "Add Data.resources to clipboard", f: () => this.downloadResources() },
            usePower1: { description: "use power", f: () => this.ui.usePower(0) },
            usePower2: { description: "use power", f: () => this.ui.usePower(1) },
            usePower3: { description: "use power", f: () => this.ui.usePower(2) },
            usePower4: { description: "use power", f: () => this.ui.usePower(3) }
        };
        this.uiActions = {
            createUnit: (unitName, player) => { return this.createUnit(unitName, player); },
            powerButtonClick: (entity, powerData) => this.powerButtonClick(entity, powerData),
            actionButtonClick: (hex, resource, actionName) => this.actionButtonClick(hex, resource, actionName),
            cameraLeft: () => this.camera.cameraLeft(),
            cameraRight: () => this.camera.cameraRight(),
            cameraUp: () => this.camera.cameraUp(),
            cameraDown: () => this.camera.cameraDown(),
            nextTick: () => this.tick()
        }
        this.iaActions = {
            createUnit: (unitName, player) => { return this.createUnit(unitName, player); },
            setMove: (entity, hex) => this.setMove(entity, hex),
            setOrder: (hex, resource, actionName, entity) => this.setOrder(hex, resource, actionName, entity),
            setPower: (targetHex, targetting) => this.setPower(targetHex, targetting)
        };

        // display
        this.display = new Display();
        this.camera = new Camera(this.display.getCanvas());
        this.context = this.display.getContext();

        // components (entity-components system)
        this.ECS = {};
        this.ECS.Explorer = new Map();
        this.ECS.Harvester = new Map();
        this.ECS.Name = new Map();
        this.ECS.Position = new Map();
        this.ECS.Sprite = new Map();
        this.ECS.Hitbox = new Map();
        this.ECS.Movement = new Map();
        this.ECS.Order = new Map();
        this.ECS.Owner = new Map();
        this.ECS.CombatStats = new Map();
        this.ECS.Power = new Map();
        this.ECS.Available = new Map();
        this.ECS.Summons = new Map();
        this.ECS.Summoner = new Map();
        this.ECS.Passable = new Map();
        this.ECS.WorldPosition = new Map();

        // engine
        this.log = new Log();
        this.tooltip = new Tooltip();
        this.world = new World();
        this.selection = new Selection();
        this.hotkeys = new Hotkeys();
        this.unitCreator = new UnitCreator(this.ECS);
        this.movementSystem = new MovementSystem(this.world, this.ECS);
        this.actionSystem = new ActionSystem(this.world, this.ECS);
        this.powerSystem = new PowerSystem(this.world, this.ECS, this.unitCreator);

        // player
        this.inventory = new Inventory();
        this.community = new Community();
        this.humanPlayer = new Player(0, this.community, this.inventory, new IA(this.ECS, this.world, this.iaActions));
        this.ui = new UI(this.selection, this.uiActions, this.humanPlayer, this.tooltip);

        // hotkeys
        this.hotkeys.bind("Backquote", this.actions.selectNextIdle);
        this.hotkeys.bind("KeyY", this.actions.resetCamera);
        this.hotkeys.bind("KeyI", this.actions.resetZoom);
        this.hotkeys.bind("KeyH", this.actions.openHotkeysMenu);
        this.hotkeys.bind("KeyD", this.actions.toggleDev);
        this.hotkeys.bind("Space", this.actions.nextTick);
        this.hotkeys.bind("KeyU", this.actions.zoomOut);
        this.hotkeys.bind("KeyT", this.actions.downloadResources);
        this.hotkeys.bind("KeyQ", this.actions.usePower1);
        this.hotkeys.bind("KeyW", this.actions.usePower2);
        this.hotkeys.bind("KeyE", this.actions.usePower3);
        this.hotkeys.bind("KeyR", this.actions.usePower4);
        this.display.getCanvas().addEventListener("mousemove", (event) => { this.mousemove(event); });
        this.display.getCanvas().addEventListener("click", (event) => { this.click(event); });
        this.display.getCanvas().addEventListener("contextmenu", (event) => { this.rightclick(event); });

        // render
        this.render = new Render(this.context, this.display, this.camera, this.world, this.ECS, this.selection, this.humanPlayer);

        // init game
        this.unitCreator.create("campfire", Settings.startHexPositions[0], this.humanPlayer);
        this.unitCreator.create("harvester", Settings.startHexPositions[0], this.humanPlayer);

        this.computers = [];
        for (let index = 1; index < Math.min(Settings.amountOfPlayers, Settings.maxAmountOfPlayers); index++) {
            const computer = new Player(index, new Community, new Inventory, new IA(this.ECS, this.world, this.iaActions));
            this.computers.push(computer);

            this.unitCreator.create("campfire", Settings.startHexPositions[index], computer);
            this.unitCreator.create("harvester", Settings.startHexPositions[index], computer);
        }

        this.idleCycleCounter = 0;
        this.lastIdleCount = 0;
        this.targetting = undefined;

        // start
        this.explore();
        this.ui.update();
        this.selectNextIdle(this.humanPlayer);

        this.lastTimeStamp = Date.now();
        this.loop();
    }
    downloadResources() {
        navigator.clipboard.writeText(JSON.stringify(Data.resources));
    }
    toggleDev() {
        this.log.toggle();
        Settings.production = !Settings.production;
        this.ui.update();
    }
    getMouseWorldPosition(event) {
        let mousePosition = Util.getMousePosition(this.display.getCanvas(), event);
        let worldPosition = this.camera.screenToWorld(mousePosition);
        this.ui.setLastMousePosition(mousePosition);
        return worldPosition;
    }
    rightclick(event) {
        event.preventDefault();
        if (this.targetting !== undefined) {
            this.cleanTargetting();
        } else if (this.selection.selectedEntity !== undefined) {
            let entity = this.selection.selectedEntity;
            let worldPosition = this.getMouseWorldPosition(event);
            let hex = this.world.getHexFromWorldPosition(worldPosition);
            this.setMove(entity, hex);
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
        if (this.targetting !== undefined) {
            // si on est en mode ciblage, le hex sur lequel on a cliqué devient la cible
            this.setPower(hex, this.targetting);
        } else if (entity !== undefined && this.ECS.Owner.get(entity) === this.humanPlayer) {
            // si une entité est sous le clic, on la sélectionne
            this.selectEntity(entity);
        } else {
            // sinon, on sélectionne le hex
            this.selectHex(hex);
        }
        this.ui.update();
    }
    getEntityFromWorldPosition(worldPosition) {
        let entity;
        this.ECS.Hitbox.forEach((hitbox, targetedEntity, map) => {
            let position = this.ECS.Position.get(targetedEntity);
            if (hitbox.type === "circle" && Util.isPointInCircle(worldPosition, World.hexToWorld(position), hitbox.radius)) {
                entity = targetedEntity;
            }
        });
        return entity;
    }
    createUnit(unitName, owner) {
        const unitData = Data.units[unitName];
        const price = unitData.unitPrice;
        let unit;
        if (owner === this.humanPlayer && this.movementSystem.isHexPositionOccupied({ q: owner.startHexPosition.q, r: owner.startHexPosition.r })) {
            alert("hex is not free");
        } else if (!owner.inventory.has(price) && Settings.production) {
            alert("not enough resources");
        } else {
            owner.inventory.consume(price)
            unit = this.unitCreator.create(unitName, owner.startHexPosition, owner);
        }
        this.explore();
        this.ui.update();
        return unit;
    }
    powerButtonClick(entity, powerData) {
        const entityPosition = this.ECS.Position.get(entity);
        const targetableHexes = this.world.getHexesWithinRange(entityPosition, powerData.range);
        this.cleanTargetting();
        this.world.targetHexes(targetableHexes);
        this.targetting = {
            attackerPosition: entityPosition,
            attacker: entity,
            powerData: powerData,
            targetableHexes: targetableHexes
        }
    }
    actionButtonClick(hex, resource, actionName) {
        let done = false;
        this.ECS.Harvester.forEach((value, entity, map) => {
            let harvesterPosition = this.ECS.Position.get(entity);
            if (hex.q === harvesterPosition.q && hex.r === harvesterPosition.r) {
                this.setOrder(hex, resource, actionName, entity);
                done = true;
            }
        });
        if (!done) alert("no harvester on this tile");
    }
    getIdles(owner) {
        let idles = [];
        this.ECS.Available.forEach((isAvailable, entity, array) => {
            if (this.ECS.Owner.get(entity) === owner && isAvailable > 0) {
                idles.push(entity);
            }
        });
        return idles;
    }
    selectNextIdle(owner) {
        const idles = this.getIdles(owner);
        let idle;
        if (idles.length > 0) {
            this.idleCycleCounter++;
            idle = idles[this.idleCycleCounter % idles.length];
            this.selectEntity(idle);
            this.camera.moveCamera(World.hexToWorld(this.ECS.Position.get(idle)));
        }
        this.ui.update();
    }
    selectEntity(entity) {
        if (entity !== undefined) {
            const position = this.ECS.Position.get(entity);
            const hex = this.world.get(position.q, position.r);
            const data = {
                sprite: this.ECS.Sprite.get(entity),
                combatStats: this.ECS.CombatStats.get(entity)
            };
            this.selection.selectEntity(entity, data, hex);
        }
    }
    selectHex(hex) {
        if (hex !== undefined) {
            this.selection.selectHex(hex);
            if (hex.q === this.humanPlayer.startHexPosition.q && hex.r === this.humanPlayer.startHexPosition.r) {
                this.selection.selectCommunity();
            }
        }
    }
    explore() {
        this.ECS.Explorer.forEach((value, entity, map) => {
            this.world.exploreTile(this.ECS.Position.get(entity), this.ECS.Owner.get(entity));
            this.world.seeNeighbours(this.ECS.Position.get(entity), value.range, this.ECS.Owner.get(entity));
        });
    }
    makeAvailable() {
        this.ECS.Available.forEach((isAvailable, entity, map) => {
            const maxActions = this.ECS.CombatStats.get(entity).actions;
            this.ECS.Available.set(entity, maxActions);
        });
    }
    resolveTick(player) {
        if (player !== this.humanPlayer) {
            let idles = this.getIdles(player);
            player.IA.act(idles);
        }
        this.world.update();
        // au cas où des ressources ont disparu, les explorateurs doivent arrêter de travailler
        this.cleanOrders();
        // this.cleanPowers();
        this.cleanKilledEntities();
        this.makeAvailable();
    }
    tick() {
        let players = [this.humanPlayer, ...this.computers];
        players.forEach((player) => {
            this.resolveTick(player);
            this.ui.update();
        });
        // toujours en dernier : on refresh les données de contexte de l'entité sélectionnée (sur quelle tuile elle se trouve etc.)
        this.selectEntity(this.selection.selectedEntity);
        this.ui.update();
        this.checkVictory();
    }
    checkVictory() {
        const factionsAlive = new Set();
        this.ECS.Owner.forEach((owner, entity, map) => {
            factionsAlive.add(owner);
        });
        if (factionsAlive.size <= 1) {
            alert("game over, the last standing wins");
        }
    }
    loop() {
        const now = Date.now();
        const deltaTime = now - this.lastTimeStamp;
        this.lastTimeStamp = now;

        this.camera.update(deltaTime);
        this.render.render(deltaTime);
        window.requestAnimationFrame(() => { this.loop(); });
    }
    // **************************************************
    // unit actions
    // **************************************************
    cleanKilledEntities() {
        const killedEntities = [];
        this.ECS.CombatStats.forEach((combatStats, entity) => {
            if (combatStats.actualHP <= 0) {
                killedEntities.push(entity);
            }
        });
        killedEntities.forEach((entity) => {
            this.unitCreator.killUnit(entity);
            if (entity === this.selection.selectedEntity) {
                this.selection.reset();
            }
        });
    }
    cleanEntity(entity) {
        this.ECS.Power.delete(entity);
        this.ECS.Order.delete(entity);
        this.ECS.Movement.set(entity, { path: [] });
    }
    cleanTargetting() {
        this.world.cleanTargets();
        this.targetting = undefined;
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
            // TODO think about this
            // retirer l'ordre de toute façon (test)
            this.ECS.Order.delete(entity);
        });
    }
    setPower(targetHex, targetting) {
        if (this.ECS.Available.get(targetting.attacker) > 0) {
            const isTargetable = targetting.targetableHexes.some((hex) => targetHex.q === hex.q && targetHex.r === hex.r);
            if (isTargetable) {
                let entity;
                for (const [key, value] of this.ECS.Position) {
                    if (value.q === targetHex.q && value.r === targetHex.r) {
                        entity = key;
                    }
                }
                this.cleanEntity(targetting.attacker);
                this.ECS.Power.set(targetting.attacker, {
                    attackerPosition: targetting.attackerPosition,
                    attacker: targetting.attacker,
                    powerData: targetting.powerData,
                    targetHex: targetHex,
                    targetEntity: entity
                });
                this.powerSystem.update(targetting.attacker);
                this.cleanEntity(targetting.attacker);
                this.explore();
                this.selectEntity(this.selection.selectedEntity);
                this.ui.update();
            } else {
                alert("out of range");
            }
        }
        this.cleanKilledEntities();
        this.cleanTargetting();
    }
    setMove(entity, hex) {
        if (this.ECS.Available.get(entity) > 0) {
            this.cleanEntity(entity);
            let movement = this.ECS.Movement.get(entity);
            if (movement !== undefined) {
                let position = this.ECS.Position.get(entity);
                movement.path = [Pathfinding.find(position, hex)[0]];
                this.movementSystem.update(entity);
                this.explore();
                this.cleanEntity(entity);
                this.cleanTargetting();
                this.selectEntity(this.selection.selectedEntity);
                this.ui.update();
            }
        }
    }
    setOrder(hex, resource, actionName, entity) {
        if (this.ECS.Available.get(entity) > 0) {
            this.cleanEntity(entity);
            this.ECS.Order.set(entity, { hex: hex, resource: resource, actionName: actionName });
            this.actionSystem.update(entity);
            this.cleanEntity(entity);
            this.cleanTargetting();
            this.selectEntity(this.selection.selectedEntity);
            this.ui.update();
        }
    }
}