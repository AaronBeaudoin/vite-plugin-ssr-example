<script setup lang="ts">
import CodeInline from "/components/CodeInline.vue";
</script>

<template>
  <p>This page is rendered only once at <b>build time</b> during a process called <a href="https://vite-plugin-ssr.com/pre-rendering">pre-rendering</a>, also referred to as <a href="https://vite-plugin-ssr.com/render-modes#ssg-aka-pre-rendering"><b>static-site generation</b> (SSG)</a>.</p>
  <p>It is enabled in <CodeInline>vite-plugin-ssr</CodeInline> for <b>all pages</b> by adding <CodeInline>prerender: true</CodeInline> to your plugin config in <CodeInline>vite.config.[js|ts]</CodeInline>, and then can be disabled on a per-page basis by exporting <CodeInline>doNotPrerender</CodeInline> from a page.</p>
</template>
