import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Misbahudin - Web Portofolio',
  description: 'Full-Stack Developer passionate about crafting seamless and powerful digital solutions',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Laravel', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Misbahudin', url: 'https://github.com/misbahkun' }],
  creator: 'Misbahudin',
  publisher: 'Misbahudin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel='preload' href='/my.png' as='image' type='image/png' />

        {/* DNS prefetch untuk external domains */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//github.com' />
        <link rel='dns-prefetch' href='//linkedin.com' />

        {/* Additional meta tags */}
        <meta name='theme-color' content='#3b82f6' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Misbahudin' />
        <meta name='format-detection' content='telephone=no' />

        {/* Structured Data - JSON-LD */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Misbahudin',
              jobTitle: 'Full-Stack Developer',
              description: 'Full-Stack Developer passionate about crafting seamless and powerful digital solutions',
              url: 'https://mizzcode.my.id',
              sameAs: ['https://github.com/misbahkun', 'https://linkedin.com/in/misbahudin99'],
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Laravel',
                'Flutter',
                'PostgreSQL',
                'MongoDB',
                'Docker',
                'Git',
                'Tailwind CSS',
              ],
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
