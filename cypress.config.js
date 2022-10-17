const { defineConfig } = require("cypress");
const { registerWorkshopScripts } = require('./workshop-scripts/workshopScripts.js')

module.exports = defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on, config) {
      registerWorkshopScripts(on)
    },
    baseUrl: 'http://localhost:3000'
  }
});
