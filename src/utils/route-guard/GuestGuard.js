import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import useAuth from 'hooks/useAuth';
import { DEFAULT_PATH } from 'config';

// For routes that can only be accessed by authenticated users
function GuestGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      router.push(DEFAULT_PATH);
    }
  }, [isInitialized, isAuthenticated, router]);

  return isInitialized && !isAuthenticated ? <React.Fragment>{children}</React.Fragment> : <React.Fragment />;
}

export default GuestGuard;
