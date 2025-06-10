import { test, expect } from '@playwright/test';

test.describe('Home Page verification', () => {
  test('Validate title and url', async({ page }) => {
    await page.goto('')
    expect(page.url().toLowerCase()).toContain('/weborders/');
    expect(await page.title()).toContain('Web Orders');
  });
});