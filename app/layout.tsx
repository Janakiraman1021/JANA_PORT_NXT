import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JanakiRaman K - Portfolio",
  description: "Full Stack Developer & Blockchain Enthusiast",
  icons: {
    icon: [
      {
        url: "https://jr-portfolio-gilt.vercel.app/static/media/HeroImage.f20a12b26731c4549fbc.jpg",
        href: "https://jr-portfolio-gilt.vercel.app/static/media/HeroImage.f20a12b26731c4549fbc.jpg",
      },
    ],
    shortcut: "https://jr-portfolio-gilt.vercel.app/static/media/HeroImage.f20a12b26731c4549fbc.jpg",
    apple: "https://jr-portfolio-gilt.vercel.app/static/media/HeroImage.f20a12b26731c4549fbc.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
