import type { Metadata } from 'next';
import './globals.css';
import { Vazirmatn } from 'next/font/google';
import MainLayout from '@/components/providers/MainLayout';

const vazirmatn = Vazirmatn({
  subsets: ['latin', 'arabic'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'task psp express',
  description: 'task psp express',
  icons: {
    icon: '/favicon.svg',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} bg-dark-bg`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
