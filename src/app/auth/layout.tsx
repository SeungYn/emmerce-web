import AuthPathRevalidate from '@/components/auth/AuthPathRevalidate';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AuthPathRevalidate />
      {children}
    </>
  );
}
