import { CartItem } from '@/service/types/cart';

type Props = {
  item: CartItem;
};

export default function CartTableItem({ item }: Props) {
  const { productId, name, titleImg, discountPrice, totalCount, totalPrice } =
    item;

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
        <input type='checkbox' name='all_cart_item' id='' />
      </td>
      <td className='flex shrink-0 justify-self-start gap-4'>
        <img
          src='/assets/slide/1.png'
          alt='카트 상품 이미지'
          className='w-[85px] aspect-square'
        />
        <div className=''>
          <p>브랜드</p>
          <p>{name}</p>
          <p>옵션</p>
        </div>
      </td>

      <td>100000000원</td>
      <td className='flex '>
        <input type='text' name='' id='' className='w-full border' />
        <div className='flex flex-col'>
          <button>🔼</button>
          <button>🔽</button>
        </div>
      </td>
      <td>{discountPrice.toLocaleString()}원</td>
      <td>{totalPrice.toLocaleString()}원</td>
      <td>무료배송</td>
      <td className='flex flex-col'>
        <button>바로구매</button>
        <button>삭제</button>
      </td>
    </tr>
  );
}
