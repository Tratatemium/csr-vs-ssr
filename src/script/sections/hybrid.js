import { $, create } from "../helpers.js";
import { createSectionBadge } from "../components/components.js";
import { createIcon } from "../components/svg.js";

function createHybrid () {
    const hybrid = create("section", {
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

    return hybrid;
};

export { createHybrid };