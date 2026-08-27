"use strict";

class UI {
    constructor(selection, uiActions, inventory, community) {
        this.selection = selection;
        this.uiActions = uiActions;
        this.inventory = inventory;
        this.community = community;
        Util.quickStructure(document.body, this,
            [
                "uiContainer",
                [
                    "unitSelectorContainer",
                    "unitImage"
                ],
                [
                    "hexSelectorContainer",
                    "hexImageContainer",
                    ["hexResourcesContainer"]
                ]
            ]
        );

        Util.quickStructure(document.body, this,
            ["uiTwoContainer",
                "populationText",
                "uiInventoryContainer"
            ]
        );

        Util.quickStructure(document.body, this,
            [
                "uiMobileContainer",
                ["upperMobileContainer",
                    "panUpButton",
                ],
                ["middleMobileContainer",
                    "panLeftButton",
                    "panDownButton",
                    "panRightButton",
                ],
                ["spaceButtonContainer",
                    "spaceButton"
                ]
            ]
        );

        this.panUpButton.addEventListener("click", (event) => { this.uiActions.cameraUp(); });
        this.panLeftButton.addEventListener("click", (event) => { this.uiActions.cameraLeft(); });
        this.panDownButton.addEventListener("click", (event) => { this.uiActions.cameraDown(); });
        this.panRightButton.addEventListener("click", (event) => { this.uiActions.cameraRight(); });
        this.spaceButton.addEventListener("click", (event) => { this.uiActions.nextTick(); });

        Util.hide(this.uiContainer);
    }
    updatePopulation() {
        this.populationText.innerText = `${Util.texts["population"]} : ${Math.round(this.community.population)}`;
    }
    updateInventory() {
        this.uiInventoryContainer.replaceChildren();
        this.inventory.forEach((amountInInventory, resourceName, map) => {
            Util.quickStructure(this.uiInventoryContainer, this, [
                "inventoryResourceContainer",
                "resourceText",
                "giveResourceButtonText"
            ]);
            if (Data.resources[resourceName]) {
                this.resourceText.innerText = `${Data.resources[resourceName].displayName} : ${amountInInventory}`;
            } else {
                this.resourceText.innerText = `${resourceName} (tr. needed) : ${amountInInventory}`;
            }
            this.giveResourceButtonText.addEventListener("click", (event) => {
                this.uiActions.feedCommunityClick(resourceName);
            });
        });
    }
    updateUnit() {
        this.unitImage.src = Images.unitImages[this.selection.selectedEntityData.imageName].src
        Util.show(this.uiContainer);
        Util.show(this.unitSelectorContainer);
    }
    updateHex() {
        let hex = this.selection.selectedHex;
        this.hexResourcesContainer.replaceChildren();
        Util.show(this.uiContainer);
        Util.show(this.hexSelectorContainer);
        if (hex.isSeenThroughFog || !Settings.production) {
            this.hexImageContainer.style["background-image"] = `url("${Images.tileImages[this.selection.selectedHex.biome.imageName].src}")`;
            hex.resources.forEach((resource) => {
                Util.quickStructure(this.hexResourcesContainer, this,
                    ["hexResourceContainer",
                        ["resourceDescriptionContainer",
                            "resourceImage",
                            "resourceNameText"],
                        "resourceActionsContainer"
                    ]
                );
                if (hex.isExplored || !Settings.production) {
                    this.addResource(hex, resource);
                } else {
                    this.resourceImage.src = Images.resourceImages["unknownResource"].src;
                }
            });
        } else {
            this.hexImageContainer.style["background-image"] = `url("${Images.tileImages["fog_of_war"].src}")`;
        }
    }
    addResource(hex, resource) {
        this.resourceImage.src = Images.resourceImages[resource.resourceData.imageName].src;
        this.resourceNameText.innerText = resource.resourceData.displayName;
        if (!resource.isAvailable) {
            this.resourceImage.classList.add("resourceUnavailable");
        }
        for (let actionName in resource.resourceData.actions) {
            let action = resource.resourceData.actions[actionName];
            if (this.community.fillsConditions(action.requiresOneOf) || !Settings.production) {
                let actionButton = Util.createDOMElement("actionButton", "span", this.resourceActionsContainer);
                actionButton.innerText = action.displayName;
                actionButton.addEventListener("click", (event) => {
                    this.uiActions.actionButtonClick(hex, resource, actionName);
                });
            }
        };
    }
    update() {
        Util.hide(this.uiContainer);
        Util.hide(this.unitSelectorContainer);
        Util.hide(this.hexSelectorContainer);
        if (this.selection.selectedEntity !== undefined) {
            this.updateUnit();
        } else if (this.selection.selectedHex !== undefined) {
            this.updateHex();
        }
        this.updateInventory();
        this.updatePopulation();
    }
}