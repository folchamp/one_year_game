"use strict";

class Util {
    static texts = {
        // actions
        harvest: "récolte",
        salvage: "récupèrer",
        mine: "extraire",
        fetch: "puiser",
        cut: "couper",
        drill: "forer",
        destroy: "détruire",
        recycle: "recycler",
        filtration: "filtration",
        observation: "observation",
        "fell": "abattre",
        "fetch": "aller chercher",
        "alloy": "allier",
        "upgrade": "améliorer",
        "analyze": "analyser",
        "tame": "apprivoiser",
        "survey": "arpenter",
        "water": "arroser",
        "allocate": "attribuer",
        "dam": "barrer",
        "boil_water": "bouillir",
        "crush": "broyer",
        "burn": "brûler",
        "map": "cartographier",
        "catalogue": "cataloguer",
        "hunt": "chasser",
        "classify": "classer",
        "collect": "collecter",
        "combine": "combiner",
        "compare": "comparer",
        "compost": "composter",
        "compress": "compresser",
        "cast": "couler",
        "cut": "couper",
        "dig": "creuser",
        "breed": "croiser",
        "gather": "cueillir",
        "cultivate": "cultiver",
        "decontaminate": "décontaminer",
        "clear": "défricher",
        "demolish": "démolir",
        "dismantle": "démonter",
        "relocate": "déplacer",
        "strip": "dépouiller",
        "weed": "désherber",
        "desalinate": "dessaler",
        "detect": "détecter",
        "divert": "détourner",
        "destroy": "détruire",
        "distill": "distiller",
        "record": "documenter",
        "domesticate": "domestiquer",
        "dredge": "draguer",
        "drain": "drainer",
        "sample": "échantillonner",
        "hypothesize": "émettre une hypothèse",
        "tap": "entailler",
        "store": "entreposer",
        "study": "étudier",
        "experiment": "expérimenter",
        "quarry": "exploiter",
        "explore": "explorer",
        "extract": "extraire",
        "melt": "faire fondre",
        "rotate_crops": "faire une rotation des cultures",
        "ferment": "fermenter",
        "fertilize": "fertiliser",
        "filter_water": "filtrer",
        "smelt": "fondre",
        "drill": "forer",
        "forge": "forger",
        "scavenge": "fouiller",
        "identify": "identifier",
        "inspect": "inspecter",
        "irrigate": "irriguer",
        "isolate": "isoler",
        "wash": "laver",
        "limit": "limiter",
        "locate": "localiser",
        "measure": "mesurer",
        "quarantine": "mettre en quarantaine",
        "mine": "miner",
        "model": "modéliser",
        "clean": "nettoyer",
        "observe": "observer",
        "fish": "pêcher",
        "trap": "piéger",
        "plant": "planter",
        "pump": "pomper",
        "scoop": "prélever",
        "strip_bark": "prélever l'écorce",
        "preserve": "préserver",
        "prospect": "prospecter",
        "protect": "protéger",
        "draw": "puiser",
        "purify": "purifier",
        "refine": "raffiner",
        "collect": "ramasser",
        "ration": "rationner",
        "reforest": "reboiser",
        "research": "rechercher",
        "harvest": "récolter",
        "collect_resin": "récolter la résine",
        "collect_fibers": "récolter les fibres",
        "collect_seeds": "récolter les graines",
        "scout": "reconnaître",
        "collect_rainwater": "recueillir",
        "salvage": "récupérer",
        "recycle": "recycler",
        "reduce": "réduire",
        "rewild": "réensauvager",
        "regulate": "réguler",
        "reclaim": "réhabiliter",
        "release": "relâcher",
        "reinforce": "renforcer",
        "repair": "réparer",
        "replant": "replanter",
        "restore": "restaurer",
        "restore_habitat": "restaurer l'habitat",
        "repurpose": "réutiliser",
        "select": "sélectionner",
        "sow": "semer",
        "separate": "séparer",
        "sequence": "séquencer",
        "simulate": "simuler",
        "stockpile": "stocker",
        "track": "suivre",
        "monitor": "surveiller",
        "prune": "tailler",
        "pan": "tamiser",
        "test": "tester",
        "process": "transformer",
        "transport": "transporter",
        "sort": "trier",

        // knowledge 
        hydrology: "hydrologie",
        water_collection: "récolte d'eau",

        // resources 
        water: "eau",
        clean_water: "eau potable",

        // HTML elements 
        giveResourceButtonText: "village",
        population: "population",
        downloadButton: "télécharger"
    };

    static toggle(element) {
        element.classList.toggle("hidden");
    }

    static hide(element) {
        element.classList.add("hidden");
    }

    static show(element) {
        element.classList.remove("hidden");
    }

    static saveToLocalStorage(name, data) {
        if (Settings.appName === undefined) {
            throw "Util.js requires an app name";
        }
        localStorage.setItem(`${Settings.appName}_${name}`, JSON.stringify(data));
    }

    static getFromLocalStorage(name) {
        let item;
        try {
            item = JSON.parse(localStorage.getItem(`${Settings.appName}_${name}`));
        } catch (error) {
            console.log(`Error, ${name} in localStorage couldn"t be fetched`);
        }
        return item;
    }

    static _createElement(name, parent) {
        let elementToReturn = undefined;
        if (name.endsWith("Text")) {
            elementToReturn = Util.createDOMElement(name, "span", parent);
        } else if (name.endsWith("Title")) {
            elementToReturn = Util.createDOMElement(name, "p", parent);
        } else if (name.endsWith("Label")) {
            elementToReturn = Util.createDOMElement(name, "label", parent);
        } else if (name.endsWith("Input")) {
            elementToReturn = Util.createDOMElement(name, "input", parent);
        } else if (name.endsWith("Button")) {
            elementToReturn = Util.createDOMElement(name, "button", parent);
        } else if (name.endsWith("Li")) {
            elementToReturn = Util.createDOMElement(name, "li", parent);
        } else if (name.endsWith("Container")) {
            elementToReturn = Util.createDOMElement(name, "div", parent);
        } else if (name.endsWith("Image")) {
            elementToReturn = Util.createDOMElement(name, "img", parent);
        } else if (name.endsWith("Canvas")) {
            elementToReturn = Util.createDOMElement(name, "canvas", parent);
        } else {
            throw `type ${name} not supported`;
        }
        return elementToReturn;
    }

    static quickStructure(parent, self, structure) {
        if (typeof structure === "string") {
            const name = structure;
            self[name] = Util._createElement(name, parent);
        } else {
            const name = structure.shift();
            self[name] = Util._createElement(name, parent);
            structure.forEach((structurePart) => {
                Util.quickStructure(self[name], self, structurePart);
            });
        }
    }

    static createDOMElement(name, type, parent) {
        const element = document.createElement(type);
        element.classList.add(name);
        parent.appendChild(element);
        if (type === "span" || type === "p" || type === "button") {
            element.innerText = Util.texts[name];
        }
        return element;
    }

    static randomValue(min, max) {
        const span = max - min + 1;
        const randomNumber = Math.random();
        const rectifiedRandom = Math.floor(min + randomNumber * span);
        return rectifiedRandom;
    }

    static getNewID() {
        let UUID = Util.randomValue(100000, 999999) + "not-unique";
        if (crypto && crypto.randomUUID) {
            UUID = crypto.randomUUID();
        }
        return UUID;
    }

    static getMousePosition(element, event) {
        let bounding = element.getBoundingClientRect()
        let position = {
            x: event.clientX - bounding.left,
            y: event.clientY - bounding.top
        }
        return position;
    }

    static loadImages(prefix, array) {
        let objectToReturn = {};
        array.forEach((imageName) => {
            let element = new Image();
            element.src = `images/${prefix}${imageName}.png`;
            document.body.appendChild(element);
            Util.hide(element);
            objectToReturn[imageName] = element;
        });
        return objectToReturn;
    }

    static isPointInCircle(pos, circlePos, radius) {
        // pas besoin de prendre les racines, optimisons
        const dx = pos.x - circlePos.x;
        const dy = pos.y - circlePos.y;
        const squaredDistance = (dx * dx) + (dy * dy);
        const squaredRadius = radius * radius;
        return squaredDistance <= squaredRadius;
    }
}