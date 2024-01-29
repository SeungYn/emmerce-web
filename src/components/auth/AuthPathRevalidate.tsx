'use client';

import { revalidateAuthPath } from '@/server-actions/auth/revalidatePaths';
import { useEffect } from 'react';

export default function AuthPathRevalidate() {
  useEffect(() => {
    revalidateAuthPath();
  }, []);
  return null;
}
