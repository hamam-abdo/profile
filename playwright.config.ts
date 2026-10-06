import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",

  // Fail the build on CI if someone left a test.only in the code
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: "html",

  use: {
    baseURL: "http://localhost:3000",
    // Keep a trace of the first retry so failures are debuggable
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] },
    },
  ],

  // Playwright starts the dev server itself, then shuts it down when done
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
