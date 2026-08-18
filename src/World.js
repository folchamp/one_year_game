"use strict";

class World {
    constructor() {
        this.mapRadius = 8;

        this.hexes = new Map();
        for (let q = -this.mapRadius; q <= this.mapRadius; q++) {
            const r1 = Math.max(-this.mapRadius, -q - this.mapRadius);
            const r2 = Math.min(this.mapRadius, -q + this.mapRadius);
            for (let r = r1; r <= r2; r++) {
                this.createHex(q, r);
            }
        }
        for (let biomeName in Data.biomes) {
            this.createBiome(Data.biomes[biomeName]);
        }
        this.fillBiomes();
        this.fillResources();
    }
    update() {
        this.hexes.forEach((hex) => {
            hex.update();
        });
    }
    getRandomHex() {
        // très naïf, crée un array à chaque fois
        return Random.fromArray([...this.hexes.values()]);
    }
    createBiome(biome) {
        for (let index = 0; index < Math.ceil(biome.amount * (this.mapRadius * this.mapRadius / 100)); index++) {
            let biomeCenter = this.getRandomHex();
            let tilesVisited = new Map();
            tilesVisited.set(`${biomeCenter.q}, ${biomeCenter.r}`, true);
            biomeCenter.biome = biome;
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
            let neightbors = World.getNeightbors(tile.q, tile.r);
            tile[attributeName] = tileToVisitData.attributeValue;
            neightbors.forEach((neightbor) => {
                if (this.get(neightbor.q, neightbor.r) !== undefined && tilesVisited.get(`${neightbor.q}, ${neightbor.r}`) === undefined) {
                    let attributeValue = this.getRandomValue(tileToVisitData.attributeValue, biome);
                    if (attributeValue >= biome.minimum) {
                        tilesVisited.set(`${neightbor.q}, ${neightbor.r}`, true);
                        tilesToVisitData.push({ hexPosition: { q: neightbor.q, r: neightbor.r }, attributeValue: attributeValue });
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
        this.hexes.forEach((value, key, map) => {
            value.biome = Data.biomes["plains"];
            for (let biomeName in Data.biomes) {
                let biome = Data.biomes[biomeName];
                // console.log(biome)
                // console.log(value[biome.attribute], biome.treshold);
                if (value[biome.attribute] > biome.treshold) {
                    value.biome = biome;
                }
            }
        });
        this.hexes.get(`${Settings.startHexPosition.q}, ${Settings.startHexPosition.r}`).biome = Data.biomes["plains"];
    }
    fillResources() {
        this.hexes.forEach((hex, key, map) => {
            for (let index = 0; index < hex.biome.amountOfResources; index++) {
                let resourceName = Random.fromArray(hex.biome.resources);
                if (resourceName !== "nothing") {
                    hex.addResource((Data.resources[resourceName]));
                }
            }
        });
    }
    getRandomBiome() {
        return Data.biomes[Random.fromArray(Data.biomeNames)];
    }
    static hexToWorld(hex) {
        const x = Settings.hexSize * Math.sqrt(3) * (hex.q + hex.r / 2);
        const y = Settings.hexSize * 1.5 * hex.r;
        return { x: x, y: y };
    }
    static getNeightbors(q, r) {
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