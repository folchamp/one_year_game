"use strict";

class Inventory {
    constructor() {
        this.content = {};
    }
    add(resource) {
        console.log(resource);
        this.content[resource.category] ??= {};
        this.content[resource.category][resource.resourceName] ??= 0;
        this.content[resource.category][resource.resourceName]++;
        // console.log(this.content);
    }
    consume(consumedResourceName) {
        // Nettoyage des ressources épuisées
        for (const category in this.content) {
            for (const resourceName in this.content[category]) {
                if (resourceName === consumedResourceName) {
                    this.content[category][resourceName]--;
                }
                if (this.content[category][resourceName] <= 0) {
                    delete this.content[category][resourceName];
                }
            }
            // if (Object.keys(content[category]).length === 0) {
            //     delete content[category];
            // }
        }
    }
    getContent() {
        return this.content;
    }
}