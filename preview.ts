import express from "express";
import sirv from "sirv";
import chalk from "chalk";
import { resolveConfig } from "vite";
import { renderPage } from "vite-plugin-ssr";

const app = express();
const assets = sirv(`${__dirname}/dist/client`);

app.use((request, response, next) => {
  assets(request, response, next);
  if (response.locals.vps) return;

  const message = `${response.statusCode} ${request.originalUrl}`;
  console.log(`${chalk.magenta('static')} ${message}`);
});

if (process.argv[2] === "render") {
  app.get("*", async (request, response) => {
    response.locals.vps = true;
  
    const pageContext = await renderPage({ url: request.originalUrl });
    if (!pageContext.httpResponse) return response.sendStatus(200);
    
    const message = `${pageContext.httpResponse.statusCode} ${request.originalUrl}`;
    console.log(`${chalk.blue('render')} ${message}`);
    
    response.statusCode = pageContext.httpResponse.statusCode;
    response.contentType(pageContext.httpResponse.contentType);
    response.send(pageContext.httpResponse.body);
  });
}

resolveConfig({}, "serve").then(viteConfig => {
  if (process.argv[2] === "static") {
    app.get("*", async (_, response) => {
      response.statusCode = 404;
      response.contentType("text/html");
      response.sendFile(`${__dirname}/${viteConfig.build.outDir}/client/404.html`);
    });
  }

  const host = typeof viteConfig.server.host === "string" ? viteConfig.server.host : "0.0.0.0";
  const port = viteConfig.server.port || 3000;

  app.listen(port, host);
  console.log(`${chalk.green('server')} http://${host}:${port}...`);
  console.log(`${chalk.green('server')} mode=${process.argv[2]}`);
});
