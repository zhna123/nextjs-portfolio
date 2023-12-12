import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { inter } from '@/app/ui/fonts'


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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
