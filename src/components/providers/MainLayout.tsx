import { MainLayoutProps } from '@/types';
import Navbar from '@/components/sections/Navbar';

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-dark-bg pb-10">
      <Navbar />
      <div className="flex min-h-[84vh] w-[90%] items-center justify-center rounded-lg bg-dark-foreground p-6 text-white shadow-lg dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
}
