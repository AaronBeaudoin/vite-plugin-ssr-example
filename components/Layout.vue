<template>
  <div class="panel">
    <a href="/ssr"><h1>vite-plugin-ssr</h1></a>
    <div class="links">
      <span style="font-weight: 400;">Modes:</span>
      <a href="/ssr">SSR</a>
      <a href="/spa">SPA</a>
      <a href="/ssg">SSG</a>
      <a href="/html">HTML</a>
    </div>
    <div class="content">
      <slot></slot>
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
  font-family: "Space Mono";
  font-weight: 200;
  font-size: 2em;
  text-align: center;
}

.links {
  margin-top: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top: 1px solid hsl(0, 0%, 95%);
  border-bottom: 1px solid hsl(0, 0%, 95%);
  text-align: center;
}

.links * {
  margin-left: 8px;
  margin-right: 8px;
  color: hsl(0, 0%, 40%);
  font-weight: bold;
  font-size: 0.9em;
}

.links a:hover {
  color: hsl(0, 0%, 20%);
}

.content {
  margin-top: 32px;
}

@media screen and (max-width: 425px) {
  .panel {
    padding: 24px;
    border-radius: 0;
  }

  h1 {
    font-size: 1.5em;
  }

  .links, .content {
    margin-top: 24px;
  }
}
</style>