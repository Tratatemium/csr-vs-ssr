import { create } from "../helpers.js";
import { createIcon } from "../components/svg.js";

function createFooter() {
  const links = [
    ["#home", "Home"],
    ["#section-CSR", "Client-Side Rendering"],
    ["#section-SSR", "Server-Side Rendering"],
    ["#comparison", "Comparison"],
    ["#hybrid", "Hybrid Approach"],
  ];

  const nav = create("nav", {
    className: "footer-links",
    children: links.map(([href, text]) =>
      create("a", { href, textContent: text }),
    ),
  });

  const footerCopyright = create("div", {
    className: "footer-copyright",
    children: [
      create("span", {
        innerHTML:
          "&copy; 2026 Web Rendering Guide. Built for learning purposes.",
      }),
      create("div", {
        className: "footer-credentials",
        children: [
          create("span", {
            textContent: "Created by Vladislav Zhuravskii | ",
          }),
          create("a", {
            href: "https://github.com/Tratatemium",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              createIcon("gitHub"),
              create("span", {
                textContent: "GitHub↗",
              }),
            ],
          }),
        ],
      }),
    ],
  });

  const footer = create("footer", {
    children: [
      create("div", {
        className: "footer-content",
        children: [nav, footerCopyright],
      }),
    ],
  });

  return footer;
}

export { createFooter };
