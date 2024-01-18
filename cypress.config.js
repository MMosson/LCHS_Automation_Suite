const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Do not change the projectId or Cypress will not be able to talk to the Cypress Cloud
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
