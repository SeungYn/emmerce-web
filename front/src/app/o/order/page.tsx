import Script from 'next/script';

import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import OrderList from '@/components/order/OrderList/OrderList';
import PaymentDelivery from '@/components/order/PaymentDelivery/PaymentDelivery';

export default function page() {
  return (
    <>
      {/* 다음 주소 api */}
      <Script src='https://developers.kakao.com/sdk/js/kakao.js' async />

      <CartHeader currentPage='order' />
      <OrderList />
      <PaymentDelivery />
    </>
  );
}
