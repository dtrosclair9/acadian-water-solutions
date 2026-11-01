import type { Metadata } from 'next'
import { Barlow_Semi_Condensed, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BASE_URL, ogImage, site } from '@/lib/site'

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Acadian Water Solutions | Water Filtration in Baton Rouge, LA',
    template: '%s | Acadian Water Solutions',
  },
  description:
    'Whole-house water filtration, softeners, reverse osmosis & well water treatment for Baton Rouge, Denham Springs, Prairieville & beyond. Free in-home water test.',
  keywords: [
    'water filtration Baton Rouge',
    'water softener Baton Rouge LA',
    'reverse osmosis Baton Rouge',
    'well water treatment Louisiana',
    'Acadian Water Solutions',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: site.name,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${sourceSans.variable}`}>
      <body className="font-sans text-zinc-700 antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
