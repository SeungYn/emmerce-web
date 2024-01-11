'use client';

import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import { useUserContext } from '@/context/auth/UserContext';
import { ButtonHTMLAttributes, MouseEvent, useCallback } from 'react';

export default function AuthGuardBtn({
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { userInfo } = useUserContext();
  const { handleOpen } = useAuthFormContext();
  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (!userInfo) return handleOpen();

      onClick && onClick(e);
    },
    [userInfo, handleOpen, onClick]
  );

  return <button onClick={handleClick} {...props} />;
}
