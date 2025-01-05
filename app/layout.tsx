import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import {ReactLenis} from 'lenis/react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rahul Hingve - Software Engineer',
  description: 'Portfolio of Rahul Hingve, a developer passionate about learning and building open-source software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='!scroll-smooth' lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
      <ReactLenis root >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
              </ReactLenis>
      </body>


    </html>
  )
}
