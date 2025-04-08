import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Hingve | Full Stack Developer | Blockchain Developer",
  description: "Portfolio of Rahul Hingve (rahul hingve) - A passionate full-stack developer specializing in web development and blockchain applications. View my projects, skills, and experience.",
  keywords: "Rahul Hingve, rahul hingve, rahulhingve, rahul hingve portfolio, rahulhingve portfolio, full stack developer, web developer, blockchain developer, portfolio, software engineer, react developer, next.js developer, typescript developer, node.js developer, mern stack developer",
  authors: [{ name: "Rahul Hingve" }],
  creator: "Rahul Hingve",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rahul Hingve Portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahulhingve.pro",
    title: "Rahul Hingve | Full Stack Developer | Blockchain Developer",
    description: "Portfolio of Rahul Hingve (rahul hingve) - A passionate full-stack developer specializing in web development and blockchain applications.",
    siteName: "Rahul Hingve Portfolio",
    images: [
      {
        url: "https://rahulhingve.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Hingve Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Hingve | Full Stack Developer | Blockchain Developer",
    description: "Portfolio of Rahul Hingve (rahul hingve) - A passionate full-stack developer specializing in web development and blockchain applications.",
    creator: "@rahulhingv97727",
    images: ["https://rahulhingve.pro/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
