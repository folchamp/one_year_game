"use strict";

class Resource {
    constructor(parent, resourceName, popGrowth, regeneration, fatigueRecovery, category, displayName) {
        this.parent = parent;
        this.resourceName = resourceName;
        this.popGrowth = popGrowth;
        this.regeneration = regeneration;
        this.fatigueRecovery = fatigueRecovery;
        this.category = category;
        this.displayName = displayName;

        this.actions = [];

        Util.quickStructure(this.parent, this,
            [
                "resourceContainer",
                ["resourceHeaderContainer",
                    "resourceNameTitle",
                    "resourceCategoryText",
                    // "resourceImage",
                    "popGrowthInput",
                    "addActionButton"],
                "resourceActionsContainer"
            ]
        );

        // this.resourceImage.src = `../images/resources/${this.resourceName}.png`;

        this.resourceNameTitle.innerText = resourceName;
        this.addActionButton.innerText = "+";
        this.popGrowthInput.type = "number";
        this.popGrowthInput.value = popGrowth;
        this.resourceCategoryText.innerText = this.category;

        this.addActionButton.addEventListener("click", (event) => {
            event.stopPropagation();
            LISTENER.shout("addAction", { resource: this });
        });

        this.resourceHeaderContainer.addEventListener("click", (event) => {
            Util.toggle(this.resourceActionsContainer);
        });

        this.popGrowthInput.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        this.popGrowthInput.addEventListener("change", (event) => {
            this.popGrowth = Number(this.popGrowthInput.value);
            LISTENER.shout("save");
        });

        LISTENER.add((message, parameters) => { this.listener(message, parameters); });
    }
    listener(message, parameters) {
        if (message === "removeAction" && parameters.resourceName === this.resourceName) {
            let actionName = parameters.actionName;
            let indexToRemove;
            for (let index = 0; index < this.actions.length; index++) {
                const action = this.actions[index];
                if (action.actionName === actionName) {
                    indexToRemove = index;
                    action.remove();
                }
            }
            this.actions.splice(indexToRemove, 1);
        }
    }
    addAction(actionName, fatigue, get, displayName) {
        let action = new Action(this.resourceActionsContainer, this.resourceName, actionName, fatigue, get, displayName);
        this.actions.push(action);
        Util.show(this.resourceActionsContainer);
        LISTENER.shout("save");
        // action.hide();
        return action;
    }
}