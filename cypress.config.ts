import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 4000,
    testIsolation: false,
    baseUrl: 'http://localhost:3000',
    video: false,

    setupNodeEvents(on, config) {},
  },
})