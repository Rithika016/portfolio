import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CommandPalette } from '@/components/CommandPalette';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rithika.dev'),
  title: {
    default: 'Rithika Lakshmi Padala — Software Engineer',
    template: '%s | Rithika Lakshmi Padala',
  },
  description: 'Software Engineer specializing in distributed systems, backend engineering, and full-stack development. Building scalable, reliable, and performant systems.',
  keywords: ['software engineer', 'backend developer', 'distributed systems', 'full-stack', 'Rithika Padala'],
  authors: [{ name: 'Rithika Lakshmi Padala' }],
  creator: 'Rithika Lakshmi Padala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rithika.dev',
    siteName: 'Rithika Lakshmi Padala',
    title: 'Rithika Lakshmi Padala — Software Engineer',
    description: 'Software Engineer specializing in distributed systems, backend engineering, and full-stack development.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rithika Lakshmi Padala' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rithika Lakshmi Padala — Software Engineer',
    description: 'Software Engineer specializing in distributed systems, backend engineering, and full-stack development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-primary text-text-secondary font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
