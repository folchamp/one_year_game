"use strict";

class Knowledge {
    constructor(resourceName, actionName, knowledgeName, parent) {
        this.resourceName = resourceName;
        this.actionName = actionName;
        this.knowledgeName = knowledgeName;
        this.parent = parent;

        Util.quickStructure(this.parent, this,
            ["knowledgeContainer",
                "knowledgeText",
                "knowledgeRemoveButton"]);

        this.knowledgeText.innerText = this.knowledgeName;
        this.knowledgeRemoveButton.innerText = "-";

        this.knowledgeRemoveButton.addEventListener("click", (event) => {
            LISTENER.shout("removeKnowledge", { resourceName: this.resourceName, actionName: this.actionName, knowledgeName: this.knowledgeName });
        });

        this.knowledgeContainer.addEventListener("click", (event) => {
            LISTENER.shout("illuminate", { knowledgeName: this.knowledgeName });
            this.knowledgeContainer.classList.add("illuminateBetter");
        });

        LISTENER.add((message, parameters) => { this.listener(message, parameters) });
    }
    listener(message, parameters) {
        if (message === "illuminate" && parameters.knowledgeName === this.knowledgeName) {
            this.illuminate();
        } else {
            this.desilluminate();
        }
    }
    illuminate() {
        this.knowledgeContainer.classList.add("illuminate");
    }
    desilluminate() {
        this.knowledgeContainer.classList.remove("illuminate");
        this.knowledgeContainer.classList.remove("illuminateBetter");
    }
    remove() {
        this.knowledgeContainer.remove();
    }
}