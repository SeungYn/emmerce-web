'use client';

import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import { useUserContext } from '@/context/auth/UserContext';
import useAuth from '@/hooks/api/auth/useAuth';
import { useEffect, useState } from 'react';

export default function GNBLogin() {
  const [isBrowser, setIsBrowser] = useState(false);
  const { handleOpen } = useAuthFormContext();
  const { userInfo } = useUserContext();
  const { logoutMutate } = useAuth();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser)
    return <button className='text-sm text-zinc-500 self-end'>로그인</button>;

  if (userInfo?.token && isBrowser)
    return (
      <button
        className='text-sm text-zinc-500 self-end'
        onClick={() => {
          logoutMutate();
        }}
      >
        로그아웃
      </button>
    );
  return (
    <button className='text-sm text-zinc-500 self-end' onClick={handleOpen}>
      로그인
    </button>
  );
}
