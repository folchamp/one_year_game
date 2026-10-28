"use strict";

class Tooltip {
    constructor() {
        Util.quickStructure(document.body, this,
            ["tooltipContainer",
                "tooltipText"
            ]
        );

        Util.hide(this.tooltipContainer);
    }
    attach(element, content) {
        element.addEventListener("mouseenter", (event) => {
            const bounding = element.getBoundingClientRect();
            Util.show(this.tooltipContainer);
            this.tooltipText.innerText = content;

            this.tooltipContainer.style["top"] = `${bounding.y - 154}px`;
            this.tooltipContainer.style["left"] = `${bounding.x}px`;

            // z-index
            // better position
        });
        element.addEventListener("mouseleave", (event) => {
            Util.hide(this.tooltipContainer);
        });
    }
}