// app/layout.tsx
import type { Metadata } from "next"
import { Libre_Franklin, Fjalla_One } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
const sans = Libre_Franklin({ subsets: ["latin"], variable: "--font-sans" })
const display = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Aayacare private limited",
  description:
    "Welcome to Aayacare – Where companionship meets care! We're your friendly partners in health, providing warm and comforting companions for hospital visits and more. Because sometimes, a smile is the best medicine. Join us in spreading joy, one visit at a time!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} font-sans md:p-0 bg-white dark:bg-black h-dvh w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Header />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
