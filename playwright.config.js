// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    headless: false, // Run in headed mode
    viewport: null, // this will make it maximize, upar vaala ma size etli rehse pan center aligned nai rehse
    launchOptions: {
      args: ['--start-maximized'], // Maximize browser window
    },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
