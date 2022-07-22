<script lang="ts">
export const doNotPrerender = true;
</script>

<script setup lang="ts">
import CodeInline from "/components/CodeInline.vue";
</script>

<template>
  <p>This page is rendered on the <b>server-side</b> only (the client-side does not hydrate and re-render the page). This technique is effectively just using your UI framework (React/Vue/Svelte/Other) as a templating engine on steriods, and by default results in your page shipping <b>zero</b> JavaScript. <CodeInline>vite-plugin-ssr</CodeInline> refers to this technique as <a href="https://vite-plugin-ssr.com/render-modes#html-only"><b>HTML-only</b></a> rendering.</p>
  <p>It is enabled in <CodeInline>vite-plugin-ssr</CodeInline> by changing the filename for your page to <CodeInline>[name].page.server.xyz</CodeInline>, which causes <CodeInline>pageContext.Page</CodeInline> to only be defined on the server-side. You can then optionally use a <CodeInline>[name].page.client.[js|ts]</CodeInline> file to add bits of JavaScript to your page as necessary.</p>
</template>
