'use client'; // Error components must be Client Components

import { useUserContext } from '@/context/auth/UserContext';
import { useAuthReissue } from '@/hooks/api/auth/useAuth';
import useCustomRouter from '@/hooks/common/useCustomRouter';
import { ErrorCode, GlobalErrorException } from '@/util/lib/exception';
import { useEffect } from 'react';

export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error | GlobalErrorException;
  reset: () => void;
}) {
  const reissueMutate = useAuthReissue();
  const { resetUserInfo } = useUserContext();
  const router = useCustomRouter();

  useEffect(() => {
    // ServerRes인 경우
    if (error.message === ErrorCode.ACCESS_TOKEN_EXPIRED.message) {
      alert('세션이 만료되어 재발급 처리중입니다.');
      reissueMutate.mutate();
    }
    if (error instanceof GlobalErrorException) {
      // 토큰이 재발급 될 수 없는 상황
      resetUserInfo();
    }

    router.push('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => {
          reset();
        }}
      >
        에러
      </button>
    </div>
  );
}
