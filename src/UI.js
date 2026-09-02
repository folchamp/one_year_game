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
        const inventoryContent = this.inventory.getContent();
        // Util.quickStructure(this.uiInventoryContainer, this, ["inventoryResourceContainer"]);
        for (let categoryName in inventoryContent) {
            const resources = inventoryContent[categoryName];
            let total = 0;
            Util.quickStructure(this.uiInventoryContainer, this,
                ["inventoryCategoryContainer",
                    "inventoryCategoryNameText",
                    "inventoryCategoryTotalText",
                    "inventoryCategoryResourcesContainer"
                ]
            );

            if (Data.resourceCategoriesDisplayNames[categoryName] !== undefined) {
                this.inventoryCategoryNameText.innerText = Data.resourceCategoriesDisplayNames[categoryName];
            } else {
                this.inventoryCategoryNameText.innerText = `${categoryName} (tr. needed)`;
            }
            for (let resourceName in resources) {
                const amount = resources[resourceName];
                total += amount;
                Util.quickStructure(this.inventoryCategoryResourcesContainer, this,
                    ["resourceContainer",
                        "resourceNameText",
                        "resourceAmountText"]
                )
                this.resourceNameText.innerText = Data.resources[resourceName].displayName;
                this.resourceAmountText.innerText = amount;
            }
            this.inventoryCategoryTotalText.innerText = total;
        }




        // this.inventory.getContent().forEach((amountInInventory, resourceCategory, map) => {
        //     Util.quickStructure(this.uiInventoryContainer, this,
        //         ["inventoryResourceContainer",
        //             "resourceText",
        //             // "giveResourceButtonText"
        //         ]
        //     );
        //     if (Data.resourceCategoriesDisplayNames[resourceCategory]) {
        //         this.resourceText.innerText = `${Data.resourceCategoriesDisplayNames[resourceCategory]} : ${amountInInventory}`;
        //     } else {
        //         this.resourceText.innerText = `${resourceCategory} (tr. needed) : ${amountInInventory}`;
        //     }
        //     // this.giveResourceButtonText.addEventListener("click", (event) => {
        //     //     this.uiActions.feedCommunityClick(resourceName);
        //     // });
        // });
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
        try {
            this.resourceImage.src = Images.resourceImages[resource.resourceData.imageName].src;
        } catch (error) {
            console.log(`${resource.resourceData.resourceName} n'a pas d'image`);
        }
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