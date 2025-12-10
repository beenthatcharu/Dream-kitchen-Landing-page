import { Hero } from '@/components/landing/hero';
import { WhyChooseUs } from '@/components/landing/why-choose-us';
import { Faq } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { Separator } from '@/components/ui/separator';
import { ModularKitchens } from '@/components/landing/modular-kitchens';
import { FullServiceSolutions } from '@/components/landing/full-service-solutions';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <ModularKitchens />
        <FullServiceSolutions />
        <Faq />
      </main>

      <Separator className="bg-border/50" />
      <Footer />
    </div>
  );
}
