'use client'; // Error components must be Client Components

import { useUserContext } from '@/context/auth/UserContext';
import browserStorage from '@/db';
import { useAuthReissue } from '@/hooks/api/auth/useAuth';
import useCustomRouter from '@/hooks/common/useCustomRouter';
import { revalidateAuthPath } from '@/server-actions/auth/revalidatePaths';
import { TOKEN_NAME } from '@/util/constants/auth';
import {
  AuthTokenErrorException,
  ErrorCode,
  GlobalErrorException,
} from '@/util/lib/exception';
import { useEffect } from 'react';

export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error | AuthTokenErrorException;
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
    if (error instanceof AuthTokenErrorException) {
      // 토큰이 재발급 될 수 없는 상황
      alert('세션이 만료되어 로그아웃되었습니다.');
      resetUserInfo();
    }

    if (
      !browserStorage.cookie.getCookie(TOKEN_NAME.access) &&
      !browserStorage.cookie.getCookie(TOKEN_NAME.refesh)
    ) {
      alert('세션이 만료되어 로그아웃되었습니다.');
      resetUserInfo();
    }
    revalidateAuthPath();
    router.push('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div>
      <h2>알수없는 에러 발생</h2>
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
