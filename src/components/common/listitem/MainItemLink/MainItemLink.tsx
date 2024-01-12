'use client';

import Image from 'next/image';
import HeartIcon from '../../icons/HeartIcon';
import { Product } from '@/service/types/product';
import CustomGlobalLoadingLink from '../../customlink/CustomGlobalLoadingLink/CustomGlobalLoadingLink';

type Props = {
  item: Product;
  targetLink: string;
  handleLike?: (productId: number) => void;
  rank?: number;
  width?: number;
  height?: number;
};
// 이미지 처리 해야됨
export default function MainItemLink({
  item,
  rank,
  handleLike,
  targetLink,
  width,
  height,
}: Props) {
  const {
    productId,
    name,
    originalPrice,
    discountPrice,
    brand,
    discountRate,
    ratings,
    titleImg,
    likeCount,
  } = item;

  const isDiscount = discountRate > 0;

  return (
    <CustomGlobalLoadingLink
      className='relative cursor-pointer inline-block'
      href={targetLink}
    >
      <div>
        <div
          className={`relative shrink-0 rounded-xl overflow-hidden after:content-[""] after:absolute after:inset-0 after:border after:border-gray-300 after:rounded-xl after:z-10`}
          style={{ width, height }}
        >
          {rank && (
            <div className='absolute p-1 w-6 h-6 bg-black text-white flex justify-center items-center text-xs  rounded-br-lg z-50'>
              {rank}
            </div>
          )}
          <Image src={titleImg} alt='상품 이미지' fill sizes='200px' />
        </div>
        <div className='flex flex-col justify-center'>
          <h4 className='text-base font-bold'>{brand}</h4>
          <p className='text-sm text-gray-500 break-all line-clamp-3 leading-4'>
            {name}
          </p>
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
    </CustomGlobalLoadingLink>
  );
}
