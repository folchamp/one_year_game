"use strict";

class Display {
    constructor() {
        Util.quickStructure(document.body, this, [
            "gameCanvasContainer", "gameCanvas"
        ]);
        window.addEventListener("resize", () => this.resize());
        this.resize();
    }
    getCanvas() {
        return this.gameCanvas;
    }
    getWidth() {
        return this.gameCanvas.width;
    }
    getHeight() {
        return this.gameCanvas.height;
    }
    resize() {
        this.gameCanvas.width = window.innerWidth;
        this.gameCanvas.height = window.innerHeight;
    }
    getContext() {
        return this.gameCanvas.getContext("2d");
    }
}