'use client';

import Image from 'next/image';
import HeartIcon from '../../icons/HeartIcon';
import { Product } from '@/service/types/product';
import Link from 'next/link';

type Props = {
  item: Product;
  targetLink: string;
  handleLike?: (productId: number) => void;
  rank?: number;
};
// 이미지 처리 해야됨
export default function MainItemLink({
  item,
  rank,
  handleLike,
  targetLink,
}: Props) {
  const {
    productId,
    name,

    originalPrice,
    discountPrice,
    brand,
    discountRate,
    starScore,
    titleImg,
    likeCount,
  } = item;

  const isDiscount = discountRate > 0;

  return (
    <Link className='relative cursor-pointer' href={targetLink}>
      <div onClick={() => console.log('div')}>
        <div className='relative shrink-0 rounded-xl w-[240px] overflow-hidden after:content-[""] after:absolute after:inset-0 after:border after:border-gray-400 after:rounded-xl after:z-10'>
          {rank && (
            <div className='absolute p-1 w-6 h-6 bg-black text-white flex justify-center items-center text-xs  rounded-br-lg'>
              {rank}
            </div>
          )}
          <Image
            src='/assets/slide/1.png'
            width={240}
            height={240}
            style={{ width: '240px', height: '240px' }}
            alt='상품 이미지'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h4 className='text-base font-bold'>{brand}</h4>
          <p className='text-sm text-gray-500 break-all line-clamp-3'>{name}</p>
          {!isDiscount && (
            <p>
              {discountPrice.toLocaleString()}
              <span className='text-sm'>원</span>
            </p>
          )}
          {isDiscount && (
            <>
              <span className='line-through text-gray-300 text-sm'>
                {originalPrice.toLocaleString()}
              </span>
              <div className='flex justify-between text-xl font-semibold'>
                <p>
                  {discountPrice.toLocaleString()}
                  <span className='text-sm'>원</span>
                </p>
                <span className='text-red-500'>{discountRate}%</span>
              </div>
            </>
          )}
        </div>
      </div>
      {/* 유저 정보로 좋아요 여부 필요 */}
      {handleLike && (
        <button
          className='absolute right-2 top-2 z-10'
          onClick={() => console.log('button')}
        >
          <HeartIcon className='w-6 h-6' />
        </button>
      )}
    </Link>
  );
}

type TemporaryItemType = {
  productId: number;
  brand: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  discountRate: number;
  starScore: number;
  titleImg: string;
  likeCount: number;
};
