'use client';

import { BsCart3 } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

type Props = {
  handleCloseModal: () => void;
  handleMoveCartPage: () => void;
};

export default function CartModal({
  handleCloseModal,
  handleMoveCartPage,
}: Props) {
  return (
    <div className='text-zinc-700 py-4 px-6 bg-white flex flex-col items-center'>
      <div className='self-end'>
        <button className='text-2xl' onClick={handleCloseModal}>
          <IoMdClose />
        </button>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <BsCart3 fontSize='40px' />
        <p>선택한 상품이 장바구니에 담겼습니다.</p>
      </div>
      <div className='mt-4'>
        <button
          className='p-2 px-4 bg-zinc-700 text-zinc-200 mr-2'
          onClick={handleCloseModal}
        >
          쇼핑계속하기
        </button>
        <button
          className='p-2 px-4 bg-white border border-zinc-700'
          onClick={handleMoveCartPage}
        >
          장바구니가기
        </button>
      </div>
    </div>
  );
}
