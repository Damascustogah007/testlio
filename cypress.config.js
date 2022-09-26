const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com/",
    include: ["./node_modules/cypress", "cypress/**/*.js"],
    experimentalStudio: true,
    retries: {
      runMode: 2,
      openMode: 2,
    },
    downloadsFolder: "cypress/downloads",
    pageLoadTimeout: 60 * 1000,
    responseTimeout: 30 * 1000,
    requestTimeout: 5 * 1000,
    // env: {},
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    waitForAnimations: true,
    watchForFileChanges: true,
    projectId: null,
    video: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    scrollBehavior: "center",
    slowTestThreshold: 10 * 1000,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    videosFolder: 'cypress/videos',
    video: false,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: 'cypress/screenshots',
    downloadsFolder: 'cypress/downloads'
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
