import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Thumbnail from '@/public/assets/thumbnail.png'
import { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

import '@/app/globals.css'

const inter = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fabriciopirini.com'),
  title: 'Fabricio Pirini - Senior Frontend Engineer & Web Development Expert',
  description:
    'Meet Fabricio Pirini, a seasoned Senior Frontend Engineer with over 6 years of experience specializing in React, Next.js, and Typescript.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fabriciopirini.com',
    title: 'Fabricio Pirini - Senior Frontend Engineer & Web Development Expert',
    description:
      'Meet Fabricio Pirini, a seasoned Senior Frontend Engineer with over 6 years of experience specializing in React, Next.js, and Typescript.',
    siteName: 'Fabricio Pirini',
    images: [
      {
        url: Thumbnail.src,
        width: 400,
        height: 800,
        alt: 'Profile Picture',
      },
    ],
  },
  icons: [
    {
      href: '/favicon.ico',
      sizes: '32x32',
      type: 'image/png',
      url: '/favicon.ico',
    },
  ],
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
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden antialiased ${
          process.env.VERCEL_ENV === 'production' ? '' : 'debug-screens'
        }`}
      >
        {/* <NavBar /> */}
        {children}
        {/* <HeroPattern /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
