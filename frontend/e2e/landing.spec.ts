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

    test('shows the email waitlist form', async ({ page }) => {
      const emailInput = page.locator('input[type="email"]').first();
      await expect(emailInput).toBeVisible();
      const submitBtn = page.locator('button[type="submit"]').first();
      await expect(submitBtn).toBeVisible();
    });

    test('shows 4 benefit cards', async ({ page }) => {
      // Benefits are in rounded-xl bg-secondary/50 cards inside the hero
      await expect(page.locator('text=ما عمرك تخسر فلوسك').first()).toBeVisible();
      await expect(page.locator('text=دعم 24/7 بالدارجة').first()).toBeVisible();
      await expect(page.locator('text=قفل بالبصمة').first()).toBeVisible();
      await expect(page.locator('text=صدقة - ساعد الآخرين').first()).toBeVisible();
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

  // ── SadaqaSection ────────────────────────────────────────
  test.describe('SadaqaSection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('h2', { hasText: 'صدقة - ساعد الآخرين' })).toBeVisible();
    });

    test('shows the hadith quote', async ({ page }) => {
      await expect(page.locator('blockquote')).toContainText('من نفّس عن مؤمن كربة');
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

  // ── PricingSection ───────────────────────────────────────
  test.describe('PricingSection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('#pricing h2')).toContainText('الثمن');
    });

    test('shows free plan with 0 DH', async ({ page }) => {
      const section = page.locator('#pricing');
      await expect(section.getByText('0 درهم', { exact: true })).toBeVisible();
    });

    test('shows premium plan with 40 DH', async ({ page }) => {
      const section = page.locator('#pricing');
      await expect(section.locator('.text-accent', { hasText: '40 درهم' })).toBeVisible();
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
  });

  // ── CTASection ───────────────────────────────────────────
  test.describe('CTASection', () => {
    test('shows the heading', async ({ page }) => {
      await expect(page.locator('text=كن من الأوائل!')).toBeVisible();
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
  });

  // ── Language Toggle ──────────────────────────────────────
  test.describe('Language Toggle', () => {
    test('defaults to Arabic with RTL, switches to French and back', async ({ page }) => {
      // Default Arabic
      await expect(page.locator('h1').first()).toContainText('سمارت كارني');

      // Toggle to French
      const langBtn = page.locator('button', { hasText: 'FR' });
      await expect(langBtn).toBeVisible();
      await langBtn.click();

      // Verify French
      await expect(page.locator('h1').first()).toContainText('Smart Karni');
      await expect(page.locator('text=Les problèmes qu')).toBeVisible();

      // Toggle back to Arabic
      const langBtnAr = page.locator('button', { hasText: 'ع' });
      await langBtnAr.click();
      await expect(page.locator('h1').first()).toContainText('سمارت كارني');
    });
  });
});
