import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SectionStartObserver from '@/components/section-start-observer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TechHub Polypack',
  url: 'https://techhubpolypack.com',
  logo: 'https://techhubpolypack.com/logo.png',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://techhubpolypack.com'),
  title: 'TechHub Polypack | Polymer Products',
  description: 'Official Website of TechHub Polypack',
  generator: 'v0.app',
  openGraph: {
    title: 'TechHub Polypack | Polymer Products',
    description: 'Official Website of TechHub Polypack',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechHub Polypack | Polymer Products',
    description: 'Official Website of TechHub Polypack',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <SectionStartObserver />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
