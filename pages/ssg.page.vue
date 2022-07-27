<script lang="ts">
export const title = "SSG";
export const doNotPrerender = false;
</script>

<script setup lang="ts">
import InlineCode from "/components/InlineCode.vue";
</script>

<template>
  <p>This page is rendered only once at <b>build time</b> during a process called <a href="https://vite-plugin-ssr.com/pre-rendering">pre-rendering</a>, also referred to as <a href="https://vite-plugin-ssr.com/render-modes#ssg-aka-pre-rendering"><b>static-site generation</b> (SSG)</a>.</p>
  <p>It is enabled in <InlineCode>vite-plugin-ssr</InlineCode> for <b>all pages</b> by adding <InlineCode>prerender: true</InlineCode> to your plugin config in <InlineCode>vite.config.[js|ts]</InlineCode>, and then can be disabled on a per-page basis by exporting <InlineCode>doNotPrerender</InlineCode> from a page.</p>
</template>
