'use client';

import { useUserContext } from '@/context/auth/UserContext';
import { revalidateAuthPath } from '@/server-actions/auth/revalidatePaths';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const { resetUserInfo } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    alert('로그인 정보가 잘 못 되었습니다. 다시 로그인해 주세요.');
    resetUserInfo();
    revalidateAuthPath();
    router.push('/');
    // eslint-disable-next-line
  }, []);
  return <></>;
}
