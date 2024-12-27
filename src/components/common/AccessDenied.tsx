import React from 'react';
import Link from 'next/link';

const AccessDenied = () => (
  <div className="flex flex-col items-center justify-center gap-4">
    <p className="text-white">شما به این صفحه دسترسی ندارید.</p>
    <Link
      href="/"
      className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700"
    >
      بازگشت به صفحه اصلی
    </Link>
  </div>
);
export default AccessDenied;
