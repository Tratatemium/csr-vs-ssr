import { $, create } from "../helpers.js";
import { createSectionBadge } from "../components/components.js";
import { createIcon } from "../components/svg.js";

function createComparisson () {
    const comparisson = create("section", {
        clssName: "",
        id: "",
        children: [
            create("div", {
                clssName: "",
                children: [
                    
                ],
            }),
        ],
    });

    return comparisson;
};

// create("div", { className: "", children: [] }),

export { createComparisson };