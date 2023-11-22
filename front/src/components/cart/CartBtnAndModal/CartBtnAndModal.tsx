'use client';

import MotionBG from '@/components/common/framer-motion/MotionBG/MotionBG';
//import ModalPortal from '@/components/common/modal/ModalPortal';
import { useCartModalContext } from '@/context/cart/CartModalContext';
import dynamic from 'next/dynamic';
import CartModal from '../CartModal/CartModal';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

const ModalPortal = dynamic(
  () => import('@/components/common/modal/ModalPortal'),
  { ssr: false }
);

export default function CartBtnAndModal() {
  const router = useRouter();

  const { isOpen, handleCloseModal, handleOpenModal } = useCartModalContext();

  const handleMoveCartPage = useCallback(
    () => router.push('/o/cart'),
    [router]
  );

  return (
    <>
      <button
        className='basis-[50%] h-[53px] border border-black font-medium text-xl'
        onClick={handleOpenModal}
      >
        장바구니
      </button>

      <ModalPortal>
        <MotionBG isOpen={isOpen}>
          <CartModal
            handleMoveCartPage={handleMoveCartPage}
            handleCloseModal={handleCloseModal}
          />
        </MotionBG>
      </ModalPortal>
    </>
  );
}
