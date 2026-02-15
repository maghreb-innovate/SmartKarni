import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ── Meta Tags ────────────────────────────────────────────
  test.describe('Meta Tags', () => {
    test('has correct title', async ({ page }) => {
      await expect(page).toHaveTitle(/Smart Karni/);
    });

    test('has meta description', async ({ page }) => {
      const desc = page.locator('meta[name="description"]');
      await expect(desc).toHaveAttribute('content', /إدارة ديون الزبائن/);
    });

    test('has meta author', async ({ page }) => {
      const author = page.locator('meta[name="author"]');
      await expect(author).toHaveAttribute('content', 'Smart Karni');
    });

    test('has meta keywords', async ({ page }) => {
      const keywords = page.locator('meta[name="keywords"]');
      await expect(keywords).toHaveAttribute('content', /smart karni/);
    });

    test('has meta viewport', async ({ page }) => {
      const viewport = page.locator('meta[name="viewport"]');
      await expect(viewport).toHaveAttribute('content', /width=device-width/);
    });

    test('has charset UTF-8', async ({ page }) => {
      const charset = page.locator('meta[charset]');
      await expect(charset).toHaveAttribute('charset', 'UTF-8');
    });
  });

  // ── Open Graph Tags ──────────────────────────────────────
  test.describe('OG Tags', () => {
    test('has og:title', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toHaveAttribute('content', 'Smart Karni');
    });

    test('has og:description', async ({ page }) => {
      const ogDesc = page.locator('meta[property="og:description"]');
      await expect(ogDesc).toHaveAttribute('content', /إدارة ديون الزبائن/);
    });

    test('has og:type', async ({ page }) => {
      const ogType = page.locator('meta[property="og:type"]');
      await expect(ogType).toHaveAttribute('content', 'website');
    });

    test('has og:url', async ({ page }) => {
      const ogUrl = page.locator('meta[property="og:url"]');
      await expect(ogUrl).toHaveAttribute('content', 'https://smartkarni.com');
    });

    test('has og:image', async ({ page }) => {
      const ogImage = page.locator('meta[property="og:image"]');
      await expect(ogImage).toHaveAttribute('content', /og-image\.png/);
    });

    test('has og:locale', async ({ page }) => {
      const ogLocale = page.locator('meta[property="og:locale"]');
      await expect(ogLocale).toHaveAttribute('content', 'ar_MA');
    });
  });

  // ── Twitter Cards ────────────────────────────────────────
  test.describe('Twitter Cards', () => {
    test('has twitter:card', async ({ page }) => {
      const card = page.locator('meta[name="twitter:card"]');
      await expect(card).toHaveAttribute('content', 'summary_large_image');
    });

    test('has twitter:title', async ({ page }) => {
      const title = page.locator('meta[name="twitter:title"]');
      await expect(title).toHaveAttribute('content', 'Smart Karni');
    });

    test('has twitter:description', async ({ page }) => {
      const desc = page.locator('meta[name="twitter:description"]');
      await expect(desc).toHaveAttribute('content', /إدارة ديون الزبائن/);
    });

    test('has twitter:image', async ({ page }) => {
      const image = page.locator('meta[name="twitter:image"]');
      await expect(image).toHaveAttribute('content', /og-image\.png/);
    });
  });

  // ── Favicon & Icons ──────────────────────────────────────
  test.describe('Favicon & Icons', () => {
    test('has favicon link tag', async ({ page }) => {
      const favicon = page.locator('link[rel="icon"]');
      await expect(favicon).toHaveAttribute('href', '/favicon.ico');
    });

    test('has apple-touch-icon', async ({ page }) => {
      const icon = page.locator('link[rel="apple-touch-icon"]');
      await expect(icon).toHaveAttribute('href', '/icon-192.png');
    });

    test('favicon.ico returns HTTP 200', async ({ request }) => {
      const response = await request.get('https://smartkarni.com/favicon.ico');
      expect(response.status()).toBe(200);
    });

    test('og-image.png returns HTTP 200', async ({ request }) => {
      const response = await request.get('https://smartkarni.com/og-image.png');
      expect(response.status()).toBe(200);
    });
  });

  // ── HTML Attributes ──────────────────────────────────────
  test.describe('HTML Attributes', () => {
    test('html lang is "ar"', async ({ page }) => {
      const lang = await page.locator('html').getAttribute('lang');
      expect(lang).toBe('ar');
    });

    test('html dir is "rtl"', async ({ page }) => {
      const dir = await page.locator('html').getAttribute('dir');
      expect(dir).toBe('rtl');
    });
  });
});
