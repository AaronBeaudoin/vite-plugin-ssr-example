// Exports from `page.client` pages are not available in
// `_default.page.server`, which is where we set the title.
export const title = "SPA";

// This option is not allowed to be set in `page.client` files.
export const doNotPrerender = true;
