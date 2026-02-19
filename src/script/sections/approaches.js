import { $, create, capitalize } from "../helpers.js";
import { createSectionBadge } from "../components/components.js";
import { createIcon } from "../components/svg.js";

const sectionsData = [
  {
    id: "section-CSR",
    type: "CSR",
    title: "Client-Side Rendering",
    icon: "monitor",
    description:
      "With CSR, the browser downloads a minimal HTML page, then JavaScript runs on the client to fetch data and build the UI dynamically. The rendering happens entirely in the user's browser.",

    bestFor: ["Single Page Apps", "Dashboards", "Interactive Apps"],

    frameworks: [
      { name: "React", className: "react", icon: "react" },
      { name: "Vue", className: "vue", icon: "vue" },
      { name: "Angular", className: "angular", icon: "angular" },
    ],

    evaluation: [
      {
        name: "advantages",
        icon: "check",
        points: [
          "Rich, interactive user experiences",
          "Reduced server load after initial page",
          "Fast subsequent page transitions",
          "Great for dynamic, app-like interfaces",
        ],
      },
      {
        name: "disadvantages",
        icon: "x",
        points: [
          "Slower initial page load",
          "SEO challenges without extra tools",
          "Requires JavaScript to be enabled",
          "Potential performance issues on slow devices",
        ],
      },
    ],
  },

  {
    id: "section-SSR",
    type: "SSR",
    title: "Server-Side Rendering",
    icon: "server",
    description:
      "With SSR, the server generates the full HTML for each request. The browser receives a fully rendered page, which is immediately visible to users. JavaScript then hydrates the page to make it interactive.",

    bestFor: ["Blogs", "E-commerce", "Marketing Sites"],

    frameworks: [
      { name: "Next.js", className: "nextjs", icon: "nextjs" },
      { name: "Nuxt.js", className: "nuxtjs", icon: "nuxtjs" },
      { name: "SvelteKit", className: "sveltekit", icon: "sveltekit" },
    ],

    evaluation: [
      {
        name: "advantages",
        icon: "check",
        points: [
          "Faster initial page load and First Contentful Paint",
          "Better SEO out of the box",
          "Works without JavaScript enabled",
          "Better performance on slower devices",
        ],
      },
      {
        name: "disadvantages",
        icon: "x",
        points: [
          "Higher server load and complexity",
          "Slower page transitions between routes",
          "More infrastructure costs",
          "Time to Interactive can be longer",
        ],
      },
    ],
  },
];

function createApproach(data) {
  const description = create("div", {
    className: `description ${data.type}`,
    children: [
      create("h2", { textContent: data.title }),
      create("p", { textContent: data.description }),
      create("span", { className: "title-span", textContent: "Best for:" }),
      create("ul", {
        className: `best-for-list ${data.type}`,
        children: data.bestFor.map((el) => create("li", { textContent: el })),
      }),
      create("span", {
        className: "title-span",
        textContent: "Popular Frameworks:",
      }),
      create("ul", {
        className: `frameworks-list ${data.type}`,
        children: data.frameworks.map((el) =>
          create("li", {
            children: [
              create("div", {
                className: `framework ${el.className}`,
                children: [
                  createIcon(el.icon),
                  create("span", { textContent: el.name }),
                ],
              }),
            ],
          }),
        ),
      }),
    ],
  });

  const evaluation = create("div", {
    className: `evaluation ${data.type}`,
    children: data.evaluation.map((item) =>
      create("div", {
        className: `${item.name} ${data.type}`,
        children: [
          create("div", {
            className: `${item.name}-heading ${data.type}`,
            children: [
              createIcon(item.icon),
              create("span", { textContent: capitalize(item.name) }),
            ],
          }),
          create("ul", {
            className: `${item.name}-list ${data.type}`,
            children: item.points.map((point) =>
              create("li", {
                children: [
                  create("div", {
                    className: `${item.name}-li ${data.type}`,
                    children: [
                      createIcon(item.icon),
                      create("span", { textContent: point }),
                    ],
                  }),
                ],
              }),
            ),
          }),
        ],
      }),
    ),
  });

  const approach = create("section", {
    id: data.id,
    children: [
      createSectionBadge(data.type),
      create("div", {
        className: `section-content approach ${data.type}`,
        children: [description, evaluation],
      }),
    ],
  });

  return approach;
}

function createApproaches() {
  const fragment = document.createDocumentFragment();
  sectionsData.forEach((section) =>
    fragment.appendChild(createApproach(section)),
  );
  return fragment;
}

export { createApproaches };
