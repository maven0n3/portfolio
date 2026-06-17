import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegister />
        {children}
        <Script
          src="https://quge5.com/88/tag.min.js"
          data-zone="250609"
          async
          data-cfasync="false"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}