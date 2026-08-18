"use strict";

class UI {
    constructor(selection, uiActions, inventory) {
        this.selection = selection;
        this.uiActions = uiActions;
        this.inventory = inventory;
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
                "uiInventoryContainer"
            ]
        );

        Util.hide(this.uiContainer);
    }
    updateInventory() {
        this.uiInventoryContainer.replaceChildren();
        this.inventory.forEach((value, key, map) => {
            let element = Util.createDOMElement("resourceText", "p", this.uiInventoryContainer);
            element.innerText = `${key} : ${value}`;
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
        this.hexImageContainer.style["background-image"] = `url("${Data.tileImages[this.selection.selectedHex.biome.imageName].src}")`;
        Util.show(this.uiContainer);
        Util.show(this.hexSelectorContainer);
        hex.resources.forEach((resource) => {
            let image = Util.createDOMElement("resourceImage", "img", this.hexResourcesContainer);
            image.src = Data.resourceImages[resource.resourceData.imageName].src;
            image.addEventListener("click", (event) => {
                this.uiActions.harvestResource(hex, resource.resourceData.resourceName);
            });
            if (!resource.isAvailable) {
                image.classList.add("resourceUnavailable");
            }
        });
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
    }
}