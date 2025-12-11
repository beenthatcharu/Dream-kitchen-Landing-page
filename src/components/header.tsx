'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Why Us' },
  { href: '#kitchens', label: 'Kitchens' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-20 items-center justify-between max-w-full px-4 sm:px-8">
        
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://res.cloudinary.com/dtc8bbbco/image/upload/v1765193669/logo2_cueg8i_h6hnt5.png"
            alt="Dream-kitchen Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end space-x-4">
          {/* Added Phone Number for Desktop */}
          <span className="hidden lg:block text-sm font-medium text-black mr-2">
            +91 9403893424
          </span>
          
          <Button asChild className="hidden sm:inline-flex">
            <Link href="#consultation-form">Book Consultation</Link>
          </Button>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left">
                <div className="flex flex-col space-y-6 pt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-lg font-medium text-black/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Added Phone Number for Mobile Menu */}
                  <div className="text-lg font-medium text-black py-2">
                    +91 78950 92061
                  </div>

                  <Button
                    asChild
                    onClick={() => setIsSheetOpen(false)}
                    className="w-full"
                  >
                    <Link href="#consultation-form">Book Consultation</Link>
                  </Button>
                </div>
              </SheetContent>

            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
