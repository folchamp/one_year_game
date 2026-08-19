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

        // HTML elements 
        giveResourceButtonText: "village",
        population: "population"
    };

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