// app/layout.tsx
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Venkat S - Senior .NET Full Stack Developer | 18 Years Experience',
  description: 'Senior .NET Full Stack Developer with 18 years of experience in enterprise applications, cloud migrations, and full-stack development. Expert in .NET Core, C#, Azure, AWS, and modern web technologies.',
  keywords: '.NET Developer, Full Stack Developer, C#, Azure, AWS, Microservices, React, TypeScript, Freelance Developer, Enterprise Applications',
  authors: [{ name: 'Venkat S' }],
  creator: 'Venkat S',
  metadataBase: new URL('https://venkat-dev-portfolio.vercel.app'),
  openGraph: {
    title: 'Venkat S - Senior .NET Full Stack Developer',
    description: '18 years of experience in enterprise applications development and delivery',
    type: 'website',
    locale: 'en_US',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}