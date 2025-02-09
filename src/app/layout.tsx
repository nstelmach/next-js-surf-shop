import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/src/app/styles/globals.css"
import { BlitzProvider } from "./blitz-client"
import { cn } from "@/src/lib/utils"
import Header from "@/src/components/header/header"
import Footer from "@/src/components/footer/footer"
import { Toaster } from "@/src/components/ui/toaster"
import PageWrapper from "@/src/components/wrapper/page-wrapper"
import { ErrorBoundary } from "@blitzjs/next"
import Error from "@/src/app/error"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Surf Shop",
  description: "Buy cool clothes in our surf shop!",
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-primary font-poppins tracking-widest antialiased",
          poppins.variable
        )}
      >
        <BlitzProvider>
          <ErrorBoundary FallbackComponent={Error}>
            <Header />
            <PageWrapper>{children}</PageWrapper>
            <Footer />
          </ErrorBoundary>
          <Toaster />
        </BlitzProvider>
      </body>
    </html>
  )
}

export default RootLayout
