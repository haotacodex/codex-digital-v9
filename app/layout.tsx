import type { Metadata } from 'next'
import { Inter, Epilogue } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const epilogue = Epilogue({ subsets: ['latin'], variable: '--font-epilogue' })

export const metadata: Metadata = {
  title: 'Codex Digital | Built in-house. Delivered with accountability.',
  description: 'Full-service digital agency in North Sydney. Websites, apps, software, branding, campaigns, and hosting — built in-house by senior practitioners.',
  keywords: ['digital agency sydney', 'web development', 'branding', 'mobile apps', 'custom software', 'north sydney'],
  openGraph: {
    title: 'Codex Digital | Built in-house. Delivered with accountability.',
    description: 'Full-service digital agency in North Sydney. Websites, apps, software, branding, campaigns, and hosting — built in-house by senior practitioners.',
    url: 'https://codexdigital.com.au',
    siteName: 'Codex Digital',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codex Digital | Built in-house. Delivered with accountability.',
    description: 'Full-service digital agency in North Sydney. Websites, apps, software, branding, campaigns, and hosting — built in-house by senior practitioners.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body className={`${inter.variable} ${epilogue.variable}`} suppressHydrationWarning style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main id="main-content" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
