'use client';
import browserStorage from '@/db';
import { axiosInstance } from '@/network/http';
import service from '@/service/client';
import { TOKEN_NAME } from '@/util/constants/auth';
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
        localStorage.getItem(TOKEN_NAME.access) ||
        browserStorage.cookie.getCookie(TOKEN_NAME.access);
      return token
        ? {
            token:
              localStorage.getItem(TOKEN_NAME.access) ||
              browserStorage.cookie.getCookie(TOKEN_NAME.access),
          }
        : null;
    }
    return null;
  });

  const resetUserInfo = useCallback(() => {
    localStorage.removeItem(TOKEN_NAME.access);
    localStorage.removeItem(TOKEN_NAME.refesh);
    browserStorage.cookie.deleteCookie(TOKEN_NAME.access);
    browserStorage.cookie.deleteCookie(TOKEN_NAME.refesh);
    setUserInfo(null);
  }, []);

  useEffect(() => {
    service.authErrorEventBus.listen(resetUserInfo);
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
