import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        try:
            # Check Discover Page
            print('Navigating to Discover page...')
            await page.goto('http://localhost:4324/discover')
            await page.screenshot(path='/home/jules/verification/discover_page.png', full_page=True)

            # Check Mission Page Header (Dropdowns)
            print('Navigating to Mission page...')
            await page.goto('http://localhost:4324/')

            # Hover over About Us to see dropdown
            await page.hover('text=About Us')
            await page.screenshot(path='/home/jules/verification/header_dropdown.png')

            # Check Mobile Menu
            await page.set_viewport_size({"width": 375, "height": 667})
            await page.click('label[for="mobile-menu"]')
            await asyncio.sleep(1) # Wait for drawer
            await page.screenshot(path='/home/jules/verification/mobile_menu_v3.png')

            print('Verification screenshots captured.')
        except Exception as e:
            print(f'Error during verification: {e}')
        finally:
            await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
