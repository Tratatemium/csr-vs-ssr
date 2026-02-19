import { $, create } from "../helpers.js";
import { createSectionBadge } from "../components/components.js";
import { createIcon } from "../components/svg.js";

function createComparisson() {
  const tbody = [
    ["Initial Load Speed", "Slower", "Faster"],
    ["SEO", "Challenging", "Excellent"],
    ["Server Load", "Low", "High"],
    ["Interactivity", "Immediate after load", "After hydration"],
    ["Best Use Case", "Web apps, dashboards", "Content sites, e-commerce"],
    ["Time to First Byte", "Fast", "Variable"],
    ["JavaScript Required", "Yes", "No (for basic content)"],
  ];
  const comparisson = create("section", {
    className: "comparison",
    id: "comparison",
    children: [
      create("div", {
        className: "section-content comparison",
        children: [
          create("h2", { textContent: "Side-by-Side Comparison" }),
          create("span", {
            textContent:
              "Understanding the key differences between CSR and SSR at a glance",
          }),
          create("table", {
            children: [
              create("thead", {
                children: [
                  create("tr", {
                    children: [
                      create("th", { scope: "col", textContent: "Feature" }),
                      create("th", {
                        scope: "col",
                        children: [createSectionBadge("CSR")],
                      }),
                      create("th", {
                        scope: "col",
                        children: [createSectionBadge("SSR")],
                      }),
                    ],
                  }),
                ],
              }),
              create("tbody", {
                children: tbody.map(([th, td1, td2]) =>
                  create("tr", {
                    children: [
                      create("th", { scope: "row", textContent: th }),
                      create("td", { textContent: td1 }),
                      create("td", { textContent: td2 }),
                    ],
                  }),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return comparisson;
}

// create("div", { className: "", children: [] }),

export { createComparisson };
