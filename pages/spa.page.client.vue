<script lang="ts">
export const doNotPrerender = true;
</script>

<script setup lang="ts">
import CodeInline from "/components/CodeInline.vue";
</script>

<template>
  <p>This page is rendered on the <b>client-side</b> only (the server-side only renders an HTML skeleton). This technique is commonly referred to as <b>client-side rendering</b> (CSR), but <CodeInline>vite-plugin-ssr</CodeInline> refers to it as <a href="https://vite-plugin-ssr.com/render-modes#spa"><b>single page app</b> (SPA)</a> rendering.</p>
  <p>It is enabled in <CodeInline>vite-plugin-ssr</CodeInline> by changing the filename for your page to <CodeInline>[name].page.client.xyz</CodeInline>, which causes <CodeInline>pageContext.Page</CodeInline> to only be defined on the client-side. (You must handle this properly in your <CodeInline>_default</CodeInline> page files.)</p>
</template>
