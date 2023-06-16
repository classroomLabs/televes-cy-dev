import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://televes.com",
    viewportHeight: 768,
    viewportWidth: 1024,
    video: false,

    env: {
      apiUrl: "https://api.televes.com/v1",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
