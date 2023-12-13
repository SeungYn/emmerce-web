'use client';
import useNavigationLoadingEvent from '@/hooks/common/useNavigationLoadingEvent';
import { BeatLoader } from 'react-spinners';

export default function OrderLoading() {
  const { orderLoading: isLoading } = useNavigationLoadingEvent();
  if (!isLoading) return null;
  return (
    <div
      className='fixed w-full h-screen z-[9999] flex justify-center items-center'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className='flex flex-col justify-center items-center'>
        <BeatLoader color='#eeeeee' size='40px' />
        <h2 className='text-2xl font-bold mt-4 text-white'>
          주문 완료 처리 중입니다.
        </h2>
      </div>
    </div>
  );
}
