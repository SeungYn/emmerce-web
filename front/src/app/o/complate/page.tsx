import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import OrderHistoryListItem from '@/components/order/OrderHistoryListItem/OrderHistoryListItem';
import { orderItem } from '@/util/mock/data/item';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <CartHeader currentPage='complate' />
      <section>
        <div className='flex justify-between'>
          <h3 className='text-xl font-bold mb-4 '>주문하신 상품</h3>
        </div>
        <div className='text-lg p-2 bg-zinc-600 text-white'>
          <span>개수({orderItem.orderProductRespList.length})</span>
        </div>
        <table>
          <thead>
            <tr
              className='grid bg-gray-200 py-3  [&>*]:text-center'
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
            {orderItem.orderProductRespList.map((item, i) => (
              <OrderHistoryListItem key={i} item={item} />
            ))}
          </tbody>
        </table>
      </section>

      {/* 총 결제금액 및 결제버튼 */}
      <div className=''>
        <ul className='flex justify-center gap-4 border-4 border-zinc-600 text-xl py-10 text-zinc-500 items-center'>
          <li>
            총 상품금액{' '}
            <span className='text-zinc-600 font-bold'>
              {orderItem.orderProductRespList.reduce(
                (p, c) => p + c.originalPrice * c.quantity,
                0
              )}
            </span>
            원
          </li>
          <li>-</li>
          <li>
            할인금액{' '}
            <span className='text-zinc-600 font-bold'>
              {orderItem.orderProductRespList.reduce(
                (p, c) => p + (c.originalPrice - c.discountPrice) * c.quantity,
                0
              )}
            </span>
            원
          </li>
          <li>+</li>
          <li>
            배송비 <span className='text-zinc-600 font-bold'>0원</span>
          </li>
          <li>=</li>
          <li className='text-red-600 flex items-center  '>
            총 결제금액{' '}
            <span className='font-bold text-3xl'>
              {orderItem.orderProductRespList.reduce(
                (p, c) => p + c.discountPrice * c.quantity,
                0
              )}
            </span>
            원
          </li>
        </ul>
      </div>
      <div className='text-center mt-4'>
        <Link
          href={'/'}
          className='mx-auto border-4 border-zinc-500 text-zinc-500 py-4 px-6 inline-block rounded-full text-2xl font-bold'
        >
          메인으로
        </Link>
      </div>
    </>
  );
}
