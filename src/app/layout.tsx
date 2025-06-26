import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wynter Comfort - Creative Website Developer',
  description: 'Portfolio showcasing modern web development skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
      </body>
    </html>
  )
}