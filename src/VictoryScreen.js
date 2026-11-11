"use strict";

class VictoryScreen {
    constructor(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;

        Util.quickStructure(document.body, this,
            ["victoryScreenContainer",
                ["victoryScreenSubContainer",
                    "victoryScreenTitle",
                    "victoryScreenText",
                    ["victoryScreenButtonContainer",
                        "victoryScreenButton"
                    ]
                ]
            ]);

        this.victoryScreenButton.innerText = "Fermer";
        this.victoryScreenButton.addEventListener("click", () => {
            this.reset();
        });

        eventDispatcher.on("victory", (data) => {
            this.show(data);
        });

        this.reset();
    }

    reset() {
        Util.hide(this.victoryScreenContainer);
        this.victoryScreenTitle.innerText = "";
        this.victoryScreenText.innerText = "";
    }

    show(data = {}) {
        this.victoryScreenTitle.innerText = data.title ?? "Victoire !";
        this.victoryScreenText.innerText = data.content ?? "Vous avez remporté la partie !";

        Util.show(this.victoryScreenContainer);
    }
}