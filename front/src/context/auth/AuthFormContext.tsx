'use client';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

export type AuthFormContextType = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const initialState = {
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
};

const AuthFormContext = createContext<AuthFormContextType>(initialState);

export default function AuthFormContextProvider({
  children,
}: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <AuthFormContext.Provider value={{ isOpen, handleClose, handleOpen }}>
      {children}
    </AuthFormContext.Provider>
  );
}

export const useAuthFormContext = () => useContext(AuthFormContext);
