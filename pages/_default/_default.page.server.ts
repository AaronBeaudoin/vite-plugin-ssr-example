import { PageContextBuiltIn } from "vite-plugin-ssr";
import { PageContext } from "./types";
import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { createPageApp } from "./app";
import "/assets/styles/index.css";

export const passToClient = [
  "urlParsed",
  "pageProps"
];

export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const page = createPageApp(pageContext, false);
  const pageHtml = pageContext.Page ? await renderToString(page) : "";
  const title = pageContext.exports.title ? pageContext.exports.title + " — " : "";
  const faviconUrl = import.meta.env.BASE_URL + "logo.svg";

  return escapeInject`
    <!DOCTYPE html>
    <html lang="en">
      <head>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

        <title>${title}vite-plugin-ssr</title>
        <link rel="icon" href="${faviconUrl}">

      </head>
      <body>

        <!-- This is where the page HTML is injected into the document. -->
        <div id="page">${dangerouslySkipEscape(pageHtml)}</div>

      </body>
    </html>
  `;
}
