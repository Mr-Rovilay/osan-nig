"use client";

import { useAuth } from '@/context/AuthContext';
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [user, router]);

  if (!user) {
    return null; // Optionally, return a loading spinner or null while redirecting
  }

  return <>{children}</>;
};

export default ProtectedLayout;
