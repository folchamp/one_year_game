"use strict";

class UI {
    constructor(selection, uiActions, player) {
        this.selection = selection;
        this.uiActions = uiActions;
        this.player = player;

        this.inventory = this.player.inventory;
        this.community = this.player.community;
        this.lastMousePosition = { x: 0, y: 0 };

        // **************************************************
        // UI
        // **************************************************
        Util.quickStructure(document.body, this,
            ["uiContainer",
                [
                    "unitSelectorContainer",
                    "unitImage",
                    ["unitSpellsContainer"]
                ],
                [
                    "hexSelectorContainer",
                    "hexImageContainer",
                    ["hexResourcesContainer"]
                ],
                ["uiCommunityActionsContainer"]
            ]
        );

        // **************************************************
        // UI Two
        // **************************************************
        Util.quickStructure(document.body, this,
            ["uiTwoContainer",
                "uiInventoryContainer"
            ]
        );

        // **************************************************
        // UI Mobile
        // **************************************************
        Util.quickStructure(document.body, this,
            ["uiMobileContainer",
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

        this.populateUnits();

        this.panUpButton.addEventListener("click", (event) => { this.uiActions.cameraUp(); });
        this.panLeftButton.addEventListener("click", (event) => { this.uiActions.cameraLeft(); });
        this.panDownButton.addEventListener("click", (event) => { this.uiActions.cameraDown(); });
        this.panRightButton.addEventListener("click", (event) => { this.uiActions.cameraRight(); });
        this.spaceButton.addEventListener("click", (event) => { this.uiActions.nextTick(); });

        Util.hide(this.uiContainer);
        Util.hide(this.uiCommunityActionsContainer);
    }
    populateUnits() {
        // populate units in community actions
        this.uiCommunityActionsContainer.replaceChildren();
        Data.creatableUnits.forEach((unitName) => {
            const unitPrice = Data.units[unitName].unitPrice;
            Util.quickStructure(this.uiCommunityActionsContainer, this,
                ["uiCreateExplorerContainer",
                    "uiCreateUnitImage",
                    "uiUnitPriceContainer",
                    "uiCreateUnitButton"
                ]
            );
            this.uiCreateUnitImage.src = Images.unitImages[unitName].src;
            this.uiCreateUnitButton.innerText = unitName;
            this.uiCreateUnitButton.addEventListener("click", () => { this.uiActions.createUnit(unitName, this.player); });
            for (const resourceCategoryName in unitPrice) {
                const amount = unitPrice[resourceCategoryName];
                const amountPriceText = Util.createDOMElement("amountPriceText", "span", this.uiUnitPriceContainer);
                const resourceCategoryPriceImage = Util.createDOMElement("resourceCategoryPriceImage", "img", this.uiUnitPriceContainer);
                amountPriceText.innerText = amount;
                resourceCategoryPriceImage.src = Images.categoryImages[Data.categories[resourceCategoryName].categoryImageName].src;
            }
        });
    }
    setLastMousePosition(pos) {
        this.lastMousePosition = pos;
    }
    updateInventory() {
        // TODO optimiser, ne pas tout récréer chaque fois
        this.uiInventoryContainer.replaceChildren();
        const inventoryContent = this.inventory.getContent();
        for (let categoryName in inventoryContent) {
            let total = inventoryContent[categoryName];;
            Util.quickStructure(this.uiInventoryContainer, this,
                ["inventoryCategoryContainer",
                    "inventoryCategoryImage",
                    "inventoryCategoryTotalText",
                ]
            );
            this.inventoryCategoryImage.src = Images.categoryImages[Data.categories[categoryName].categoryImageName].src;
            this.inventoryCategoryTotalText.innerText = total;
        }
    }
    updateUnit() {
        const entity = this.selection.selectedEntity;
        const powersData = this.selection.selectedEntityData.combatStats.powers;
        this.unitSpellsContainer.replaceChildren();
        for (const powerName in powersData) {
            const power = powersData[powerName];
            Util.quickStructure(this.unitSpellsContainer, this,
                ["singlePowerContainer",
                    ["powerNameContainer",
                        "powerNameText"],
                    ["powerRangeContainer",
                        "rangeImage",
                        "powerRangeText"],
                    ["powerDamageContainer",
                        "damageImage",
                        "powerDamageText"],
                    ["powerEffectContainer",
                        "effectImage",
                        "powerEffectText"
                    ],
                    "usePowerButton"
                ]
            );
            this.effectImage.src = Images.otherImages["effect"].src;
            this.rangeImage.src = Images.otherImages["range"].src;
            this.damageImage.src = Images.otherImages["damage"].src;
            this.powerNameText.innerText = power.powerName;
            this.powerRangeText.innerText = power.range;
            this.powerDamageText.innerText = power.damage;
            if (power.effect !== undefined) {
                this.powerEffectText.innerText = power.effect;
            } else {
                this.powerEffectText.innerText = "/";
            }
            this.usePowerButton.addEventListener("click", (event) => {
                this.uiActions.powerButtonClick(entity, power);
            });
        }
        this.unitImage.src = Images.unitImages[this.selection.selectedEntityData.sprite.imageName].src
        Util.show(this.uiContainer);
        Util.show(this.unitSelectorContainer);
    }
    updateHex(hex) {
        this.hexResourcesContainer.replaceChildren();
        Util.show(this.uiContainer);
        Util.show(this.hexSelectorContainer);
        if (hex.hasSeen(this.player) || !Settings.production) {
            this.hexImageContainer.style["background-image"] = `url("${Images.tileImages[hex.biome.imageName].src}")`;
            hex.resources.forEach((resource) => {
                Util.quickStructure(this.hexResourcesContainer, this,
                    ["hexResourceContainer",
                        ["resourceDescriptionContainer",
                            ["resourceDetailsContainer",
                                "resourceImage",
                                "resourceNameText",
                            ],
                            "resourceActionsContainer"]
                    ]
                );
                if (hex.hasExplored(this.player) || !Settings.production) {
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
        if (Images.resourceImages[resource.resourceData.imageName] === undefined) {
            this.resourceImage.src = Images.resourceImages["unknownResource"].src;
            console.log(`${resource.resourceData.resourceName} n'a pas d'image`);
        } else {
            this.resourceImage.src = Images.resourceImages[resource.resourceData.imageName].src;
        }
        this.resourceNameText.innerText = resource.resourceData.displayName;
        if (!resource.isAvailable) {
            this.resourceImage.classList.add("resourceUnavailable");
        }
        for (let actionName in resource.resourceData.actions) {
            let action = resource.resourceData.actions[actionName];
            let get = action.get;
            let fatigue = Data.categories[Data.resources[get].category].fatigue;
            Util.quickStructure(this.resourceActionsContainer, this,
                ["actionContainer",
                    "getImage",
                    "actionText"
                ]
            );
            this.actionText.innerText = `${action.displayName} (${fatigue})`;
            this.getImage.src = Images.categoryImages[Data.categories[Data.resources[action.get].category].categoryImageName].src;
            this.getImage.width = Settings.categoryImageSize;
            if (this.community.fillsConditions(action.requiresOneOf) || !Settings.production) {
                this.actionContainer.addEventListener("click", (event) => {
                    this.uiActions.actionButtonClick(hex, resource, actionName);
                });
            } else {
                this.actionContainer.classList.add("grayedOut");
            }
        };
    }
    update() {
        Util.hide(this.uiContainer);
        Util.hide(this.unitSelectorContainer);
        Util.hide(this.hexSelectorContainer);
        if (this.selection.selectedEntity !== undefined) {
            this.updateUnit();
        }
        if (this.selection.selectedHex !== undefined) {
            this.updateHex(this.selection.selectedHex);
        }
        this.updateInventory();
        if (this.selection.isCommunity) {
            Util.show(this.uiCommunityActionsContainer);
            Util.show(this.unitSelectorContainer);
            Util.show(this.hexSelectorContainer);
            // this.uiCommunityActionsContainer.style["left"] = this.lastMousePosition.x + "px";
            // this.uiCommunityActionsContainer.style["top"] = this.lastMousePosition.y + "px";
            this.unitImage.src = Images.unitImages["campfire"].src;
        } else {
            Util.hide(this.uiCommunityActionsContainer);
        }
    }
}