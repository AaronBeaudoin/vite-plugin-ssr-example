<script setup lang="ts">
import { inject } from "vue";
import Link from './Link.vue';

import { PageContextBuiltIn } from "vite-plugin-ssr";
const pageContext = inject("pageContext") as PageContextBuiltIn;
const publicCheckUrl = import.meta.env.BASE_URL + "check.svg";

const modeLinks = [
  {
    url: "/ssr",
    name: "SSR",
  },
  {
    url: "/ssg",
    name: "SSG"
  },
  {
    url: "/spa",
    name: "SPA"
  },
  {
    url: "/html",
    name: "HTML"
  }
];
</script>

<template>
  <div class="panel">
    <a href="/ssr"><h1>vite-plugin-ssr</h1></a>
    <div class="links">
      <span style="font-weight: 400;">Modes:</span>
      <Link v-for="link in modeLinks" :href="link.url">{{ link.name }}</Link>
    </div>
    <div class="content">
      <slot></slot>
      <p v-if="modeLinks.map(_ => _.url).includes(pageContext.urlParsed.pathname)"
      class="muted"><a href="/help">Which mode should I use? Is this mode the best for my project?</a></p>
    </div>
    <div v-if="modeLinks.map(_ => _.url).includes(pageContext.urlParsed.pathname)"
    class="status">
      <div>
        <div>Assets</div>
        <img src="/assets/media/check.svg">
      </div>
      <div>
        <div>Public</div>
        <img :src="publicCheckUrl">
      </div>
    </div>
  </div>
</template>

<style>
.panel {
  width: 100%;
  max-width: 700px;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: white;
}

h1 {
  font-family: "IBM Plex Mono";
  font-size: 2em;
  text-align: center;
}

.links {
  margin-top: 32px;
  margin-left: -32px;
  margin-right: -32px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top: 1px solid hsl(0, 0%, 95%);
  border-bottom: 1px solid hsl(0, 0%, 95%);
  text-align: center;
}

.links * {
  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  color: hsl(0, 0%, 50%);
  font-weight: bold;
  font-size: 0.9em;
}

.links a:hover,
.links a.active {
  color: hsl(0, 0%, 20%);
}

.links a.active::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
}

.content {
  margin-top: 32px;
}

.content *:not(:first-child) {
  margin-top: 16px;
}

.status {
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
  margin-left: -32px;
  margin-right: -32px;
  margin-bottom: -32px;
  padding: 16px 8px;
  border-top: 1px solid hsl(0, 0%, 95%);
  font-weight: bold;
  font-size: 0.8em;
}

.status > * {
  display: flex;
  align-items: center;
  margin: 0 8px;
}

.status > * img {
  display: block;
  width: 16px;
  margin-left: 4px;
  filter: invert(1) brightness(0.5) sepia(1) hue-rotate(90deg);
}

@media screen and (max-width: 425px) {
  .panel {
    padding: 24px;
    border-radius: 0;
  }

  h1 {
    font-size: 1.5em;
  }

  .links, .status {
    margin-left: -24px;
    margin-right: -24px;
  }

  .links, .content {
    margin-top: 24px;
  }

  .status {
    margin-bottom: -24px;
  }
}
</style>
