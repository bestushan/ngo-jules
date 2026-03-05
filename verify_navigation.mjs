import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Check Discover Page
    console.log('Navigating to Discover page...');
    await page.goto('http://localhost:4321/discover');
    await page.screenshot({ path: '/home/jules/verification/discover_page.png', fullPage: true });

    // Check Mission Page Header (Dropdowns)
    console.log('Navigating to Mission page...');
    await page.goto('http://localhost:4321/');

    // Hover over About Us to see dropdown
    await page.hover('text=About Us');
    await page.screenshot({ path: '/home/jules/verification/header_dropdown.png' });

    // Check Mobile Menu
    await page.setViewportSize({ width: 375, height: 667 });
    await page.click('label[for="mobile-menu"]');
    await page.waitForTimeout(500); // Wait for drawer
    await page.screenshot({ path: '/home/jules/verification/mobile_menu_v2.png' });

    console.log('Verification screenshots captured.');
  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
  }
})();
