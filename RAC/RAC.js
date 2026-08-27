"use strict";

class RAC {
    constructor() {
        this.resources = [];

        this.savePromise;

        this.actionSelector = new ActionSelector();
        this.knowledgeSelector = new KnowledgeSelector();
        this.lastSelectedResource;

        Util.quickStructure(document.body, this,
            ["allContainer",
                ["resourcesContainer"],
                "downloadButton",
                "uploadInput"
            ]
        );
        LISTENER.add((message, parameters) => { this.listener(message, parameters) });

        this.loadData();
        this.downloadButton.addEventListener("click", (event) => {
            this.save().then((data) => { navigator.clipboard.writeText(data); });
        });
        this.uploadInput.placeholder = "JSON";
        this.uploadInput.addEventListener("change", (event) => {
            Util.saveToLocalStorage("RAC", JSON.parse(this.uploadInput.value));
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
                    actionData.requiresOneOf.forEach((knowledge) => {
                        action.addCondition(knowledge);
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
        if (this.savePromise === undefined) {
            this.savePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let resourcesToStringify = {};
                    this.resources.forEach((resource) => {
                        resourcesToStringify[resource.resourceName] = { imageName: resource.resourceName, actions: {}, popGrowth: resource.popGrowth, regeneration: resource.regeneration, fatigueRecovery: resource.fatigueRecovery };
                        resource.actions.forEach((action) => {
                            resourcesToStringify[resource.resourceName].actions[action.actionName] = { requiresOneOf: [], learn: [], fatigue: action.fatigue, get: action.get };
                            action.conditions.forEach((knowledge) => {
                                resourcesToStringify[resource.resourceName].actions[action.actionName].requiresOneOf.push(knowledge.knowledgeName);
                            });
                            action.learns.forEach((knowledge) => {
                                resourcesToStringify[resource.resourceName].actions[action.actionName].learn.push(knowledge.knowledgeName);
                            });
                        });
                    });
                    Util.saveToLocalStorage("RAC", resourcesToStringify);
                    console.log("saved");
                    this.savePromise = undefined;
                    resolve(JSON.stringify(resourcesToStringify));
                }, 1500);
            });
        }
        return this.savePromise;
    }
}