import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1024,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
