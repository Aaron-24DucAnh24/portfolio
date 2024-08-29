import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Body } from '@/components/general/Body';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </body>
    </html>
  );
}
