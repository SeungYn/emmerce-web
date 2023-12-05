'use client';
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
      className='grid'
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
          alt='카트 상품 이미지'
          width='85'
          className='w-[85px] aspect-square'
        />
        <div className=''>
          <p>{brand}</p>
          <p>{name}</p>
          <p>옵션</p>
        </div>
      </td>

      <td>{(originalPrice * quantity).toLocaleString()}</td>
      <td className='flex items-center gap-2'>
        <div>{quantity}</div>
        <div className='flex flex-col'>
          <button onClick={() => handleUpCountCartItem(item)}>🔼</button>
          <button onClick={() => handleDownCountCartItem(item)}>🔽</button>
        </div>
      </td>
      <td>{((originalPrice - discountPrice) * quantity).toLocaleString()}원</td>
      <td>{(discountPrice * quantity).toLocaleString()}원</td>
      <td>무료배송</td>
      <td className='flex flex-col'>
        <button>바로구매</button>
        <button onClick={() => handleDeleteCartItem(item)}>삭제</button>
      </td>
    </tr>
  );
}
