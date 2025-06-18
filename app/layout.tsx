import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Dr. Joe Kravitz DDS | 3 Minute Implant™ | Emergency Dental Care Rockville MD | Top Doctor 2025',
  description: 'Top Doctor 2025 Dr. Joe Kravitz offers revolutionary 3 Minute Implant™ procedure in Rockville, MD. Emergency dental care, dental implants, and prosthodontic services. Call 301-761-4840.',
  keywords: 'Dr Joe Kravitz, 3 Minute Implant, dental implants Rockville MD, emergency dental care, prosthodontist, Top Doctor 2025, dental implants Maryland, same day dental implants, Rockville dentist, emergency dentist',
  authors: [{ name: 'Dr. Joseph Kravitz DDS' }],
  creator: 'Kravitz Dentistry PC',
  publisher: 'Kravitz Dentistry PC',
  robots: 'index, follow',
  openGraph: {
    title: 'Dr. Joe Kravitz DDS | 3 Minute Implant™ | Top Doctor 2025 | Rockville MD',
    description: 'Experience the revolutionary 3 Minute Implant™ by Top Doctor 2025 Dr. Joe Kravitz. Emergency dental care and dental implants in Rockville, Maryland.',
    url: 'https://kravitzdentistry.com',
    siteName: 'Kravitz Dentistry',
    images: [
      {
        url: '/images/Dr.JoeKravitz.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Joe Kravitz DDS - Top Doctor 2025 - 3 Minute Implant Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Joe Kravitz DDS | 3 Minute Implant™ | Top Doctor 2025',
    description: 'Revolutionary 3 Minute Implant™ procedure by Top Doctor 2025 Dr. Joe Kravitz in Rockville, MD. Emergency dental care available.',
    images: ['/images/Dr.JoeKravitz.jpg'],
  },
  alternates: {
    canonical: 'https://kravitzdentistry.com',
  },
  other: {
    'geo.region': 'US-MD',
    'geo.placename': 'Rockville',
    'geo.position': '39.084007;-77.152758',
    'ICBM': '39.084007, -77.152758',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://kravitzdentistry.com/#dentist",
        "name": "Dr. Joseph Kravitz",
        "alternateName": "Dr. Joe Kravitz",
        "description": "Top Doctor 2025 prosthodontist specializing in the revolutionary 3 Minute Implant™ procedure",
        "url": "https://kravitzdentistry.com",
        "telephone": "+1-301-761-4840",
        "email": "info@kravitzdentistry.com",
        "image": "https://kravitzdentistry.com/images/Dr.JoeKravitz.jpg",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Insurance",
        "currenciesAccepted": "USD",
        "openingHours": "Mo-Th 08:00-17:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "121 Congressional Lane Suite #605",
          "addressLocality": "Rockville",
          "addressRegion": "MD",
          "postalCode": "20852",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.084007",
          "longitude": "-77.152758"
        },
        "areaServed": [
          "Rockville, MD",
          "Bethesda, MD",
          "Gaithersburg, MD",
          "Silver Spring, MD",
          "Potomac, MD",
          "Washington, DC"
        ],
        "hasCredential": "DDS",
        "award": "Top Doctor 2025",
        "knowsAbout": [
          "Dental Implants",
          "3 Minute Implant",
          "Emergency Dental Care",
          "Prosthodontics",
          "Oral Surgery"
        ]
      },
      {
        "@type": "DentalClinic",
        "@id": "https://kravitzdentistry.com/#clinic",
        "name": "Kravitz Dentistry PC",
        "description": "Specialty dental practice offering revolutionary 3 Minute Implant™ procedure and emergency dental care in Rockville, Maryland",
        "url": "https://kravitzdentistry.com",
        "telephone": "+1-301-761-4840",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Insurance",
        "currenciesAccepted": "USD",
        "openingHours": "Mo-Th 08:00-17:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "121 Congressional Lane Suite #605",
          "addressLocality": "Rockville",
          "addressRegion": "MD",
          "postalCode": "20852",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.084007",
          "longitude": "-77.152758"
        },
        "hasMap": "https://maps.google.com/?q=121+Congressional+Lane+Suite+605,+Rockville,+MD+20852",
        "medicalSpecialty": [
          "Prosthodontics",
          "Dental Implants",
          "Emergency Dentistry"
        ],
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "3 Minute Implant™",
            "description": "Revolutionary dental implant procedure completed in just 3 minutes"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Emergency Dental Care",
            "description": "Immediate dental care for urgent dental situations"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Dental Implants",
            "description": "Permanent tooth replacement solutions"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kravitzdentistry.com/#website",
        "url": "https://kravitzdentistry.com",
        "name": "Kravitz Dentistry",
        "description": "Dr. Joe Kravitz DDS - Top Doctor 2025 offering 3 Minute Implant™ and emergency dental care in Rockville, MD",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kravitzdentistry.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="canonical" href="https://kravitzdentistry.com" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}