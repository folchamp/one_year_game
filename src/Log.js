"use strict";

class Log {
    constructor() {
        Util.quickStructure(document.body, this, [
            "logContainer"
        ]);
        this.toggle();
    }
    toggle() {
        this.logContainer.classList.toggle("hidden");
    }
    log(string) {
        let log = Util.createDOMElement("log", "pre", this.logContainer);
        this.logContainer.prepend(log);
        log.innerText = string;
    }
}