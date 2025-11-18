import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Legends | Luxury & Lifestyle Consultancy',
  description: 'A collective of luxury & lifestyle veterans providing expert consulting, advisory, and market expertise to create legendary brands.',
  keywords: 'luxury consultancy, lifestyle consulting, brand development, market entry, expert advisory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
