import { $, create } from "./helpers.js"
import { createSectionBadge } from "./components/components.js";

pageContenet = $(".page-content-wraper");

pageContenet.appendChild(createSectionBadge("SSR"));
pageContenet.appendChild(createSectionBadge("CSR"));