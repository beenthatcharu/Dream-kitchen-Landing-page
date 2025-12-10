import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does your budget planning work?',
    answer:
      'We design based on your space and budget, offering premium-looking solutions without unnecessary add-ons.',
  },
  {
    question: 'Do you offer site measurements and 3D designs?',
    answer:
      'Absolutely. We specialize in space-saving solutions and smart designs that make compact homes feel more spacious and functional. Our modular furniture is perfect for maximizing utility in smaller areas.',
  },
  {
    question: 'What materials do you use?',
    answer:
      'We use HDHMR, soft-close hardware, and high-quality laminates, acrylic, and PU finishes.',
  },

  // ⭐ NEW FAQ 1 (added)
  {
    question: 'Is after-sales support provided?',
    answer:
      'Yes, our in-house team handles installation, service, and long-term support.',
  },

  // ⭐ NEW FAQ 2 (added)
  {
    question: 'Can you work within tight budgets?',
    answer:
      'Absolutely. Our speciality is giving a premium finish without overspending.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-headline font-bold">
            Quick Answers to <span className="text-primary">Your Questions</span>
          </h3>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-headline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
