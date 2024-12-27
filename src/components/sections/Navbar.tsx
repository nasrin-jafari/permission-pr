'use client';

import React from 'react';
import Link from 'next/link';
import { pages } from '@/constants';
import useAuth from '@/hooks/useAuth';

const Navbar: React.FC = () => {
  const { permissions, isLoggedIn } = useAuth();

  const allowedPages = pages.filter(
    (menu) => permissions?.includes('all') || permissions?.includes(menu.path)
  );

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <nav className="mb-4 flex h-14 w-full items-center justify-between bg-dark-foreground p-4 text-white shadow-lg">
      <h1>خوش آمدید</h1>
      <ul className="flex space-x-4 rtl:space-x-reverse">
        {allowedPages.map((menu) => (
          <li className="cursor-pointer hover:text-blue-500" key={menu.label}>
            <Link href={menu.path}>{menu.label}</Link>
          </li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="cursor-pointer text-red-600">
          خروج
        </button>
      ) : (
        <p> psp express task</p>
      )}
    </nav>
  );
};

export default Navbar;
