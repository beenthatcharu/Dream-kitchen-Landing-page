import {
  Gem,
  Medal,
  Users,
  Timer,
  LifeBuoy,
  CheckCircle2,
  Wrench,
  Palette,
  PiggyBank,
  Briefcase,
  Handshake,
} from 'lucide-react';

const benefits = [
  {
    icon: Medal,
    title: 'German-Style Design Workflow',
    description:
      'Precision planning, ergonomic layouts, and smooth functionality in every corner.',
  },
  {
    icon: Wrench,
    title: 'Durable Materials You Can Trust',
    description:
      'HDHMR boards, soft-close hardware, and long-lasting hinges for daily use.',
  },
  {
    icon: Palette,
    title: 'Premium Finishes',
    description:
      'High-end laminate, acrylic, and PU options that give your kitchen a modern, designer look.',
  },
  {
    icon: PiggyBank,
    title: 'Optimised Pricing',
    description:
      'We offer premium finishes and sturdy build quality without inflating your cost.',
  },
  {
    icon: Briefcase,
    title: '20+ Years of Experience',
    description:
      'A team trusted by hundreds of homeowners for quality, finish, and delivery.',
  },
  {
    icon: Handshake,
    title: 'Free Design Consultation',
    description:
      'Personalised 3D designs and budget mapping at no additional cost.',
  },
  {
    icon: Users,
    title: 'In-House Installation & After-Sales Team',
    description:
      'No outsourcing. No delays. No excuses. We take responsibility end-to-end.',
  },
];

export function WhyChooseUs() {
  return (
    <>
      <section id="about" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Why <span className="text-primary">Dream Kitchens?</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-12">
              We deliver premium modular kitchens that combine smart design,
              high-grade materials, and seamless execution — all while keeping your
              budget in control. Here’s why clients trust us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon; // ⭐ FIXED — dynamic JSX component must be capitalized

              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-background hover:bg-white/5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="h-8 w-8 shrink-0 text-primary mt-1" />

                    <div>
                      <h3 className="text-lg font-bold font-headline mb-2 text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/70">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ⭐ NEW SECTION BELOW */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Clients Prefer Us <span className="text-primary">Because:</span>
          </h3>

          <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed">
            “We give them a premium look without making them feel they chose something cheap.”
          </p>
        </div>
      </section>
    </>
  );
}
