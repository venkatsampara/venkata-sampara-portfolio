// app/layout.tsx
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

const SITE_URL = 'https://venkat-dev-portfolio.vercel.app'

export const metadata: Metadata = {
  title: 'Venkat S — Freelance .NET Full Stack Developer & AI/ML Solutions Architect | India',
  description:
    'Freelance Senior .NET Full Stack Developer with 19+ years building enterprise applications, AI/ML solutions, AIOps monitoring, and healthcare platforms. Expert in .NET Core, C#, Azure, AWS, React, and microservices. Available for contract & consulting — India and worldwide.',
  keywords:
    'Freelance .NET Developer, Full Stack Developer India, C# Architect, Azure Consultant, AWS Microservices, AI ML Solutions, AIOps Monitoring, Healthcare Software, Enterprise Applications, React TypeScript Developer, Freelance Software Architect',
  authors: [{ name: 'Venkat S' }],
  creator: 'Venkat S',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Venkat S — Freelance .NET Full Stack Developer & AI/ML Architect',
    description:
      '19+ years delivering enterprise apps, AI/ML solutions, and cloud-native systems. Available for freelance & consulting worldwide.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Venkat S Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Venkat S — Freelance .NET Full Stack Developer & AI/ML Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venkat S — Freelance .NET Full Stack Developer & AI/ML Architect',
    description:
      '19+ years delivering enterprise apps, AI/ML solutions, and cloud-native systems. Available for freelance & consulting worldwide.',
    images: ['/og-image.png'],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Venkat S',
      jobTitle: 'Senior .NET Full Stack Developer & AI/ML Solutions Architect',
      url: SITE_URL,
      sameAs: ['https://www.linkedin.com/in/venkat-s-14a838301/'],
      knowsAbout: [
        '.NET Core',
        'C#',
        'Azure',
        'AWS',
        'React',
        'TypeScript',
        'Microservices',
        'AI/ML',
        'AIOps',
        'Healthcare Software',
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: 'Venkat S — Freelance Development & Consulting',
      description:
        'Freelance full-stack development, AI/ML solutions, enterprise architecture, and cloud consulting services.',
      url: SITE_URL,
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Place', name: 'Worldwide' },
      ],
      serviceType: [
        'Full Stack Development',
        'AI/ML Solutions',
        'Enterprise Architecture',
        'Cloud Migration',
        'AIOps Implementation',
        'Healthcare Software Development',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'venkata.sampara5@gmail.com',
        telephone: '+91-7989245613',
        contactType: 'business inquiries',
        availableLanguage: ['English'],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}