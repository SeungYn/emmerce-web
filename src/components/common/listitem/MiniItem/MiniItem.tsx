import { Product } from '@/service/types/product';
import Image from 'next/image';
import CustomGlobalLoadingLink from '../../customlink/CustomGlobalLoadingLink/CustomGlobalLoadingLink';
import { PropsWithChildren } from 'react';

type MiniItemWrapperProps = {
  width: number;
  height: number;
  className?: string;
};

export function MiniItemWrapper({
  children,
  width,
  height,
  className,
}: PropsWithChildren<MiniItemWrapperProps>) {
  return (
    <li className={`${className}`} style={{ width, height }}>
      {children}
    </li>
  );
}
MiniItemWrapper.Item = MiniItem;

type MiniItemProps = {
  product: Product;
};

export default function MiniItem({ product }: MiniItemProps) {
  const {
    productId,
    name,
    brand,
    originalPrice,
    titleImg,
    ratings,
    discountPrice,
    discountRate,
  } = product;
  return (
    <CustomGlobalLoadingLink href={`/detail/${productId}`}>
      <div className='flex gap-2 shrink-0 '>
        {/* after없이 border을 지정하면 미세 틈이 생기는데 after로 border을 해주면 커버 가능 */}
        <div className='relative shrink-0 grow-0 rounded-xl w-[110px] h-[110px] overflow-hidden after:content-[""] after:absolute after:inset-0 after:border after:border-gray-300 after:rounded-xl'>
          {/* 이미지 태그가 */}
          <Image src={titleImg} fill alt='상품 이미지' />
        </div>

        <div className='flex flex-col justify-center grow gap-1'>
          <h4 className='text-base font-bold'>{brand}</h4>
          <p className='text-sm text-gray-500 break-all line-clamp-1'>{name}</p>
          <span className='line-through text-gray-300 text-sm'>
            {originalPrice.toLocaleString()}원
          </span>
          <div className='flex justify-between text-xl font-semibold'>
            <p>{discountPrice.toLocaleString()}원</p>
            <span className='text-red-500'>{discountRate}%</span>
          </div>
        </div>
      </div>
    </CustomGlobalLoadingLink>
  );
}
