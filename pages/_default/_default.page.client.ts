import { PageContextBuiltIn } from "vite-plugin-ssr";
import { PageContext } from "./types";
import { createPageApp } from "./app";

export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const page = createPageApp(pageContext, document.getElementById("page")?.innerHTML === "");
  page.mount("#page");
}
