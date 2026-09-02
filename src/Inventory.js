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
        console.log(this.content);
    }
    getContent() {
        return this.content;
    }
}