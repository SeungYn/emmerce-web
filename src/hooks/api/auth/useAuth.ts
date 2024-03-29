'use client';

import { FormState } from '@/container/auth/AuthFormContiner';
import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import { useUserContext } from '@/context/auth/UserContext';
import browserStorage from '@/db';
import service from '@/service/client';
import { LoginReq, RegisterReq } from '@/service/types/auth';
import { COOKIE_OPTIONS, TOKEN_NAME } from '@/util/constants/auth';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

export default function useAuth() {
  const { resetUserInfo } = useUserContext();

  const { mutate: logoutMutate } = useMutation({
    mutationFn: () => service.auth.logout(),
    onMutate: () => resetUserInfo(),
    onSettled: () => resetUserInfo(),
  });

  return { logoutMutate };
}

export function useAuthLogin(resetForm: () => void) {
  const { setUserInfo } = useUserContext();
  const { handleClose } = useAuthFormContext();

  const { mutate: loginMutate } = useMutation({
    mutationFn: (req: LoginReq) => service.auth.login(req),
    onSuccess: (res) => {
      const token = res.headers.authorization.split(' ')[1];
      const refreshToken = res.headers.refreshtoken as string;

      localStorage.setItem(TOKEN_NAME.access, token);
      localStorage.setItem(TOKEN_NAME.refesh, refreshToken);
      browserStorage.cookie.setCookie(TOKEN_NAME.access, token, {
        'max-age': COOKIE_OPTIONS['max-age'],
      });
      browserStorage.cookie.setCookie(TOKEN_NAME.refesh, refreshToken, {
        'max-age': COOKIE_OPTIONS['max-age'],
      });
      setUserInfo((user) => ({ ...user, token: token }));
      resetForm();
      handleClose();
    },
    onError: () => {
      alert('아이디나 비밀번호가 일치하지 않습니다. 다시 시도해주세요');
    },
  });

  return loginMutate;
}

export function useAuthRegister(
  setFormState: Dispatch<SetStateAction<FormState>>,
  resetForm: () => void
) {
  const registerMutate = useMutation({
    mutationFn: (req: RegisterReq) => service.auth.register(req),
    onSuccess: (res) => {
      alert('회원가입이 완료되었습니다.');
      resetForm();
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

export function useNameCheckDuplicate(
  setIsDuplicate: Dispatch<
    SetStateAction<{
      check: boolean;
      isDuplicate: boolean;
    }>
  >
) {
  const { mutate } = useMutation({
    mutationFn: (name: string) => service.auth.checkDuplicate(name),
    onSuccess: () => {
      setIsDuplicate({ check: true, isDuplicate: false });
    },
    onError: () => {
      setIsDuplicate({ check: true, isDuplicate: true });
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
