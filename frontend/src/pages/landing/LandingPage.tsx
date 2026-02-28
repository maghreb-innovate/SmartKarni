import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import TrustSection from '@/components/landing/TrustSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FAQSection from '@/components/landing/FAQSection';
import CTASection from '@/components/landing/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
