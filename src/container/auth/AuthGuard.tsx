'use client';
import { useUserContext } from '@/context/auth/UserContext';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

export default function AuthGuard({ children }: PropsWithChildren) {
  const { userInfo } = useUserContext();
  const router = useRouter();
  if (!userInfo) {
    alert('로그인이 필요합니다..!');
    router.back();
  }
  return <>{children}</>;
}
