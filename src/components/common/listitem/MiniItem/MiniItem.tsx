import { Product } from '@/service/types/product';
import Image from 'next/image';
import Link from 'next/link';
import CustomGlobalLoadingLink from '../../customlink/CustomGlobalLoadingLink/CustomGlobalLoadingLink';

type Props = {
  product: Product;
};

export default function MiniItem({ product }: Props) {
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
        <div className='relative shrink-0 rounded-xl w-[110px] overflow-hidden after:content-[""] after:absolute after:inset-0 after:border after:border-gray-400 after:rounded-xl'>
          {/* 이미지 태그가 */}
          <img
            src={titleImg}
            width={111}
            height={111}
            style={{ width: '111px', height: '111px' }}
            alt='상품 이미지'
          />
        </div>

        <div className='flex flex-col justify-center grow gap-1'>
          <h4 className='text-base font-bold'>{brand}</h4>
          <p className='text-sm text-gray-500 break-all line-clamp-3'>{name}</p>
          <span className='line-through text-gray-300 text-sm'>
            {originalPrice}원
          </span>
          <div className='flex justify-between text-xl font-semibold'>
            <p>{discountPrice}원</p>
            <span className='text-red-500'>{discountRate}%</span>
          </div>
        </div>
      </div>
    </CustomGlobalLoadingLink>
  );
}
