import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LayoutTemplate, Archive, Gem, Sparkles } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: LayoutTemplate,
    name: 'Custom Layouts',
    description:
      'L-shaped, U-shaped, island, straight, or parallel — made to suit your space.',
  },
  {
    icon: Gem,
    name: 'High-Grade Materials',
    description:
      'Water-resistant HDHMR, long-life hardware, and finishes that stay beautiful for years.',
  },
  {
    icon: Archive,
    name: 'Smart Storage Systems',
    description:
      'Pull-outs, tall units, corner mechanisms, organizers, and vertical storage.',
  },
  {
    icon: Sparkles,
    name: 'Easy Maintenance',
    description:
      'Scratch-resistant, stain-resistant finishes that are simple to clean and maintain.',
  },
];

export function ModularKitchens() {
  const kitchenImages = [
    PlaceHolderImages.find((img) => img.id === 'kitchen-1'),
    PlaceHolderImages.find((img) => img.id === 'kitchen-2'),
    PlaceHolderImages.find((img) => img.id === 'kitchen-3'),
  ].filter(Boolean);

  return (
    <section id="kitchens" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-left">
                Modular Kitchens: <br />
                <span className="text-primary">
                  Premium Look. Smart Design. Everyday Convenience.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 text-left">
                Your kitchen should feel stylish and work beautifully every day.
                Our designs combine smart storage, durable materials, and a premium
                finish that fits your budget.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start gap-3">
                  <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">
                      {feature.name}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✔ Button Section */}
            <div className="text-left">
              <Button size="lg" className="mt-4" asChild>
                <Link href="#consultation-form">GET A FREE KITCHEN QUOTE</Link>
              </Button>

              {/* ⭐ Added Content (Nothing Deleted) */}
              <div className="mt-6 space-y-3 text-foreground/80 text-sm sm:text-base">
                <p>• Modern light-wood kitchen with clean lines</p>
                <p>• Sleek acrylic kitchen with integrated appliances</p>
                <p>• Bright white laminate kitchen with warm wooden counters</p>
              </div>
            </div>
          </div>

          {/* ✔ Image Grid — unchanged */}
          <div className="grid grid-cols-2 gap-4">
            {kitchenImages[0] && (
              <div className="aspect-[4/3] relative col-span-2">
                <Image
                  src={kitchenImages[0].imageUrl}
                  alt={kitchenImages[0].description}
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={kitchenImages[0].imageHint}
                />
              </div>
            )}
            {kitchenImages[1] && (
              <div className="aspect-square relative">
                <Image
                  src={kitchenImages[1].imageUrl}
                  alt={kitchenImages[1].description}
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={kitchenImages[1].imageHint}
                />
              </div>
            )}
            {kitchenImages[2] && (
              <div className="aspect-square relative">
                <Image
                  src={kitchenImages[2].imageUrl}
                  alt={kitchenImages[2].description}
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={kitchenImages[2].imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
