// tests/portfolio.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Portfolio App – Smoke & Sign-in', () => {

  test('Home page renders correctly', async ({ page }) => {
    await page.goto('/');

    // Only check the FIRST <h1> so we don’t accidentally match the welcome header
    await expect(page.locator('h1').first()).toHaveText('My Portfolio');

    await expect(page.getByText('Showcasing my work')).toBeVisible();
  });

  test('User can sign in with valid credentials', async ({ page }) => {
    await page.goto('/signin');

    // Wait for the form to load
    await page.waitForSelector('form');

    // Fill in your real login details
    await page.fill('input[type="email"]', 'ccyccyccy2000@gmail.com');
    await page.fill('input[type="password"]', '1');

    // Click the Sign In button
    await page.click('button:has-text("Sign In")');

    // Verify the post-login welcome message appears
    await expect(page.getByText('Welcome,')).toBeVisible();
  });

});



