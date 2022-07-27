# `vite-plugin-ssr` Example

A full example of [`vite-plugin-ssr`](https://vite-plugin-ssr.com) showcasing each of it's available rendering modes with [Vue](https://vuejs.org).

## Getting Started

1. Install project dependencies with `npm install`.
2. Preview a serverless deployment with `npm run preview:render`.
3. Preview a full static deployment with `npm run preview:static`.
4. Go to http://localhost:3000 in your browser.
5. Explore! 🔍


## Core Dependencies

- **[`vite-plugin-ssr`](https://vite-plugin-ssr.com)**  
  The reason that this repository exists. A flexible, **framework agnostic** `vite` plugin/framework for server-side rendering (SSR), but capable of even more, such as pre-rendering (SSG), server or client-only modes (SPA, HTML), and client routing. It's like a lightweight version of Next/Nuxt.js that gives you more **architectural control**. Thanks [@brillout](https://github.com/brillout) for your hard work! ❤️

- **[`vite`](https://vitejs.dev)**  
  The world's _best_ (in my current humble opinion) **development server** and **build tool**, by Evan You. It's kind of like [Webpack](https://webpack.js.org) with `webpack-dev-server`, except you _don't_ have to spend hours writing the world's longest and ugliest `webpack.config.js`, and HMR is [actually hot](https://vitejs.dev/guide/why.html#the-problems).

- **[`vue`](https://vuejs.org)**  
  `vite-plugin-ssr` might be framework agnostic, but I'm not. My preference for a **front-end web framework** (unless [Svelte](https://svelte.dev) eventually steals my heart) is Vue because I find it **cleaner** and **easier to work with** than React, doesn't use JSX, and has a solid community ecosystem. Also, it's written by Even You, who later also created Vite. Maybe he's a mythical [10x developer](https://www.google.com/search?q=10x+developer)?

- **[`typescript`](https://www.typescriptlang.org)**  
  Makes JavaScript not suck. I guarantee you, if you're not using TypeScript, your code has [more bugs](https://earlbarr.com/publications/typestudy.pdf) than mine. Also, TypeScript ranks [very](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted) [highly](https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) among developer satisfaction, so it's definitely doing _something_ right. It's simply a **superset** of JavaScript that **adds syntax for types**.


### Other Dependencies

Package Name | Description
--- | ---
**[`@vitejs/plugin-vue`](https://www.npmjs.com/package/@vitejs/plugin-vue)** | Adds `vue` support to `vite`.
**[`express`](https://www.npmjs.com/package/express)** + **[`sirv`](https://www.npmjs.com/package/sirv)** | The server setup used to preview build output.
**[`ts-node`](https://www.npmjs.com/package/ts-node)** | Run `.ts` files directly from the command line.
**[`chalk`](https://www.npmjs.com/package/chalk)** | Used to add color to preview server logs.
**`@types/node`**, **`@types/express`** | TypeScript type definitions.
