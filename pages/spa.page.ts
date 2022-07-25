// This file is necessary to set a title for the SPA page because exports from
// `spa.page.client.vue` are client-side only, so they are not available
// in `_default.page.server.ts`, which is where we set the title.
export const title = "SPA";
