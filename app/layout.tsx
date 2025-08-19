import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HouseIL',
  description: 'Luxurious dark-themed accommodations at HouseIL',
  keywords: ['luxury', 'AirBNB', 'technology', 'HouseIL', 'dark'],
  authors: [{ name: 'HouseIL' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={${inter.className} bg-black text-pink-500 min-h-screen antialiased}>
        <div className="relative min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-black">
          {children}
        </div>
      </body>
    </html>
  )
}
);