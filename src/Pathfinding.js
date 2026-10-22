"use strict";

class Pathfinding {
    constructor() {

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
    static find(start, end) {
        let hexesToGoThrough = [start];
        let hexesAlreadyChecked = {};
        let bestPaths = {};
        bestPaths[`${Pathfinding.key(start)}`] = { length: 0, previous: start };
        bestPaths = Pathfinding.findBetterRecursive(hexesToGoThrough, bestPaths, hexesAlreadyChecked, end);
        return Pathfinding.recomposePath(start, end, bestPaths);

    }
    static findBetterRecursive(hexesToGoThrough, bestPaths, hexesAlreadyChecked, end) {
        let actualHex = hexesToGoThrough.shift();
        let pathToReturn;
        if (this.key(actualHex) === this.key(end)) {
            pathToReturn = bestPaths;
        } else {
            let potentialNewHexes = Pathfinding.getNeighbors(actualHex.q, actualHex.r);
            potentialNewHexes.forEach((potential) => {
                if (hexesAlreadyChecked[Pathfinding.key(potential)] === undefined) {
                    hexesToGoThrough.push(potential);
                    hexesAlreadyChecked[Pathfinding.key(potential)] = true;
                    bestPaths[Pathfinding.key(potential)] = { length: bestPaths[Pathfinding.key(actualHex)].length + 1, previous: actualHex };
                }
            });
            pathToReturn = Pathfinding.findBetterRecursive(hexesToGoThrough, bestPaths, hexesAlreadyChecked, end);
        }
        return pathToReturn;
    }
    static recomposePath(start, end, bestPaths) {
        let path = [];
        let next = Pathfinding.key(end);
        while (bestPaths[next] !== undefined && next !== Pathfinding.key(start)) {
            let previous = bestPaths[next].previous;
            path.unshift(previous); // ouais... on remplit le tableau à l'envers...
            next = Pathfinding.key(previous);
        }
        path.push(end); // le dernier hexagone n'est pas dans le path, on l'ajoute
        path.shift(); // le premier hexagone ne doit pas y être
        return path;
    }
    static key(hex) {
        return `${hex.q},${hex.r}`;
    }
}