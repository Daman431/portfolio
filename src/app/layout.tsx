import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property='og:title' content='Daman Sharma' />
        <meta property='og:description' content='Portfolio Coming Soon' />
        <meta property="og:image" content="https://www.heydaman.com/profile.jpg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
