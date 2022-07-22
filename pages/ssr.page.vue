<script lang="ts">
export const doNotPrerender = true;
</script>

<script lang="ts" setup>
import CodeInline from "/components/CodeInline.vue";
</script>

<template>
  <p>This page is rendered on the <b>server-side</b>, then <a href="https://vite-plugin-ssr.com/hydration">hydrated</a> and re-rendered on the client-side. This technique is the default behavior for <CodeInline>vite-plugin-ssr</CodeInline>, commonly referred to as <a href="https://vite-plugin-ssr.com/render-modes#ssr"><b>server-side rendering</b> (SSR)</a>.</p>
</template>
