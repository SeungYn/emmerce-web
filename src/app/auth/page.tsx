'use client';

import { useAuthCookieReissue } from '@/hooks/api/auth/useAuth';
import { useEffect } from 'react';

export default function Page() {
  const mutate = useAuthCookieReissue();
  useEffect(() => {
    mutate();
    //eslint-disable-next-line
  }, []);

  return <div>리이슈 페이지</div>;
}
