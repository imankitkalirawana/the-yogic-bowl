import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Sonner from '@/components/providers';
import { Providers } from './providers';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'The Yogik Bowl',
  description:
    'We have something to energize you throughout the day. Join us for a healthy, delicious experience that supports your well-being and embraces the art of mindful eating. At The Yogic Bowl, we make every bite an opportunity to live with intention and vitality.',
  keywords: [
    'yogic',
    'food',
    'health',
    'wellness',
    'mindfulness',
    'meditation',
    'rishikesh',
    'india',
    'menu',
    'food',
    'restaurant',
    'cafe',
    'yoga',
    'yogic',
    'bowl',
    'rishikesh',
    'india',
    'healthy',
    'delicious',
    'experience',
    'well-being',
    'mindful',
    'eating',
    'intention',
    'vitality'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light">
            {/* <Navbar /> */}
            {children}
            <Footer />
            <Sonner />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
