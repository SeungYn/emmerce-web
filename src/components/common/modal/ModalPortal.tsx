'use client';

import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  targetId?: string;
};

export default function ModalPortal({
  children,
  targetId = 'portal',
}: PropsWithChildren<Props>) {
  //if (typeof window === 'undefined') return null;
  const parentNode = document.getElementById(targetId) as Element;
  return createPortal(children, parentNode);
}
