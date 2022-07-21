import { defineConfig } from "vite";
import VitePluginVue from "@vitejs/plugin-vue";
import VitePluginSSR from "vite-plugin-ssr/plugin";

export default defineConfig({
  server: {
    // Special configuration to get HMR working on Gitpod.
    hmr: !process.env.GITPOD_WORKSPACE_URL ? true : {
      host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
      protocol: "wss",
      clientPort: 443
    }
  },
  plugins: [
    VitePluginVue(),
    VitePluginSSR({
      prerender: {
        partial: true
      }
    })
  ]
});