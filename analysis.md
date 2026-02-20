# CSR vs SSR Analysis

This project features two almost identical pages:

* [csr.html](csr.html) - The webpage is rendered in the client's browser through JavaScript (client-side rendering).
* [ssr.html](ssr.html) - A static HTML file simulating server-side rendering.

## Performance

| Aspect | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) |
|--------|----------------------------|-----------------------------|
| Time to first visible content |  3.22s FCP, 5.17s LCP  |  3.66s FCP, 3.66s LCP  |
| Perceived loading speed | Can feel slower (blank screen initially) | Feels faster (content appears almost immediately) |
| JavaScript execution impact | Heavy — rendering depends on JS | Lighter initial impact — HTML is already rendered |

I measured performance in Chrome using **6x CPU slowdown** and **slow 4G** network settings. Even though the time to first visible content (FCP) is slightly faster for CSR, it is likely not meaningful content, but rather a loading spinner. The time to load meaningful content (LCP) is significantly faster for a static page. CSR relies heavily on JavaScript, so on slower devices, weaker networks, and with heavier pages, the performance difference becomes more significant and negatively impacts the user experience.

## SEO

| Aspect | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) |
|--------|----------------------------|-----------------------------|
| Initial HTML content | Minimal — often an empty root div | Full content included in the initial HTML |
| Search engine interpretation | May require JS execution by the crawler | Easy to crawl — content is immediately available |
| Metadata visibility | Often injected via JS after the initial load | Present in the initial HTML response |

Googlebot can execute JavaScript when it encounters minimal content in an HTML file. However, this can be time-consuming, and for JavaScript-heavy applications, something can break and prevent content from rendering fully. As a result, Google might index an incomplete page. Other search engines like Bing, Yahoo, and DuckDuckGo have very limited JavaScript execution capabilities. All things considered, SSR pages are generally much better for SEO.

However, it's worth noting that SSR pages often use caching strategies where a pre-rendered page is served to multiple users to reduce server load. This can pose a challenge for analytics, as it can be harder to monitor individual user sessions accurately.

## User Experience

| Aspect | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) |
|--------|----------------------------|-----------------------------|
| Initial render behavior | Blank screen until JS loads and executes | Immediate visible content |
| JavaScript dependency | Fully dependent on JS for content rendering | Works even if JS fails (basic content remains visible) |
| Reliability | Breaks if JS fails or is blocked by the user | More resilient if JS fails or is slow to load |

From a user experience perspective, SSR typically offers a superior initial impression. Users see content almost immediately, which reduces the perceived loading time and the frustration of a blank screen. SSR is also more resilient; if JavaScript fails to load or execute, the core content remains visible. A CSR page, in the same situation, would likely remain blank, leading to a poor user experience.


