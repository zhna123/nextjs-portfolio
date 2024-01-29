import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { montserrat, playfair_display } from '@/app/ui/fonts'


export const metadata: Metadata = {
  title: 'Na Zhao Portfolio',
  description: 'Na Zhao Portfolio Built Using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair_display.variable}`}>{children}</body>
    </html>
  )
}
