import { create } from "../helpers.js";
import { createSectionBadge } from "../components/components.js";
import { createIcon } from "../components/svg.js";

function createHybrid() {
  const usecases = [
    ["CSR", "Dashboards, interactive features"],
    ["SSR", "Landing pages, blogs"],
  ];
  const strategies = [
    "Static Site Generation (SSG)",
    "Incremental Static Regeneration (ISR)",
    "Streaming SSR",
    "Partial Hydration",
  ];

  const hybrid = create("section", {
    className: "hybrid-approach",
    id: "hybrid",
    children: [
      create("div", {
        className: "hybrid-approach badge",
        children: [
          createIcon("arrows"),
          create("span", { textContent: "Modern Approach" }),
        ],
      }),
      create("div", {
        className: "section-content hybrid-approach",
        children: [
          create("h2", { textContent: "Hybrid Rendering" }),
          create("span", {
            className: "hybrid-approach",
            textContent: "Best of Both Worlds",
          }),
          create("p", {
            textContent: `Modern frameworks like Next.js, Nuxt, and SvelteKit support mixing rendering strategies on a per-page
                    or per-component basis. You can use SSR for SEO-critical pages and CSR for dynamic interactions.`,
          }),
          create("div", {
            className: "usecases hybrid-approach",
            children: usecases.map(([type, text]) => 
              create("div", {
                className: `usecase ${type}`,
                children: [
                  createSectionBadge(type),
                  create("span", { className: "usecase", textContent: text }),
                ],
              })
            ),
          }),
          create("div", {
            className: "strategies hybrid-approach",
            children: [
              create("div", {
                className: "strategies-heading",
                children: [
                  createIcon("check"),
                  create("h4", { textContent: "Strategies avalible" }),
                ],
              }),
              create("ul", {
                className: "strategies",
                children: strategies.map((text) =>
                  create("li", { textContent: text }),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return hybrid;
}

export { createHybrid };
