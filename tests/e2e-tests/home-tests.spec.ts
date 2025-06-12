// @ts-nocheck 

import { test, expect } from '@playwright/test';

test.describe('Home Page verification', () => {

  test('Validate title and url', async ({ page }) => {

    await page.goto('', { waitUntil: "domcontentloaded", })
    expect(page.url().toLowerCase()).toContain('/weborders/')
    expect(await page.title()).toContain('Web Orders')


    await expect(page).toHaveScreenshot('HP1-Validation.png', {
      fullPage: true,
      clip: {
        x: 36,
        y: 6,
        width: 245,
        height: 290
      }
    })



    await expect(page).toHaveScreenshot('HP2-Validation.png', {
      fullPage: true,
      clip: {
        x: 302,
        y: 67,
        width: 925,
        height: 106
      }
    })




  });
});