"use strict";

class World {
    constructor() {
        this.mapRadius = Settings.mapRadius;

        this.hexesArray = [];
        this.hexes = new Map();
        for (let q = -this.mapRadius; q <= this.mapRadius; q++) {
            const r1 = Math.max(-this.mapRadius, -q - this.mapRadius);
            const r2 = Math.min(this.mapRadius, -q + this.mapRadius);
            for (let r = r1; r <= r2; r++) {
                this.createHex(q, r);
            }
        }
        Data.biomeNamesForGeneration.forEach((biomeName) => {
            this.createBiome(Data.biomes[biomeName]);
        });
        this.fillBiomes();
        this.fillResources();
    }
    getHexesWithinRange(position, range) {
        const result = [];
        const visited = new Set();
        const queue = [];
        let index = 0;

        result.push(this.hexes.get(`${position.q}, ${position.r}`));
        queue.push({
            position: position,
            distance: 0
        });
        visited.add(`${position.q}, ${position.r}`);

        while (index < queue.length) {
            const current = queue[index];
            index++;
            if (current.distance > 0) {
                const hex = this.hexes.get(`${current.position.q}, ${current.position.r}`);
                if (hex !== undefined) {
                    result.push(hex);
                }
            }
            if (current.distance < range) {
                const neighbors = World.getNeighbors(current.position.q, current.position.r);
                for (const neighbor of neighbors) {
                    const key = `${neighbor.q}, ${neighbor.r}`;
                    if (!visited.has(key)) {
                        visited.add(key);
                        queue.push({
                            position: neighbor,
                            distance: current.distance + 1
                        });
                    }
                }
            }
        }
        return result;
    }
    seeNeighbours(position, range, player) {
        const hexes = this.getHexesWithinRange(position, range);
        hexes.forEach((hex) => hex.see(player));
    }
    cleanTargets() {
        this.hexes.forEach(hex => hex.isTargetted = false);
    }
    targetHexes(hexes) {
        hexes.forEach(hex => hex.isTargetted = true);
    }
    exploreTile(position, player) {
        this.hexes.get(`${position.q}, ${position.r}`).explore(player);
    }
    update() {
        this.hexes.forEach((hex) => hex.update());
    }
    getRandomHex() {
        return Random.fromArray(this.hexesArray);
    }
    createBiome(biome) {
        // on fait en sorte d'augmenter le nombre de "départs de biomes" en fonction de la taille de la carte.
        for (let index = 0; index < Math.ceil(biome.amount * (this.mapRadius * this.mapRadius / 100)); index++) {
            let biomeCenter = this.getRandomHex();
            let tilesVisited = new Map();
            tilesVisited.set(`${biomeCenter.q}, ${biomeCenter.r}`, true);
            biomeCenter.setBiome(biome);
            this.propagate(
                [{ hexPosition: { q: biomeCenter.q, r: biomeCenter.r }, attributeValue: 1 }],
                tilesVisited,
                biome);
        }
    }
    propagate(tilesToVisitData, tilesVisited, biome) {
        let index = 0;
        let attributeName = biome.attribute;
        while (index < tilesToVisitData.length) {
            let tileToVisitData = tilesToVisitData[index];
            let tile = this.get(tileToVisitData.hexPosition.q, tileToVisitData.hexPosition.r);
            let neighbors = World.getNeighbors(tile.q, tile.r);
            tile[attributeName] = tileToVisitData.attributeValue;
            neighbors.forEach((neighbor) => {
                if (this.get(neighbor.q, neighbor.r) !== undefined && tilesVisited.get(`${neighbor.q}, ${neighbor.r}`) === undefined) {
                    let attributeValue = this.getRandomValue(tileToVisitData.attributeValue, biome);
                    if (attributeValue >= biome.minimum) {
                        tilesVisited.set(`${neighbor.q}, ${neighbor.r}`, true);
                        tilesToVisitData.push({ hexPosition: { q: neighbor.q, r: neighbor.r }, attributeValue: attributeValue });
                    }
                }
            });
            index++;
        }
    }
    getRandomValue(attributeValue, biome) {
        let random = Random.value(biome.propagation.min * 100, biome.propagation.max * 100) / 100;
        return Math.round((attributeValue - random) * 100) / 100;
    }
    fillBiomes() {
        this.hexes.forEach((hex) => {
            hex.biome = Data.biomes["plains"];
            for (let biomeName in Data.biomes) {
                let biome = Data.biomes[biomeName];
                if (hex[biome.attribute] > biome.treshold) {
                    hex.biome = biome;
                }
            }
        });
    }
    fillResources() {
        this.hexes.forEach((hex) => {
            for (let index = 0; index < hex.biome.amountOfResources; index++) {
                let resourceName = Random.fromArray(hex.biome.resources);
                if (resourceName !== "nothing") {
                    hex.addResource((Data.resources[resourceName]));
                }
            }
            hex.setBiome(hex.biome); // why this ? Can't remember
        });
    }
    getRandomBiome() {
        return Data.biomes[Random.fromArray(Data.biomeNamesForGeneration)];
    }
    static hexToWorld(hex) {
        const x = Settings.hexSize * Math.sqrt(3) * (hex.q + hex.r / 2);
        const y = Settings.hexSize * 1.5 * hex.r;
        return { x: x, y: y };
    }
    static getNeighbors(q, r) {
        return [
            { q: q + 1, r },
            { q: q - 1, r },
            { q, r: r + 1 },
            { q, r: r - 1 },
            { q: q + 1, r: r - 1 },
            { q: q - 1, r: r + 1 }]
    };
    getHexFromWorldPosition(worldPosition) {
        let hexPosition = this.worldToHex(worldPosition);
        let hex = this.get(hexPosition.q, hexPosition.r);
        return hex;
    }
    get(q, r) {
        return this.hexes.get(`${q}, ${r}`);
    }
    createHex(q, r) {
        let hex = new Hex(q, r, this.getRandomBiome());
        this.hexes.set(`${q}, ${r}`, hex);
        this.hexesArray.push(hex);
        return hex;
    }
    worldToHex(pos) {
        const q = (Math.sqrt(3) / 3 * pos.x - 1 / 3 * pos.y) / Settings.hexSize;
        const r = (2 / 3 * pos.y) / Settings.hexSize;
        return this.hexRound(q, r);
    }
    hexRound(q, r) {
        // merci chatGPT
        let x = q;
        let z = r;
        let y = -x - z;
        let rx = Math.round(x);
        let ry = Math.round(y);
        let rz = Math.round(z);
        const dx = Math.abs(rx - x);
        const dy = Math.abs(ry - y);
        const dz = Math.abs(rz - z);
        if (dx > dy && dx > dz)
            rx = -ry - rz;
        else if (dy > dz)
            ry = -rx - rz;
        else
            rz = -rx - ry;
        return {
            q: rx,
            r: rz
        };
    }
}