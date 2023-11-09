'use client';

import service from '@/service/client';
import { LoginReq, RegisterReq } from '@/service/client/types/auth';
import { useMutation } from '@tanstack/react-query';

export default function useAuth() {
  const { mutate: loginMutate } = useMutation({
    mutationFn: (req: LoginReq) => service.auth.login(req),
    onSuccess: (res) => {
      console.log('login success res', res);
      const token = res.headers.authorization.split(' ')[1];
      console.log('token', token);
      localStorage.setItem('access-token', token);
    },
  });

  const { mutate: registerMutate } = useMutation({
    mutationFn: (req: RegisterReq) => service.auth.register(req),
    onSuccess: (res) => {
      console.log('register success res', res);
    },
  });
  return { loginMutate, registerMutate };
}
