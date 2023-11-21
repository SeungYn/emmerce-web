'use client';

import { PropsWithChildren, createContext, useCallback, useState } from 'react';

const CartModalContext = createContext({
  isOpen: false,
  handleCloseModal: () => {},
  handleOpenModal: () => {},
});

export default function CartMoalContextProvider({
  children,
}: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = useCallback(() => setIsOpen(false), []);
  const handleOpenModal = useCallback(() => setIsOpen(true), []);

  return (
    <CartModalContext.Provider
      value={{ isOpen, handleCloseModal, handleOpenModal }}
    >
      {children}
    </CartModalContext.Provider>
  );
}
