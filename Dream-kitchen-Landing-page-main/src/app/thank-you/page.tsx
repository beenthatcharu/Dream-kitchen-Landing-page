
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Script from 'next/script';

export default function ThankYouPage() {
  return (
    <>
      {/* 
        Sample Google Ads Conversion Event Snippet for Thank You Page.
        This sends a conversion event to Google Ads.
        Replace AW-YOUR_CONVERSION_ID/YOUR_CONVERSION_LABEL with your actual conversion ID and label.
      */}
      <Script id="google-ads-conversion">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-17726348040/F-J4CKnvlcQbEIi2yoRC'});
        `}
      </Script>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-background text-center px-4">
        <CheckCircle2 className="h-24 w-24 text-primary mb-6" />
        <h1 className="text-4xl sm:text-5xl font-headline font-bold text-white mb-4">
          Thank You!
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Your consultation request has been received. Our team will get in touch
          with you shortly.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </>
  );
}
