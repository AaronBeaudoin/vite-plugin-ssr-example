<script lang="ts" setup>
import { ref, onMounted } from "vue";

const text = ref("————— ——— ————— —— — ————— ——— ————");
onMounted(() => text.value = "This text is dynamically added on the client side via Javascript.");
</script>

<template>
  <p>This page is rendered on the server-side and then hydrated and re-rendered on the client-side. This technique is commonly referred to as <b>server-side rendering</b> (SSR).</p>
  <p class="client" ref="paragraph">{{ text || "—————" }}</p>
</template>

<style scoped>
p.client {
  padding-top: 16px;
  color: hsl(100, 50%, 35%);
}
</style>