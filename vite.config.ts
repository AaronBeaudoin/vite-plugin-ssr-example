import { defineConfig } from "vite";
import VitePluginVue from "@vitejs/plugin-vue";
import VitePluginSSR from "vite-plugin-ssr/plugin";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  plugins: [
    VitePluginVue(),
    VitePluginSSR({
      prerender: true,
      includeAssetsImportedByServer: true
    })
  ]
});
