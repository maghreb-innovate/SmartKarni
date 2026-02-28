import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Shield, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustSection = () => {
  const { t, isArabic } = useLanguage();

  const trustBadges = [
    {
      icon: '🔒',
      label: { ar: 'معلوماتك سرية', fr: 'Données privées' },
    },
    {
      icon: '🇲🇦',
      label: { ar: 'مغربي 100%', fr: '100% Marocain' },
    },
    {
      icon: '📵',
      label: { ar: 'بلا إشهارات', fr: 'Sans publicités' },
    },
    {
      icon: '☁️',
      label: { ar: 'ما كيضيعش', fr: 'Jamais perdu' },
    },
  ];

  const whyDifferent = [
    {
      icon: Shield,
      title: { ar: 'ما عمرها تضيع', fr: 'Jamais de perte' },
      description: {
        ar: 'على عكس التطبيقات الأخرى، سمارت كارني عندو backup تلقائي دائم',
        fr: 'Contrairement aux autres apps, Smart Karni a une sauvegarde automatique permanente'
      },
    },
    {
      icon: Users,
      title: { ar: 'دعم حقيقي', fr: 'Support réel' },
      description: {
        ar: 'شات بوت 24/7 + فريق بشري كيجاوب بالدارجة',
        fr: 'Chatbot 24/7 + équipe humaine qui répond en darija'
      },
    },
    {
      icon: Gift,
      title: { ar: '100% مجاني', fr: '100% Gratuit' },
      description: {
        ar: 'بلا اشتراك، بلا إعلانات، بلا حدود. مجاني للأبد.',
        fr: 'Sans abonnement, sans publicités, sans limites. Gratuit pour toujours.'
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('علاش سمارت كارني مختلف؟', 'Pourquoi Smart Karni est différent?')}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {t(
            'بنينا سمارت كارني باش نحلو المشاكل لي كيعانيو منها التجار المغاربة مع التطبيقات الأخرى',
            'Nous avons construit Smart Karni pour résoudre les problèmes des commerçants marocains avec les autres apps'
          )}
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="trust-badge"
            >
              <span className="text-xl">{badge.icon}</span>
              <span>{isArabic ? badge.label.ar : badge.label.fr}</span>
            </div>
          ))}
        </div>

        {/* Why We're Different */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {whyDifferent.map((item, index) => (
            <div
              key={index}
              className="notebook-card text-center"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">
                {isArabic ? item.title.ar : item.title.fr}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isArabic ? item.description.ar : item.description.fr}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">🚀</span>
            <h3 className="text-xl font-bold">
              {t('ابدأ دابا!', 'Commencez maintenant!')}
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            {t(
              'سجل مجانا و بدأ تسيّر ديون الزبائن ديالك بكل سهولة',
              'Inscrivez-vous gratuitement et gérez les dettes de vos clients facilement'
            )}
          </p>
          <Link to="/register" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
            <Users className="w-5 h-5" />
            {t('سجل مجانا', 'S\'inscrire gratuitement')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
