import Navbar from '@/components/Home/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ACM UTD',
  description:
    "We're the Association for Computing Machinery at UT Dallas. We're focused on giving back to the engineering community here at UT Dallas and beyond through events, projects, HackUTD, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
