import { create } from "../helpers.js";
import { createIcon } from "../components/svg.js";

function createHero() {
  const badge = create("div", {
    className: "guide-badge",
    children: [
      createIcon("globe"),
      create("span", { textContent: "Web rendering guide" }),
    ],
  });

  const logos = create("div", {
    className: "logos-container",
    children: [
      create("div", {
        className: "logos-item",
        children: [
          create("div", {
            className: "item-icon browser",
            children: [createIcon("browser")],
          }),
          create("span", { textContent: "Browser" }),
        ],
      }),
      createIcon("arrows"),
      create("div", {
        className: "logos-item",
        children: [
          create("div", {
            className: "item-icon server",
            children: [createIcon("server")],
          }),
          create("span", { textContent: "Server" }),
        ],
      }),
    ],
  });

  const hero = create("section", {
    className: "hero",
    id: "home",
    children: [
      create("div", {
        className: "hero-content",
        children: [
          badge,
          create("h1", {
            innerHTML: "Client-Side vs<br>Server-Side Rendering",
          }),
          create("p", {
            textContent:
              "Understanding how web pages are rendered and which approach is right for your project.",
          }),
          create("div", {
            className: "render-info",
            children: [
              create("span", {
                className: "render-method CSR",
                textContent: "This page is rendered using CSR",
              }),
              create("a", {
                className: "render-link SSR",
                href: "./ssr.html",
                textContent: "Explore SSR",
              }),
            ],
          }),
          logos,
        ],
      }),
    ],
  });

  return hero;
}

export { createHero };
