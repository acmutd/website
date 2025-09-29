import Navbar from '@/components/Home/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import QueryProvider from '@/components/QueryProvider';

export const metadata: Metadata = {
  title: {
    default: 'ACM UTD - Association for Computing Machinery at UT Dallas',
    template: '%s | ACM UTD',
  },
  description:
    "We're the Association for Computing Machinery at UT Dallas. We're focused on giving back to the engineering community here at UT Dallas and beyond through events, projects, HackUTD, and more.",
  keywords: [
    'ACM',
    'UT Dallas',
    'UTD',
    'Association for Computing Machinery',
    'computer science',
    'engineering',
    'technology',
    'programming',
    'hackathon',
    'HackUTD',
    'student organization',
    'coding',
    'software development',
    'research',
    'projects',
    'community',
    'education',
    'mentorship',
  ],
  authors: [{ name: 'ACM UTD' }],
  creator: 'ACM UTD',
  publisher: 'ACM UTD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://acmutd.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ACM UTD - Association for Computing Machinery at UT Dallas',
    description:
      "We're the Association for Computing Machinery at UT Dallas. We're focused on giving back to the engineering community here at UT Dallas and beyond through events, projects, HackUTD, and more.",
    url: 'https://acmutd.co',
    siteName: 'ACM UTD',
    images: [
      {
        url: '/assets/chapter-logo.png',
        width: 1200,
        height: 630,
        alt: 'ACM UTD Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACM UTD - Association for Computing Machinery at UT Dallas',
    description:
      "We're the Association for Computing Machinery at UT Dallas. We're focused on giving back to the engineering community here at UT Dallas and beyond through events, projects, HackUTD, and more.",
    images: ['/assets/chapter-logo.png'],
    creator: '@acmutd',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-background">
        <QueryProvider>
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
