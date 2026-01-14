import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ashish Kumar | Full Stack Developer',
  description:
    'Aspiring software developer with expertise in Python, JavaScript, and modern web technologies. View my portfolio and projects.',
  keywords: [
    'Ashish Kumar',
    'Portfolio',
    'Developer',
    'React',
    'Next.js',
    'Full Stack',
    'Web Development',
  ],
  authors: [{ name: 'Ashish Kumar' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ashishkumar.dev',
    siteName: 'Ashish Kumar Portfolio',
    title: 'Ashish Kumar | Full Stack Developer',
    description:
      'Professional portfolio showcasing my projects, skills, and experience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ashish Kumar Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Kumar | Full Stack Developer',
    description: 'Explore my portfolio and latest projects',
    creator: '@Aashishrishu02',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className="bg-slate-950 text-slate-100">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
