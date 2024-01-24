'use client';

import useAuthGuard from '@/hooks/auth/useAuthGuard';

export default function AuthGuardHook() {
  useAuthGuard();
  return <></>;
}
