'use client';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
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
    if (typeof window !== 'undefined')
      return { token: localStorage.getItem('access-token') };
    return null;
  });

  const resetUserInfo = useCallback(() => {
    localStorage.removeItem('access-token');
    setUserInfo(null);
  }, []);

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
