"use strict";

class Inventory {
    constructor() {
        this.content = {};
        for (const categoryName in Data.categories) {
            // this.content[categoryName] ??= {};
            this.content[categoryName] ??= 0;
        }
    }
    add(resource) {
        // console.log(resource);
        this.content[resource.category]++;
        // this.content[resource.category][resource.resourceName] ??= 0;
        // this.content[resource.category][resource.resourceName]++;
        // console.log(this.content);
    }
    // consume(consumedResourceName) {
    //     // Nettoyage des ressources épuisées
    //     for (const category in this.content) {
    //         for (const resourceName in this.content[category]) {
    //             if (resourceName === consumedResourceName) {
    //                 this.content[category][resourceName]--;
    //             }
    //             if (this.content[category][resourceName] <= 0) {
    //                 // delete this.content[category][resourceName];
    //             }
    //         }
    //     }
    // }
    getContent() {
        return this.content;
    }
    consume(price) {
        for (const categoryName in price) {
            this.content[categoryName] -= price[categoryName];
        }
    }
    has(price) {
        let canPay = true;
        for (const categoryName in price) {
            if (this.content[categoryName] < price[categoryName]) {
                canPay = false;
            }
        }
        return canPay;
    }
}