import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import OrderList from '@/components/order/OrderList/OrderList';
import PaymentDelivery from '@/components/order/PaymentDelivery/PaymentDelivery';

export default function page() {
  return (
    <>
      <CartHeader currentPage='order' />
      <OrderList />
      <PaymentDelivery />
    </>
  );
}
