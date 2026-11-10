"use strict";

class NotificationsManager {
    constructor(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;

        this.lastMousePosition = { x: 0, y: 0 };

        eventDispatcher.on("notify", (content) => { this.notify(content); });

        document.body.addEventListener("mousemove", (event) => {
            this.lastMousePosition = Util.getMousePosition(document.body, event);
        });
    }
    notify(content) {
        alert(content)
        console.log(this.lastMousePosition);

    }
}