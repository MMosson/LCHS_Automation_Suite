const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "v5efib",
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  defaultCommandTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
