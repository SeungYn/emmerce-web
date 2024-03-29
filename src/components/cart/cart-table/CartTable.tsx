'use client';

import { CheckCartItem } from '@/service/types/cart';
import CartTableItem from '../item/CartTableItem/CartTableItem';
import CartTableHeaderBtn from './CartTableHeaderBtn';

type Props = {
  cartItemList: CheckCartItem[];
  handleCheckAllCartItems: () => void;
  handleUnCheckAllCartItems: () => void;
  handleDeleteCartItem: (checkCartItem: CheckCartItem) => void;
  handleUpCountCartItem: (checkCartItem: CheckCartItem) => void;
  handleDownCountCartItem: (checkCartItem: CheckCartItem) => void;
  handleToggleCartItem: (checkCartItem: CheckCartItem) => void;
  handleClearCart: () => void;
  handleMoveOrderPage: () => void;
};

export default function CartTable({
  cartItemList,
  handleDeleteCartItem,
  handleCheckAllCartItems,
  handleUnCheckAllCartItems,
  handleUpCountCartItem,
  handleDownCountCartItem,
  handleToggleCartItem,
  handleClearCart,
  handleMoveOrderPage,
}: Props) {
  return (
    <div>
      <div className='flex text-base gap-2 mb-3 '>
        <CartTableHeaderBtn onClick={handleCheckAllCartItems}>
          상품 전체선택
        </CartTableHeaderBtn>
        <CartTableHeaderBtn onClick={handleUnCheckAllCartItems}>
          상품 선택해지
        </CartTableHeaderBtn>
        <CartTableHeaderBtn onClick={handleClearCart}>
          전체상품 삭제
        </CartTableHeaderBtn>
      </div>

      <div className='text-lg p-2 bg-zinc-600 text-white'>
        <span>개수({cartItemList.length})</span>
      </div>
      <table>
        <thead>
          <tr
            className='grid bg-gray-200 py-3 '
            style={{
              gridTemplateColumns:
                '79px 457px 133px 79px 133px 133px 133px 133px',
            }}
          >
            <th className='text-center'>
              <input
                type='checkbox'
                name='all_cart_item'
                checked={cartItemList.every((v) => v.isCheck) ? true : false}
                onChange={(e) => {
                  const { checked } = e.target;
                  if (checked) handleCheckAllCartItems();
                  else handleUnCheckAllCartItems();
                }}
              />
            </th>
            <th className='text-center'>상품명/선택사항</th>
            <th className='text-center'>상품금액</th>
            <th className='text-center'>수량</th>
            <th className='text-center'>할인금액</th>
            <th className='text-center'>주문금액</th>
            <th className='text-center'>배송정보</th>
            <th className='text-center'>주문하기</th>
          </tr>
        </thead>
        <tbody>
          {cartItemList.map((item, i) => (
            <CartTableItem
              key={i}
              item={item}
              handleToggleCartItem={handleToggleCartItem}
              handleDeleteCartItem={handleDeleteCartItem}
              handleUpCountCartItem={handleUpCountCartItem}
              handleDownCountCartItem={handleDownCountCartItem}
            />
          ))}
        </tbody>
      </table>
      {/* 총 결제금액 및 결제버튼 */}
      <div className=''>
        <ul className='flex justify-center gap-4 border-4 border-zinc-600 text-xl py-10 text-zinc-500 items-center'>
          <li>
            총 상품금액{' '}
            <span className='text-zinc-600 font-bold'>
              {cartItemList
                .reduce((p, c) => p + c.originalPrice * c.quantity, 0)
                .toLocaleString()}
            </span>
            원
          </li>
          <li>-</li>
          <li>
            할인금액{' '}
            <span className='text-zinc-600 font-bold'>
              {cartItemList
                .reduce(
                  (p, c) =>
                    p + (c.originalPrice - c.discountPrice) * c.quantity,
                  0
                )
                .toLocaleString()}
            </span>
            원
          </li>
          <li>+</li>
          <li>
            배송비 <span className='text-zinc-600 font-bold'>0원</span>
          </li>
          <li>=</li>
          <li className='text-red-600 flex items-center gap-2 '>
            총 결제금액{' '}
            <span className='font-bold text-3xl'>
              {cartItemList
                .reduce((p, c) => p + c.discountPrice * c.quantity, 0)
                .toLocaleString()}
            </span>
            원
          </li>
        </ul>
      </div>
    </div>
  );
}
