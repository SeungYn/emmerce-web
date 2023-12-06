import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import CartTableContainer from '@/container/cart/CartTableContainer/CartTableContainer';

export const dynamic = 'force-dynamic';

export default function page() {
  return (
    <>
      <CartHeader currentPage='cart' />
      <CartTableContainer />
    </>
  );
}
