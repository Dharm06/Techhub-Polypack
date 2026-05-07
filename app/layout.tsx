import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SectionStartObserver from '@/components/section-start-observer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Techhub Polypack | Premium Plastic Crates & Industrial Packaging',
  description: 'Leading manufacturer of high-quality plastic crates, storage boxes, and industrial packaging solutions with international standards. ₹100 crore brand serving 500+ clients across India.',
  generator: 'v0.app',
  openGraph: {
    title: 'Techhub Polypack | Premium Plastic Crates & Industrial Packaging',
    description:
      'Leading manufacturer of high-quality plastic crates, storage boxes, and industrial packaging solutions.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techhub Polypack | Premium Plastic Crates & Industrial Packaging',
    description:
      'Leading manufacturer of high-quality plastic crates, storage boxes, and industrial packaging solutions.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SectionStartObserver />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
