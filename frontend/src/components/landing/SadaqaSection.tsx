import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Clock, Shield } from 'lucide-react';

const SadaqaSection = () => {
  const { t, isArabic } = useLanguage();

  const steps = [
    {
      icon: '💰',
      title: { ar: 'تبرع بمبلغ', fr: 'Faites un don' },
      description: {
        ar: 'اختار المبلغ لي بغيتي تتصدق بيه',
        fr: 'Choisissez le montant que vous souhaitez donner'
      },
    },
    {
      icon: '🔄',
      title: { ar: 'التوزيع التلقائي', fr: 'Distribution automatique' },
      description: {
        ar: 'سمارت كارني كيوزع على الديون الأقدم أولا (FIFO)',
        fr: 'Smart Karni distribue aux dettes les plus anciennes (FIFO)'
      },
    },
    {
      icon: '📱',
      title: { ar: 'إشعار المستفيد', fr: 'Notification' },
      description: {
        ar: 'المستفيد كيتوصل برسالة WhatsApp بالخبر السعيد',
        fr: 'Le bénéficiaire reçoit un message WhatsApp'
      },
    },
    {
      icon: '🤲',
      title: { ar: 'الأجر والثواب', fr: 'La récompense' },
      description: {
        ar: 'صدقتك كتوصل لمن يستحقها - الله يجازيك خيرا',
        fr: 'Votre sadaqa atteint ceux qui en ont besoin'
      },
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: { ar: 'شفافية كاملة', fr: 'Transparence totale' },
      description: {
        ar: 'شوف فين مشات صدقتك بالضبط',
        fr: 'Voyez exactement où va votre don'
      },
    },
    {
      icon: Clock,
      title: { ar: 'الأقدم أولا', fr: 'Les plus anciennes d\'abord' },
      description: {
        ar: 'الديون القديمة كتخلص قبل الجديدة',
        fr: 'Les vieilles dettes sont payées en premier'
      },
    },
    {
      icon: Users,
      title: { ar: 'مجهول أو معروف', fr: 'Anonyme ou pas' },
      description: {
        ar: 'اختار واش تبغي اسمك يبان أو لا',
        fr: 'Choisissez si vous voulez être anonyme'
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-accent/5 to-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
            <span className="text-3xl">🤲</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('صدقة - ساعد الآخرين', 'Sadaqa - Aidez les autres')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'ميزة فريدة في سمارت كارني: تقدر تدفع ديون ناس آخرين كصدقة. التطبيق كيوزع تبرعك على المحتاجين بطريقة عادلة.',
              'Une fonctionnalité unique de Smart Karni: payez les dettes des autres en sadaqa. L\'app distribue votre don aux nécessiteux de manière équitable.'
            )}
          </p>
        </div>

        {/* How it works - Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              <div className="notebook-card text-center relative bg-background">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {isArabic ? step.title.ar : step.title.fr}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isArabic ? step.description.ar : step.description.fr}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">
                  {isArabic ? benefit.title.ar : benefit.title.fr}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isArabic ? benefit.description.ar : benefit.description.fr}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hadith/Quote */}
        <div className="mt-12 text-center">
          <blockquote className="bg-secondary/50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-medium mb-4">
              {t(
                '"من نفّس عن مؤمن كربة من كرب الدنيا، نفّس الله عنه كربة من كرب يوم القيامة، ومن يسّر على معسر، يسّر الله عليه في الدنيا والآخرة، والله في عون العبد ما كان العبد في عون أخيه"',
                '"Celui qui soulage un croyant d\'une difficulté, Allah le soulagera d\'une difficulté au Jour du Jugement. Celui qui facilite à quelqu\'un en difficulté, Allah lui facilitera dans ce monde et dans l\'au-delà. Et Allah aide Son serviteur tant que celui-ci aide son frère."'
              )}
            </p>
            <cite className="text-muted-foreground text-sm">
              {t('— رواه مسلم', '— Rapporté par Muslim')}
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SadaqaSection;
