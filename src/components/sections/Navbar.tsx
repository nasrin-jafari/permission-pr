'use client';

import React from 'react';

const Navbar: React.FC = () => {
  const handleLogout = () => {
    console.log('log out');
  };

  return (
    <nav className="mb-4 flex h-14 w-full items-center justify-between bg-dark-foreground p-4 text-white shadow-lg">
      <h1>خوش آمدید</h1>
      <button onClick={handleLogout} className="cursor-pointer text-red-600">
        خروج
      </button>
    </nav>
  );
};

export default Navbar;
