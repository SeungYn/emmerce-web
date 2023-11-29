'use client';

import Link from 'next/link';
import OrderListItem from '../OrderListItem/OrderListItem';
import { useCartItemList } from '@/hooks/api/cart/useCart';
import { useEffect } from 'react';
import useInvalidCart from '@/hooks/cart/useInvalidCart';

export default function OrderList() {
  const { data: cartItemList } = useCartItemList();
  useInvalidCart();
  return (
    <section>
      <div className='flex justify-between'>
        <h3 className='text-xl font-bold mb-4 '>주문하실 상품</h3>
        <Link href='#'>장바구니가기</Link>
      </div>
      <div className='text-lg p-2 bg-zinc-600 text-white'>
        <span>개수({cartItemList.length})</span>
      </div>
      <table>
        <thead>
          <tr
            className='grid bg-gray-200 py-3'
            style={{
              gridTemplateColumns: '492px 168px 114px 168px 168px 168px ',
            }}
          >
            <th>상품명/선택사항</th>
            <th>상품금액</th>
            <th>수량</th>
            <th>할인금액</th>
            <th>주문금액</th>
            <th>배송정보</th>
          </tr>
        </thead>
        <tbody>
          {cartItemList.map((item, i) => (
            <OrderListItem key={i} item={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
