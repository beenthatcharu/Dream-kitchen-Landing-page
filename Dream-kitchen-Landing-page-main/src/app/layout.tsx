import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { FloatingEnquireButtonWrapper } from '@/components/floating-enquire-button-wrapper';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Dream Kitchen',
  description: 'Bespoke interiors by Dream kitchen, designed for your lifestyle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17726348040"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17726348040');
          `}
        </Script>

        <Script
          id="gtag-phone-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', 'AW-17726348040/vH7SCOWz7sUbEIi2yoRC', {
                phone_conversion_number: '078950 92061'
              });
            `,
          }}
        />

        <Script
          id="gtag-phone-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', 'AW-17726348040/HYx0CPeW-sUbEIi2yoRC', {
                phone_conversion_number: '078170 00873'
              });
            `,
          }}
        />

        <Script
          id="gtag-phone-3"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', 'AW-17726348040/oH2FCPSW-sUbEIi2yoRC', {
                phone_conversion_number: '078170 00879'
              });
            `,
          }}
        />
      </head>

      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased'
        )}
      >
        <Header />
        <main>{children}</main>
        <Toaster />
        <FloatingEnquireButtonWrapper />
      </body>
    </html>
  );
}