import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import OrderList from '@/components/order/OrderList/OrderList';

export default function page() {
  return (
    <>
      <CartHeader currentPage='order' />
      <OrderList />
    </>
  );
}
