'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FloatingEnquireButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-2 bg-background/80 backdrop-blur-sm border-t border-border/40">
      <Button asChild className="w-full" size="lg">
        <Link href="#consultation-form">Enquire Now</Link>
      </Button>
    </div>
  );
}
