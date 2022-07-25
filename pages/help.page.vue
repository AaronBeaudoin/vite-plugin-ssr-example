<script lang="ts">
export const title = "Help";
</script>

<script setup lang="ts">
import InlineCode from "/components/InlineCode.vue";
import HelpStep from "/components/HelpStep.vue";
</script>

<template>
  <p style="color: hsl(0, 0%, 50%);">There are a lot of approaches to rendering pages for sites or web apps. The best mode for you will depend entirely on your project. That being said, here are some <i>general recommendations</i> if you are just starting out with your project.</p>
  <p style="color: hsl(0, 0%, 50%);"><i>This page is most useful after you are familiar with the modes above.</i></p>
  <hr>
  <p><HelpStep s="1" hue="100"/> For the best initial loading speed, SEO, and easier deployment, use <b>SSG</b> (pre-rendering) <i>whenever you can</i>. It makes deployment easier because rendering all pages to static files means a site can be deployed to <i>any</i> platform. However, this also means that any updates in your data backend will require a full redeploy in order to be reflected on your pages, so only use this mode for <i>all pages</i> if none of them need to change often.</p>
  <p><HelpStep s="2" hue="0"/> If initial loading speed and SEO are <i>less important</i> for your page, and the page will have <i>a lot</i> of interactivity (perhaps a web app or dashboard that won't show up in search engine results), use <b>SPA</b> mode.</p>
  <p><HelpStep s="3" hue="280"/> If initial loading speed and SEO are <i>very important</i> for your page, and the page will have little to no interactivity (perhaps a marketing page that will show up in search engine results and/or be directed to by advertising), use <b>HTML-only</b> mode, and sprinkle in a little vanilla JavaScript precisely where you need it.</p>
  <p><HelpStep s="4" hue="210"/> If initial <i>perceived</i> loading speed and SEO are important for your page, but the page will also need to have high interactivity (perhaps an ecommerce page that will show up in search engine results but also needs to provide user-specific pricing and cart data), use <b>SSR</b> mode. SSR is a nice compromise between the slower initial loading speed of an SPA page and the strong SEO of an HTML-only page, while still accommodating high interactivity.</p>
  <p><HelpStep s="5" hue="45"/> For pages that are not HTML-only, you also have the option to additionally use client-side navigation, or <a href="https://vite-plugin-ssr.com/server-routing-vs-client-routing"><b>client routing</b></a>. In general, you probably want to avoid it unless you <i>know</i> the benefits will outweight the added complexity in your project. (One important area where it can make working on a project more complex is when adding analytics and conversion tracking.)</p>
  <hr>
  <p><b>SSR mode without SSG or client routing is the default.</b> This is not because that combination is necessarily <i>always</i> the best choice, but because it is the most <i>flexible</i> choice, and perfect for when you don't know yet which mode will work best for your page. And, after all, the plugin is called <InlineCode style="white-space: nowrap;">vite-plugin-<b style="color: hsl(50, 100%, 40%)">ssr</b></InlineCode>.&nbsp;😉</p>
  <p><i>The SPA, HTML-only, and SSR modes are mutually exclusive with each other. However, SSG mode is not mutually exclusive with any other mode and can be used in conjunction with any of them.</i></p>
</template>

