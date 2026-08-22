"use strict";

class ActionSelector {
    constructor() {

        Util.quickStructure(document.body, this,
            ["actionSelectorContainer",
                "actionsContainer"
            ]
        );

        for (let actionName in Data.actions) {
            let element = Util.createDOMElement("actionSelectionText", "span", this.actionsContainer);
            element.addEventListener("click", (event) => {
                this.hide();
                LISTENER.shout("selectAction", { actionName: actionName });
            });
            element.innerText = Data.actions[actionName];
        }

        this.actionSelectorContainer.addEventListener("click", (event) => {
            this.hide();
        });

        this.hide();
    }
    show() {
        Util.show(this.actionSelectorContainer);
    }
    hide() {
        Util.hide(this.actionSelectorContainer);
    }
}