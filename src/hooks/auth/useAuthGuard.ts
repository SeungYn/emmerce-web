import { useUserContext } from '@/context/auth/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useAuthGuard() {
  const { userInfo } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    if (!userInfo) {
      alert('로그인이 필요합니다..!');
      router.push('/');
    }
  }, [userInfo, router]);
  return;
}
