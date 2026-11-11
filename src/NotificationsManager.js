"use strict";

class NotificationsManager {
    constructor(eventDispatcher, camera) {
        this.eventDispatcher = eventDispatcher;
        this.camera = camera;

        this.lastMousePosition = { x: 0, y: 0 };
        this.disappearTimeout;

        Util.quickStructure(document.body, this,
            ["notificationContainer",
                "notificationTitle",
                "notificationText"
            ]
        );

        eventDispatcher.on("notify", (message) => { this.notify(message); });

        document.body.addEventListener("mousemove", (event) => {
            this.lastMousePosition = Util.getMousePosition(document.body, event);
        });

        this.reset();
    }
    reset() {
        Util.hide(this.notificationContainer);
        this.notificationTitle.innerText = "";
        this.notificationText.innerText = "";
    }
    setDisappearTimeout() {
        if (this.disappearTimeout !== undefined) {
            clearTimeout(this.disappearTimeout);
            this.disappearTimeout = undefined;
        }
        this.disappearTimeout = setTimeout(() => {
            this.reset();
        }, Settings.disappearTimeout);
    }
    notify(message) {
        this.setDisappearTimeout();
        Util.show(this.notificationContainer);
        this.notificationContainer.style["left"] = `${this.lastMousePosition.x}px`;
        this.notificationContainer.style["top"] = `${this.lastMousePosition.y}px`;
        this.notificationText.innerText = message.content;
        // alert(content);
        // console.log(this.lastMousePosition);
        if (message.hexPosition !== undefined) {
            const worldPosition = World.hexToWorld(message.hexPosition);
            const screenPosition = this.camera.worldToScreen(worldPosition);
            this.notificationContainer.style.left = `${screenPosition.x}px`;
            this.notificationContainer.style.top = `${screenPosition.y}px`;
        }
        this.notificationContainer.classList.add("warning");
    }
}