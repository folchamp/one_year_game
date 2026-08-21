"use strict";

class Render {
    constructor(context, display, camera, world, ECS, selection, community) {
        this.context = context;
        this.display = display;
        this.camera = camera;
        this.world = world;
        this.ECS = ECS;
        this.selection = selection;
        this.community = community;
    }
    drawArrow(fromHex, toHex) {
        // merci ChatGPT
        const from = World.hexToWorld(fromHex);
        const to = World.hexToWorld(toHex);
        const angle = Math.atan2(
            to.y - from.y,
            to.x - from.x
        );
        const head = 12;
        this.context.beginPath();
        this.context.moveTo(from.x, from.y);
        this.context.lineTo(to.x, to.y);
        this.context.moveTo(
            to.x - head * Math.cos(angle - Math.PI / 6),
            to.y - head * Math.sin(angle - Math.PI / 6)
        );
        this.context.lineTo(to.x, to.y);
        this.context.lineTo(
            to.x - head * Math.cos(angle + Math.PI / 6),
            to.y - head * Math.sin(angle + Math.PI / 6)
        );
        this.context.stroke();
    }
    render() {
        // clear
        this.context.clearRect(0, 0, this.display.getWidth(), this.display.getHeight());

        // prepare (camera)
        this.context.save();
        this.context.translate(this.display.getWidth() / 2, this.display.getHeight() / 2);
        this.context.scale(this.camera.zoom, this.camera.zoom);
        this.context.translate(-this.camera.x, -this.camera.y);

        // draw world
        for (const hex of this.world.hexes.values()) {
            this.drawHex(hex);
        }
        if (this.selection.hoveredHex !== undefined) {
            this.drawHoveredHex(this.selection.hoveredHex);
        }
        if (this.selection.selectedHex !== undefined) {
            this.drawSelectedHex(this.selection.selectedHex);
        }

        // draw entities
        this.ECS.Sprite.forEach((sprite, entity, map) => {
            let hexPosition = this.ECS.Position.get(entity);
            this.drawEntity(sprite, hexPosition);
            if (this.ECS.Order.get(entity) !== undefined) {
                this.drawOrder(entity);
            }
        });

        if (this.selection.selectedEntity !== undefined) {
            this.drawSelectedEntity(this.ECS.Sprite.get(this.selection.selectedEntity), this.ECS.Position.get(this.selection.selectedEntity));
        }

        // paths (arrows)
        this.context.strokeStyle = "white";
        this.context.lineWidth = 4;
        this.context.lineCap = "round";
        this.context.lineJoin = "round";
        this.ECS.Movement.forEach((value, key, map) => {
            let path = value.path;
            let previous = this.ECS.Position.get(key);
            for (let index = 0; index < path.length; index++) {
                const element = path[index];
                this.drawArrow(previous, element);
                previous = element;
            }
        });
        // end
        this.context.restore();
    }
    getWorldPosition(hex) {
        const x = Settings.hexSize * Math.sqrt(3) * (hex.q + hex.r / 2);
        const y = Settings.hexSize * 1.5 * hex.r;
        return { x: x, y: y };
    }
    drawSelectedEntity(sprite, hexPosition) {
        let worldPosition = World.hexToWorld(hexPosition);
        // this.context.fillStyle = "blue";
        this.context.beginPath();
        this.context.arc(worldPosition.x, worldPosition.y, sprite.radius, 0, Math.PI * 2);
        // this.context.fill();
        this.context.drawImage(Data.unitImages[sprite.imageName], worldPosition.x - sprite.width / 2, worldPosition.y - sprite.height / 2);
        this.strokeWithSelectionStyle();
    }
    drawEntity(sprite, hexPosition) {
        if (hexPosition !== undefined) {
            let worldPosition = World.hexToWorld(hexPosition);
            // this.context.fillStyle = "rgba(200,0,0,1)";
            // this.context.beginPath();
            // this.context.arc(worldPosition.x, worldPosition.y, sprite.radius, 0, Math.PI * 2);
            // this.context.fill();
            this.context.drawImage(Data.unitImages[sprite.imageName], worldPosition.x - sprite.width / 2, worldPosition.y - sprite.height / 2);
        }
    }
    drawHexPath(hex) {
        // merci ChatGPT
        const pos = this.getWorldPosition(hex);

        this.context.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 180 * (60 * i - 30);
            const px = pos.x + Settings.hexSize * Math.cos(angle);
            const py = pos.y + Settings.hexSize * Math.sin(angle);
            if (i === 0)
                this.context.moveTo(px, py);
            else
                this.context.lineTo(px, py);
        }
        this.context.closePath();
    }
    drawOrder(entity) {
        const order = this.ECS.Order.get(entity);
        const hexPosition = this.ECS.Position.get(entity);
        const worldPosition = this.getWorldPosition(hexPosition);
        const height = worldPosition.y - Settings.hexSize * 0.55;
        const smallSize = Settings.resourceImageSize / 2;
        const offsetY = Math.sin(performance.now() / 150) * 3;

        this.context.drawImage(Data.resourceImages[order.resource.resourceData.imageName], worldPosition.x - smallSize / 2, height + offsetY, smallSize, smallSize);

        // console.log(order);
    }
    drawResources(hex) {
        const pos = this.getWorldPosition(hex);
        const amount = hex.resources.length;
        const smallSize = Settings.resourceImageSize / 2;
        const resourcesWidth = Settings.resourceImageSize / 2 * amount;
        const firstPosition = pos.x - resourcesWidth / 2;
        const height = pos.y + Settings.hexSize * 0.45;
        let index = 0;
        // display resource
        hex.resources.forEach((resource) => {
            this.context.fillStyle = "rgba(24, 27, 24, 0.8)";
            this.context.fillRect(firstPosition + index * smallSize, height, smallSize, smallSize);
            if ((hex.isExplored && this.community.hasKnowledge(resource.resourceData.seeResourceCondition)) || !Settings.production) {
                this.context.drawImage(Data.resourceImages[resource.resourceData.imageName], firstPosition + index * smallSize, height, smallSize, smallSize);
            } else {
                this.context.drawImage(Data.resourceImages["unknownResource"], firstPosition + index * smallSize, height, smallSize, smallSize);
            }
            index++;
            // console.log(`${hex.q}, ${hex.r} : ${resource.resourceData.resourceName}`);
        });


        // if (hex.resource !== "nothing") {
        //     this.context.fillStyle = "white";
        //     this.context.fillRect(pos.x, pos.y, Settings.resourceImageSize, Settings.resourceImageSize);
        //     this.context.drawImage(Data.resourceImages[Data.resources[hex.resource].imageName], pos.x, pos.y);
        // }
    }
    drawHex(hex) {
        const pos = this.getWorldPosition(hex);
        try {
            if (hex.isSeenThroughFog || !Settings.production) {
                this.context.drawImage(Data.tileImages[hex.biome.imageName], pos.x - Settings.tileWidth / 2, pos.y - Settings.tileHeight / 2);
                this.drawResources(hex);
            } else {
                this.context.drawImage(Data.tileImages["fog_of_war"], pos.x - Settings.tileWidth / 2, pos.y - Settings.tileHeight / 2);
            }
        } catch (error) {
            console.log(hex);
        }

        // TODO make lines bigger when zoomed out 
        // lineWhidth = Math.round(3 * (1 / this.camera.zoom));
        // console.log(Math.round(3 * (1 / this.camera.zoom)));

        if (!Settings.production) {
            const text = `${hex.q},${hex.r}`;

            this.context.font = "48px arial";
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";

            const metrics = this.context.measureText(text);
            const padding = 8;

            this.context.fillStyle = "rgba(0, 0, 0, 0.7)";
            this.context.fillRect(
                pos.x - metrics.width / 2 - padding,
                pos.y - 24 - padding,
                metrics.width + padding * 2,
                48 + padding * 2
            );

            this.context.fillStyle = "white";
            this.context.fillText(text, pos.x, pos.y);
        }
    }
    drawHoveredHex(hex) {
        this.drawHexPath(hex);

        this.context.save();
        this.context.strokeStyle = "rgba(107, 105, 133, 0.8)";
        this.context.lineWidth = 9;
        this.context.stroke();
        this.context.restore();
    }
    drawSelectedHex(hex) {
        this.drawHexPath(hex);
        this.strokeWithSelectionStyle();
    }
    strokeWithSelectionStyle() {
        this.context.save();
        this.context.strokeStyle = "#8a006c";
        this.context.lineWidth = 4;
        this.context.shadowColor = "#ffd400";
        this.context.shadowBlur = 4;
        this.context.stroke();
        this.context.lineWidth = 2;
        this.context.strokeStyle = "#d100ff";
        this.context.stroke();
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#ffffff";
        this.context.stroke();
        this.context.restore();
    }
}