import { useUserContext } from '@/context/auth/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useAuthGuard() {
  const { userInfo } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    console.log('auth guard!!');
    if (!userInfo) {
      alert('로그인이 필요합니다..!');
      router.back();
    }
  }, [userInfo, router]);
  return;
}
