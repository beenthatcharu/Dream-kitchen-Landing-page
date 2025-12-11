'use client';
import { usePathname } from 'next/navigation';
import { FloatingEnquireButton } from '@/components/floating-enquire-button';

export function FloatingEnquireButtonWrapper() {
  const pathname = usePathname();

  if (pathname === '/thank-you') {
    return null;
  }

  return <FloatingEnquireButton />;
}
