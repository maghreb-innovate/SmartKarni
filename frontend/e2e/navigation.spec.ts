import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  // ── Header ───────────────────────────────────────────────
  test.describe('Header', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('shows the logo', async ({ page }) => {
      const logo = page.locator('header img[alt="Smart Karni Logo"]');
      await expect(logo).toBeVisible();
    });

    test('shows nav links on desktop', async ({ page }) => {
      await expect(page.locator('header nav >> text=الرئيسية')).toBeVisible();
      await expect(page.locator('header nav >> text=المميزات')).toBeVisible();
      await expect(page.locator('header nav >> text=الأثمنة')).toBeVisible();
      await expect(page.locator('header nav >> text=معاينة')).toBeVisible();
      await expect(page.locator('header nav >> text=تواصل')).toBeVisible();
    });

    test('shows language toggle', async ({ page }) => {
      await expect(page.locator('header button', { hasText: 'FR' })).toBeVisible();
    });

    test('shows login button on desktop', async ({ page }) => {
      await expect(page.locator('header a[href="/login"]')).toBeVisible();
    });

    test('shows register button on desktop', async ({ page }) => {
      await expect(page.locator('header a[href="/register"]')).toBeVisible();
    });

    test('logo click navigates to home', async ({ page }) => {
      await page.goto('/features');
      await page.locator('header a[href="/"]').first().click();
      await expect(page).toHaveURL(/\/$/);
    });

    test('features link navigates to /features', async ({ page }) => {
      await page.locator('header nav >> text=المميزات').click();
      await expect(page).toHaveURL(/\/features$/);
    });

    test('pricing link navigates to /pricing', async ({ page }) => {
      await page.locator('header nav >> text=الأثمنة').click();
      await expect(page).toHaveURL(/\/pricing$/);
    });
  });

  // ── Mobile Menu ──────────────────────────────────────────
  test.describe('Mobile Menu', () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('shows hamburger menu button', async ({ page }) => {
      const menuBtn = page.locator('header button').filter({ has: page.locator('svg') }).last();
      await expect(menuBtn).toBeVisible();
    });

    test('opens menu and shows nav items', async ({ page }) => {
      const menuBtn = page.locator('header button').filter({ has: page.locator('svg') }).last();
      await menuBtn.click();
      // Mobile nav appears within header
      await expect(page.locator('header').getByRole('link', { name: 'الرئيسية' })).toBeVisible();
      await expect(page.locator('header').getByRole('link', { name: 'المميزات' })).toBeVisible();
    });

    test('navigates via mobile menu', async ({ page }) => {
      const menuBtn = page.locator('header button').filter({ has: page.locator('svg') }).last();
      await menuBtn.click();
      await page.locator('header').getByRole('link', { name: 'المميزات' }).click();
      await expect(page).toHaveURL(/\/features$/);
    });
  });

  // ── Footer ───────────────────────────────────────────────
  test.describe('Footer', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('shows the logo', async ({ page }) => {
      const logo = page.locator('footer img[alt="Smart Karni Logo"]');
      await expect(logo).toBeVisible();
    });

    test('shows navigation links', async ({ page }) => {
      await expect(page.locator('footer nav >> text=الرئيسية')).toBeVisible();
      await expect(page.locator('footer nav >> text=المميزات')).toBeVisible();
      await expect(page.locator('footer nav >> text=الأثمنة')).toBeVisible();
      await expect(page.locator('footer nav >> text=تواصل معانا')).toBeVisible();
      await expect(page.locator('footer nav >> text=سياسة الخصوصية')).toBeVisible();
    });

    test('shows team members', async ({ page }) => {
      await expect(page.locator('footer >> text=Zakaria Jaouhari')).toBeVisible();
      await expect(page.locator('footer >> text=Reda Ekengren')).toBeVisible();
    });

    test('shows GitHub link', async ({ page }) => {
      const ghLink = page.locator('footer a[href*="github.com/RedaEkengren"]');
      await expect(ghLink.first()).toBeVisible();
    });

    test('shows copyright', async ({ page }) => {
      await expect(page.locator('footer >> text=© 2025')).toBeVisible();
    });
  });

  // ── Sub-pages ────────────────────────────────────────────
  test.describe('Sub-pages', () => {
    test('/features renders correctly', async ({ page }) => {
      await page.goto('/features');
      await expect(page.locator('h1')).toContainText('المميزات');
    });

    test('/pricing renders correctly', async ({ page }) => {
      await page.goto('/pricing');
      await expect(page.locator('h1')).toContainText('الأثمنة');
    });

    test('/contact renders correctly', async ({ page }) => {
      await page.goto('/contact');
      await expect(page.locator('h1')).toContainText('تواصل معانا');
    });

    test('/privacy renders correctly', async ({ page }) => {
      await page.goto('/privacy');
      await expect(page.locator('h1')).toContainText('سياسة الخصوصية');
    });

    test('/preview renders correctly', async ({ page }) => {
      await page.goto('/preview');
      await expect(page.locator('h1')).toContainText('شوف كيفاش التطبيق من الداخل');
    });
  });

  // ── 404 Page ─────────────────────────────────────────────
  test.describe('404 Page', () => {
    test('shows 404 for unknown route', async ({ page }) => {
      await page.goto('/this-page-does-not-exist');
      await expect(page.locator('h1')).toContainText('404');
    });

    test('shows "Page not found" text', async ({ page }) => {
      await page.goto('/this-page-does-not-exist');
      await expect(page.locator('text=Page not found')).toBeVisible();
    });

    test('has link back to home', async ({ page }) => {
      await page.goto('/this-page-does-not-exist');
      const link = page.locator('a[href="/"]');
      await expect(link).toBeVisible();
      await expect(link).toContainText('Return to Home');
    });
  });

  // ── Redirects ────────────────────────────────────────────
  test.describe('Redirects', () => {
    test('/auth redirects to /login', async ({ page }) => {
      await page.goto('/auth');
      await expect(page).toHaveURL(/\/login$/);
    });

    test('/app redirects to /login', async ({ page }) => {
      await page.goto('/app');
      await expect(page).toHaveURL(/\/login$/);
    });
  });
});
