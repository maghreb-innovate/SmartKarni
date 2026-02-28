import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Check, Bell } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const { t, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend waitlist API
    console.log('Waitlist signup:', phone);
    setSubmitted(true);
  };

  return (
    <section id="download" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="section-container text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
          <Bell className="w-8 h-8 text-accent-foreground" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('جرب سمارت كارني دابا!', 'Essayez Smart Karni maintenant!')}
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          {t(
            'سجل مجانا و بدأ تسجل ديون الزبائن ديالك.',
            'Inscrivez-vous gratuitement et commencez à gérer les dettes de vos clients.'
          )}
        </p>

        {/* Primary CTA */}
        <div className="mb-10">
          <Link to="/register" className="btn-gold text-lg inline-flex">
            {t('ابدأ مجانا', 'Commencer gratuitement')}
            <Arrow className="w-5 h-5" />
          </Link>
        </div>

        {/* App badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link to="/login" className="bg-primary-foreground/20 rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-primary-foreground/30 transition-colors">
            <span className="text-2xl">🌐</span>
            <div className="text-start">
              <div className="text-xs text-primary-foreground/60">
                {t('متاح الآن', 'Disponible')}
              </div>
              <div className="font-semibold">Web App ✓</div>
            </div>
          </Link>
          <div className="bg-primary-foreground/10 rounded-xl px-6 py-3 flex items-center gap-3 cursor-not-allowed opacity-60" title={isArabic ? 'قريبا' : 'Bientôt'}>
            <span className="text-2xl">▶️</span>
            <div className="text-start">
              <div className="text-xs text-primary-foreground/60">
                {t('قريبا على', 'Bientôt sur')}
              </div>
              <div className="font-semibold">Google Play</div>
            </div>
          </div>
          <div className="bg-primary-foreground/10 rounded-xl px-6 py-3 flex items-center gap-3 cursor-not-allowed opacity-60" title={isArabic ? 'قريبا' : 'Bientôt'}>
            <span className="text-2xl">🍎</span>
            <div className="text-start">
              <div className="text-xs text-primary-foreground/60">
                {t('قريبا على', 'Bientôt sur')}
              </div>
              <div className="font-semibold">App Store</div>
            </div>
          </div>
        </div>

        {/* Notify for mobile apps */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-primary-foreground/60 text-sm mb-4">
            {t('بغيتي نخبروك ملي تطبيق الموبايل يكون جاهز؟', 'Voulez-vous être notifié quand l\'app mobile sera prête?')}
          </p>
          {!submitted ? (
            <form onSubmit={handleWaitlist} className="max-w-sm mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={isArabic ? 'رقم الهاتف (06...)' : 'Numéro de téléphone (06...)'}
                  className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  {t('خبرني', 'Me notifier')}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-accent/20 text-primary-foreground px-6 py-4 rounded-xl inline-flex items-center gap-2">
              <Check className="w-6 h-6" />
              <span className="font-semibold">
                {t('تم! غادي نخبروك قريبا إن شاء الله', 'C\'est fait! On vous contactera bientôt inchallah')}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
