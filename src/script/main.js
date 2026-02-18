import { $, create } from "./helpers.js";
import { createSectionBadge } from "./components/components.js";
import { createIcon } from "./components/svg.js";

import { createFooter } from "./sections/footer.js";

const pageContent = $(".page-content-wrapper");

const fragment = document.createDocumentFragment();
fragment.appendChild(createFooter());

pageContent.appendChild(fragment);