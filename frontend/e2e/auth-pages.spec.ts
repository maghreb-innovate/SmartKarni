import { test, expect } from '@playwright/test';

test.describe('Auth Pages', () => {
  // ── Login Page ───────────────────────────────────────────
  test.describe('Login Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/login');
    });

    test('shows the logo', async ({ page }) => {
      const logo = page.locator('img[alt="Smart Karni"]');
      await expect(logo).toBeVisible();
    });

    test('shows the brand title', async ({ page }) => {
      await expect(page.locator('h1')).toContainText('سمارت كارني');
    });

    test('shows the card title', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'تسجيل الدخول' })).toBeVisible();
    });

    test('has email input', async ({ page }) => {
      const emailInput = page.locator('#email');
      await expect(emailInput).toBeVisible();
      await expect(emailInput).toHaveAttribute('type', 'email');
    });

    test('has password input', async ({ page }) => {
      const passwordInput = page.locator('#password');
      await expect(passwordInput).toBeVisible();
      await expect(passwordInput).toHaveAttribute('type', 'password');
    });

    test('has submit button', async ({ page }) => {
      const submitBtn = page.locator('button[type="submit"]');
      await expect(submitBtn).toBeVisible();
      await expect(submitBtn).toContainText('تسجيل الدخول');
    });

    test('has link to register page', async ({ page }) => {
      const link = page.locator('a[href="/register"]');
      await expect(link).toBeVisible();
      await expect(link).toContainText('إنشاء حساب جديد');
    });

    test('page is RTL', async ({ page }) => {
      const container = page.locator('div[dir="rtl"]').first();
      await expect(container).toBeVisible();
    });

    test('email input is required', async ({ page }) => {
      await expect(page.locator('#email')).toHaveAttribute('required', '');
    });

    test('password input is required', async ({ page }) => {
      await expect(page.locator('#password')).toHaveAttribute('required', '');
    });

    test('shows subtitle text', async ({ page }) => {
      await expect(page.locator('text=أدخل بياناتك للوصول إلى حسابك')).toBeVisible();
    });

    test('has back to home link', async ({ page }) => {
      const link = page.locator('a[href="/"]', { hasText: 'الرجوع للرئيسية' });
      await expect(link).toBeVisible();
    });

    test('has forgot password button', async ({ page }) => {
      const btn = page.locator('button', { hasText: 'نسيتي كلمة المرور؟' });
      await expect(btn).toBeVisible();
    });
  });

  // ── Register Page ────────────────────────────────────────
  test.describe('Register Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/register');
    });

    test('shows the logo', async ({ page }) => {
      const logo = page.locator('img[alt="Smart Karni"]');
      await expect(logo).toBeVisible();
    });

    test('shows the brand title', async ({ page }) => {
      await expect(page.locator('h1')).toContainText('سمارت كارني');
    });

    test('shows the card title', async ({ page }) => {
      await expect(page.locator('text=إنشاء حساب جديد')).toBeVisible();
    });

    test('has name input', async ({ page }) => {
      const nameInput = page.locator('#name');
      await expect(nameInput).toBeVisible();
      await expect(nameInput).toHaveAttribute('type', 'text');
    });

    test('has email input', async ({ page }) => {
      const emailInput = page.locator('#email');
      await expect(emailInput).toBeVisible();
      await expect(emailInput).toHaveAttribute('type', 'email');
    });

    test('has password input', async ({ page }) => {
      const passwordInput = page.locator('#password');
      await expect(passwordInput).toBeVisible();
      await expect(passwordInput).toHaveAttribute('type', 'password');
    });

    test('has confirm password input', async ({ page }) => {
      const confirmInput = page.locator('#confirmPassword');
      await expect(confirmInput).toBeVisible();
      await expect(confirmInput).toHaveAttribute('type', 'password');
    });

    test('has submit button', async ({ page }) => {
      const submitBtn = page.locator('button[type="submit"]');
      await expect(submitBtn).toBeVisible();
      await expect(submitBtn).toContainText('إنشاء الحساب');
    });

    test('has link to login page', async ({ page }) => {
      const link = page.locator('a[href="/login"]');
      await expect(link).toBeVisible();
      await expect(link).toContainText('تسجيل الدخول');
    });

    test('password has minLength of 6', async ({ page }) => {
      await expect(page.locator('#password')).toHaveAttribute('minlength', '6');
    });

    test('has back to home link', async ({ page }) => {
      const link = page.locator('a[href="/"]', { hasText: 'الرجوع للرئيسية' });
      await expect(link).toBeVisible();
    });
  });
});
