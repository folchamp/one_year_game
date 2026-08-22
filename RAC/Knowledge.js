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

        this.knowledgeText.innerText = Data.knowledges[this.knowledgeName];
        this.knowledgeRemoveButton.innerText = "-";

        this.knowledgeRemoveButton.addEventListener("click", (event) => {
            LISTENER.shout("removeKnowledge", { resourceName: this.resourceName, actionName: this.actionName, knowledgeName: this.knowledgeName });
        });
    }
    remove() {
        this.knowledgeContainer.remove();
    }
}