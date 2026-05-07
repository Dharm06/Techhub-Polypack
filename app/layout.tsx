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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
