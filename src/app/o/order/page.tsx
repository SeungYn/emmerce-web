export const dynamic = 'force-dynamic';

import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import OrderList from '@/components/order/OrderList/OrderList';
import PaymentDelivery from '@/components/order/PaymentDelivery/PaymentDelivery';
import KakaoPaymentPopUp from '@/components/payment/KakaoPaymentPopUp/KakaoPaymentPopUp';

export default function page() {
  return (
    <>
      <CartHeader currentPage='order' />
      <OrderList />
      <PaymentDelivery />
      <KakaoPaymentPopUp />
    </>
  );
}
