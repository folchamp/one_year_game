"use strict";

class Listener {
    constructor() {
        this.listeners = [];
    }
    shout(message, parameters) {
        this.listeners.forEach((listener) => {
            listener(message, parameters);
        });
    }
    add(f) {
        this.listeners.push(f);
    }
}