import { Children } from "react";
import { create } from "../helpers.js";
import { createIcon } from "./svg.js";

function createSectionBadge(type) {
  if (!["SSR", "CSR"].includes(type)) {
    throw new Error(`type must be "SSR" or "CSR", recived: "${type}".`);
  }

  const container = create("div", {
    clasName: `section-badge ${type}`,
    children: [
      createIcon(type === "SSR" ? "server" : "browser"),
      create("span", { textContent: type }),
    ],
  });

  return container;
}
