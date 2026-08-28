"use strict";

class Action {
    constructor(parent, resourceName, actionName, fatigue, get, displayName) {
        this.parent = parent;
        this.resourceName = resourceName;
        this.actionName = actionName;

        this.fatigue = fatigue;
        this.get = get;
        this.displayName = displayName;

        this.conditions = [];
        this.learns = [];

        Util.quickStructure(this.parent, this,
            ["actionContainer",
                ["actionHeaderContainer",
                    "removeActionButton",
                    "actionNameText",
                    "actionGetInput",
                ],
                ["knowledgeContainer",
                    ["knowledgeConditionContainer",
                        "addKnowledgeConditionButton",
                        "knowledgeConditionText"],
                    ["knowledgeLearnContainer",
                        "addKnowledgeLearnButton",
                        "knowledgeLearnText"],
                ]
            ]
        );
        this.addKnowledgeConditionButton.innerText = "+";
        this.removeActionButton.innerText = "-";
        this.actionNameText.innerText = actionName;
        this.addKnowledgeLearnButton.innerText = "+";
        this.knowledgeConditionText.innerText = "condition";
        this.knowledgeLearnText.innerText = "learn";
        this.actionGetInput.value = this.get;

        this.actionHeaderContainer.addEventListener("click", (event) => {
            Util.toggle(this.knowledgeContainer);
        });

        this.actionGetInput.addEventListener("change", (event) => {
            this.get = this.actionGetInput.value;
            LISTENER.shout("save");
        });

        this.removeActionButton.addEventListener("click", (event) => {
            LISTENER.shout("removeAction", { resourceName: this.resourceName, actionName: this.actionName });
            LISTENER.shout("save");
        });

        this.addKnowledgeConditionButton.addEventListener("click", (event) => {
            LISTENER.shout("addKnowledge", { resourceName: resourceName, actionName: actionName, type: "condition" });
        });

        this.addKnowledgeLearnButton.addEventListener("click", (event) => {
            LISTENER.shout("addKnowledge", { resourceName: resourceName, actionName: actionName, type: "learn" });
        });

        LISTENER.add((message, parameters) => { this.listener(message, parameters) });

    }
    listener(message, parameters) {
        if (message === "selectKnowledge" && parameters.resourceName === this.resourceName && parameters.actionName === this.actionName) {
            if (parameters.type === "condition") {
                this.addCondition(parameters.knowledgeName);
            } else if (parameters.type === "learn") {
                this.addLearn(parameters.knowledgeName);
            }
        }
        if (message === "removeKnowledge" && this.resourceName === parameters.resourceName && this.actionName === parameters.actionName) {
            this.removeFromCondition(parameters);
            this.removeFromLearn(parameters);
            LISTENER.shout("save");
        }
    }
    removeFromLearn(parameters) {
        let knowledgeName = parameters.knowledgeName;
        let indexToRemove;
        for (let index = 0; index < this.learns.length; index++) {
            const knowledge = this.learns[index];
            if (knowledge.knowledgeName === knowledgeName) {
                indexToRemove = index;
                knowledge.remove();
            }
        }
        if (indexToRemove !== undefined) {
            this.learns.splice(indexToRemove, 1);
        }
    }
    removeFromCondition(parameters) {
        let knowledgeName = parameters.knowledgeName;
        let indexToRemove;
        for (let index = 0; index < this.conditions.length; index++) {
            const knowledge = this.conditions[index];
            if (knowledge.knowledgeName === knowledgeName) {
                indexToRemove = index;
                knowledge.remove();
            }
        }
        if (indexToRemove !== undefined) {
            this.conditions.splice(indexToRemove, 1);
        }
    }
    addLearn(knowledgeName) {
        let knowledge = new Knowledge(this.resourceName, this.actionName, knowledgeName, this.knowledgeLearnContainer);
        this.learns.push(knowledge);
        LISTENER.shout("save");
    }
    addCondition(knowledgeName) {
        let knowledge = new Knowledge(this.resourceName, this.actionName, knowledgeName, this.knowledgeConditionContainer);
        this.conditions.push(knowledge);
        LISTENER.shout("save");
    }
    remove() {
        this.actionContainer.remove();
    }
    hide() {
        Util.hide(this.knowledgeContainer);
    }
}