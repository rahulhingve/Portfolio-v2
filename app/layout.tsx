import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

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
            

      <body  className={inter.className}>
      
      
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
         
          {children}
        </ThemeProvider>
              
      </body>


    </html>
  )
}
