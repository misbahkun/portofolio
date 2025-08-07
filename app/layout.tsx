import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Misbahudin - Web Portofolio",
  description: "Full-Stack Developer passionate about crafting seamless and powerful digital solutions",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Laravel", "Portfolio", "Web Development"],
  authors: [{ name: "Misbahudin", url: "https://github.com/mizzcode" }],
  creator: "Misbahudin",
  publisher: "Misbahudin",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/my.png" as="image" />
        <link rel="preload" href="/CV_Misbahudin.pdf" as="document" />
        
        {/* DNS prefetch untuk external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        
        {/* Additional meta tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Misbahudin" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Misbahudin",
              "jobTitle": "Full-Stack Developer",
              "description": "Full-Stack Developer passionate about crafting seamless and powerful digital solutions",
              "url": "https://mizzcode.my.id",
              "sameAs": [
                "https://github.com/mizzcode",
                "https://linkedin.com/in/misbahudin99"
              ],
              "knowsAbout": [
                "React", "Next.js", "TypeScript", "Node.js", "Laravel", "Flutter",
                "PostgreSQL", "MongoDB", "Docker", "Git", "Tailwind CSS"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}