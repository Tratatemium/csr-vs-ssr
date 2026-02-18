import { $, create } from "../helpers.js";
import { createSectionBadge } from "../components/components.js";
import { createIcon } from "../components/svg.js";

function createFooter() {
  const nav = create("nav", {
    className: "footer-links",
    children: [
      create("a", {
        href: "#home",
        textContent: "Home",
      }),
      create("a", {
        href: "#section-CSR",
        textContent: "Client-Side Rendering",
      }),
      create("a", {
        href: "#section-SSR",
        textContent: "Server-Side Rendering",
      }),
      create("a", {
        href: "#comparison",
        textContent: "Comparison",
      }),
      create("a", {
        href: "#hybrid",
        textContent: "Hybrid Approach",
      }),
    ],
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
