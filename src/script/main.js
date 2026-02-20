import { $, create } from "./helpers.js";
import { createSectionBadge } from "./components/components.js";
import { createIcon } from "./components/svg.js";

import { createFooter } from "./sections/footer.js";
import { createHero } from "./sections/hero.js";
import { createApproaches } from "./sections/approaches.js";
import { createComparisson } from "./sections/comparisson.js";
import { createHybrid } from "./sections/hybrid.js";

const pageContent = $(".page-content-wrapper");
const loader = $(".loader");

const pageSections = [
  createHero(),
  createApproaches(),
  createComparisson(),
  createHybrid(),
  createFooter(),
];

const fragment = document.createDocumentFragment();
pageSections.forEach((section) => fragment.appendChild(section));

pageContent.appendChild(fragment);

loader.classList.toggle("hidden");
pageContent.classList.toggle("hidden");
