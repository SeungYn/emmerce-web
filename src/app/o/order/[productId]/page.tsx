import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import OrderListItem from '@/components/order/OrderListItem/OrderListItem';
import PaymentForm from '@/components/order/Payment/PaymentForm';
import DeliveryForm from '@/components/order/DeliveryForm/DeliveryForm';
import FinalPaymentInfoByOneContainer from '@/container/order/FinalPaymentInfoByOneContainer';
import KakaoPaymentPopUp from '@/components/payment/KakaoPaymentPopUp/KakaoPaymentPopUp';
import { serverService } from '@/service/server';
import { pick } from '@/util/lib/util';

export default async function page({
  params: { productId },
  searchParams: { stockCount },
}: {
  params: { productId: string | number };
  searchParams: { stockCount: number };
}) {
  const productDetail = await serverService.product.getProductDetail(productId);
  return (
    <>
      <CartHeader currentPage='order' />
      <section>
        <div className='flex justify-between'>
          <h3 className='text-xl font-bold mb-4 '>주문하실 상품</h3>
        </div>
        <div className='text-lg p-2 bg-zinc-600 text-white'>
          <span>개수(1)</span>
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
            <OrderListItem
              item={{
                ...pick(productDetail, [
                  'brand',
                  'productId',
                  'name',
                  'discountPrice',
                  'originalPrice',
                  'titleImg',
                ]),
                quantity: stockCount,
              }}
            />
          </tbody>
        </table>
      </section>

      {/* 배송정보 최종결제 */}

      <div className='flex gap-4 border-t border-gray-400 pt-8 mt-4'>
        <div className='w-[75%]'>
          <DeliveryForm />
          <PaymentForm />
        </div>
        <FinalPaymentInfoByOneContainer
          {...productDetail}
          stockCount={stockCount}
        />
      </div>

      {/* 팝업부분 */}
      <KakaoPaymentPopUp />
    </>
  );
}
