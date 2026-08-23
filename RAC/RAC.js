"use strict";

class RAC {
    constructor() {
        this.resources = [];

        this.actionSelector = new ActionSelector();
        this.knowledgeSelector = new KnowledgeSelector();
        this.lastSelectedResource;

        Util.quickStructure(document.body, this,
            ["allContainer",
                ["resourcesContainer"],
                "downloadButton"
            ]
        );
        LISTENER.add((message, parameters) => { this.listener(message, parameters) });

        this.loadData();
        this.downloadButton.addEventListener("click", (event) => {
            navigator.clipboard.writeText(this.save());
        });
    }
    loadData() {
        let resources = Util.getFromLocalStorage("RAC");
        if (resources === undefined || resources === null) {
            this.completeResourceList();
        } else {
            for (let resourceName in resources) {
                let resourceData = resources[resourceName];
                let resource = this.addResource(resourceName, resourceData.popGrowth, resourceData.regeneration, resourceData.fatigueRecovery);
                for (let actionName in resourceData.actions) {
                    let actionData = resourceData.actions[actionName];
                    let action = resource.addAction(actionName, actionData.fatigue, actionData.get);
                    actionData.unlockConditions.forEach((knowledge) => {
                        action.addCondition(knowledge.knowledge);
                    });
                    actionData.learn.forEach((knowledge) => {
                        action.addLearn(knowledge);
                    });
                }
            };
            this.completeResourceList();
        }
    }
    completeResourceList() {
        for (let resourceName in Data.resources) {
            if (!this.resources.some((resource) => { return resource.resourceName === resourceName; })) {
                this.addResource(resourceName, Data.defaultPopGrowth, Data.defaultRegeneration, Data.defaultFatigueRecovery);
            }
        }
    }
    addResource(resourceName, popGrowth, regeneration, fatigueRecovery) {
        let resource = new Resource(this.resourcesContainer, resourceName, popGrowth, regeneration, fatigueRecovery);
        this.resources.push(resource);
        LISTENER.shout("save");
        return resource;
    }
    listener(message, parameters) {
        if (message === "addAction") {
            this.lastSelectedResource = parameters.resource;
            this.actionSelector.show();
        }
        if (message === "selectAction") {
            this.lastSelectedResource.addAction(parameters.actionName, Data.defaultFatigue, this.lastSelectedResource.resourceName);
        }
        this.save();
    }
    save() {
        let resourcesToStringify = {};
        this.resources.forEach((resource) => {
            resourcesToStringify[resource.resourceName] = { resourceImage: resource.resourceName, actions: {}, popGrowth: resource.popGrowth, seeResourceConditions: [{ knowledge: "starter" }], regeneration: resource.regeneration, fatigueRecovery: resource.fatigueRecovery };
            resource.actions.forEach((action) => {
                resourcesToStringify[resource.resourceName].actions[action.actionName] = { unlockConditions: [], learn: [], fatigue: action.fatigue, get: action.get };
                action.conditions.forEach((knowledge) => {
                    resourcesToStringify[resource.resourceName].actions[action.actionName].unlockConditions.push({ knowledge: knowledge.knowledgeName });
                });
                action.learns.forEach((knowledge) => {
                    resourcesToStringify[resource.resourceName].actions[action.actionName].learn.push(knowledge.knowledgeName);
                });
            });
        });
        Util.saveToLocalStorage("RAC", resourcesToStringify);
        console.log("saved");
        return JSON.stringify(resourcesToStringify);
    }
}