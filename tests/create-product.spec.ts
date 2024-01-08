import { test, expect } from '@playwright/test';

test('create product', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('product-name-input').fill('haha');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page.getByTestId('create-product-output')).toBeVisible();
  await page.getByTestId('create-product-output').selectText();
});