import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export default function ModalPortal({ children }: PropsWithChildren) {
  if (typeof window === 'undefined') return null;
  const parentNode = document.getElementById('protal') as Element;
  return createPortal(children, parentNode);
}
