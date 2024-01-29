import { Montserrat } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'


export const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const playfair_display = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair_display'
})