import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  metadataBase: new URL('https://heydaman.com'),
  openGraph: {
    title: 'Daman Sharma',
    description: 'Portfolio Coming Soon',
    url: 'https://heydaman.com',
    siteName: 'Daman Sharma',
    images: [
      {
        url: 'https://heydaman.com/profile.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
