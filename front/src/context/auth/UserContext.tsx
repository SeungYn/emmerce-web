'use client';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type UserContext = {
  user: User | null;
  setUserContext: Dispatch<SetStateAction<User>>;
};

type User = {
  token: string | null;
};

const UserContext = createContext<UserContext>({
  user: {
    token: localStorage.getItem('access-token'),
  },
  setUserContext: () => {},
});

export default function UserContextProvider({ children }: PropsWithChildren) {
  const [userContext, setUserContext] = useState<User>({
    token: localStorage.getItem('access-token'),
  });

  return (
    <UserContext.Provider
      value={{
        user: userContext,
        setUserContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
