import { create } from "../helpers.js";
import { createIcon } from "./svg.js";

function createSectionBadge(type) {
  if (!["SSR", "CSR"].includes(type)) {
    throw new Error(`type must be "SSR" or "CSR", recived: "${type}".`);
  }

  const container = create("div", { clasName: `section-badge ${type}` });
  const icon = createIcon(type === "SSR" ? "server" : "browser");
  container.appendChild(icon);
  const span = create("span", { textContent: type })
  container.appendChild(span);
  return container;
}
