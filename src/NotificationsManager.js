"use strict";

class NotificationsManager {
    constructor(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;

        eventDispatcher.on("notify", (content) => { this.notify(content); });
    }
    notify(content) {
        alert(content)
    }
}