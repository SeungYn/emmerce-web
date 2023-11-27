import Script from 'next/script';

import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import OrderList from '@/components/order/OrderList/OrderList';
import PaymentDelivery from '@/components/order/PaymentDelivery/PaymentDelivery';

export default function page() {
  return (
    <>
      {/* 다음 주소 api */}
      <Script
        src='//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
        async
      />

      <CartHeader currentPage='order' />
      <OrderList />
      <PaymentDelivery />
    </>
  );
}
