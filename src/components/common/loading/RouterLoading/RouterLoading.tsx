'use client';
import useNavigationEvent from '@/hooks/common/useNavigationLoadingEvent';
import Image from 'next/image';

export default function RouterLoading() {
  const isLoading = useNavigationEvent();
  console.log(isLoading, 'isLoading');
  //if (!isLoading) return null;
  return (
    <div className='fixed bottom-0 left-0 z-[9999]'>
      <Image
        src='/assets/icons/double-ring.svg'
        width={70}
        height={70}
        alt='로딩이미지'
      />
    </div>
  );
}
