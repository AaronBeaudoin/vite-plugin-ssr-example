import express from "express";
import sirv from "sirv";
import { resolveConfig } from "vite";
import { renderPage } from "vite-plugin-ssr";

const app = express();
app.use(sirv(`${__dirname}/dist/client`));

app.get("*", async (request, response) => {
  const pageContext = await renderPage({ url: request.originalUrl });
  if (!pageContext.httpResponse) return response.sendStatus(200);
  
  console.log("[vite-plugin-ssr]", pageContext.httpResponse.statusCode, request.url);
  response.statusCode = pageContext.httpResponse.statusCode;
  response.contentType(pageContext.httpResponse.contentType);
  response.send(pageContext.httpResponse.body);
});

resolveConfig({}, "serve").then(viteConfig => {
  const host = typeof viteConfig.server.host === "string" ? viteConfig.server.host : "0.0.0.0";
  const port = viteConfig.server.port || 3000;

  app.listen(port, host);
  console.log(`Express: http://${host}:${port}...`);
});
