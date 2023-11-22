'use client';

import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import { useUserContext } from '@/context/auth/UserContext';
import service from '@/service/client';
import { LoginReq, RegisterReq } from '@/service/client/types/auth';
import { useMutation } from '@tanstack/react-query';

export default function useAuth() {
  const { setUserInfo, resetUserInfo } = useUserContext();
  const { handleClose } = useAuthFormContext();

  const { mutate: loginMutate } = useMutation({
    mutationFn: (req: LoginReq) => service.auth.login(req),
    onSuccess: (res) => {
      const token = res.headers.authorization.split(' ')[1];
      const refreshToken = res.headers.refreshtoken as string;
      console.log(res);
      // 나중에 쿠키로 바꾸거나 클래스화 예정
      localStorage.setItem('access-token', token);
      localStorage.setItem('refresh-token', refreshToken);
      setUserInfo((user) => ({ ...user, token: token }));
      handleClose();
    },
  });

  const { mutate: registerMutate } = useMutation({
    mutationFn: (req: RegisterReq) => service.auth.register(req),
    onSuccess: (res) => {
      console.log('register success res', res);
    },
  });

  const { mutate: logoutMutate } = useMutation({
    mutationFn: () => service.auth.logout(),
    onSuccess: () => resetUserInfo(),
  });

  return { loginMutate, registerMutate, logoutMutate };
}
