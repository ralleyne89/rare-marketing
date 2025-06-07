import { Hero } from '@/components/sections/Hero';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { StatsSection } from '@/components/sections/StatsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
