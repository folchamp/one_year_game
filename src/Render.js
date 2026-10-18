"use strict";

class Render {
    constructor(context, display, camera, world, ECS, selection, player) {
        this.context = context;
        this.display = display;
        this.camera = camera;
        this.world = world;
        this.ECS = ECS;
        this.selection = selection;
        this.player = player;
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
        for (const hex of this.world.hexes.values()) {
            if (hex.isTargetted) {
                this.drawHexPath(hex);
                this.strokeWithTargetStyle();
            }
        }
        if (this.selection.hoveredHex !== undefined) {
            this.drawHoveredHex(this.selection.hoveredHex);
        }
        if (this.selection.selectedHex !== undefined) {
            this.drawSelectedHex(this.selection.selectedHex);
        }

        // draw entities
        this.ECS.Sprite.forEach((sprite, entity, map) => {
            // let hexPosition = this.ECS.Position.get(entity);
            this.drawEntity(entity, false);
            if (this.ECS.Order.get(entity) !== undefined) {
                // this.drawOrder(entity);
            }
        });

        if (this.selection.selectedEntity !== undefined) {
            this.drawEntity(this.selection.selectedEntity, true);
        }


        for (const hex of this.world.hexes.values()) {
            // this.drawHex(hex);
            if ((hex.hasSeen(this.player) && hex.fatigue > 0) || !Settings.production) {
                this.drawFatigue(hex);
            }
        }

        this.ECS.Power.forEach((power, entity, map) => {
            this.drawPower(entity, power);
        });

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
    drawEntity(entity, isSelected) {
        const sprite = this.ECS.Sprite.get(entity);
        const owner = this.ECS.Owner.get(entity);
        const hexPosition = this.ECS.Position.get(entity);
        const hex = this.world.get(hexPosition.q, hexPosition.r);
        const combatStats = this.ECS.CombatStats.get(entity);
        if (hex.hasSeen(this.player) || !Settings.production) {
            let worldPosition = World.hexToWorld(hexPosition);
            this.context.beginPath();
            this.context.arc(
                worldPosition.x - Settings.playerColorArcOffset,
                worldPosition.y + sprite.height / 2,
                Settings.playerColorArcRadius,
                0,
                Math.PI * 2
            );
            if (isSelected) {
                this.strokeWithSelectionStyle();
            } else {
                this.fillWithoutSelectionStyle(owner.playerColor);
            }
            this.context.drawImage(
                Images.unitImages[sprite.imageName],
                worldPosition.x - sprite.width / 2,
                worldPosition.y - sprite.height / 2
            );
            if (this.ECS.Available.get(entity) === true) {
                this.context.save();
                const indicatorSize = 20;
                const indicatorY = worldPosition.y - sprite.height / 2 - 8;
                this.context.translate(worldPosition.x, indicatorY);
                this.context.rotate(Math.PI / 4);
                this.context.fillStyle = "#00ff22";
                this.context.fillRect(-indicatorSize / 2, -indicatorSize / 2, indicatorSize, indicatorSize);
                this.context.restore();
            }
            if (combatStats !== undefined) {
                const maxHP = combatStats.hp;
                const actualHP = combatStats.actualHP;
                if (actualHP < maxHP) {
                    const barWidth = sprite.width;
                    const barHeight = 5;
                    const barX = worldPosition.x - barWidth / 2;
                    const barY = worldPosition.y - sprite.height / 2 - 10;
                    this.context.fillStyle = "black";
                    this.context.fillRect(barX, barY, barWidth, barHeight);
                    this.context.fillStyle = "green";
                    this.context.fillRect(barX, barY, barWidth * (actualHP / maxHP), barHeight);
                }
            }
        }
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
    drawOrder(entity) {
        const order = this.ECS.Order.get(entity);
        const hexPosition = this.ECS.Position.get(entity);
        const worldPosition = this.getWorldPosition(hexPosition);
        const height = worldPosition.y - Settings.hexSize * 0.55;
        const smallSize = Settings.resourceImageSize / 2;
        const offsetY = Math.sin(performance.now() / 150) * 3;
        const hex = this.world.get(hexPosition.q, hexPosition.r);
        if (hexPosition !== undefined) {
            if (hex.hasSeen(this.player) || !Settings.production) {
                if (Images.resourceImages[order.resource.resourceData.imageName] === undefined) {
                    console.log(`${order.resource.resourceData.resourceName} n'a pas d'image`);
                    this.context.drawImage(Images.resourceImages["unknownResource"], worldPosition.x - smallSize / 2, height + offsetY, smallSize, smallSize);
                } else {
                    this.context.drawImage(Images.resourceImages[order.resource.resourceData.imageName], worldPosition.x - smallSize / 2, height + offsetY, smallSize, smallSize);
                }
            }
        }
    }
    drawPower(entity, power) {
        // const power = this.ECS.Power.get(entity);
        this.context.save();
        this.context.strokeStyle = "red";
        this.context.lineWidth = 4;
        this.context.lineCap = "round";
        this.context.lineJoin = "round";
        this.drawArrow(power.attackerPosition, power.targetHex);
        this.context.restore();
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
            this.context.strokeStyle = "rgba(24, 27, 24, 0.8)";
            // this.context.strokeRect(firstPosition + index * smallSize, height, smallSize, smallSize);
            if (hex.hasExplored(this.player) || !Settings.production) {
                if (Images.resourceImages[resource.resourceData.imageName] === undefined) {
                    console.log(`${resource.resourceData.resourceName} n'a pas d'image`);
                    this.context.drawImage(Images.resourceImages["unknownResource"], firstPosition + index * smallSize, height, smallSize, smallSize);
                } else {
                    this.context.drawImage(Images.resourceImages[resource.resourceData.imageName], firstPosition + index * smallSize, height, smallSize, smallSize);
                }
            } else {
                this.context.drawImage(Images.resourceImages["unknownResource"], firstPosition + index * smallSize, height, smallSize, smallSize);
            }
            index++;
        });
    }
    drawFatigue(hex) {
        const pos = this.getWorldPosition(hex);
        const width = Settings.fatigueBarWidth;
        const height = Settings.fatigueBarHeight;
        const x = pos.x - width / 2;
        const y = pos.y - Settings.fatigueBarVerticalOffset;
        const fatigue = Math.max(0, Math.min(1, hex.fatigue / Settings.maxFatigue));
        const healthyWidth = width * (1 - fatigue);
        const gradient = this.context.createLinearGradient(x, 0, x + width, 0);
        const radius = 10;
        const circleX = x - radius - 5;
        const circleY = y + height / 2;

        gradient.addColorStop(0, "#1f6b3a");
        gradient.addColorStop(0.55, "#6f9f3d");
        gradient.addColorStop(0.8, "#b59b45");
        gradient.addColorStop(1, "#a66a3f");

        this.context.fillStyle = "#ff0000";
        this.context.fillRect(x, y, width, height);

        this.context.fillStyle = gradient;
        this.context.fillRect(x, y, healthyWidth, height);

        this.context.strokeStyle = "#26351f";
        this.context.lineWidth = 2;
        this.context.strokeRect(x, y, width, height);

        this.context.beginPath();
        this.context.arc(circleX, circleY, radius, 0, Math.PI * 2);

        this.context.fillStyle = "#26351f";
        this.context.fill();

        this.context.fillStyle = "#ffffff";
        this.context.font = "bold 11px Arial";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText(Math.max(0, Math.round(Settings.maxFatigue - hex.fatigue)), circleX, circleY);
    }
    drawHex(hex) {
        const pos = this.getWorldPosition(hex);
        if (hex.hasSeen(this.player) || !Settings.production) {
            this.context.drawImage(Images.tileImages[hex.biome.imageName], pos.x - Settings.tileWidth / 2, pos.y - Settings.tileHeight / 2);
            this.drawResources(hex);
        } else {
            this.context.drawImage(Images.tileImages["fog_of_war"], pos.x - Settings.tileWidth / 2, pos.y - Settings.tileHeight / 2);
        }

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
    drawHoveredHex(hex) {
        this.drawHexPath(hex);
        this.strokeWithHoveredStyle();
    }
    drawSelectedHex(hex) {
        this.drawHexPath(hex);
        this.strokeWithSelectionStyle();
    }
    strokeWithHoveredStyle() {
        this.context.save();
        this.context.strokeStyle = "rgba(107, 105, 133, 0.8)";
        this.context.lineWidth = 9;
        this.context.stroke();
        this.context.restore();
    }
    fillWithoutSelectionStyle(color) {
        this.context.save();
        this.context.fillStyle = color;
        this.context.globalAlpha = 0.5;
        this.context.fill();
        this.context.restore();
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
    strokeWithTargetStyle() {
        this.context.save();
        this.context.strokeStyle = "#810000";
        this.context.lineWidth = 4;
        // this.context.shadowColor = "#ff4800";
        // this.context.shadowBlur = 4;
        this.context.stroke();
        this.context.lineWidth = 2;
        this.context.strokeStyle = "#cf5e2a";
        this.context.stroke();
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#d69c9c";
        this.context.stroke();
        this.context.restore();

    }
}