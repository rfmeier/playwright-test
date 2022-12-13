import { test, expect, request } from '@playwright/test';

test.describe(() => {
	test('Visit WordPress Admin dashboard page', async ({ page }) => {
		await page.goto('http://localhost:5501/wp-admin');
		await expect(page.locator('.wrap h1')).toHaveText('Dashboard');
	});
});
