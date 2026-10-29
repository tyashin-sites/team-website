import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteUrl } from '@/lib/seo';

const heading = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-heading', display: 'swap' });
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl('/')),
  title: { default: 'Aapastech: software, 3D and AR, analytics and consulting', template: '%s | Aapastech' },
  description:
    'Aapastech builds and runs Tyashin, Thridify, YOM and WonderlyAR, and offers software development and consulting to businesses in India, Europe and beyond.',
  applicationName: 'Aapastech',
};

export const viewport: Viewport = { themeColor: '#f6f5f1' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`} style={{ backgroundColor: '#f6f5f1' }}>
      <body style={{ backgroundColor: '#f6f5f1' }} className="min-h-screen font-body">
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
