'use client';
import browserStorage from '@/db';
import service from '@/service/client';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserContext = {
  userInfo: User | null;
  setUserInfo: Dispatch<SetStateAction<User | null>>;
  resetUserInfo: () => void;
};

type User = {
  token: string | null;
};

const UserContext = createContext<UserContext>({
  userInfo: null,
  setUserInfo: () => {},
  resetUserInfo: () => {},
});

export default function UserContextProvider({ children }: PropsWithChildren) {
  const [userInfo, setUserInfo] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const token =
        localStorage.getItem('access-token') ||
        browserStorage.cookie.getCookie('access-token');
      return token
        ? {
            token:
              localStorage.getItem('access-token') ||
              browserStorage.cookie.getCookie('access-token'),
          }
        : null;
    }
    return null;
  });

  const resetUserInfo = useCallback(() => {
    localStorage.removeItem('access-token');
    browserStorage.cookie.deleteCookie('access-token');
    setUserInfo(null);
  }, []);

  useEffect(() => {
    service.authErrorEventBus.listen = resetUserInfo;
  }, [resetUserInfo]);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        resetUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
