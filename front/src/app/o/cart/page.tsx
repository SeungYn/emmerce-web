import CartTable from '@/components/cart/CartTable/CartTable';
import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import { cartItems, items } from '@/util/mock/data/item';

export default function page() {
  return (
    <>
      <CartHeader currentPage='cart' />
      <CartTable cartItemList={cartItems} />
    </>
  );
}
