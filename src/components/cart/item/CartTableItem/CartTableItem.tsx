'use client';
import CustomGlobalLoadingLink from '@/components/common/customlink/CustomGlobalLoadingLink/CustomGlobalLoadingLink';
import { CheckCartItem } from '@/service/types/cart';
import Image from 'next/image';

type Props = {
  item: CheckCartItem;
  handleToggleCartItem: (cartItem: CheckCartItem) => void;
  handleDeleteCartItem: (checkCartItem: CheckCartItem) => void;
  handleUpCountCartItem: (checkCartItem: CheckCartItem) => void;
  handleDownCountCartItem: (checkCartItem: CheckCartItem) => void;
};

export default function CartTableItem({
  item,
  handleToggleCartItem,
  handleDeleteCartItem,
  handleUpCountCartItem,
  handleDownCountCartItem,
}: Props) {
  const {
    productId,
    cartProductId,
    name,
    titleImg,
    discountPrice,
    brand,
    totalCount,
    originalPrice,
    quantity,
    isCheck,
  } = item;

  return (
    <tr
      className='grid '
      style={{
        gridTemplateColumns: '79px 457px 133px 79px 133px 133px 133px 133px',
        gridAutoRows: '133px',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <td>
        <input
          type='checkbox'
          name='all_cart_item'
          checked={isCheck}
          onChange={() => {
            handleToggleCartItem(item);
          }}
        />
      </td>
      <td className='flex shrink-0 justify-self-start gap-4'>
        <Image
          src={titleImg}
          width={85}
          height={85}
          alt='카트 상품 이미지'
          className='w-[85px] aspect-square'
          sizes='85px'
        />
        <div className=''>
          <p>{brand}</p>
          <p className='line-clamp-2 leading-4'>{name}</p>
          <p>옵션</p>
        </div>
      </td>

      <td className='w-full text-center'>
        {(originalPrice * quantity).toLocaleString()}
      </td>
      <td className='flex items-center gap-2 w-full'>
        <div className='w-full text-center'>{quantity}</div>
        <div className='flex flex-col'>
          <button onClick={() => handleUpCountCartItem(item)}>🔼</button>
          <button onClick={() => handleDownCountCartItem(item)}>🔽</button>
        </div>
      </td>
      <td className='w-full text-center'>
        {((originalPrice - discountPrice) * quantity).toLocaleString()}원
      </td>
      <td className='w-full text-center'>
        {(discountPrice * quantity).toLocaleString()}원
      </td>
      <td>무료배송</td>
      <td className='flex flex-col text-sm gap-1'>
        <CustomGlobalLoadingLink
          href={`/o/order/${productId}`}
          className='px-6 py-1 bg-black text-white rounded-3xl'
        >
          바로구매
        </CustomGlobalLoadingLink>
        <button
          className='px-6 py-1 border border-gray-300 rounded-3xl'
          onClick={() => handleDeleteCartItem(item)}
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
