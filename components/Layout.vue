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
    <a href="/" class="logo">
      <img class="logo" src="/logo.svg">
    </a>
    <a href="/">
      <h1>vite-plugin-ssr</h1>
    </a>
    <div class="links">
      <span style="font-weight: normal;">Modes:</span>
      <Link v-for="link in modeLinks" :href="link.url">{{ link.name }}</Link>
    </div>
    <div class="content">
      <slot></slot>
      <p v-if="pageContext.urlParsed.pathname !== `/help`"><a href="/help">{{ pageContext.urlParsed.pathname !== `/` ? `Should I use this mode for my project?` : `Which mode should I use?` }}</a></p>
    </div>
    <div v-if="pageContext.urlParsed.pathname !== `/help`" class="status">
      <a href="https://vite-plugin-ssr.com">
        <div>Docs</div>
        <img src="/assets/media/link.svg">
      </a>
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

.logo {
  display: grid;
  place-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
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

.content hr:not(:first-child) {
  height: 1px;
  margin: 32px 0;
  border: none;
  background-color: hsl(0, 0%, 50%);
}

.status {
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
  margin-left: -32px;
  margin-right: -32px;
  margin-bottom: -32px;
  padding: 16px 24px;
  border-top: 1px solid hsl(0, 0%, 95%);
  font-weight: bold;
  font-size: 0.8em;
}


.status > * {
  display: flex;
  align-items: center;
  margin: 0 8px;
}

.status > :first-child {
  flex: 1 0 0;
}

.status > :first-child div {
  text-decoration: underline;
}

.status > :first-child img {
  display: block; 
  width: 16px;
  margin-top: -1px;
  margin-left: 4px;
}

.status > :not(:first-child) img {
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
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
