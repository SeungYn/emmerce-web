'use client';

import service from '@/service/client';
import { LoginReq, RegisterReq } from '@/service/client/types/auth';
import { useMutation } from '@tanstack/react-query';

export default function useAuth() {
  const loginMutate = useMutation({
    mutationFn: (req: LoginReq) => service.auth.login(req),
  });

  const registerMutate = useMutation({
    mutationFn: (req: RegisterReq) => service.auth.register(req),
  });
}
