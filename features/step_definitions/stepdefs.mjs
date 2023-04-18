import { defineStep } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

defineStep('test', async function () {
  const context = await this.browser.newContext({})
  const page = await context.newPage()
  await page.goto('https://example.com')
  expect(false).toEqual(true)
})
