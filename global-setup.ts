import { chromium, FullConfig, request } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:5501/wp-login.php');
  await page.locator('input[name="log"]').fill('admin');
  await page.locator('input[name="pwd"]').fill('password');
  await page.locator('text=Log In').click();

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
