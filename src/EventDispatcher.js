"use strict";

class EventDispatcher {
    constructor() {
        this.listeners = {};
    }
    on(message, listener) {
        this.listeners[message] ??= [];
        this.listeners[message].push(listener);
    }
    emit(message, parameters) {
        this.listeners[message] ??= [];
        this.listeners[message].forEach((listener) => {
            listener(parameters);
        });
    }
}