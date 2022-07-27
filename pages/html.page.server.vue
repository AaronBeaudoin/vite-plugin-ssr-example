<script lang="ts">
export const title = "HTML";
</script>

<script setup lang="ts">
import InlineCode from "/components/InlineCode.vue";
</script>

<template>
  <p>This page is rendered on the <b>server-side only</b> (the client-side does not hydrate and re-render the page). This technique is essentially using your framework (React, Vue, Svelte, Other) as a templating engine on steriods, and by default it results in your page shipping <b>zero</b> JavaScript to the client-side. <InlineCode>vite-plugin-ssr</InlineCode> refers to this technique as <a href="https://vite-plugin-ssr.com/render-modes#html-only"><b>HTML-only</b></a> rendering.</p>
  <p>It is enabled in <InlineCode>vite-plugin-ssr</InlineCode> by changing the filename for your page to <InlineCode>[name].page.server.xyz</InlineCode>, which causes <InlineCode>pageContext.Page</InlineCode> to only be defined on the server-side. You can then optionally add a <InlineCode>[name].page.client.[js|ts]</InlineCode> file to add specific bits of JavaScript to your page as necessary.</p>
</template>
