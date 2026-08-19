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
            this.resourceText.innerText = `${resourceName} : ${amountInInventory}`;
            this.giveResourceButtonText.addEventListener("click", (event) => {
                this.uiActions.feedCommunityClick(resourceName);
            });
        });
    }
    updateUnit() {
        this.unitImage.src = Data.unitImages[this.selection.selectedEntityData.imageName].src
        Util.show(this.uiContainer);
        Util.show(this.unitSelectorContainer);
    }
    updateHex() {
        let hex = this.selection.selectedHex;
        this.hexResourcesContainer.replaceChildren();
        Util.show(this.uiContainer);
        Util.show(this.hexSelectorContainer);
        if (hex.isSeenThroughFog || !Settings.production) {
            this.hexImageContainer.style["background-image"] = `url("${Data.tileImages[this.selection.selectedHex.biome.imageName].src}")`;
            hex.resources.forEach((resource) => {
                Util.quickStructure(this.hexResourcesContainer, this,
                    ["hexResourceContainer",
                        "resourceImage",
                        "resourceActionsContainer"
                    ]
                );
                if (hex.isExplored) {
                    this.addResource(hex, resource);
                } else {
                    this.resourceImage.src = Data.resourceImages["unknownResource"].src;
                }
            });
        } else {
            this.hexImageContainer.style["background-image"] = `url("${Data.tileImages["fog_of_war"].src}")`;
        }
    }
    addResource(hex, resource) {
        this.resourceImage.src = Data.resourceImages[resource.resourceData.imageName].src;
        if (!resource.isAvailable) {
            this.resourceImage.classList.add("resourceUnavailable");
        }
        for (let actionName in resource.resourceData.actions) {
            let actionButton = Util.createDOMElement("actionButton", "span", this.resourceActionsContainer);
            actionButton.innerText = Util.texts[actionName];
            actionButton.addEventListener("click", (event) => {
                this.uiActions.actionButtonClick(hex, resource, actionName);
            });
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