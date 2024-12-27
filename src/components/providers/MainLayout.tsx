'use client';
import { MainLayoutProps } from '@/types';
import Navbar from '@/components/sections/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function MainLayout({ children }: MainLayoutProps) {
  const queryClient = new QueryClient();

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-dark-bg pb-10">
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <div className="flex min-h-[84vh] w-[90%] items-center justify-center rounded-lg bg-dark-foreground p-6 text-white shadow-lg dark:bg-gray-800">
          {children}
        </div>
      </QueryClientProvider>
    </div>
  );
}
