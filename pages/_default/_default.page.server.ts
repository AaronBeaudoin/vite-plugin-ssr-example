import { PageContext } from "./types";
import { escapeInject, stampPipe, PageContextBuiltIn } from "vite-plugin-ssr";
import { createPageApp } from "./app";
import "/assets/styles/index.css";
import { pipeToWebWritable, pipeToNodeWritable } from '@vue/server-renderer'
import type { Writable } from 'stream'


// By default we do not want to pre-render our pages.
// This makes pre-rendering opt-in by adding `doNotPrerender = false` to pages.
export const doNotPrerender = true;

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  "urlParsed",
  "pageProps",
  "is404"
];


export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const title = pageContext.exports.title ? pageContext.exports.title + " — " : "";
  const faviconUrl = import.meta.env.BASE_URL + "logo.svg";
  const isSPA = false;
  const app = createPageApp(pageContext, isSPA)

  // Streaming is optional: we can use renderToString() instead.
  const pipe = isWorker()
    ? (writable: WritableStream) => {
        pipeToWebWritable(app, {}, writable)
      }
    : // While developing, we use Vite's development sever instead of a Cloudflare worker. Instead of `pipeToNodeWritable()`, we could as well use `renderToString()`.
      (writable: Writable) => {
        pipeToNodeWritable(app, {}, writable)
      }
  stampPipe(pipe, isWorker() ? 'web-stream' : 'node-stream')

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
    <head>

      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

      <title>${title}vite-plugin-ssr</title>
      <link rel="icon" href="${faviconUrl}">

    </head>
      <body>
        <div id="app">${pipe}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true
    }
  }
}

// https://github.com/cloudflare/wrangler2/issues/1481
// https://community.cloudflare.com/t/how-to-detect-the-cloudflare-worker-runtime/293715
function isWorker() {
  return (
    // @ts-ignore
    typeof WebSocketPair !== 'undefined' || typeof caches !== 'undefined'
  )
}

// export async function render2(pageContext: PageContextBuiltIn & PageContext) {
//   const page = createPageApp(pageContext, false);
//   const pageHtml = pageContext.Page ? await renderToString(page) : "";
//   const title = pageContext.exports.title ? pageContext.exports.title + " — " : "";
//   const faviconUrl = import.meta.env.BASE_URL + "logo.svg";

//   return escapeInject`
//     <!DOCTYPE html>
//     <html lang="en">

//       <body>

//         <!-- This is where the page HTML is injected into the document. -->
//         <div id="page">${dangerouslySkipEscape(pageHtml)}</div>

//       </body>
//     </html>
//   `;
// }

