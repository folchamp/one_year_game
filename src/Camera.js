"use strict";

class Camera {
    constructor(canvas) {
        this.canvas = canvas;

        this.x = 0;
        this.y = 0;
        this.zoom = Settings.initialZoom;

        this.isDragging = false;
        this.canvas.addEventListener("pointerdown", (event) => {
            this.isDragging = true;
            this.lastMousePosition = Util.getMousePosition(this.canvas, event);
            this.canvas.setPointerCapture(event.pointerId);
        });
        this.canvas.addEventListener("pointermove", (event) => {
            if (this.isDragging) {
                const mousePosition = Util.getMousePosition(this.canvas, event);
                const diff = { x: mousePosition.x - this.lastMousePosition.x, y: mousePosition.y - this.lastMousePosition.y };
                this.x -= diff.x / this.zoom; // on divise par le zoom pour que la vitesse de panning reste la même
                this.y -= diff.y / this.zoom;
                this.lastMousePosition = mousePosition;
            }
        });
        window.addEventListener("pointerup", (event) => {
            this.isDragging = false;
            this.canvas.releasePointerCapture(event.pointerId);
        });
        this.canvas.addEventListener("pointercancel", (event) => {
            // this.isDragging = false;
            // this.canvas.releasePointerCapture(event.pointerId);
        });
        this.canvas.addEventListener("wheel", (event) => {
            const factor = 1.1;
            event.preventDefault();
            if (event.deltaY < 0)
                this.zoom *= factor;
            else
                this.zoom /= factor;
            // TODO zoom minimal et zoom maximal, à décider plus tard
            // this.zoom = Math.max(0.25, Math.min(5, this.zoom));
            // TODO modifier le hexSize pour que les bordures restent visibles même zoomé à fond
            // Settings.hexSize = Settings.basicHexSize + (1 / this.zoom * 1);
        });
    }
    zoomOut() {
        this.zoom = 0.23;
    }
    resetZoom() {
        this.zoom = 1;
    }
    resetCamera() {
        this.x = 0;
        this.y = 0;
    }
    moveCamera(position) {
        this.x = position.x;
        this.y = position.y;
    }
    cameraLeft() {
        this.x -= Settings.panSpeed;
    }
    cameraRight() {
        this.x += Settings.panSpeed;
    }
    cameraUp() {
        this.y -= Settings.panSpeed;
    }
    cameraDown() {
        this.y += Settings.panSpeed;
    }
    screenToWorld(position) {
        return {
            x: (position.x - this.canvas.width / 2) / this.zoom + this.x,
            y: (position.y - this.canvas.height / 2) / this.zoom + this.y
        };
    }
}