'use client';

import MotionBG from '@/components/common/framer-motion/MotionBG/MotionBG';
//import ModalPortal from '@/components/common/modal/ModalPortal';
import { useCartModalContext } from '@/context/cart/CartModalContext';
import dynamic from 'next/dynamic';
import CartModal from '../CartModal/CartModal';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useCartAdd, useCartItemList } from '@/hooks/api/cart/useCart';
import { useUserContext } from '@/context/auth/UserContext';
import { useAuthFormContext } from '@/context/auth/AuthFormContext';

const ModalPortal = dynamic(
  () => import('@/components/common/modal/ModalPortal'),
  { ssr: false }
);

type Props = {
  productId: number;
  stockCount: number;
};

export default function CartBtnAndModal({ productId, stockCount }: Props) {
  const router = useRouter();
  const { userInfo } = useUserContext();
  const { handleOpen: handleOpenAuthForm } = useAuthFormContext();
  const { isOpen, handleCloseModal, handleOpenModal } = useCartModalContext();
  const { mutate } = useCartAdd(handleOpenModal);

  const handleMoveCartPage = useCallback(
    () => router.push('/o/cart'),
    [router]
  );

  const onAddCartItem = () => {
    if (!userInfo?.token) handleOpenAuthForm();
    else mutate({ productId, quantity: stockCount });
  };

  return (
    <>
      <button
        className='basis-[50%] h-[53px] border border-black font-medium text-xl'
        onClick={onAddCartItem}
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
