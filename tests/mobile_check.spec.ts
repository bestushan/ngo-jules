import { test, expect } from '@playwright/test';

test('verify mobile menu', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:4324/');

  // Check if hamburger menu is visible
  const menuButton = page.locator('label[for="mobile-menu"]');
  await expect(menuButton).toBeVisible();

  // Click to open
  await menuButton.click();

  // Check if drawer is visible
  const drawer = page.locator('.drawer-side');
  await expect(drawer).toBeVisible();

  // Check links in drawer
  await expect(page.locator('.drawer-side a:has-text("Our Mission")')).toBeVisible();
  await expect(page.locator('.drawer-side a:has-text("Impact")')).toBeVisible();

  // Navigate to impact page via drawer
  await page.locator('.drawer-side a:has-text("Impact")').click();
  await expect(page).toHaveURL(/.*impact/);

  // Check impact page mobile menu
  await expect(page.locator('label[for="mobile-menu"]')).toBeVisible();
  await page.locator('label[for="mobile-menu"]').click();
  await expect(page.locator('.drawer-side a:has-text("Reports")')).toBeVisible();
});
