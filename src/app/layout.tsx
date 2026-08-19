import type { Metadata } from 'next';
import './globals.css';
import { MuaProvider } from '../context/MuaContext';

export const metadata: Metadata = {
  title: 'Aura Glamour Studio — Premium Makeup Artist & Bridal Suite',
  description: 'Luxury editorial makeup artist website and digital booking business system.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-[#121110] text-[#FAF8F5] antialiased selection:bg-[#D4AF37] selection:text-[#121110]">
        <MuaProvider>
          {children}
        </MuaProvider>
      </body>
    </html>
  );
}
