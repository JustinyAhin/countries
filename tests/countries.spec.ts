import { test, expect } from '@playwright/test';

test('the user can navigate to the home page and see the list of rows in a table', async ({
	page
}) => {
	await page.goto('/');

	// We check that the page has a table with at least 59 rows.
	// We expect the table to have at least 59 rows because the default region is Africa for which
	// the API returns 59 countries.
	const tableRowsCount = await page.getByRole('table').getByRole('row').count();
	expect(tableRowsCount).toBeGreaterThan(59);
});
