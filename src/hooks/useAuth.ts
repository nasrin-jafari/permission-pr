import { useEffect, useState } from 'react';
import { users } from '@/constants';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [permissions, setPermissions] = useState<string[] | null>(null);

  useEffect(() => {
    const storedUser =
      typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const validUser = users.find(
          (user) =>
            user.username === parsedUser.username &&
            user.password === parsedUser.password
        );

        if (validUser) {
          setIsLoggedIn(true);
          setPermissions(validUser.permissions);
        } else {
          setIsLoggedIn(false);
          setPermissions(null);
        }
      } catch {
        setIsLoggedIn(false);
        setPermissions(null);
      }
    } else {
      setIsLoggedIn(false);
      setPermissions(null);
    }
  }, []);

  return { isLoggedIn, permissions };
};

export default useAuth;
