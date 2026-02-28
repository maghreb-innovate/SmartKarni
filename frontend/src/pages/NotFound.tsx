import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center py-16" dir="rtl">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-2">
            {t('هاد الصفحة ما كايناش', 'Cette page n\'existe pas')}
          </p>
          <p className="text-muted-foreground mb-8">
            {t(
              'يمكن الرابط غالط أو الصفحة تمسحات',
              'Le lien est peut-être incorrect ou la page a été supprimée'
            )}
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            {t('رجع للرئيسية', 'Retour à l\'accueil')}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
