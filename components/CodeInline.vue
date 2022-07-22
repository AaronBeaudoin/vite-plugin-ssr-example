<template>
  <span class="code-inline">
    <slot></slot>
  </span>
</template>

<style scoped>
.code-inline {
  padding: 0 0.35em 0.1em 0.35em;
  font-family: "IBM Plex Mono";
  font-size: 0.85em;
  border-radius: 0.25em;
  background-color: hsl(0, 0%, 95%);
}
</style>
