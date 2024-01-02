# React.js vs Next.js

## Rendering:

### _React.js:_
- Typically renders on the client side, where the browser processes JavaScript to render the UI.

### _Next.js:_
- Supports server-side rendering (SSR) and static site generation (SSG).
- Allows pre-rendering pages on the server, improving performance and SEO.

SEO is crucial for optimizing a website's visibility and ranking in search engine results.

## Routing:

### React.js:
- Does not provide a built-in routing solution.
- Developers often use third-party libraries like React Router for client-side routing.

### Next.js:
- Comes with a built-in routing system.

- Handling page navigation is made easier by creating pages in the "pages" directory.

- Next.js uses a file-based routing system, eliminating the need for external packages or complex configurations.

---

From _*NextJs version 9*_ - new feature API Routes(Enabling the creation of serverless functions to handle API requests) will be introduced , without the need of traditional server . It allows you to build and deploy API's 
- without managing server infastructure

**Note:** Ensure that your Next.js project follows the predefined file structure, with pages in the "pages" directory for optimal routing.
