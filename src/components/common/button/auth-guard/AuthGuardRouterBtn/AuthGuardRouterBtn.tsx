'use client';

import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import { useUserContext } from '@/context/auth/UserContext';
import useCustomRouter from '@/hooks/common/useCustomRouter';
import { ButtonHTMLAttributes, MouseEvent, useCallback } from 'react';

export default function AuthGuardRunterBtn({
  targetRouterHref,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { targetRouterHref: string }) {
  const { userInfo } = useUserContext();
  const { handleOpen } = useAuthFormContext();
  const { push } = useCustomRouter();
  const onClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (!userInfo) return handleOpen();

      push(targetRouterHref);
    },
    [userInfo, handleOpen, push, targetRouterHref]
  );

  return <button onClick={onClick} {...props} />;
}
