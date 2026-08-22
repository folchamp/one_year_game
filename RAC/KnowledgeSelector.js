"use strict";

class KnowledgeSelector {
    constructor() {

        Util.quickStructure(document.body, this,
            ["knowledgeSelectorContainer",
                "knowledgesContainer"
            ]
        );

        for (let knowledgeName in Data.knowledges) {
            let element = Util.createDOMElement("knowledgeSelectionText", "span", this.knowledgesContainer);
            element.addEventListener("click", (event) => {
                this.hide();
                this.lastParameters.knowledgeName = knowledgeName;
                LISTENER.shout("selectKnowledge", this.lastParameters);
            });
            element.innerText = Data.knowledges[knowledgeName];
        }

        this.knowledgeSelectorContainer.addEventListener("click", (event) => {
            this.hide();
        });

        LISTENER.add((message, parameters) => { this.listener(message, parameters) });

        this.hide();
    }
    listener(message, parameters) {
        if (message === "addKnowledge") {
            this.lastParameters = parameters;
            this.show();
        }
    }
    show() {
        Util.show(this.knowledgeSelectorContainer);
    }
    hide() {
        Util.hide(this.knowledgeSelectorContainer);
    }
}