# `vite-plugin-ssr` Example

A full example of [`vite-plugin-ssr`](https://vite-plugin-ssr.com) showcasing each of it's available rendering modes with [Vue](https://vuejs.org).

## Getting Started

1. Install project dependencies with `npm install`.
2. Preview the build output with `npm run preview`.
3. Go to http://localhost:3000 in your browser.
4. Explore! 🔍


## Core Dependencies

- **[`vite-plugin-ssr`](https://vite-plugin-ssr.com)**  
  The reason that this repository exists. A flexible, **framework agnostic** `vite` plugin/framework for server-side rendering (SSR), but capable of even more, such as pre-rendering (SSG), server or client-only modes (SPA, HTML), and client routing. It's like a lightweight version of Next/Nuxt.js that gives you more **architectural control**. Thanks [@brillout](https://github.com/brillout) for your hard work! ❤️

- **[`vite`](https://vitejs.dev)**  
  The world's _best_ (in my current un-humble opinion) **development server** and **build tool**, by Evan You. It's basically [Webpack](https://webpack.js.org), except you _don't_ have to spend hours writing the world's longest and ugliest `webpack.config.js`, and HMR is [actually hot](https://vitejs.dev/guide/why.html#the-problems).

- **[`vue`](https://vuejs.org)**  
  `vite-plugin-ssr` might be framework agnostic, but I'm not. Vue is the best **front-end web framework** (for now; looking at you [Svelte](https://svelte.dev)) because it is **cleaner** and **easier to work with** than React, doesn't use JSX (unless for some reason you actually want to), and still has a solid community ecosystem going. Also, Evan You wrote this one too. Maybe he's one of the fabled [10x developers](https://www.google.com/search?q=10x+developer)?

- **[`typescript`](https://www.typescriptlang.org)**  
  Makes JavaScript not suck. I guarantee you, if you're not using TypeScript, your code code has [more bugs](https://earlbarr.com/publications/typestudy.pdf) than mine. Also, TypeScript ranks [very](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted) [highly](https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) among developer satisfaction, so it's definitely doing _something_ right. It's simply a **superset** of JavaScript that **adds syntax for types**.


### Other Dependencies

Package Name | Description
--- | ---
**[`@vitejs/plugin-vue`](https://www.npmjs.com/package/@vitejs/plugin-vue)** | Adds `vue` support to `vite`.
**[`express`](https://www.npmjs.com/package/express)** + **[`sirv`](https://www.npmjs.com/package/sirv)** | The server setup used to preview build output.
**[`ts-node`](https://www.npmjs.com/package/ts-node)** | Run `.ts` files directly from the command line.
**`@types/node`**, **`@types/express`** | TypeScript type definitions.
