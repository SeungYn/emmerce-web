'use client';
import { CheckCartItem } from '@/service/types/cart';
import Image from 'next/image';

type Props = {
  item: Pick<
    CheckCartItem,
    | 'productId'
    | 'name'
    | 'discountPrice'
    | 'originalPrice'
    | 'quantity'
    | 'titleImg'
    | 'brand'
  >;
};

export default function OrderListItem({ item }: Props) {
  const {
    productId,
    name,
    titleImg,
    discountPrice,
    brand,
    originalPrice,
    quantity,
  } = item;

  return (
    <tr
      className='grid'
      style={{
        gridTemplateColumns: '492px 168px 114px 168px 168px 168px ',
        gridAutoRows: '133px',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <td className='flex shrink-0 justify-self-start gap-4 p-2'>
        <Image
          src={titleImg}
          alt='카트 상품 이미지'
          width={85}
          height={85}
          className='w-[85px] aspect-square shrink-0'
          sizes='85px'
        />
        <div className='flex-grow'>
          <p>{brand}</p>
          <p className='leading-4 line-clamp-2'>{name}</p>
          <p>옵션</p>
        </div>
      </td>

      <td className='p-2'>{(originalPrice * quantity).toLocaleString()}</td>
      <td className='flex items-center gap-2 p-2'>
        <div>{quantity}</div>
      </td>
      <td className='p-2'>
        {((originalPrice - discountPrice) * quantity).toLocaleString()}원
      </td>
      <td className='p-2'>{(discountPrice * quantity).toLocaleString()}원</td>
      <td className='p-2'>무료배송</td>
    </tr>
  );
}
