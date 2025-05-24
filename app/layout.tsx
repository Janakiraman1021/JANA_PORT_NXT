import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JanakiRaman K - Software Developer Portfolio",
  description:
    "Portfolio of JanakiRaman K, a passionate second-year IT undergraduate specializing in software development with focus on intuitive solutions.",
  keywords: "JanakiRaman K, Software Developer, IT Student, Portfolio, Web Development, Programming",
  authors: [{ name: "JanakiRaman K" }],
  creator: "JanakiRaman K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev-jr.vercel.app",
    title: "JanakiRaman K - Software Developer Portfolio",
    description:
      "Portfolio of JanakiRaman K, a passionate second-year IT undergraduate specializing in software development.",
    siteName: "JanakiRaman K Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "JanakiRaman K - Software Developer Portfolio",
    description:
      "Portfolio of JanakiRaman K, a passionate second-year IT undergraduate specializing in software development.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
