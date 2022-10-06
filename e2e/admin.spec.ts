import { test, expect } from '@playwright/test';

test('Visit WordPress Admin dashboard page', async ({ page }) => {
	await page.goto('http://localhost:5501/wp-admin/');
	await page.locator('h1:has-text("Dashboard")');
});
