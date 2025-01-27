import type { Metadata } from "next"
import { Alexandria } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const alexandria = Alexandria({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dental Practice Management",
  description: "Comprehensive dental practice management solution",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={alexandria.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

