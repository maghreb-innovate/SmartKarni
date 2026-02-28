import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Shield, MessageCircle, Cloud, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  const benefits = [
    { ar: 'ما عمرك تخسر فلوسك', fr: 'Jamais de données perdues', icon: Cloud },
    { ar: 'دعم 24/7 بالدارجة', fr: 'Support 24/7 en darija', icon: MessageCircle },
    { ar: '100% مجاني', fr: '100% Gratuit', icon: '✅' },
    { ar: 'قفل بالبصمة', fr: 'Verrouillage biométrique', icon: Fingerprint },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* App Icon */}
          <img
            src="/logo.webp"
            alt="Smart Karni Logo"
            className="w-20 h-20 md:w-24 md:h-24 rounded-3xl mb-6 md:mb-8 shadow-lg animate-float mx-auto"
          />

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-slide-up">
            {t('سمارت كارني', 'Smart Karni')}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-slide-up delay-100">
            {t('ما عمرك تخسر فلوسك - أبدا!', 'Ne perdez plus jamais vos données - Jamais!')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up delay-200">
            {t(
              'التطبيق المغربي الوحيد لتتبع الديون مع backup تلقائي، دعم 24/7 بالدارجة، و 100% مجاني',
              'La seule app marocaine de suivi des dettes avec sauvegarde automatique, support 24/7 en darija, et 100% gratuit'
            )}
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up delay-300 mb-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-primary text-lg">
              {t('ابدأ مجانا', 'Commencer gratuitement')}
              <Arrow className="w-5 h-5" />
            </Link>
            <Link to="/preview" className="btn-secondary text-lg">
              {t('شوف المعاينة', 'Voir l\'aperçu')}
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            {t('✅ مجاني - بلا بطاقة بنكية', '✅ Gratuit - Sans carte bancaire')}
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up delay-400">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50"
              >
                {typeof benefit.icon === 'string' ? (
                  <span className="text-2xl">{benefit.icon}</span>
                ) : (
                  <benefit.icon className="w-6 h-6 text-primary" />
                )}
                <span className="font-medium text-sm text-center">
                  {isArabic ? benefit.ar : benefit.fr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
