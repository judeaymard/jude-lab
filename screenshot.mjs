import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const viewports = [
    { name: 'desktop', width: 1280, height: 720 },
    { name: 'mobile', width: 375, height: 667 }
  ];

  const routes = [
    { name: 'home', url: '/' },
    { name: 'boutique', url: '/boutique' },
    { name: 'panier', url: '/panier' },
    { name: 'dashboard', url: '/dashboard' },
    { name: 'admin', url: '/admin-supplier' }
  ];

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    console.log(`Testing viewport: ${viewport.name}`);

    for (const route of routes) {
      await page.goto('http://localhost:3000' + route.url);
      await page.waitForLoadState('networkidle');
      // Special check for mobile menu
      if (viewport.name === 'mobile') {
        const menuButton = await page.locator('button >> svg >> line').first();
        if (await menuButton.isVisible()) {
           console.log(`  Mobile menu button visible on ${route.name}`);
        }
      }
      await page.screenshot({ path: `screenshot_${route.name}_${viewport.name}.png`, fullPage: true });
      console.log(`  Screenshot saved: screenshot_${route.name}_${viewport.name}.png`);
    }
  }

  await browser.close();
})();
