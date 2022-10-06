import { test, expect } from '@playwright/test';

test('Visit WordPress Admin dashboard page', async ({ page }) => {
	await page.goto('http://localhost:8888/wp-admin/');
	await page.locator('h1:has-text("Dashboard")');
});
