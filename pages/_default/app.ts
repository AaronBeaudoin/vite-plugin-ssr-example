import { PageContextBuiltIn } from "vite-plugin-ssr";
import { PageContext } from "./types";
import { createSSRApp, createApp, h } from "vue";
import LayoutComponent from "/components/Layout.vue";

export function createPageApp(pageContext: PageContextBuiltIn & PageContext, clientOnly: boolean) {
  const { Page, pageProps } = pageContext;
  const createAppFunc = clientOnly ? createApp : createSSRApp;

  return createAppFunc({
    render() {
      const renderLayoutSlot = () => h(Page, pageProps || {});
      return h(LayoutComponent, pageProps || {}, { default: renderLayoutSlot });
    }
  });
}