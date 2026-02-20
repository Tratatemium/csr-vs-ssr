# Web Rendering Guide — Study Project for Hyper Island

This project demonstrates and compares two major web rendering approaches: **Client-Side Rendering (CSR)** and **Server-Side Rendering (SSR)**. It is a learning project for Hyper Island.

## Project Structure
- [`index.html`](index.html): Landing page with navigation.
- [`csr.html`](csr.html): Demonstrates client-side rendering using JavaScript modules.
- [`ssr.html`](ssr.html): Simulates server-side rendering with static HTML.
- [`src/script/`](src/script/): JavaScript modules for dynamic content and UI sections.
- [`src/styles/`](src/styles/): CSS files for layout and styling.
- [`analysis.md`](analysis.md): In-depth comparison of CSR vs SSR (performance, SEO, UX).

## How It Works
- **CSR**: Loads minimal HTML, then builds the page dynamically in the browser using JavaScript.
- **SSR**: Loads a fully rendered HTML page directly from the server (simulated here as a static file).

## Key Learnings
- **Performance**: SSR provides faster initial content, while CSR may feel slower due to JS execution.
- **SEO**: SSR is more search-engine friendly; CSR can be problematic for some crawlers.
- **User Experience**: SSR shows content immediately; CSR may show a blank or loading screen first.

## Author
Vladislav Zhuravskii — [GitHub](https://github.com/Tratatemium)

---
For more details, see [`analysis.md`](analysis.md).
