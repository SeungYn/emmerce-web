import CartHeader from '@/components/cart/common/CartHeader/CartHeader';

export default function page() {
  return (
    <>
      <CartHeader currentPage='complate' />
      <div>주문이 완료되었습니다.</div>
    </>
  );
}
