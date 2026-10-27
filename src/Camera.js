"use strict";

class Camera {
    constructor(canvas) {
        this.canvas = canvas;

        this.x = 0;
        this.y = 0;
        this.zoom = Settings.initialZoom;

        this.isDragging = false;
        document.addEventListener("mouseleave", () => {
            this.mouseInside = false;
        });
        document.addEventListener("mouseenter", () => {
            this.mouseInside = true;
        });
        this.canvas.addEventListener("pointerdown", (event) => {
            this.isDragging = true;
            this.lastMousePosition = Util.getMousePosition(this.canvas, event);
            this.canvas.setPointerCapture(event.pointerId);
        });
        this.canvas.addEventListener("pointermove", (event) => {
            this.edgePanningMousePosition = Util.getMousePosition(this.canvas, event);
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
        this.canvas.addEventListener("wheel", (event) => {
            event.preventDefault();
            const mousePosition = Util.getMousePosition(this.canvas, event);
            // Position dans le monde AVANT le zoom
            const worldPosition = this.screenToWorld(mousePosition);
            const factor = 1.1;
            if (event.deltaY < 0)
                this.zoom *= factor;
            else
                this.zoom /= factor;
            // On ajuste la caméra pour que le même point du monde reste sous la souris
            this.x = worldPosition.x - (mousePosition.x - this.canvas.width / 2) / this.zoom;
            this.y = worldPosition.y - (mousePosition.y - this.canvas.height / 2) / this.zoom;
        });
    }
    update() {
        if (this.edgePanningMousePosition !== undefined && this.mouseInside) {
            if (this.edgePanningMousePosition.x < Settings.edgePanningWidth) {
                this.cameraLeft(Settings.edgePanSpeed);
            }
            if (this.edgePanningMousePosition.y < Settings.edgePanningWidth) {
                this.cameraUp(Settings.edgePanSpeed);
            }
            if (this.edgePanningMousePosition.x > this.canvas.width - Settings.edgePanningWidth) {
                this.cameraRight(Settings.edgePanSpeed);
            }
            if (this.edgePanningMousePosition.y > this.canvas.height - Settings.edgePanningWidth) {
                this.cameraDown(Settings.edgePanSpeed);
            }
        }
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
    cameraLeft(panSpeed = Settings.panSpeed) {
        this.x -= panSpeed / this.zoom;
    }
    cameraRight(panSpeed = Settings.panSpeed) {
        this.x += panSpeed / this.zoom;
    }
    cameraUp(panSpeed = Settings.panSpeed) {
        this.y -= panSpeed / this.zoom;
    }
    cameraDown(panSpeed = Settings.panSpeed) {
        this.y += panSpeed / this.zoom;
    }
    screenToWorld(position) {
        return {
            x: (position.x - this.canvas.width / 2) / this.zoom + this.x,
            y: (position.y - this.canvas.height / 2) / this.zoom + this.y
        };
    }
}