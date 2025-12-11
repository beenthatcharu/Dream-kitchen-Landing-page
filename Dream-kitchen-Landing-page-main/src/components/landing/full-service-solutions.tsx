import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const solutions = [
  {
    id: 'Wardrobes',
    title: 'Wardrobes',
    description:
      'Modular wardrobes with premium finishes and thoughtful storage.',
  },
  {
    id: 'Bathroom Vanities',
    title: 'Bathroom Vanities',
    description: 'Moisture-proof, stylish, and built for everyday use.',
  },
  {
    id: 'Entertainment Units',
    title: 'Entertainment Units',
    description:
      'Designer units with smart lighting, clean structure, and premium finishes.',
  },
  {
    id: 'Complete Home Solutions',
    title: 'Complete Home Solutions',
    description:
      'End-to-end project execution for a cohesive, beautifully designed home.',
  },
 
 
];

// ⭐ Normalize IDs to avoid mismatches (THIS FIXES THE ERROR)
const normalize = (str = '') =>
  str.toLowerCase().replace(/[^a-z0-9]/g, '');

export function FullServiceSolutions() {
  const solutionImages = solutions.map((solution) => {
    const placeholder =
      PlaceHolderImages.find(
        (img) => normalize(img.id) === normalize(solution.id)
      ) || {}; // ⭐ fallback ensures nothing is undefined

    return { ...solution, ...placeholder };
  });

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Our Complete <span className="text-primary"> Interior Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 mb-12">
            We support you in more than just kitchens — offering expert craftsmanship across your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionImages.map((solution, index) => (
            <div
              key={solution.id ?? solution.title ?? index}
              className="group rounded-lg border border-border bg-background overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                {solution.imageUrl ? (
                  <Image
                    src={solution.imageUrl}
                    alt={solution.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={solution.imageHint}
                  />
                ) : (
                  // fallback UI so React never crashes
                  <div className="w-full h-full bg-muted flex items-center justify-center text-foreground/60 text-sm">
                    Image coming soon
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold font-headline mb-2 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/70">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
