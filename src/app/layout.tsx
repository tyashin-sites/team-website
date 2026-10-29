import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteUrl } from '@/lib/seo';

// Poppins is the Aapastech brand typeface (OFL). Nexa, used in the logo artwork, has no web licence.
const heading = Poppins({ subsets: ['latin'], weight: ['300', '500', '600'], variable: '--font-heading', display: 'swap' });
const body = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl('/')),
  title: { default: 'Aapastech: software, 3D and AR, analytics and consulting', template: '%s | Aapastech' },
  description:
    'Aapastech builds and runs Tyashin, Thridify, YOM and WonderlyAR, and offers software development and consulting to businesses in India, Europe and beyond.',
  applicationName: 'Aapastech',
};

export const viewport: Viewport = { themeColor: '#ffffff' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`} style={{ backgroundColor: '#ffffff' }}>
      <body style={{ backgroundColor: '#ffffff' }} className="min-h-screen font-body">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
