import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ApexCam | Complete Vision & Control for Your Fleet',
  description: 'The ultimate MDVR hardware and mobile app ecosystem for heavy-duty trucks. Live stream, track, and manage your fleet from anywhere.',
  icons: {
    icon: [
      {
        url: '/logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
