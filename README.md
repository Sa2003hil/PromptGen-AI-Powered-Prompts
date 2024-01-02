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


## App Folder

**_Page.js_**

 - the typlical localhost:3000/ ---> this is the '/' of the page (By default the page maded in app folder are react server side components to make it client side use ---> "use client") at the top

 - To use all *client side rendering* ( _hooks or state management_ and all that stuff )
use (_"use client"_)


#### When to use Server side components and Client side components ?

It all depends on the use case 

---

### Routing (How to handle routes) ?

In the app folder create a folder called pages. Now there are multiple routing options available in nextjs

- File based routing (default)
- Dynamic routing
- Nested routing

#### File based routing
In the pages folder create a file called index.js (this is the default route) and create a file called about.js (localhost:3000/about) and so on

-App
|-pages 
| |-about.js



---

 ## Data Fetching

 1. Server side rendering (SSR)
 2. Static site generation (SSG)
 3. Incremental static regeneration (ISR)


### Server side rendering (SSR)
Server side rendering is the process of fetching data on the server and rendering it to the browser. This is the default behavior of Next.js. 

### Static site generation (SSG)
Static site generation is the process of fetching data at build time and rendering it to the browser. This is useful for pages that do not require frequent updates.








 




---
**Note:** Ensure that your Next.js project follows the predefined file structure, with pages in the "pages" directory for optimal routing.
