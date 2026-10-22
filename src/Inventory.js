"use strict";

class Inventory {
    constructor() {
        this.content = {};
        for (const categoryName in Data.categories) {
            this.content[categoryName] ??= 0;
        }
    }
    add(resource) {
        this.content[resource.category]++;
    }
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