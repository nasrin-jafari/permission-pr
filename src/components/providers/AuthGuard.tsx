'use client';

import React from 'react';
import LoginForm from '@/components/sections/LoginForm';
import Loading from '@/components/common/Loading';
import useAuth from '@/hooks/useAuth';
import { usePathname } from 'next/navigation';
import NotFound from '@/app/not-found';
import AccessDenied from '@/components/common/AccessDenied';
import { pages } from '@/constants';

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn, permissions } = useAuth();
  const pathname = usePathname();

  if (isLoggedIn === null) return <Loading />;

  if (isLoggedIn) {
    const hasAccess =
      permissions?.includes('all') || permissions?.includes(pathname);
    if (hasAccess) return <>{children}</>;

    if (!pages.some((page) => page.path === pathname)) return <NotFound />;

    return <AccessDenied />;
  }

  return <LoginForm />;
};

export default AuthGuard;
