'use client';

import { FormState } from '@/components/auth/AuthForm';
import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import { useUserContext } from '@/context/auth/UserContext';
import browserStorage from '@/db';
import service from '@/service/client';
import { LoginReq, RegisterReq } from '@/service/types/auth';
import { COOKIE_OPTIONS } from '@/util/constants/auth';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

export default function useAuth() {
  const { setUserInfo, resetUserInfo } = useUserContext();
  const { handleClose } = useAuthFormContext();

  const { mutate: loginMutate } = useMutation({
    mutationFn: (req: LoginReq) => service.auth.login(req),
    onSuccess: (res) => {
      const token = res.headers.authorization.split(' ')[1];
      const refreshToken = res.headers.refreshtoken as string;

      // 나중에 쿠키로 바꾸거나 클래스화 예정
      localStorage.setItem('access-token', token);
      localStorage.setItem('refresh-token', refreshToken);
      browserStorage.cookie.setCookie('access-token', token, {
        'max-age': COOKIE_OPTIONS['max-age'],
        samesite: 'lax',
      });
      browserStorage.cookie.setCookie('refresh-token', refreshToken, {
        'max-age': COOKIE_OPTIONS['max-age'],
        samesite: 'lax',
      });
      setUserInfo((user) => ({ ...user, token: token }));
      handleClose();
    },
  });

  const { mutate: registerMutate } = useMutation({
    mutationFn: (req: RegisterReq) => service.auth.register(req),
    onSuccess: (res) => {},
  });

  const { mutate: logoutMutate } = useMutation({
    mutationFn: () => service.auth.logout(),
    onMutate: () => resetUserInfo(),
    onSettled: () => resetUserInfo(),
  });

  return { loginMutate, registerMutate, logoutMutate };
}

export function useAuthRegister(
  setFormState: Dispatch<SetStateAction<FormState>>
) {
  const registerMutate = useMutation({
    mutationFn: (req: RegisterReq) => service.auth.register(req),
    onSuccess: (res) => {
      alert('회원가입이 완료되었습니다.');
      setFormState(FormState.login);
    },
    onError: () => {
      alert('회원가입에 실패했습니다... 다시 시도해 주세요');
    },
  });
  return registerMutate;
}

export function useAuthReissue() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const mutate = useMutation({
    mutationFn: () => {
      return service.auth.reissue();
    },
    onSuccess: () => {
      alert('세션 재발급이 처리되었습니다.');
      location.href = pathname + '?' + searchParams;
    },
  });

  return mutate;
}

export function useAuthCookieReissue() {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: () => {
      alert('재발급 처리중');
      return service.auth.reissue();
    },
    onSuccess: () => {
      alert('세션이 재발급 처리되었습니다.');
      router.back();
    },
    onError: () => router.push('/'),
  });
  return mutate;
}
