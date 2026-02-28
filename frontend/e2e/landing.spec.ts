import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ── HeroSection ──────────────────────────────────────────
  test.describe('HeroSection', () => {
    test('shows the logo', async ({ page }) => {
      const logo = page.locator('img[alt="Smart Karni Logo"]').first();
      await expect(logo).toBeVisible();
    });

    test('shows the title', async ({ page }) => {
      await expect(page.locator('h1').first()).toContainText('سمارت كارني');
    });

    test('shows the tagline', async ({ page }) => {
      await expect(page.locator('p.text-primary.font-semibold').first()).toContainText('ما عمرك تخسر فلوسك');
    });

    test('shows CTA buttons to register and preview', async ({ page }) => {
      await expect(page.locator('a[href="/register"]').first()).toBeVisible();
      await expect(page.locator('a[href="/preview"]').first()).toBeVisible();
    });

    test('shows 4 benefit cards', async ({ page }) => {
      await expect(page.locator('text=ما عمرك تخسر فلوسك').first()).toBeVisible();
      await expect(page.locator('text=دعم 24/7 بالدارجة').first()).toBeVisible();
      await expect(page.locator('text=قفل بالبصمة').first()).toBeVisible();
      await expect(page.locator('text=100% مجاني').first()).toBeVisible();
    });
  });

  // ── ProblemSection ───────────────────────────────────────
  test.describe('ProblemSection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('text=المشاكل لي كنعرفوها مزيان')).toBeVisible();
    });

    test('shows 3 problem cards', async ({ page }) => {
      const section = page.locator('section', { has: page.locator('text=المشاكل لي كنعرفوها مزيان') });
      const cards = section.locator('.feature-card');
      await expect(cards).toHaveCount(3);
    });
  });

  // ── SolutionSection ──────────────────────────────────────
  test.describe('SolutionSection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('text=الحل بسيط')).toBeVisible();
    });

    test('shows solution cards', async ({ page }) => {
      const section = page.locator('section', { has: page.locator('text=الحل بسيط') });
      const cards = section.locator('.notebook-card');
      await expect(cards).toHaveCount(6);
    });
  });

  // ── TrustSection ─────────────────────────────────────────
  test.describe('TrustSection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('text=علاش سمارت كارني مختلف؟')).toBeVisible();
    });

    test('shows trust badges', async ({ page }) => {
      const section = page.locator('section', { has: page.locator('text=علاش سمارت كارني مختلف؟') });
      const badges = section.locator('.trust-badge');
      await expect(badges).toHaveCount(4);
    });

    test('has register link', async ({ page }) => {
      const section = page.locator('section', { has: page.locator('text=علاش سمارت كارني مختلف؟') });
      const registerLink = section.locator('a[href="/register"]');
      await expect(registerLink).toBeVisible();
    });
  });

  // ── HowItWorksSection ────────────────────────────────────
  test.describe('HowItWorksSection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('text=كيفاش خدام؟')).toBeVisible();
    });

    test('shows 4 steps', async ({ page }) => {
      const section = page.locator('section', { has: page.locator('text=كيفاش خدام؟') });
      const steps = section.locator('.grid > div');
      await expect(steps).toHaveCount(4);
    });
  });

  // ── FAQSection ───────────────────────────────────────────
  test.describe('FAQSection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('text=أسئلة متكررة')).toBeVisible();
    });

    test('shows FAQ questions', async ({ page }) => {
      await expect(page.locator('text=واش خاصني انترنت')).toBeVisible();
      await expect(page.locator('text=واش المعلومات ديالي محمية')).toBeVisible();
    });

    test('has unlimited clients FAQ question', async ({ page }) => {
      await expect(page.locator('text=شحال من زبون نقدر نزيد؟')).toBeVisible();
    });
  });

  // ── CTASection ───────────────────────────────────────────
  test.describe('CTASection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('text=جرب سمارت كارني دابا!')).toBeVisible();
    });

    test('shows the phone waitlist form', async ({ page }) => {
      const phoneInput = page.locator('input[type="tel"]');
      await expect(phoneInput).toBeVisible();
    });

    test('shows app store badges', async ({ page }) => {
      const section = page.locator('#download');
      await expect(section.locator('text=Google Play')).toBeVisible();
      await expect(section.locator('text=App Store')).toBeVisible();
    });

    test('app store badges have cursor-not-allowed and opacity-60', async ({ page }) => {
      const section = page.locator('#download');
      const googlePlay = section.locator('div.cursor-not-allowed.opacity-60', { hasText: 'Google Play' });
      const appStore = section.locator('div.cursor-not-allowed.opacity-60', { hasText: 'App Store' });
      await expect(googlePlay).toBeVisible();
      await expect(appStore).toBeVisible();
    });
  });

  // ── Language Toggle ──────────────────────────────────────
  test.describe('Language Toggle', () => {
    test('defaults to Arabic with RTL, switches to French and back', async ({ page }) => {
      // Default Arabic
      await expect(page.locator('h1').first()).toContainText('سمارت كارني');

      // Toggle to French
      const langBtn = page.locator('button', { hasText: '🇫🇷' });
      await expect(langBtn).toBeVisible();
      await langBtn.click();

      // Verify French
      await expect(page.locator('h1').first()).toContainText('Smart Karni');
      await expect(page.locator('text=Les problèmes qu')).toBeVisible();

      // Toggle back to Arabic
      const langBtnAr = page.locator('button', { hasText: '🇲🇦' });
      await langBtnAr.click();
      await expect(page.locator('h1').first()).toContainText('سمارت كارني');
    });
  });
});
