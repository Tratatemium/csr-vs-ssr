import { $, create } from "./helpers.js";
import { createSectionBadge } from "./components/components.js";

// Select container
const pageContent = $(".page-content-wrapper");

// Append badges
pageContent.append(
  createSectionBadge("SSR"),
  createSectionBadge("CSR")
);