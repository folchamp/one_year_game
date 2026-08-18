"use strict";

class Pathfinding {
    constructor() {

    }
    static getNeighbors(q, r) {
        // console.log(`${q}, ${r}`);
        return [
            { q: q + 1, r },
            { q: q - 1, r },
            { q, r: r + 1 },
            { q, r: r - 1 },
            { q: q + 1, r: r - 1 },
            { q: q - 1, r: r + 1 }]
    };
    static findOld(start, end) {
        // TODO retirer cette méthode obsolète, placeholder créé par ChatGPT le temps de programmer ma propre version
        // Merci ChatGPT
        // pathfinding naïf
        const path = [];
        let q = start.q;
        let r = start.r;
        while (q !== end.q || r !== end.r) {
            if (q < end.q) q++;
            else if (q > end.q) q--;
            if (r < end.r) r++;
            else if (r > end.r) r--;
            path.push({ q, r });
        }
        return path;
    }
    static find(start, end) {
        let hexesToGoThrough = [start];
        let hexesAlreadyChecked = {};
        let bestPaths = {};
        bestPaths[`${Pathfinding.key(start)}`] = { length: 0, previous: start };
        bestPaths = Pathfinding.findBetterRecursive(hexesToGoThrough, bestPaths, hexesAlreadyChecked, start, end);
        return Pathfinding.recomposePath(start, end, bestPaths);

    }
    static findBetterRecursive(hexesToGoThrough, bestPaths, hexesAlreadyChecked, previous, end) {
        let actualHex = hexesToGoThrough.shift();
        if (this.key(actualHex) === this.key(end)) {
            return bestPaths;
        } else {
            let potentialNewHexes = Pathfinding.getNeighbors(actualHex.q, actualHex.r);
            potentialNewHexes.forEach((potential) => {
                if (hexesAlreadyChecked[Pathfinding.key(potential)] === undefined) {
                    hexesToGoThrough.push(potential);
                    hexesAlreadyChecked[Pathfinding.key(potential)] = true;
                    bestPaths[Pathfinding.key(potential)] = { length: bestPaths[Pathfinding.key(actualHex)].length + 1, previous: actualHex };
                }
            });
            return Pathfinding.findBetterRecursive(hexesToGoThrough, bestPaths, hexesAlreadyChecked, actualHex, end);
        }
    }
    static recomposePath(start, end, bestPaths) {
        let path = [];
        let next = Pathfinding.key(end);
        while (bestPaths[next] !== undefined && next !== Pathfinding.key(start)) {
            let previous = bestPaths[next].previous;
            path.unshift(previous); // ouais... on remplit le tableau à l'envers...
            next = Pathfinding.key(previous);
        }
        path.push(end); // le dernier hexagone n'est pas dans le path
        path.shift(); // le premier hexagone ne doit pas y être
        return path;
    }
    static key(hex) {
        return `${hex.q},${hex.r}`;
    }
}