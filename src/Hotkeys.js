"use strict";

class Hotkeys {
    constructor() {
        // TODO add support for ctrl and shift
        this.Bindings = new Map();

        window.addEventListener("keydown", (event) => {
            let shortcut = "";
            let action;
            if (event.ctrlKey) shortcut += "Ctrl+";
            if (event.shiftKey) shortcut += "Shift+";
            if (event.altKey) shortcut += "Alt+";
            shortcut += event.code;
            action = this.Bindings.get(event.code);
            if (action !== undefined) {
                event.preventDefault();
                action.f();
            }
        });
    }
    getHotkeys() {
        let hotkeys = [];
        this.Bindings.forEach((value, key, map) => {
            hotkeys.push({ key: key, description: value.description });
        });
        return hotkeys;
    }
    bind(key, action) {
        this.Bindings.set(key, action);
    }

}